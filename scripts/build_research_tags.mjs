import fs from "node:fs";
import {
  TOPICS,
  TOPIC_LABELS,
  researchTagsFor,
} from "../src/research-topics.js";

const catalog = JSON.parse(fs.readFileSync("data/catalog.json", "utf8"));
const figures = catalog.figures.map((figure) => ({
  id: figure.id,
  paper_id: figure.paper.id,
  paper_title: figure.paper.title,
  paper_url: figure.paper.url,
  asset_base: figure.asset_base,
  tag_ids: researchTagsFor(figure).map((tag) => tag.id),
  tags: researchTagsFor(figure),
}));
const index = {
  schema_version: "0.1",
  figure_count: figures.length,
  tagging_method: "metadata_keyword_match",
  limitations:
    "Research topics describe the associated paper, not necessarily this figure's depicted content. Explicit title, abstract and recorded research-topic keywords only; not full-paper semantic or manual figure review. Empty tags remain empty.",
  topics: TOPICS.map(([id, , aliases]) => {
    const matches = figures.filter((figure) => figure.tag_ids.includes(id));
    return {
      id,
      label: TOPIC_LABELS[id],
      aliases,
      figure_count: matches.length,
      paper_count: new Set(matches.map((figure) => figure.paper_id)).size,
    };
  }),
  figures,
};
const bytes = JSON.stringify(index, null, 2) + "\n";
if (process.argv.includes("--check")) {
  if (fs.readFileSync("data/research_tags.json", "utf8") !== bytes)
    throw new Error("Research tag index drifted; run npm run tags:build");
} else {
  fs.writeFileSync("data/research_tags.json", bytes);
  fs.mkdirSync("public", { recursive: true });
  fs.writeFileSync("public/research-tags.json", bytes);
}
console.log(
  `${figures.length} figures indexed; ${figures.filter((f) => f.tag_ids.length > 1).length} have multiple research tags.`,
);
