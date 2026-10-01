"""Assemble directly inspected layout shards into an auditable catalog overlay."""
import collections
import copy
import json
import sys
from pathlib import Path
from layout_annotations import apply_annotation

root = Path(__file__).resolve().parent.parent
review = Path(sys.argv[1])
groups = ['article_source', 'bulk_pipeline', 'bulk_sources', 'root',
          'dataset_a', 'dataset_b', 'dataset_root', 'description_root',
          'description_sample', 'final_a', 'final_b', 'final_c', 'final_root']
catalog_path = root / 'data/catalog.json'
catalog = json.loads(catalog_path.read_text())
before = copy.deepcopy(catalog)
figures = {f['id']: f for f in catalog['figures']}
pending = {f['id'] for f in figures.values() if not f['classification']['layouts']}
annotations = {}
inspected = set()
unresolved = []
for group in groups:
    manifest = json.loads((review / f'{group}-manifest.json').read_text())
    labels = json.loads((review / f'{group}-labels.json').read_text())
    assert [f['id'] for f in labels] == [f['id'] for f in manifest], group
    for item in labels:
        figure_id = item['id']
        assert figure_id in pending and figure_id not in inspected, figure_id
        inspected.add(figure_id)
        assert (item.get('status') == 'visual_layout_reviewed' or
                (item.get('reviewer') and 'pixels' in item.get('basis', '')))
        assert len(item['observation']) > 10
        proof = json.loads((review / f"{group}-sheet-{item['sheet_index']:03}.json").read_text())
        evidence = proof[item['sheet_position'] - 1]
        assert not evidence.get('load_failed')
        for key in ['id', 'preview_sha256', 'sheet_index', 'sheet_position']:
            assert item[key] == evidence[key], (figure_id, key)
        annotation = {**item,
                      'status': 'visual_layout_reviewed',
                      'review_method': 'direct_preview_visual_inspection',
                      'reference_sha256': figures[figure_id]['original_assets'][0]['sha256']}
        if not item['layouts']:
            unresolved.append({**annotation, 'status': 'visual_layout_unresolved'})
            continue
        apply_annotation(figures[figure_id], annotation)
        annotations[figure_id] = annotation
assert inspected == pending, f'Missing {pending - inspected}'
for old, new in zip(before['figures'], catalog['figures']):
    protected = copy.deepcopy(new)
    protected.pop('layout_annotation', None)
    protected['classification']['layouts'] = old['classification']['layouts']
    assert protected == old, old['id']
counts = collections.Counter(tag for f in figures.values() for tag in f['classification']['layouts'])
report = {
    'schema_version': '0.1', 'checked_at': '2026-10-01', 'scope': 'macro_layout_only',
    'total_figures': len(figures), 'unlabelled_before': len(pending),
    'unlabelled_after': sum(not f['classification']['layouts'] for f in figures.values()),
    'inspected_count': len(inspected), 'reviewed_count': len(annotations), 'inferred_count': 0,
    'existing_labelled_count': len(figures) - len(pending),
    'layout_labelled_count': sum(bool(f['classification']['layouts']) for f in figures.values()),
    'tag_counts': dict(sorted(counts.items())),
    'limitations': 'Preview macro layout only. Does not certify paper content, extraction completeness, figure numbering, figure genre or drawing prompts.',
    'annotations': [annotations[key] for key in sorted(annotations)],
    'unresolved': unresolved,
}
(root / 'data/layout_annotations.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, separators=(',', ':')) + '\n')
print(json.dumps({k: v for k, v in report.items() if k != 'annotations'}, ensure_ascii=False))
