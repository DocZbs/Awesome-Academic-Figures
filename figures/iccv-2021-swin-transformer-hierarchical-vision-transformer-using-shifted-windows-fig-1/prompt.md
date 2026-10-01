# Adaptation prompt — Hierarchical versus single-scale feature maps

This is a maintainer reconstruction based on Swin Transformer: Hierarchical Vision Transformer Using Shifted Windows, Figure 1, 2103.14030v2. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Construct two side-by-side feature-map columns with matching perspective and aligned vertical levels. In the left column, progress from many small local windows at the bottom to fewer larger groups toward the top, making hierarchical aggregation visible. In the right column, keep the representation scale constant across the same number of levels. Outline local windows in muted dark red and draw patch boundaries in light gray. Put the respective method names below the columns. Place actual task-output arrows above the representations and add scale labels along the outer edges only when provided. Keep example input imagery faint so the structural grid dominates. Do not infer a dense prediction head or a resolution change absent from the user’s architecture.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #8A1B21, #A8A8A8, #355E86. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

