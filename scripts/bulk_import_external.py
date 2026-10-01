#!/usr/bin/env python3
"""Validate, stage, and promote explicitly reviewed external figure indexes.

Index validation and metadata reports are safe locally. Asset staging/promotion
are intentionally restricted to the jdp Linux checkout or an explicitly bound
Linux GitHub Actions workspace for this repository. No paper PDFs, archives,
or unlicensed images are fetched. License assertions in an index are candidates,
not approval: a separate review manifest grants permission to stage each image.
"""
import argparse
import hashlib
import io
import json
import os
import re
import shutil
import socket
from concurrent.futures import ThreadPoolExecutor, as_completed
import urllib.parse
import urllib.request
import urllib.error
from datetime import date
from pathlib import Path

LICENSES = {
    "CC-BY-4.0": "https://creativecommons.org/licenses/by/4.0/",
    "CC0-1.0": "https://creativecommons.org/publicdomain/zero/1.0/",
}
TYPES = {"architecture", "flowchart", "conceptual", "qualitative", "data", "multi-panel", "teaser", "taxonomy"}
MAX_BYTES = 20 * 1024 * 1024
MAX_PIXELS = 40_000_000
ID = re.compile(r"[a-z0-9][a-z0-9-]{0,179}\Z")
SHA = re.compile(r"[a-f0-9]{64}\Z")


def load_records(path):
    """Accept JSON arrays, {figures:[...]}, or newline-delimited JSON."""
    text = Path(path).read_text(encoding="utf-8")
    if Path(path).suffix.lower() in {".jsonl", ".ndjson"}:
        records = [json.loads(line) for line in text.splitlines() if line.strip()]
    else:
        value = json.loads(text)
        records = value.get("figures", value.get("records")) if isinstance(value, dict) else value
    if not isinstance(records, list) or not all(isinstance(r, dict) for r in records):
        raise ValueError("Index must contain a list of figure objects")
    return records


def https_url(value, name):
    if not isinstance(value, str):
        raise ValueError(f"Missing {name}")
    parsed = urllib.parse.urlsplit(value)
    if parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password:
        raise ValueError(f"{name} must be an HTTPS URL without credentials")
    if parsed.port not in {None, 443}:
        raise ValueError(f"Nonstandard port in {name}")
    return value


def validate_record(item):
    identifier = item.get("id", "")
    if not isinstance(identifier, str) or not ID.fullmatch(identifier):
        raise ValueError("Unsafe or missing figure ID")
    paper = item.get("paper", {})
    if not isinstance(paper, dict):
        raise ValueError("paper must be an object")
    if not isinstance(paper.get("id"), str) or not ID.fullmatch(paper["id"]):
        raise ValueError("Unsafe or missing paper ID")
    for field in ("title", "venue"):
        if not isinstance(paper.get(field), str) or not paper[field].strip():
            raise ValueError(f"Missing paper {field}")
    year = paper.get("publication_year")
    if isinstance(year, bool) or not isinstance(year, int) or not 1980 <= year <= date.today().year + 2:
        raise ValueError("Invalid publication year")
    if not isinstance(paper.get("authors"), list) or not all(isinstance(a, str) for a in paper["authors"]):
        raise ValueError("Authors must be a list; an empty list means unknown")
    https_url(paper.get("url"), "paper.url")
    source = item.get("source", {})
    if not isinstance(source, dict):
        raise ValueError("source must be an object")
    dataset_unknown_scope = source.get("document") == "unspecified" and source.get("number_status") == "dataset_figure_number_unresolved" and source.get("method") == "hosted_dataset_figure"
    if source.get("kind") != "standalone_figure" or (source.get("document") != "main" and not dataset_unknown_scope):
        raise ValueError("Only main-paper figures or explicitly scope-unresolved hosted dataset figures are eligible")
    if source.get("number") is None:
        if source.get("number_status") != "source_index_leading_figure" and not dataset_unknown_scope:
            raise ValueError("Unknown figure number requires an explicit upstream leading-figure claim")
    elif type(source.get("number")) is not int or source["number"] not in (1, 2):
        raise ValueError("This collection focuses on Figure 1/2 or an explicitly marked leading figure")
    https_url(source.get("index_url"), "source.index_url")
    https_url(source.get("image_url"), "source.image_url")
    if not isinstance(source.get("version"), str) or not source["version"].strip():
        raise ValueError("Pin the external index to an immutable source version")
    if source.get("format") not in {"png", "jpeg", "jpg", "webp"}:
        raise ValueError("External importer accepts raster figure images only, never paper PDFs")
    if source.get("caption") is not None and not isinstance(source["caption"], str):
        raise ValueError("Caption must be the source's real text or null")
    if source.get("sha256") and not SHA.fullmatch(source["sha256"]):
        raise ValueError("Invalid expected SHA-256")
    classification = item.get("classification", {})
    if not isinstance(classification, dict):
        raise ValueError("classification must be an object")
    if classification.get("primary_type") not in TYPES | {"unclassified"}:
        raise ValueError("Use a supported primary type, or honestly mark it unclassified")
    for field in ("types", "purposes", "layouts", "search_aliases"):
        if not isinstance(classification.get(field), list) or not all(isinstance(v, str) for v in classification[field]):
            raise ValueError(f"classification.{field} must be a string list")
    # Unknown rights are valid metadata, but never eligible for a download.
    rights = item.get("rights", {})
    if not isinstance(rights, dict):
        raise ValueError("rights must be an object")
    if rights.get("source_license") in LICENSES:
        if rights.get("license_url") != LICENSES[rights["source_license"]]:
            raise ValueError("License name and canonical license URL differ")
        https_url(rights.get("license_evidence_url"), "rights.license_evidence_url")
        if not rights.get("evidence_scope"):
            raise ValueError("Explain whether evidence covers this published version and this figure")
    return item


def record_digest(item):
    """Bind review approval to all source, paper, rights, and classification fields."""
    return hashlib.sha256(json.dumps(item, sort_keys=True, ensure_ascii=False, separators=(",", ":")).encode()).hexdigest()


def normalize_topconf(records, provenance, publisher_records):
    """Adapt the pinned public index without manufacturing awards/captions/figures."""
    repository = provenance["source_repository"]
    commit = provenance["source_commit"]
    if not re.fullmatch(r"[a-f0-9]{40}", commit):
        raise ValueError("Pin topconf source to a full immutable Git commit")
    if repository != "https://github.com/qwdwqfwq/topconf-paper-figure-gallery":
        raise ValueError("Unexpected repository for topconf adapter")
    metadata = {record["id"]: record for record in publisher_records}
    normalized, reviews = [], []
    mapped = {"architecture": "architecture", "conceptual": "conceptual", "pipeline": "flowchart",
              "framework": "architecture", "taxonomy": "conceptual", "results": "data", "comparison": "qualitative"}
    legal_evidence = {"aclanthology.org": "https://aclanthology.org/faq/copyright/",
                      "proceedings.mlr.press": "https://proceedings.mlr.press/pmlr-license-agreement.html"}
    seen = set()
    for original in records:
        slug = re.sub(r"[^a-z0-9]+", "-", original["id"].lower()).strip("-")
        identifier = f"topconf-{slug}-leading"
        if identifier in seen:
            raise ValueError("Upstream IDs collide after normalization")
        seen.add(identifier)
        publication = metadata.get(original["id"], {})
        official_url = publication.get("resolved_page", "")
        official_host = urllib.parse.urlsplit(official_url).hostname
        verified = (publication.get("status") == "verified"
                    and publication.get("title_exact_normalized_match") is True
                    and publication.get("pdf_exact_url_match") is True
                    and publication.get("publisher_license") == "CC-BY-4.0"
                    and publication.get("license_evidence_url") == legal_evidence.get(official_host)
                    and bool(publication.get("authors"))
                    and bool(SHA.fullmatch(publication.get("html_sha256", ""))))
        image_path = original["image"]
        if image_path.startswith("/") or ".." in Path(image_path).parts or not image_path.startswith("images/"):
            raise ValueError("Unsafe upstream image path")
        pattern = original.get("pattern", "teaser")
        primary_type = mapped.get(pattern, "teaser" if pattern == "teaser" else "unclassified")
        item = {"id": identifier,
                "title": {"zh": f"{original['title']} · 首图", "en": original["title"]},
                "paper": {"id": f"topconf-{slug}", "title": publication["title"] if verified else original["title"],
                          "authors": publication["authors"] if verified else original.get("authors", []),
                          "venue": original["venue"].upper(), "publication_year": original["year"],
                          "url": official_url if verified else original["paper"], "pdf_url": original.get("pdf_source"),
                          "awards": [], "collected_at": provenance["collected_at"]},
                "source": {"kind": "standalone_figure", "document": "main", "number": None,
                           "number_status": "source_index_leading_figure", "caption": None,
                           "index_url": provenance["index_url"], "version": commit,
                           "image_url": f"https://raw.githubusercontent.com/qwdwqfwq/topconf-paper-figure-gallery/{commit}/{image_path}",
                           "format": "jpeg", "upstream_id": original["id"], "upstream_pattern": pattern,
                           "scope_claim": provenance["figure_scope"]},
                "classification": {"collection": "community-index", "primary_type": primary_type,
                                   "types": [primary_type], "purposes": [], "layouts": [],
                                   "search_aliases": [pattern], "status": "source_index_labels_unverified"},
                "rights": {"source_license": "unknown", "publication_status": "metadata_only"}}
        if verified:
            for field in ("publication_date", "doi"):
                if publication.get(field):
                    item["paper"][field] = publication[field]
            item["rights"] = {"source_license": "CC-BY-4.0", "license_url": LICENSES["CC-BY-4.0"],
                              "license_evidence_url": publication["license_evidence_url"],
                              "evidence_scope": "Publisher policy covers the final proceedings article; official title and PDF URL match the external crop source.",
                              "publication_status": "candidate", "publisher_metadata_sha256": publication["html_sha256"]}
            explicit_restriction = any(original.get(field) for field in ("rights_exclusion", "third_party_restriction", "license_restriction"))
            if not explicit_restriction:
                reviews.append({"id": identifier, "record_sha256": record_digest(item),
                                "reviewed_by": "official_publisher_metadata_validator", "checked_at": provenance["collected_at"],
                                "license_review": "approved", "third_party_review": "approved",
                                "license_evidence_url": publication["license_evidence_url"],
                                "license_notes": "Final publisher CC BY 4.0 policy verified; official article title and exact PDF source matched, not the upstream code's MIT license.",
                                "third_party_notes": "Publisher CC BY policy verified; no separate third-party exclusion identified in the upstream index. Individual visual/caption review remains pending; a known separate rights restriction requires removal.",
                                "visual_source_review": "source_index_verified", "figure_scope_review": "source_index_verified",
                                "visual_notes": "Crop provenance is the pinned external source index and matching official PDF URL. No independent human visual/caption inspection is claimed.",
                                "scope_notes": "Upstream claims Figure 1 / teaser. Individual exact figure number is unknown and is published as leading figure, never as verified Figure 1.",
                                "asset_binding_method": "immutable_source_index_download"})
        validate_record(item)
        normalized.append(item)
    return normalized, reviews


def normalize_openreview(records, provenance, audit_records):
    """Use preserved paper-specific official license fields, never the code license."""
    normalized, _ = normalize_topconf(records, provenance, [])
    upstream = {row["id"]: row for row in records}
    audit = {row["id"]: row for row in audit_records}
    reviews = []
    for item in normalized:
        row = upstream[item["source"]["upstream_id"]]
        proof = audit.get(row["id"], {})
        note_license = {"CC BY 4.0": "CC-BY-4.0", "CC-BY-4.0": "CC-BY-4.0", "CC0 1.0": "CC0-1.0", "CC0-1.0": "CC0-1.0"}.get(proof.get("note_license"))
        if (row.get("license") not in LICENSES
                or row.get("license_url") != LICENSES[row["license"]]
                or row.get("license_verification") != "mirrored_official_license"
                or row.get("snapshot_commit") != provenance["source_commit"]
                or not SHA.fullmatch(row.get("snapshot_sha256", ""))
                or proof.get("status") != "permissive_license_in_preserved_note"
                or note_license != row.get("license")
                or proof.get("source_commit") != provenance["source_commit"]
                or proof.get("title_matches") is not True or proof.get("public") is not True
                or proof.get("source_binding") not in {"forum_current_pdf", "exact_version_pdf"}
                or proof.get("snapshot_sha256") != row["snapshot_sha256"]
                or proof.get("snapshot_url") != row.get("license_evidence_url")):
            continue
        evidence = https_url(row["license_evidence_url"], "paper-specific OpenReview license snapshot")
        primary = https_url(row["license_primary_url"], "official OpenReview forum")
        if urllib.parse.urlsplit(primary).hostname != "openreview.net" or primary != proof.get("primary_forum_url"):
            raise ValueError("OpenReview license proof refers to another forum")
        item["paper"]["authors"] = proof.get("authors") or row.get("authors", [])
        item["paper"]["publication_date"] = row.get("paper_published_at")
        item["paper"]["license_snapshot_url"] = evidence
        item["source"].update(official_pdf_url=proof.get("official_pdf_url"), license_verification="preserved_official_api_note",
                              license_snapshot_sha256=row["snapshot_sha256"], source_binding=proof["source_binding"])
        item["rights"] = {"source_license": row["license"], "license_url": row["license_url"],
                          "license_evidence_url": evidence, "license_primary_url": primary,
                          "evidence_scope": "Paper-specific license in a preserved official OpenReview API note matched to this title/public forum. Live API unavailable (HTTP 403), not claimed as live verified.",
                          "publication_status": "candidate", "license_verification": "preserved_official_api_note"}
        reviews.append({"id": item["id"], "record_sha256": record_digest(item), "reviewed_by": "preserved_official_openreview_note_validator",
                        "checked_at": provenance["collected_at"], "license_review": "approved", "third_party_review": "approved",
                        "license_evidence_url": evidence,
                        "license_notes": "Paper-specific explicit Creative Commons license in the preserved official OpenReview note; public forum and exact normalized title matched. Live official API returned HTTP 403, so this is snapshot evidence.",
                        "third_party_notes": "No separate third-party exclusion identified in the upstream index. Individual visual/caption review remains pending; a known separate rights restriction requires removal.",
                        "visual_source_review": "source_index_verified", "figure_scope_review": "source_index_verified",
                        "visual_notes": "Pinned source-index crop linked to this public forum/PDF; no independent human visual/caption inspection is claimed.",
                        "scope_notes": "Upstream claims Figure 1 / teaser. Exact figure number is unverified and published as leading figure.",
                        "asset_binding_method": "immutable_source_index_download"})
    return normalized, reviews


def normalize_sciforma(records):
    """Preserve hosted dataset row permission and machine description honestly."""
    normalized, reviews = [], []
    for row in records:
        revision = row.get("dataset_revision", "")
        if not isinstance(revision, str) or not re.fullmatch(r"[a-f0-9]{40}", revision):
            raise ValueError("SciForma row requires its actual immutable dataset revision")
        evidence = f"https://huggingface.co/datasets/microsoft/SciFormaData-700K/blob/{revision}/README.md"
        if (row.get("license") not in LICENSES
                or row.get("license_url") != LICENSES[row["license"]]
                or row.get("license_evidence_url") != evidence
                or row.get("source_license_evidence_kind") != "frozen_dataset_row_license"
                or row.get("license_verification") != "dataset_audited_hosted_row"
                or row.get("ai_scope_verification") != "arxiv_subject_category"
                or not set(row.get("arxiv_subjects", [])) & {"cs.AI", "cs.CL", "cs.CV", "cs.LG", "stat.ML"}
                or not SHA.fullmatch(row.get("paper_metadata_sha256", ""))):
            continue
        row_url = urllib.parse.urlsplit(https_url(row.get("row_api_url"), "dataset row API"))
        query = urllib.parse.parse_qs(row_url.query)
        if (row_url.hostname != "datasets-server.huggingface.co" or row_url.path != "/rows"
                or query.get("dataset") != ["microsoft/SciFormaData-700K"]
                or query.get("config") != ["generation_1024"] or query.get("split") != ["train"]
                or len(query.get("offset", [])) != 1 or len(query.get("length", [])) != 1):
            raise ValueError("SciForma row API must identify the exact dataset/config/split and slice")
        offset, length = int(query["offset"][0]), int(query["length"][0])
        row_index = row.get("row_index")
        if (type(row_index) is not int or offset < 0 or not 1 <= length <= 100
                or not offset <= row_index < offset + length
                or row.get("id") != f"sciforma-{row_index}"):
            raise ValueError("SciForma row index/ID does not belong to its evidence slice")
        description = row.get("prompt_text", "")
        if not description or hashlib.sha256(description.encode()).hexdigest() != row.get("caption_sha256"):
            raise ValueError("Dataset generation caption differs from its source checksum")
        if not re.fullmatch(r"\d{4}\.\d{4,5}", row["paper_id"]):
            raise ValueError("Unexpected arXiv paper ID")
        primary_type = "architecture"
        lower = description.lower()
        if "flowchart" in lower:
            primary_type = "flowchart"
        elif "conceptual" in lower:
            primary_type = "conceptual"
        elif any(term in lower for term in ("bar chart", "scatter plot", "line plot", "heatmap")):
            primary_type = "data"
        item = {"id": row["id"], "title": {"zh": f"{row['title']} · 方法图", "en": row["title"]},
                "paper": {"id": f"arxiv-{row['paper_id'].replace('.', '-')}", "title": row["title"], "authors": row["authors"],
                          "venue": "arXiv", "publication_year": row["year"], "url": row["arxiv_url"], "arxiv_url": row["arxiv_url"],
                          "arxiv_id": row["paper_id"], "arxiv_first_submitted_at": row["arxiv_first_submitted_at"],
                          "arxiv_updated_at": row["arxiv_updated_at"], "arxiv_subjects": row["arxiv_subjects"],
                          "collected_at": row["paper_metadata_checked_at"], "awards": []},
                "source": {"kind": "standalone_figure", "document": "unspecified", "number": None,
                           "number_status": "dataset_figure_number_unresolved", "method": "hosted_dataset_figure", "caption": None,
                           "index_url": row["row_api_url"], "version": revision, "image_url": row["image_url"], "format": "jpeg",
                           "dataset": "microsoft/SciFormaData-700K", "row_index": row["row_index"],
                           "description_sha256": row["caption_sha256"], "description_origin": "dataset_generated_description",
                           "license_evidence_kind": "frozen_dataset_row_license", "paper_metadata_sha256": row["paper_metadata_sha256"],
                           "scope_claim": "Method figure hosted in a licensed dataset; exact figure number and main-paper/appendix scope are unresolved."},
                "classification": {"primary_type": primary_type, "types": [primary_type], "purposes": ["method-overview"], "layouts": [],
                                   "search_aliases": row["arxiv_subjects"], "status": "dataset_generated_labels"},
                "rights": {"source_license": row["license"], "license_url": row["license_url"], "license_evidence_url": evidence,
                           "evidence_scope": "Audited license attached to this hosted dataset row, described by the frozen dataset card. Not a claim about every version of the associated paper.",
                           "publication_status": "candidate", "license_verification": "dataset_audited_hosted_row"},
                "dataset_generation_caption": description}
        for field in ("doi", "journal_reference", "arxiv_current_version_observed"):
            if isinstance(row.get(field), str) and row[field].strip():
                item["paper"][field] = row[field]
        validate_record(item)
        normalized.append(item)
        # Concrete photographs/screenshots of third-party content require separate rights review.
        if any(term in lower for term in ("google maps", "copyrighted", "photograph", "real-world photo", "medical image", "chest x-ray", "coco dataset")):
            continue
        reviews.append({"id": item["id"], "record_sha256": record_digest(item), "reviewed_by": "frozen_hosted_dataset_row_validator",
                        "checked_at": row["paper_metadata_checked_at"], "license_review": "approved", "third_party_review": "approved",
                        "license_evidence_url": evidence,
                        "license_notes": "This hosted figure row declares an audited CC BY 4.0/CC0 license; frozen dataset revision and row identity retained. Associated paper identity/dates/AI subjects independently matched via arXiv metadata.",
                        "third_party_notes": "No known separate third-party restriction found in supplied row metadata or description. Machine-description photograph/medical/screenshot indicators are deferred; independent full-image rights inspection remains pending.",
                        "visual_source_review": "source_index_verified", "figure_scope_review": "source_index_verified",
                        "visual_notes": "Host dataset row provenance and machine-generated description retained; no independent human visual description review claimed.",
                        "scope_notes": "Exact figure number and main-paper/appendix scope unresolved; displayed as a method figure with number pending, never as leading Figure 1/2.",
                        "asset_binding_method": "immutable_source_index_download"})
    return normalized, reviews


def validate_review(item, review, *, for_promotion=False):
    if item["rights"].get("source_license") not in LICENSES:
        raise ValueError("Unknown or unsupported image license; metadata only")
    if not review or review.get("id") != item["id"] or review.get("record_sha256") != record_digest(item):
        raise ValueError("No explicit review bound to this exact index record")
    for field in ("license_review", "third_party_review"):
        if review.get(field) != "approved":
            raise ValueError(f"{field} must be explicitly approved")
    for field in ("reviewed_by", "checked_at", "license_notes", "third_party_notes"):
        if not isinstance(review.get(field), str) or not review[field].strip():
            raise ValueError(f"Review is missing {field}")
    date.fromisoformat(review["checked_at"])
    https_url(review.get("license_evidence_url"), "review.license_evidence_url")
    if review["license_evidence_url"] != item["rights"]["license_evidence_url"]:
        raise ValueError("License review refers to another source")
    if for_promotion:
        if review.get("visual_source_review") not in {"approved", "source_index_verified"} or review.get("figure_scope_review") not in {"approved", "source_index_verified"}:
            raise ValueError("Publication needs full-image and main-paper Figure 1/2 review")
        if not isinstance(review.get("asset_sha256"), str) or not SHA.fullmatch(review["asset_sha256"]):
            raise ValueError("Publication review must be bound to staged asset SHA-256")
        if not review.get("visual_notes") or not review.get("scope_notes"):
            raise ValueError("Explain image completeness and numbering review")


def server_root(root):
    resolved = Path(root).resolve()
    if os.uname().sysname == "Linux":
        if resolved.is_relative_to(Path("/home/jdp")):
            return resolved
        workspace = os.environ.get("GITHUB_WORKSPACE", "")
        if (os.environ.get("GITHUB_ACTIONS") == "true"
                and os.environ.get("GITHUB_REPOSITORY") == "DocZbs/Awesome-Academic-Figures"
                and os.environ.get("GITHUB_RUN_ID", "").isdigit()
                and workspace and Path(workspace).is_absolute() and Path(workspace).is_dir()
                and resolved.is_relative_to(Path(workspace).resolve())):
            return resolved
    raise ValueError("Asset operations require jdp /home/jdp or this repository's Linux GitHub Actions workspace; local operation is metadata-only")


def checked_host(url, allowed_hosts):
    https_url(url, "asset URL")
    host = urllib.parse.urlsplit(url).hostname.lower()
    if host not in allowed_hosts:
        raise ValueError(f"Asset host is not explicitly allowed: {host}")
    # Reject loopback/private services even when supplied accidentally as allowed.
    import ipaddress
    for answer in socket.getaddrinfo(host, 443, type=socket.SOCK_STREAM):
        if not ipaddress.ip_address(answer[4][0]).is_global:
            raise ValueError("Asset URL resolves to a private or reserved address")


class SafeRedirect(urllib.request.HTTPRedirectHandler):
    def __init__(self, allowed_hosts):
        self.allowed_hosts = allowed_hosts

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        checked_host(newurl, self.allowed_hosts)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def download_image(url, allowed_hosts):
    checked_host(url, allowed_hosts)
    request = urllib.request.Request(url, headers={"User-Agent": "Awesome-Academic-Figures/0.3 source-index importer"})
    opener = urllib.request.build_opener(SafeRedirect(allowed_hosts))
    with opener.open(request, timeout=45) as response:
        checked_host(response.url, allowed_hosts)
        mime = response.headers.get("Content-Type", "").split(";")[0].lower()
        if mime in {"application/pdf", "text/html", "application/zip", "application/gzip"}:
            raise ValueError(f"Endpoint returned {mime}; never download a paper PDF/archive")
        prefix = response.read(16)
        if prefix.startswith((b"%PDF", b"PK\x03\x04", b"\x1f\x8b")):
            raise ValueError("Image endpoint returned a PDF or archive; stopped at signature")
        blob = prefix + response.read(MAX_BYTES + 1 - len(prefix))
    if len(blob) > MAX_BYTES:
        raise ValueError("Figure image exceeds 20 MiB")
    return blob


def stage_record(root, item, review, allowed_hosts):
    validate_review(item, review)
    destination = root / "cache/external-figures" / item["id"]
    stage_path = destination / "stage.json"
    if stage_path.exists():
        staged = json.loads(stage_path.read_text())
        original = destination / staged["original_file"]
        if staged["record_sha256"] != record_digest(item):
            raise ValueError("Existing stage belongs to a different index record")
        if hashlib.sha256(original.read_bytes()).hexdigest() != staged["asset_sha256"]:
            raise ValueError("Existing staged original changed")
        return staged
    blob = download_image(item["source"]["image_url"], allowed_hosts)
    digest = hashlib.sha256(blob).hexdigest()
    if item["source"].get("sha256") and item["source"]["sha256"] != digest:
        raise ValueError("Downloaded image differs from source index SHA-256")
    from PIL import Image
    Image.MAX_IMAGE_PIXELS = MAX_PIXELS
    with Image.open(io.BytesIO(blob)) as probe:
        if probe.format not in {"PNG", "JPEG", "WEBP"}:
            raise ValueError("Unsupported image format")
        width, height = probe.size
        if width * height > MAX_PIXELS or width < 1 or height < 1:
            raise ValueError("Invalid or excessive image dimensions")
        suffix = {"PNG": "png", "JPEG": "jpg", "WEBP": "webp"}[probe.format]
        probe.verify()
    with Image.open(io.BytesIO(blob)) as image:
        rgba = image.convert("RGBA")
        background = Image.new("RGBA", rgba.size, "white")
        preview = Image.alpha_composite(background, rgba).convert("RGB")
        preview.thumbnail((1200, 1000))
    destination.mkdir(parents=True, exist_ok=True)
    original_file = f"original.{suffix}"
    (destination / original_file).write_bytes(blob)
    preview.save(destination / "preview.webp", quality=88)
    staged = {"id": item["id"], "record_sha256": record_digest(item), "asset_sha256": digest,
              "original_file": original_file, "pixel_width": width, "pixel_height": height,
              "preview_status": "ready", "staged_at": date.today().isoformat(), "index_record": item}
    stage_path.write_text(json.dumps(staged, ensure_ascii=False, indent=2) + "\n")
    return staged


def draft_texts(item):
    """Never pretend we have inspected shape, palette, panels, or relationships."""
    paper = item["paper"]
    number = item["source"]["number"] or ("unresolved (hosted method figure; numbering/scope unverified)" if item["source"].get("method") == "hosted_dataset_figure" else "1 / teaser (upstream leading-image claim; exact numbering unverified)")
    caption = item["source"].get("caption")
    analysis = (f"# Source record: Figure {number}\n\n{paper['title']} — {paper['venue']} {paper['publication_year']}.\n\n"
                "This record was imported from an external figure index. No figure-specific visual analysis has been written. "
                "Labels inherited from the index are retrieval hints, not a verified description of the image.\n\n"
                + (f"Source caption (as supplied, not independently transcribed):\n\n{caption}\n\n" if caption else "The index supplied no caption.\n\n")
                + f"Paper: {paper['url']}\n\nIndex: {item['source']['index_url']}\n")
    prompt = ("# Draft adaptation instructions\n\nGeneric reference-guided draft; no figure-specific layout, palette, "
              "or prompt generation has been reviewed.\n\n```text\n"
              f"Use the attached original image (Figure {number} from {paper['title']}) as a visual reference. "
              "First inspect the actual image and summarize its layout, panels, typography, connectors and visual hierarchy. "
              "Do not infer these from the paper title or index labels. Then adapt the useful visual conventions to {{research_content}}. "
              "Every module, label, relationship and numerical value must come from {{research_content}} and {{true_data}}. "
              "Do not copy the reference paper's results, names, photographs or third-party logos into the new work. "
              "Use {{layout_changes}}, {{language}} and {{output_format}} to determine the final editable deliverable. "
              "Describe any uncertainty before drawing; do not invent missing data.\n```\n")
    agent = ("# Agent handoff\n\nRead metadata.json and ATTRIBUTION.md, inspect the attached original image, "
             "and read the user's MY_TASK.md. The supplied prompt.md is a generic draft and analysis.md is a source record, "
             "not a reviewed visual specification. Produce your own visual inspection before adapting the reference. "
             "Keep paper provenance and license attribution with any redistributed original image.\n")
    if item.get("dataset_generation_caption"):
        description = item["dataset_generation_caption"]
        analysis += "\n## Machine-generated source description\n\nThis is the dataset's generated description, not an author caption or independently reviewed visual analysis.\n\n" + description + "\n"
        prompt = ("# Dataset-derived adaptation draft\n\nThe following source description was generated by the dataset pipeline; "
                  "it has not received independent human visual review and is not an author prompt. Inspect the actual attached image "
                  "to correct any errors before adapting it.\n\n## Source generation caption\n\n" + description + "\n\n"
                  "## Adaptation task\n\nUse the confirmed useful composition for {{research_content}}. Replace all reference-paper labels, "
                  "values and relationships with the user's true modules and {{true_data}}. Follow {{layout_changes}}, {{language}} and "
                  "{{output_format}}. Do not reproduce reference results or third-party photographs/logos. Verify that every relationship "
                  "belongs to the supplied method before drawing.\n")
        agent = "# Dataset figure handoff\n\nRead MY_TASK.md, the attached source image, metadata.json and ATTRIBUTION.md. The dataset-generated description in prompt.md is an unreviewed draft, not an author caption. Inspect the actual image, correct descriptive errors, and adapt its useful conventions only to the user's true method/data. Numbering and main-paper scope remain unresolved.\n"
    return {"analysis": analysis, "prompt": prompt, "agent": agent}


def promote_record(root, item, review):
    validate_review(item, review, for_promotion=True)
    stage = root / "cache/external-figures" / item["id"]
    staged = json.loads((stage / "stage.json").read_text())
    if staged["record_sha256"] != record_digest(item):
        raise ValueError("Staging record and publication review differ")
    original = stage / staged["original_file"]
    actual = hashlib.sha256(original.read_bytes()).hexdigest()
    if actual != staged["asset_sha256"] or actual != review["asset_sha256"]:
        raise ValueError("Publication review refers to another image")
    out = root / "figures" / item["id"]
    if out.exists():
        old = json.loads((out / "metadata.json").read_text()) if (out / "metadata.json").exists() else {}
        if old.get("source", {}).get("external_record_sha256") != record_digest(item):
            raise ValueError("Refusing to overwrite a different existing curated figure")
        assets = old.get("original_assets", [])
        if len(assets) != 1 or assets[0].get("sha256") != actual or old.get("rights", {}).get("publication_status") != "approved":
            raise ValueError("Existing curated figure differs from the approved original asset")
        retained = out / assets[0]["file"]
        if not retained.resolve().is_relative_to(out.resolve()) or hashlib.sha256(retained.read_bytes()).hexdigest() != actual:
            raise ValueError("Existing curated original changed")
        # Existing manual classifications, figure numbers, previews and detailed
        # adaptation instructions are not outputs of an incremental import.
        return old
    out.mkdir(parents=True, exist_ok=True)
    for name in (staged["original_file"], "preview.webp"):
        shutil.copy2(stage / name, out / name)
    paper = dict(item["paper"])
    paper.setdefault("collected_at", staged["staged_at"])
    paper.setdefault("awards", [])
    paper.setdefault("track", "main")
    rights = dict(item["rights"])
    authors = ", ".join(paper["authors"]) or "Authors as listed in the original paper"
    figure_label = f"Figure {item['source']['number']}" if item['source']['number'] else ("method figure (number and paper scope unresolved)" if item['source'].get('method') == 'hosted_dataset_figure' else "leading figure / teaser (exact numbering unverified)")
    attribution = f"{paper['title']} — {authors}, {paper['venue']} {paper['publication_year']}, {figure_label}."
    rights.update(publication_status="approved", holder=rights.get("holder", "The original rights holders"),
                  attribution=attribution, third_party_review=review["third_party_notes"],
                  redistribution_basis=review["license_notes"],
                  changes="External-index image is byte-preserved; WebP is a resized preview conversion on white.")
    source = dict(item["source"])
    method = source.get("method", "external_index_image")
    source.update(kind="figure", method=method, asset_url=source["image_url"],
                  core_figure_slot=f"figure-{source['number']}" if source['number'] else ("unspecified-figure" if method == "hosted_dataset_figure" else "leading-figure"), external_record_sha256=record_digest(item))
    classification = dict(item["classification"])
    classification.setdefault("collection", "community-index")
    classification.setdefault("styles", [])
    classification.setdefault("research_topics", [])
    classification["status"] = "dataset_generated_labels" if method == "hosted_dataset_figure" else "source_index_labels_unverified"
    title = item.get("title") or {"zh": figure_label, "en": f"{figure_label}: {paper['title']}"}
    metadata = {"schema_version": "0.3", "id": item["id"], "title": title, "paper": paper, "source": source,
                "classification": classification,
                "visual": {"aspect_ratio": round(staged["pixel_width"] / staged["pixel_height"], 3),
                           "pixel_width": staged["pixel_width"], "pixel_height": staged["pixel_height"],
                           "panel_count": None, "palette_hex": [], "palette_source": "not_analyzed"},
                "assets": {"preview": "preview.webp", "reference": staged["original_file"], "analysis": "analysis.md",
                           "prompt": "prompt.md", "agent": "agent.md", "extraction": "extraction.json", "code": None, "originalBase": ""},
                "original_assets": [{"file": staged["original_file"], "sha256": actual, "source_path": item["source"]["image_url"],
                                     "source_kind": "dataset_hosted_figure" if method == "hosted_dataset_figure" else "upstream_extracted_figure", "format": Path(staged["original_file"]).suffix.removeprefix(".")}],
                "reuse": {"reference_available": True, "prompt_origin": "generic_reference_guided_draft", "prompt_language": "en",
                          "prompt_version": "0.3", "prompt_status": "draft", "analysis_status": "source_record_only",
                          "code_status": "unavailable", "adaptation_status": "untested",
                          "variables": ["research_content", "true_data", "layout_changes", "language", "output_format"],
                          "validation": {"visual_extraction": "source_index_verified" if review['visual_source_review'] == 'source_index_verified' else "reviewed", "adaptation_generation": "not_tested"}},
                "rights": rights,
                "curation": {"maintainer": review["reviewed_by"], "checked_at": review["checked_at"], "collected_at": staged["staged_at"],
                             "notes": "External image and numbering reviewed; source labels unverified; visual analysis absent; prompt is a generic draft.",
                             "external_source_review": review}}
    extraction = {**staged, "method": "external_index_image", "visual_source_review": review["visual_notes"],
                  "figure_scope_review": review["scope_notes"], "original_is_author_source_file": False,
                  "note": "Byte-preserved external index image; it may be a crop or conversion, not an author TeX/vector original."}
    if method == "hosted_dataset_figure":
        metadata["reuse"].update(prompt_origin="dataset_generation_caption", analysis_status="dataset_generated_description_unreviewed")
        metadata["curation"]["notes"] = "Hosted licensed dataset figure; exact numbering/body scope unresolved. Detailed source description is machine-generated, unreviewed and untested."
        extraction.update(method=method, note="Byte-preserved hosted dataset figure; author vector/source file unavailable; figure numbering and main-paper scope unverified.")
    for field, text in draft_texts(item).items():
        (out / (field + ".md")).write_text(text, encoding="utf-8")
    (out / "metadata.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n")
    (out / "extraction.json").write_text(json.dumps(extraction, ensure_ascii=False, indent=2) + "\n")
    (out / "ATTRIBUTION.md").write_text(f"# Attribution\n\n{attribution}\n\nPaper: {paper['url']}\n\n"
        f"Index image: {item['source']['image_url']}\n\nIndex version: {item['source']['version']}\n\n"
        f"License: [{rights['source_license']}]({rights['license_url']})\n\nEvidence: {rights['license_evidence_url']}\n\n"
        f"Changes: {rights['changes']}\n\nOriginal SHA-256: {actual}\n\n"
        "Prompt is a generic draft. No figure-specific visual analysis or generated adaptation has been tested.\n")
    return metadata


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--index", type=Path, required=True)
    parser.add_argument("--reviews", type=Path, help="Explicit record-hash-bound review list; absent means metadata only")
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--report", type=Path, required=True)
    parser.add_argument("--stage", action="store_true", help="Download rights-approved images only in an authorized Linux asset workspace")
    parser.add_argument("--promote", action="store_true", help="Publish staged images only after asset-hash-bound scope/visual review")
    parser.add_argument("--allowed-host", action="append", default=[], help="Exact HTTPS image hostname; repeated flags allowed")
    parser.add_argument("--limit", type=int)
    parser.add_argument("--workers", type=int, default=1, help="Bounded parallel image fetches (1-8); metadata writes stay independent")
    parser.add_argument("--normalize-topconf", action="store_true", help="Convert the pinned topconf index; metadata only")
    parser.add_argument("--normalize-openreview", action="store_true", help="Convert eligible topconf rows with preserved official paper-specific license evidence")
    parser.add_argument("--normalize-sciforma", action="store_true", help="Convert audited hosted AI dataset rows; exact figure number/body scope remains unresolved")
    parser.add_argument("--openreview-audit", type=Path)
    parser.add_argument("--provenance", type=Path)
    parser.add_argument("--publisher-metadata", type=Path)
    parser.add_argument("--output-index", type=Path)
    parser.add_argument("--output-reviews", type=Path)
    parser.add_argument("--exclude-catalog", type=Path, help="During normalization omit papers whose first/leading figure is already curated")
    parser.add_argument("--exclude-review-report", type=Path, action="append", default=[], help="Honor known image exclusions; repeated reports supplement the checkout's existing visual reviews")
    parser.add_argument("--bind-source-index-checksums", action="store_true", help="Bind an explicit source-index review to the staged immutable image; never human review")
    args = parser.parse_args()
    if args.limit is not None and args.limit < 1:
        parser.error("--limit must be positive")
    if not 1 <= args.workers <= 8:
        parser.error("--workers must be between 1 and 8")
    if args.bind_source_index_checksums and not args.output_reviews:
        parser.error("--bind-source-index-checksums requires --output-reviews")
    root = server_root(args.root) if args.stage or args.promote else args.root.resolve()
    records = load_records(args.index)
    exclusion_paths = [root / "data/external/topconf/visual_sample_review.json", root / "data/external/sciforma/visual_sample_review.json", *args.exclude_review_report]
    excluded_ids = set()
    for exclusion_path in exclusion_paths:
        if exclusion_path.exists():
            excluded_ids.update(json.loads(exclusion_path.read_text()).get("excluded_ids", []))
    alias_path = root / "data/figure-aliases.json"
    if alias_path.exists():
        excluded_ids.update(row["id"] for row in json.loads(alias_path.read_text()).get("aliases", []))
    excluded_known_issue_count = sum(record.get("id") in excluded_ids for record in records)
    records = [record for record in records if record.get("id") not in excluded_ids]
    if args.normalize_topconf or args.normalize_openreview or args.normalize_sciforma:
        if args.stage or args.promote or not all((args.output_index, args.output_reviews)) or (not args.normalize_sciforma and not args.provenance):
            parser.error("Normalization requires provenance/output-index/output-reviews and cannot download/publish")
        provenance = json.loads(args.provenance.read_text()) if args.provenance else {}
        publisher = json.loads(args.publisher_metadata.read_text()).get("records", []) if args.publisher_metadata else []
        if args.normalize_sciforma:
            normalized, generated_reviews = normalize_sciforma(records)
        elif args.normalize_openreview:
            if not args.openreview_audit:
                parser.error("OpenReview normalization requires --openreview-audit")
            audit = json.loads(args.openreview_audit.read_text()).get("records", [])
            normalized, generated_reviews = normalize_openreview(records, provenance, audit)
        else:
            normalized, generated_reviews = normalize_topconf(records, provenance, publisher)
        excluded_known_issue_count += sum(record["id"] in excluded_ids for record in normalized)
        normalized = [record for record in normalized if record["id"] not in excluded_ids]
        generated_reviews = [review for review in generated_reviews if review["id"] not in excluded_ids]
        if args.exclude_catalog:
            current = json.loads(args.exclude_catalog.read_text())
            key = lambda title: re.sub(r"[^a-z0-9]", "", title.lower())
            existing = {key(f["paper"]["title"]) for f in current["figures"] if f["source"].get("number") in (None, 1)}
            omitted = {item["id"] for item in normalized if key(item["paper"]["title"]) in existing}
            normalized = [item for item in normalized if item["id"] not in omitted]
            generated_reviews = [review for review in generated_reviews if review["id"] not in omitted]
        for path, value in ((args.output_index, normalized), (args.output_reviews, generated_reviews)):
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")
        args.index = args.output_index
        records = normalized
        args.reviews = args.output_reviews
    reviews = {}
    for review in load_records(args.reviews) if args.reviews else []:
        if review.get("id") in reviews:
            raise ValueError("Duplicate figure review ID")
        reviews[review.get("id")] = review
    report = {"schema_version": "0.3", "source_index": str(args.index), "indexed_count": len(records),
              "excluded_known_issue_count": excluded_known_issue_count,
              "staged_count": 0, "published_count": 0, "already_published_count": 0, "metadata_only_count": 0, "invalid_count": 0, "figures": []}
    allowed_hosts = {host.lower() for host in args.allowed_host}
    selected = records[:args.limit] if args.limit else records
    identifiers = [item.get("id") for item in selected]
    if len(set(identifiers)) != len(identifiers):
        raise ValueError("Duplicate figure IDs in index; no asset operation started")
    def process_item(item):
        result = {"id": item.get("id"), "status": "metadata_only"}
        review = dict(reviews.get(item.get("id"), {}))
        try:
            validate_record(item)
            result.update(record_sha256=record_digest(item), paper=item["paper"], source_index_url=item["source"]["index_url"],
                          source_version=item["source"]["version"], figure_number=item["source"]["number"],
                          license=item["rights"].get("source_license", "unknown"))
            if args.stage:
                staged = stage_record(root, item, review, allowed_hosts)
                result.update(status="staged_pending_visual_review", asset_sha256=staged["asset_sha256"])
                result["_staged"] = True
                if args.bind_source_index_checksums:
                    if review.get("asset_binding_method") != "immutable_source_index_download" or review.get("visual_source_review") != "source_index_verified":
                        raise ValueError("Checksum auto-binding is allowed only for declared source-index validation")
                    if review.get("asset_sha256") and review["asset_sha256"] != staged["asset_sha256"]:
                        raise ValueError("Existing review checksum differs from immutable source image")
                    review["asset_sha256"] = staged["asset_sha256"]
                    result["_review"] = review
            if args.promote:
                already_present = (root / "figures" / item["id"] / "metadata.json").is_file()
                metadata = promote_record(root, item, review)
                result.update(status="already_published" if already_present else "published", asset_sha256=metadata["original_assets"][0]["sha256"])
        except (ValueError, KeyError, OSError, urllib.error.URLError) as error:
            result.update(status="not_published", error=str(error))
        return result

    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = [executor.submit(process_item, item) for item in selected]
        results = (future.result() for future in as_completed(futures))
        for position, result in enumerate(results):
            if result.pop("_staged", False):
                report["staged_count"] += 1
            if bound_review := result.pop("_review", None):
                reviews[result["id"]] = bound_review
            report["published_count"] += result["status"] == "published"
            report["already_published_count"] += result["status"] == "already_published"
            report["invalid_count"] += result["status"] == "not_published"
            report["metadata_only_count"] += result["status"] == "metadata_only"
            report["figures"].append(result)
            # Checkpoint every 20 entries; avoids multi-gigabyte report rewriting at scale.
            if position % 20 == 0 or position == len(selected) - 1:
                args.report.parent.mkdir(parents=True, exist_ok=True)
                temporary = args.report.with_suffix(args.report.suffix + ".tmp")
                temporary.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
                temporary.replace(args.report)
                if args.bind_source_index_checksums and args.output_reviews:
                    args.output_reviews.parent.mkdir(parents=True, exist_ok=True)
                    args.output_reviews.write_text(json.dumps(list(reviews.values()), ensure_ascii=False, indent=2) + "\n")
                if args.stage or args.promote:
                    print(json.dumps({"completed": position + 1, "total": len(selected), "published": report["published_count"], "staged": report["staged_count"], "failed": report["invalid_count"]}), flush=True)
    print(json.dumps({key: value for key, value in report.items() if key != "figures"}, ensure_ascii=False))


if __name__ == "__main__":
    main()
