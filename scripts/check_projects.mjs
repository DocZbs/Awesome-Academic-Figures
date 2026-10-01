import assert from "node:assert/strict";
import {
  initialProjects,
  validateProjects,
  changeProject,
  projectManifest,
} from "../src/projects.js";
let store = initialProjects(["figure-1", "figure-1", "", 123]);
assert.deepEqual(store.projects[0].figureIds, ["figure-1"]);
const original = structuredClone(store);
store = changeProject(store, {
  type: "create",
  project: {
    id: "world-model",
    name: "World Model",
    description: "Planning figures",
  },
});
assert.deepEqual(store.projects[1].figureIds, []);
assert.deepEqual(initialProjects(["figure-1"]), original);
store = changeProject(store, {
  type: "toggle",
  id: "world-model",
  figureId: "figure-1",
});
assert.deepEqual(
  store.projects.map((p) => p.figureIds),
  [["figure-1"], ["figure-1"]],
);
store = changeProject(store, {
  type: "toggle",
  id: "world-model",
  figureId: "figure-1",
});
assert.deepEqual(
  store.projects.map((p) => p.figureIds),
  [["figure-1"], []],
);
store = changeProject(store, {
  type: "add",
  id: "world-model",
  figureIds: ["figure-2", "figure-2", "missing"],
});
assert.deepEqual(store.projects[1].figureIds, ["figure-2", "missing"]);
store = changeProject(store, {
  type: "configure",
  id: "world-model",
  name: " 世界模型研究 ",
  description: "RL / WAM",
});
assert.equal(store.projects[1].name, "世界模型研究");
assert.deepEqual(store.projects[0], original.projects[0]);
const manifest = projectManifest(
  store.projects[1],
  [
    {
      id: "figure-2",
      paper: { title: "Paper two", url: "https://example.org/paper" },
    },
  ],
  "My task",
  "My notes",
);
assert.equal(manifest.project.name, "世界模型研究");
assert.equal(manifest.figures.length, 1);
assert.equal(manifest.figures[0].metadata, "figure-2/metadata.json");
assert.deepEqual(manifest.unavailable_figure_ids, ["missing"]);
assert.deepEqual(validateProjects(JSON.parse(JSON.stringify(store))), store);
assert.throws(() => validateProjects({ version: 2, projects: [] }));
assert.throws(() =>
  changeProject(store, {
    type: "configure",
    id: "world-model",
    name: " ",
    description: "",
  }),
);
assert.throws(() =>
  changeProject(store, {
    type: "create",
    project: { id: "default", name: "Collision", description: "" },
  }),
);
assert.throws(() =>
  changeProject(store, { type: "toggle", id: "absent", figureId: "figure-1" }),
);
assert.deepEqual(original.projects[0].figureIds, ["figure-1"]);
console.log(
  "Project migration, isolated membership, multi-project references, config validation and export manifest checks pass.",
);
