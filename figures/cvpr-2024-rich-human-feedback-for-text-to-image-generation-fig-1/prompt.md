# Adaptation prompt — Point annotation and rating interface

This is a maintainer reconstruction based on Rich Human Feedback for Text-to-Image Generation, Figure 1, 2312.10240v2. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Create two adjacent columns on white: a large annotated example image at left and a narrower text-and-rating panel at right. Red dots represent artifact or implausibility feedback; cyan dots represent text-image misalignment. Use only annotation coordinates supplied by the user. At the top of the right column show the actual prompt, emphasizing the selected misaligned words with an underline and soft selection fill. Below, stack the user’s rating dimensions with one discrete score row each; emphasize the chosen score with an underline. Keep marks small enough to reveal the underlying image. Include a compact legend mapping colors to feedback semantics. Do not invent defects or ratings.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #E32323, #0ADAD7, #333333. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

