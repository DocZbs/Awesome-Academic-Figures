#!/usr/bin/env python3
"""Build the local catalog and portable per-figure reference bundles."""
import argparse
import json
import zipfile
import re
import unicodedata
import hashlib
from pathlib import Path
from layout_annotations import load_annotations, apply_annotation
from classification_annotations import load_classifications, apply_classification


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--remote-assets", default="https://raw.githubusercontent.com/DocZbs/Awesome-Academic-Figures/main/", help="Use GitHub originals without local mirroring")
    parser.add_argument("--bundles", action="store_true", help="Optionally also generate static ZIPs on the staging server")
    args = parser.parse_args()
    root = args.root.resolve()
    layout_annotations = load_annotations(root)
    classifications = load_classifications(root)
    figures = []
    seen = set()
    bundles = root / "bundles"
    if args.bundles:
        bundles.mkdir(exist_ok=True)
    for path in sorted((root / "figures").glob("*/metadata.json")):
        entry = json.loads(path.read_text())
        figure_id = entry["id"]
        if figure_id in layout_annotations:
            apply_annotation(entry, layout_annotations[figure_id], path.parent)
        if figure_id in classifications:
            apply_classification(entry, classifications[figure_id], path.parent)
        if entry["rights"].get("publication_status") != "approved" or not entry["rights"].get("license_evidence_url"):
            raise ValueError(f"Publication requires reviewed license evidence: {figure_id}")
        if entry["rights"].get("source_license") not in {"CC-BY-4.0", "CC0-1.0"}:
            raise ValueError(f"License is outside the initial collection policy: {figure_id}")
        if entry["reuse"]["validation"].get("visual_extraction") not in {"reviewed", "source_index_verified"}:
            raise ValueError(f"Unreviewed figure cannot be published: {figure_id}")
        if entry["source"].get("method") == "arxiv_source_original" and not entry.get("original_assets"):
            raise ValueError(f"Source-extracted figures must retain author originals: {figure_id}")
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
        if args.bundles:
            with zipfile.ZipFile(bundles / f"{figure_id}.zip", "w", zipfile.ZIP_DEFLATED) as archive:
                for name in sorted(files):
                    if name == "metadata.json":
                        archive.writestr(name, json.dumps(entry, ensure_ascii=False, indent=2) + "\n")
                    else:
                        archive.write(path.parent / name, name)
        entry["asset_base"] = f"{args.remote_assets}figures/{figure_id}/"
        # Keep the searchable gallery index small. Detailed texts are requested
        # only when opening a figure or exporting selected references.
        entry["details_available"] = True
        entry["metadata_sha256"] = hashlib.sha256(path.read_bytes()).hexdigest()
        entry["assets"]["metadata"] = "metadata.json"
        entry["source"] = {k: v for k, v in entry["source"].items() if k in {
            "kind", "document", "number", "number_status", "number_version", "core_figure_slot", "method", "arxiv_version", "pdf_page_index_1based"}}
        entry["rights"] = {k: v for k, v in entry["rights"].items() if k in {
            "source_license", "publication_status", "license_url", "license_evidence_url"}}
        entry["curation"] = {k: v for k, v in entry.get("curation", {}).items() if k in {"maintainer", "checked_at", "collected_at"}}
        entry["original_assets"] = [{k: v for k, v in original.items() if k != "source_path"} for original in entry.get("original_assets", [])]
        figures.append(entry)
    if set(layout_annotations) - seen:
        raise ValueError("Layout annotations reference missing figures")
    if set(classifications) - seen:
        raise ValueError("Classification annotations reference missing figures")
    figures.sort(key=lambda f: (f["paper"]["id"] != "icml-2025-collabllm", -f["paper"]["publication_year"], f["paper"]["id"], f["source"].get("number") or 0))
    # A final proceedings record and its arXiv record can refer to one paper.
    # Only exact normalized titles with the same first author share an ID;
    # preserve each entry's actual source/version and original record identity.
    canonical = {}
    normalize = lambda value: re.sub(r"[\W_]", "", unicodedata.normalize("NFKC", value).casefold())
    for entry in figures:
        paper = entry["paper"]
        if not paper.get("authors"):
            continue
        identity = (normalize(paper["title"]), normalize(paper["authors"][0]))
        paper_id = canonical.setdefault(identity, paper["id"])
        if paper_id != paper["id"]:
            paper["source_record_id"] = paper["id"]
            paper["id"] = paper_id
    catalog = {"schema_version": "0.1", "default_dimension": "type", "figure_count": len(figures),
               "paper_count": len({f["paper"]["id"] for f in figures}),
               "publication_status": "licensed_with_recorded_review_levels", "figures": figures}
    (root / "data").mkdir(exist_ok=True)
    (root / "data/catalog.json").write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Built catalog with {len(figures)} licensed figures; static bundles {'enabled' if args.bundles else 'disabled (browser exports on demand)'}")


if __name__ == "__main__":
    main()
