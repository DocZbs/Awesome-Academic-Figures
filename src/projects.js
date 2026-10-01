export const PROJECTS_KEY = "aaf:projects:v1";
export const ACTIVE_PROJECT_KEY = "aaf:active-project";
const uniqueIds = (ids) => [
  ...new Set(
    (Array.isArray(ids) ? ids : []).filter(
      (id) => typeof id === "string" && id.length > 0 && id.length <= 200,
    ),
  ),
];

export function initialProjects(legacyIds = []) {
  return {
    version: 1,
    projects: [
      {
        id: "default",
        name: "我的研究项目",
        description: "",
        figureIds: uniqueIds(legacyIds),
      },
    ],
  };
}
export function validateProjects(value) {
  if (
    value?.version !== 1 ||
    !Array.isArray(value.projects) ||
    !value.projects.length
  )
    throw new Error("Invalid project store");
  const ids = new Set();
  const projects = value.projects.map((project) => {
    if (
      typeof project?.id !== "string" ||
      !project.id ||
      project.id.length > 200 ||
      ids.has(project.id) ||
      typeof project.name !== "string" ||
      !project.name.trim() ||
      project.name.length > 80 ||
      typeof project.description !== "string" ||
      project.description.length > 2000 ||
      !Array.isArray(project.figureIds)
    )
      throw new Error("Invalid project");
    ids.add(project.id);
    return {
      id: project.id,
      name: project.name.trim(),
      description: project.description,
      figureIds: uniqueIds(project.figureIds),
    };
  });
  return { version: 1, projects };
}
export function changeProject(store, action) {
  if (action.type === "create") {
    if (store.projects.some((p) => p.id === action.project.id))
      throw new Error("Duplicate project ID");
    return validateProjects({
      ...store,
      projects: [...store.projects, { ...action.project, figureIds: [] }],
    });
  }
  if (!store.projects.some((p) => p.id === action.id))
    throw new Error("Project not found");
  return validateProjects({
    ...store,
    projects: store.projects.map((project) => {
      if (project.id !== action.id) return project;
      if (action.type === "configure")
        return {
          ...project,
          name: action.name,
          description: action.description,
        };
      if (action.type === "toggle")
        return {
          ...project,
          figureIds: project.figureIds.includes(action.figureId)
            ? project.figureIds.filter((id) => id !== action.figureId)
            : [...project.figureIds, action.figureId],
        };
      if (action.type === "add")
        return {
          ...project,
          figureIds: uniqueIds([...project.figureIds, ...action.figureIds]),
        };
      throw new Error("Unknown project action");
    }),
  });
}
export function projectManifest(project, figures, task, notes) {
  return {
    schema_version: "1",
    project: {
      id: project.id,
      name: project.name,
      description: project.description,
    },
    task,
    notes,
    figures: figures.map((f) => ({
      id: f.id,
      paper_title: f.paper.title,
      paper_url: f.paper.url,
      metadata: `${f.id}/metadata.json`,
    })),
    unavailable_figure_ids: project.figureIds.filter(
      (id) => !figures.some((f) => f.id === id),
    ),
  };
}
