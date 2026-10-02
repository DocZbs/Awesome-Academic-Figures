import { useI18n } from "./i18n.jsx";
import React, { useEffect, useState } from "react";
import {
  Plus,
  ArrowUpRight,
  ArrowLeft,
  Download,
  Pencil,
  FolderOpen,
  Images,
  X,
  FileJson,
} from "lucide-react";
import { Button, Dialog, FigureImage, Feedback } from "./ui.jsx";
import { figureDisplayTitle, figureLabel, assetUrl } from "./gallery.js";
import ProjectExchange from "./ProjectExchange.jsx";
import ProjectForm from "./ProjectForm.jsx";

export function ProjectCover({ project, figures, small = false }) {
  const refs = project.figureIds
    .map((id) => figures.find((f) => f.id === id))
    .filter(Boolean)
    .slice(0, 3);
  return (
    <span
      className={`project-cover ${small ? "small" : ""}`}
      aria-hidden="true"
    >
      {refs.length ? (
        refs.map((f) => <img key={f.id} src={assetUrl(f, "preview")} alt="" />)
      ) : (
        <FolderOpen size={small ? 20 : 26} />
      )}
    </span>
  );
}
export default function ProjectPanel({
  open,
  intent,
  workspace,
  figures,
  storageWarning,
  onClose,
  onOpenFigure,
  onExport,
}) {
  const { t, locale } = useI18n();
  const [drafts, setDrafts] = useState({});
  const [message, setMessage] = useState("");
  const [limit, setLimit] = useState(12);
  const [exchange, setExchange] = useState(false);
  const project = workspace.activeProject;
  const key = intent === "create" ? "new" : project?.id;
  const draft = drafts[key] || {
    name: intent === "create" ? "" : project?.name || "",
    description: intent === "create" ? "" : project?.description || "",
  };
  const dirty =
    intent === "create"
      ? Boolean(draft.name || draft.description)
      : draft.name !== project?.name ||
        draft.description !== project?.description;
  useEffect(() => {
    setLimit(12);
    setMessage("");
  }, [project?.id, intent]);
  function save(name, description) {
    if (intent === "create") workspace.createProject(name, description);
    else workspace.configureProject(project.id, name, description);
    setDrafts((old) => {
      const next = { ...old };
      delete next[key];
      return next;
    });
    workspace.onCreated();
    setMessage(intent === "create" ? "项目已创建。" : "项目已更新。");
  }
  if (!open) return null;
  const editing = intent !== "board";
  return (
    <Dialog
      title={t("我的项目")}
      eyebrow="FIGURE COLLECTIONS"
      className="projects-workspace"
      onClose={onClose}
    >
      <div className="projects-layout">
        <aside className="projects-rail" aria-label={t("项目导航")}>
          <div className="projects-rail-title">
            <span>{t("项目参考板")}</span>
            <span>{workspace.projects.length}</span>
          </div>
          <Button
            className="project-new-button"
            icon={Plus}
            onClick={workspace.onCreate}
          >
            {t("新建项目")}
          </Button>
          <div className="projects-nav">
            {workspace.projects.map((p) => (
              <button
                key={p.id}
                className={`project-nav-item ${!editing && p.id === project?.id ? "active" : ""}`}
                aria-current={
                  !editing && p.id === project?.id ? "true" : undefined
                }
                onClick={() => {
                  workspace.selectProject(p.id);
                  workspace.onCreated();
                }}
              >
                <ProjectCover project={p} figures={figures} small />
                <span>
                  <strong>{p.name}</strong>
                  <small>
                    {p.figureIds.length}
                    {t(" 幅参考图")}
                  </small>
                </span>
              </button>
            ))}
          </div>
          <div className="project-transfer-actions">
            <Button icon={FileJson} onClick={() => setExchange(true)}>
              {t("项目与智能体")}
            </Button>
          </div>
          <p className="projects-rail-note">
            {t("把喜欢的表达，留给正在做的研究。")}
          </p>
        </aside>
        <div className="projects-main">
          {storageWarning && (
            <p className="notice" role="status">
              {t(storageWarning)}
            </p>
          )}
          {editing ? (
            <section className="project-editor">
              <Button
                className="project-back"
                icon={ArrowLeft}
                onClick={workspace.onCreated}
              >
                {t("返回参考板")}
              </Button>
              <span className="eyebrow">
                {intent === "create" ? "A NEW COLLECTION" : "PROJECT DETAILS"}
              </span>
              <h3>{t(intent === "create" ? "开始一个新项目" : "编辑项目")}</h3>
              <ProjectForm
                key={key}
                draft={draft}
                dirty={dirty}
                onChange={(value) =>
                  setDrafts((old) => ({ ...old, [key]: value }))
                }
                onSave={save}
                onCancel={workspace.onCreated}
                submitLabel={t(intent === "create" ? "创建项目" : "保存修改")}
              />
            </section>
          ) : project ? (
            <>
              <div className="project-board-header">
                <div>
                  <span className="eyebrow">YOUR REFERENCE BOARD</span>
                  <h3>{project.name}</h3>
                  <p>
                    {t(
                      project.description ||
                        "收集图形，整理表达，让下一张图更有方向。",
                    )}
                  </p>
                </div>
                <Button
                  icon={Pencil}
                  className="icon-button"
                  aria-label={t("编辑项目")}
                  title={t("编辑项目")}
                  onClick={workspace.onEdit}
                />
              </div>
              <div className="project-board-tools">
                <span>
                  <Images size={16} />
                  {project.figureIds.length}
                  {t(" 幅参考图")}
                </span>
                <Button
                  icon={Download}
                  variant="primary"
                  disabled={
                    !figures.some((f) => project.figureIds.includes(f.id))
                  }
                  onClick={onExport}
                >
                  {t("导出参考包")}
                </Button>
              </div>
              {project.figureIds.length ? (
                <div className="project-board-grid">
                  {project.figureIds.slice(0, limit).map((id) => {
                    const figure = figures.find((f) => f.id === id);
                    return (
                      <article key={id}>
                        {figure ? (
                          <>
                            <div className="project-board-image">
                              <FigureImage
                                figure={figure}
                                onOpen={() => onOpenFigure(id)}
                              />
                              <span className="project-figure-label">
                                {t(figureLabel(figure))}
                              </span>
                            </div>
                            <h4 title={figure.paper.title}>
                              {figureDisplayTitle(figure, locale)}
                            </h4>
                            <div className="project-card-meta">
                              <span>
                                {figure.paper.venue} ·{" "}
                                {figure.paper.publication_year}
                              </span>
                              <Button
                                icon={X}
                                className="icon-button"
                                title={t("移出项目")}
                                aria-label={t(`移出项目 ${figure.paper.title}`)}
                                onClick={() => {
                                  workspace.setMembership(
                                    project.id,
                                    id,
                                    false,
                                  );
                                  setMessage(
                                    "已移出项目，其他项目的选图不受影响。",
                                  );
                                }}
                              />
                            </div>
                          </>
                        ) : (
                          <div className="project-missing">
                            <p>{t("这幅图已不在当前图库中。")}</p>
                            <Button
                              onClick={() =>
                                workspace.setMembership(project.id, id, false)
                              }
                            >
                              {t("移出项目")}
                            </Button>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="project-board-empty">
                  <span className="project-empty-icon">
                    <Images size={32} />
                  </span>
                  <h4>{t("灵感，从一张图开始")}</h4>
                  <p>
                    {t("在图像卡片上点击「加入项目」，")}
                    <br />
                    {t("为它选择这个项目。")}
                  </p>
                  <Button icon={ArrowUpRight} onClick={onClose}>
                    {t("去画廊找图")}
                  </Button>
                </div>
              )}
              {project.figureIds.length > limit && (
                <Button
                  className="project-load-more"
                  onClick={() => setLimit((old) => old + 12)}
                >
                  {t("再显示 ")}
                  {Math.min(12, project.figureIds.length - limit)}
                  {t(" 幅图")}
                </Button>
              )}
              <Feedback message={message} inline />
              <p className="project-local-note">
                {t("项目保存在当前浏览器 · 图片按需加载")}
              </p>
            </>
          ) : (
            <div className="project-board-empty">
              <span className="project-empty-icon">
                <FolderOpen size={32} />
              </span>
              <h3>{t("给你的灵感一个名字")}</h3>
              <p>
                {t("按论文或研究方向建立项目，")}
                <br />
                {t("把参考图整理在一起。")}
              </p>
              <Button
                variant="primary"
                icon={Plus}
                onClick={workspace.onCreate}
              >
                {t("创建第一个项目")}
              </Button>
            </div>
          )}
        </div>
      </div>
      {exchange && (
        <ProjectExchange
          workspace={workspace}
          figures={figures}
          onClose={() => setExchange(false)}
        />
      )}
    </Dialog>
  );
}
