# Adaptation prompt — Multimodal token sequence and codec layout

This is a maintainer reconstruction based on VideoPoet: A Large Language Model for Zero-Shot Video Generation, Figure 2, 2312.14125v4. It is not an author-supplied prompt and has not been generation-tested.

## Global composition and reading order

Create an academic figure for {{research_content}} using the supplied reference as a layout and visual-language guide. Read the reference before drawing. Draw a wide horizontal token-layout schematic. At the top place one rounded model bar spanning both prefix and output regions. Beneath it align a continuous row of token groups and special boundary tokens. Use light blue for text, pale yellow for visual content, light green for audio, and pink/red for modality-agnostic control tokens. Divide the background into a bidirectional input-prefix region and an autoregressive output region, with attention captions along the top. Below the token groups place trapezoidal encoders under inputs and decoders under outputs, connected to the user’s examples. Token spellings, sequence order, codec names and attention boundaries must match the supplied implementation. Avoid decorative tokens or unsupported modality paths.

## Content, relationships and annotations

Replace source-paper labels with {{labels}}, and include only the verified connections or mappings in {{relationships}}. Use {{true_data}} for every empirical mark, number or example. If a required item is missing, identify it before drawing rather than inventing it. Adjust the layout using {{layout_changes}} while preserving a clear reading sequence. Separate conceptual illustration from measured evidence in the caption. Keep text editable and avoid overlapping arrows, axes, leaders and labels.

## Style and delivery

Use the reference's restrained academic palette; approximate accent colors are #C9D7F3, #F8E5A6, #D2E2AB, #F3B8BF. Preserve consistent line weights, legible typography, and adequate whitespace. Color must keep its meaning throughout the figure. Set text language to {{language}}. Deliver {{output_format}} as an editable artifact with a preview, ideally SVG/PDF for diagrams or a plotting script plus SVG/PDF for charts. Verify all labels, legends, clipping and factual relationships against the supplied materials. Preserve source attribution in the delivery notes.

