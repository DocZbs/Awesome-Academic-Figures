#!/usr/bin/env python3
"""Legacy pilot PDF crop tool. Source archive extraction is the default workflow."""
import argparse
import hashlib
import json
import re
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

import pymupdf
from PIL import Image


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")


def fetch(url, path):
    if path.exists():
        if not path.read_bytes().startswith(b"%PDF-"):
            raise ValueError(f"Cached file is not a PDF: {path}")
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    partial = path.with_suffix(".partial")
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "Awesome-Academic-Figures/0.1"})
            with urllib.request.urlopen(request, timeout=45) as response, partial.open("wb") as output:
                total = 0
                while chunk := response.read(1024 * 1024):
                    total += len(chunk)
                    if total > 100 * 1024 * 1024:
                        raise ValueError("PDF exceeded the 100 MiB staging limit")
                    output.write(chunk)
            with partial.open("rb") as output:
                if output.read(5) != b"%PDF-":
                    raise ValueError("Download is not a PDF")
            partial.replace(path)
            return
        except Exception:
            partial.unlink(missing_ok=True)
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--paper-id", required=True)
    parser.add_argument("--pdf-url", required=True)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--crop-manifest", type=Path)
    parser.add_argument("--scan-pages", type=int, default=10)
    parser.add_argument("--allow-paper-pdf-fallback", action="store_true", help="Explicitly opt into the legacy full-paper download")
    args = parser.parse_args()
    if not args.allow_paper_pdf_fallback:
        parser.error("Use collect_arxiv_sources.py; full-paper PDF fallback is disabled by default")
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", args.paper_id):
        parser.error("paper-id must use lowercase letters, numbers and hyphens")
    if args.scan_pages < 1:
        parser.error("scan-pages must be positive")
    root = args.root.resolve()
    pdf_path = root / "cache" / "pdfs" / f"{args.paper_id}.pdf"
    source_path = root / "cache" / "pdfs" / f"{args.paper_id}.source.json"
    if pdf_path.exists() and source_path.exists():
        previous = json.loads(source_path.read_text())
        if previous["pdf_url"] != args.pdf_url:
            raise ValueError("Cached paper uses another PDF URL; use a separate staging root or review the cache first")
    fetch(args.pdf_url, pdf_path)
    sha = hashlib.sha256(pdf_path.read_bytes()).hexdigest()
    timestamp = datetime.now(timezone.utc).isoformat()
    doc = pymupdf.open(pdf_path)
    candidates = []
    caption_pattern = re.compile(r"^Figure\s+([12])\s*[:.](?!\d)", re.IGNORECASE)
    for index in range(min(args.scan_pages, len(doc))):
        page = doc[index]
        for block in page.get_text("blocks"):
            if block[6] != 0:
                continue
            text = block[4].strip()
            match = caption_pattern.match(text)
            if match:
                candidates.append({"number": int(match[1]), "pdf_page_index_1based": index + 1,
                                   "caption_bbox_pt": list(block[:4]), "caption": text})
    for page_number in sorted({item["pdf_page_index_1based"] for item in candidates}):
        output = root / "cache" / "pages" / args.paper_id / f"page-{page_number}.png"
        output.parent.mkdir(parents=True, exist_ok=True)
        doc[page_number - 1].get_pixmap(matrix=pymupdf.Matrix(1.5, 1.5), alpha=False).save(output)
    source = {"paper_id": args.paper_id, "pdf_url": args.pdf_url, "pdf_sha256": sha,
              "checked_at": timestamp, "page_count": len(doc), "scan_page_limit": args.scan_pages,
              "caption_candidates": candidates, "note": "Candidates require visual review; missing candidates do not prove absence."}
    write_json(source_path, source)
    if not args.crop_manifest:
        print(json.dumps(source, ensure_ascii=False, indent=2))
        return
    manifest = json.loads(args.crop_manifest.read_text())
    if manifest["paper_id"] != args.paper_id or manifest["pdf_sha256"] != sha:
        raise ValueError("Crop manifest does not match this paper/PDF version")
    ids = set()
    for item in manifest["figures"]:
        figure_id = item["id"]
        if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", figure_id) or figure_id in ids:
            raise ValueError("Unsafe or duplicate figure ID")
        ids.add(figure_id)
        number, page_number = item["number"], item["pdf_page_index_1based"]
        if number not in (1, 2) or not 1 <= page_number <= len(doc):
            raise ValueError("Only Figure 1/2 with valid page indices are supported")
        captions = [c for c in candidates if c["number"] == number and c["pdf_page_index_1based"] == page_number]
        if len(captions) != 1:
            raise ValueError("Crop must correspond to exactly one detected caption")
        page = doc[page_number - 1]
        clip = pymupdf.Rect(item["crop_bbox_pt"])
        if clip.is_empty or clip.is_infinite or not page.rect.contains(clip):
            raise ValueError("Crop is outside page bounds")
        destination = root / "figures" / figure_id
        destination.mkdir(parents=True, exist_ok=True)
        page.get_pixmap(matrix=pymupdf.Matrix(4, 4), clip=clip, alpha=False).save(destination / "reference.png")
        with Image.open(destination / "reference.png") as image:
            image.thumbnail((1200, 1200))
            image.save(destination / "preview.webp", quality=90)
        write_json(destination / "extraction.json", {
            "paper_id": args.paper_id, "id": figure_id, "number": number,
            "pdf_page_index_1based": page_number, "pdf_url": args.pdf_url, "pdf_sha256": sha,
            "crop_bbox_pt": list(clip), "dpi": 288, "caption": captions[0]["caption"],
            "caption_bbox_pt": captions[0]["caption_bbox_pt"], "extracted_at": timestamp,
            "method": "rendered_pdf_crop", "visual_review_status": "pending"})
        print(f"Extracted {figure_id}; visual review pending")


if __name__ == "__main__":
    main()
