#!/usr/bin/env python3
"""Exercise external-index permissions, provenance, and real image checksum gates."""
import copy
import io
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import bulk_import_external as importer
from PIL import Image


class ExternalImportTests(unittest.TestCase):
    def setUp(self):
        self.item = {"id": "test-figure-1", "paper": {"id": "test-paper", "title": "Fixture", "authors": [],
                     "venue": "ICML", "publication_year": 2025, "url": "https://example.org/paper"},
                     "source": {"kind": "standalone_figure", "document": "main", "number": 1, "caption": None,
                                "index_url": "https://example.org/index", "image_url": "https://example.org/figure.png",
                                "version": "fixture-release", "format": "png"},
                     "classification": {"primary_type": "unclassified", "types": ["unclassified"],
                                        "purposes": [], "layouts": [], "search_aliases": []},
                     "rights": {"source_license": "CC-BY-4.0", "license_url": importer.LICENSES["CC-BY-4.0"],
                                "license_evidence_url": "https://example.org/license", "evidence_scope": "Fixture figure"}}
        self.review = {"id": self.item["id"], "record_sha256": importer.record_digest(self.item),
                       "license_review": "approved", "third_party_review": "approved", "reviewed_by": "fixture reviewer",
                       "checked_at": "2026-10-01", "license_notes": "Test rights proof", "third_party_notes": "Test third-party proof",
                       "license_evidence_url": "https://example.org/license", "visual_source_review": "source_index_verified",
                       "figure_scope_review": "source_index_verified", "visual_notes": "Fixture image", "scope_notes": "Fixture main figure"}

    def test_unknown_license_remains_metadata_without_download(self):
        item = copy.deepcopy(self.item)
        item["rights"] = {"source_license": "unknown"}
        importer.validate_record(item)
        with patch.object(importer, "download_image") as fetch:
            with self.assertRaises(ValueError):
                importer.stage_record(Path("unused"), item, None, {"example.org"})
            fetch.assert_not_called()

    def test_changed_image_url_invalidates_license_review(self):
        self.item["source"]["image_url"] = "https://example.org/other.png"
        with self.assertRaises(ValueError):
            importer.validate_review(self.item, self.review)

    def test_unsafe_id_and_paper_pdf_fail(self):
        self.item["id"] = "../escape"
        with self.assertRaises(ValueError):
            importer.validate_record(self.item)
        self.item["id"] = "safe-id"
        self.item["source"]["format"] = "pdf"
        with self.assertRaises(ValueError):
            importer.validate_record(self.item)

    def test_unknown_number_needs_explicit_index_claim(self):
        self.item["source"]["number"] = None
        with self.assertRaises(ValueError):
            importer.validate_record(self.item)
        self.item["source"]["number_status"] = "source_index_leading_figure"
        importer.validate_record(self.item)

    def test_human_promotion_requires_image_checksum(self):
        with self.assertRaises(ValueError):
            importer.validate_review(self.item, self.review, for_promotion=True)

    def test_staging_promotion_and_tamper_detection(self):
        image = io.BytesIO()
        Image.new("RGB", (16, 12), "white").save(image, format="PNG")
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            with patch.object(importer, "download_image", return_value=image.getvalue()):
                staged = importer.stage_record(root, self.item, self.review, {"example.org"})
            self.review["asset_sha256"] = staged["asset_sha256"]
            metadata = importer.promote_record(root, self.item, self.review)
            self.assertEqual(metadata["reuse"]["prompt_status"], "draft")
            self.assertEqual(metadata["reuse"]["analysis_status"], "source_record_only")
            self.assertEqual(metadata["reuse"]["validation"]["visual_extraction"], "source_index_verified")
            self.assertEqual(metadata["original_assets"][0]["source_kind"], "upstream_extracted_figure")
            (root / "cache/external-figures" / self.item["id"] / staged["original_file"]).write_bytes(b"tampered")
            with self.assertRaises(ValueError):
                importer.promote_record(root, self.item, self.review)

    def test_topconf_code_license_never_grants_figure_rights(self):
        index = [{"id": "fixture.id", "title": "Fixture", "authors": [], "venue": "acl", "year": 2025,
                  "image": "images/acl/final/fixture.jpg", "paper": "https://example.org/paper", "pattern": "teaser"}]
        provenance = {"source_repository": "https://github.com/qwdwqfwq/topconf-paper-figure-gallery", "source_commit": "f"*40,
                      "index_url": "https://example.org/index", "collected_at": "2026-10-01", "figure_scope": "Leading figure"}
        records, reviews = importer.normalize_topconf(index, provenance, [])
        self.assertEqual(records[0]["rights"]["source_license"], "unknown")
        self.assertEqual(records[0]["source"]["number"], None)
        self.assertEqual(records[0]["classification"]["primary_type"], "teaser")
        self.assertEqual(reviews, [])

    def test_asset_host_allowlist_and_local_storage_guard(self):
        with self.assertRaises(ValueError):
            importer.checked_host("https://example.org/image.png", {"different.example"})
        with self.assertRaises(ValueError):
            importer.server_root(Path("/tmp/external-local-storage-fixture"))

    def test_pdf_response_is_refused_before_reading_body(self):
        from unittest.mock import MagicMock
        response = MagicMock()
        response.url = "https://example.org/figure.png"
        response.headers = {"Content-Type": "application/pdf"}
        opener = MagicMock()
        opener.open.return_value.__enter__.return_value = response
        with patch.object(importer, "checked_host"), patch.object(importer.urllib.request, "build_opener", return_value=opener):
            with self.assertRaises(ValueError):
                importer.download_image("https://example.org/figure.png", {"example.org"})
        response.read.assert_not_called()

    def test_preserved_openreview_requires_title_and_public_matching(self):
        row = {"id": "fixture", "title": "Fixture", "authors": [], "venue": "iclr", "year": 2025,
               "image": "images/iclr/final/fixture.jpg", "paper": "https://openreview.net/forum?id=test", "pattern": "teaser",
               "license": "CC-BY-4.0", "license_url": importer.LICENSES["CC-BY-4.0"],
               "license_evidence_url": "https://example.org/snapshot", "license_primary_url": "https://openreview.net/forum?id=test",
               "license_verification": "mirrored_official_license", "snapshot_commit": "f"*40, "snapshot_sha256": "a"*64}
        provenance = {"source_repository": "https://github.com/qwdwqfwq/topconf-paper-figure-gallery", "source_commit": "f"*40,
                      "index_url": "https://example.org/index", "collected_at": "2026-10-01", "figure_scope": "Leading figure"}
        proof = {"id": "fixture", "status": "permissive_license_in_preserved_note", "public": True, "title_matches": False,
                 "note_license": "CC BY 4.0", "source_commit": "f"*40,
                 "source_binding": "forum_current_pdf", "snapshot_sha256": "a"*64, "snapshot_url": row["license_evidence_url"],
                 "primary_forum_url": row["license_primary_url"]}
        normalized, reviews = importer.normalize_openreview([row], provenance, [proof])
        self.assertEqual(reviews, [])
        self.assertEqual(normalized[0]["rights"]["source_license"], "unknown")
        proof["title_matches"] = True
        normalized, reviews = importer.normalize_openreview([row], provenance, [proof])
        self.assertEqual(len(reviews), 1)
        self.assertEqual(normalized[0]["rights"]["license_verification"], "preserved_official_api_note")

    def test_dataset_scope_and_machine_description_stay_unresolved(self):
        description = "A flowchart shows the supplied processing stages."
        revision = "b38211e94f25858388f860b6db0b596b3ff45f18"
        row = {"id": "sciforma-1", "paper_id": "2501.00001", "title": "Fixture", "authors": [], "year": 2025,
               "arxiv_url": "https://arxiv.org/abs/2501.00001", "arxiv_first_submitted_at": "2025-01-01T00:00:00Z",
               "arxiv_updated_at": "2025-01-01T00:00:00Z", "arxiv_subjects": ["cs.AI"],
               "dataset_revision": revision, "license": "CC-BY-4.0", "license_url": importer.LICENSES["CC-BY-4.0"],
               "license_evidence_url": f"https://huggingface.co/datasets/microsoft/SciFormaData-700K/blob/{revision}/README.md",
               "source_license_evidence_kind": "frozen_dataset_row_license", "license_verification": "dataset_audited_hosted_row",
               "ai_scope_verification": "arxiv_subject_category", "paper_metadata_sha256": "a"*64,
               "paper_metadata_checked_at": "2026-10-01", "prompt_text": description,
               "caption_sha256": importer.hashlib.sha256(description.encode()).hexdigest(),
               "row_index": 1, "row_api_url": "https://example.org/row/1", "image_url": "https://example.org/fixture.jpg"}
        normalized, reviews = importer.normalize_sciforma([row])
        self.assertEqual(len(reviews), 1)
        self.assertEqual(normalized[0]["source"]["document"], "unspecified")
        self.assertIsNone(normalized[0]["source"]["number"])
        self.assertIsNone(normalized[0]["source"]["caption"])
        self.assertEqual(normalized[0]["classification"]["status"], "dataset_generated_labels")
        texts = importer.draft_texts(normalized[0])
        self.assertIn(description, texts["prompt"])
        self.assertIn("not an author prompt", texts["prompt"])


if __name__ == "__main__":
    unittest.main()
