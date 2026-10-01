#!/usr/bin/env python3
"""Merge exact byte-identical whole-figure images; preserve alias provenance."""
import argparse
import hashlib
import json
import shutil
from pathlib import Path

from bulk_import_external import server_root


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--report", type=Path, required=True)
    parser.add_argument("--baseline-catalog", type=Path, help="Existing published catalog; its canonical IDs have first priority")
    args = parser.parse_args()
    root = server_root(args.root)
    baseline_path = args.baseline_catalog or root / "data/catalog.json"
    baseline_ids = {entry["id"] for entry in json.loads(baseline_path.read_text())["figures"]} if baseline_path.exists() else set()
    ledger_path = root / "data/figure-aliases.json"
    previous = json.loads(ledger_path.read_text()) if ledger_path.exists() else {}
    aliases_by_id = {alias["id"]: alias for alias in previous.get("aliases", [])}
    if len(aliases_by_id) != len(previous.get("aliases", [])):
        raise ValueError("Existing duplicate alias ledger contains conflicting IDs")
    figures = []
    for path in (root / "figures").glob("*/metadata.json"):
        metadata = json.loads(path.read_text())
        original_assets = metadata.get("original_assets", [])
        # A single panel's hash cannot identify a whole composed figure.
        if len(original_assets) == 1:
            original = path.parent / original_assets[0]["file"]
        elif not original_assets:
            original = path.parent / metadata["assets"]["reference"]
        else:
            continue
        if not original.resolve().is_relative_to(path.parent.resolve()):
            raise ValueError("Unsafe original asset path")
        digest = hashlib.sha256(original.read_bytes()).hexdigest()
        if original_assets and digest != original_assets[0]["sha256"]:
            raise ValueError("Original file no longer matches its metadata")
        method = metadata["source"].get("method")
        priority = 2 if method == "hosted_dataset_figure" else 1 if method == "external_index_image" else 0
        figures.append((metadata["id"] not in baseline_ids, priority, metadata["id"], path, digest, metadata))
    canonical = {}
    added = 0
    for _, _, identifier, path, digest, metadata in sorted(figures):
        if digest not in canonical:
            canonical[digest] = metadata
            continue
        keeper = canonical[digest]
        if identifier in baseline_ids:
            # Do not withdraw an old public ID or invalidate its layout evidence.
            # Legacy duplicates require an explicitly reviewed migration.
            continue
        destination = root / "cache/external-duplicates" / identifier
        if destination.exists():
            raise ValueError("Duplicate quarantine destination exists; refusing overwrite")
        alias = {"id": identifier, "canonical_id": keeper["id"], "image_sha256": digest,
                        "paper": metadata["paper"], "source": metadata["source"], "rights": metadata["rights"],
                        "reuse_prompt_origin": metadata["reuse"]["prompt_origin"],
                        "deduplication_basis": "Exactly identical whole-figure source bytes; no visual similarity threshold."}
        if identifier in aliases_by_id and aliases_by_id[identifier] != alias:
            raise ValueError("A duplicate ID conflicts with its existing alias provenance")
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(path.parent), str(destination))
        aliases_by_id[identifier] = alias
        added += 1
    aliases = [aliases_by_id[key] for key in sorted(aliases_by_id)]
    report = {"duplicate_count": len(aliases), "new_duplicate_count": added, "figure_count": len(list((root / "figures").glob("*/metadata.json"))),
              "policy": "Exact SHA-256 only. Baseline public IDs are preserved before source-type preference; aliases are cumulative.",
              "originals_preserved_in": "cache/external-duplicates", "aliases": aliases}
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    if args.report.resolve() != ledger_path.resolve():
        ledger_path.parent.mkdir(parents=True, exist_ok=True)
        ledger_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({key: value for key, value in report.items() if key != "aliases"}, ensure_ascii=False))


if __name__ == "__main__":
    main()
