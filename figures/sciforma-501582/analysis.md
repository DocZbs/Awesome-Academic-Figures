# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a decision tree structure labeled 'Expert 5' at the top center, representing a hierarchical classification or decision-making process for the Reacher-v4 environment. The global layout is a top-down tree diagram with a root node at the top, branching into left and right subtrees based on condition evaluations, ultimately leading to terminal leaf nodes labeled 'YES' or 'NO'. The tree has three levels: the root node at level 1, internal decision nodes at level 2, and terminal leaf nodes at level 3.

Visual modules consist of rounded rectangular boxes with thin gray borders. The root node contains the condition 'Θ₁⁵ cos θ_fa ≤ 0.454'. From this node, two branches extend: one labeled 'T' (True) to the left, leading to the node 'Θ₁⁵ cos θ_fa ≤ 0.445', and another labeled 'F' (False) to the right, leading to 'Θ₅⁵ x_T ≤ -0.182'. These are internal decision nodes, also in white-filled rounded rectangles with gray borders.

The left subtree from 'Θ₁⁵ cos θ_fa ≤ 0.445' splits into two paths: one directly to a light blue rounded rectangle labeled 'NO', and another to a further internal node 'Θ₁₀⁵ Δ_y ≤ 0.200'. This node then branches to a light blue 'NO' and a pink 'YES' leaf node. The right subtree from 'Θ₅⁵ x_T ≤ -0.182' splits into a pink 'YES' leaf node and an internal node 'Θ₆⁵ y_T ≤ 0.021', which further branches to a light blue 'NO' and a pink 'YES' leaf node.

All terminal leaf nodes are rounded rectangles: 'NO' nodes are filled with light blue, and 'YES' nodes are filled with light pink. All text within nodes is black, centered, and uses a sans-serif font. The connecting lines are simple black lines with no arrowheads, but the branches are explicitly labeled 'T' or 'F' near the split point to indicate the condition outcome. The overall structure follows a binary decision tree logic, where each internal node represents a threshold-based condition involving parameters with superscript '5' (indicating Expert 5), such as Θ₁⁵, Θ₅⁵, etc., and variables like cos θ_fa, x_T, Δ_y, and y_T. The tree evaluates these conditions sequentially to reach a final 'YES' or 'NO' decision.
