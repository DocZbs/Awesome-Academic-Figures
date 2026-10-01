# Adaptation prompt — Shifted windows across adjacent layers

This is a maintainer reconstruction based on Swin Transformer: Hierarchical Vision Transformer Using Shifted Windows, Figure 2, 2103.14030v2. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Draw the same underlying patch grid twice, first for layer l and then for layer l+1, separated by a horizontal red arrow. On the first grid use a regular non-overlapping window partition. On the second grid shift the partition by the user-specified offset, visibly moving the window boundaries while preserving the patch coordinate system. Use dark-red thick borders for windows and thin gray borders for individual patches. Show the clipped windows at the image edges faithfully; do not wrap or discard boundary groups unless that is the supplied implementation. Add a compact two-item legend at the far right and label both layer panels at top. Prefer an abstract grid if no licensed example image is supplied.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #9F1720, #B9B9B9, #FFFFFF. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

