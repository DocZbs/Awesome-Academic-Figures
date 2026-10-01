# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating LLM Reasoning in the Operations Research Domain with ORQA — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17874

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-step methodology for generating a dataset of optimization problem instances, designed to support training or evaluation of models in operations research (OR). The overall layout is structured vertically, progressing from top to bottom through Step 1, Step 2, and Step 3, with each step containing distinct visual modules connected by arrows indicating data flow and processing sequence.

[1] Global Layout and Structure: The diagram is organized into three main horizontal sections labeled 'Step 1: Selecting & Creating Optimization Problem Descriptions', 'Step 2: Creating Q and A sets', and 'Step 3: Verifying the Dataset'. Each step contains rectangular or cylindrical modules representing data sources, processing actions, or outputs. Blue arrows indicate the direction of information flow between steps and modules. Examples of generated content are shown in light green boxes positioned around the main workflow, providing concrete illustrations of abstract components.

[2] Visual Modules and Attributes: In Step 1, a cylinder labeled 'OR textbooks, Academic journals, Online code repositories' serves as the initial data source. This feeds into a rectangular box where 'OR experts carefully selected optimization problems to form the basis of the dataset*'. The next module shows 'OR experts write a domain specific problem description, focusing on diverse application domains'. These two expert-driven steps lead to a central cylinder labeled 'Created Problem Description'. An example of a general problem (set packing) is shown in a green box with its mathematical formulation (maximize Z = Σx_ij subject to constraints), while another green box provides a domain-specific example involving bundling stories for an anthology. In Step 2, a yellow-bordered rectangle describes how 'OR experts reference question types*, create options, and select target answers for each combination of optimization problem and corresponding question types'. This leads to a cylinder labeled 'Dataset'. A green example box below this step shows a created question ('What are the decision activities of the optimization problem?'), multiple-choice options (A-D), and the target answer (B). In Step 3, two rectangular boxes represent independent verification by 'First OR expert' (checking completeness, ambiguity, correctness) and 'Second OR expert' (checking multi-step reasoning, target answer correctness). These are connected by bidirectional arrows, indicating iterative review. The final output is a green box titled 'Complete and validated instance', which combines the context from the domain-specific example with the question, options, and target answer, now fully vetted.

[3] Connections and Arrows: Blue arrows connect the data source to the first expert action, then to the second expert action, and finally to the 'Created Problem Description' cylinder. From there, a blue arrow points to Step 2's question creation module, which in turn connects to the 'Dataset' cylinder. Another blue arrow from the 'Dataset' cylinder leads to Step 3, where it is processed by the two expert verification modules. Bidirectional arrows between the two expert checkers suggest a collaborative or iterative validation process. Finally, a blue arrow from the verification step points to the 'Complete and validated instance' example, showing the end result of the entire pipeline. The figure uses consistent visual cues: cylinders for data storage, rectangles for processing steps, and green boxes for illustrative examples, all linked by directional arrows to convey a clear, sequential workflow.
