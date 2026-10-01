#!/usr/bin/env python3
"""Fetch licensed diagram metadata in bounded slices; no image/PDF downloads.

Use on SSH staging host. Every candidate retains the exact hosted-image row and
dataset revision. Unknown original figure numbers are deliberately left null.
"""
import argparse
import concurrent.futures
import hashlib
import json
import re
import time
import urllib.parse
import urllib.request
import urllib.error
from pathlib import Path

DATASET = "microsoft/SciFormaData-700K"
CONFIG = "generation_1024"
ALLOWED = {"CC-BY-4.0": "https://creativecommons.org/licenses/by/4.0/", "CC0-1.0": "https://creativecommons.org/publicdomain/zero/1.0/"}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--target", type=int, default=1000)
    parser.add_argument("--offset", type=int, default=500000)
    parser.add_argument("--max-pages", type=int, default=200)
    parser.add_argument("--proxy")
    args = parser.parse_args()
    root = args.root
    directory = root / "data/external/sciforma"
    directory.mkdir(parents=True, exist_ok=True)
    out = directory / "bulk_candidates.json"
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({"http": args.proxy, "https": args.proxy})) if args.proxy else urllib.request.build_opener()

    def request(url):
        for retry in range(3):
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "Awesome-Academic-Figures/metadata-collection"})
                with opener.open(req, timeout=50) as response:
                    return json.load(response)
            except urllib.error.HTTPError as exc:
                if exc.code == 429:
                    # Preserve progress and stop the run. Repeated brief retries
                    # do not satisfy the service's rate limit or Retry-After.
                    raise RuntimeError("rate_limited; resume after Retry-After=" + exc.headers.get("Retry-After", "300")) from exc
                if retry == 2:
                    raise
                time.sleep(1+retry)
            except Exception:
                if retry == 2:
                    raise
                time.sleep(1+retry)

    revision = request("https://huggingface.co/api/datasets/" + DATASET).get("sha")
    records, seen = [], set()
    evidence = {"source": "https://huggingface.co/datasets/" + DATASET,
        "revision": revision, "configuration": CONFIG, "split": "train",
        "license_policy": "Hosted images have individually audited source licenses; null images/licenses are excluded.",
        "collection": "开放论文扩展库", "scope": "Scientific methodology diagrams. Conference and award status unverified; original figure number unknown when null.",
        "prompt_origin": "Dataset structured generation caption, not a manually reviewed reconstruction.",
        "records": records}

    def page(offset):
        url = "https://datasets-server.huggingface.co/rows?" + urllib.parse.urlencode({"dataset": DATASET, "config": CONFIG, "split": "train", "offset": offset, "length": 100})
        return url, request(url)

    errors = []
    for start in range(args.offset, args.offset + args.max_pages*100, 600):
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
            futures = {pool.submit(page, offset): offset for offset in range(start, min(start+600, args.offset+args.max_pages*100), 100)}
            results = []
            for future in concurrent.futures.as_completed(futures):
                try:
                    results.append((futures[future], future.result()))
                except Exception as exc:
                    errors.append({"offset": futures[future], "error": str(exc)})
            for _, (url, payload) in sorted(results):
                for wrapped in payload.get("rows", []):
                    row = wrapped["row"]
                    if row.get("license") not in ALLOWED or not row.get("image") or not row.get("caption"):
                        continue
                    if row.get("quality_tier") == "Low":
                        continue
                    paper_id = row["paper_id"]
                    caption = row["caption"]
                    fingerprint = hashlib.sha256((paper_id+"\n"+caption).encode()).hexdigest()
                    if fingerprint in seen:
                        continue
                    seen.add(fingerprint)
                    index = wrapped["row_idx"]
                    records.append({"id": "sciforma-" + str(index), "paper_id": paper_id,
                        "arxiv_url": "https://arxiv.org/abs/"+paper_id, "title": None, "authors": [],
                        "year": 2000+int(paper_id[:2]) if re.match(r"\d\d\d\d\.", paper_id) else None,
                        "venue": None, "award": None, "collection": "开放论文扩展库",
                        "figure_number": row.get("figure_number"), "figure_number_verification": "source_dataset" if row.get("figure_number") else "unresolved",
                        "license": row["license"], "license_url": ALLOWED[row["license"]],
                        "license_evidence_url": "https://huggingface.co/datasets/"+DATASET+"/blob/"+str(revision)+"/README.md",
                        "license_verification": "dataset_audited_hosted_row", "dataset_revision": revision,
                        "row_index": index, "row_api_url": url, "image_url": row["image"]["src"],
                        "width": row["image"]["width"], "height": row["image"]["height"],
                        "quality_tier": row.get("quality_tier"), "is_tikz": row.get("is_tikz"),
                        "prompt_text": caption, "prompt_verification": "dataset_generated_description",
                        "caption_sha256": hashlib.sha256(caption.encode()).hexdigest(),
                        "original_vector_available": False, "review_status": "dataset_reviewed_not_manually_reviewed_here"})
                    if len(records) >= args.target:
                        break
                if len(records) >= args.target:
                    break
        evidence["errors"] = errors
        evidence["count"] = len(records)
        evidence["next_offset"] = start+600
        out.write_text(json.dumps(evidence, ensure_ascii=False, indent=2)+"\n")
        print(json.dumps({"count": len(records), "offset": start, "errors": len(errors)}), flush=True)
        if any("rate_limited" in x["error"] for x in errors):
            print(json.dumps({"stopped": "rate_limited", "progress_saved": str(out)}), flush=True)
            break
        if len(records) >= args.target:
            break
        time.sleep(0.3)
    print(json.dumps({"complete": len(records) >= args.target, "path": str(out), "count": len(records)}), flush=True)


if __name__ == "__main__":
    main()
