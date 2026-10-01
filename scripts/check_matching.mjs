import assert from "node:assert/strict";
import { rankFigures, preparePaperText, analyzePaper, matchesFigureKind, MATCH_FIGURE_KINDS } from "../src/matching.js";
const figure = (id, title, type = "architecture", purposes = []) => ({
  id, paper: { id, title },
  classification: { primary_type: type, types: [type], purposes, search_aliases: [] },
});
const corpus = [
  figure("medical", "Medical Multimodal Language Models for Clinical Diagnosis"),
  figure("diffusion", "Diffusion Models for Video Generation"),
  figure("graph", "Graph Neural Networks for Molecular Prediction"),
  figure("agent", "Multi-Agent Coordination with Reinforcement Learning"),
  figure("medical-data", "A Medical Multimodal Dataset and Benchmark", "taxonomy", ["dataset-overview"]),
];
const chinese = rankFigures(corpus, "我们研究医学多模态大语言模型，结合临床图像与语言信息生成诊断解释，并展示方法框架。", { figureKind: "architecture" });
assert.equal(chinese.results[0].figure.id, "medical");
assert.ok(chinese.results[0].reasons.some(reason => reason.includes("医学")));
const dataset = rankFigures(corpus, "We introduce a medical multimodal dataset with clinical question answering benchmark.", { figureKind: "dataset" });
assert.deepEqual(dataset.results.map(r => r.figure.id), ["medical-data"]);
const paper = "Graph neural networks for molecular prediction\nAbstract\nGraph neural networks model molecular structures.\n1 Introduction\nWe investigate molecule graph representation.\nReferences\nDiffusion video generation diffusion diffusion diffusion.";
const refs = rankFigures(corpus, paper, { figureKind: "architecture" });
assert.equal(refs.results[0].figure.id, "graph");
assert.equal(refs.analysis.referencesExcluded, true);
assert.ok(!preparePaperText(paper).focusedText.includes("Diffusion"));
assert.deepEqual(rankFigures(corpus, "").results, []);
assert.deepEqual(rankFigures(corpus, "Quantum thermodynamics thermoelectric spectroscopy", { figureKind: "all" }).results, []);
const diversity = rankFigures([ { ...corpus[0], id: "a" }, { ...corpus[0], id: "b" }, { ...corpus[0], id: "c" } ], "Clinical medical multimodal language models", { figureKind: "architecture" });
assert.equal(diversity.results.length, 2, "Keep the same-paper diversity cap");
const genres = [
  figure("teaser", "Medical Multimodal Clinical Diagnosis", "teaser"),
  figure("mechanism", "Medical Multimodal Clinical Diagnosis", "conceptual", ["mechanism"]),
  figure("conceptual", "Medical Multimodal Clinical Diagnosis", "conceptual"),
  figure("architecture", "Medical Multimodal Clinical Diagnosis"),
  figure("flowchart", "Medical Multimodal Clinical Diagnosis", "flowchart"),
  figure("comparison", "Medical Multimodal Clinical Diagnosis", "qualitative", ["comparison"]),
  figure("data", "Medical Multimodal Clinical Diagnosis", "bar"),
  figure("dataset", "Medical Multimodal Clinical Diagnosis", "taxonomy", ["dataset-overview"]),
  figure("multi-panel", "Medical Multimodal Clinical Diagnosis", "multi-panel"),
];
for (const kind of Object.keys(MATCH_FIGURE_KINDS)) {
  const result = rankFigures(genres, "Medical multimodal clinical diagnosis", { figureKind: kind });
  assert.ok(result.results.length > 0, `Need candidates for ${kind}`);
  assert.ok(result.results.every(r => matchesFigureKind(r.figure, kind)), `Must never recommend another genre for ${kind}`);
  assert.equal(result.eligibleCount, genres.filter(f => matchesFigureKind(f, kind)).length);
  if (kind !== "all") assert.ok(result.results.every(r => r.reasons.some(reason => reason.includes(MATCH_FIGURE_KINDS[kind]))));
}
assert.deepEqual(rankFigures(genres, "Medical multimodal clinical diagnosis").results.map(r => r.figure.id), ["teaser"], "Default to Teaser, not inferred contribution purpose");
assert.equal(analyzePaper("We introduce a new medical dataset.", "mechanism").figureKind, "mechanism", "User figure kind is never overridden by paper wording");
assert.equal(analyzePaper("Medical methods").figureKind, "teaser");
assert.deepEqual(rankFigures([corpus[0]], "Clinical medical language models", { figureKind: "mechanism" }).results, [], "Do not backfill a missing genre with architecture figures");
assert.deepEqual(rankFigures([genres[0]], "Video diffusion generation", { figureKind: "teaser" }).results, [], "Figure kind alone cannot create topical relevance");
assert.equal(matchesFigureKind({ ...corpus[0], source: { number: 1, number_status: "source_index_leading_figure" } }, "teaser"), false, "Figure 1 or leading position alone does not establish Teaser type");
console.log("Matching checks passed: explicit figure kinds, strict genre filtering, multilingual topics, empty/missing-kind recovery, references and paper diversity.");
