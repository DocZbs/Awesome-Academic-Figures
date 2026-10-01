export const TYPE_LABELS = {
  architecture: "框架图",
  flowchart: "流程图",
  conceptual: "概念示意图",
  qualitative: "定性对比图",
  data: "数据图",
  "multi-panel": "多面板组合图",
};
export const PURPOSE_LABELS = {
  "method-overview": "方法介绍",
  mechanism: "机制解释",
  comparison: "方法对比",
  qualitative: "案例展示",
  "dataset-overview": "数据集组成",
  "experimental-setup": "实验装置",
};
export const LAYOUT_LABELS = {
  "left-to-right": "横向布局",
  "nested-modules": "嵌套模块",
  "feedback-loop": "反馈环路",
  "two-column": "双列对照",
  grid: "网格排列",
  radial: "径向布局",
  "hub-and-spoke": "中心汇聚",
};
export const DIMENSIONS = {
  type: "图形类型",
  purpose: "作用用途",
  layout: "布局结构",
  source: "论文来源",
};
export const FILTER_FIELDS = {
  number: {
    label: "图号",
    options: [
      { value: "1", label: "Figure 1" },
      { value: "2", label: "Figure 2" },
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
  venue: { label: "会议来源", options: [{ value: "ICML", label: "ICML" }] },
  year: { label: "论文年份", options: [{ value: "2025", label: "2025" }] },
};
export function valuesFor(figure, field) {
  if (field === "type")
    return figure.classification.types.flatMap((value) =>
      ["line", "bar", "scatter", "heatmap"].includes(value)
        ? [value, "data"]
        : [value],
    );
  if (field === "purpose") return figure.classification.purposes;
  if (field === "layout") return figure.classification.layouts;
  if (field === "source" || field === "venue") return [figure.paper.venue];
  if (field === "number") return [String(figure.source.number)];
  if (field === "year") return [String(figure.paper.publication_year)];
  return [];
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
export function assetUrl(figure, field) {
  const path = `${figure.asset_base}${figure.assets[field]}`;
  return /^https?:\/\//.test(path)
    ? path
    : `${import.meta.env?.BASE_URL || "/"}${path}`;
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
      !valuesFor(figure, state.dimension).includes(state.category)
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
        ...figure.classification.types.map((key) => TYPE_LABELS[key] || key),
      ].join(" "),
    );
    return normalized(state.query)
      .split(/\s+/)
      .every((word) => text.includes(word));
  });
}
export function readUrl() {
  const params = new URLSearchParams(location.search);
  return {
    query: params.get("q") || "",
    dimension:
      params.get("dimension") in DIMENSIONS ? params.get("dimension") : "type",
    category: params.get("category") || "all",
    view: ["favorites", "hidden"].includes(params.get("view"))
      ? params.get("view")
      : "gallery",
    filters: Object.fromEntries(
      Object.keys(FILTER_FIELDS).map((key) => [
        key,
        (params.get(key) || "").split(",").filter(Boolean),
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
