# Adaptation prompt — Next-token versus next-scale generation

This is a maintainer reconstruction based on Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction, Figure 2, 2404.02905v2. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Arrange three comparative panels, with two smaller baselines stacked at left and the main proposed paradigm occupying the larger right side. The first baseline shows text tokens in sequential order over a pale-gold model pedestal. The second shows visual tokens in raster order over a pale-green pedestal, followed by a small reshape grid. The right panel shows a sequence of increasingly fine spatial token maps over a pale-blue model pedestal. Use mild perspective to distinguish spatial maps, and dotted directed arrows for the real autoregressive dependencies. Explicitly separate serial inter-scale generation from parallel intra-scale generation when that matches the method. Replace token examples, scale counts and model names with the user’s actual design; keep the comparison technically fair.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #E8D6A1, #D3E0C0, #C5D6EC. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

