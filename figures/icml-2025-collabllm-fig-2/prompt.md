# 改绘模板：双列、三层方法对比

维护者基于 Figure 2 的视觉结构重建；不是原作者 prompt。使用自己的案例与结果替换原论文内容。

```text
Create an academic comparison figure for {{comparison_title}}, using the attached reference.png for its aligned two-column, three-row organization. Compare {{baseline_name}} on the left with {{method_name}} on the right. The figure must communicate user-supplied differences without inventing performance advantages, dialogue examples, or measurements.

=== GLOBAL COMPOSITION ===
Use a white, wide canvas with an approximately 2.7:1 aspect ratio, adjusting height if needed for readable text. Allocate a narrow shared label column on the far left. Organize both method columns into three corresponding rows: {{row_1_label}}, {{row_2_label}}, and {{row_3_label}}. Use matching widths and aligned row boundaries. Place concise panel labels (a) and (b) below the two columns.

=== TOP ROW: METHOD OR TRAINING ===
Show the supplied process for each method using compact editable icons, module names, and directed arrows. The left process is {{baseline_process}}; the right process is {{proposed_process}}. Represent shared operations consistently and emphasize only real differences. Show any historical inputs, current steps, future steps, or feedback loops only when they occur in the supplied specification. Keep formulas and symbols exactly as provided in {{notation}}; do not infer nonexistent tensor shapes.

=== MIDDLE ROW: APPLICATION OR EXAMPLES ===
Place {{baseline_examples}} and {{proposed_examples}} in aligned rounded panels. If they are conversations, show alternating user and assistant bubbles with simple role icons, orange accents for user inputs, and pale cyan accents for assistant outputs. Use short supplied excerpts and emphasize the exact phrases specified by {{highlighted_differences}}. If the examples are images or another modality, adapt the inner panels while retaining the aligned comparison structure. Do not add irrelevant conversation bubbles to non-conversational tasks.

Use vertical connectors from the top processes to the corresponding middle panels when this relationship is meaningful. Their labels must describe the supplied relationship without claiming a measured causal effect unsupported by the user's evidence.

=== BOTTOM ROW: EVALUATION ===
Use compact dashed-outline panels for {{evaluation_content}}. Display only supplied measurements, with the correct metric names, units, uncertainty, and direction where applicable. If numerical data are missing, show supported qualitative observations or omit the evaluation row. Never transplant the reference paper's scores into a new experiment. Use neutral emphasis unless the evidence supports a direction of improvement.

=== STYLE SPECIFICATIONS ===
Use #808080 for baseline outlines, approximately #C26195 for proposed-method outlines, #ED7547 for user-input accents, and restrained pale cyan for response bubbles. These are suggested adaptations of the reference's palette, not author-provided design specifications. Keep text dark, typography consistent, rounded corners modest, and backgrounds white or near-white. Use thin solid borders for process and application panels and dashed borders for evaluation panels. Maintain readable row labels, balanced spacing, and distinguishable panel labels in grayscale. Avoid decorative gradients, logos, and excessive shadows.

Use {{language}} for final labels. Deliver {{output_format}}, editable source where supported, and a preview at {{output_size}}. Confirm that the two columns use the same comparison dimensions, all supplied examples remain accurate, numerical results have valid sources, and no panel label or shared row label is clipped.
```
