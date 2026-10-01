"""Stage only reviewed single-image candidates on the authorized cloud runner."""
import argparse
import concurrent.futures
import json
import time
import urllib.error
from pathlib import Path
from bulk_import_external import (load_records, server_root, stage_record,
                                  promote_record, validate_record, validate_review)

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--index', type=Path, required=True)
parser.add_argument('--reviews', type=Path, required=True)
args = parser.parse_args()
root = server_root(Path.cwd())
for path in (args.index, args.reviews):
    if not path.resolve().is_relative_to(root):
        raise ValueError('Candidate files must stay inside the checkout')
records = load_records(args.index)
reviews = {item['id']: item for item in load_records(args.reviews)}
if len(records) != len({item['id'] for item in records}):
    raise ValueError('Duplicate candidate IDs')
existing = {path.parent.name for path in (root / 'figures').glob('*/metadata.json')}
excluded = set()
for source in ('topconf', 'sciforma'):
    path = root / f'data/external/{source}/visual_sample_review.json'
    if path.exists():
        excluded.update(json.loads(path.read_text()).get('excluded_ids', []))
aliases = root / 'data/figure-aliases.json'
if aliases.exists():
    excluded.update(item['id'] for item in json.loads(aliases.read_text()).get('aliases', []))
hosts = {'datasets-server.huggingface.co', 'journals.plos.org', 'storage.googleapis.com'}
selected = [item for item in records if item['id'] not in existing | excluded]
for item in selected:
    validate_record(item)
    validate_review(item, reviews.get(item['id']))
    if reviews[item['id']].get('asset_binding_method') != 'immutable_source_index_download':
        raise ValueError('Batch staging requires a declared image binding method')


def process(item):
    review = dict(reviews[item['id']])
    for attempt in range(3):
        try:
            staged = stage_record(root, item, review, hosts)
            review['asset_sha256'] = staged['asset_sha256']
            metadata = promote_record(root, item, review)
            return {'id': item['id'], 'status': 'staged',
                    'asset_sha256': staged['asset_sha256'], 'review': review,
                    'paper': metadata['paper']}
        except Exception as error:
            if isinstance(error, urllib.error.HTTPError):
                if error.code in (401, 403):
                    return {'id': item['id'], 'status': 'failed',
                            'error': 'hold_no_retry', 'http_status': error.code,
                            'note': 'Deferred after access refusal; verify the public source URL before a later run.'}
                if error.code == 429:
                    return {'id': item['id'], 'status': 'failed', 'error': 'rate_limited',
                            'http_status': error.code,
                            'retry_after': error.headers.get('Retry-After') if error.headers else None,
                            'note': 'Deferred; no immediate retry of a rate-limited request.'}
            if attempt == 2:
                return {'id': item['id'], 'status': 'failed', 'error': str(error)}
            time.sleep(2 + attempt * 3)


report_path = root / 'data/batches/expand-3k-20261001/staging-report.json'
report_path.parent.mkdir(parents=True, exist_ok=True)
results = []
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    futures = [pool.submit(process, item) for item in selected]
    for future in concurrent.futures.as_completed(futures):
        results.append(future.result())
        if len(results) % 20 == 0 or len(results) == len(selected):
            report = {'indexed_count': len(records), 'already_present': len(records) - len(selected),
                      'staged_count': sum(item['status'] == 'staged' for item in results),
                      'failed_count': sum(item['status'] == 'failed' for item in results),
                      'records': sorted(results, key=lambda item: item['id'])}
            report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
            print(json.dumps({k: v for k, v in report.items() if k != 'records'}), flush=True)
if not results:
    report_path.write_text(json.dumps({'indexed_count': len(records), 'already_present': len(records),
                                     'staged_count': 0, 'failed_count': 0, 'records': []}) + '\n')
