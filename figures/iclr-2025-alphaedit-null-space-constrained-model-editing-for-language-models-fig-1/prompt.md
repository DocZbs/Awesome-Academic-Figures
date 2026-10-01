# Adaptation prompt — Editing objective and representation comparison

This is a maintainer reconstruction based on AlphaEdit: Null-Space Constrained Model Editing for Language Models, Figure 1, 2410.02355v4. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Use a portrait comparison with two equal columns. Give the baseline a very pale pink background and the proposed method a very pale cyan background. At the top of each column show the actual objective and a small editable network-update schematic. Beneath each, place an identically scaled scatter plot of the supplied pre-edit and post-edit representations, using distinguishable colors and markers. Add a bottom band for real behavioral output examples, using concise text and an explicit failure or improvement label supported by the examples. Label subpanels in reading order. Preserve the relationship between objective, representation and output only when supported by the user’s experiments. Never synthesize scatter points to illustrate a desired separation.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #1B9FC2, #CB3143, #26BFA5. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

