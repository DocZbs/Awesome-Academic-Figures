import { useEffect, useRef, useState } from "react";
import {
  ACTIVE_PROJECT_KEY,
  PROJECTS_KEY,
  changeProject,
  initialProjects,
  validateProjects,
} from "./projects.js";

function load() {
  let legacy = [];
  try {
    legacy = JSON.parse(sessionStorage.getItem("aaf:selected") || "[]");
  } catch {
    /* Keep source untouched. */
  }
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    return {
      store: raw ? validateProjects(JSON.parse(raw)) : initialProjects(legacy),
      writable: true,
      warning: "",
    };
  } catch {
    return {
      store: initialProjects(legacy),
      writable: false,
      warning:
        "项目数据无法读取，本次使用临时参考板，不会覆盖原有项目。请检查浏览器存储权限。",
    };
  }
}
export function useProjects(onWarning) {
  const [initial] = useState(load);
  const [store, setStore] = useState(initial.store);
  const writable = useRef(initial.writable);
  const storeRef = useRef(initial.store);
  const [activeId, setActiveId] = useState(() => {
    try {
      return (
        sessionStorage.getItem(ACTIVE_PROJECT_KEY) ||
        initial.store.projects[0]?.id ||
        ""
      );
    } catch {
      return initial.store.projects[0]?.id || "";
    }
  });
  const activeProject =
    store.projects.find((p) => p.id === activeId) || store.projects[0] || null;
  useEffect(() => {
    if (initial.warning) onWarning(initial.warning);
    if (initial.writable) {
      try {
        if (!localStorage.getItem(PROJECTS_KEY))
          localStorage.setItem(PROJECTS_KEY, JSON.stringify(initial.store));
      } catch {
        writable.current = false;
        onWarning("浏览器无法保存项目，本次操作仍可继续；刷新后可能不会保留。");
      }
    }
    const sync = (event) => {
      if (event.key !== PROJECTS_KEY) return;
      try {
        if (event.newValue) {
          const next = validateProjects(JSON.parse(event.newValue));
          storeRef.current = next;
          setStore(next);
        }
      } catch {
        onWarning("其他窗口的项目更新无法读取，当前参考板已保留。");
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  function selectProject(id) {
    if (!store.projects.some((project) => project.id === id)) return;
    setActiveId(id);
    try {
      sessionStorage.setItem(ACTIVE_PROJECT_KEY, id);
    } catch {
      onWarning("当前项目切换仅在本次页面生效，浏览器无法保存选择。");
    }
  }
  function commit(action) {
    let latest = storeRef.current;
    let canWrite = writable.current;
    if (canWrite) {
      try {
        const raw = localStorage.getItem(PROJECTS_KEY);
        if (raw) latest = validateProjects(JSON.parse(raw));
      } catch {
        canWrite = false;
        writable.current = false;
        onWarning("项目存储暂不可用，本次更新保留在页面内，不覆盖原有数据。");
      }
    }
    const next = changeProject(latest, action);
    storeRef.current = next;
    setStore(next);
    if (canWrite) {
      try {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
      } catch {
        writable.current = false;
        onWarning("浏览器无法保存项目，本次操作仍可继续；刷新后可能不会保留。");
      }
    }
    return next;
  }
  function createProject(name, description, figureIds = []) {
    const id = crypto.randomUUID();
    commit({ type: "create", project: { id, name, description, figureIds } });
    setActiveId(id);
    try {
      sessionStorage.setItem(ACTIVE_PROJECT_KEY, id);
    } catch {
      onWarning("浏览器无法保存当前项目选择。");
    }
    return id;
  }
  return {
    projects: store.projects,
    importProjects: (incoming) => commit({ type: "import", store: incoming }),
    activeProject,
    selectProject,
    createProject,
    configureProject: (id, name, description) =>
      commit({ type: "configure", id, name, description }),
    setMembership: (id, figureId, selected) =>
      commit({ type: "membership", id, figureId, selected }),
    addFiguresTo: (id, figureIds) => commit({ type: "add", id, figureIds }),
  };
}
