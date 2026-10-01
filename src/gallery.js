export const TYPE_LABELS = {
  teaser: "Teaser 图",
  mechanism: "机制图",
  experimental: "实验图",
  architecture: "方法框架图",
  flowchart: "流程图",
  conceptual: "概念示意图",
  qualitative: "定性对比图",
  data: "数据图",
  "multi-panel": "多面板组合图",
  taxonomy: "分类与层级图",
  unclassified: "待分类",
};
export const BROWSE_TYPE_LABELS = {
  teaser: "Teaser 图",
  mechanism: "机制图",
  experimental: "实验图",
  unclassified: "待分类",
};
export const PURPOSE_LABELS = {
  unlabelled: "未标注用途",
  "method-overview": "方法介绍",
  mechanism: "机制解释",
  comparison: "方法对比",
  qualitative: "案例展示",
  "dataset-overview": "数据集组成",
  "experimental-setup": "实验装置",
};
export const LAYOUT_LABELS = {
  unlabelled: "未标注布局",
  "left-to-right": "横向布局",
  "top-to-bottom": "纵向布局",
  "nested-modules": "嵌套模块",
  "feedback-loop": "反馈环路",
  "two-column": "双列对照",
  grid: "网格排列",
  radial: "径向布局",
  "hub-and-spoke": "中心汇聚",
  freeform: "自由排布",
};
export const DIMENSIONS = {
  type: "图形类型",
  purpose: "作用用途",
  layout: "布局结构",
  source: "论文来源",
};
export const FILTER_FIELDS = {
  award: {
    label: "论文标签",
    options: [{ value: "awarded", label: "获奖论文" }],
  },
  number: {
    label: "论文图号",
    options: [
      { value: "1", label: "Figure 1" },
      { value: "2", label: "Figure 2" },
      { value: "leading", label: "首图 · 图号待核" },
      { value: "unverified", label: "其他图 · 图号待核" },
    ],
  },
  layout: {
    label: "布局结构",
    options: Object.entries(LAYOUT_LABELS).map(([value, label]) => ({
      value,
      label,
    })),
  },
  purpose: {
    label: "作用用途",
    options: Object.entries(PURPOSE_LABELS).map(([value, label]) => ({
      value,
      label,
    })),
  },
  venue: {
    label: "会议 / 期刊来源",
    options: [{ value: "ICML", label: "ICML" }],
  },
  year: { label: "论文年份", options: [{ value: "2025", label: "2025" }] },
};
export function valuesFor(figure, field) {
  if (field === "award") return figure.paper.awards?.length ? ["awarded"] : [];
  if (field === "type")
    return [
      ...new Set([
        ...figure.classification.types.flatMap((value) =>
          ["line", "bar", "scatter", "heatmap"].includes(value)
            ? [value, "data"]
            : [value],
        ),
        ...(figure.classification.purposes?.includes("mechanism")
          ? ["mechanism"]
          : []),
        ...(figure.classification.types.some((type) =>
          ["architecture", "flowchart", "conceptual", "taxonomy"].includes(
            type,
          ),
        )
          ? ["mechanism"]
          : []),
        ...(figure.classification.types.some((type) =>
          ["data", "qualitative", "line", "bar", "scatter", "heatmap"].includes(
            type,
          ),
        ) ||
        figure.classification.purposes?.some((purpose) =>
          ["comparison", "qualitative", "experimental-setup"].includes(purpose),
        )
          ? ["experimental"]
          : []),
      ]),
    ];
  if (field === "purpose" || field === "layout") {
    const tags =
      figure.classification[field === "purpose" ? "purposes" : "layouts"];
    return tags?.length ? tags : ["unlabelled"];
  }
  if (field === "source" || field === "venue") return [figure.paper.venue];
  if (field === "number")
    return [
      figure.source.number
        ? String(figure.source.number)
        : figure.source.number_status === "source_index_leading_figure"
          ? "leading"
          : "unverified",
    ];
  if (field === "year") return [String(figure.paper.publication_year)];
  return [];
}
export function browseGenresFor(figure) {
  const genres = valuesFor(figure, "type").filter(
    (value) => value in BROWSE_TYPE_LABELS && value !== "unclassified",
  );
  return genres.length ? genres : ["unclassified"];
}
export function categorySummary(figures, dimension) {
  const counts = {};
  let unlabelled = 0;
  let overlapping = false;
  for (const figure of figures) {
    const values = [
      ...new Set(
        dimension === "type"
          ? browseGenresFor(figure)
          : valuesFor(figure, dimension),
      ),
    ];
    if (values.includes("unlabelled")) unlabelled++;
    if (values.length > 1) overlapping = true;
    for (const value of values) counts[value] = (counts[value] || 0) + 1;
  }
  return {
    total: figures.length,
    labelled: figures.length - unlabelled,
    unlabelled,
    overlapping,
    counts,
  };
}
export function filterFieldsFor(figures) {
  const fields = { ...FILTER_FIELDS };
  for (const field of ["venue", "year"]) {
    const values = [
      ...new Set(figures.flatMap((figure) => valuesFor(figure, field))),
    ];
    values.sort((a, b) =>
      field === "year" ? Number(b) - Number(a) : a.localeCompare(b),
    );
    fields[field] = {
      label: FILTER_FIELDS[field].label,
      options: values.map((value) => ({ value, label: value })),
    };
  }
  return fields;
}
export function facetCountsFor(figures, state, favorites = [], hidden = []) {
  return Object.fromEntries(
    Object.keys(FILTER_FIELDS).map((field) => {
      const scope = filterFigures(
        figures,
        {
          ...state,
          filters: { ...state.filters, [field]: [] },
        },
        favorites,
        hidden,
      );
      return [field, categorySummary(scope, field).counts];
    }),
  );
}
export function assetUrl(figure, field) {
  const path = `${figure.asset_base}${figure.assets[field]}`;
  return /^https?:\/\//.test(path)
    ? path
    : `${import.meta.env?.BASE_URL || "/"}${path}`;
}
export function figureLabel(figure) {
  if (figure.source.number)
    return `Figure ${figure.source.number}${figure.source.number_status === "verified_arxiv_html_correspondence" ? " · arXiv" : ""}${figure.source.document === "appendix" ? " · 附录" : ""}`;
  return figure.source.number_status === "source_index_leading_figure"
    ? "论文首图 · 图号待核"
    : "参考图 · 图号待核";
}
const detailCache = new Map();
export async function loadFigureDetails(figure, options = {}) {
  if (figure.analysis_text && figure.prompt_text && figure.agent_text)
    return figure;
  if (detailCache.has(figure.id)) return detailCache.get(figure.id);
  const fullMetadata = figure.assets.metadata
    ? fetchResource(assetUrl(figure, "metadata"), options).then(
        async (response) => {
          const text = await response.text();
          const hash = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(text),
          );
          const checksum = [...new Uint8Array(hash)]
            .map((value) => value.toString(16).padStart(2, "0"))
            .join("");
          if (checksum !== figure.metadata_sha256)
            throw new Error("Figure metadata changed; reload catalog");
          const metadata = JSON.parse(text);
          if (metadata.id !== figure.id)
            throw new Error("Figure metadata identity mismatch");
          return metadata;
        },
      )
    : Promise.resolve(figure);
  const textContents = Promise.all(
    ["analysis", "prompt", "agent"].map(async (field) => {
      const response = await fetchResource(assetUrl(figure, field), options);
      return [field + "_text", await response.text()];
    }),
  );
  const [metadata, results] = await Promise.all([fullMetadata, textContents]);
  const details = {
    ...metadata,
    ...figure,
    paper: { ...metadata.paper, ...figure.paper },
    source: { ...metadata.source, ...figure.source },
    rights: { ...metadata.rights, ...figure.rights },
    curation: { ...metadata.curation, ...figure.curation },
    original_assets: metadata.original_assets || figure.original_assets,
    ...Object.fromEntries(results),
  };
  detailCache.set(figure.id, details);
  return details;
}
export function normalized(value) {
  return value.normalize("NFKC").toLocaleLowerCase("zh-CN").trim();
}
export function filterFigures(figures, state, favorites, hidden) {
  return figures.filter((figure) => {
    if (
      state.view === "hidden"
        ? !hidden.includes(figure.id)
        : hidden.includes(figure.id)
    )
      return false;
    if (state.view === "favorites" && !favorites.includes(figure.id))
      return false;
    if (
      state.category !== "all" &&
      !(
        state.dimension === "type" && state.category in BROWSE_TYPE_LABELS
          ? browseGenresFor(figure)
          : valuesFor(figure, state.dimension)
      ).includes(state.category)
    )
      return false;
    if (
      !Object.entries(state.filters).every(
        ([key, selected]) =>
          !selected.length ||
          selected.some((value) => valuesFor(figure, key).includes(value)),
      )
    )
      return false;
    const text = normalized(
      [
        figure.title.zh,
        figure.title.en,
        figure.paper.title,
        figure.paper.venue,
        figure.paper.publication_year,
        ...figure.classification.search_aliases,
        ...(figure.paper.awards || []).map((award) => award.official_name),
        ...(figure.paper.awards?.length ? ["获奖论文"] : []),
        ...figure.classification.types.map((key) => TYPE_LABELS[key] || key),
        ...browseGenresFor(figure).map((key) => BROWSE_TYPE_LABELS[key]),
      ].join(" "),
    );
    return normalized(state.query)
      .split(/\s+/)
      .every((word) => text.includes(word));
  });
}
export function readUrl() {
  const params = new URLSearchParams(location.search);
  const dimension =
    params.get("dimension") in DIMENSIONS ? params.get("dimension") : "type";
  const category = params.get("category") || "all";
  const previousCategories = {
    architecture: "mechanism",
    flowchart: "mechanism",
    conceptual: "mechanism",
    taxonomy: "mechanism",
    data: "experimental",
    qualitative: "experimental",
    "multi-panel": "experimental",
  };
  return {
    query: params.get("q") || "",
    dimension,
    category:
      dimension === "type"
        ? previousCategories[category] || category
        : category,
    view: ["favorites", "hidden"].includes(params.get("view"))
      ? params.get("view")
      : "gallery",
    filters: Object.fromEntries(
      Object.keys(FILTER_FIELDS).map((key) => [
        key,
        key === "number"
          ? []
          : (params.get(key) || "").split(",").filter(Boolean),
      ]),
    ),
  };
}
export async function fetchResource(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const abort = () => controller.abort();
  options.signal?.addEventListener("abort", abort, { once: true });
  try {
    const response = await fetch(path, {
      ...options,
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Resource unavailable");
    return response;
  } finally {
    clearTimeout(timeout);
    options.signal?.removeEventListener("abort", abort);
  }
}
