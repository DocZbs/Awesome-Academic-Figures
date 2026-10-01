const TOPICS = [
  [
    "llm",
    "大语言模型",
    [
      "llm",
      "llms",
      "large language model",
      "large language models",
      "language modeling",
      "language models",
      "语言模型",
      "大模型",
      "语言建模",
    ],
  ],
  [
    "vision",
    "计算机视觉",
    [
      "computer vision",
      "vision",
      "visual",
      "image",
      "images",
      "object detection",
      "segmentation",
      "视觉",
      "图像",
      "目标检测",
      "分割",
    ],
  ],
  [
    "rl",
    "强化学习",
    [
      "reinforcement learning",
      "rl",
      "policy optimization",
      "reward",
      "rewards",
      "强化学习",
      "策略优化",
      "奖励",
    ],
  ],
  [
    "diffusion",
    "扩散生成",
    ["diffusion", "denoising", "score matching", "扩散", "去噪"],
  ],
  [
    "graph",
    "图学习",
    [
      "graph",
      "graphs",
      "gnn",
      "graph neural",
      "图神经",
      "图学习",
      "图结构",
      "知识图谱",
    ],
  ],
  [
    "medical",
    "医学与生物",
    [
      "medical",
      "clinical",
      "radiology",
      "biomedical",
      "biology",
      "protein",
      "molecule",
      "molecular",
      "医学",
      "医疗",
      "临床",
      "生物",
      "蛋白质",
      "分子",
    ],
  ],
  [
    "multimodal",
    "多模态",
    [
      "multimodal",
      "multi-modal",
      "vision-language",
      "vision language",
      "text-to-image",
      "多模态",
      "图文",
      "文生图",
    ],
  ],
  [
    "agent",
    "智能体",
    ["agent", "agents", "multi-agent", "agentic", "智能体", "多智能体"],
  ],
  [
    "robotics",
    "机器人与具身",
    [
      "robot",
      "robots",
      "robotic",
      "robotics",
      "embodied",
      "manipulation",
      "机器人",
      "具身",
      "机械臂",
    ],
  ],
  [
    "retrieval",
    "检索增强",
    ["retrieval", "retrieval-augmented", "rag", "检索", "检索增强"],
  ],
  [
    "editing",
    "知识编辑",
    ["knowledge editing", "model editing", "知识编辑", "模型编辑"],
  ],
  ["video", "视频与时序", ["video", "videos", "temporal", "视频", "时序"]],
  [
    "3d",
    "三维与渲染",
    ["3d", "rendering", "nerf", "gaussian splatting", "三维", "渲染"],
  ],
  ["audio", "语音与音频", ["audio", "speech", "tts", "语音", "音频"]],
  [
    "optimization",
    "优化与效率",
    [
      "optimization",
      "efficient",
      "efficiency",
      "compression",
      "sparse",
      "优化",
      "效率",
      "压缩",
      "稀疏",
    ],
  ],
];
export const MATCH_PURPOSES = {
  auto: "从内容判断",
  method: "讲清方法 / 框架",
  dataset: "介绍数据集 / 评测",
  comparison: "对比方法 / 结果",
};
const STOP = new Set(
  "the a an of for to in on with by and or is are was were this that our we as from at it its into via using use based new study paper approach proposed proposes propose method methods model models framework learning learn learned research results result system systems task tasks data dataset datasets figure figures introduction abstract references conclusion related work show shows can not which have has these their also such more than each all between they under first second through over toward towards about some other both specific general many one two three neural deep training trained test testing evaluation evaluate benchmark benchmarks information representation representations algorithm algorithms state art".split(
    " ",
  ),
);
const normalize = (text) =>
  String(text || "")
    .normalize("NFKC")
    .toLowerCase();
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const termPatterns = new Map();
function hasTerm(text, term) {
  if (/[\u3400-\u9fff]/.test(term)) return text.includes(term);
  if (!termPatterns.has(term))
    termPatterns.set(
      term,
      new RegExp(
        `(^|[^a-z0-9])${escape(term).replace(/ /g, "\\s+")}($|[^a-z0-9])`,
        "i",
      ),
    );
  return termPatterns.get(term).test(text);
}
function topicsFor(text) {
  const normalized = normalize(text);
  return TOPICS.filter(([, , terms]) =>
    terms.some((term) => hasTerm(normalized, term)),
  ).map(([id, label]) => ({ id, label }));
}
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
function inferPurpose(text) {
  const n = normalize(text);
  // A method abstract usually mentions data and comparisons too. Require a
  // contribution statement, or a clear title, before switching away from method.
  const title = n.split("\n").find((line) => line.trim()) || "";
  const titleIsSeparate = n.includes("\n") && title.length < 240;
  const datasetContribution =
    /\bwe\s+(?:introduce|release|present|construct|build)\s+(?:a|an|the|our|new)\s+(?:(?!method\b|model\b|framework\b)[a-z0-9-]+\s+){0,12}(?:dataset|benchmark)\b/.test(
      n,
    ) ||
    /(?:本文|我们)[^。！？\n]{0,12}(?:构建|发布|建立)[^。！？\n]{0,35}(?:数据集|评测基准|基准测试集)/.test(
      n,
    );
  const datasetTitle =
    titleIsSeparate &&
    /\b(?:a|an|new|novel)\s+(?:(?!method\b|model\b|framework\b)[a-z0-9-]+\s+){0,12}(?:dataset|benchmark)\b/.test(
      title,
    );
  if (datasetContribution || datasetTitle) return "dataset";
  if (
    (titleIsSeparate &&
      /\b(?:comparative (?:study|analysis)|systematic comparison|benchmarking)\b/.test(
        title,
      )) ||
    /\bwe\s+(?:present|conduct|provide)\s+(?:a|an)\s+(?:systematic|comprehensive|comparative)\s+(?:comparison|analysis|study)\b/.test(
      n,
    ) ||
    /(?:本文|我们)[^。！？\n]{0,12}(?:开展|进行)[^。！？\n]{0,20}(?:系统对比研究|比较研究|对比分析)/.test(
      n,
    )
  )
    return "comparison";
  return "method";
}
export function analyzePaper(text, purpose = "auto") {
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
    purpose: purpose === "auto" ? inferPurpose(prepared.focusedText) : purpose,
  };
}
function candidateText(figure) {
  return [
    figure.paper?.title,
    figure.paper?.abstract,
    figure.title?.en,
    ...(figure.classification?.search_aliases || []),
  ]
    .filter(Boolean)
    .join(" ");
}
function purposeFit(figure, purpose) {
  const c = figure.classification || {};
  const types = new Set([c.primary_type, ...(c.types || [])]);
  const purposes = new Set(c.purposes || []);
  const text = normalize(candidateText(figure));
  if (
    purpose === "dataset" &&
    (purposes.has("dataset-overview") ||
      types.has("taxonomy") ||
      /\b(dataset|benchmark|evaluation)\b/.test(text))
  )
    return "适合介绍数据集 / 评测组成";
  if (
    purpose === "comparison" &&
    (purposes.has("comparison") ||
      types.has("qualitative") ||
      types.has("multi-panel") ||
      /\b(comparison|comparative|versus)\b/.test(text))
  )
    return "适合呈现方法 / 结果对比";
  if (
    purpose === "method" &&
    (purposes.has("method-overview") ||
      types.has("architecture") ||
      types.has("flowchart") ||
      types.has("conceptual"))
  )
    return "适合解释方法结构 / 信息流";
  return null;
}
export function rankFigures(
  figures,
  text,
  { purpose = "auto", limit = 12 } = {},
) {
  const analysis = analyzePaper(text, purpose);
  if (!analysis.focusedText.trim()) return { analysis, results: [] };
  const queryWords = new Set(analysis.keywords);
  const documents = figures.map((figure) => ({
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
      const fit = purposeFit(figure, analysis.purpose);
      return {
        figure,
        score: relevance + (fit && relevance > 0 ? 4 : 0),
        reasons: [
          ...topicMatches.map((topic) => `共同主题：${topic.label}`),
          ...(keywordMatches.length
            ? [`研究关键词：${keywordMatches.slice(0, 4).join(" · ")}`]
            : []),
          ...(fit && relevance > 0 ? [fit] : []),
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
  return { analysis, results: diversified };
}
