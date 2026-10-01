# Adaptation prompt — Generation quality versus compute curves

This is a maintainer reconstruction based on Discrete Diffusion Modeling by Estimating the Ratios of the Data Distribution, Figure 1, 2310.16834v3. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Create one rectangular performance-versus-compute chart. Use network evaluation count on the horizontal axis and the user’s quality metric on the vertical axis, with units and better-direction stated explicitly. Draw each iterative method as a colored line with round markers at measured checkpoints. Represent one-shot or fixed-compute baselines as standalone star markers at their actual compute positions, without connecting them into an unsupported curve. Use blue and orange consistently for model-size groups, a compact legend at the top, thin axes and a light grid. Set logarithmic or linear axes from the supplied experimental design and label them honestly. Plot only actual observations and preserve uncertainty information when provided.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #1717D8, #E89B14, #BFBFBF. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

