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
    args = parser.parse_args()
    root = server_root(args.root)
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
        figures.append((priority, metadata["id"], path, digest, metadata))
    canonical = {}
    aliases = []
    for _, identifier, path, digest, metadata in sorted(figures):
        if digest not in canonical:
            canonical[digest] = metadata
            continue
        keeper = canonical[digest]
        destination = root / "cache/external-duplicates" / identifier
        if destination.exists():
            raise ValueError("Duplicate quarantine destination exists; refusing overwrite")
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(path.parent), str(destination))
        aliases.append({"id": identifier, "canonical_id": keeper["id"], "image_sha256": digest,
                        "paper": metadata["paper"], "source": metadata["source"], "rights": metadata["rights"],
                        "reuse_prompt_origin": metadata["reuse"]["prompt_origin"],
                        "deduplication_basis": "Exactly identical whole-figure source bytes; no visual similarity threshold."})
    report = {"duplicate_count": len(aliases), "figure_count": len(list((root / "figures").glob("*/metadata.json"))),
              "policy": "Exact SHA-256 only. Existing reviewed figures have priority over external-index and hosted-dataset copies.",
              "originals_preserved_in": "cache/external-duplicates", "aliases": aliases}
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({key: value for key, value in report.items() if key != "aliases"}, ensure_ascii=False))


if __name__ == "__main__":
    main()
