#!/usr/bin/env python3
"""Exercise external-index permissions, provenance, and real image checksum gates."""
import copy
import io
import json
import tempfile
import unittest
import contextlib
import os
import runpy
from types import SimpleNamespace
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
               "row_index": 1, "row_api_url": "https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=0&length=100", "image_url": "https://example.org/fixture.jpg"}
        self.dataset_row = row
        normalized, reviews = importer.normalize_sciforma([row])
        self.assertEqual(len(reviews), 1)
        self.assertEqual(normalized[0]["source"]["document"], "unspecified")
        self.assertIsNone(normalized[0]["source"]["number"])
        self.assertIsNone(normalized[0]["source"]["caption"])
        self.assertEqual(normalized[0]["classification"]["status"], "dataset_generated_labels")
        texts = importer.draft_texts(normalized[0])
        self.assertIn(description, texts["prompt"])
        self.assertIn("not an author prompt", texts["prompt"])

    def test_github_runner_authorization_requires_linux_and_scoped_workspace(self):
        with tempfile.TemporaryDirectory() as directory:
            workspace = Path(directory) / "workspace"
            workspace.mkdir()
            environment = {"GITHUB_ACTIONS": "true", "GITHUB_WORKSPACE": str(workspace),
                           "GITHUB_REPOSITORY": "DocZbs/Awesome-Academic-Figures", "GITHUB_RUN_ID": "12345"}
            with patch.dict(os.environ, environment, clear=True), patch.object(importer.os, "uname", return_value=SimpleNamespace(sysname="Linux")):
                self.assertEqual(importer.server_root(workspace / "batch"), (workspace / "batch").resolve())
                with self.assertRaises(ValueError): importer.server_root(Path(directory) / "outside")
                (workspace / "escape").symlink_to(Path(directory))
                with self.assertRaises(ValueError): importer.server_root(workspace / "escape" / "outside")
                with patch.dict(os.environ, {"GITHUB_REPOSITORY": "different/repository"}):
                    with self.assertRaises(ValueError): importer.server_root(workspace)
            with patch.dict(os.environ, environment, clear=True), patch.object(importer.os, "uname", return_value=SimpleNamespace(sysname="Darwin")):
                with self.assertRaises(ValueError): importer.server_root(workspace)
            with patch.dict(os.environ, {"GITHUB_ACTIONS": "true"}, clear=True), patch.object(importer.os, "uname", return_value=SimpleNamespace(sysname="Linux")):
                with self.assertRaises(ValueError): importer.server_root(workspace)
                with patch.object(Path, "resolve", lambda path: path):
                    self.assertEqual(importer.server_root(Path("/home/jdp/repo")), Path("/home/jdp/repo"))

    def test_repeat_promotion_preserves_reviewed_files_and_preview(self):
        stream = io.BytesIO(); Image.new("RGB", (16, 12), "white").save(stream, format="PNG")
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            with patch.object(importer, "download_image", return_value=stream.getvalue()):
                stage = importer.stage_record(root, self.item, self.review, {"example.org"})
            self.review["asset_sha256"] = stage["asset_sha256"]
            metadata = importer.promote_record(root, self.item, self.review)
            out = root / "figures" / self.item["id"]
            metadata["classification"]["primary_type"] = "conceptual"
            metadata["curation"]["manual_review"] = "Verified pixels"
            (out / "metadata.json").write_text(json.dumps(metadata))
            (out / "prompt.md").write_text("Reviewed adaptation prompt")
            (out / "preview.webp").write_bytes(b"Existing preview bytes")
            before = {p.name: p.read_bytes() for p in out.iterdir()}
            self.assertEqual(importer.promote_record(root, self.item, self.review), metadata)
            self.assertEqual({p.name:p.read_bytes() for p in out.iterdir()}, before)
            (out / stage["original_file"]).write_bytes(b"tampered")
            with self.assertRaises(ValueError): importer.promote_record(root, self.item, self.review)

    def test_sciforma_real_revision_row_binding_and_bibliographic_fields(self):
        self.test_dataset_scope_and_machine_description_stay_unresolved()
        row = copy.deepcopy(self.dataset_row)
        row["dataset_revision"] = "c" * 40
        row["license_evidence_url"] = f"https://huggingface.co/datasets/microsoft/SciFormaData-700K/blob/{row['dataset_revision']}/README.md"
        row.update(doi="10.1234/fixture", journal_reference="Author supplied journal reference")
        records, reviews = importer.normalize_sciforma([row])
        self.assertEqual(len(reviews), 1)
        self.assertEqual(records[0]["source"]["version"], "c"*40)
        self.assertEqual(records[0]["paper"]["doi"], row["doi"])
        self.assertEqual(records[0]["paper"]["journal_reference"], row["journal_reference"])
        self.assertEqual(records[0]["paper"]["venue"], "arXiv")
        row["row_index"] = 101
        with self.assertRaises(ValueError): importer.normalize_sciforma([row])
        row["row_index"] = 1; row["id"] = "sciforma-2"
        with self.assertRaises(ValueError): importer.normalize_sciforma([row])

    def test_sciforma_cannot_reuse_another_revision_policy(self):
        self.test_dataset_scope_and_machine_description_stay_unresolved()
        row = copy.deepcopy(self.dataset_row); row["dataset_revision"] = "c"*40
        records, reviews = importer.normalize_sciforma([row])
        self.assertEqual((records, reviews), ([], []))

    def test_incremental_dedup_preserves_baseline_and_alias_history(self):
        import sys
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory); (root / "data").mkdir()
            digest = importer.hashlib.sha256(b"exact whole image").hexdigest()
            for identifier in ("z-existing", "a-new"):
                out = root / "figures" / identifier; out.mkdir(parents=True)
                (out / "original.png").write_bytes(b"exact whole image")
                metadata = {"id": identifier, "original_assets": [{"file":"original.png", "sha256":digest}],
                    "paper": self.item["paper"], "source":{"method":"external_index_image"},
                    "rights":self.item["rights"], "reuse":{"prompt_origin":"fixture"}}
                (out / "metadata.json").write_text(json.dumps(metadata))
            (root / "data/catalog.json").write_text(json.dumps({"figures":[{"id":"z-existing"}]}))
            alias = {"id":"old-alias", "canonical_id":"z-existing", "image_sha256":digest}
            ledger = root / "data/figure-aliases.json"; ledger.write_text(json.dumps({"aliases":[alias]}))
            script = Path(__file__).with_name("deduplicate_figures.py")
            argv = [str(script), "--root", str(root), "--report", str(root / "dedup-report.json")]
            for _ in range(2):
                with patch.object(importer,"server_root",return_value=root), patch.object(sys,"argv",argv), contextlib.redirect_stdout(io.StringIO()):
                    runpy.run_path(str(script), run_name="__main__")
            report=json.loads(ledger.read_text()); self.assertEqual(report["duplicate_count"],2)
            self.assertEqual(report["new_duplicate_count"],0)
            self.assertEqual(report["aliases"][1],alias)
            self.assertTrue((root / "figures/z-existing").exists())
            self.assertFalse((root / "figures/a-new").exists())
            self.assertTrue((root / "cache/external-duplicates/a-new/original.png").exists())

    def test_reconcile_keeps_reviewed_genre_and_rejects_wrong_exclusion_sha(self):
        import sys
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory); out=root/'figures'/self.item['id']; out.mkdir(parents=True)
            metadata={'id':self.item['id'],'paper':self.item['paper'],'source':{'method':'external_index_image','upstream_pattern':'teaser'},
                      'classification':{'primary_type':'conceptual','types':['conceptual'],'status':'visual_reviewed'},'curation':{},
                      'original_assets':[{'file':'original.png'}]}
            (out/'metadata.json').write_text(json.dumps(metadata)); (out/'original.png').write_bytes(b'actual')
            sample=root/'sample.json';sample.write_text(json.dumps({'records':[],'excluded_ids':[]}))
            inventory=root/'awards.json';inventory.write_text(json.dumps({'papers':[]}))
            script=Path(__file__).with_name('reconcile_external_collection.py')
            argv=[str(script),'--root',str(root),'--sample-review',str(sample),'--award-inventory',str(inventory),'--report',str(root/'report.json')]
            with patch.object(importer,'server_root',return_value=root),patch.object(sys,'argv',argv),contextlib.redirect_stdout(io.StringIO()):runpy.run_path(str(script),run_name='__main__')
            self.assertEqual(json.loads((out/'metadata.json').read_text())['classification']['types'],['conceptual'])
            sample.write_text(json.dumps({'records':[{'id':self.item['id'],'normalized_id':self.item['id'],'review_status':'exclude_crop','observation':'wrong snapshot','image_sha256':'a'*64}],'excluded_ids':[self.item['id']]}))
            with patch.object(importer,'server_root',return_value=root),patch.object(sys,'argv',argv):
                with self.assertRaises(ValueError):runpy.run_path(str(script),run_name='__main__')
            self.assertTrue(out.exists())


if __name__ == "__main__":
    unittest.main()
