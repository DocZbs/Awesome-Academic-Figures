# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hierarchical Meta-Reinforcement Learning via Automated Macro-Action Discovery — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11930

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part architectural overview of a hierarchical meta-learning framework called HiMeta, designed for multi-task reinforcement learning. The left side illustrates the conceptual workflow, while the right side details the computational structure.

[1] Global Layout and Structure: The figure is divided into two main regions by a vertical dashed line. On the left, a conceptual path diagram shows how macro-actions guide navigation from an initial state st toward a sequence of intermediate goals g1^1, ..., gn^(n-1), ultimately reaching the final goal g_task^n. Two example task trajectories, Task1 and Taskn, are shown with curved blue paths, each marked with yellow triangular flags at intermediate goal states and green flags at the final goal. Red arrows indicate macro-actions that steer the agent along the path. Below the paths, the symbol π? suggests uncertainty or the need to learn a policy. On the right, a structured block diagram represents the two-stage architecture: the 'Macro-Action Stage' at the top and the 'Primitive-Action Stage' at the bottom, both enclosed in rounded rectangles with dark blue borders.

[2] Visual Modules and Attributes: In the Macro-Action Stage, a gray rectangular box labeled 'HiMeta' sits at the top, serving as the central high-level decision module. From HiMeta, two downward-pointing blue arrows lead to two task-specific sequences: Task1 and Taskn. Each task is represented as a horizontal row of four square boxes, alternating between light blue and beige, containing '+' or '-' symbols. These represent high-level directional action predictions. In the Primitive-Action Stage, below each task sequence, there is a corresponding row of four boxes with numerical values (e.g., .5, -2, .7, -4 for Task1; .1, .3, .9, -4 for Taskn), also alternating in color. These represent the learned policy parameters π, which generate primitive actions based on the macro-action guidance. The labels 'Task1', 'Taskn', 'π', 'Macro-Action Stage', and 'Primitive-Action Stage' are written in bold, dark blue font. The title 'Goal: g_task^n' and 'Goal state: g_task^1...n-1' appear at the top left, with green and yellow flags respectively, indicating the final and intermediate goal states.

[3] Connections and Arrows: A red arrow labeled 'Macro-Action' points from the 'Goal: g_task^n' label toward the first intermediate goal, visually linking the high-level goal to the macro-action concept. In the right-side diagram, two thick blue arrows descend from the HiMeta box to the task sequences, indicating that HiMeta produces the high-level action predictions for each task. Further, two additional thick blue arrows connect each task's macro-action sequence to its corresponding primitive-action parameter vector (π), showing the flow of information from the macro-level to the primitive-level policy. The entire diagram emphasizes a hierarchical decision-making process where HiMeta provides abstract directional guidance, which is then translated into concrete action parameters by the lower-level policy.
