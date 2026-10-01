# Adaptation prompt — Generation samples and editing strips

This is a maintainer reconstruction based on Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction, Figure 1, 2404.02905v2. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Create a qualitative gallery with three bands. The top band contains four large equally sized hero samples. The middle band contains a denser row of additional samples with consistent spacing. The bottom band contains two short ordered editing sequences, each preserving its own input-to-output chronology. Let the images supply most color; use a white background and thin neutral gutters rather than heavy frames. Add truthful row labels for resolution or task only if supported by the provided results. Use the user’s actual model outputs and disclose sample selection criteria in the caption. Do not regenerate missing experiment images, remove failure cases to imply universal success, or mix resolutions without stating them.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #B3CDE0, #F2AC66, #FFFFFF. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

