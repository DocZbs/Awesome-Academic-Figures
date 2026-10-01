"""Apply visually evidenced figure genres without approving drawing prompts."""
import json
from layout_annotations import apply_annotation

TYPES = {'architecture', 'flowchart', 'conceptual', 'qualitative', 'data',
         'multi-panel', 'teaser', 'taxonomy', 'mechanism', 'experimental'}
PURPOSES = {'method-overview', 'mechanism', 'comparison', 'qualitative',
            'dataset-overview', 'experimental-setup'}


def load_classifications(root):
    path = root / 'data/classification_annotations.json'
    if not path.exists():
        return {}
    records = json.loads(path.read_text())['annotations']
    result = {item['id']: item for item in records}
    if len(result) != len(records):
        raise ValueError('Duplicate visual genre annotation')
    return result


def apply_classification(entry, annotation, figure_dir=None):
    types = annotation['types']
    # A genre-only inspection does not implicitly inspect the figure's purpose.
    purposes = annotation.get('purposes', entry['classification'].get('purposes', []))
    if annotation['status'] != 'visual_genre_reviewed':
        raise ValueError('Figure genre requires actual visual inspection')
    if (not types or not set(types) <= TYPES or len(types) != len(set(types))
            or annotation['primary_type'] not in types
            or not set(purposes) <= PURPOSES or len(purposes) != len(set(purposes))):
        raise ValueError('Unsupported or duplicate figure genre/purpose')
    # Reuse the same identity, original and preview checksum validation as layouts.
    proof = {**annotation, 'status': 'visual_layout_reviewed',
             'layouts': entry['classification']['layouts'] or ['freeform']}
    checked = json.loads(json.dumps(entry))
    apply_annotation(checked, proof, figure_dir)
    entry['classification'].update(types=list(types), primary_type=annotation['primary_type'],
                                   purposes=list(purposes), status='visual_genre_reviewed')
    entry['classification_annotation'] = annotation
    return entry
