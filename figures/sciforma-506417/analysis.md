# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CySecBench: Generative AI-based CyberSecurity-focused Prompt Dataset for Benchmarking Large Language Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01335

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating an enhanced jailbreak architecture designed to evaluate the robustness of language models against adversarial prompts. The global layout is vertical, with a primary sequential workflow running from top to bottom, and a feedback loop branching off to the left. The main process begins at the top with an 'Input' box, followed by a series of processing steps, culminating in an 'Output' box. A separate evaluation module, labeled 'GPT Judge', is positioned on the left side and receives inputs from both the initial 'Input' and the final 'Output', producing a 'Jailbreak Rating' as its output.

The visual modules are represented as rectangular boxes with distinct colors and labels indicating their function. The 'Input' and 'Output' boxes are white with black borders and black text. The processing steps are color-coded: blue rectangles denote generative or refinement stages ('Generate Questions', 'Generate Solutions', 'Refine Solutions'), while gray rectangles represent data transformation steps ('Reverse Every 5th Word'). The 'GPT Judge' is highlighted in red, emphasizing its role as an evaluation component. All boxes have bold, centered text for clarity.

Connections between modules are shown using solid black arrows indicating forward progression through the pipeline. The sequence starts from 'Input' → 'Generate Questions' → 'Reverse Every 5th Word' → 'Generate Solutions' → 'Reverse Every 5th Word' → 'Refine Solutions' → 'Output'. Two dashed lines indicate feedback connections: one from 'Input' to 'GPT Judge', and another from 'Output' to 'GPT Judge', suggesting that the judge evaluates both the original input and the final output to compute the jailbreak rating. The figure includes two annotations, 'a)' and 'b)', placed to the right of the gray 'Reverse Every 5th Word' blocks, corresponding to the caption's description of enhancements: (a) introduces additional obfuscation via word reversal, and (b) incorporates a refinement step after solution generation. The overall structure reflects a two-phase enhancement strategy: first, increasing obfuscation to challenge model defenses, and second, refining outputs to improve effectiveness, all under the supervision of a GPT-based evaluator.
