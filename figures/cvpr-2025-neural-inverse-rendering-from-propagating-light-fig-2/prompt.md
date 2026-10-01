# Adaptation prompt — Capture setup photograph with inset

This is a maintainer reconstruction based on Neural Inverse Rendering from Propagating Light, Figure 2, 2506.05347v1. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Use the user’s actual experiment photograph as the large main panel, preserving its orientation and recognizable hardware. Add a zoomed crop in the upper-left corner with a thin red border. Mark the crop’s matching source region in the main photograph using a red dashed box and connect it to the inset with a clean curved or straight leader. Add short white labels on the dark background, with thin white leaders ending precisely on the named components. Keep the specimen unobstructed. If the supplied photo has a light background, switch annotation contrast consistently. Request missing component names or coordinates instead of guessing the apparatus. Deliver editable callouts separately from the photo.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #DE222B, #FFFFFF, #111111. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

