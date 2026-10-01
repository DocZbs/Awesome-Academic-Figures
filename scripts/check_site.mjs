import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transform } from 'esbuild';
import { filterFigures, filterFieldsFor, assetUrl, categorySummary, facetCountsFor, figureLabel, valuesFor } from '../src/gallery.js';

for (const file of ['src/App.jsx', 'src/ui.jsx', 'src/main.jsx']) {
  await transform(fs.readFileSync(file, 'utf8'), { loader: 'jsx', jsx: 'automatic' });
}
const figures = JSON.parse(fs.readFileSync('data/catalog.json', 'utf8')).figures;
const base = { query: '', dimension: 'type', category: 'all', view: 'gallery', filters: {} };
assert.equal(filterFigures(figures, base, [], []).length, figures.length);
const architecture = filterFigures(figures, { ...base, category: 'architecture' }, [], []);
assert.ok(architecture.length > 0);
assert.ok(architecture.every(f => f.classification.types.includes('architecture')));
const paired = filterFigures(figures, { ...base, filters: { number: ['2'], layout: ['two-column'] } }, [], []);
assert.ok(paired.length > 0);
assert.ok(paired.every(f => f.source.number === 2 && f.classification.layouts.includes('two-column')));
assert.ok(filterFigures(figures, { ...base, query: '双列' }, [], []).length > 0);
assert.equal(filterFigures(figures, { ...base, view: 'favorites' }, [figures[0].id], []).length, 1);
assert.equal(filterFigures(figures, base, [], [figures[0].id]).length, figures.length - 1);
assert.equal(filterFigures(figures, { ...base, view: 'hidden' }, [], [figures[0].id]).length, 1);
assert.equal(filterFigures(figures, { ...base, query: 'no such figure' }, [], []).length, 0);
const layoutScope = filterFigures(figures, { ...base, dimension: 'layout' }, [], []);
const layoutCounts = categorySummary(layoutScope, 'layout');
const unlabelled = filterFigures(figures, { ...base, dimension: 'layout', category: 'unlabelled' }, [], []);
assert.equal(layoutCounts.total, layoutCounts.labelled + layoutCounts.unlabelled);
assert.equal(unlabelled.length, layoutCounts.unlabelled);
assert.ok(unlabelled.every(f => !f.classification.layouts.length));
const labelledIds = new Set(Object.keys(layoutCounts.counts).filter(key => key !== 'unlabelled').flatMap(key =>
  filterFigures(figures, { ...base, dimension: 'layout', category: key }, [], []).map(f => f.id)));
assert.equal(labelledIds.size, layoutCounts.labelled);
const pendingPurpose = filterFigures(figures, { ...base, dimension: 'purpose', category: 'unlabelled' }, [], []);
assert.equal(pendingPurpose.length, figures.filter(f => !f.classification.purposes.length).length);
const missingFixture = { ...figures[0], id: 'fixture-unlabelled', classification: { ...figures[0].classification, layouts: [], purposes: [] } };
const fixtureScope = [figures[0], missingFixture];
const favoriteScope = filterFigures(fixtureScope, { ...base, view: 'favorites', dimension: 'layout' }, [missingFixture.id, figures[0].id], [figures[0].id]);
const favoriteCounts = categorySummary(favoriteScope, 'layout');
assert.equal(favoriteCounts.total, 1);
assert.equal(favoriteCounts.unlabelled, 1);
const hiddenScope = filterFigures(fixtureScope, { ...base, view: 'hidden', dimension: 'layout' }, [], [missingFixture.id]);
assert.equal(categorySummary(hiddenScope, 'layout').counts.unlabelled, 1);
const queryScope = filterFigures(figures, { ...base, query: 'CollabLLM', dimension: 'layout' }, [], []);
assert.equal(categorySummary(queryScope, 'layout').total, queryScope.length);
const fields = filterFieldsFor(figures);
const awarded = filterFigures(figures, { ...base, filters: { award: ['awarded'] } }, [], []);
assert.ok(awarded.length > 0);
assert.ok(awarded.every(f => f.paper.awards?.length > 0));
assert.equal(fields.venue.options.length, new Set(figures.map(f => f.paper.venue)).size);
assert.equal(fields.year.options.length, new Set(figures.map(f => f.paper.publication_year)).size);
assert.ok(assetUrl(figures[0], 'preview').startsWith('https://raw.githubusercontent.com/'));
for (const f of figures) assert.equal(f.rights.publication_status, 'approved');
console.log('JSX parses; taxonomy, multi-dimensional filtering, favorites, hidden and no-results checks pass.');

// Numbers describe paper position; genres describe visual content.
const fixture = (id, number, types, purposes = []) => ({ ...figures[0], id,
  source: { kind: 'figure', number, number_status: number ? 'verified_arxiv_html_correspondence' : 'source_index_leading_figure', number_version: '1234.56789v2' },
  classification: { ...figures[0].classification, types, primary_type: types[0], purposes, layouts: ['two-column'] } });
const numbered = [fixture('first-architecture', 1, ['architecture'], ['mechanism']), fixture('second-teaser', 2, ['teaser']), fixture('unknown-teaser', null, ['teaser'])];
assert.equal(filterFigures(numbered, { ...base, category: 'teaser' }, [], []).length, 2);
assert.deepEqual(valuesFor(numbered[0], 'type'), ['architecture', 'mechanism']);
assert.equal(filterFigures(numbered, { ...base, category: 'mechanism' }, [], []).length, 1);
assert.equal(figureLabel(numbered[0]), 'Figure 1 · arXiv');
assert.equal(figureLabel(numbered[2]), '论文首图 · 图号待核');
const selectedNumber = { ...base, filters: { number: ['1'], layout: ['two-column'] } };
assert.deepEqual(facetCountsFor(numbered, selectedNumber).number, { '1': 1, '2': 1, leading: 1 });
assert.equal(facetCountsFor(numbered, selectedNumber).layout['two-column'], 1);
assert.deepEqual(facetCountsFor(numbered, { ...selectedNumber, category: 'teaser' }).number, { '2': 1, leading: 1 });
assert.deepEqual(facetCountsFor(numbered, { ...selectedNumber, query: 'no such figure' }).number, {});
assert.deepEqual(facetCountsFor(numbered, { ...selectedNumber, view: 'favorites' }, ['second-teaser', 'unknown-teaser'], ['unknown-teaser']).number, { '2': 1 });
assert.deepEqual(facetCountsFor(numbered, { ...selectedNumber, view: 'hidden' }, [], ['unknown-teaser']).number, { leading: 1 });
const batch = JSON.parse(fs.readFileSync('data/visual_review_batch_20261001.json', 'utf8'));
for (const item of batch.figures) {
  const f = figures.find(f => f.id === item.id);
  assert.equal(f.classification.status, 'visually_reviewed');
  assert.equal(f.metadata_sha256, item.metadata_sha256);
  assert.equal(f.source.number, item.number);
  if (item.number) {
    assert.equal(f.source.number_version, item.number_evidence.version);
    assert.ok(item.number_evidence.url.startsWith(`https://arxiv.org/html/${f.source.number_version}#`));
    assert.match(item.number_evidence.official_image_sha256, /^[a-f0-9]{64}$/);
  }
}
for (const n of [1, 2]) assert.ok(figures.filter(f => f.source.number === n).length >= batch.figure_number_counts[String(n)]);
const releasePath = 'data/expansion_release_20261001.json';
if (fs.existsSync(releasePath)) {
  const release = JSON.parse(fs.readFileSync(releasePath, 'utf8'));
  assert.equal(figures.length, release.figure_count);
  for (const n of [1, 2]) {
    const numberedFigures = filterFigures(figures, { ...base, filters: { number: [String(n)] } }, [], []);
    assert.equal(numberedFigures.length, release.known_number_counts[String(n)]);
  }
  const journals = figures.filter(f => f.paper.publication_kind === 'journal');
  assert.equal(journals.length, release.new_journal_count);
  assert.ok(journals.every(f => f.source.number_status === 'verified_publisher_jats_label_graphic_id'));
  assert.ok(journals.every(f => f.classification.status === 'visual_genre_reviewed'));
}

console.log('Figure genres, independent facet counts and recorded numbering evidence checks pass.');
