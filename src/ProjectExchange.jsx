import React, { useId, useState } from "react";
import { Download, Upload, ArrowUpRight } from "lucide-react";
import { Button, Dialog, Feedback } from "./ui.jsx";
import { validateProjects } from "./projects.js";

export default function ProjectExchange({ workspace, figures, onClose }) {
  const id = useId();
  const [incoming, setIncoming] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const unknown =
    incoming?.projects
      .flatMap((p) => p.figureIds)
      .filter((id) => !figures.some((f) => f.id === id)) || [];
  const updated =
    incoming?.projects.filter((p) =>
      workspace.projects.some((old) => old.id === p.id),
    ).length || 0;
  async function read(file) {
    setIncoming(null);
    setError("");
    setMessage("");
    if (!file) return;
    setBusy(true);
    try {
      if (file.size > 2 * 1024 * 1024) throw new Error("too large");
      setIncoming(validateProjects(JSON.parse(await file.text())));
    } catch {
      setError(
        "配置无法读取。请选择版本 1 的项目 JSON 文件，最大 2 MB；现有项目未改动。",
      );
    } finally {
      setBusy(false);
    }
  }
  function apply() {
    try {
      workspace.importProjects(incoming);
      setMessage(`已导入 ${incoming.projects.length} 个项目。`);
      setIncoming(null);
      setError("");
    } catch {
      setError("项目未能导入。当前配置已保留，请重试。");
    }
  }
  function download() {
    const data = validateProjects({ version: 1, projects: workspace.projects });
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2) + "\n"], {
        type: "application/json",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "aaf-projects.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("项目配置已导出，可交给智能体继续检索和选图。");
  }
  return (
    <Dialog
      title="项目与智能体"
      eyebrow="HUMAN ↔ AGENT"
      className="project-picker"
      onClose={onClose}
      busy={busy}
    >
      <p className="exchange-intro">把项目交给智能体，带着选好的参考图回来。</p>
      <div className="exchange-section">
        <h3>导出给智能体</h3>
        <p>
          下载项目名称、说明和图像 ID。智能体可修改配置，再导入这里继续浏览。
        </p>
        <Button icon={Download} onClick={download}>
          导出项目配置
        </Button>
        <a
          className="exchange-guide"
          href="./AGENTS.md"
          target="_blank"
          rel="noreferrer"
        >
          智能体操作指南 <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="exchange-section">
        <h3>接回智能体的选图</h3>
        <label htmlFor={`${id}-file`}>项目配置 JSON</label>
        <input
          id={`${id}-file`}
          type="file"
          accept=".json,application/json"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          disabled={busy}
          onChange={(e) => read(e.target.files?.[0])}
        />
        {busy && <p role="status">正在读取配置…</p>}
        {incoming && (
          <div className="exchange-review">
            <p>
              新增 {incoming.projects.length - updated} 个项目，更新 {updated}{" "}
              个同 ID 项目。其他项目保留。
            </p>
            <ul>
              {incoming.projects.map((p) => (
                <li key={p.id}>
                  {p.name} · {p.figureIds.length} 幅参考图
                </li>
              ))}
            </ul>
            {unknown.length > 0 && (
              <p className="notice">
                {new Set(unknown).size} 个图 ID
                不在当前图库中，将保留引用并在参考板提示。
              </p>
            )}
            <Button
              variant="primary"
              icon={Upload}
              onClick={apply}
              disabled={!incoming.projects.length}
            >
              确认导入项目
            </Button>
          </div>
        )}
        {error && (
          <p id={`${id}-error`} className="field-error" role="alert">
            {error}
          </p>
        )}
      </div>
      <Feedback message={message} inline />
    </Dialog>
  );
}
