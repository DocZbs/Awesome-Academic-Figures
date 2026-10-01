# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a decision tree structure labeled 'Expert 6' at the top center, representing a hierarchical classification or decision-making process for the Reacher-v4 environment. The global layout is a top-down tree with a root node branching into two main paths, each further subdividing into additional conditions and terminal outcomes. The tree is organized in three levels: the root node at level 1, intermediate condition nodes at level 2, and terminal decision nodes at level 3.

Visual modules consist of rectangular nodes with rounded corners, outlined in gray. The root node contains the condition 'Θ₃⁶ sin θ_fa ≤ 0.028'. From this node, two branches extend: one labeled 'T' (True) leading left, and another labeled 'F' (False) leading right. Each branch connects to a condition node at the second level. The left branch leads to 'Θ₅⁶ x_T ≤ 0.116', and the right branch leads to 'Θ₆⁶ y_T ≤ -0.075'.

From the left-level condition node 'Θ₅⁶ x_T ≤ 0.116', two branches emerge: one directly to a light blue terminal node labeled 'NO', and another to a further condition node 'Θ₄⁶ sin θ_sa ≤ 0.008'. This latter node splits into two terminal nodes: a light blue 'NO' on the left and a light pink 'YES' on the right.

On the right side, from 'Θ₆⁶ y_T ≤ -0.075', two branches lead to two more condition nodes: 'Θ₈⁶ ω_sa ≤ -0.021' (left) and 'Θ₉⁶ Δ_x ≤ -0.195' (right). Each of these splits into a light blue 'NO' and a light pink 'YES' terminal node, respectively.

All terminal nodes are colored: 'NO' nodes are light blue, and 'YES' nodes are light pink, providing visual distinction between outcomes. All condition nodes are white with gray borders and contain mathematical inequalities involving parameters indexed by superscript 6 (indicating Expert 6) and various state variables such as x_T, y_T, θ_fa, θ_sa, ω_sa, and Δ_x. The connections are solid black lines with no arrowheads, but the directionality is implied by the top-down flow. The labels 'T' and 'F' on the first split indicate the path taken based on the truth value of the root condition. The entire diagram is clean, uncluttered, and uses consistent styling to represent a clear decision logic flow.
