# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Reasoning Through Execution: Unifying Process and Outcome Rewards for Code Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15118

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of three distinct supervision methodologies for optimizing code generation: Outcome Supervision, Process Supervision, and the proposed Outcome-Refining Process Supervision (Ours). The layout is vertically segmented into three main sections, each with a distinct background color—light blue for Outcome Supervision, light purple for Process Supervision, and beige for Outcome-Refining Process Supervision—and each section includes a title, a visual workflow, and a descriptive caption.

In the top section, 'Outcome Supervision', the global structure shows generated code (represented by a blue code file icon) being executed by a Python-based Code Executor (Python logo). The execution produces outcomes, which are annotated as either 'FAIL' (red) or 'PASS' (yellow), forming labeled data. This annotated data is then used for Supervised Fine-Tuning (SFT), indicated by an arrow labeled 'SFT', to train a Policy Model (hexagonal green icon). The trained model outputs optimized code (light blue code file). The caption states: 'Optimize generated code by supervising outcomes'.

The middle section, 'Process Supervision', begins with a Policy Model generating Reasoning Steps, depicted as a tree of green circular nodes. These steps are evaluated by a Judging Reasoning Process module (hexagonal red icon labeled PRM), which receives Reward Labels (purple document icon) and produces Process Rewards. The PRM is trained via SFT on these labels. The reasoning process is illustrated with an example chain from a search tree showing step-by-step reasoning with associated scores (e.g., Step 1: Score 4, Step 2: Score 3, Step 3: Score 5). The output is optimized code, and the caption reads: 'Optimize generated code by supervising reasoning process'.

The bottom section, 'Outcome-Refining Process Supervision (Ours)', integrates both outcome and process feedback. A unified Reward + Policy Model (green hexagon with internal structure) generates Reasoning Steps & Attempt Solution (tree of green circles). Simultaneously, it performs Outcome Reflection & Process Rewards, using a Code Executor (Python logo) to evaluate outcomes. This feedback loop enables Judging Reasoning Process and Refinement of Outcome, allowing the model to refine its attempts based on both reasoning quality and outcome performance. An example state from the search tree illustrates this refinement: after failing on test case #2 due to incorrect Union-Find handling, the model proposes a new attempt with improved code and reflects on time complexity inefficiency, assigning a Step Score of 3. The caption states: 'Optimize generated code by supervising reasoning and outcomes', and a highlighted note at the bottom emphasizes: 'Significantly Improve Complex Coding 🔥'. The method is noted as requiring 'No Training Required' for the integrated model, suggesting it leverages existing components.

Visually, the figure uses consistent icons: code files for generated code, Python logos for executors, hexagons for models (green for policy, red for PRM), and circular nodes for reasoning steps. Arrows indicate data flow and training processes, with labels such as 'SFT' and 'Process Rewards'. Text annotations provide context for each step, including example reasoning chains and scores. The overall design emphasizes a progression from simple outcome-based supervision to more sophisticated, integrated reasoning-and-outcome refinement.
