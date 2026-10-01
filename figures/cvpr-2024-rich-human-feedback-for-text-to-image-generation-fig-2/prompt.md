# Adaptation prompt — Four aligned score histograms

This is a maintainer reconstruction based on Rich Human Feedback for Text-to-Image Generation, Figure 2, 2312.10240v2. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Place four histogram panels in a single horizontal strip, sharing a common count scale and baseline. Label each panel beneath its x axis using the supplied assessment dimension. Use identical ordered bin boundaries in every panel and a consistent color for the same score bin across panels. Draw clean thin axes, small angled bin labels where needed, and show count ticks primarily at the outer edges. Leave enough spacing to distinguish the groups without separating them into unrelated charts. Compute heights directly from the supplied observations or counts. Use no smoothing, fabricated samples, or rescaling that changes comparative meaning. Include the sample-size and bin definitions in the caption.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #1F77B4, #FF7F0E, #17BECF. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

