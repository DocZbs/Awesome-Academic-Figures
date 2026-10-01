# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CySecBench: Generative AI-based CyberSecurity-focused Prompt Dataset for Benchmarking Large Language Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01335

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a proposed jailbreaking architecture, structured as a flowchart with six labeled components arranged vertically and horizontally to depict a sequential and evaluative process. The global layout is divided into two main vertical columns: the primary processing pipeline on the right and an evaluation module on the left. The right column contains four rectangular blocks connected by solid downward arrows, indicating a forward flow of data or operations. The left column features two blocks, one red and one white, connected by a dashed arrow, representing an evaluation or feedback loop.

In the right column, component (a) is a white rectangle labeled 'Input', serving as the starting point. It feeds into component (b), a blue rectangle labeled 'Generate Questions', which represents the first processing step. This is followed by component (c), another blue rectangle labeled 'Generate Solutions', indicating the next stage in the pipeline. The output of this stage flows into component (d), a white rectangle labeled 'Output', marking the end of the main processing sequence.

On the left side, component (e) is a red rectangle labeled 'GPT Judge', positioned below the input block and to the left of the main pipeline. A dashed line connects the 'Input' block (a) to the 'GPT Judge' (e), suggesting that the judge receives the original input for reference. Additionally, a dashed arrow points from the 'Output' block (d) to the 'GPT Judge' (e), indicating that the generated output is also fed into the judge for assessment. From the 'GPT Judge' (e), a solid downward arrow leads to component (f), a white rectangle labeled 'Jailbreak Rating', which represents the final evaluation result.

The visual modules are distinguished by color and shape: white rectangles denote input/output or results, blue rectangles represent generative processing steps, and the red rectangle highlights the evaluation component. All blocks are rectangular with black borders and centered text. The connections are primarily solid black arrows for direct data flow and dashed black arrows for auxiliary or evaluative links. The figure uses labels (a) through (f) placed to the right or left of each block for clear identification. The overall structure conveys a two-stage process: first, generating questions and solutions from an input, and second, evaluating the output using a GPT-based judge to produce a jailbreak rating, with the judge also having access to the original input for context.
