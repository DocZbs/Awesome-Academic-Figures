"""Regression checks for layout provenance and immutable source data."""
import copy
import hashlib
import json
import tempfile
import unittest
from pathlib import Path
from layout_annotations import apply_annotation


class LayoutEvidence(unittest.TestCase):
    def setUp(self):
        self.entry = {'id':'fixture','classification':{'layouts':[],'types':['architecture']},'source':{'number':None,'description_sha256':'b'*64},'rights':{'publication_status':'approved'},'assets':{'preview':'preview.webp'},'original_assets':[{'sha256':'a'*64}]}
        self.annotation = {'id':'fixture','layouts':['top-to-bottom'],'status':'description_inferred','description_sha256':'b'*64,'reference_sha256':'a'*64,'observation':'Explicit vertical arrangement in source description.'}

    def test_layout_update_preserves_other_metadata(self):
        before=copy.deepcopy(self.entry)
        apply_annotation(self.entry,self.annotation)
        for field in ['source','rights','assets','original_assets']:
            self.assertEqual(self.entry[field],before[field])
        self.assertEqual(self.entry['classification']['types'],['architecture'])
        self.assertEqual(self.entry['classification']['layouts'],['top-to-bottom'])
        self.assertEqual(self.entry['layout_annotation']['status'],'description_inferred')

    def test_changed_description_or_original_rejected(self):
        for field in ['description_sha256','reference_sha256']:
            annotation={**self.annotation,field:'c'*64}
            with self.assertRaises(ValueError):apply_annotation(self.entry,annotation)

    def test_changed_visual_preview_rejected(self):
        annotation={**self.annotation,'status':'visual_layout_reviewed','preview_sha256':hashlib.sha256(b'actual pixels').hexdigest()}
        with tempfile.TemporaryDirectory() as folder:
            path=Path(folder);(path/'preview.webp').write_bytes(b'actual pixels')
            apply_annotation(self.entry,annotation,path)
            (path/'preview.webp').write_bytes(b'changed pixels')
            with self.assertRaises(ValueError):apply_annotation(self.entry,annotation,path)

    def test_invalid_or_empty_tags_rejected(self):
        for tags in [[],['wide-image'],['grid','grid']]:
            with self.assertRaises(ValueError):apply_annotation(self.entry,{**self.annotation,'layouts':tags})

    def test_published_overlay_matches_catalog_and_evidence(self):
        root=Path(__file__).resolve().parent.parent
        path=root/'data/layout_annotations.json'
        if not path.exists():self.skipTest('Layout batch is not assembled yet')
        report=json.loads(path.read_text());catalog=json.loads((root/'data/catalog.json').read_text());figures={f['id']:f for f in catalog['figures']}
        self.assertEqual(len(report['annotations']),len({a['id'] for a in report['annotations']}))
        self.assertEqual(report['reviewed_count'],len(report['annotations']))
        self.assertEqual(report['inspected_count'],len(report['annotations'])+len(report['unresolved']))
        self.assertEqual(report['layout_labelled_count'],sum(bool(f['classification']['layouts']) for f in figures.values()))
        self.assertTrue(all(not figures[item['id']]['classification']['layouts'] for item in report['unresolved']))
        descriptions={f['id']:f for f in json.loads((root/'data/external/sciforma/approved-import-index.json').read_text())}
        for annotation in report['annotations']:
            with self.subTest(figure=annotation['id']):
                f=figures[annotation['id']]
                self.assertEqual(f['classification']['layouts'],annotation['layouts'])
                self.assertEqual(f['layout_annotation'],annotation)
                apply_annotation(copy.deepcopy(f),annotation)
                if annotation['status']=='description_inferred':
                    source=descriptions[annotation['id']]['dataset_generation_caption']
                    self.assertEqual(hashlib.sha256(source.encode()).hexdigest(),annotation['description_sha256'])
                    self.assertTrue(annotation['evidence_spans'])
                    for span in annotation['evidence_spans']:
                        self.assertTrue(0<=span['start']<span['end']<=len(source))
        self.assertEqual(report['unlabelled_after'],sum(not f['classification']['layouts'] for f in figures.values()))


if __name__=='__main__':unittest.main()
