import assert from "node:assert/strict";
import {
  rankFigures,
  preparePaperText,
  analyzePaper,
} from "../src/matching.js";
const figure = (id, title, type = "architecture", purposes = []) => ({
  id,
  paper: { id, title },
  classification: {
    primary_type: type,
    types: [type],
    purposes,
    search_aliases: [],
  },
});
const corpus = [
  figure(
    "medical",
    "Medical Multimodal Language Models for Clinical Diagnosis",
  ),
  figure("diffusion", "Diffusion Models for Video Generation"),
  figure("graph", "Graph Neural Networks for Molecular Prediction"),
  figure("agent", "Multi-Agent Coordination with Reinforcement Learning"),
  figure(
    "medical-data",
    "A Medical Multimodal Dataset and Benchmark",
    "taxonomy",
    ["dataset-overview"],
  ),
];
const chinese = rankFigures(
  corpus,
  "我们研究医学多模态大语言模型，结合临床图像与语言信息生成诊断解释，并展示方法框架。",
  { purpose: "method" },
);
assert.equal(
  chinese.results[0].figure.id,
  "medical",
  "Chinese topic synonyms must rank related English paper above unrelated diffusion",
);
assert.ok(chinese.results[0].reasons.some((reason) => reason.includes("医学")));
const dataset = rankFigures(
  corpus,
  "We introduce a medical multimodal dataset with clinical question answering benchmark.",
  { purpose: "dataset" },
);
assert.equal(
  dataset.results[0].figure.id,
  "medical-data",
  "Dataset purpose must prefer matching dataset overview to architecture",
);
const paper =
  "Graph neural networks for molecular prediction\nAbstract\nGraph neural networks model molecular structures.\n1 Introduction\nWe investigate molecule graph representation.\nReferences\nDiffusion video generation diffusion diffusion diffusion.";
const refs = rankFigures(corpus, paper);
assert.equal(
  refs.results[0].figure.id,
  "graph",
  "Reference titles must not pollute matching",
);
assert.equal(refs.analysis.referencesExcluded, true);
assert.ok(!preparePaperText(paper).focusedText.includes("Diffusion"));
assert.deepEqual(rankFigures(corpus, "").results, []);
assert.deepEqual(
  rankFigures(corpus, "Quantum thermodynamics thermoelectric spectroscopy")
    .results,
  [],
);
const diversity = rankFigures(
  [
    { ...corpus[0], id: "a" },
    { ...corpus[0], id: "b" },
    { ...corpus[0], id: "c" },
  ],
  "Clinical medical multimodal language models",
);
assert.equal(
  diversity.results.length,
  2,
  "Limit same-paper repetitions to two figures",
);
assert.equal(
  analyzePaper(
    "Efficient Medical Language Models\nAbstract\nWe propose an efficient method, evaluate on a clinical dataset and compare with prior models through ablation experiments.",
  ).purpose,
  "method",
  "Method contribution mentioning dataset and comparison must keep method purpose",
);
assert.equal(
  analyzePaper(
    "新型多模态模型\n摘要\n我们提出一个医学诊断方法，在公开数据集上评测并进行消融和对比实验。",
  ).purpose,
  "method",
  "Chinese method experiments must not imply dataset or comparison overview",
);
assert.equal(
  analyzePaper(
    "We introduce a medical multimodal dataset for clinical question answering.",
  ).purpose,
  "dataset",
  "An explicit new dataset contribution should infer dataset purpose",
);
assert.equal(
  analyzePaper(
    "Comparative analysis of graph architectures\nAbstract\nWe investigate the practical tradeoffs.",
  ).purpose,
  "comparison",
  "An explicit comparative study title should infer comparison purpose",
);
console.log(
  "Matching checks passed: Chinese/English topics, purpose fit, reference exclusion, empty/unrelated text, paper diversity.",
);
