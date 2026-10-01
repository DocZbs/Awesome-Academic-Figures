# Reference-guided adaptation prompt

Visually reviewed against the published preview; adaptation generation has not been tested. Scientific inputs in braces must come from the user.

Draw a three-stage table-learning architecture inspired by the attached TabICL reference. Use a bent reading route: input table and column embeddings across the upper-left region, a tall row-interaction module on the right, then dataset-wise prediction in the lower-left region. This is an architecture diagram, not a results chart.
=== COLUMN EMBEDDING ===
Show a small symbolic table with rows as samples and columns as features, clearly labeling both axes. A broad unfilled arrow labeled {column_encoder} leads to a green stack or tensor-like block representing {cell_embeddings}. If user-supplied dimensions exist, annotate the table and embedding tensor consistently; otherwise use symbolic names without numeric shapes. Do not blindly reuse n,m,d from the source.
=== ROW INTERACTION ===
Inside a pale amber dashed enclosure on the right, show a representative feature row with a short prefix of trainable summary tokens. Position the user-specified positional encoding module below it, followed by thin vertical arrows into {row_encoder}. Below the encoder, align output token bars and concatenate only the summary-token outputs into a compact row vector. Preserve the distinction between per-cell embeddings and per-row representations.
=== DATASET-WISE IN-CONTEXT PREDICTION ===
A large left-pointing arrow leads to a lower-left dashed enclosure. Draw several training representations paired with small target-embedding or lookup-table boxes, followed by test representations without target values. Feed these into a softly filled transformer block. Use sparse internal curved attention arrows only for the actual connectivity in {attention_pattern}; they are not a feedback-training loop. Prediction arrows emerge above test positions, labeled with {prediction_labels}. Do not expose ground-truth test labels to the predictor.
=== STYLE AND ANNOTATIONS ===
Use a white background, black sans-serif text and thin black connectors, with approximate green #81D555 cell embeddings, rose #F89A9B context block and amber #F39B25 row transformer. Keep stage captions next to the broad transition arrows, and brackets below training versus test groups. Use token color plus distinct labels so grey-scale printing still distinguishes roles. Deliver editable SVG or equivalent source plus a high-resolution preview, with no copied author logo, invented dimensions or fabricated predictions.

Preserve the source attribution when distributing the reference. Label the adapted drawing as a new figure; do not imply author endorsement.
