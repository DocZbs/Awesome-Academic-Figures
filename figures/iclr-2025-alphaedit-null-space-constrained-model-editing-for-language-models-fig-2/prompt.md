# Adaptation prompt — Radial grouped bars for method comparison

This is a maintainer reconstruction based on AlphaEdit: Null-Space Constrained Model Editing for Language Models, Figure 2, 2410.02355v4. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Arrange metric groups evenly around a circular center, with a cluster of outward radial bars for each group. Use a saturated violet for the focus method and restrained pastel colors for the baselines, consistent across all groups. Leave a generous central opening for the method name and a concise subtitle. Place group labels around the inner ring and values at bar ends only where legible. Add a conventional horizontal legend below. The user must supply metric values, units, direction of improvement, and normalization rules. State per-metric scaling explicitly: bar lengths from incompatible units cannot be compared across groups. If those rules are missing, request them or use a conventional faceted bar chart.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #6954C4, #B9DAB8, #F6DAC4. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

