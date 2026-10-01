#!/usr/bin/env python3
"""Stage licensed Figure 1/2 originals from arXiv source archives, without paper PDFs.

Run on the staging server. Nothing is published until a maintainer reviews the
figure, its third-party content, numbering, and adaptation prompt.
"""
import argparse
import hashlib
import io
import json
import re
import tarfile
import time
import urllib.request
from pathlib import Path, PurePosixPath

import fitz
from PIL import Image
from discover_awards import COLLECTED, get_html, key

ALLOW = {
    "https://creativecommons.org/licenses/by/4.0/": "CC-BY-4.0",
    "https://creativecommons.org/publicdomain/zero/1.0/": "CC0-1.0",
}
MAX_ARCHIVE = 100 * 1024 * 1024
MAX_MEMBER = 30 * 1024 * 1024


def digest(data):
    return hashlib.sha256(data).hexdigest()


def strip_comments(text):
    return re.sub(r"(?<!\\)%[^\n]*", "", text)


def braced(text, start):
    """Return balanced content starting at an opening brace."""
    if start >= len(text) or text[start] != "{":
        return "", start
    depth = 1
    for i in range(start + 1, len(text)):
        if i > 0 and text[i-1] == "\\":
            continue
        depth += (text[i] == "{") - (text[i] == "}")
        if not depth:
            return text[start+1:i], i+1
    raise ValueError("Unbalanced TeX braces")


def command_args(text, command):
    values = []
    pattern = r"\\" + command + r"\*?(?:\s*\[[^\]]*\])?\s*\{"
    for m in re.finditer(pattern, text):
        value, end = braced(text, m.end()-1)
        values.append(value)
    return values


def figure_captions(text):
    # Captions within subfigure environments number panels, not main figures.
    text = re.sub(r"\\begin\{subfigure\}.*?\\end\{subfigure\}", "", text, flags=re.S)
    values = command_args(text, "caption")
    for m in re.finditer(r"\\captionof(?:\[[^\]]*\])?\s*\{figure\}\s*\{", text):
        caption, end = braced(text, m.end()-1)
        values.append(caption)
    return values


def archive_files(blob):
    if blob.startswith(b"%PDF"):
        raise ValueError("arXiv provides only a paper PDF: source extraction skipped")
    files = {}
    with tarfile.open(fileobj=io.BytesIO(blob), mode="r:*") as archive:
        total = 0
        for member in archive:
            path = PurePosixPath(member.name)
            if path.is_absolute() or ".." in path.parts or member.issym() or member.islnk():
                raise ValueError("Unsafe archive member")
            if not member.isfile():
                continue
            total += member.size
            if member.size > MAX_MEMBER or total > 300 * 1024 * 1024:
                raise ValueError("Source archive exceeds extraction limits")
            suffix = path.suffix.lower()
            if suffix not in {".tex", ".png", ".jpg", ".jpeg", ".pdf", ".svg", ".eps", ".sty"}:
                continue
            files[str(path)] = archive.extractfile(member).read()
    return files


def flatten_tex(files):
    tex = {p: strip_comments(b.decode("utf-8", errors="replace")) for p,b in files.items() if p.endswith(".tex")}
    roots = [p for p,t in tex.items() if r"\begin{document}" in t]
    roots.sort(key=lambda p: ("supp" in p.lower() or "appendix" in p.lower(), len(PurePosixPath(p).parts), len(p)))
    if not roots:
        raise ValueError("No main TeX document found")
    def expand(path, seen):
        if path in seen:
            raise ValueError("Cyclic TeX input")
        def replace(m):
            name = m.group(1)
            if not name.endswith(".tex"):
                name += ".tex"
            candidates = [str(PurePosixPath(path).parent / name), name]
            matched = next((p for p in candidates if p in tex), None)
            return expand(matched, seen | {path}) if matched else m.group(0)
        return re.sub(r"\\(?:input|include)\s*\{([^{}]+)\}", replace, tex[path])
    return roots[0], expand(roots[0], set())


def find_asset(name, files):
    name = name.strip().removeprefix("./")
    candidates = [name] if PurePosixPath(name).suffix else [name+ext for ext in (".pdf", ".png", ".jpg", ".jpeg", ".svg", ".eps")]
    found = [p for p in files if any(p == c or p.endswith("/"+c) for c in candidates)]
    if len(found) != 1:
        raise ValueError(f"Ambiguous or missing original asset: {name} ({found})")
    return found[0]


def preview(blob, suffix):
    if suffix == ".pdf":
        doc = fitz.open(stream=blob, filetype="pdf")
        if len(doc) != 1:
            raise ValueError("Original figure PDF must be single-page")
        pix = doc[0].get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
        im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    elif suffix in {".png", ".jpg", ".jpeg"}:
        rgba = Image.open(io.BytesIO(blob)).convert("RGBA")
        background = Image.new("RGBA", rgba.size, "white")
        im = Image.alpha_composite(background, rgba).convert("RGB")
    else:
        raise ValueError("Vector format requires a separate reviewed preview renderer")
    im.thumbnail((2000, 1600))
    return im


def source_download(identifier, root):
    path = root / "cache/arxiv-sources" / (identifier + ".tar")
    if not path.exists():
        url = "https://arxiv.org/src/" + identifier
        with urllib.request.urlopen(url, timeout=60) as response:
            blob = response.read(MAX_ARCHIVE+1)
        if len(blob) > MAX_ARCHIVE:
            raise ValueError("Source download exceeds 100 MiB limit")
        if blob.startswith(b"%PDF"):
            raise ValueError("Source endpoint returned paper PDF; not retained")
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(blob)
    return path.read_bytes()


def collect(paper, identifier, root):
    soup = get_html("https://arxiv.org/abs/"+identifier, root)
    title = soup.select_one("h1.title").get_text(" ", strip=True).removeprefix("Title:").strip()
    # AlphaEdit was retitled between preprint and conference; explicitly record it.
    aliases = {"2410.02355": "AlphaEdit: Null-Space Constrained Model Editing for Language Models"}
    if key(title) != key(paper["title"]) and key(aliases.get(identifier, "")) != key(paper["title"]):
        raise ValueError("arXiv title does not match the official award record")
    versions = re.findall(r"\[v(\d+)\]", soup.get_text())
    version = max(map(int, versions)) if versions else None
    if not version:
        raise ValueError("Could not freeze the arXiv version")
    frozen = identifier + "v" + str(version)
    version_page = get_html("https://arxiv.org/abs/"+frozen, root)
    license_node = version_page.select_one(".abs-license a[href]")
    license_url = license_node["href"].replace("http:", "https:") if license_node else None
    evidence = {"arxiv_id": identifier, "arxiv_version": frozen, "arxiv_title": title,
                "license_url": license_url, "license_evidence_url": "https://arxiv.org/abs/"+frozen,
                "checked_at": COLLECTED}
    paper.update(evidence)
    paper["arxiv_url"] = "https://arxiv.org/abs/"+frozen
    first = soup.select_one('meta[name="citation_date"]')
    if first:
        paper["arxiv_first_submitted_at"] = first["content"].replace("/", "-")
    authors = soup.select(".authors a")
    if authors:
        paper["authors"] = [a.get_text(strip=True) for a in authors]
    paper.setdefault("url", paper["arxiv_url"])
    if license_url not in ALLOW:
        paper["status"] = "metadata_only_license_not_approved"
        return []
    blob = source_download(frozen, root)
    files = archive_files(blob)
    main, tex = flatten_tex(files)
    matches = list(re.finditer(r"\\begin\{figure\*?\}(.*?)\\end\{figure\*?\}", tex, re.S))
    prefix = tex[:matches[1].end()] if len(matches)>1 else tex
    if re.search(r"\\(?:setcounter|renewcommand)\s*\{(?:figure|\\thefigure)\}", prefix):
        raise ValueError("Custom figure numbering requires manual resolution")
    blocks = []
    for match in matches:
        if len(blocks) >= 2:
            break
        block = match.group(1)
        captions = figure_captions(block)
        if len(captions)>1:
            minis = re.findall(r"\\begin\{minipage\}.*?\\end\{minipage\}", block, re.S)
            if len(minis)!=len(captions) or any(len(figure_captions(m))!=1 for m in minis):
                raise ValueError("Multiple numbered captions require manual figure resolution")
            blocks.extend(minis)
        elif captions:
            blocks.append(block)
    staged = []
    for number, block in enumerate(blocks[:2], 1):
        names = command_args(block, "includegraphics")
        for m in re.finditer(r"\\begin\{overpic\}(?:\s*\[[^\]]*\])?\s*\{", block):
            value, end = braced(block, m.end()-1)
            names.append(value)
        captions = figure_captions(block)
        if not names or not captions:
            continue
        paths = [find_asset(name, files) for name in names]
        figure_id = paper["id"] + "-fig-" + str(number)
        folder = root / "tmp/source-review" / figure_id
        folder.mkdir(parents=True, exist_ok=True)
        assets = []
        for i, path in enumerate(paths):
            name = f"original-{i+1}" + PurePosixPath(path).suffix.lower()
            (folder/name).write_bytes(files[path])
            assets.append({"source_path": path, "file": name, "sha256": digest(files[path])})
        item = {"id": figure_id, "paper": paper, "number": number, "caption_tex": captions[-1],
                "main_tex": main, "source_archive_url": "https://arxiv.org/src/"+frozen,
                "source_archive_sha256": digest(blob), "source_license": ALLOW[license_url],
                "original_assets": assets, "figure_tex": block, "review_status": "pending",
                "preview_status": "pending_multi_panel_layout"}
        (folder/"figure.tex").write_text(block)
        inline_drawing = bool(re.search(r"\\begin\{(?:tikzpicture|axis|overpic|picture)\}|\\(?:tikz|put)\b", block))
        if inline_drawing:
            item["preview_status"] = "pending_tex_composition"
        if len(assets) == 1 and not inline_drawing:
            im = preview(files[paths[0]], PurePosixPath(paths[0]).suffix.lower())
            im.save(folder/"reference.png")
            thumb = im.copy(); thumb.thumbnail((1200, 1000))
            thumb.save(folder/"preview.webp", quality=85)
            item.update(preview_status="ready", width=im.width, height=im.height)
        (folder/"stage.json").write_text(json.dumps(item, ensure_ascii=False, indent=2)+"\n")
        staged.append(item)
    paper["status"] = "source_staged_pending_review" if staged else "source_requires_manual_figure_resolution"
    return staged


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--seeds", type=Path, required=True, help="Verified arXiv titles and IDs JSON")
    parser.add_argument("--limit", type=int, default=30)
    parser.add_argument("--retain-source-archives", action="store_true", help="Keep full source archives on the staging server after selected assets are saved")
    args = parser.parse_args(); root = args.root.resolve()
    path = root/"data/award_inventory.json"
    inventory = json.loads(path.read_text())
    seeds = json.loads(args.seeds.read_text())
    by_title = {key(p["title"]): p for p in inventory["papers"]}
    report = []
    for seed in seeds[:args.limit]:
        paper = by_title.get(key(seed.get("title", "")))
        if not paper and seed["id"] == "2410.02355":
            paper = by_title.get(key("AlphaEdit: Null-Space Constrained Model Editing for Language Models"))
        if not paper:
            continue
        try:
            figures = collect(paper, seed["id"], root)
            print(paper["status"], len(figures), paper["title"], flush=True)
        except Exception as error:
            paper.update(status="source_collection_pending", collection_error=str(error))
            print("PENDING", paper["title"], str(error), flush=True)
        finally:
            frozen = paper.get("arxiv_version", "")
            if not args.retain_source_archives and re.fullmatch(r"\d{4}\.\d{4,5}v\d+", frozen):
                (root/"cache/arxiv-sources"/(frozen+".tar")).unlink(missing_ok=True)
        report.append({"paper_id": paper["id"], "status": paper["status"], "error":paper.get("collection_error")})
        path.write_text(json.dumps(inventory, ensure_ascii=False, indent=2)+"\n")
        time.sleep(1)
    (root/"data/source_collection_report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2)+"\n")


if __name__ == "__main__":
    main()
