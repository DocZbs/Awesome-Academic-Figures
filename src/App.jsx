import React, {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Search,
  X,
  SlidersHorizontal,
  Layers3,
  Workflow,
  Network,
  Images,
  ChartNoAxesCombined,
  Shapes,
  LayoutGrid,
  Star,
  Bookmark,
  Check,
  Download,
  Copy,
  BookOpen,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Eye,
  CornerDownRight,
  FolderDown,
  ChevronDown,
  FileSearch,
} from "lucide-react";
import { zipSync, strToU8 } from "fflate";
import {
  Button,
  Chip,
  Dialog,
  Feedback,
  FigureImage,
  FigureActions,
  PaperSource,
} from "./ui.jsx";
import {
  TYPE_LABELS,
  PURPOSE_LABELS,
  LAYOUT_LABELS,
  DIMENSIONS,
  FILTER_FIELDS,
  filterFieldsFor,
  facetCountsFor,
  assetUrl,
  filterFigures,
  categorySummary,
  readUrl,
  fetchResource,
  loadFigureDetails,
  figureLabel,
} from "./gallery.js";

const TYPE_ICONS = {
  architecture: Network,
  mechanism: Workflow,
  flowchart: Workflow,
  conceptual: Shapes,
  qualitative: Images,
  data: ChartNoAxesCombined,
  "multi-panel": Layers3,
  taxonomy: Layers3,
  teaser: Sparkles,
  unclassified: Shapes,
};
const INITIAL = readUrl();
const PaperMatcher = lazy(() => import("./PaperMatcher.jsx"));
const PAGE_SIZE = 12;
function usePreference(key, kind, onFailure) {
  const read = () => {
    try {
      const value = JSON.parse(window[kind].getItem(key) || "[]");
      return Array.isArray(value)
        ? value.filter((item) => typeof item === "string")
        : [];
    } catch {
      return [];
    }
  };
  const [value, setValue] = useState(read);
  useEffect(() => {
    try {
      window[kind].setItem(key, JSON.stringify(value));
    } catch {
      onFailure("浏览器无法保存偏好，本次操作仍可继续；刷新后可能不会保留。");
    }
  }, [value]);
  useEffect(() => {
    if (kind !== "localStorage") return;
    const sync = (event) => {
      if (event.key === key) setValue(read());
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  return [value, setValue];
}
const toggleItem = (setValue, id) =>
  setValue((old) =>
    old.includes(id) ? old.filter((item) => item !== id) : [...old, id],
  );

export default function App() {
  const [figures, setFigures] = useState([]);
  const [loadState, setLoadState] = useState("loading");
  const [retry, setRetry] = useState(0);
  const [state, setState] = useState(INITIAL);
  const [query, setQuery] = useState(INITIAL.query);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [storageWarning, setStorageWarning] = useState("");
  const [favorites, setFavorites] = usePreference(
    "aaf:favorites",
    "localStorage",
    setStorageWarning,
  );
  const [selected, setSelected] = usePreference(
    "aaf:selected",
    "sessionStorage",
    setStorageWarning,
  );
  const [hidden, setHidden] = usePreference(
    "aaf:hidden",
    "sessionStorage",
    setStorageWarning,
  );
  const [detailId, setDetailId] = useState(
    new URLSearchParams(location.search).get("figure"),
  );
  const [guide, setGuide] = useState(false);
  const [matcherOpen, setMatcherOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [task, setTask] = useState("");
  const [notes, setNotes] = useState("");
  const [feedback, setFeedback] = useState(null);
  const searchRef = useRef(null);
  const composing = useRef(false);
  const debounce = useRef(null);
  const actions = {
    onSelect: (id) => toggleItem(setSelected, id),
    onFavorite: (id) => toggleItem(setFavorites, id),
    onHide: (id) => {
      setHidden((old) => [...new Set([...old, id])]);
      setFeedback({
        message: "已暂时隐藏，可在“已隐藏”中恢复。",
        undo: () => setHidden((old) => old.filter((item) => item !== id)),
      });
    },
    onRestore: (id) => {
      setHidden((old) => old.filter((item) => item !== id));
      setFeedback({ message: "已恢复展示。" });
    },
  };
  useEffect(() => {
    const controller = new AbortController();
    setLoadState("loading");
    fetchResource(`${import.meta.env.BASE_URL}catalog.json`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data.figures)) throw new Error("Invalid catalog");
        if (!controller.signal.aborted) {
          setFigures(data.figures);
          setLoadState("ready");
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setLoadState("error");
      });
    return () => controller.abort();
  }, [retry]);
  useEffect(() => {
    clearTimeout(debounce.current);
    if (!composing.current)
      debounce.current = setTimeout(
        () => setState((old) => ({ ...old, query })),
        300,
      );
    return () => clearTimeout(debounce.current);
  }, [query]);
  useEffect(() => {
    const url = new URL(location.href);
    for (const key of [
      "q",
      "dimension",
      "category",
      "view",
      ...Object.keys(FILTER_FIELDS),
    ])
      url.searchParams.delete(key);
    if (state.query) url.searchParams.set("q", state.query);
    if (state.dimension !== "type")
      url.searchParams.set("dimension", state.dimension);
    if (state.category !== "all")
      url.searchParams.set("category", state.category);
    if (state.view !== "gallery") url.searchParams.set("view", state.view);
    for (const [key, values] of Object.entries(state.filters))
      if (values.length) url.searchParams.set(key, values.join(","));
    history.replaceState(null, "", url);
    setLimit(PAGE_SIZE);
  }, [state]);
  useEffect(() => {
    const back = () => {
      const value = readUrl();
      setState(value);
      setQuery(value.query);
      setDetailId(new URLSearchParams(location.search).get("figure"));
    };
    window.addEventListener("popstate", back);
    return () => window.removeEventListener("popstate", back);
  }, []);
  useEffect(() => {
    const currentFigure = figures.find((item) => item.id === detailId);
    document.title = `${detailId ? (currentFigure ? figureLabel(currentFigure) : "参考图详情") : state.view === "favorites" ? "我的收藏" : state.view === "hidden" ? "已隐藏图像" : "图形画廊"} — Awesome Academic Figures`;
  }, [detailId, state.view, figures]);
  const detail = figures.find((item) => item.id === detailId);
  const results = useMemo(
    () => filterFigures(figures, state, favorites, hidden),
    [figures, state, favorites, hidden],
  );
  const facetCounts = useMemo(
    () => facetCountsFor(figures, state, favorites, hidden),
    [figures, state, favorites, hidden],
  );
  const selectedFigures = figures.filter((item) => selected.includes(item.id));
  const categoryFigures = useMemo(
    () =>
      filterFigures(figures, { ...state, category: "all" }, favorites, hidden),
    [figures, state, favorites, hidden],
  );
  const categoryStats = useMemo(
    () => categorySummary(categoryFigures, state.dimension),
    [categoryFigures, state.dimension],
  );
  const inferredLayoutCount = categoryFigures.filter(
    (figure) => figure.layout_annotation?.status === "description_inferred",
  ).length;
  const categoryLabels =
    state.dimension === "type"
      ? TYPE_LABELS
      : state.dimension === "purpose"
        ? PURPOSE_LABELS
        : state.dimension === "layout"
          ? LAYOUT_LABELS
          : Object.fromEntries(
              [...new Set(figures.map((item) => item.paper.venue))].map(
                (venue) => [venue, venue],
              ),
            );
  const filterCount = Object.values(state.filters).reduce(
    (sum, values) => sum + values.length,
    0,
  );
  const clearFilters = () => {
    clearTimeout(debounce.current);
    setQuery("");
    setState((old) => ({
      ...old,
      query: "",
      category: "all",
      filters: Object.fromEntries(
        Object.keys(FILTER_FIELDS).map((key) => [key, []]),
      ),
    }));
    searchRef.current?.focus();
  };
  const setView = (view) => {
    clearTimeout(debounce.current);
    setQuery("");
    setState({
      ...INITIAL,
      category: "all",
      dimension: "type",
      view,
      query: "",
      filters: Object.fromEntries(
        Object.keys(FILTER_FIELDS).map((key) => [key, []]),
      ),
    });
    document.getElementById("gallery")?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  const openDetail = (id) => {
    const url = new URL(location.href);
    url.searchParams.set("figure", id);
    history.pushState(null, "", url);
    setDetailId(id);
  };
  const closeDetail = () => {
    const url = new URL(location.href);
    url.searchParams.delete("figure");
    history.replaceState(null, "", url);
    setDetailId(null);
  };
  const setFilter = (field, value) =>
    setState((old) => ({
      ...old,
      filters: {
        ...old.filters,
        [field]: old.filters[field].includes(value)
          ? old.filters[field].filter((item) => item !== value)
          : [...old.filters[field], value],
      },
    }));
  return (
    <>
      <a className="skip-link" href="#gallery">
        跳到图形画廊
      </a>
      <header className="site-header page-width">
        <a
          href={import.meta.env.BASE_URL}
          className="brand"
          aria-label="Awesome Academic Figures 首页"
        >
          <span className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span>
            Awesome
            <br />
            <strong>Academic Figures</strong>
          </span>
        </a>
        <nav aria-label="主导航">
          <button
            className={
              state.view === "gallery" ? "nav-link active" : "nav-link"
            }
            onClick={() => setView("gallery")}
          >
            图形画廊
          </button>
          <button
            className={
              state.view === "favorites" ? "nav-link active" : "nav-link"
            }
            onClick={() => setView("favorites")}
          >
            我的收藏<span className="nav-count">{favorites.length}</span>
          </button>
          <button className="nav-link" onClick={() => setGuide(true)}>
            使用指南
            <ArrowUpRight size={14} />
          </button>
        </nav>
        <span className="version-badge">
          <span /> 开放图鉴 <span className="mono">v0.2</span>
        </span>
      </header>
      <main className={selectedFigures.length ? "with-tray" : ""}>
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="tiny-axis" /> A VISUAL LIBRARY FOR RESEARCH
            </div>
            <h1 id="hero-title">
              好研究，
              <br />
              也值得一张
              <span className="heading-accent">
                好图<span className="accent-spark">✳</span>
              </span>
              。
            </h1>
            <p>
              从 AI 论文中，找到你的绘图灵感。
              <br />
              挑选论文首图与方法图，交给你的绘图智能体。
            </p>
            <div className="hero-buttons">
              <Button
                variant="primary"
                icon={FileSearch}
                disabled={loadState !== "ready"}
                onClick={() => setMatcherOpen(true)}
              >
                用我的论文找图
              </Button>
              <a href="#gallery" className="button button-neutral">
                探索图形画廊
                <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-caption">
              <span className="source-dot" /> 源自真实论文{" "}
              <span className="caption-divider" /> 为你的研究重新表达
            </div>
          </div>
          <div className="hero-art">
            <div className="art-grid" />
            <span className="art-corner corner-top" />
            <span className="art-corner corner-bottom" />
            <div className="art-annotation mono">FIGURES THAT TELL A STORY</div>
            {figures.length > 1 ? (
              <>
                <button
                  className="hero-figure hero-figure-one"
                  onClick={() => openDetail(figures[0].id)}
                  aria-label="查看 Figure 1"
                >
                  <div className="hero-figure-header">
                    <span className="mono">FIG. 01</span>
                    <span>
                      THE FRAMEWORK
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                  <img
                    src={assetUrl(figures[0], "preview")}
                    width="1200"
                    height="400"
                    alt="协作模拟与反馈框架预览"
                  />
                  <div className="hero-figure-caption">
                    <span>CollabLLM</span>
                    <span>ICML 2025</span>
                  </div>
                </button>
                <button
                  className="hero-figure hero-figure-two"
                  onClick={() => openDetail(figures[1].id)}
                  aria-label="查看 Figure 2"
                >
                  <div className="hero-figure-header">
                    <span className="mono">FIG. 02</span>
                    <span>
                      THE COMPARISON
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                  <img
                    src={assetUrl(figures[1], "preview")}
                    width="1200"
                    height="444"
                    alt="两种方法的训练与应用对比预览"
                  />
                </button>
                <div className="art-sticker">
                  <Sparkles size={15} /> 好图，让想法被看见
                </div>
              </>
            ) : (
              <div className="hero-art-placeholder">
                <Layers3 size={48} />
                <span>Figure 1 + Figure 2</span>
              </div>
            )}
          </div>
        </section>
        <div className="source-strip page-width">
          <span className="strip-label">从这些会议开始</span>
          <div className="conference-list">
            <strong>NeurIPS</strong>
            <strong>ICML</strong>
            <strong>ICLR</strong>
            <strong>CVPR</strong>
            <strong>ICCV</strong>
            <strong>ACL</strong>
          </div>
          <span className="strip-note">
            已收录 · {new Set(figures.map((figure) => figure.paper.id)).size}{" "}
            篇论文 / {figures.length} 幅图
          </span>
        </div>
        <section
          id="gallery"
          className="gallery page-width"
          aria-labelledby="gallery-heading"
        >
          <div className="gallery-heading-row">
            <div>
              <div className="eyebrow">FIND YOUR NEXT FIGURE</div>
              <h2 id="gallery-heading" tabIndex="-1">
                {state.view === "favorites"
                  ? "你的灵感收藏夹"
                  : state.view === "hidden"
                    ? "暂时隐藏的图"
                    : "从一种图形，开始一个想法"}
                <span className="heading-count">{results.length}</span>
              </h2>
            </div>
            <div className="search-field">
              <Search size={19} aria-hidden="true" />
              <label className="sr-only" htmlFor="figure-search">
                搜索图形、布局或论文
              </label>
              <input
                id="figure-search"
                ref={searchRef}
                type="search"
                placeholder="搜索图形、布局或论文…"
                value={query}
                onCompositionStart={() => {
                  composing.current = true;
                  clearTimeout(debounce.current);
                }}
                onCompositionEnd={(event) => {
                  const value = event.currentTarget.value;
                  composing.current = false;
                  setQuery(value);
                  setState((old) => ({ ...old, query: value }));
                }}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.nativeEvent.isComposing &&
                    !composing.current
                  ) {
                    clearTimeout(debounce.current);
                    setState((old) => ({ ...old, query }));
                  }
                }}
              />
              {query && (
                <button
                  aria-label="清除搜索"
                  onClick={() => {
                    clearTimeout(debounce.current);
                    setQuery("");
                    setState((old) => ({ ...old, query: "" }));
                    searchRef.current.focus();
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          {storageWarning && (
            <div className="notice" role="status">
              {storageWarning}
            </div>
          )}
          <div className="dimension-row">
            <span>浏览维度</span>
            <div className="dimension-buttons" aria-label="浏览维度">
              {Object.entries(DIMENSIONS).map(([key, label]) => (
                <button
                  key={key}
                  aria-pressed={state.dimension === key}
                  className={state.dimension === key ? "active" : ""}
                  onClick={() =>
                    setState((old) => ({
                      ...old,
                      dimension: key,
                      category: "all",
                    }))
                  }
                >
                  {label}
                  {key === "type" && <span className="default-tag">默认</span>}
                </button>
              ))}
            </div>
            <button
              className="hidden-link"
              onClick={() =>
                setView(state.view === "hidden" ? "gallery" : "hidden")
              }
            >
              <Eye size={15} />
              {state.view === "hidden" ? "返回画廊" : `已隐藏 ${hidden.length}`}
            </button>
          </div>
          <div
            className="category-row"
            aria-label={DIMENSIONS[state.dimension]}
          >
            <Chip
              active={state.category === "all"}
              onClick={() => setState((old) => ({ ...old, category: "all" }))}
            >
              <LayoutGrid size={17} />
              全部图形
              <span>{categoryStats.total}</span>
            </Chip>
            {Object.entries(categoryLabels).map(([key, label]) => {
              if (
                key === "unlabelled" &&
                !categoryStats.unlabelled &&
                state.category !== key
              )
                return null;
              const Icon = TYPE_ICONS[key] || Layers3;
              return (
                <Chip
                  key={key}
                  active={state.category === key}
                  onClick={() => setState((old) => ({ ...old, category: key }))}
                >
                  <Icon size={17} />
                  {label}
                  <span>{categoryStats.counts[key] || 0}</span>
                </Chip>
              );
            })}
          </div>
          {loadState === "ready" && (
            <p className="category-summary">
              {(state.dimension === "layout" ||
                state.dimension === "purpose") &&
                `当前 ${categoryStats.total} 幅图中，${categoryStats.labelled} 幅已标注${state.dimension === "layout" ? "布局" : "用途"}，${categoryStats.unlabelled} 幅未标注。`}
              {categoryStats.overlapping &&
                "同一幅图可有多个标签，分类数量不相加。"}
              {state.dimension === "layout" &&
                inferredLayoutCount > 0 &&
                `其中 ${inferredLayoutCount} 幅为来源描述初标，待看图复核。`}
              数量按当前搜索、筛选与列表统计。
            </p>
          )}
          {state.dimension === "source" && (
            <div className="paper-archive-list">
              {Array.from(
                new Map(
                  results.map((figure) => [figure.paper.id, figure.paper]),
                ).values(),
              ).map((paper) => (
                <PaperSource key={paper.id} paper={paper} />
              ))}
            </div>
          )}
          <div className="gallery-layout">
            <aside className="filter-panel" aria-label="多维筛选">
              <div className="filter-heading">
                <SlidersHorizontal size={17} />
                <strong>进一步筛选</strong>
                {filterCount > 0 && (
                  <button onClick={clearFilters}>重置</button>
                )}
              </div>
              <p className="filter-caption">找到适合你研究的表达方式</p>
              {Object.entries(filterFieldsFor(figures)).map(([field, info]) => (
                <details
                  key={field}
                  open={field === "number" || field === "layout"}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.currentTarget.open = false;
                      event.currentTarget.querySelector("summary").focus();
                    }
                  }}
                >
                  <summary>
                    {info.label}
                    <ChevronDown size={14} />
                  </summary>
                  {field === "number" && (
                    <p className="filter-caption">
                      Figure 1 / 2 是已核实的论文图号；带 arXiv
                      标记的图号仅在相应预印本版本核实。找研究概览，请选上方的
                      Teaser 图。
                    </p>
                  )}
                  <div className="filter-options">
                    {info.options.map((option) => (
                      <label key={option.value}>
                        <input
                          type="checkbox"
                          checked={state.filters[field].includes(option.value)}
                          onChange={() => setFilter(field, option.value)}
                        />
                        <span>{option.label}</span>
                        <span className="filter-count mono">
                          {facetCounts[field]?.[option.value] || 0}
                        </span>
                      </label>
                    ))}
                  </div>
                </details>
              ))}
              <div className="filter-tip">
                <CornerDownRight size={17} />
                <p>
                  先找布局，再换内容。
                  <br />
                  <span>
                    参考图不是答案，
                    <br />
                    你的研究才是。
                  </span>
                </p>
              </div>
            </aside>
            <div className="results-panel">
              <div className="results-meta">
                <span role="status">
                  {loadState === "ready"
                    ? `找到 ${results.length} 幅图形`
                    : loadState === "error"
                      ? "图形库加载失败"
                      : "正在读取图形库"}
                </span>
                <span>
                  <span className="verified-dot" /> 图片 + 结构描述 + Prompt
                </span>
              </div>
              {loadState === "loading" ? (
                <div className="empty-state loading-state">
                  <div className="loader" />
                  <h3>正在打开图形库</h3>
                  <p>读取参考图和来源信息…</p>
                </div>
              ) : loadState === "error" ? (
                <div className="empty-state" role="alert">
                  <FolderDown size={36} />
                  <h3>图形库暂时无法加载</h3>
                  <p>检查网络，然后重新尝试。</p>
                  <Button
                    icon={RotateCcw}
                    onClick={() => setRetry((value) => value + 1)}
                  >
                    重新加载
                  </Button>
                </div>
              ) : results.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">
                    <Shapes size={30} />
                  </div>
                  <h3>
                    {state.view === "favorites"
                      ? "把喜欢的图，留给下一个想法"
                      : state.view === "hidden"
                        ? "这里还没有隐藏的图"
                        : "还没找到这样的图形"}
                  </h3>
                  <p>
                    {state.view === "favorites"
                      ? "点击图像旁的星标，就能在这里再次找到它。"
                      : state.view === "hidden"
                        ? "暂时隐藏的图会出现在这里，随时可以恢复。"
                        : "试试其他图形类型，或放宽筛选条件。"}
                  </p>
                  <Button
                    onClick={() => {
                      clearFilters();
                      if (state.view !== "gallery") setView("gallery");
                    }}
                    icon={ArrowRight}
                  >
                    {state.view === "gallery" ? "清除筛选" : "浏览图形画廊"}
                  </Button>
                </div>
              ) : (
                <>
                  <div className="figure-grid">
                    {results.slice(0, limit).map((figure) => (
                      <article
                        className={`figure-card ${selected.includes(figure.id) ? "card-selected" : ""}`}
                        key={figure.id}
                      >
                        <div className="card-preview">
                          <div className="card-topline">
                            <span className="figure-label mono">
                              {figureLabel(figure)}
                            </span>
                            {figure.paper.awards?.length > 0 && (
                              <span className="award-badge">
                                <span /> {figure.paper.awards[0].official_name}
                              </span>
                            )}
                          </div>
                          <FigureImage
                            figure={figure}
                            onOpen={() => openDetail(figure.id)}
                          />
                          <button
                            className="expand-button"
                            aria-label={`放大 ${figureLabel(figure)}`}
                            title="放大图像"
                            onClick={() => openDetail(figure.id)}
                          >
                            <ArrowUpRight size={18} />
                          </button>
                        </div>
                        <div className="card-content">
                          <div className="card-paper">
                            <span>
                              {figure.paper.venue}{" "}
                              {figure.paper.publication_year}
                            </span>
                            <span>{figure.paper.title.split(":")[0]}</span>
                          </div>
                          <h3>
                            <button onClick={() => openDetail(figure.id)}>
                              {figure.title.zh}
                            </button>
                          </h3>
                          <div className="card-provenance">
                            <time dateTime={figure.paper.collected_at}>
                              收录 {figure.paper.collected_at}
                            </time>
                            {figure.paper.arxiv_url && (
                              <a
                                href={figure.paper.arxiv_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                arXiv:{figure.paper.arxiv_id}
                                <ArrowUpRight size={12} />
                              </a>
                            )}
                          </div>
                          <div className="card-tags">
                            <span>
                              {TYPE_LABELS[figure.classification.primary_type]}
                            </span>
                            <span>
                              {LAYOUT_LABELS[figure.classification.layouts[0]]}
                            </span>
                            <span>Prompt 已配备</span>
                          </div>
                          <div className="card-footer">
                            <FigureActions
                              figure={figure}
                              selected={selected.includes(figure.id)}
                              favorite={favorites.includes(figure.id)}
                              hidden={hidden.includes(figure.id)}
                              {...actions}
                              compact
                            />
                            <span className="card-format mono">
                              {figure.original_assets?.[0]?.file
                                .split(".")
                                .pop()
                                .toUpperCase() || "PNG"}{" "}
                              + MD
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  {results.length > limit && (
                    <Button
                      className="load-more"
                      onClick={() => setLimit((value) => value + PAGE_SIZE)}
                    >
                      加载更多图形
                    </Button>
                  )}
                  <div className="collection-note">
                    <Check size={15} />
                    <span>
                      {figures.length} 幅图已收录 · 改绘 prompt
                      为维护者重建，尚未经生成验证
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
        <section className="reuse-section page-width">
          <div className="reuse-title">
            <span className="eyebrow">FROM INSPIRATION TO YOUR FIGURE</span>
            <h2>
              找到好图。
              <br />
              获得灵感
            </h2>
            <button onClick={() => setGuide(true)}>
              查看使用指南
              <ArrowUpRight size={17} />
            </button>
          </div>
          <div className="reuse-steps">
            <div>
              <span className="step-number mono">01</span>
              <Network size={24} />
              <h3>找到表达方式</h3>
              <p>
                按类型与布局，挑一张
                <br />
                适合你研究的参考图。
              </p>
            </div>
            <div>
              <span className="step-number mono">02</span>
              <Bookmark size={24} />
              <h3>选出想借鉴的部分</h3>
              <p>
                布局、配色或模块表达，
                <br />
                告诉智能体你喜欢什么。
              </p>
            </div>
            <div>
              <span className="step-number mono">03</span>
              <FolderDown size={24} />
              <h3>带走完整参考包</h3>
              <p>
                图片与 prompt 一起下载，
                <br />
                用你的内容重新绘制。
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <div>
          <span className="footer-logo">
            Awesome
            <br />
            Academic Figures<span>↗</span>
          </span>
          <span>好图，让研究被看见。</span>
        </div>
        <span className="mono">AWESOME ACADEMIC FIGURES · OPEN GALLERY</span>
        <button onClick={() => setGuide(true)}>
          关于这个图鉴
          <ArrowUpRight size={14} />
        </button>
      </footer>
      {selectedFigures.length > 0 && (
        <div className="selection-tray" aria-label="当前选中的参考图">
          <div className="tray-label">
            <span className="tray-icon">
              <Layers3 size={20} />
            </span>
            <div>
              <strong>
                我的参考板 <span>{selectedFigures.length}</span>
              </strong>
              <small>选好了，就开始你的图</small>
            </div>
          </div>
          <div className="tray-thumbnails">
            {selectedFigures.map((figure) => (
              <div className="tray-thumb" key={figure.id}>
                <img
                  src={assetUrl(figure, "preview")}
                  alt={`已选 ${figureLabel(figure)}`}
                />
                <button
                  onClick={() => actions.onSelect(figure.id)}
                  aria-label={`移除 ${figureLabel(figure)}`}
                >
                  <X size={12} />
                </button>
                <span className="mono">{figureLabel(figure)}</span>
              </div>
            ))}
          </div>
          <Button
            variant="primary"
            icon={Download}
            onClick={() => {
              setFeedback(null);
              setExportOpen(true);
            }}
          >
            整理并导出
            <ArrowUpRight size={16} />
          </Button>
        </div>
      )}
      {!detailId && !guide && !exportOpen && (
        <Feedback
          message={feedback?.message}
          undo={
            feedback?.undo
              ? () => {
                  feedback.undo();
                  setFeedback(null);
                }
              : undefined
          }
          onDismiss={() => setFeedback(null)}
        />
      )}
      {detail && (
        <DetailDialog
          figure={detail}
          figures={figures}
          onClose={closeDetail}
          onNavigate={openDetail}
          selected={selected.includes(detail.id)}
          favorite={favorites.includes(detail.id)}
          hidden={hidden.includes(detail.id)}
          actions={actions}
        />
      )}
      {detailId && loadState === "ready" && !detail && (
        <Dialog title="没有找到这幅图" onClose={closeDetail}>
          <p>这幅图尚未收录，返回画廊选择其他参考图。</p>
          <Button onClick={closeDetail}>返回画廊</Button>
        </Dialog>
      )}
      {guide && (
        <Dialog
          title="让参考图，成为你的下一张图"
          eyebrow="HOW TO USE"
          onClose={() => setGuide(false)}
          className="guide-dialog"
        >
          <div className="guide-step">
            <span>01</span>
            <div>
              <h3>浏览完整图像</h3>
              <p>
                按 Teaser
                图、机制图、方法框架图等图类进入，叠加用途、布局、会议和论文图号筛选。图号与图类独立：Figure
                1 不一定是 Teaser 图。点击图像查看大图、结构描述和同篇参考图。
              </p>
            </div>
          </div>
          <div className="guide-step">
            <span>02</span>
            <div>
              <h3>选作参考，或先收藏</h3>
              <p>
                “选作参考”加入这次绘图的参考板；“收藏”保留在当前浏览器，方便以后再找。“暂时隐藏”的图随时可以恢复。
              </p>
            </div>
          </div>
          <div className="guide-step">
            <span>03</span>
            <div>
              <h3>填写任务，下载参考包</h3>
              <p>
                写下你的研究内容和想借鉴的部分。下载 ZIP 后解压，把图片、prompt
                和任务说明一起交给你的智能体。
              </p>
            </div>
          </div>
          <div className="guide-note">
            <BookOpen size={20} />
            <p>
              论文图统一展示，获奖作为标签。详情会标注图号与来源审核状态；尚未核实图号的方法图也会如实标记。收藏保存在本机浏览器，不会自动跨设备同步。
            </p>
          </div>
        </Dialog>
      )}
      {matcherOpen && (
        <Suspense
          fallback={
            <Dialog
              title="用我的论文找图"
              onClose={() => setMatcherOpen(false)}
            >
              <p role="status">正在打开论文匹配…</p>
            </Dialog>
          }
        >
          <PaperMatcher
            figures={figures}
            selectedFigureIds={selected}
            onOpenFigure={openDetail}
            onSelectFigure={actions.onSelect}
            onUseTask={({ task: paperTask, notes: paperNotes, figureIds }) => {
              setSelected((old) => [...new Set([...old, ...figureIds])]);
              setTask(paperTask);
              setNotes(paperNotes);
              setMatcherOpen(false);
              setExportOpen(true);
            }}
            onClose={() => setMatcherOpen(false)}
          />
        </Suspense>
      )}
      {exportOpen && (
        <ExportDialog
          figures={selectedFigures}
          task={task}
          setTask={setTask}
          notes={notes}
          setNotes={setNotes}
          onClose={() => setExportOpen(false)}
        />
      )}
    </>
  );
}

function DetailDialog(props) {
  const [loaded, setLoaded] = useState(null);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoaded(null);
    setFailed(false);
    loadFigureDetails(props.figure, { signal: controller.signal })
      .then((figure) => {
        if (!controller.signal.aborted) setLoaded(figure);
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });
    return () => controller.abort();
  }, [props.figure.id, retry]);
  if (!loaded)
    return (
      <Dialog
        title={props.figure.title.zh}
        onClose={props.onClose}
        className="detail-dialog"
      >
        <FigureImage figure={props.figure} full className="detail-media" />
        <p role="status">
          {failed
            ? "图形描述暂时无法加载，你的选择已保留。"
            : "正在加载这幅图的描述与 prompt…"}
        </p>
        {failed && (
          <Button onClick={() => setRetry((value) => value + 1)}>
            重新加载
          </Button>
        )}
      </Dialog>
    );
  return <ReadyDetailDialog {...props} figure={loaded} />;
}

function ReadyDetailDialog({
  figure,
  figures,
  onClose,
  onNavigate,
  selected,
  favorite,
  hidden,
  actions,
}) {
  const [panel, setPanel] = useState("analysis");
  const [message, setMessage] = useState("");
  const [copyBusy, setCopyBusy] = useState(false);
  useEffect(() => {
    setMessage("");
    setPanel("analysis");
  }, [figure.id]);
  const sibling = figures.find(
    (item) => item.paper.id === figure.paper.id && item.id !== figure.id,
  );
  async function copyPrompt() {
    setCopyBusy(true);
    try {
      await navigator.clipboard.writeText(figure.prompt_text);
      setMessage("Prompt 已复制。附上参考图和你的研究内容即可使用。");
    } catch {
      setPanel("prompt");
      setMessage("浏览器未允许复制。下方已展示完整 prompt，可手动选择复制。");
    } finally {
      setCopyBusy(false);
    }
  }
  return (
    <Dialog
      title={figure.title.zh}
      eyebrow={`${figure.paper.venue} ${figure.paper.publication_year} / ${figureLabel(figure)}`}
      onClose={onClose}
      className="detail-dialog"
      footer={
        <>
          <FigureActions
            figure={figure}
            selected={selected}
            favorite={favorite}
            hidden={hidden}
            {...actions}
          />
          <Button
            variant="primary"
            icon={Copy}
            busy={copyBusy}
            onClick={copyPrompt}
          >
            复制 prompt
          </Button>
        </>
      }
    >
      <FigureImage figure={figure} full className="detail-media" />
      <div className="detail-source">
        <div>
          <span className="verified-dot" />
          <strong>
            {figure.reuse.validation.visual_extraction === "reviewed"
              ? "原图已核对"
              : figure.reuse.validation.visual_annotation === "reviewed"
                ? "视觉结构已逐图标注"
                : figure.layout_annotation?.status === "visual_layout_reviewed"
                  ? "布局已看图核对"
                  : "来源索引已核对"}
          </strong>
          <span>
            {figure.source.pdf_page_index_1based
              ? `PDF 第 ${figure.source.pdf_page_index_1based} 页 · `
              : ""}
            {figure.visual.pixel_width} × {figure.visual.pixel_height}
          </span>
        </div>
        <a href={figure.paper.url} target="_blank" rel="noreferrer">
          打开论文
          <ExternalLink size={15} />
        </a>
      </div>
      <PaperSource paper={figure.paper} />
      {sibling && (
        <button className="sibling-link" onClick={() => onNavigate(sibling.id)}>
          <Layers3 size={17} />
          同一篇论文的 {figureLabel(sibling)}
          <span>{sibling.title.zh}</span>
          <ArrowRight size={17} />
        </button>
      )}
      <div className="detail-tabs" aria-label="参考材料">
        <button
          aria-pressed={panel === "analysis"}
          onClick={() => setPanel("analysis")}
        >
          结构描述
        </button>
        <button
          aria-pressed={panel === "prompt"}
          onClick={() => setPanel("prompt")}
        >
          改绘 Prompt
        </button>
        <button
          aria-pressed={panel === "source"}
          onClick={() => setPanel("source")}
        >
          来源与图注
        </button>
      </div>
      {panel === "analysis" ? (
        <div className="analysis-text">
          {figure.analysis_text
            .split("\n\n")
            .filter(
              (text) => !text.startsWith("# ") && !text.startsWith("来源："),
            )
            .map((text, index) =>
              text.startsWith("## ") ? (
                <h3 key={index}>{text.slice(3)}</h3>
              ) : (
                <p key={index}>{text}</p>
              ),
            )}
        </div>
      ) : panel === "prompt" ? (
        <>
          <p className="prompt-hint">
            {figure.reuse.prompt_origin === "dataset_generation_caption"
              ? "这份图形描述由来源数据集生成，尚未经逐图人工核验。请先确认参考图细节，再替换为你的研究内容；描述中的原论文结果不能直接用于你的论文。"
              : figure.reuse.prompt_status === "draft"
                ? "这是参考图驱动的通用改绘草稿，尚未逐图重建。智能体应先分析附图，再结合你的真实材料绘制。"
                : "替换模板中的占位变量，再与参考图一起交给智能体。此模板尚未经改绘生成验证。"}
          </p>
          <pre className="prompt-code" tabIndex="0">
            {figure.prompt_text}
          </pre>
        </>
      ) : (
        <div className="source-details">
          {figure.layout_annotation && (
            <>
              <h3>布局标注</h3>
              <p>
                {figure.classification.layouts
                  .map((tag) => LAYOUT_LABELS[tag])
                  .join(" · ")}
              </p>
              <p>
                {figure.layout_annotation.status === "visual_layout_reviewed"
                  ? "已查看参考图预览，核对宏观空间布局。此项不代表全文或绘图 prompt 已完成审核。"
                  : "根据来源数据集的图像描述初标，尚待看图复核。"}
              </p>
              {figure.layout_annotation.status === "visual_layout_reviewed" && (
                <p>{figure.layout_annotation.observation}</p>
              )}
            </>
          )}
          {figure.source.number_evidence && (
            <>
              <h3>图号核验</h3>
              <p>
                图号已在 arXiv {figure.source.number_version} 核实
                {figure.paper.venue === "arXiv"
                  ? "。"
                  : "，正式会议版本图号尚未独立核实。"}
              </p>
              <a
                href={figure.source.number_evidence.url}
                target="_blank"
                rel="noreferrer"
              >
                查看图号与图注依据 <ArrowUpRight size={15} />
              </a>
            </>
          )}
          <h3>原始图注</h3>
          <p>
            {figure.source.caption ||
              "来源索引未提供逐图图注，可打开论文查看。"}
          </p>
          <h3>授权与原始文件</h3>
          <p>
            {figure.rights.source_license} ·{" "}
            {figure.source.arxiv_version || figure.paper.pdf_version}
          </p>
          <a
            href={figure.rights.license_evidence_url}
            target="_blank"
            rel="noreferrer"
          >
            查看授权依据 <ArrowUpRight size={15} />
          </a>
          {figure.original_assets?.map((original) => (
            <a
              key={original.file}
              href={assetUrl(figure, "originalBase") + original.file}
              target="_blank"
              rel="noreferrer"
            >
              {original.source_kind === "upstream_extracted_figure"
                ? "来源图文件"
                : "作者原文件"}{" "}
              · {original.source_path} <ArrowUpRight size={15} />
            </a>
          ))}
          <h3>论文作者</h3>
          <p>{figure.paper.authors.join(" · ")}</p>
          {figure.paper.awards?.[0] && (
            <a
              href={figure.paper.awards[0].official_source_url}
              target="_blank"
              rel="noreferrer"
            >
              核验官方奖项
              <ArrowUpRight size={15} />
            </a>
          )}
          <p className="prompt-hint">
            {figure.reuse.prompt_origin === "dataset_generation_caption"
              ? "来源方法图的原论文图号与正文范围尚未核实。图形描述由数据集生成，未经人工逐图验证。"
              : figure.reuse.prompt_status === "draft"
                ? "图片与分类来自公开论文图鉴。图号、图注及逐图视觉描述未完成独立审核；prompt 为通用草稿。"
                : "图片取自论文；结构描述与 prompt 由维护者重建，尚未经生成验证。"}
          </p>
        </div>
      )}
      <Feedback message={message} inline />
    </Dialog>
  );
}

function ExportDialog({ figures, task, setTask, notes, setNotes, onClose }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const taskRef = useRef(null);
  const controller = useRef(null);
  useEffect(() => () => controller.current?.abort(), []);
  async function download(event) {
    event.preventDefault();
    if (busy) return;
    if (!task.trim()) {
      setError("写一句你的绘图任务，例如“绘制包含三个阶段的多模态框架图”。");
      taskRef.current?.focus();
      return;
    }
    setError("");
    setMessage("");
    setBusy(true);
    controller.current = new AbortController();
    try {
      const archive = {
        "MY_TASK.md": strToU8(
          `# 我的绘图任务\n\n${task}\n\n## 想借鉴的部分\n\n${notes || "查看参考图的实际结构，结合我的研究进行适配。"}\n\n请查看每个图目录里的参考预览、来源图文件（有作者原文件时一并附上）、analysis.md、prompt.md、agent.md 和 ATTRIBUTION.md。所有数值与模块关系应使用我自己的真实材料。\n`,
        ),
      };
      await Promise.all(
        figures.map(async (item) => {
          const figure = await loadFigureDetails(item, {
            signal: controller.current.signal,
          });
          for (const [name, text] of Object.entries({
            "analysis.md": figure.analysis_text,
            "prompt.md": figure.prompt_text,
            "agent.md": figure.agent_text,
            "metadata.json": JSON.stringify(figure, null, 2),
            "ATTRIBUTION.md": `${figure.rights.attribution}\n\nPaper: ${figure.paper.url}\n\nSource: ${figure.rights.license_evidence_url}\nLicense: ${figure.rights.source_license} (${figure.rights.license_url})\nChanges: preview rendering or extraction; see metadata.json.\n`,
          }))
            archive[`${figure.id}/${name}`] = strToU8(text);
          const image = await fetchResource(assetUrl(figure, "reference"), {
            signal: controller.current.signal,
          });
          const referenceBytes = new Uint8Array(await image.arrayBuffer());
          archive[`${figure.id}/${figure.assets.reference}`] = referenceBytes;
          for (const original of figure.original_assets || []) {
            const bytes =
              original.file === figure.assets.reference
                ? referenceBytes
                : new Uint8Array(
                    await (
                      await fetchResource(
                        assetUrl(figure, "originalBase") + original.file,
                        { signal: controller.current.signal },
                      )
                    ).arrayBuffer(),
                  );
            const hash = await crypto.subtle.digest("SHA-256", bytes);
            const sha = [...new Uint8Array(hash)]
              .map((value) => value.toString(16).padStart(2, "0"))
              .join("");
            if (sha !== original.sha256)
              throw new Error("Original checksum changed");
            archive[`${figure.id}/${original.file}`] = bytes;
          }
          for (const field of ["extraction", "figure_tex"]) {
            if (!figure.assets[field]) continue;
            const response = await fetchResource(assetUrl(figure, field), {
              signal: controller.current.signal,
            });
            archive[`${figure.id}/${figure.assets[field]}`] = new Uint8Array(
              await response.arrayBuffer(),
            );
          }
        }),
      );
      const url = URL.createObjectURL(
        new Blob([zipSync(archive)], { type: "application/zip" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = "academic-figure-references.zip";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      setMessage(
        `已生成 ${figures.length} 幅图的参考包。解压后，将文件与任务说明交给智能体。`,
      );
    } catch {
      setError("参考包未能生成。你的任务内容已保留，请检查网络后重新下载。");
    } finally {
      setBusy(false);
    }
  }
  return (
    <Dialog
      title="把灵感，带进你的研究"
      eyebrow="YOUR REFERENCE PACK"
      onClose={onClose}
      busy={busy}
      className="export-dialog"
    >
      <div className="export-selected">
        {figures.map((figure) => (
          <div key={figure.id}>
            <img
              src={assetUrl(figure, "preview")}
              alt={`参考 ${figureLabel(figure)}`}
            />
            <span>
              {figureLabel(figure)}
              <small>{TYPE_LABELS[figure.classification.primary_type]}</small>
            </span>
            <Check size={17} />
          </div>
        ))}
      </div>
      <form noValidate onSubmit={download}>
        <label htmlFor="research-task">
          你想画什么？<span>必填</span>
        </label>
        <textarea
          id="research-task"
          className="resize-none"
          ref={taskRef}
          rows="4"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "export-error" : "task-help"}
          placeholder="例如：我的方法分为视觉编码、跨模态融合和文本生成三个阶段，想画一张带反馈分支的框架图。"
        />
        <p id="task-help" className="field-help">
          写下你的方法、模块关系或数据。越具体，智能体越容易画对。
        </p>
        <label htmlFor="reference-notes">
          你想借鉴哪些部分？<span>选填</span>
        </label>
        <textarea
          id="reference-notes"
          className="resize-none"
          rows="3"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="例如：Figure 1 的整体布局，Figure 2 的对比方式；用蓝绿配色，保留我的模块名称。"
        />
        {error && (
          <p id="export-error" className="field-error" role="alert">
            {error}
          </p>
        )}
        <Feedback message={message} inline />
        <div className="export-footer">
          <p>
            <FolderDown size={17} />
            包含原图、描述、prompt 和你的任务
          </p>
          <Button variant="primary" icon={Download} busy={busy} type="submit">
            {busy ? "正在打包" : "下载参考包"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
