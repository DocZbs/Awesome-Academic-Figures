#!/usr/bin/env python3
"""Bind gallery figures to preserved OpenReview note metadata, never to PDF bytes.

The snapshot is a third-party mirror of API output; this script deliberately marks
live verification unavailable rather than pretending the mirror is a live API.
Run on the staging server so full metadata snapshots do not accumulate locally.
"""
import argparse
import hashlib
import json
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import parse_qs, urlparse

COMMIT = "fbdff7620fc15b8429a4626aaf5b012f8dd08837"
BASE = "https://raw.githubusercontent.com/qwdwqfwq/topconf-paper-figure-gallery/" + COMMIT
FILES = [f"iclr2024_{x}.json" for x in (0, 1000, 2000)] + [f"iclr2025_{x}.json" for x in (0, 1000, 2000, 3000)]


def normalize(text):
    return re.sub(r"[^a-z0-9]", "", text.lower())


def value(obj):
    return obj.get("value") if isinstance(obj, dict) else obj


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args()
    root = args.root
    figures = json.loads((root / "data/external/topconf/figures.json").read_text())
    cache = root / "cache/openreview-snapshots"
    cache.mkdir(parents=True, exist_ok=True)

    def read(name):
        target = cache / name
        url = BASE + "/data/openreview/" + name
        if not target.exists():
            with urllib.request.urlopen(url, timeout=60) as response:
                target.write_bytes(response.read())
        blob = target.read_bytes()
        return name, url, hashlib.sha256(blob).hexdigest(), json.loads(blob)["notes"]

    indexed = {}
    for name, url, checksum, notes in ThreadPoolExecutor(max_workers=3).map(read, FILES):
        for note in notes:
            indexed[note["id"]] = (note, url, checksum)
    records = []
    for figure in figures:
        if figure["venue"] != "iclr" or figure["year"] not in (2024, 2025):
            continue
        note_id = parse_qs(urlparse(figure["paper"]).query).get("id", [None])[0]
        record = {"id": figure["id"], "paper": figure["paper"], "pdf_source": figure.get("pdf_source"),
                  "openreview_id": note_id, "live_verification": "unavailable_http_403",
                  "source_commit": COMMIT, "status": "pending_snapshot_match"}
        if note_id not in indexed:
            record["status"] = "snapshot_note_missing"
            records.append(record)
            continue
        note, mirror_url, checksum = indexed[note_id]
        content = note["content"]
        pdf = value(content.get("pdf"))
        official_pdf = "https://openreview.net" + pdf if pdf and pdf.startswith("/") else pdf
        title = value(content.get("title")) or ""
        same_title = normalize(title) == normalize(figure["title"])
        source = figure.get("pdf_source", "")
        same_pdf = source == official_pdf
        id_bound = source == "https://openreview.net/pdf?id=" + str(note_id)
        public = "everyone" in note.get("readers", [])
        license_name = note.get("license") or value(content.get("license"))
        approved = license_name in {"CC BY 4.0", "CC0 1.0", "CC0"}
        record.update({"note_title": title, "note_license": license_name,
                       "snapshot_url": mirror_url, "snapshot_sha256": checksum,
                       "primary_api_url": "https://api2.openreview.net/notes?id=" + str(note_id),
                       "primary_forum_url": figure["paper"], "official_pdf_url": official_pdf,
                       "public": public, "title_matches": same_title,
                       "source_binding": "exact_version_pdf" if same_pdf else "forum_current_pdf" if id_bound else "mismatch",
                       "published_at": note.get("pdate"), "modified_at": note.get("mdate"),
                       "venue": value(content.get("venue")), "venueid": value(content.get("venueid")),
                       "authors": value(content.get("authors"))})
        if same_title and public and approved and (same_pdf or id_bound):
            record["status"] = "permissive_license_in_preserved_note"
        else:
            record["status"] = "license_or_binding_unresolved"
        records.append(record)
    out = root / "data/external/topconf/bulk_openreview_audit.json"
    out.write_text(json.dumps({"schema_version": "1.0", "verification_kind": "preserved_api_response_mirror",
        "caveat": "Not a live OpenReview API verification. Assets remain pending primary-license confirmation when required.",
        "counts": {status: sum(x["status"] == status for x in records) for status in sorted({x["status"] for x in records})},
        "records": records}, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"path": str(out), "records": len(records), "permissive": sum(x["status"] == "permissive_license_in_preserved_note" for x in records)}), flush=True)


if __name__ == "__main__":
    main()
