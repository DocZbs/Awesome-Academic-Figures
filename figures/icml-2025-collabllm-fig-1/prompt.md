# 改绘模板：模拟分支与反馈框架

维护者基于 Figure 1 的视觉结构重建；不是原作者 prompt。下列内容以参考图配色与布局为基础，变量必须替换为自己的研究内容。若方法不存在反馈或模拟，应删除相应部分并调整布局。

```text
Create an academic framework diagram for {{method_name}}, using the attached reference.png as a visual reference for its wide layout, nested simulation region, and separated feedback path. Adapt the visual structure to the supplied method specification; every module and connection must correspond to an actual component of that method.

=== GLOBAL COMPOSITION ===
Use a white canvas with an approximately 3:1 aspect ratio. Place {{input_or_actor}} on the left, {{central_process}} in the center, and {{output_or_model}} on the right. Keep the main processing area visually dominant. Reserve a narrow band above it for {{context_and_response_examples}} and a separate band below it for {{feedback_description}}, if feedback exists.

=== LEFT AND RIGHT ENDPOINTS ===
Represent each endpoint with a rounded rectangle, a simple editable icon, its name, and one concise explanatory line supplied by the user. Use a warm orange outline for the input and a cyan outline for the model or output. For the top examples, use short text supplied by the user inside readable rounded speech bubbles. Do not reuse the reference paper's conversation text.

=== CENTRAL PROCESS ===
Group the supplied internal modules in a rounded container with a dashed rose outline and a near-white fill. Show the group name as a restrained label above the container. Use {{modules_and_internal_details}} to determine its internal organization. If the process contains sampling and evaluation, show sampling on the left and evaluation on the right, connected with a labeled horizontal arrow.

For multiple sampled alternatives, arrange small cards side by side with consistent miniature content and explicit identifiers. Set their number from {{number_of_alternatives}}. For evaluation, use a compact grid with rows determined by {{evaluation_dimensions}} and columns determined by the supplied alternatives. Include only user-provided values; if none are available, use descriptive metric names without numerical results.

=== CONNECTIONS AND ANNOTATIONS ===
Draw exactly the directed relationships listed in {{connections}}. Use labeled solid arrows for the main flow, dashed connectors for auxiliary relationships, and a bottom return path only if specified by the method. Place formulas or tensor dimensions only when supplied and scientifically applicable. Keep arrows clear of text, endpoint boxes, and the evaluation grid. Use optional numbered stage markers only when the method has a meaningful ordered sequence.

=== STYLE SPECIFICATIONS ===
Use approximately #ED7547 for the input accent, #16A5BC for the output accent, and #C26195 for central grouping and feedback; these are suggested approximations to the reference palette. Use #333333 for text, white module fills, thin consistent outlines, restrained near-white grouping fills, and readable sans-serif labels. Keep adequate spacing for all nested elements. Preserve distinguishable line styles and labels in grayscale. Avoid decorative gradients, excessive shadows, logos, and dense paragraph text.

Use {{language}} for all final labels. Deliver {{output_format}}, an editable source where supported, and a preview at {{output_size}}. Check that all supplied modules and relationships are present, and that no label, arrow, or lower feedback path is clipped.
```
