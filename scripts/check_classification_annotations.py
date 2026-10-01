"""Check independent visual genres, immutable provenance and preview binding."""
import copy
import hashlib
import tempfile
import unittest
from pathlib import Path
from classification_annotations import apply_classification


class ClassificationEvidence(unittest.TestCase):
    def setUp(self):
        self.entry = {'id': 'fixture', 'classification': {'layouts': ['grid'],
                     'types': ['architecture'], 'primary_type': 'architecture',
                     'purposes': ['method-overview']},
                     'source': {'number': 1, 'number_status': 'verified_fixture'},
                     'rights': {'publication_status': 'approved'},
                     'reuse': {'prompt_status': 'draft'},
                     'assets': {'preview': 'preview.webp'},
                     'original_assets': [{'sha256': 'a' * 64}]}
        self.annotation = {'id': 'fixture', 'types': ['mechanism'],
                           'primary_type': 'mechanism', 'purposes': ['mechanism'],
                           'status': 'visual_genre_reviewed',
                           'reference_sha256': 'a' * 64,
                           'preview_sha256': hashlib.sha256(b'pixels').hexdigest(),
                           'observation': 'Two states and a labelled transition arrow.'}

    def test_ui_genres_and_purposes_are_supported(self):
        for genre in ['mechanism', 'experimental', 'teaser', 'architecture',
                      'flowchart', 'conceptual', 'qualitative', 'data', 'multi-panel', 'taxonomy']:
            entry = copy.deepcopy(self.entry)
            apply_classification(entry, {**self.annotation, 'types': [genre], 'primary_type': genre})
            self.assertEqual(entry['classification']['primary_type'], genre)

    def test_genre_review_does_not_upgrade_prompts_numbers_or_rights(self):
        before = copy.deepcopy(self.entry)
        apply_classification(self.entry, self.annotation)
        for key in ['source', 'rights', 'reuse', 'assets', 'original_assets']:
            self.assertEqual(self.entry[key], before[key])
        self.assertEqual(self.entry['classification']['layouts'], ['grid'])
        self.assertNotIn('layout_annotation', self.entry)

    def test_missing_purpose_preserves_original_without_guessing(self):
        annotation = {k: v for k, v in self.annotation.items() if k != 'purposes'}
        apply_classification(self.entry, annotation)
        self.assertEqual(self.entry['classification']['purposes'], ['method-overview'])

    def test_unobserved_figure_one_is_not_teaser(self):
        apply_classification(self.entry, self.annotation)
        self.assertEqual(self.entry['source']['number'], 1)
        self.assertNotIn('teaser', self.entry['classification']['types'])

    def test_unknown_duplicate_and_invalid_primary_tags_rejected(self):
        changes = [{'types': ['unknown']}, {'types': ['mechanism', 'mechanism']},
                   {'types': []}, {'primary_type': 'experimental'},
                   {'purposes': ['unlabelled']}, {'purposes': ['mechanism', 'mechanism']},
                   {'status': 'description_inferred'}]
        for change in changes:
            with self.subTest(change=change), self.assertRaises(ValueError):
                apply_classification(copy.deepcopy(self.entry), {**self.annotation, **change})

    def test_identity_original_and_preview_tampering_rejected_without_mutation(self):
        for change in [{'id': 'another'}, {'reference_sha256': 'b' * 64},
                       {'preview_sha256': ''}, {'observation': ''}]:
            entry = copy.deepcopy(self.entry)
            with self.assertRaises(ValueError):
                apply_classification(entry, {**self.annotation, **change})
            self.assertEqual(entry, self.entry)
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / 'preview.webp').write_bytes(b'pixels')
            apply_classification(copy.deepcopy(self.entry), self.annotation, root)
            (root / 'preview.webp').write_bytes(b'changed')
            entry = copy.deepcopy(self.entry)
            with self.assertRaises(ValueError):
                apply_classification(entry, self.annotation, root)
            self.assertEqual(entry, self.entry)


if __name__ == '__main__':
    unittest.main()
