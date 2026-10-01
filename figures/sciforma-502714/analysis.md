# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Reasoning Through Execution: Unifying Process and Outcome Rewards for Code Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15118

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the 'Outcome-Refining Process Supervision' framework, which employs a language model (LLM) as both programmer and critic in a step-by-step reasoning process for solving programming problems. The global layout is divided into four main stages: Reasoning Tree, Candidate Generation, Execution & Profiling, and Self-Critic & Process Rewarding, arranged from left to right with feedback loops connecting them. The Reasoning Tree on the left visualizes a search space as a tree structure with states labeled S_{i,j}, representing the j-th state at the i-th layer of the search tree. States are depicted as gray circles, with black arrows indicating terminal transitions and red arrows indicating non-terminal transitions, as defined in the legends. The problem statement at the top left specifies splitting an array of integers into subsets such that each subset has a GCD greater than 1, with the goal of minimizing the number of subsets.

The central part of the diagram shows the State Expansion process. From a selected previous state (e.g., S_{1,3}), the LLM generates candidate states for the next reasoning step through Candidate Generation. This module is represented by a hexagonal icon labeled 'LLM', receiving input from the previous reasoning chain and attempts. The output includes a thought process describing a greedy algorithm approach and a code attempt, shown in a beige box labeled '## Thoughts' and '## Attempt'.

The generated code is then passed to the Execution & Profiling stage, symbolized by a Python logo. This stage evaluates the code using static and dynamic analysis metrics, producing a report titled 'Metrics 1' that includes an overall score (0.74), AST nodes, code length, cognitive complexity, passed tests percentage, memory usage, and branch misses. This evaluation feeds into the Self-Critic & Process Rewarding module, depicted as a speech bubble containing '## Critic Thoughts' that assesses the solution’s quality and assigns a step reward (e.g., 4). The critic identifies issues and suggests improvements, and only steps with the best scores are extended in the tree.

Feedback from the critic and metrics is sent back to the LLM to guide future candidate generation. Terminal states are marked with a red 'X', while successful states are indicated with green checkmarks. Non-terminal states continue searching with new states, forming a loop back to the reasoning tree. The entire process emphasizes iterative refinement, where the LLM generates, executes, evaluates, and critiques solutions in a beam-search-like manner, maintaining multiple reasoning trajectories to find optimal solutions.
