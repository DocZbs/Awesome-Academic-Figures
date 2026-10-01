# Adaptation prompt — Sampling variants with color, marker and line encodings

This is a maintainer reconstruction based on Discrete Diffusion Modeling by Estimating the Ratios of the Data Distribution, Figure 2, 2310.16834v3. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Draw a performance-versus-compute plot with three orthogonal encodings: color for model size, marker shape for solver family, and line style for the process variant. Use one blue family and one gold family, round versus triangular markers, and solid versus dashed curves as appropriate to the supplied factors. Include fixed-compute reference methods as star markers. Build a structured legend that explains each factor independently, rather than one cryptic entry per full combination. Preserve the requested logarithmic scales and avoid plotting zero or negative values on them. Use only measured checkpoints; do not interpolate as evidence of untested regimes. If uncertainty exists, show restrained intervals without obscuring line encodings.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #1D29C6, #E6AD21, #C6C6C6. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

