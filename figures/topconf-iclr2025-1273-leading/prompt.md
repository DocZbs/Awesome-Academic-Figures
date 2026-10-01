# Reference-specific adaptation prompt

Adapt the supplied MMed-RAG reference as a wide multi-panel medical retrieval-and-training diagram, approximately 2:1. Keep two compact stages across the upper left/middle, a broad lower comparison region, and a narrow vertical training lane at the right. Scientific labels and connections must come from {{input_domains}}, {{retriever_mapping}}, {{context_selection_rule}}, {{preference_cases}} and {{training_stages}}.

=== PANEL 1: DOMAIN-AWARE RETRIEVAL ===
Use a very pale blue upper-left region with a small numbered stage marker. On the left stack the user-specified domain inputs as original abstract image symbols and short domain labels. Connect them into a domain-identification box, then fan out to the supplied domain categories and corresponding retriever nodes. Keep route arrows thin and black; do not imply a domain-specific model or dataset not supplied by the user.

=== PANEL 2: ADAPTIVE CONTEXT SELECTION ===
Use a very pale green region beside panel 1. Put an image/query/model relationship on its upper row, with a short supplied question in a dotted-outline box. Place retrieval candidates in a lower row, then route the user-confirmed selected context upward to the model. Use small document-stack symbols for candidate/selected reports. If the user has no numeric scores, replace the reference's similarity bar symbol with a label-only score/selection operation; do not fabricate bars with values, top-k settings or thresholds.

=== LOWER REGION: PREFERENCE CASES ===
Arrange {{preference_cases}} in dashed-outline subgroups below the two top panels. Preserve the reference's mixture of a lower-left subgroup and two wider stacked groups to the right when there are three cases. For each case use two compact side-by-side schematic paths to display the real alternatives, with generic image-input, retrieval and model nodes. Show check/cross outcomes only when the user explicitly provides their meaning and correctness. Use concise case headings above/below the subgroup. Replace the source schoolchildren illustrations with original neutral decision/comparison symbols; replace medical photographs with original abstract thumbnails or clearly licensed user-provided materials, never traced source patient images.

=== RIGHT TRAINING LANE ===
Reserve a narrow white column from top to bottom for the supplied preference construction, data, optimization and final model stages. Connect these with separate downward arrows, and use one short label per stage. Do not turn the downward lane into a misleading left-to-right flow. Omit unsupported training claims, including 'stronger', unless the user supplies evidence.

=== STYLE AND OUTPUT ===
Approximate the visible colors with pale blue #E2F3FD, pale green #EBF6E9, muted gold #F3D17A, mint #AAD5C6 and soft coral #E3AAA0. Use black labels and fine connectors, with restrained dashed subgroup borders and ample gutters. Keep all labels editable, avoid tiny dense paragraphs, follow {{language}}, {{layout_changes}} and {{output_format}}, and provide vector output when available. Use only {{research_content}}/{{true_data}}; no invented examples, metrics or formulas. Preserve attribution/license separately and mark the result as an adaptation. Third-party photographs, identifiable medical scans and original illustrations must not be copied.
