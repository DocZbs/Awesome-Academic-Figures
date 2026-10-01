export const TOPICS = [
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
      "policy gradient",
      "q-learning",
      "q learning",
      "reinforcement-learning",
      "rlhf",
      "强化学习",
      "策略优化",
      "策略梯度",
    ],
  ],
  [
    "world-model",
    "世界模型",
    [
      "world model",
      "world models",
      "world-model",
      "world-models",
      "worldmodel",
      "worldmodels",
      "世界模型",
    ],
  ],
  [
    "wam",
    "WAM · 世界动作模型",
    [
      "wam",
      "wams",
      "world action model",
      "world action models",
      "world-action model",
      "world-action models",
      "世界动作模型",
    ],
  ],
  [
    "icl",
    "ICL · 上下文学习",
    [
      "icl",
      "in-context learning",
      "in context learning",
      "上下文学习",
      "情境学习",
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
export const normalizeResearchText = (text) =>
  String(text || "")
    .normalize("NFKC")
    .toLowerCase();
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const termPatterns = new Map();
export function hasTerm(text, term) {
  if (/[\u3400-\u9fff]/.test(term)) return text.includes(term);
  if (!termPatterns.has(term))
    termPatterns.set(
      term,
      new RegExp(
        `(^|[^a-z0-9])${escape(term).replace(/[ -]+/g, "[\\s-]+")}($|[^a-z0-9])`,
        "i",
      ),
    );
  return termPatterns.get(term).test(text);
}
export function topicsFor(text) {
  const normalized = normalizeResearchText(text);
  return TOPICS.filter(([, , terms]) =>
    terms.some((term) => hasTerm(normalized, term)),
  ).map(([id, label]) => ({ id, label }));
}

export const TOPIC_LABELS = Object.fromEntries(
  TOPICS.map(([id, label]) => [
    id,
    id === "rl"
      ? "RL · 强化学习"
      : id === "world-model"
        ? "World Model · 世界模型"
        : label,
  ]),
);
const tagCache = new WeakMap();
export function researchTagsFor(figure) {
  if (tagCache.has(figure)) return tagCache.get(figure);
  const fields = [
    ["paper.title", figure.paper?.title],
    ["paper.abstract", figure.paper?.abstract],
    [
      "classification.research_topics",
      (figure.classification?.research_topics || []).join(" "),
    ],
  ]
    .filter(([, value]) => value)
    .map(([field, value]) => [field, normalizeResearchText(value)]);
  const tags = TOPICS.flatMap(([id, , terms]) => {
    const evidence = fields.flatMap(([field, text]) => {
      const matched = terms.filter((term) => hasTerm(text, term));
      return matched.length ? [{ field, matched_terms: matched }] : [];
    });
    return evidence.length
      ? [
          {
            id,
            label: TOPIC_LABELS[id],
            status: "metadata_keyword_match",
            evidence,
          },
        ]
      : [];
  });
  tagCache.set(figure, tags);
  return tags;
}
