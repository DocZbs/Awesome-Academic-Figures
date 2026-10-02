import { useI18n } from "./i18n.jsx";
import React, { useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui.jsx";

// One config form for the manager and the figure destination chooser.
export default function ProjectForm({
  draft,
  onChange,
  onSave,
  onCancel,
  submitLabel,
  dirty,
}) {
  const { t } = useI18n();
  const id = useId();
  const nameRef = useRef(null);
  const composing = useRef(false);
  const [error, setError] = useState("");
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  function submit(event) {
    event.preventDefault();
    if (composing.current) return;
    if (!draft.name.trim()) {
      setError("请填写项目名称。");
      nameRef.current?.focus();
      return;
    }
    try {
      onSave(draft.name.trim(), draft.description);
      setError("");
    } catch {
      setError("项目未能保存，内容已保留，请重试。");
    }
  }
  return (
    <form className="project-form" noValidate onSubmit={submit}>
      <label htmlFor={`${id}-name`}>
        {t("项目名称 ")}
        <span>{t("必填")}</span>
      </label>
      <input
        id={`${id}-name`}
        ref={nameRef}
        required
        onCompositionStart={() => {
          composing.current = true;
        }}
        onCompositionEnd={() => {
          composing.current = false;
        }}
        maxLength={80}
        value={draft.name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => {
          onChange({ ...draft, name: event.target.value });
          setError("");
        }}
      />
      <label htmlFor={`${id}-description`}>
        {t("项目说明 ")}
        <span>{t("选填")}</span>
      </label>
      <textarea
        id={`${id}-description`}
        className="resize-none"
        rows={4}
        maxLength={2000}
        value={draft.description}
        onChange={(event) =>
          onChange({ ...draft, description: event.target.value })
        }
      />
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          {t(error)}
        </p>
      )}
      <p className="project-draft-note">
        {t(
          dirty
            ? "草稿保留在本次页面，保存后更新项目。"
            : "为一篇论文、一个研究方向，整理自己的绘图参考。",
        )}
      </p>
      <div className="project-form-actions">
        <Button onClick={onCancel}>{t("返回")}</Button>
        <Button variant="primary" type="submit" icon={ArrowRight}>
          {t(submitLabel)}
        </Button>
      </div>
    </form>
  );
}
