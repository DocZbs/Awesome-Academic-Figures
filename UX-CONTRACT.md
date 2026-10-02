# UX Contract

## Product context

A gallery for Chinese- and English-speaking researchers choosing academic figure references. Supported UI locales are zh-CN and en, with zh-CN as the default. Scientific source content retains its original language. Dates follow Asia/Shanghai when displayed. Accessibility target is WCAG 2.2 AA; automated checks are evidence, not a claim of certification.

## Business-context sources

| Scope | Authoritative source | Type | Reviewed |
| --- | --- | --- | --- |
| Default dimension and scope | Current user decisions; docs/PROJECT_DESIGN.md | Product brief | 2026-10-01 |
| Selection, favorites, hiding and restore | docs/PROJECT_DESIGN.md, 挑选交互 | Product brief | 2026-10-01 |
| Source/provenance and current sample count | data/catalog.json; docs/ingestion/REMOTE_STAGING.md | Curated data | 2026-10-01 |
| Identity, payment, irreversible mutations | Not present in this local frontend | Not applicable | 2026-10-01 |

## Visual contract

DESIGN.md owns taste and generates runtime tokens. Light theme only. Generated src/tokens.css is checked with npm run check:tokens. No existing UI or sibling workflow predates this prototype; gallery and detail are the canonical sibling pair.

## Canonical UI Map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
| --- | --- | --- | --- | --- |
| Selection | useProjects / FigureActions / ProjectPanel / ProjectPicker | Current user project brief | explicit per-figure destination, independent membership | browser |
| Form | ExportDialog / PaperMatcher / ProjectForm | This contract | project config / reference task / transient paper input | browser |
| Select/Listbox | PaperMatcher native select | This contract | figure kind; platform popup accepted | keyboard and native popup |
| Project destination | ProjectPicker / useProjects | Current user brief 2026-10-02 | shared Dialog + native checkbox group; task destination uses buttons | browser + keyboard |
| Scrollbar | src/styles.css | DESIGN.md | global baseline | computed style |
| Toast | Feedback | This contract | polite inline status | browser |
| Dialog | Dialog | This contract | detail / guide / export / project | focus and Escape |
| Search | Gallery search | This contract | local, IME-safe | browser |
| Interface language | LocaleProvider / useI18n / src/locale.js | Current user request 2026-10-02 | zh-CN / en; shared Button in the header | browser + URL + persistence |

The matcher figure-kind field uses a native select; its platform-owned popup is intentionally accepted. No date picker, server CRUD or destructive operation is implemented. Gallery filters use checkbox groups in native details disclosure; dimension changes use plain pressed buttons.

## Paper provenance

PaperSource owns the source archive shared between source-dimension browsing and figure detail. Show the full title, venue/year/award, collected_at, separate arXiv first submission date, arXiv ID/link, proceedings and PDF. Missing dates stay unrecorded rather than inferred from publication year. Source links are external anchors. New fields are carried into exported metadata.

## Dataset navigation

Gallery is a local bounded catalog, 12 results per explicit load-more batch. Default dimension is type; purpose/layout/source are alternatives. URL stores query, dimension, category, filters and view. Project names, descriptions and reference IDs persist in localStorage independently of filtering. Active project ID stays in sessionStorage per tab. Legacy nonempty session selection migrates once into a named project when no saved project store exists. New users start with no projects; existing stored projects, including the previous default board, are preserved. Favorites use localStorage; hidden items use sessionStorage. Both recover to memory with an explanatory banner when storage fails. Favorites update across tabs using storage events. Favorite and hidden preferences contain only figure IDs; the project store contains user-entered project names/descriptions and figure IDs, never uploaded paper text or drawing-task text.

Search suppresses filtering during IME composition, commits after 300ms, clears immediately and returns focus to its input. Filters combine OR within one field and AND across fields. Changing filters resets the batch count. No-results provides reset; empty favorites explain how to add items; hidden view offers Restore. Load/error media use a stable image container and a retry affordance.

Category totals and per-tag counts share the current search, advanced filters and gallery/favorites/hidden scope, excluding the active category so switching categories remains possible. Missing layout/purpose annotations have explicit unlabelled categories; they are not inferred from unavailable evidence. Show distinct labelled/unlabelled coverage and explain overlapping tags rather than implying category counts are additive.

## Flow ledger

| Operation | Trigger | Success | Failure | Source |
| --- | --- | --- | --- | --- |
| Select | 加入项目 / 已加入 N 个项目 | Open destination chooser; explicit checkbox adds/removes only that named project; opening never assigns | Memory fallback, inline error and storage warning | User brief 2026-10-02 |
| Configure project | 新建项目 / 保存修改 | Save name/description; create switches to new board | Preserve config draft, inline error and invalid focus | User project brief |
| Favorite | 收藏 / 已收藏 | Update favorite count | Storage warning, retain current state | Product brief |
| Hide | 暂时隐藏 | Hide from ordinary views; reversible | No destructive effect | Product brief |
| Restore | 恢复展示 | Return to gallery visibility, no automatic selection | Not applicable | Product brief |
| Read | 图像 preview | Open accessible dialog; same-paper navigation | Image retry | Product brief |
| Copy | 复制 prompt | Acknowledge after successful clipboard call | Keep selectable prompt text for manual copy | Product brief |
| Export | 下载参考包 | Local ZIP with images, prompts, source and task brief | Preserve form and allow retry | Product brief |

## Navigation and responsive behavior

Each view has a localized document title. Detail is shareable via figure URL parameter; Back closes detail and preserves filters. Modal close restores trigger focus where it still exists. No hidden permissions or auth are implied. Mobile retains all actions and reflows filters above the grid. No sticky header; bottom tray reserves document padding and closes/removes references through native buttons.

The header repository-support link opens the verified public GitHub repository in a new tab. Visitors choose Star on GitHub; the gallery does not perform a GitHub account mutation or claim a successful star. This link remains available with the catalog loading, empty or failed, and on narrow screens. Its accessible name identifies the new tab in both locales.

## Overlays and feedback

Shared native dialog element is opened through showModal; browser top layer provides inert background, focus containment and Escape. App owns content, initial focus, scroll lock and restoration. All feedback uses shared Feedback; in-dialog messages are inside that dialog so they remain accessible. No native alert/confirm/prompt calls. Export task and notes stay in app memory separately for each project if the dialog is closed; close does not discard them. Project configuration drafts likewise survive closing and switching within this page, but save is explicit. Refresh discards these drafts.

## Async and resilience

Catalog and ZIP asset requests use AbortController and a 15s timeout. Retry is explicit. Opening the catalog keeps a fixed loading footprint. Export prevents duplicate submissions, blocks closing while building a local archive, and never claims success before all assets are fetched. There are no server writes or external messages. Offline catalog failures have a retry path; local favorites do not promise cloud sync. Partial media failures expose an individual retry. FigureImage reserves media geometry while its shared spinner is pending and switches to retry after a failed load. Lazy images do not time out before they enter the viewport.

## Validation and clipboard

Export form uses noValidate, real labels, inline error and first-invalid focus. Research task is required; user input is retained after failure. Textareas have resize none. Clipboard success appears only after a resolved copy; denial leaves a visible text pane for manual copying. User task content is not placed in URLs or persistent storage.

## Project reference boards

ProjectPanel, ProjectPicker and ProjectForm reuse shared Dialog, Button, FigureImage and Feedback. Manager navigation uses native buttons; the per-image destination list uses native labeled checkboxes in a fieldset, not a custom Select/Listbox. Cards, detail and matcher use the same action to open this chooser and display the number of all project memberships. Checking a destination commits idempotent membership to that exact project ID; unchecking removes only that membership. No implicit current-project assignment remains. Manager creates an empty project and returns to its board. “创建并加入” in the chooser explicitly creates a project containing the displayed figure in one mutation. Saved data is schema-compatible, with empty project arrays now allowed.

Project boards display 12 references at a time with explicit Load more, independently of gallery filters, including missing-ID placeholders. Renaming does not change identity. No deletion operation is introduced. Config requires a nonblank name (max 80 chars), description max 2,000 chars, inline validation and invalid focus. ProjectForm is the canonical create/edit form for both surfaces. Each form's drafts remain in app memory across close, back and navigation; refreshed pages discard drafts. PaperMatcher task handoff opens the same chooser in a named task variant; the user chooses one project before references and transient task text enter that project's export. Cancelling leaves the pending handoff available within this page. Uploaded paper text never enters persistent project storage.
Storage events synchronize saved projects across tabs without switching each tab's active project. Mutations read the latest saved store before merging. Storage failures retain in-memory operations and avoid overwriting unreadable data; this is browser-local convenience, not collaborative atomic storage or cloud sync. ZIP names reflect the project, and PROJECT.json records identity, task, notes, source-linked figure entries and unavailable IDs. MY_TASK.md includes project context. Export requires at least one available reference and a task, preserves source checksums and blocks closing during generation.

## Verification

Required commands: npm run format:check; npm run check; npm run check:tokens; npm run build; designmd lint DESIGN.md; premium strict audit. Browser matrix: desktop/narrow, filters, no results, favorites persistence, hide/restore, selected tray, detail/guide/export, Escape/focus, download/copy, catalog failure/retry, IME and reduced-motion. Screenshots and browser evidence are stored in output/playwright.

## Licensed source originals and thin gallery

The catalog is the authority for counts, venue and year filters. Assets may live at an absolute GitHub URL; local preview must not mirror the bulk figure collection. Source detail displays the exact arXiv/proceedings version and license evidence. Source-derived exports include the original author file, extraction record, TeX layout excerpt and attribution, plus the existing reference/analysis/prompt/agent/user-task files. Verify original SHA-256 before creating a download. Unknown rights or incomplete composites are excluded from the public catalog. Prompt reconstruction remains explicitly untested.


## Unified gallery and document matching

All approved figures share one gallery. Awards are evidence-backed paper tags and
an optional filter, never a prerequisite for inclusion. Imported leading images
without verified numbering are labeled “论文首图 · 图号待核”; Figure 1/2 filters
include only known numbers. Source-index checking and individual visual checking
are distinct public states; generic adaptation prompts remain explicitly drafts.
Long analysis/prompt/agent texts load only for a detail view or selected export.

PaperMatcher reuses Dialog, Button, Feedback and FigureImage. PDF/text/Markdown
files are read in the browser; paper text is held only in component memory, never
placed in URLs, browser storage, analytics or outbound matching requests. Native
file input supplies local file selection. Reset discards the working document.
Initial instructions and placeholders are brief in both locales. Processing
limits and privacy details remain available in a native disclosure beneath the
inputs; the footer shows only the concise local-processing status.
The initial recommender uses multilingual topic terms, text relevance and graphic
figure kind; it gives reasons rather than claiming a model has read every paper
or guaranteeing that the top result is objectively best. Empty text, unsupported
files, textless/scanned PDFs, password protection, size/page limits and stale
parsing attempts need visible recovery. Reference selection and task handoff reuse
the existing export flow. A paper preview may open a nested figure dialog while
preserving the matcher document in memory.

Paper matching defaults to Teaser. Users choose Teaser, mechanism, architecture,
flowchart, conceptual, comparison, data, dataset or multi-panel figures, or any
kind. The recommender strictly restricts candidates to the selected kind using
recorded type/purpose tags; an unknown figure number or Figure 1 is not evidence
of a Teaser. Empty kinds/topics have recovery text and never silently backfill
other kinds. Result reasons and exported task brief retain the selected kind.

## Figure genres and version-specific numbering

Teaser 图, 机制图 and 方法框架图 are first-class graphic navigation labels. Mechanism uses the recorded mechanism-purpose tag; neither Figure 1 nor an upstream leading slot implies Teaser. Figure 1/2 is a separate paper-number filter. Counts for each advanced filter clear only that same field while preserving query, graphic category, other filters and favorites/hidden scope, so checking Figure 1 still lets a reader see how many Figure 2 references they can add.

A newly verified arXiv correspondence uses an arXiv badge in the figure label, an explicit number_version and official HTML evidence in detail/export. Conference paper records retain their publisher source and license; the detail states when final proceedings numbering remains unchecked. Historical source-index audit trails remain intact, while current visual_review records state the new annotation coverage and limits. Prompts remain generation-untested.


## Layout review provenance

All 3,000 published figures have macro layout labels; unresolved layout count is zero after the documented whole-page replacement. `data/layout_annotations.json` binds preview SHA-256 and reference identity to each overlay. `data/batches/layout_cleanup_20261001/reviews.json` retains the removed crop evidence. Layout labels do not imply full extraction, numbering, genre or prompt review. Future genuinely unresolved entries keep the explicit unlabelled category.

## Research-topic discovery

`src/research-topics.js` owns the shared topic vocabulary and aliases used by gallery search, paper matching, displayed tags and the agent index. Topics describe the associated paper, inferred only from explicit paper-title, abstract and recorded research-topic keywords; they are not a claim that every figure depicts every paper topic. Each inferred tag retains its matched field and terms and the status `metadata_keyword_match`. Multiple topics per figure are allowed.

Research-topic selections combine with AND (intersection); existing source/layout/purpose fields retain their OR-within-field behavior. Topic counts reflect the candidate intersection with the other selected topics. Search accepts abbreviations, Chinese and English aliases; short Latin terms match word boundaries, so RL does not match world and ICL does not match ICLR. Compound-topic searches require every topic. Tags use existing filter state, URL persistence, clear/reset, IME and selected-reference behavior. Gallery cards expose topic filter buttons; no new modal or network service is introduced. Exports include the same tags and evidence in metadata. `data/research_tags.json` and the published `research-tags.json` share the runtime derivation and are checked for drift.

## Agent interoperability and heading identity

ProjectExchange uses the shared Dialog and Button, a labeled native JSON file input, pending reading status, inline failure recovery and Feedback. Import reads at most 2 MiB, validates with src/projects.js and displays added/updated counts, project names and missing-figure warnings before explicit application. Import upserts by stable project ID and preserves other projects; repeated identical imports are idempotent. No paper text or task drafts are implicitly persisted or exported. CLI and browser share project changes and catalog search; discovery is published through agent.json, llms.txt, AGENTS.md and project-schema.json.

Card headings are display-only: preserve curated short titles, remove duplicate terminal Figure/图 labels, use a colon prefix for bibliographic headings when appropriate, otherwise truncate at a word boundary. Full source titles remain in detail, search and export. Number labels are independent of graphic genre.


## Language switching

The header language button switches all product navigation, forms, feedback, validation messages, accessibility labels and taxonomy labels through the shared locale owner. Explicit `lang=en` / `lang=zh` / `lang=zh-CN` in the URL wins over the saved `aaf:language` preference; otherwise a valid saved language wins over the Chinese default. Switching updates that URL field with replaceState and preserves all search/figure parameters, results, pagination, favorites, hidden state, project configurations and in-page drafts. Browser history reads the explicit locale again. Unavailable localStorage falls back to page state and the shareable URL without blocking operation.

Document language and title track the current interface. ISO source dates remain source dates, with the existing timezone policy. English figure display titles use recorded English metadata; original paper titles, captions, collected descriptions/prompts and user names/inputs are not automatically translated. The project interchange schema and agent search semantics remain locale-independent.
