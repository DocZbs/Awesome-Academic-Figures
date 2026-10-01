import assert from "node:assert/strict";
import fs from "node:fs";
import { filterFigures, facetCountsFor } from "../src/gallery.js";
import { researchTagsFor } from "../src/research-topics.js";
import { rankFigures } from "../src/matching.js";

const catalog = JSON.parse(
  fs.readFileSync("data/catalog.json", "utf8"),
).figures;
const base = {
  query: "",
  dimension: "type",
  category: "all",
  view: "gallery",
  filters: {},
};
const search = (query, figures = catalog, filters = {}) =>
  filterFigures(figures, { ...base, query, filters }, [], []);
const ids = (figures) => figures.map((figure) => figure.id).sort();
for (const synonyms of [
  ["rl", "RL", "reinforcement learning", "强化学习"],
  ["world model", "worldmodel", "world-model", "world models", "世界模型"],
  ["icl", "in-context learning", "上下文学习"],
]) {
  const expected = ids(search(synonyms[0]));
  assert.ok(expected.length > 0);
  for (const term of synonyms)
    assert.deepEqual(ids(search(term)), expected, term);
}
const fixture = (title) => ({
  ...catalog[0],
  id: title,
  paper: { id: title, title, venue: "ICLR", publication_year: 2025 },
  title: { zh: title, en: title },
  classification: {
    ...catalog[0].classification,
    search_aliases: [],
    research_topics: [],
  },
});
const corpus = [
  fixture(
    "World Action Models for Reinforcement Learning and In-Context Learning",
  ),
  fixture("World Models for Reinforcement Learning"),
  fixture("World Models for Visual Control"),
  fixture("Pearls of ICLR: Worldwide Representations"),
  fixture("DetectRL-X: Text Detection"),
];
assert.deepEqual(
  researchTagsFor(corpus[0])
    .filter((tag) => ["rl", "wam", "icl"].includes(tag.id))
    .map((tag) => tag.id),
  ["rl", "wam", "icl"],
);
assert.equal(
  search("rl", [corpus[3], corpus[4]]).length,
  0,
  "Short acronyms must not match unrelated words or ICLR",
);
assert.equal(search("icl", [corpus[3]]).length, 0);
assert.equal(search("world model", [corpus[3]]).length, 0);
assert.equal(search("wam", corpus).length, 1);
assert.equal(search("world action model", corpus).length, 1);
assert.equal(
  search("rl icl", corpus).length,
  1,
  "Multiple query topics use intersection",
);
assert.equal(search("rl, icl", corpus).length, 1);
assert.equal(search("rl + worldmodel", corpus).length, 1);
assert.deepEqual(ids(search("", corpus, { topic: ["rl", "wam", "icl"] })), [
  corpus[0].id,
]);
assert.equal(
  facetCountsFor(corpus, { ...base, filters: { topic: ["rl"] } }, [], []).topic[
    "world-model"
  ],
  1,
);
assert.equal(
  facetCountsFor(corpus, { ...base, filters: { topic: ["rl", "icl"] } }, [], [])
    .topic.wam,
  1,
);
assert.deepEqual(ids(search("", corpus, { topic: ["wam"] })), [corpus[0].id]);
assert.equal(search("rl 2025", corpus).length, 2);
assert.equal(search("not-a-real-research-query", corpus).length, 0);
assert.equal(
  filterFigures(
    corpus,
    { ...base, filters: { topic: ["rl"] }, view: "favorites" },
    [corpus[0].id],
    [],
  ).length,
  1,
);
assert.equal(
  filterFigures(
    corpus,
    { ...base, filters: { topic: ["rl"] } },
    [],
    [corpus[0].id],
  ).length,
  1,
);
assert.ok(
  rankFigures(corpus, "worldmodel", { figureKind: "all" }).results.length > 0,
);
assert.ok(rankFigures(corpus, "ICL", { figureKind: "all" }).results.length > 0);
const index = JSON.parse(fs.readFileSync("data/research_tags.json", "utf8"));
assert.equal(index.figure_count, catalog.length);
for (const figure of catalog) {
  const record = index.figures.find((record) => record.id === figure.id);
  assert.deepEqual(record.tags, researchTagsFor(figure));
  assert.ok(
    record.tags.every(
      (tag) => tag.evidence.length && tag.status === "metadata_keyword_match",
    ),
  );
}
console.log(
  "Research search passes: aliases, acronym boundaries, multi-tag intersections, facet counts, recommendation and agent-index parity.",
);
