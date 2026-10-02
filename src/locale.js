import english from "./messages.en.json" with { type: "json" };

export const LANGUAGES = ["zh-CN", "en"];
export const LANGUAGE_KEY = "aaf:language";

export function languageFromUrl(search) {
  const value = new URLSearchParams(search).get("lang");
  if (value === "en") return "en";
  if (value === "zh" || value === "zh-CN") return "zh-CN";
  return null;
}

export function resolveLanguage(search, stored) {
  return (
    languageFromUrl(search) || (LANGUAGES.includes(stored) ? stored : "zh-CN")
  );
}

const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const patterns = Object.entries(english)
  .filter(([key]) => /\{\d+\}/.test(key))
  .map(([key, translation]) => {
    const indices = [];
    const source = key
      .split(/(\{\d+\})/)
      .map((part) => {
        if (/^\{\d+\}$/.test(part)) {
          indices.push(part.slice(1, -1));
          return "([\\s\\S]*?)";
        }
        return escape(part);
      })
      .join("");
    return { key, translation, indices, pattern: new RegExp(`^${source}$`) };
  });

// These UI messages contain taxonomy/figure labels, not user project names.
const labelSlots = new Map([
  ["当前 {0} 幅图中，{1} 幅已标注{2}，{3} 幅未标注。", ["2"]],
  ["符合所选图类：{0}", ["0"]],
  ["共同主题：{0}", ["0"]],
  ["筛选主题 {0}", ["0"]],
  ["{0} · 根据论文元数据关键词识别", ["0"]],
  ["{0} 的 {1}：{2}", ["1"]],
  ["放大 {0}", ["0"]],
  ["已选 {0}", ["0"]],
  ["移除 {0}", ["0"]],
  ["参考 {0}", ["0"]],
  ["查看 {0} 详情", ["0"]],
  ["恢复展示 {0}", ["0"]],
  ["暂时隐藏 {0}", ["0"]],
]);

// Translate only UI boundaries. Catalog text and user inputs remain original.
export function translate(value, language) {
  if (language !== "en" || typeof value !== "string") return value;
  if (Object.hasOwn(english, value)) return english[value];
  for (const entry of patterns) {
    const match = entry.pattern.exec(value);
    if (!match) continue;
    const slots = Object.fromEntries(
      entry.indices.map((id, i) => [
        id,
        labelSlots.get(entry.key)?.includes(id)
          ? translate(match[i + 1], language)
          : match[i + 1],
      ]),
    );
    return entry.translation.replace(/\{(\d+)\}/g, (_, id) => slots[id]);
  }
  // Figure numbering is original; only the appendix status is interface copy.
  if (value.startsWith("Figure ") && value.endsWith(" · 附录"))
    return value.slice(0, -5) + " · Appendix";
  return value;
}
