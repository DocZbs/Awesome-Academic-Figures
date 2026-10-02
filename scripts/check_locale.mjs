import assert from "node:assert/strict";
import { resolveLanguage, languageFromUrl, translate } from "../src/locale.js";
import { figureDisplayTitle } from "../src/gallery.js";
import english from "../src/messages.en.json" with { type: "json" };

assert.equal(resolveLanguage("?q=rl&lang=en", "zh-CN"), "en");
assert.equal(resolveLanguage("?lang=zh", "en"), "zh-CN");
assert.equal(resolveLanguage("?lang=unknown", "en"), "en");
assert.equal(resolveLanguage("", null), "zh-CN");
assert.equal(languageFromUrl("?lang=zh-CN"), "zh-CN");
assert.equal(translate("找到 12 幅图形", "en"), "Found 12 figures");
assert.equal(
  translate("已加入「中文项目名」。", "en"),
  "Added to “中文项目名”.",
);
assert.equal(
  translate("共同主题：RL · 强化学习", "en"),
  "Shared topic: RL · Reinforcement learning",
);
assert.equal(
  translate("符合所选图类：机制图", "en"),
  "Matches figure type: Mechanism",
);
assert.equal(
  translate("参考图 · 图号待核", "en"),
  "Reference figure · Number unverified",
);
assert.equal(translate("Figure 2 · 附录", "en"), "Figure 2 · Appendix");
assert.equal(translate("User project name", "en"), "User project name");
assert.equal(
  translate("我的研究内容保持原文。", "en"),
  "我的研究内容保持原文。",
);
assert.equal(translate("加入项目", "zh-CN"), "加入项目");
assert.equal(translate(12, "en"), 12);
for (const [key, value] of Object.entries(english)) {
  assert.deepEqual(
    [...key.matchAll(/\{(\d+)\}/g)].map((m) => m[1]).sort(),
    [...value.matchAll(/\{(\d+)\}/g)].map((m) => m[1]).sort(),
    `Placeholder mismatch: ${key}`,
  );
}
const figure = {
  title: { zh: "协作框架", en: "Collaborative framework" },
  paper: { title: "Original paper title" },
};
assert.equal(figureDisplayTitle(figure), "协作框架");
assert.equal(figureDisplayTitle(figure, "en"), "Collaborative framework");
console.log(
  "Locale checks pass: URL precedence, saved preference, dynamic messages, nested taxonomy, original user content, appendix labels and figure titles.",
);
