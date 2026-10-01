import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transform } from 'esbuild';
import { filterFigures, filterFieldsFor, assetUrl } from '../src/gallery.js';

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
const fields = filterFieldsFor(figures);
assert.equal(fields.venue.options.length, new Set(figures.map(f => f.paper.venue)).size);
assert.equal(fields.year.options.length, new Set(figures.map(f => f.paper.publication_year)).size);
assert.ok(assetUrl(figures[0], 'preview').startsWith('https://raw.githubusercontent.com/'));
for (const f of figures) assert.equal(f.rights.publication_status, 'approved');
console.log('JSX parses; taxonomy, multi-dimensional filtering, favorites, hidden and no-results checks pass.');
