import React, { useEffect, useRef, useState } from "react";
import { FolderOpen, Plus, Settings2, Download, X } from "lucide-react";
import { Button, Dialog, FigureImage, Feedback } from "./ui.jsx";
import { figureLabel } from "./gallery.js";

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
  const [drafts, setDrafts] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef(null);
  useEffect(() => {
    if (open && intent === "create") nameRef.current?.focus();
  }, [open, intent]);
  const project = workspace.activeProject;
  const key = intent === "create" ? "new" : project.id;
  const draft =
    drafts[key] ||
    (intent === "create"
      ? { name: "", description: "" }
      : { name: project.name, description: project.description });
  const dirty =
    intent === "create"
      ? Boolean(draft.name || draft.description)
      : draft.name !== project.name ||
        draft.description !== project.description;
  function setField(field, value) {
    setDrafts((old) => ({ ...old, [key]: { ...draft, [field]: value } }));
    setError("");
  }
  function save(event) {
    event.preventDefault();
    if (!draft.name.trim()) {
      setError("请为项目起一个名字。");
      nameRef.current?.focus();
      return;
    }
    try {
      if (intent === "create")
        workspace.onCreated(
          workspace.createProject(draft.name.trim(), draft.description),
        );
      else
        workspace.configureProject(
          project.id,
          draft.name.trim(),
          draft.description,
        );
      setDrafts((old) => {
        const next = { ...old };
        delete next[key];
        return next;
      });
      setMessage(
        intent === "create"
          ? "项目已创建，可以开始添加参考图。"
          : "项目配置已保存。",
      );
    } catch {
      setError("项目未能更新，填写的内容已保留，请重试。");
    }
  }
  if (!open) return null;
  return (
    <Dialog
      title={intent === "create" ? "新建项目参考板" : "项目参考板"}
      eyebrow="YOUR RESEARCH PROJECT"
      onClose={onClose}
      className="project-dialog"
    >
      <div className="project-panel-heading">
        <label htmlFor="panel-project">当前项目</label>
        <select
          id="panel-project"
          value={project.id}
          onChange={(event) => {
            workspace.selectProject(event.target.value);
            workspace.onCreated();
            setMessage("");
            setError("");
          }}
        >
          {workspace.projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} · {p.figureIds.length} 幅图
            </option>
          ))}
        </select>
        <Button icon={Plus} onClick={workspace.onCreate}>
          新建项目
        </Button>
      </div>
      <details className="project-settings" open={intent === "create"}>
        <summary>
          <Settings2 size={16} /> 项目配置{dirty && <span>有未保存修改</span>}
        </summary>
        <form noValidate onSubmit={save}>
          <label htmlFor="project-name">
            项目名称 <span>必填</span>
          </label>
          <input
            id="project-name"
            ref={nameRef}
            autoFocus={intent === "create"}
            maxLength={80}
            value={draft.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "project-error" : undefined}
          />
          <label htmlFor="project-description">项目说明</label>
          <textarea
            id="project-description"
            className="resize-none"
            rows={3}
            maxLength={2000}
            value={draft.description}
            onChange={(event) => setField("description", event.target.value)}
            placeholder="研究方向，以及希望借鉴的图形表达"
          />
          {error && (
            <p id="project-error" className="field-error" role="alert">
              {error}
            </p>
          )}
          {dirty && (
            <p className="project-note">
              关闭窗口会保留本次页面的配置草稿，点击保存才更新项目。
            </p>
          )}
          <Button type="submit" variant="primary">
            {intent === "create" ? "创建项目" : "保存项目配置"}
          </Button>
        </form>
      </details>
      {storageWarning && (
        <p className="notice" role="status">
          {storageWarning}
        </p>
      )}
      <Feedback message={message} inline />
      {intent !== "create" && (
        <>
          <div className="project-board-heading">
            <div>
              <h3>{project.name}</h3>
              <p>{project.description || "为这个项目收集有启发的参考图。"}</p>
            </div>
            <span>{project.figureIds.length} 幅参考图</span>
          </div>
          {!project.figureIds.length ? (
            <div className="project-empty">
              <FolderOpen size={30} />
              <h3>从第一张参考图开始</h3>
              <p>回到画廊，点击「添加到项目」。</p>
              <Button onClick={onClose}>继续找图</Button>
            </div>
          ) : (
            <div className="project-board-grid">
              {project.figureIds.map((id) => {
                const figure = figures.find((f) => f.id === id);
                return (
                  <article key={id}>
                    {figure ? (
                      <>
                        <FigureImage
                          figure={figure}
                          className="project-preview"
                          onOpen={() => onOpenFigure(id)}
                        />
                        <h4>{figure.paper.title}</h4>
                        <small>{figureLabel(figure)}</small>
                      </>
                    ) : (
                      <p>这幅参考图已不在当前图库中。</p>
                    )}
                    <Button
                      icon={X}
                      onClick={() => workspace.toggleFigure(id)}
                      aria-label={`从项目移除 ${figure?.paper.title || id}`}
                    >
                      移出参考板
                    </Button>
                  </article>
                );
              })}
            </div>
          )}
          <div className="project-panel-footer">
            <p>
              项目名称、说明和图像引用仅保存在当前浏览器。上传的论文文字不会自动保存。
            </p>
            <Button
              icon={Download}
              variant="primary"
              disabled={!figures.some((f) => project.figureIds.includes(f.id))}
              onClick={onExport}
            >
              导出项目参考包
            </Button>
          </div>
        </>
      )}
    </Dialog>
  );
}
