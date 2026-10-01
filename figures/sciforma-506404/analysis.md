# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ToolComp: A Multi-Tool Reasoning & Process Supervision Benchmark — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01290

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-step annotation process for collecting supervised data in a reasoning or tool-use framework, such as ReAct, where human corrections are applied to model-generated outputs at each step. The overall layout is horizontal, progressing from left to right across three main stages: 'Action Plan', 'Step 1', and 'Step N', each enclosed in a dashed rectangular boundary indicating distinct phases of the process.

In the 'Action Plan' stage, a gray box labeled 'Model' contains the initial 'Action Plan'. This is compared against a green box labeled 'Human Corrected Action Plan', which includes a checkmark (✓), indicating correctness. An arrow from the Model's Action Plan points to the Human Corrected version with a red cross (✗), signifying that the original plan was incorrect and required correction. A separate arrow from the corrected version points back to the Model with a green checkmark (✓), implying acceptance or feedback.

The 'Step 1' stage shows two parallel columns: 'Model' and 'Human Corrected'. Under 'Model', three components—'Thought', 'Action', and 'Action Input'—are displayed as rounded rectangles. The 'Thought' component is green with a ✓, while 'Action' and 'Action Input' are red with ✗, indicating errors. These components feed into a blue box labeled 'Tool Observation'. In the adjacent 'Human Corrected' column, all three components are green with ✓, showing corrected versions. These also feed into a matching 'Tool Observation' box. Arrows connect each model component to its corrected counterpart, illustrating the correction process.

The 'Step N' stage mirrors Step 1 but represents the final step in the sequence. Here, the 'Model' column shows 'Thought' as red with ✗, while 'Action' and 'Action Input' are green with ✓. The 'Human Corrected' column again displays all components as green with ✓. Both columns lead to a 'Final Answer' box in blue. Dotted arrows between Step 1 and Step N indicate that this process repeats over multiple steps.

Throughout the diagram, colors denote correctness: green with ✓ indicates correct output, red with ✗ indicates incorrect output. All boxes are rounded rectangles with consistent styling. Text labels are centered within boxes. The diagram emphasizes iterative human correction of model-generated reasoning steps, particularly focusing on thought, action, and action input components, culminating in a verified final answer. The caption clarifies that this process is used to collect annotated trajectories for benchmarking or synthetic data generation, with corrections performed either by human annotators or advanced language models.
