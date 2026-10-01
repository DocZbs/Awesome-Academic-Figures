# Adaptation prompt — Generation with validity checks and stability rollback

This is a maintainer reconstruction based on Generating Physically Stable and Buildable Brick Structures from Text, Figure 2, 2505.05469v3. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Arrange three dashed rounded panels: tokenization at upper-left, training at upper-right, and inference across the full lower row. The tokenization panel pairs the user’s structured object with its exact serialization. The training panel aligns input/output token sequences above and below one model bar. The inference panel is a left-to-right sequence of intermediate generated states. Mark valid local steps with green checks, and specific invalid steps with red crosses and short reasons. Draw local resampling arcs only around local validity failures. Draw a separate long rollback path for a failed final global stability check, returning to the last valid stable state. Use the supplied constraints and failure cases rather than assuming every generator has rollback.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #B1B758, #DB2424, #37A445. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

