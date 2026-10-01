import { assetUrl, figureLabel } from "./gallery.js";
import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  Plus,
  Star,
  EyeOff,
  RotateCcw,
  X,
  ImageOff,
  LoaderCircle,
  ExternalLink,
} from "lucide-react";

export function PaperSource({ paper }) {
  return (
    <section className="paper-source" aria-label="论文档案">
      <div className="paper-source-heading">
        <span className="eyebrow">PAPER ARCHIVE</span>
        <span>
          {paper.venue} {paper.publication_year}
          {paper.awards?.[0]?.official_name &&
            ` · ${paper.awards[0].official_name}`}
        </span>
      </div>
      <h3>
        <a href={paper.url} target="_blank" rel="noreferrer">
          {paper.title}
          <ExternalLink size={15} />
        </a>
      </h3>
      <div className="paper-source-meta">
        {paper.publication_date && (
          <span>
            {paper.publication_kind === "journal"
              ? "期刊发表日期"
              : "论文集发布日期"}{" "}
            <time dateTime={paper.publication_date.replaceAll("/", "-")}>
              {paper.publication_date.replaceAll("/", "-")}
            </time>
          </span>
        )}
        <span>
          图鉴收录{" "}
          <time dateTime={paper.collected_at}>
            {paper.collected_at || "待记录"}
          </time>
        </span>
        {paper.arxiv_first_submitted_at && (
          <span>
            arXiv 首次提交{" "}
            <time dateTime={paper.arxiv_first_submitted_at}>
              {paper.arxiv_first_submitted_at}
            </time>
          </span>
        )}
      </div>
      <div className="paper-source-links">
        {paper.arxiv_url && (
          <a href={paper.arxiv_url} target="_blank" rel="noreferrer">
            arXiv:{paper.arxiv_id}
            <ExternalLink size={14} />
          </a>
        )}
        <a href={paper.url} target="_blank" rel="noreferrer">
          {paper.publication_kind === "journal"
            ? "期刊原文"
            : paper.venue === "arXiv"
              ? "论文来源"
              : "会议论文集"}
          <ExternalLink size={14} />
        </a>
        {paper.pdf_url && (
          <a href={paper.pdf_url} target="_blank" rel="noreferrer">
            论文 PDF
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </section>
  );
}

export function Button({
  children,
  icon: Icon,
  variant = "neutral",
  busy = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      disabled={props.disabled || busy}
      aria-busy={busy || undefined}
      className={`button button-${variant} ${className}`}
    >
      {busy ? (
        <LoaderCircle size={17} className="spinner" aria-hidden="true" />
      ) : (
        Icon && <Icon size={17} aria-hidden="true" />
      )}
      {children}
    </button>
  );
}
export function Chip({ children, active, onClick, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      type="button"
      className={`chip ${active ? "active" : ""}`}
      aria-pressed={Boolean(active)}
    >
      {children}
    </button>
  );
}
export function Dialog({
  title,
  eyebrow,
  children,
  footer,
  onClose,
  busy = false,
  className = "",
}) {
  const ref = useRef(null);
  const titleId = React.useId();
  useEffect(() => {
    const opener = document.activeElement;
    const element = ref.current;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = oldOverflow;
      if (opener?.isConnected) opener.focus();
      else document.getElementById("gallery-heading")?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`dialog ${className}`}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
    >
      <div className="dialog-header">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 id={titleId}>{title}</h2>
        </div>
        <Button
          className="icon-button"
          aria-label="关闭窗口"
          title="关闭窗口"
          icon={X}
          disabled={busy}
          onClick={onClose}
        />
      </div>
      <div className="dialog-body">{children}</div>
      {footer && <div className="dialog-footer">{footer}</div>}
    </dialog>
  );
}
export function Feedback({ message, undo, onDismiss, inline = false }) {
  if (!message) return null;
  return (
    <div
      className={`feedback ${inline ? "feedback-inline" : ""}`}
      role="status"
      aria-live="polite"
    >
      <Check size={17} aria-hidden="true" />
      <span>{message}</span>
      {undo && <button onClick={undo}>撤销</button>}
      {onDismiss && (
        <button onClick={onDismiss} aria-label="关闭提示">
          <X size={15} />
        </button>
      )}
    </div>
  );
}
export function FigureImage({ figure, full = false, className = "", onOpen }) {
  const [failed, setFailed] = useState(false);
  const [version, setVersion] = useState(0);
  useEffect(() => {
    setFailed(false);
    setVersion(0);
  }, [figure.id]);
  const img = (
    <img
      src={`${assetUrl(figure, full ? "reference" : "preview")}?v=${version}`}
      width={figure.visual.pixel_width}
      height={figure.visual.pixel_height}
      alt={`${figure.paper.title} 的 ${figureLabel(figure)}：${figure.title.zh}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
  return (
    <div className={`figure-media ${className}`}>
      {failed ? (
        <div className="image-error">
          <ImageOff size={25} />
          <p>图片暂时无法加载</p>
          <Button
            icon={RotateCcw}
            onClick={() => {
              setFailed(false);
              setVersion((value) => value + 1);
            }}
          >
            重新加载
          </Button>
        </div>
      ) : onOpen ? (
        <button
          className="image-open"
          onClick={onOpen}
          aria-label={`查看 ${figureLabel(figure)} 详情`}
        >
          {img}
        </button>
      ) : (
        img
      )}
    </div>
  );
}
export function FigureActions({
  figure,
  selected,
  favorite,
  hidden,
  onSelect,
  onFavorite,
  onHide,
  onRestore,
  compact = false,
}) {
  return (
    <div className={`figure-actions ${compact ? "compact" : ""}`}>
      <Button
        icon={selected ? Check : Plus}
        variant={selected ? "selected" : "neutral"}
        aria-pressed={selected}
        onClick={() => onSelect(figure.id)}
      >
        {selected ? "已选参考" : "选作参考"}
      </Button>
      <Button
        icon={Star}
        className={`favorite-button ${favorite ? "is-favorite" : ""}`}
        aria-pressed={favorite}
        aria-label={`${favorite ? "取消收藏" : "收藏"} ${figureLabel(figure)}`}
        title={favorite ? "取消收藏" : "收藏"}
        onClick={() => onFavorite(figure.id)}
      >
        {!compact && (favorite ? "已收藏" : "收藏")}
      </Button>
      <Button
        icon={hidden ? RotateCcw : EyeOff}
        className="icon-button hide-button"
        aria-label={
          hidden
            ? `恢复展示 ${figureLabel(figure)}`
            : `暂时隐藏 ${figureLabel(figure)}`
        }
        title={hidden ? "恢复展示" : "暂时隐藏"}
        onClick={() => (hidden ? onRestore(figure.id) : onHide(figure.id))}
      />
    </div>
  );
}
