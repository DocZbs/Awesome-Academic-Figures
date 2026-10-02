import React, { useEffect, useRef, useState } from "react";
import {
  Upload,
  Search,
  RotateCcw,
  Plus,
  Check,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { Button, Dialog, Feedback, FigureImage } from "./ui.jsx";
import { figureLabel } from "./gallery.js";
import {
  MATCH_FIGURE_KINDS,
  FIGURE_KIND_BRIEFS,
  rankFigures,
} from "./matching.js";
import "./matching.css";

const MAX_BYTES = 20 * 1024 * 1024;
const MAX_PAGES = 40;
const MAX_CHARS = 120000;
function inputError(message) {
  const error = new Error(message);
  error.userFacing = true;
  return error;
}

export default function PaperMatcher({
  figures,
  onOpenFigure,
  onSelectFigure,
  selectedFigureIds = [],
  projectCountFor,
  onUseTask,
  onClose,
}) {
  const [text, setText] = useState("");
  const [figureKind, setFigureKind] = useState("teaser");
  const [document, setDocument] = useState(null);
  const [match, setMatch] = useState(null);
  const chosen = selectedFigureIds;
  const taskFigureIds =
    match?.results
      .filter((item) => chosen.includes(item.figure.id))
      .map((item) => item.figure.id) || [];
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const attempt = useRef(0);
  const parserTask = useRef(null);
  const fileInput = useRef(null);
  const textInput = useRef(null);
  useEffect(
    () => () => {
      attempt.current += 1;
      parserTask.current?.destroy().catch(() => {});
    },
    [],
  );
  function findMatches(input, desiredKind = figureKind) {
    if (input.trim().length < 20) {
      setError("请至少提供 20 个字符，建议包含标题、摘要和方法描述。");
      textInput.current?.focus();
      return;
    }
    const result = rankFigures(figures, input, { figureKind: desiredKind });
    setMatch(result);
    setError("");
    setFeedback(
      result.results.length
        ? `找到 ${result.results.length} 幅候选参考，可查看理由后选择。`
        : "所选图类中暂未找到相关参考。请补充关键词或切换图类。",
    );
  }
  async function readFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const generation = ++attempt.current;
    parserTask.current?.destroy().catch(() => {});
    setBusy(true);
    setError("");
    setFeedback("");
    // Keep the current document and references until the replacement is readable.
    try {
      if (file.size > MAX_BYTES)
        throw inputError(
          "文件超过 20 MB。请上传较小的论文，或粘贴标题、摘要与方法文字。",
        );
      const extension = file.name.split(".").pop().toLowerCase();
      let extracted = "";
      let info = { name: file.name, kind: extension.toUpperCase() };
      if (extension === "pdf") {
        const [pdfjs, worker] = await Promise.all([
          import("pdfjs-dist"),
          import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
        ]);
        if (attempt.current !== generation) return;
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
        const task = pdfjs.getDocument({
          data: new Uint8Array(await file.arrayBuffer()),
          isEvalSupported: false,
          useSystemFonts: true,
        });
        parserTask.current = task;
        let passwordRequired = false;
        task.onPassword = () => {
          passwordRequired = true;
          task.destroy().catch(() => {});
        };
        let pdf;
        try {
          pdf = await task.promise;
        } catch (cause) {
          if (passwordRequired)
            throw inputError(
              "此 PDF 受密码保护。请上传已解锁版本，或粘贴论文文字。",
            );
          throw cause;
        }
        const processedPages = Math.min(pdf.numPages, MAX_PAGES);
        info = { ...info, totalPages: pdf.numPages, processedPages };
        const pages = [];
        for (let number = 1; number <= processedPages; number += 1) {
          if (attempt.current !== generation) return;
          const page = await pdf.getPage(number);
          const content = await page.getTextContent();
          pages.push(
            content.items
              .map((item) => item.str + (item.hasEOL ? "\n" : " "))
              .join(""),
          );
          page.cleanup();
          if (pages.join("\n").length >= MAX_CHARS) {
            info.processedPages = number;
            info.characterLimitReached = true;
            break;
          }
        }
        extracted = pages.join("\n\n");
        await task.destroy();
        if (parserTask.current === task) parserTask.current = null;
        if (extracted.replace(/\s/g, "").length < 20)
          throw inputError(
            "未能从 PDF 提取足够文字，可能是扫描件。请先用 OCR 转为文字，再上传 TXT / Markdown，或直接粘贴摘要。",
          );
      } else if (["txt", "md", "markdown"].includes(extension)) {
        extracted = await file.text();
        if (extracted.includes("\u0000"))
          throw inputError(
            "文件看起来不是 UTF-8 文字。请转换为 UTF-8 TXT / Markdown 后重试。",
          );
        if (extracted.trim().length < 20)
          throw inputError("文件中的文字太少。请提供标题、摘要或方法描述。");
      } else
        throw inputError(
          "支持 PDF、TXT 和 Markdown 文件。其他格式请先转成文字。",
        );
      if (attempt.current !== generation) return;
      info.truncated =
        extracted.length > MAX_CHARS || info.characterLimitReached;
      setDocument(info);
      setText(extracted.slice(0, MAX_CHARS));
      findMatches(extracted.slice(0, MAX_CHARS));
    } catch (cause) {
      if (attempt.current === generation)
        setError(
          cause.userFacing
            ? cause.message
            : cause.name === "PasswordException"
              ? "此 PDF 受密码保护。请上传已解锁版本，或粘贴论文文字。"
              : "无法读取此 PDF，可能文件损坏。请重新导出后上传，或直接粘贴论文文字。",
        );
    } finally {
      if (attempt.current === generation) {
        setBusy(false);
        if (fileInput.current) fileInput.current.value = "";
      }
    }
  }
  function reset() {
    attempt.current += 1;
    parserTask.current?.destroy().catch(() => {});
    parserTask.current = null;
    setText("");
    setDocument(null);
    setMatch(null);
    setError("");
    setFeedback("");
    setBusy(false);
    if (fileInput.current) fileInput.current.value = "";
    textInput.current?.focus();
  }
  function select(id) {
    onSelectFigure(id);
  }
  function useTask() {
    const topics =
      match.analysis.topics.map((topic) => topic.label).join("、") ||
      "请根据论文内容判断";
    onUseTask({
      task: `为下面的论文绘制${MATCH_FIGURE_KINDS[match.analysis.figureKind] || "研究概览"}。\n${FIGURE_KIND_BRIEFS[match.analysis.figureKind]}\n请结合所选参考图的信息层级、布局和连线规则，使用我的方法、数据和准确标签。\n\n论文内容：\n${text.slice(0, 12000)}`,
      notes: `本地标题 / 主题词推荐，尚未验证最佳适配。所选图类：${MATCH_FIGURE_KINDS[match.analysis.figureKind]}。识别主题：${topics}。\n${match.results
        .filter((item) => chosen.includes(item.figure.id))
        .map((item) => `${item.figure.paper.title}：${item.reasons.join("；")}`)
        .join("\n")}`,
      figureIds: match.results
        .filter((item) => chosen.includes(item.figure.id))
        .map((item) => item.figure.id),
    });
  }
  return (
    <Dialog
      title="用我的论文找参考图"
      eyebrow="PAPER → FIGURE"
      onClose={onClose}
      className="matcher-dialog"
      footer={
        <>
          <span className="matcher-privacy">论文文字仅在本机临时处理</span>
          <Button icon={RotateCcw} onClick={reset}>
            清空文档
          </Button>
          <Button
            variant="primary"
            disabled={!taskFigureIds.length || !match || busy}
            onClick={useTask}
            icon={ArrowUpRight}
          >
            带入绘图任务
            {taskFigureIds.length ? ` · ${taskFigureIds.length} 幅` : ""}
          </Button>
        </>
      }
    >
      <div className="matcher-intro">
        <p>选择想画的图类，上传论文或粘贴标题、摘要与方法，找到相关参考图。</p>
        <span>本地关键词匹配 · 不上传论文到外部服务</span>
      </div>
      <div className="matcher-workspace">
        <section className="matcher-input" aria-label="论文输入">
          <label className={`matcher-upload ${busy ? "is-busy" : ""}`}>
            <Upload size={25} aria-hidden="true" />
            <strong>{busy ? "正在本机读取论文…" : "选择论文文件"}</strong>
            <span>PDF / TXT / Markdown · 最大 20 MB</span>
            <input
              ref={fileInput}
              type="file"
              accept=".pdf,.txt,.md,.markdown"
              aria-label="上传论文文件"
              onChange={readFile}
              disabled={busy}
            />
          </label>
          {document && (
            <div className="matcher-document">
              <FileText size={16} />
              <span>
                {document.name}
                {document.totalPages
                  ? ` · 已读取 ${document.processedPages} / ${document.totalPages} 页`
                  : ""}
                {document.truncated ? " · 文字已截取前 12 万字符" : ""}
              </span>
            </div>
          )}
          <label htmlFor="matcher-text">
            论文文字 <span>建议：标题 + 摘要 + 方法</span>
          </label>
          <textarea
            id="matcher-text"
            className="resize-none"
            ref={textInput}
            value={text}
            maxLength={MAX_CHARS}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "matcher-error" : "matcher-limit"}
            disabled={busy}
            placeholder="例如：我们提出一个医疗多模态智能体，结合影像编码器、检索模块和大语言模型，生成可验证的诊断解释…"
            onChange={(event) => {
              setText(event.target.value);
              setMatch(null);
              setFeedback("");
            }}
          />
          <div className="matcher-controls">
            <label htmlFor="matcher-figure-kind">
              想找哪类参考图
              <select
                id="matcher-figure-kind"
                value={figureKind}
                disabled={busy}
                onChange={(event) => {
                  setFigureKind(event.target.value);
                  if (match) findMatches(text, event.target.value);
                }}
              >
                {Object.entries(MATCH_FIGURE_KINDS).map(([key, label]) => (
                  <option value={key} key={key}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <Button
              icon={Search}
              variant="primary"
              busy={busy}
              onClick={() => findMatches(text)}
            >
              匹配参考图
            </Button>
          </div>
          <p id="matcher-limit" className="matcher-limit">
            PDF 最多解析前 {MAX_PAGES}{" "}
            页；优先使用摘要与方法，遇到参考文献标题会排除后文。可检查并编辑上面的文字。
          </p>
          {error && (
            <p id="matcher-error" className="matcher-error" role="alert">
              {error}
            </p>
          )}
          <Feedback message={feedback} inline />
        </section>
        <section
          className="matcher-results"
          aria-label="匹配结果"
          aria-busy={busy}
        >
          {match ? (
            <>
              <div className="matcher-summary">
                <span className="eyebrow">MATCHING SIGNALS</span>
                <h3>参考建议与匹配理由</h3>
                <div className="matcher-topics">
                  {match.analysis.topics.map((topic) => (
                    <span key={topic.id}>{topic.label}</span>
                  ))}
                  <span>{MATCH_FIGURE_KINDS[match.analysis.figureKind]}</span>
                </div>
                <p>
                  先限定所选图类，再按论文主题与关键词排序。图类标签为初步分类，请打开原图确认。
                </p>
                {match.analysis.referencesExcluded && (
                  <p>匹配时已排除参考文献部分。</p>
                )}
                <details>
                  <summary>查看本次使用的文字片段</summary>
                  <pre>{match.analysis.focusedText.slice(0, 1800)}</pre>
                </details>
              </div>
              {match.results.length ? (
                <div className="matcher-result-list">
                  {match.results.map((item, index) => (
                    <article className="matcher-result" key={item.figure.id}>
                      <div className="matcher-result-head">
                        <span className="matcher-order">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <span>
                            {item.figure.paper.venue}{" "}
                            {item.figure.paper.publication_year} ·{" "}
                            {figureLabel(item.figure)}
                          </span>
                          <h4>{item.figure.paper.title}</h4>
                        </div>
                      </div>
                      <FigureImage figure={item.figure} />
                      <ul>
                        {item.reasons.map((reason) => (
                          <li key={reason}>{reason}</li>
                        ))}
                      </ul>
                      <div className="matcher-result-actions">
                        <Button
                          onClick={() => onOpenFigure(item.figure.id)}
                          icon={ArrowUpRight}
                        >
                          查看原图与来源
                        </Button>
                        <Button
                          icon={chosen.includes(item.figure.id) ? Check : Plus}
                          variant={
                            chosen.includes(item.figure.id)
                              ? "selected"
                              : "neutral"
                          }
                          title="选择要加入的项目"
                          aria-haspopup="dialog"
                          onClick={() => select(item.figure.id)}
                        >
                          {chosen.includes(item.figure.id)
                            ? `已加入 ${projectCountFor(item.figure.id)} 个项目`
                            : "加入项目"}
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="matcher-empty">
                  <Search size={30} />
                  <h3>暂未匹配到相关主题</h3>
                  <p>
                    所选图类中暂未找到相关参考。可补充关键词，或换一个图类。图类标签仍在完善，未标注条目不会强行混入推荐。
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="matcher-empty">
              <FileText size={34} />
              <h3>
                {busy ? "正在提取可检索的文字" : "先让参考图了解你的论文"}
              </h3>
              <p>
                {busy
                  ? "解析在浏览器内进行；完成后自动推荐。"
                  : "上传后自动推荐；粘贴文字后点击匹配。推荐限定所选图类，并说明共同主题与关键词。"}
              </p>
              <span>你的文本不会进入链接、浏览器存储或匹配 API。</span>
            </div>
          )}
        </section>
      </div>
    </Dialog>
  );
}
