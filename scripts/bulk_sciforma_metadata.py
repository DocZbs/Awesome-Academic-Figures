#!/usr/bin/env python3
"""Resolve arXiv metadata and AI subject scope for staged SciForma diagram rows.

No source/image/PDF download. Keep paper-license observations separate from the
individual hosted diagram's source-dataset license. Unnumbered figures stay so.
"""
import argparse
import hashlib
import json
import re
import time
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

from bs4 import BeautifulSoup

AI_CATEGORIES = {"cs.AI", "cs.CL", "cs.CV", "cs.LG", "stat.ML"}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--max-papers", type=int, default=543)
    parser.add_argument("--proxy")
    parser.add_argument("--atom", action="store_true", help="Resolve 100 unique papers per API call, with a 3-second interval")
    args = parser.parse_args()
    directory = args.root / "data/external/sciforma"
    candidates = json.loads((directory / "bulk_candidates.json").read_text())
    metadata_path = directory / "bulk_paper_metadata.json"
    metadata = json.loads(metadata_path.read_text()) if metadata_path.exists() else {}
    cache = args.root / "cache/sciforma-arxiv"
    cache.mkdir(parents=True, exist_ok=True)
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({"http": args.proxy, "https": args.proxy})) if args.proxy else urllib.request.build_opener()
    identifiers = list(dict.fromkeys(x["paper_id"] for x in candidates["records"]))[:args.max_papers]

    def save():
        metadata_path.write_text(json.dumps(metadata, ensure_ascii=False, indent=2)+"\n")
        eligible = []
        for row in candidates["records"]:
            paper = metadata.get(row["paper_id"], {})
            if paper.get("ai_category_confirmed") and paper.get("title") and paper.get("authors"):
                item = dict(row)
                item.update({"title": paper["title"], "authors": paper["authors"], "venue": "arXiv",
                    "collection": "open-ai-research", "arxiv_first_submitted_at": paper.get("first_submitted_at"),
                    "arxiv_updated_at": paper.get("updated_at"), "arxiv_current_version_observed": paper.get("version"),
                    "arxiv_subjects": paper["categories"], "ai_scope_verification": "arxiv_subject_category",
                    "paper_metadata_url": paper["url"], "paper_metadata_sha256": paper.get("html_sha256") or paper.get("atom_sha256"),
                    "paper_metadata_checked_at": "2026-10-01", "review_status": "upstream_dataset_license_verified",
                    "figure_number_verification": "unresolved", "source_license_evidence_kind": "frozen_dataset_row_license"})
                eligible.append(item)
        (directory / "bulk_ai_eligible.json").write_text(json.dumps({"source": candidates["source"],
            "revision": candidates["revision"], "scope": "AI/ML methodology diagrams from papers with confirmed arXiv AI/ML subject tags. Original figure numbers remain unknown.",
            "count": len(eligible), "paper_count": len({x["paper_id"] for x in eligible}), "records": eligible}, ensure_ascii=False, indent=2)+"\n")
        return len(eligible)

    if args.atom:
        namespaces = {"a": "http://www.w3.org/2005/Atom", "ar": "http://arxiv.org/schemas/atom"}
        for start in range(0, len(identifiers), 100):
            batch = identifiers[start:start+100]
            url = "https://export.arxiv.org/api/query?id_list="+",".join(batch)+"&max_results=100"
            target = cache / ("atom-"+hashlib.sha256(url.encode()).hexdigest()[:16]+".xml")
            try:
                if target.exists():
                    blob = target.read_bytes()
                else:
                    with opener.open(url, timeout=40) as response:
                        blob = response.read(1024*1024)
                    target.write_bytes(blob)
                feed = ET.fromstring(blob)
                for entry in feed.findall("a:entry", namespaces):
                    version = entry.findtext("a:id", default="", namespaces=namespaces).rsplit("/", 1)[-1]
                    identifier = re.sub(r"v\d+$", "", version)
                    if identifier not in batch:
                        continue
                    categories = [node.get("term") for node in entry.findall("a:category", namespaces)]
                    title = " ".join(entry.findtext("a:title", default="", namespaces=namespaces).split())
                    authors = [node.findtext("a:name", namespaces=namespaces) for node in entry.findall("a:author", namespaces)]
                    metadata[identifier] = {"url": "https://arxiv.org/abs/"+identifier,
                        "title": title, "authors": authors, "categories": categories,
                        "ai_category_confirmed": bool(AI_CATEGORIES.intersection(categories)),
                        "first_submitted_at": entry.findtext("a:published", namespaces=namespaces),
                        "updated_at": entry.findtext("a:updated", namespaces=namespaces), "version": version,
                        "comments": entry.findtext("ar:comment", namespaces=namespaces),
                        "journal_reference": entry.findtext("ar:journal_ref", namespaces=namespaces),
                        "doi": entry.findtext("ar:doi", namespaces=namespaces),
                        "abstract": " ".join(entry.findtext("a:summary", default="", namespaces=namespaces).split()),
                        "metadata_api_url": url, "atom_sha256": hashlib.sha256(blob).hexdigest(),
                        "status": "resolved" if title and authors else "metadata_missing"}
            except Exception as exc:
                print(json.dumps({"batch_error": str(exc), "offset": start, "progress_saved": save()}), flush=True)
                break
            print(json.dumps({"processed": min(start+100, len(identifiers)), "eligible_diagrams": save(),
                "resolved_papers": sum(x.get("status") == "resolved" for x in metadata.values())}), flush=True)
            time.sleep(3)
        print(json.dumps({"eligible_diagrams": save(), "metadata_papers": len(metadata), "output": str(directory / "bulk_ai_eligible.json")}), flush=True)
        return

    for index, identifier in enumerate(identifiers, 1):
        if metadata.get(identifier, {}).get("title"):
            continue
        url = "https://arxiv.org/abs/"+identifier
        path = cache / (identifier+".html")
        try:
            if path.exists():
                blob = path.read_bytes()
            else:
                req = urllib.request.Request(url, headers={"User-Agent": "Awesome-Academic-Figures metadata collector (https://github.com/DocZbs/Awesome-Academic-Figures)"})
                with opener.open(req, timeout=20) as response:
                    blob = response.read(300*1024)
                path.write_bytes(blob)
            soup = BeautifulSoup(blob, "html.parser")
            def meta(name):
                node = soup.select_one('meta[name="'+name+'"]')
                return node.get("content") if node else None
            title = meta("citation_title")
            authors = [x.get("content") for x in soup.select('meta[name="citation_author"]')]
            node = soup.select_one(".subjects")
            categories = re.findall(r"\(([a-z-]+\.[A-Z]+)\)", node.get_text(" ", strip=True)) if node else []
            first = meta("citation_date")
            versions = re.findall(r"\[v(\d+)\]", soup.get_text())
            history = soup.select_one(".submission-history")
            latest_date = None
            if history:
                lines = [x.strip() for x in history.get_text("\n", strip=True).splitlines()]
                latest_date = lines[-1] if lines else None
            metadata[identifier] = {"url": url, "title": title, "authors": authors,
                "categories": categories, "ai_category_confirmed": bool(AI_CATEGORIES.intersection(categories)),
                "first_submitted_at": first.replace("/", "-") if first else None,
                "updated_at": latest_date, "version": identifier+"v"+str(max(map(int, versions))) if versions else None,
                "html_sha256": hashlib.sha256(blob).hexdigest(), "status": "resolved" if title and authors else "metadata_missing"}
        except Exception as exc:
            metadata[identifier] = {"url": url, "status": "resolution_error", "error": str(exc)}
            if "429" in str(exc):
                print(json.dumps({"stopped": "rate_limited", "processed": index, "eligible": save()}), flush=True)
                break
        # HTML requests are sequential and at most one starts every second.
        count = save()
        if index % 20 == 0:
            print(json.dumps({"processed": index, "eligible_diagrams": count,
                "resolved_papers": sum(x.get("status") == "resolved" for x in metadata.values())}), flush=True)
        time.sleep(1)
    print(json.dumps({"eligible_diagrams": save(), "metadata_papers": len(metadata), "output": str(directory / "bulk_ai_eligible.json")}), flush=True)


if __name__ == "__main__":
    main()
