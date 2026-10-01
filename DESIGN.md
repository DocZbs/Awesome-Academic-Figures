---
version: alpha
name: Awesome Academic Figures
description: A visual research workbench built around complete paper figures and their reusable structure.
colors:
  primary: "#284CDA"
  primary-hover: "#203DAE"
  primary-soft: "#EDF1FF"
  background: "#F8F9F6"
  surface: "#FFFFFF"
  ink: "#202923"
  muted: "#68716A"
  border: "#DFE4DD"
  grid: "#E8ECE5"
  success: "#286249"
  success-soft: "#EAF3EB"
  danger: "#AC3535"
  scrollbar: "#B1BAB2"
  scrollbar-hover: "#849287"
typography:
  display:
    fontFamily: 'Manrope, "PingFang SC", "Microsoft YaHei", sans-serif'
  body:
    fontFamily: 'Manrope, "PingFang SC", "Microsoft YaHei", sans-serif'
  utility:
    fontFamily: '"SFMono-Regular", Consolas, monospace'
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  page-max: "1320px"
  section-gap: "48px"
  card-gap: "24px"
components:
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  primary-hover:
    backgroundColor: "{colors.primary-hover}"
  selection:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
  secondary-text:
    textColor: "{colors.muted}"
  grid:
    backgroundColor: "{colors.grid}"
  divider:
    backgroundColor: "{colors.border}"
  success-label:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
  form-error:
    textColor: "{colors.danger}"
  scrollbar:
    backgroundColor: "{colors.scrollbar}"
  scrollbar-hover:
    backgroundColor: "{colors.scrollbar-hover}"

---

# Awesome Academic Figures Design System

## Overview

The reference is a researcher's figure contact sheet: annotation corners, complete diagrams, precise captions and a working selection tray. The audience is Chinese-speaking AI researchers browsing Figure 1/2 to adapt for their own work. English paper titles and figure labels remain original. This is a product gallery with a small editorial introduction, for laptop exploration and mobile review. Japan-market behavior is not in scope.

The signature is a paired Figure 1/2 composition on a pale plotting grid, with small figure labels and connector marks. Expression stays in this introduction; filters, cards and dialogs use quiet familiar controls. No invented inventory, decorative chart data, generic gradient hero, oversized statistics or cropped figure previews.

Token ownership: Model A. The simple frontmatter fields in this file generate `src/tokens.css` through `scripts/generate_tokens.mjs`. This generated file is never hand-edited. The same script with `--check` detects drift. Components only consume CSS variables.

## Colors

Paper-like off-white with a faint green cast distinguishes the gallery from the white figure canvas. Cobalt marks actions and current choices; green communicates verified source status. Ink and muted text preserve hierarchy. Border/grid tokens frame rather than decorate. Only a light theme is implemented; forced-colors uses system contrast.

## Typography

Manrope is bundled locally for Latin titles and identity; Chinese uses native PingFang SC / Microsoft YaHei fallbacks. The heading has heavy mixed-script typography and tight but readable spacing, with no serif or decorative calligraphy. Body defaults to 14–16px with 1.65 line height. Technical captions and figure labels use the utility face. Primary titles wrap rather than truncate.

## Layout

Maximum width 1320px, desktop side margins at least 32px, mobile 20px. Header is natural-height; the page owns vertical scroll. Gallery sidebar is 196px; figures use a two-column grid. Below 960px filters move above the grid; below 680px figures become one column and hero art becomes an inline paired composition. Complete images use contain with stable media geometry. Selected references have a fixed lower tray; document padding and scroll margins keep focus unobscured.

## Elevation & Depth

Main cards use border and surface contrast. Only the hero reference composition, modal and selection tray have subtle elevation. No heavy glass effects. Native dialog top-layer isolates the backdrop and keeps focus accessible.

## Shapes

Small 6px radii for utility labels, 12px for controls, 20px for image cards and dialogs. Pills are limited to taxonomy/filter badges. Icons use Lucide at 16–20px with consistent strokes.

## Components

Shared owners: `Button`, `Dialog`, `FigureImage`, `FigureActions`, `Chip`, and `Feedback` in `src/ui.jsx`. Gallery and detail consume the same selection and favorite actions. Hover changes color/border; focus uses an obvious cobalt outline; selected actions include check marks and labels. Disabled controls use native disabled semantics. Async actions retain button width and show readable pending text. Data load reserves the gallery region for a spinner; no skeletons.

Search has an explicit clear button, IME-safe commitment and URL state. Advanced filters use native disclosure with checkbox choices, not a custom listbox. The export form uses labeled textareas with resize disabled and inline errors. Modal heading/close affordance stays reachable while the body scrolls. Feedback is a shared polite live region inside the active surface.

Motion only supports short state changes and a gentle hero entrance; reduced-motion disables them. No infinite animation. Global scrollbar tokens apply to all application surfaces, with standards properties, engine fallbacks and system forced-color behavior.

Runtime mapping: `colors.* → --color-*`; `typography.*.fontFamily → --font-*`; `rounded.* → --radius-*`; `spacing.* → --space-*`. Shared CSS consumes these variables. Layer constants and state timing are behavioral constants in the global stylesheet / UI module rather than visual frontmatter values.

## Do's and Don'ts

- Show the full original figure and distinguish source checking from prompt testing.
- Keep the default classification dimension as graphical type; retain selections when filtering.
- Show honest source counts and actionable empty/recovery states.
- Do not fabricate more papers to fill the grid or invent a remote GitHub destination.


## Paper-driven discovery

“用我的论文找图” is the primary hero action alongside direct gallery exploration.
The matching surface uses the shared modal, quiet upload/input panel, topic chips,
and complete figure previews with readable recommendation reasons. Cobalt keeps
its role for the recommended next action; no new palette or decorative scores.
Uploaded research text stays transient and private in the browser. Awards are
optional tags within the same visual library.


## Research-topic labels

Paper topic tags wrap below the existing figure-kind/layout tags, using restrained outline pills and the established green/cobalt tokens. Selected pills use pressed semantics and the same filter state as sidebar checkboxes. Labels carry readable research names (RL, ICL, World Model and WAM) without implying a new visual genre. The existing hero keeps its composition with the user-approved copy: “找到你的绘图灵感，交给你的绘图智能体。” and “为你的研究找到更精准优雅的表达”.


## Project reference boards

A restrained surface-and-border toolbar above the gallery establishes the current project, with a native selector, New Project and reference-board actions. It uses existing spacing, cobalt actions and green count labels. Each card uses the shared FigureActions for “添加到项目 / 已加入项目”. The bottom tray names the current project and links to its board. ProjectPanel uses the shared dialog, a native project chooser, explicit configuration disclosure and complete figure previews. Desktop boards use two columns; narrow screens use one, with wrapped selectors and stacked footer actions. Empty boards give a direct return to the gallery. Project names wrap in headings; long names in the compact tray truncate while the board shows the full title. Config drafts remain visible as unsaved, and persistence limitations are stated near export.
