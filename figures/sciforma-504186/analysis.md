# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating LLM Reasoning in the Operations Research Domain with ORQA — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17874

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-step methodology for creating and verifying the ORQA dataset, specifically designed for optimization problems in operations research (OR). The overall layout is vertically segmented into three distinct steps, each enclosed in a colored rectangular container with a bold title: Step 1 (light blue), Step 2 (light yellow), and Step 3 (light gray). These steps are arranged sequentially from top to bottom, with data flow indicated by curved blue arrows connecting modules across steps.

In Step 1, titled 'Selecting & Creating Optimization Problems Descriptions', the process begins with a cylindrical data source labeled '-OR textbooks, -Academic journals, -Online code repositories'. This feeds into a rectangular module stating 'OR experts carefully selected optimization problems', which then leads to another rectangular module where 'OR experts write a domain specific problem description, focusing on diverse application domains.' The output of this step is a cylindrical container labeled 'Created Problems Description', positioned to the right and connected via a curved arrow.

Step 2, titled 'Creating of Q and A sets', features a large rectangular module with a light yellow background. It describes how 'OR experts reference question types, create options, and select target answers for each combination of optimization problem and corresponding question types.' An arrow from the 'Created Problems Description' cylinder points to this module, indicating input. The output of this step is another cylindrical container labeled 'Dataset', located below and to the right, connected by a curved arrow.

Step 3, titled 'Verifying the dataset', consists of two adjacent rectangular modules within a light gray container. The left module states 'First OR expert checks: - Completeness, - Ambiguity in the question and options'. The right module states 'Second OR expert checks: - Existence of multi-step reasoning, - Correctness of the answer'. An arrow connects these two modules, indicating sequential review. Both verification modules feed into the 'Dataset' cylinder via separate curved arrows, suggesting iterative refinement or validation.

To the right of the 'Dataset' cylinder, a text box labeled 'Contains:' lists four components: '- Context, - Question, - Options, - Target answer', specifying the structure of the final dataset. All text is black, using a clean sans-serif font. Shapes include rectangles for processes, cylinders for data stores, and curved arrows for directional flow. The color scheme uses light blue, light yellow, and light gray for step backgrounds, with dark blue borders and arrows for visual clarity.
