# UX Contract

## Product context

Local preview for Chinese-speaking researchers choosing Figure 1/2 references. Active UI locale is zh-CN; source paper content remains English. Dates follow Asia/Shanghai when displayed. Accessibility target is WCAG 2.2 AA; automated checks are evidence, not a claim of certification.

## Business-context sources

| Scope | Authoritative source | Type | Reviewed |
| --- | --- | --- | --- |
| Default dimension and scope | Current user decisions; docs/PROJECT_DESIGN.md | Product brief | 2026-10-01 |
| Selection, favorites, hiding and restore | docs/PROJECT_DESIGN.md, 挑选交互 | Product brief | 2026-10-01 |
| Source/provenance and current sample count | data/catalog.json; docs/REMOTE_STAGING.md | Curated data | 2026-10-01 |
| Identity, payment, irreversible mutations | Not present in this local frontend | Not applicable | 2026-10-01 |

## Visual contract

DESIGN.md owns taste and generates runtime tokens. Light theme only. Generated src/tokens.css is checked with npm run check:tokens. No existing UI or sibling workflow predates this prototype; gallery and detail are the canonical sibling pair.

## Canonical UI Map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
| --- | --- | --- | --- | --- |
| Selection | App/usePreference and FigureActions | Product brief | current task | browser |
| Form | ExportDialog / PaperMatcher | This contract | reference task / transient paper input | browser |
| Select/Listbox | PaperMatcher native select | This contract | four graphic purposes; platform popup accepted | keyboard and native popup |
| Scrollbar | src/styles.css | DESIGN.md | global baseline | computed style |
| Toast | Feedback | This contract | polite inline status | browser |
| Dialog | Dialog | This contract | detail / guide / export | focus and Escape |
| Search | Gallery search | This contract | local, IME-safe | browser |

The matcher purpose field uses a native select; its platform-owned popup is intentionally accepted. No date picker, server CRUD or destructive operation is implemented. Gallery filters use checkbox groups in native details disclosure; dimension changes use plain pressed buttons.

## Paper provenance

PaperSource owns the source archive shared between source-dimension browsing and figure detail. Show the full title, venue/year/award, collected_at, separate arXiv first submission date, arXiv ID/link, proceedings and PDF. Missing dates stay unrecorded rather than inferred from publication year. Source links are external anchors. New fields are carried into exported metadata.

## Dataset navigation

Gallery is a local bounded catalog, 12 results per explicit load-more batch. Default dimension is type; purpose/layout/source are alternatives. URL stores query, dimension, category, filters and view. Current task selection persists in sessionStorage independently of filtering. Favorites use localStorage; hidden items use sessionStorage. Both recover to memory with an explanatory banner when storage fails. Favorites update across tabs using storage events. These preferences contain only figure IDs.

Search suppresses filtering during IME composition, commits after 300ms, clears immediately and returns focus to its input. Filters combine OR within one field and AND across fields. Changing filters resets the batch count. No-results provides reset; empty favorites explain how to add items; hidden view offers Restore. Load/error media use a stable image container and a retry affordance.

## Flow ledger

| Operation | Trigger | Success | Failure | Source |
| --- | --- | --- | --- | --- |
| Select | 选作参考 / 已选参考 | Update tray without navigating | Memory fallback if session unavailable | Product brief |
| Favorite | 收藏 / 已收藏 | Update favorite count | Storage warning, retain current state | Product brief |
| Hide | 暂时隐藏 | Hide from ordinary views; reversible | No destructive effect | Product brief |
| Restore | 恢复展示 | Return to gallery visibility, no automatic selection | Not applicable | Product brief |
| Read | 图像 preview | Open accessible dialog; same-paper navigation | Image retry | Product brief |
| Copy | 复制 prompt | Acknowledge after successful clipboard call | Keep selectable prompt text for manual copy | Product brief |
| Export | 下载参考包 | Local ZIP with images, prompts, source and task brief | Preserve form and allow retry | Product brief |

## Navigation and responsive behavior

Each view has a localized document title. Detail is shareable via figure URL parameter; Back closes detail and preserves filters. Modal close restores trigger focus where it still exists. No hidden permissions or auth are implied. Mobile retains all actions and reflows filters above the grid. No sticky header; bottom tray reserves document padding and closes/removes references through native buttons.

## Overlays and feedback

Shared native dialog element is opened through showModal; browser top layer provides inert background, focus containment and Escape. App owns content, initial focus, scroll lock and restoration. All feedback uses shared Feedback; in-dialog messages are inside that dialog so they remain accessible. No native alert/confirm/prompt calls. Export task draft stays in app memory if the dialog is closed; close does not discard it.

## Async and resilience

Catalog and ZIP asset requests use AbortController and a 15s timeout. Retry is explicit. Opening the catalog keeps a fixed loading footprint. Export prevents duplicate submissions, blocks closing while building a local archive, and never claims success before all assets are fetched. There are no server writes or external messages. Offline catalog failures have a retry path; local favorites do not promise cloud sync. Partial media failures expose an individual retry.

## Validation and clipboard

Export form uses noValidate, real labels, inline error and first-invalid focus. Research task is required; user input is retained after failure. Textareas have resize none. Clipboard success appears only after a resolved copy; denial leaves a visible text pane for manual copying. User task content is not placed in URLs or persistent storage.

## Verification

Required commands: npm run format:check; npm run check; npm run check:tokens; npm run build; designmd lint DESIGN.md; premium strict audit. Browser matrix: desktop/narrow, filters, no results, favorites persistence, hide/restore, selected tray, detail/guide/export, Escape/focus, download/copy, catalog failure/retry, IME and reduced-motion. Screenshots and browser evidence are stored in output/playwright.

## Licensed source originals and thin gallery

The catalog is the authority for counts, venue and year filters. Assets may live at an absolute GitHub URL; local preview must not mirror the bulk figure collection. Source detail displays the exact arXiv/proceedings version and license evidence. Source-derived exports include the original author file, extraction record, TeX layout excerpt and attribution, plus the existing reference/analysis/prompt/agent/user-task files. Verify original SHA-256 before creating a download. Unknown rights or incomplete composites are excluded from the public catalog. Prompt reconstruction remains explicitly untested.


## Unified gallery and document matching

All approved figures share one gallery. Awards are evidence-backed paper tags and
an optional filter, never a prerequisite for inclusion. Imported leading images
without verified numbering are labeled “论文首图 / Teaser”; Figure 1/2 filters
include only known numbers. Source-index checking and individual visual checking
are distinct public states; generic adaptation prompts remain explicitly drafts.
Long analysis/prompt/agent texts load only for a detail view or selected export.

PaperMatcher reuses Dialog, Button, Feedback and FigureImage. PDF/text/Markdown
files are read in the browser; paper text is held only in component memory, never
placed in URLs, browser storage, analytics or outbound matching requests. Native
file input supplies local file selection. Reset discards the working document.
The initial recommender uses multilingual topic terms, text relevance and graphic
purpose/type; it gives reasons rather than claiming a model has read every paper
or guaranteeing that the top result is objectively best. Empty text, unsupported
files, textless/scanned PDFs, password protection, size/page limits and stale
parsing attempts need visible recovery. Reference selection and task handoff reuse
the existing export flow. A paper preview may open a nested figure dialog while
preserving the matcher document in memory.
