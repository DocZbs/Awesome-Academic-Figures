# 视觉问答与临床图思维的需求对照：参考图改绘提示词

按现有预览逐区重建；不是原作者prompt。文字/视觉已核，改绘未生成或渲染验证。

```text
Create a two-row conceptual comparison with the attached reference's four aligned columns: knowledge/input, question type, model capability and stakeholder relevance. Use a white canvas near 1.58:1. The figure explains {{input_modality_label}} and {{domain_knowledge_label}} relative to actual user task needs; it does not claim clinical validation.

=== SHARED HEADINGS AND ROW A ===
Place concise headings with small original generic icons across the top and faint vertical separators. Use narrow status columns on the right. Draw a rounded baseline row '(a)' containing an authorized user image or new abstract modality symbol at left; do not trace the reference scan. Connect it with a thin horizontal arrow to two stacked question cards: pale blue for {{easy_question}} and pale peach for {{clinically_relevant_question}}. Put a colored circular task marker at each card's right edge. Populate the capability/relevance columns from {{capability_statuses}} and {{user_relevance_statuses}} using outlined green checks or red crosses with text alternatives. Do not assume the source's outcome pattern applies.

=== ROW B: DOMAIN-GUIDED REASONING ===
In a second rounded row '(b)', show the same authorized input beside an original expert/knowledge outline icon. Connect them to a pale-peach reasoning card containing {{reasoning_graph}}: intermediate purple circles and a final coral task circle. Define every node and directed edge from the user's reasoning specification. Preserve curved connections only when needed by this real graph; the reference's unlabeled circles do not justify invented clinical causal links. Fill the right-side status columns with verified judgments or explicitly labeled uncertainty.

=== LEGEND AND VISUAL STYLE ===
Use {{task_legend}} for a compact shared bottom legend. Preserve the reference's separation between input knowledge, intermediate/domain tasks and a final complex task. Approximate card colors #C3E4F0 and #F9E3D8, intermediate nodes #CFB0E4, easy-task marker #DFF4C3, target marker #F96662 and positive status #55C578. Keep thin rounded borders, dark text, clear column alignment and generous space around checks/crosses.

=== OUTPUT REQUIREMENTS ===
All questions, meanings, reasoning edges and status assignments must follow {{research_content}} and {{true_data}}. Use only licensed/user-owned imagery. Follow {{layout_changes}}, {{language}} and {{output_format}} with editable vector elements and a crisp preview. Confirm that a displayed success or relevance claim is supported; missing evidence should remain uncertain. Keep source attribution/license with redistributed reference imagery and make the adaptation communicate the user's own scientific setting.
```
