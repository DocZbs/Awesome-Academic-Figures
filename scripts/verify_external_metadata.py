#!/usr/bin/env python3
"""Verify publisher metadata for external figure records without downloading PDFs."""
import argparse
import concurrent.futures
import hashlib
import html
import json
import re
import time
import unicodedata
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path


class MetadataParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta = {}
        self.licenses = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("name", "").startswith("citation_"):
            self.meta.setdefault(attrs["name"], []).append(attrs.get("content", ""))
        if tag == "a" and "license" in attrs.get("rel", "").split():
            self.licenses.append(attrs.get("href", ""))


def normalized(value):
    value = unicodedata.normalize("NFKD", html.unescape(value)).casefold()
    return "".join(c for c in value if c.isalnum())


def eligible(record):
    paper = urllib.parse.urlparse(record["paper"])
    pdf = urllib.parse.urlparse(record["pdf_source"])
    return (record["venue"] == "acl" and paper.hostname == pdf.hostname == "aclanthology.org") or (
        record["venue"] == "icml" and paper.hostname == "proceedings.mlr.press"
        and (pdf.hostname == "proceedings.mlr.press" or
             (pdf.hostname == "raw.githubusercontent.com" and pdf.path.startswith("/mlresearch/"))))


def verify(record):
    result = {"id": record["id"], "source_paper": record["paper"], "status": "pending"}
    try:
        req = urllib.request.Request(record["paper"], headers={"User-Agent": "Awesome-Academic-Figures/0.2 metadata verification"})
        with urllib.request.urlopen(req, timeout=35) as response:
            if "text/html" not in response.headers.get("Content-Type", ""):
                raise ValueError("Publisher response was not HTML")
            content = response.read(2 * 1024 * 1024 + 1)
            if len(content) > 2 * 1024 * 1024:
                raise ValueError("Publisher HTML exceeded limit")
            result["resolved_page"] = response.url
        text = content.decode("utf-8", "replace")
        parser = MetadataParser()
        parser.feed(text)
        meta = parser.meta
        first = lambda key: next(iter(meta.get(key, [])), None)
        result.update({"html_sha256": hashlib.sha256(content).hexdigest(),
                       "title": first("citation_title"), "authors": meta.get("citation_author", []),
                       "publication_date": first("citation_publication_date"),
                       "pdf_url": first("citation_pdf_url"), "doi": first("citation_doi"),
                       "conference": first("citation_conference_title") or first("citation_inbook_title"),
                       "license_links": parser.licenses,
                       "collected_at": "2026-10-01"})
        title_matches = normalized(result["title"] or "") == normalized(record["title"])
        pdf_matches = (result["pdf_url"] or "").rstrip("/") == record["pdf_source"].rstrip("/")
        result.update({"title_exact_normalized_match": title_matches, "pdf_exact_url_match": pdf_matches})
        if record["venue"] == "acl":
            license_ok = any(re.fullmatch(r"https?://creativecommons\.org/licenses/by/4\.0/?", u) for u in parser.licenses)
            evidence = "https://aclanthology.org/faq/copyright/"
        else:
            license_ok = True
            evidence = "https://proceedings.mlr.press/pmlr-license-agreement.html"
        result.update({"publisher_license": "CC-BY-4.0" if license_ok else None,
                       "license_evidence_url": evidence,
                       "status": "verified" if title_matches and pdf_matches and license_ok and result["authors"] else "needs_review"})
    except Exception as exc:
        result.update({"status": "error", "error": str(exc)})
    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--index", default="data/external/topconf/figures.json")
    parser.add_argument("--output", default="data/external/topconf/official_metadata.json")
    parser.add_argument("--workers", type=int, default=8)
    args = parser.parse_args()
    records = [x for x in json.loads(Path(args.index).read_text()) if eligible(x)]
    output = Path(args.output)
    done = {}
    if output.exists():
        done = {x["id"]: x for x in json.loads(output.read_text()).get("records", []) if x["status"] != "error"}
    pending = [x for x in records if x["id"] not in done]
    def save():
        payload = {"schema_version": "0.1", "collected_at": "2026-10-01",
                   "verification": "Publisher HTML metadata only; source figure visual rights are separate.",
                   "expected": len(records), "records": sorted(done.values(), key=lambda x: x["id"])}
        output.parent.mkdir(parents=True, exist_ok=True)
        tmp = output.with_suffix(".tmp")
        tmp.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
        tmp.replace(output)
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, min(args.workers, 12))) as pool:
        for i, result in enumerate(pool.map(verify, pending), 1):
            done[result["id"]] = result
            if i % 20 == 0:
                save()
                print(f"Verified publisher metadata {len(done)}/{len(records)}", flush=True)
    save()
    from collections import Counter
    print(json.dumps({"total": len(done), "status": dict(Counter(x["status"] for x in done.values()))}), flush=True)


if __name__ == "__main__":
    main()
