#!/usr/bin/env python3
"""Build the local catalog and portable per-figure reference bundles."""
import argparse
import json
import zipfile
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--remote-assets", default="https://raw.githubusercontent.com/DocZbs/Awesome-Academic-Figures/main/", help="Use GitHub originals without local mirroring")
    args = parser.parse_args()
    root = args.root.resolve()
    figures = []
    seen = set()
    bundles = root / "bundles"
    bundles.mkdir(exist_ok=True)
    for path in sorted((root / "figures").glob("*/metadata.json")):
        entry = json.loads(path.read_text())
        figure_id = entry["id"]
        if entry["rights"].get("publication_status") != "approved" or not entry["rights"].get("license_evidence_url"):
            raise ValueError(f"Publication requires reviewed license evidence: {figure_id}")
        if entry["rights"].get("source_license") not in {"CC-BY-4.0", "CC0-1.0"}:
            raise ValueError(f"License is outside the initial collection policy: {figure_id}")
        if entry["reuse"]["validation"].get("visual_extraction") != "reviewed":
            raise ValueError(f"Unreviewed figure cannot be published: {figure_id}")
        if entry.get("template_only") or figure_id in seen or path.parent.name != figure_id:
            raise ValueError(f"Invalid or duplicate figure ID: {figure_id}")
        seen.add(figure_id)
        if not entry["classification"]["primary_type"]:
            raise ValueError(f"Missing primary type: {figure_id}")
        files = {"metadata.json"}
        for field in ("preview", "reference", "analysis", "prompt", "agent", "extraction"):
            value = entry["assets"].get(field)
            if not value:
                if field == "reference" and not entry["reuse"]["reference_available"]:
                    continue
                raise ValueError(f"Missing asset field {field}: {figure_id}")
            file = path.parent / value
            if not file.resolve().is_relative_to(path.parent.resolve()) or not file.is_file():
                raise ValueError(f"Missing or unsafe asset path: {file}")
            files.add(value)
        for original in entry.get("original_assets", []):
            file = path.parent / original["file"]
            if not file.resolve().is_relative_to(path.parent.resolve()) or not file.is_file():
                raise ValueError("Missing or unsafe original asset")
            import hashlib
            if hashlib.sha256(file.read_bytes()).hexdigest() != original["sha256"]:
                raise ValueError("Original asset checksum differs from extraction record")
            files.add(original["file"])
        for name in ("ATTRIBUTION.md", "figure.tex"):
            if (path.parent / name).is_file():
                files.add(name)
        with zipfile.ZipFile(bundles / f"{figure_id}.zip", "w", zipfile.ZIP_DEFLATED) as archive:
            for name in sorted(files):
                archive.write(path.parent / name, name)
        entry["asset_base"] = f"{args.remote_assets}figures/{figure_id}/"
        for field in ("analysis", "prompt", "agent"):
            entry[f"{field}_text"] = (path.parent / entry["assets"][field]).read_text()
        figures.append(entry)
    figures.sort(key=lambda f: (f["paper"]["id"] != "icml-2025-collabllm", -f["paper"]["publication_year"], f["paper"]["id"], f["source"]["number"]))
    catalog = {"schema_version": "0.1", "default_dimension": "type", "figure_count": len(figures),
               "paper_count": len({f["paper"]["id"] for f in figures}),
               "publication_status": "license_and_visual_review_passed", "figures": figures}
    (root / "data").mkdir(exist_ok=True)
    (root / "data/catalog.json").write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
    print(f"Built catalog with {len(figures)} figures and {len(figures)} local reference bundles")


if __name__ == "__main__":
    main()
