#!/usr/bin/env node
// Agent CLI: shared catalog search and project model; never downloads figure assets.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { filterFigures, figureDisplayTitle } from "../src/gallery.js";
import { researchTagsFor, TOPIC_LABELS } from "../src/research-topics.js";
import {
  changeProject,
  initialProjects,
  validateProjects,
} from "../src/projects.js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const site = "https://doczbs.github.io/Awesome-Academic-Figures/";
const args = process.argv.slice(2);
const command = args.shift();
const operation = command === "project" ? args.shift() : null;
const options = {};
const allowed = new Set([
  "query",
  "tags",
  "type",
  "layout",
  "venue",
  "year",
  "number",
  "limit",
  "offset",
  "catalog",
  "figure",
  "store",
  "id",
  "name",
  "description",
  "figures",
  "dry-run",
]);
try {
  while (args.length) {
    const key = args.shift();
    if (!key.startsWith("--") || !allowed.has(key.slice(2)))
      throw new Error(`Unknown option: ${key}`);
    const name = key.slice(2);
    if (Object.hasOwn(options, name))
      throw new Error(`Duplicate option: ${key}`);
    if (name === "dry-run") options[name] = true;
    else {
      if (!args.length || args[0].startsWith("--"))
        throw new Error(`Missing value: ${key}`);
      options[name] = args.shift();
    }
  }
  const required = (key) => {
    if (!options[key]) throw new Error(`--${key} is required`);
    return options[key];
  };
  const read = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
  async function catalog() {
    const location = options.catalog || path.join(root, "data/catalog.json");
    if (!/^https?:\/\//.test(location)) return read(location).figures;
    const response = await fetch(location, {
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
    return (await response.json()).figures;
  }
  function summary(f) {
    const assets = Object.fromEntries(
      Object.entries(f.assets)
        .filter(([, v]) => typeof v === "string" && v)
        .map(([k, v]) => [k, new URL(f.asset_base + v, site).href]),
    );
    return {
      id: f.id,
      display_title: figureDisplayTitle(f),
      title: f.title,
      paper: f.paper,
      source: f.source,
      classification: f.classification,
      research_tags: researchTagsFor(f),
      rights: f.rights,
      curation: f.curation,
      assets,
      detail_url: site + "?figure=" + encodeURIComponent(f.id),
    };
  }
  let result;
  if (command === "search") {
    const figures = await catalog();
    const filters = {};
    for (const field of ["layout", "venue", "year", "number"])
      if (options[field]) filters[field] = options[field].split(",");
    if (options.tags) {
      filters.topic = options.tags.split(",");
      for (const tag of filters.topic)
        if (!(tag in TOPIC_LABELS)) throw new Error(`Unknown topic ID: ${tag}`);
    }
    const matches = filterFigures(
      figures,
      {
        query: options.query || "",
        dimension: "type",
        category: options.type || "all",
        view: "gallery",
        filters,
      },
      [],
      [],
    );
    const limit = Number(options.limit || 20),
      offset = Number(options.offset || 0);
    if (
      !Number.isInteger(limit) ||
      limit < 1 ||
      limit > 100 ||
      !Number.isInteger(offset) ||
      offset < 0
    )
      throw new Error("limit must be 1–100 and offset a nonnegative integer");
    result = {
      schema_version: "1",
      total: matches.length,
      offset,
      limit,
      figures: matches.slice(offset, offset + limit).map(summary),
    };
  } else if (command === "describe") {
    const id = required("figure"),
      figure = (await catalog()).find((f) => f.id === id);
    if (!figure) throw new Error(`Figure not found: ${id}`);
    result = summary(figure);
  } else if (command === "project") {
    const file = path.resolve(required("store"));
    const mutation = ["create", "configure", "add", "remove"].includes(
      operation,
    );
    if (!mutation && !["list", "show"].includes(operation))
      throw new Error("Unknown project operation");
    let lock, temporary;
    try {
      if (mutation && !options["dry-run"])
        lock = fs.openSync(file + ".lock", "wx");
      const store = fs.existsSync(file)
        ? validateProjects(read(file))
        : initialProjects();
      if (operation === "list") result = store;
      else {
        const id = required("id");
        const project = store.projects.find((p) => p.id === id);
        if (operation === "show") {
          if (!project) throw new Error("Project not found");
          result = project;
        } else {
          let next;
          if (operation === "create")
            next = changeProject(store, {
              type: "create",
              project: {
                id,
                name: required("name"),
                description: options.description || "",
                figureIds: [],
              },
            });
          else if (operation === "configure") {
            if (!project) throw new Error("Project not found");
            next = changeProject(store, {
              type: "configure",
              id,
              name: options.name ?? project.name,
              description: options.description ?? project.description,
            });
          } else {
            const ids = required("figures").split(",");
            if (operation === "add") {
              const known = new Set((await catalog()).map((f) => f.id));
              for (const figureId of ids)
                if (!known.has(figureId))
                  throw new Error(`Figure not found: ${figureId}`);
            }
            next = ids.reduce(
              (state, figureId) =>
                changeProject(state, {
                  type: "membership",
                  id,
                  figureId,
                  selected: operation === "add",
                }),
              store,
            );
          }
          if (!options["dry-run"]) {
            temporary = file + `.${process.pid}.tmp`;
            fs.writeFileSync(temporary, JSON.stringify(next, null, 2) + "\n", {
              flag: "wx",
            });
            fs.renameSync(temporary, file);
            temporary = null;
          }
          result = {
            schema_version: "1",
            dry_run: Boolean(options["dry-run"]),
            store: next,
          };
        }
      }
    } finally {
      if (temporary) fs.rmSync(temporary, { force: true });
      if (lock !== undefined) {
        fs.closeSync(lock);
        fs.unlinkSync(file + ".lock");
      }
    }
  } else if (command === "help" || !command) {
    result = {
      commands: [
        "search [--query rl] [--tags rl,world-model] [--type mechanism] [--layout left-to-right] [--number 1,2] [--limit 20] [--offset 0] [--catalog PATH_OR_URL]",
        "describe --figure FIGURE_ID [--catalog PATH_OR_URL]",
        "project list --store FILE",
        "project show --store FILE --id PROJECT_ID",
        "project create --store FILE --id PROJECT_ID --name NAME [--description TEXT]",
        "project configure --store FILE --id PROJECT_ID [--name NAME] [--description TEXT]",
        "project add --store FILE --id PROJECT_ID --figures ID1,ID2 [--catalog PATH_OR_URL]",
        "project remove --store FILE --id PROJECT_ID --figures ID1,ID2",
      ],
      dry_run: "Append --dry-run to preview a project mutation without writing",
      guide: site + "AGENTS.md",
    };
  } else throw new Error("Unknown command; use help");
  process.stdout.write(JSON.stringify(result, null, 2) + "\n");
} catch (error) {
  process.stderr.write(JSON.stringify({ error: error.message }) + "\n");
  process.exitCode = 1;
}
