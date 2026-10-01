#!/usr/bin/env python3
"""Resolve exact award titles against primary proceedings and official paper links."""
import argparse
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urljoin, urlparse, parse_qs

from discover_awards import get_html, key, COLLECTED


def index_links(url, root, selector):
    soup = get_html(url, root)
    return {key(a.get_text(" ", strip=True)): urljoin(url, a["href"]) for a in soup.select(selector) if a.get("href")}


def parse_paper_page(url, root):
    soup = get_html(url, root)
    metas = {}
    for meta in soup.select("meta[name][content]"):
        metas.setdefault(meta["name"].lower(), []).append(meta["content"])
    data = {"url": url}
    if "citation_title" in metas:
        data["title"] = metas["citation_title"][0]
    if "citation_author" in metas:
        data["authors"] = metas["citation_author"]
    if "citation_pdf_url" in metas:
        data["pdf_url"] = urljoin(url, metas["citation_pdf_url"][0])
    if "pdf_url" not in data:
        pdf = soup.select_one('a[href$=".pdf"]')
        if pdf:
            data["pdf_url"] = urljoin(url, pdf["href"])
    arxiv = soup.select_one('a[href*="arxiv.org/abs/"]')
    if arxiv:
        data["arxiv_url"] = arxiv["href"].replace("http:", "https:")
        data["arxiv_id"] = arxiv["href"].split("/abs/")[-1]
    return data


def resolve(paper, indexes, root):
    exact = indexes.get((paper["venue"], paper["publication_year"]), {}).get(key(paper["title"]))
    data = {}
    if exact:
        data = parse_paper_page(exact, root)
        if data.get("title") and key(data["title"]) != key(paper["title"]):
            raise ValueError("Primary metadata title differs from the award title")
    if not data.get("pdf_url") and paper.get("event_url"):
        event = paper["event_url"]
        if "openreview.net/forum" in event:
            data.update(url=event, pdf_url=event.replace("/forum?", "/pdf?"), pdf_version="OpenReview conference submission")
        else:
            soup = get_html(event, root)
            links = [urljoin(event, a["href"]) for a in soup.select("a[href]")]
            proceedings = next((u for u in links if "proceedings.mlr.press/" in u and u.endswith(".html")), None)
            if proceedings:
                data = parse_paper_page(proceedings, root)
            if not data.get("pdf_url"):
                pdf = next((u for u in links if "openreview.net/pdf?id=" in u), None)
                forum = next((u for u in links if "openreview.net/forum?id=" in u), None)
                arxiv = next((u for u in links if "arxiv.org/abs/" in u), None)
                if pdf or forum:
                    data.update(url=forum or event, pdf_url=pdf or forum.replace("/forum?", "/pdf?"),
                                pdf_version="OpenReview conference submission")
                elif arxiv:
                    data.update(url=arxiv, pdf_url=arxiv.replace("/abs/", "/pdf/"), pdf_version="arXiv available version")
                if arxiv:
                    data.update(arxiv_url=arxiv, arxiv_id=arxiv.split("/abs/")[-1])
    if not data.get("pdf_url"):
        raise ValueError("No exact primary proceedings match or official PDF link found")
    result = {**paper, **data, "status": "source_link_resolved"}
    result.setdefault("pdf_version", "Official proceedings PDF")
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    args = parser.parse_args()
    root = args.root.resolve()
    path = root / "data/award_inventory.json"
    inventory = json.loads(path.read_text())
    existing = {key(p["title"]): p for p in json.loads((root / "data/papers.json").read_text())}
    todo = [p for p in inventory["papers"] if p["priority_batch"] and not p.get("pdf_url")]
    jobs = {}
    for paper in todo:
        v, y = paper["venue"], paper["publication_year"]
        if v in ["CVPR", "ICCV"]:
            jobs[(v, y)] = (f"https://openaccess.thecvf.com/{v}{y}?day=all", ".ptitle a")
        elif v == "ECCV":
            jobs[(v, y)] = ("https://www.ecva.net/papers.php", "a[href]")
        elif v == "ICML" and y in [2024, 2025]:
            volume = {2024: 235, 2025: 267}[y]
            jobs[(v, y)] = (f"https://proceedings.mlr.press/v{volume}/", ".title")
        elif v == "ACL":
            jobs[(v, y)] = (f"https://aclanthology.org/events/acl-{y}/", 'a[href]')
    indexes = {}
    def build(job):
        scope, (url, selector) = job
        if scope[0] == "ICML":
            soup = get_html(url, root)
            values = {}
            for title in soup.select("p.title"):
                abstract = title.parent.select_one('a[href$=".html"]')
                if abstract:
                    values[key(title.get_text(" ", strip=True))] = urljoin(url, abstract["href"])
            return scope, values
        return scope, index_links(url, root, selector)
    with ThreadPoolExecutor(max_workers=3) as pool:
        for future in as_completed([pool.submit(build, j) for j in jobs.items()]):
            try:
                scope, values = future.result()
                indexes[scope] = values
                print(f"Indexed {scope}: {len(values)} titles", flush=True)
            except Exception as error:
                print(f"Index unavailable: {error}", flush=True)
    def run(paper):
        if key(paper["title"]) in existing:
            original = existing[key(paper["title"])]
            return {**paper, **original, "status": "included"}
        try:
            return resolve(paper, indexes, root)
        except Exception as error:
            return {**paper, "status": "resolution_pending", "resolution_error": str(error)}
    results = {}
    with ThreadPoolExecutor(max_workers=4) as pool:
        for paper in pool.map(run, todo):
            results[(paper["venue"], paper["publication_year"], key(paper["title"]))] = paper
            print(f"{paper['status']}: {paper['title'][:80]}", flush=True)
    inventory["papers"] = [results.get((p["venue"], p["publication_year"], key(p["title"])), p) for p in inventory["papers"]]
    path.write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + "\n")
    from collections import Counter
    print(dict(Counter(p["status"] for p in inventory["papers"])))


if __name__ == "__main__":
    main()
