# Adaptation prompt — Time-resolved rendering decomposition

This is a maintainer reconstruction based on Neural Inverse Rendering from Propagating Light, Figure 1, 2506.05347v1. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Build an asymmetric three-panel method overview. Allocate the left half to panel (a), a simple 3D scene with a pulsed source, sensor, primary ray, secondary rays, and two magnified interaction insets. Allocate the right half to stacked panels (b) and (c). In each right panel, show the supplied local calculation followed by its aggregated output, using miniature response curves and an explicit arrow. Maintain semantic colors: red for direct contributions, blue for indirect contributions, and green for the observed sensor path. Use faint cool and warm backgrounds to separate the two mathematical modules. All equations, ray directions and network outputs must come from the user’s verified method; do not copy the original physics into an unrelated system.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #FF6973, #305779, #25A23D. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

