# Adaptation prompt — Hierarchical taxonomy treemap

This is a maintainer reconstruction based on BioCLIP: A Vision Foundation Model for the Tree of Life, Figure 2, 2311.18803v3. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Use one wide treemap rather than node-link branches. Assign a stable categorical hue to every top-level group, with purple, golden yellow and green dominating the three largest groups. Nest rectangles for each successive taxonomy level. Rectangle area must be calculated from the user-provided sample counts; the number of child rectangles is not a proxy for frequency. Place group labels at upper-left corners, reserve readable labels for large rectangles, and avoid forcing tiny labels into leaves. Use thin light internal boundaries and generous outer padding. Adapt taxonomy depth and label selection to the supplied hierarchy without reproducing the paper’s biological names or sample counts.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #793B88, #F1B800, #119D78. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

