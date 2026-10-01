import {
  topicsFor,
  normalizeResearchText as normalize,
} from "./research-topics.js";

export const MATCH_FIGURE_KINDS = {
  teaser: "Teaser 图（研究概览）",
  mechanism: "机制图",
  architecture: "方法框架图",
  flowchart: "流程图",
  conceptual: "概念示意图",
  comparison: "对比图",
  data: "数据图",
  dataset: "数据集 / 评测图",
  "multi-panel": "多面板图",
  all: "不限图类",
};
export const FIGURE_KIND_BRIEFS = {
  teaser:
    "用一张研究概览图呈现任务、核心创新与代表性结果，突出读者第一眼应理解的信息。",
  mechanism: "解释关键机制、因果关系或交互过程，明确变量、作用方向与反馈关系。",
  architecture: "展示模块层级、输入输出和模块间连接。",
  flowchart: "按步骤表达流程，明确分支、条件与反馈。",
  conceptual: "用简洁图形解释核心概念与关系。",
  comparison: "对齐比较条件和展示面板，只使用我的方法与真实结果。",
  data: "使用我的真实数据绘制图表，明确坐标、单位和图例。",
  dataset: "表达数据来源、组成、处理与评测组织，使用实际统计信息。",
  "multi-panel": "组织多面板叙事，统一标注、配色和阅读顺序。",
  all: "先根据论文和参考图确定适用的图类，再组织准确的信息表达。",
};
const STOP = new Set(
  "the a an of for to in on with by and or is are was were this that our we as from at it its into via using use based new study paper approach proposed proposes propose method methods model models framework learning learn learned research results result system systems task tasks data dataset datasets figure figures introduction abstract references conclusion related work show shows can not which have has these their also such more than each all between they under first second through over toward towards about some other both specific general many one two three neural deep training trained test testing evaluation evaluate benchmark benchmarks information representation representations algorithm algorithms state art".split(
    " ",
  ),
);
function words(text) {
  return (
    normalize(text)
      .match(/[a-z][a-z0-9-]{2,}/g)
      ?.filter((word) => !STOP.has(word)) || []
  );
}
export function preparePaperText(input) {
  const text = String(input || "")
    .replace(/\r\n?/g, "\n")
    .slice(0, 120000);
  const heading =
    /(?:^|\n)\s*(?:\d+\.?\s*)?(?:references|bibliography|参考文献)\s*(?:\n|$)/im.exec(
      text,
    );
  const withoutReferences = heading ? text.slice(0, heading.index) : text;
  // Limit full-body repetition and use the abstract/method sections first.
  const abstract =
    /(?:^|\n)\s*(?:abstract|摘要)\s*[:：]?\s*\n?([\s\S]{0,5000}?)(?=\n\s*(?:\d+\.?\s*)?(?:introduction|引言|keywords|关键词)\b|$)/i.exec(
      withoutReferences,
    )?.[1] || "";
  const methods =
    /(?:^|\n)\s*(?:\d+(?:\.\d+)*\.?\s*)?(?:method(?:ology)?|methods|approach|proposed method|方法|研究方法)\s*[:：]?\s*\n([\s\S]{0,6500})/i.exec(
      withoutReferences,
    )?.[1] || "";
  return {
    text,
    focusedText: [withoutReferences.slice(0, 6500), abstract, methods]
      .filter(Boolean)
      .join("\n")
      .slice(0, 20000),
    referencesExcluded: Boolean(heading),
    truncated: String(input || "").length > 120000,
  };
}
export function analyzePaper(text, figureKind = "teaser") {
  const prepared = preparePaperText(text);
  const frequency = new Map();
  for (const word of words(prepared.focusedText))
    frequency.set(word, (frequency.get(word) || 0) + 1);
  const keywords = [...frequency]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 40)
    .map(([word]) => word);
  return {
    ...prepared,
    topics: topicsFor(prepared.focusedText),
    keywords,
    figureKind: Object.hasOwn(MATCH_FIGURE_KINDS, figureKind)
      ? figureKind
      : "teaser",
  };
}
function candidateText(figure) {
  return [
    figure.paper?.title,
    figure.paper?.abstract,
    ...(figure.classification?.research_topics || []),
  ]
    .filter(Boolean)
    .join(" ");
}
export function matchesFigureKind(figure, kind) {
  const c = figure.classification || {};
  const types = new Set([c.primary_type, ...(c.types || [])]);
  const purposes = new Set(c.purposes || []);
  if (kind === "all") return true;
  if (kind === "mechanism")
    return purposes.has("mechanism") || types.has("mechanism");
  if (kind === "comparison")
    return purposes.has("comparison") || types.has("qualitative");
  if (kind === "dataset") return purposes.has("dataset-overview");
  if (kind === "data")
    return ["data", "line", "bar", "scatter", "heatmap", "treemap"].some(
      (type) => types.has(type),
    );
  return types.has(kind);
}
export function rankFigures(
  figures,
  text,
  { figureKind = "teaser", limit = 12 } = {},
) {
  const analysis = analyzePaper(text, figureKind);
  const candidates = figures.filter((figure) =>
    matchesFigureKind(figure, analysis.figureKind),
  );
  if (!analysis.focusedText.trim())
    return { analysis, eligibleCount: candidates.length, results: [] };
  const queryWords = new Set(analysis.keywords);
  const documents = candidates.map((figure) => ({
    figure,
    text: candidateText(figure),
    words: new Set(words(candidateText(figure))),
  }));
  const documentFrequency = new Map();
  for (const doc of documents)
    for (const word of doc.words)
      documentFrequency.set(word, (documentFrequency.get(word) || 0) + 1);
  const topicIds = new Set(analysis.topics.map((topic) => topic.id));
  const results = documents
    .map(({ figure, text: candidate, words: candidateWords }) => {
      const topicMatches = topicsFor(candidate).filter((topic) =>
        topicIds.has(topic.id),
      );
      const keywordMatches = [...candidateWords].filter((word) =>
        queryWords.has(word),
      );
      const relevance =
        topicMatches.length * 9 +
        keywordMatches.reduce(
          (score, word) =>
            score +
            Math.min(
              6,
              1 +
                Math.log(
                  1 + documents.length / (documentFrequency.get(word) || 1),
                ),
            ),
          0,
        );
      const kindReason =
        analysis.figureKind === "all"
          ? null
          : `符合所选图类：${MATCH_FIGURE_KINDS[analysis.figureKind]}`;
      return {
        figure,
        score: relevance,
        reasons: [
          ...topicMatches.map((topic) => `共同主题：${topic.label}`),
          ...(keywordMatches.length
            ? [`研究关键词：${keywordMatches.slice(0, 4).join(" · ")}`]
            : []),
          ...(kindReason && relevance > 0 ? [kindReason] : []),
        ],
      };
    })
    .filter((result) => result.score > 0)
    .sort(
      (a, b) => b.score - a.score || a.figure.id.localeCompare(b.figure.id),
    );
  const perPaper = new Map();
  const diversified = results
    .filter(({ figure }) => {
      const paper = figure.paper?.id || figure.id;
      const count = perPaper.get(paper) || 0;
      perPaper.set(paper, count + 1);
      return count < 2;
    })
    .slice(0, limit);
  return { analysis, eligibleCount: candidates.length, results: diversified };
}
