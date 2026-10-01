#!/usr/bin/env python3
"""Promote an explicit, checksum-bound maintainer review manifest into the gallery."""
import argparse
import hashlib
import json
import re
import shutil
from pathlib import Path


def promote(root, reviewed):
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", reviewed["id"]):
        raise ValueError("Unsafe figure ID in review manifest")
    stage = root/"tmp/source-review"/reviewed["id"]
    item = json.loads((stage/"stage.json").read_text())
    if item["id"] != reviewed["id"]:
        raise ValueError("Review and staged figure IDs differ")
    if item["preview_status"] != "ready" or reviewed.get("review_status") != "approved":
        raise ValueError("Both source preview and explicit maintainer review are required")
    if item["source_archive_sha256"] != reviewed["source_archive_sha256"]:
        raise ValueError("The review refers to another source archive")
    if item["source_license"] not in {"CC-BY-4.0", "CC0-1.0"}:
        raise ValueError("This license is outside the initial publication policy")
    for asset in item["original_assets"]:
        if hashlib.sha256((stage/asset["file"]).read_bytes()).hexdigest() != asset["sha256"]:
            raise ValueError("Original changed since staging")
    out = root/"figures"/item["id"]
    out.mkdir(parents=True, exist_ok=True)
    for name in ["reference.png", "preview.webp", "figure.tex", *[a["file"] for a in item["original_assets"]]]:
        shutil.copy2(stage/name, out/name)
    paper = item["paper"]
    clean_paper = {k:v for k,v in paper.items() if k not in {"status", "priority_batch", "resolution_error", "collection_error"}}
    extraction = {k:v for k,v in item.items() if k != "paper"}
    extraction.update(method="arxiv_source_original", visual_review_status="reviewed", reviewed_at=reviewed["checked_at"])
    (out/"extraction.json").write_text(json.dumps(extraction,ensure_ascii=False,indent=2)+"\n")
    attribution = f"{paper['title']} — {', '.join(paper['authors'])}, {paper['venue']} {paper['publication_year']}, Figure {item['number']}."
    rights = {"holder":"The authors / original rights holders", "source_license":item["source_license"],
              "license_url":paper["license_url"], "license_evidence_url":paper["license_evidence_url"],
              "redistribution_basis":"Explicit license on the matching versioned arXiv abstract page",
              "attribution":attribution, "publication_status":"approved",
              "third_party_review":reviewed["rights_review"],
              "changes":"Original file is byte-preserved. PNG/WebP are preview conversions on a white background."}
    metadata = {"schema_version":"0.2", "id":item["id"], "title":reviewed["title"], "paper":clean_paper,
                "source":{"kind":"figure","document":"main","number":item["number"],"core_figure_slot":f"figure-{item['number']}",
                          "caption":reviewed["caption"], "caption_tex":item["caption_tex"], "method":"arxiv_source_original",
                          "arxiv_version":paper["arxiv_version"], "asset_url":item["source_archive_url"],
                          "source_archive_sha256":item["source_archive_sha256"], "main_tex":item["main_tex"]},
                "classification":reviewed["classification"],
                "visual":{"aspect_ratio":round(item["width"]/item["height"],3),"pixel_width":item["width"],"pixel_height":item["height"],
                          "panel_count":reviewed["panel_count"], "palette_hex":reviewed["palette_hex"],
                          "palette_source":"maintainer approximation from the reference"},
                "assets":{"preview":"preview.webp","reference":"reference.png","analysis":"analysis.md","prompt":"prompt.md",
                          "agent":"agent.md","extraction":"extraction.json","figure_tex":"figure.tex","originalBase":"", "code":None},
                "original_assets":item["original_assets"],
                "reuse":{"reference_available":True,"prompt_origin":"maintainer_reconstruction","prompt_language":"en", "prompt_version":"0.2",
                         "prompt_status":"reviewed","code_status":"unavailable","adaptation_status":"untested",
                         "variables":["research_content","layout_changes","labels","relationships","true_data","language","output_format"],
                         "validation":{"visual_extraction":"reviewed","adaptation_generation":"not_tested"}},
                "rights":rights,"curation":{"maintainer":"Awesome-Academic-Figures","checked_at":reviewed["checked_at"],
                                             "collected_at":paper["collected_at"], "notes":reviewed["review_notes"]}}
    for field in ("analysis","prompt","agent"):
        (out/(field+".md")).write_text(reviewed[field]+"\n")
    (out/"metadata.json").write_text(json.dumps(metadata,ensure_ascii=False,indent=2)+"\n")
    (out/"ATTRIBUTION.md").write_text(f"# Figure attribution\n\n{attribution}\n\n"
        f"Paper: {paper['url']}\n\nSource version: {paper['arxiv_url']}\n\n"
        f"License: [{rights['source_license']}]({rights['license_url']})\n\nEvidence: {rights['license_evidence_url']}\n\n"
        f"Changes: {rights['changes']}\n\nOriginal SHA-256 values and source paths: see metadata.json.\n\n"
        "Analysis and prompt are maintainer reconstructions; no generated adaptation has been tested.\n")
    print("Published reviewed figure:",item["id"])


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root",type=Path,default=Path("."));parser.add_argument("--manifest",type=Path,required=True)
    args=parser.parse_args()
    reviews=json.loads(args.manifest.read_text())
    for item in reviews:
        promote(args.root.resolve(),item)


if __name__ == "__main__":
    main()
