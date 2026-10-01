# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

What Are Step-Level Reward Models Rewarding? Counterintuitive Findings from MCTS-Boosted Mathematical Reasoning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15904

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a framework for mathematical reasoning supervised by step-level reward models (SRMs), divided into two main sections by a vertical dashed line. On the left side, the global layout shows a hierarchical tree structure representing the reasoning process for a math problem. At the top is a light green rounded rectangle labeled 'Math Problem', which branches down into multiple thought steps. Each thought step (e.g., 'Thought 1a', 'Thought 1b', 'Thought 1c') is represented by a dark gray rounded rectangle containing horizontal lines symbolizing text, followed by a light blue rounded rectangle labeled 'Equations' (e.g., 'Equations 1a'), indicating the derived equations from that thought. These thought-equation pairs form a branching tree: Thought 1a leads to Thought 2a, Thought 1b to Thought 2b, etc., suggesting a multi-step reasoning process. A golden trophy icon labeled 'Step-Level Reward Model' is positioned to the right of this tree, connected via dashed arrows to specific equation outputs (notably 'Equations 1c'), indicating that the reward model evaluates individual reasoning steps. The entire tree is enclosed in an orange dashed rectangle with the caption 'Mathematical Reasoning Supervised by Step-Level Reward Model'. A yellow star highlights 'Equations 1c', emphasizing it as the target for reward modeling.

On the right side, four parallel vertical columns demonstrate different input configurations for the step-level reward model. Each column begins with a 'Math Problem' box (light green) feeding into a sequence of 'Thought' (dark gray) and 'Equations' (light blue) boxes. The columns are labeled at the bottom: 'Full-Context', 'Math-Only', 'Single-Step Math-Only', and 'Next-Thought'. The legend above these columns clarifies that solid light blue rectangles represent 'Inputs of Step-Level Reward Model', while dotted outlines indicate 'Excluded Context'. In the 'Full-Context' column, all elements are solid, meaning the entire reasoning history is included. In 'Math-Only', only the current 'Thought' and 'Equations' are solid; prior thoughts are dotted, excluding them. In 'Single-Step Math-Only', even the current 'Thought' is dotted, leaving only the 'Equations' as input. In 'Next-Thought', the current 'Equations' are solid, but the next 'Thought' is also solid, suggesting the model receives the current equations and the next thought as input. This section visually compares how varying contextual inputs affect the reward model's design. The overall figure uses consistent shapes (rounded rectangles), colors (green for problems, gray for thoughts, blue for equations, gold for reward model), and arrow styles (solid for flow, dashed for evaluation or exclusion) to convey the methodology clearly.
