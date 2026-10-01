#!/usr/bin/env python3
"""Discover award records from official conference pages; never infer missing awards."""
import argparse
import hashlib
import json
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import urljoin

from bs4 import BeautifulSoup

COLLECTED = "2026-10-01"
CVF = "https://www.thecvf.com/?page_id=413"


def key(text):
    return re.sub(r"[^a-z0-9]", "", text.casefold())


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", text.casefold()).strip("-")[:90]


def get_html(url, root):
    path = root / "cache/html" / (hashlib.sha256(url.encode()).hexdigest() + ".html")
    if not path.exists():
        request = urllib.request.Request(url, headers={"User-Agent": "Awesome-Academic-Figures/0.2"})
        data = urllib.request.urlopen(request, timeout=35).read()
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
    return BeautifulSoup(path.read_bytes(), "html.parser")


def award(category, source, year):
    return {"category": slug(category), "official_name": category,
            "award_year": year, "official_source_url": source, "verified_at": COLLECTED}


def record(title, venue, year, authors, name, source, event=None, priority=True):
    return {"id": f"{venue.lower()}-{year}-{slug(title)}", "title": title,
            "authors": authors, "venue": venue, "publication_year": year,
            "track": "main", "event_url": event, "awards": [award(name, source, year)],
            "collected_at": COLLECTED, "status": "queued", "priority_batch": priority}


def cvf_records(root):
    soup = get_html(CVF, root)
    records = []
    for heading in soup.select("h1,h2,h3"):
        label = heading.get_text(" ", strip=True)
        if not re.match(r"^(CVPR|ICCV|ECCV) Best (Paper|Student Paper)", label):
            continue
        venue = label.split()[0]
        for row in heading.find_next("table").select("tr"):
            cells = row.select("td")
            if len(cells) < 3 or not cells[0].get_text(strip=True).isdigit():
                continue
            year = int(cells[0].get_text(strip=True))
            if not 2020 <= year <= 2026:
                continue
            title = cells[1].get_text(" ", strip=True)
            title = re.sub(r"\s*\((Student Paper|Honorable Mention)\)\s*$", "", title).strip('“”" ')
            names = [a.strip() for a in cells[2].get_text(" ", strip=True).split(",")]
            priority = "Honorable Mention" not in label
            records.append(record(title, venue, year, names, label, CVF, priority=priority))
    return records


def virtual_records(venue, year, root):
    host = {"ICML": "icml.cc", "NeurIPS": "neurips.cc", "ICLR": "iclr.cc"}[venue]
    source = f"https://{host}/virtual/{year}/awards_detail"
    if venue == "NeurIPS" and year == 2025:
        source = "https://neurips.cc/virtual/2025/loc/atlanta/awards_detail"
    soup = get_html(source, root)
    records = []
    for row in soup.select("tr"):
        title = row.select_one("a.small-title")
        cells = row.select("td")
        if title is None or len(cells) < 2:
            continue
        label = cells[0].get_text(" ", strip=True)
        if "Paper" not in label or "Test of Time" in label or "Highlight" in label:
            continue
        authors = row.select_one(".author-str")
        text = title.get_text(" ", strip=True)
        priority = not text.startswith("Position:")
        item = record(text, venue, year,
                      authors.get_text(strip=True).split(" · ") if authors else [],
                      label, source, urljoin(source, title["href"]), priority)
        if text.startswith("Position:"):
            item["track"] = "position"
        if "Datasets" in label or "DB track" in label:
            item["track"] = "datasets-and-benchmarks"
        records.append(item)
    return records


def acl_records(root):
    source = "https://2025.aclweb.org/program/awards/"
    soup = get_html(source, root)
    records = []
    allowed = {"Best Paper", "Best Social Impact Paper", "Best Resource Paper", "Best Theme Paper", "Outstanding Papers"}
    label = None
    for element in soup.select("h2,li"):
        if element.name == "h2":
            label = element.get_text(" ", strip=True)
        elif label in allowed:
            lines = list(element.stripped_strings)
            if len(lines) < 2:
                continue
            records.append(record(lines[0], "ACL", 2025, [a.strip() for a in " ".join(lines[1:]).split(",")],
                                  label, source, priority=label == "Best Paper"))
    return records


def blog_records(venue, year, source, root):
    body = get_html(source, root).select_one(".entry-content")
    found = []
    label = "Best Paper" if venue == "NeurIPS" else "Outstanding Paper"
    if venue == "ICML":
        # The introductory list ends before the first detailed section.
        for element in body.select("p,h2"):
            if element.name == "h2":
                break
            strong = element.select_one("b")
            if strong and "ICML 2026" in strong.get_text():
                label = strong.get_text(strip=True).replace("ICML 2026 ", "")
            link = element.select_one('a[href*="icml.cc/virtual/2026/"]')
            if link:
                title = link.get_text(" ", strip=True)
                authors = element.get_text(" ", strip=True).removeprefix(title).strip()
                item = record(title, venue, year, [a.strip() for a in authors.split(",")], label, source, link["href"],
                              priority="Honorable" not in label and "Position" not in label)
                if "Position" in label:
                    item["track"] = "position"
                found.append(item)
    else:
        for element in body.select("h2,h3,p,li"):
            text = element.get_text(" ", strip=True)
            if element.name in ("h2", "h3") and text in ["Outstanding Papers", "Honorable Mentions", "Honorable Mention", "Runners Up"]:
                label = {"Outstanding Papers": "Outstanding Paper", "Honorable Mentions": "Honorable Mention",
                         "Honorable Mention": "Honorable Mention", "Runners Up": "Best Paper Runner-up"}[text]
            link = element.select_one('a[href*="openreview.net/forum?id="]')
            if not link or element.name not in ("p", "li"):
                continue
            title = link.get_text(" ", strip=True).rstrip(".")
            authors = text.removeprefix(link.get_text(" ", strip=True)).strip(", .").removeprefix("by ")
            if venue == "NeurIPS":
                author_element = element.find_next_sibling()
                authors = author_element.get_text(" ", strip=True)
            item = record(title, venue, year, [a.strip().rstrip(".") for a in authors.split(",")], label, source, link["href"],
                          priority="Honorable" not in label)
            if title.startswith("Artificial Hivemind"):
                item["track"] = "datasets-and-benchmarks"
                item["awards"][0]["official_name"] = "Best Paper (Datasets and Benchmarks)"
            found.append(item)
    return found


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    args = parser.parse_args()
    root = args.root.resolve()
    inventory = root / "data/award_inventory.json"
    previous = json.loads(inventory.read_text()) if inventory.exists() else {"papers": []}
    old = {(p["venue"], p["publication_year"], key(p["title"])): p for p in previous["papers"]}
    sources, found = [], []
    jobs = [("CVF 2020–2026", lambda: cvf_records(root)), ("ACL 2025", lambda: acl_records(root))]
    for venue, years in [("ICML", [2024, 2025]), ("NeurIPS", [2024]), ("ICLR", [2024])]:
        for year in years:
            jobs.append((f"{venue} {year}", lambda v=venue, y=year: virtual_records(v, y, root)))
    blogs = [("ICML", 2026, "https://blog.icml.cc/2026/07/05/announcing-the-icml-2026-awards/"),
             ("NeurIPS", 2025, "https://blog.neurips.cc/2025/11/26/announcing-the-neurips-2025-best-paper-awards/"),
             ("ICLR", 2025, "https://blog.iclr.cc/2025/04/22/announcing-the-outstanding-paper-awards-at-iclr-2025/"),
             ("ICLR", 2026, "https://blog.iclr.cc/2026/04/23/announcing-the-iclr-2026-outstanding-papers/")]
    for venue, year, url in blogs:
        jobs.append((f"{venue} {year} official blog", lambda v=venue, y=year, u=url: blog_records(v, y, u, root)))
    def run(job):
        label, task = job
        try:
            result = task()
            return label, result, None
        except Exception as error:
            return label, [], str(error)
    with ThreadPoolExecutor(max_workers=3) as pool:
        for label, result, error in pool.map(run, jobs):
            sources.append({"scope": label, "status": "discovered" if result else "needs_followup", "record_count": len(result), "error": error})
            found.extend(result)
            print(f"{label}: {len(result)} award records" + (f" ({error})" if error else ""))
    deduplicated = {}
    for paper in found:
        k = (paper["venue"], paper["publication_year"], key(paper["title"]))
        if k in deduplicated:
            existing = deduplicated[k]
            for a in paper["awards"]:
                if a not in existing["awards"]:
                    existing["awards"].append(a)
            if paper.get("event_url") and "/poster/" in paper["event_url"]:
                existing["event_url"] = paper["event_url"]
        else:
            deduplicated[k] = {**paper, **old.get(k, {})}
    value = {"checked_at": COLLECTED, "scope": "2020–2026 official award inventory; coverage remains partial",
             "sources": sources, "papers": sorted(deduplicated.values(), key=lambda p: (-p["publication_year"], p["venue"], p["title"]))}
    inventory.parent.mkdir(exist_ok=True)
    inventory.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")
    print(f"Unique papers: {len(value['papers'])}; priority batch: {sum(p['priority_batch'] for p in value['papers'])}")


if __name__ == "__main__":
    main()
