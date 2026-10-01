#!/usr/bin/env python3
"""Apply known image exclusions and enrich real official award tags on jdp."""
import argparse
import hashlib
import json
import re
import shutil
import unicodedata
from pathlib import Path

from bulk_import_external import ID, server_root


def title_key(title):
    return re.sub(r"[\W_]", "", unicodedata.normalize("NFKC", title).casefold())


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--sample-review", type=Path, required=True)
    parser.add_argument("--award-inventory", type=Path, required=True)
    parser.add_argument("--report", type=Path, required=True)
    args = parser.parse_args()
    root = server_root(args.root)
    sample = json.loads(args.sample_review.read_text())
    observations = {(row.get("normalized_id") or (row["id"] if row["id"].startswith("sciforma-") else f"topconf-{re.sub('[^a-z0-9]+', '-', row['id'].lower()).strip('-')}-leading")): row for row in sample["records"]}
    excluded = []
    for identifier in sample["excluded_ids"]:
        if not ID.fullmatch(identifier):
            raise ValueError("Unsafe exclusion ID")
        source = root / "figures" / identifier
        destination = root / "cache/external-exclusions" / identifier
        result = {"id": identifier, "status": "not_in_gallery", "review_status": observations[identifier]["review_status"],
                  "observation": observations[identifier]["observation"], "sample_image_sha256": observations[identifier]["image_sha256"]}
        inspection_dir = source if source.exists() else destination
        if inspection_dir.exists():
            metadata = json.loads((inspection_dir / "metadata.json").read_text())
            asset = inspection_dir / metadata["original_assets"][0]["file"]
            if not asset.resolve().is_relative_to(inspection_dir.resolve()):
                raise ValueError("Unsafe exclusion original asset path")
            actual_sha = hashlib.sha256(asset.read_bytes()).hexdigest()
            result["asset_sha256"] = actual_sha
            result["sample_checksum_match"] = actual_sha == result["sample_image_sha256"]
            if not result["sample_checksum_match"]:
                raise ValueError("Exclusion visual evidence refers to a different original image")
            if source.exists():
                if destination.exists():
                    raise ValueError("Exclusion destination already exists; refusing overwrite")
                destination.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(source), str(destination))
                result["status"] = "moved_out_of_gallery"
            else:
                result["status"] = "previously_moved_out_of_gallery"
        excluded.append(result)
    inventory = json.loads(args.award_inventory.read_text())
    awards = {title_key(paper["title"]): paper.get("awards", []) for paper in inventory["papers"]}
    enriched = 0
    teaser_mapped = 0
    for path in sorted((root / "figures").glob("*/metadata.json")):
        metadata = json.loads(path.read_text())
        previous_text = path.read_text()
        if metadata.get("source", {}).get("method") not in {"external_index_image", "hosted_dataset_figure"}:
            continue
        actual_awards = [award for award in awards.get(title_key(metadata["paper"]["title"]), [])
                         if award.get("official_source_url") and award.get("verified_at")]
        metadata["paper"]["awards"] = actual_awards
        enriched += bool(actual_awards)
        if (metadata["source"].get("upstream_pattern") == "teaser"
                and metadata["classification"].get("status") == "source_index_labels_unverified"
                and metadata.get("curation", {}).get("visual_review", {}).get("status") != "reviewed"):
            metadata["classification"]["primary_type"] = "teaser"
            metadata["classification"]["types"] = ["teaser"]
            teaser_mapped += 1
        metadata["curation"]["award_matching"] = "Exact normalized title match to verified official-source award inventory; no match means no award tag."
        if metadata != json.loads(previous_text):
            path.write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n")
    report = {"excluded_count": len(excluded), "moved_count": sum(r["status"] in {"moved_out_of_gallery", "previously_moved_out_of_gallery"} for r in excluded),
              "moved_now_count": sum(r["status"] == "moved_out_of_gallery" for r in excluded),
              "excluded": excluded, "external_figures_with_verified_award_tags": enriched, "teaser_labels_mapped": teaser_mapped,
              "figure_count": len(list((root / "figures").glob("*/metadata.json")))}
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({k: v for k, v in report.items() if k != "excluded"}, ensure_ascii=False))


if __name__ == "__main__":
    main()
