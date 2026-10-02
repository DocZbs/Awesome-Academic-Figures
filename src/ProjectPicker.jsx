import { useI18n } from "./i18n.jsx";
import React, { useEffect, useRef, useState } from "react";
import { Plus, ArrowRight, ArrowLeft, Search, X } from "lucide-react";
import { Button, Dialog, FigureImage, Feedback } from "./ui.jsx";
import { figureDisplayTitle, figureLabel } from "./gallery.js";
import { ProjectCover } from "./ProjectPanel.jsx";
import ProjectForm from "./ProjectForm.jsx";

export default function ProjectPicker({
  selection,
  workspace,
  figures,
  storageWarning,
  onClose,
  onHandoff,
}) {
  const { t, locale } = useI18n();
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState({ name: "", description: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [committedQuery, setCommittedQuery] = useState("");
  const composing = useRef(false);
  const searchRef = useRef(null);
  useEffect(() => {
    setCreating(false);
    setMessage("");
    setError("");
    setQuery("");
    setCommittedQuery("");
  }, [selection]);
  if (!selection) return null;
  const ids = selection.figureIds;
  const figure = figures.find((f) => f.id === ids[0]);
  const handoff = Boolean(selection.task);
  const projects = workspace.projects.filter((p) =>
    `${p.name} ${p.description}`
      .toLocaleLowerCase()
      .includes(committedQuery.trim().toLocaleLowerCase()),
  );
  function handoffTo(id) {
    try {
      onHandoff(id, selection);
      setError("");
    } catch {
      setError("绘图任务未能带入。任务已保留，请重新选择项目后重试。");
    }
  }
  function create(name, description) {
    const id = workspace.createProject(name, description, ids);
    setDraft({ name: "", description: "" });
    setCreating(false);
    setMessage(`已创建并加入「${name}」。`);
    if (handoff) handoffTo(id);
  }
  function assign(project, checked) {
    try {
      workspace.setMembership(project.id, ids[0], checked);
      if (checked) workspace.selectProject(project.id);
      setError("");
      setMessage(
        checked
          ? `已加入「${project.name}」。`
          : `已从「${project.name}」移出。`,
      );
    } catch {
      setError("项目未能更新。当前选图已保留，请重新打开选择面板后重试。");
    }
  }
  return (
    <Dialog
      title={t(creating ? "新建项目" : handoff ? "选择绘图项目" : "加入项目")}
      eyebrow="SAVE YOUR INSPIRATION"
      className="project-picker"
      onClose={onClose}
      footer={
        <>
          <span>
            {t(
              handoff
                ? "为这次绘图任务明确选择一个项目"
                : "可加入多个项目 · 勾选即保存",
            )}
          </span>
          <Button onClick={onClose}>{t(handoff ? "返回画廊" : "完成")}</Button>
        </>
      }
    >
      {figure && (
        <div className="picker-figure">
          <FigureImage figure={figure} />
          <div>
            <span>
              {t(
                ids.length > 1 ? `${ids.length} 幅参考图` : figureLabel(figure),
              )}
            </span>
            <h3 title={figure.paper.title}>
              {figureDisplayTitle(figure, locale)}
            </h3>
          </div>
        </div>
      )}
      {storageWarning && (
        <p className="notice" role="status">
          {t(storageWarning)}
        </p>
      )}
      {creating ? (
        <div className="picker-create">
          <Button
            className="project-back"
            icon={ArrowLeft}
            onClick={() => setCreating(false)}
          >
            {t("返回项目列表")}
          </Button>
          <ProjectForm
            draft={draft}
            dirty={Boolean(draft.name || draft.description)}
            onChange={setDraft}
            onSave={create}
            onCancel={() => setCreating(false)}
            submitLabel={t(handoff ? "创建并带入任务" : "创建并加入")}
          />
        </div>
      ) : (
        <>
          <div className="picker-list-heading">
            <span>
              {t(
                handoff
                  ? "把任务与参考图交给哪个项目？"
                  : "这张图要加入哪些项目？",
              )}
            </span>
            <span>
              {workspace.projects.length}
              {t(" 个项目")}
            </span>
          </div>
          {workspace.projects.length > 5 && (
            <div className="project-search">
              <Search size={16} />
              <input
                ref={searchRef}
                value={query}
                aria-label={t("搜索项目")}
                onCompositionStart={() => {
                  composing.current = true;
                }}
                onCompositionEnd={(event) => {
                  composing.current = false;
                  setCommittedQuery(event.currentTarget.value);
                }}
                onChange={(event) => {
                  setQuery(event.target.value);
                  if (!composing.current) setCommittedQuery(event.target.value);
                }}
              />
              {query && (
                <Button
                  className="icon-button"
                  icon={X}
                  aria-label={t("清空项目搜索")}
                  onClick={() => {
                    setQuery("");
                    setCommittedQuery("");
                    searchRef.current?.focus();
                  }}
                />
              )}
            </div>
          )}
          <fieldset className="picker-projects">
            <legend className="sr-only">
              {t(handoff ? "选择绘图项目" : "选择项目，可多选")}
            </legend>
            {projects.map((project) =>
              handoff ? (
                <button
                  key={project.id}
                  className="picker-project handoff"
                  onClick={() => handoffTo(project.id)}
                >
                  <ProjectCover project={project} figures={figures} small />
                  <span className="picker-project-copy">
                    <strong>{project.name}</strong>
                    <small>
                      {project.figureIds.length}
                      {t(" 幅参考图")}
                    </small>
                  </span>
                  <ArrowRight size={18} />
                </button>
              ) : (
                <label
                  key={project.id}
                  className={`picker-project ${project.figureIds.includes(ids[0]) ? "checked" : ""}`}
                >
                  <ProjectCover project={project} figures={figures} small />
                  <span className="picker-project-copy">
                    <strong>{project.name}</strong>
                    <small>
                      {project.figureIds.length}
                      {t(" 幅参考图")}
                      {t(project.figureIds.includes(ids[0]) ? " · 已加入" : "")}
                    </small>
                  </span>
                  <input
                    type="checkbox"
                    checked={project.figureIds.includes(ids[0])}
                    onChange={(event) => assign(project, event.target.checked)}
                    aria-label={t(`加入 ${project.name}`)}
                  />
                </label>
              ),
            )}
            {!projects.length && (
              <div className="picker-empty">
                <p>
                  {t(
                    workspace.projects.length
                      ? "没有找到这个项目"
                      : "还没有项目",
                  )}
                </p>
                <small>
                  {t(
                    workspace.projects.length
                      ? "换个关键词，或新建一个项目。"
                      : "给你的研究创建一个参考板。",
                  )}
                </small>
              </div>
            )}
          </fieldset>
          <Button
            className="picker-new-project"
            icon={Plus}
            onClick={() => setCreating(true)}
          >
            {t("新建项目")}
            {t(!handoff && "，加入这张图")}
          </Button>
        </>
      )}
      {error && (
        <p className="field-error" role="alert">
          {t(error)}
        </p>
      )}
      <Feedback message={message} inline />
    </Dialog>
  );
}
