import {
  TOPICS,
  hasTerm,
  normalizeResearchText,
  researchTagsFor,
} from "./research-topics.js";

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const aliases = TOPICS.flatMap(([id, , terms]) =>
  terms.map((term) => ({ id, term })),
).sort((a, b) => b.term.length - a.term.length);
const queries = new Map();

export function compileSearch(query) {
  const normalized = normalizeResearchText(query).trim();
  if (queries.has(normalized)) return queries.get(normalized);
  let rest = normalized;
  const topics = new Set();
  for (const { id, term } of aliases) {
    if (!hasTerm(rest, term)) continue;
    topics.add(id);
    const chinese = /[\u3400-\u9fff]/.test(term);
    const pattern = chinese
      ? new RegExp(escape(term), "g")
      : new RegExp(
          `(^|[^a-z0-9])${escape(term).replace(/[ -]+/g, "[\\s-]+")}(?=$|[^a-z0-9])`,
          "g",
        );
    rest = rest.replace(pattern, (...args) => (chinese ? " " : `${args[1]} `));
  }
  const compiled = {
    topics: [...topics],
    words: rest.split(/[\s,，;；+&/]+/).filter(Boolean),
  };
  if (queries.size >= 64) queries.clear();
  queries.set(normalized, compiled);
  return compiled;
}

export function matchesSearch(figure, text, compiled) {
  if (!compiled.topics.length && !compiled.words.length) return true;
  const topics = new Set(researchTagsFor(figure).map((tag) => tag.id));
  return (
    compiled.topics.every((topic) => topics.has(topic)) &&
    compiled.words.every((word) =>
      /^[a-z0-9]{1,2}$/i.test(word) ? hasTerm(text, word) : text.includes(word),
    )
  );
}
