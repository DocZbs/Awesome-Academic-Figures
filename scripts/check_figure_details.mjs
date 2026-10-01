import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { loadFigureDetails } from '../src/gallery.js';

const figure = JSON.parse(fs.readFileSync('data/catalog.json', 'utf8')).figures[0];
const metadata = fs.readFileSync(`figures/${figure.id}/metadata.json`, 'utf8');
const originalFetch = globalThis.fetch;
let tampered = true;
let requests = 0;
globalThis.fetch = async (url) => {
  requests++;
  if (url.endsWith('/metadata.json')) return new Response(tampered ? metadata + ' ' : metadata);
  return new Response('Verified fixture text');
};
try {
  await assert.rejects(loadFigureDetails(figure), /metadata changed/);
  tampered = false;
  const detail = await loadFigureDetails(figure);
  assert.equal(detail.id, figure.id);
  assert.equal(detail.analysis_text, 'Verified fixture text');
  assert.equal(detail.rights.license_evidence_url, figure.rights.license_evidence_url);
  assert.equal(detail.source.caption, JSON.parse(metadata).source.caption);
  const after = requests;
  assert.equal(await loadFigureDetails(figure), detail);
  assert.equal(requests, after);
  const full = JSON.parse(metadata);
  full.id = 'fixture-layout-overlay';
  full.classification.layouts = [];
  full.reuse.prompt_status = 'draft';
  const bytes = JSON.stringify(full);
  const overlay = {
    ...full,
    asset_base: figure.asset_base,
    metadata_sha256: createHash('sha256').update(bytes).digest('hex'),
    classification: { ...full.classification, layouts: ['top-to-bottom'] },
    layout_annotation: { status: 'visual_layout_reviewed', observation: 'Stacked macro stages.' },
  };
  globalThis.fetch = async (url) => new Response(url.endsWith('/metadata.json') ? bytes : 'Fixture text');
  const overlaidDetail = await loadFigureDetails(overlay);
  assert.deepEqual(overlaidDetail.classification.layouts, ['top-to-bottom']);
  assert.deepEqual(overlaidDetail.layout_annotation, overlay.layout_annotation);
  assert.equal(overlaidDetail.reuse.prompt_status, 'draft');
  assert.deepEqual(overlaidDetail.source, full.source);
  const portableMetadata = JSON.parse(JSON.stringify(overlaidDetail));
  assert.equal(portableMetadata.layout_annotation.status, 'visual_layout_reviewed');
  console.log('Detail loading verifies full metadata SHA, rejects changed bytes, retries failures and caches successful results.');
} finally {
  globalThis.fetch = originalFetch;
}
