import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { filterFigures } from "../src/gallery.js";
import { mergeProjects, validateProjects } from "../src/projects.js";
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "aaf-agent-"));
const file = path.join(dir, "projects.json");
const run = (args, ok = true) => {
  const r = spawnSync(process.execPath, ["scripts/agent.mjs", ...args], {
    encoding: "utf8",
  });
  assert.equal(r.status, ok ? 0 : 1, r.stderr);
  return JSON.parse(ok ? r.stdout : r.stderr);
};
try {
  const figures = JSON.parse(
    fs.readFileSync("data/catalog.json", "utf8"),
  ).figures;
  const expected = filterFigures(
    figures,
    {
      query: "rl",
      dimension: "type",
      category: "mechanism",
      view: "gallery",
      filters: {},
    },
    [],
    [],
  );
  const found = run([
    "search",
    "--query",
    "rl",
    "--type",
    "mechanism",
    "--limit",
    "3",
  ]);
  assert.equal(found.total, expected.length);
  assert.deepEqual(
    found.figures.map((f) => f.id),
    expected.slice(0, 3).map((f) => f.id),
  );
  assert.equal(
    run(["search", "--tags", "made-up"], false).error,
    "Unknown topic ID: made-up",
  );
  const figure = run(["describe", "--figure", figures[0].id]);
  assert.equal(figure.paper.title, figures[0].paper.title);
  assert.match(figure.assets.metadata, /^https:\/\//);
  run([
    "project",
    "create",
    "--store",
    file,
    "--id",
    "research",
    "--name",
    "研究",
  ]);
  run([
    "project",
    "create",
    "--store",
    file,
    "--id",
    "other",
    "--name",
    "其他",
  ]);
  const add = [
    "project",
    "add",
    "--store",
    file,
    "--id",
    "research",
    "--figures",
    figures[0].id,
  ];
  run(add);
  run(add);
  assert.deepEqual(
    run(["project", "show", "--store", file, "--id", "research"]).figureIds,
    [figures[0].id],
  );
  const before = fs.readFileSync(file, "utf8");
  run([
    "project",
    "remove",
    "--store",
    file,
    "--id",
    "research",
    "--figures",
    figures[0].id,
    "--dry-run",
  ]);
  assert.equal(fs.readFileSync(file, "utf8"), before);
  run(
    [
      "project",
      "add",
      "--store",
      file,
      "--id",
      "research",
      "--figures",
      figures[1].id + ",unknown-figure",
    ],
    false,
  );
  assert.equal(
    fs.readFileSync(file, "utf8"),
    before,
    "Invalid batch must not partially update",
  );
  fs.writeFileSync(file + ".lock", "");
  run(add, false);
  fs.unlinkSync(file + ".lock");
  assert.equal(fs.readFileSync(file, "utf8"), before);
  const store = validateProjects(JSON.parse(before));
  const incoming = {
    version: 1,
    projects: [
      {
        id: "research",
        name: "Agent 新版",
        description: "参考",
        figureIds: [figures[1].id],
      },
    ],
  };
  const merged = mergeProjects(store, incoming);
  assert.deepEqual(merged.projects[1], store.projects[1]);
  assert.deepEqual(merged.projects[0], incoming.projects[0]);
  assert.deepEqual(mergeProjects(merged, incoming), merged);
  assert.throws(() => mergeProjects(store, { version: 9, projects: [] }));
  fs.writeFileSync(file, "broken");
  run(add, false);
  assert.equal(fs.readFileSync(file, "utf8"), "broken");
  assert.ok(!fs.existsSync(file + ".lock"));
  const manifest = JSON.parse(fs.readFileSync("public/agent.json", "utf8"));
  assert.equal(manifest.project_schema, "./project-schema.json");
  console.log(
    "Agent search parity, source integrity, explicit project commands, dry-run, atomic validation, locking and idempotent browser interchange pass.",
  );
} finally {
  fs.rmSync(dir, { recursive: true, force: true });
}
