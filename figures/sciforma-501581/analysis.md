# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a decision tree structure labeled 'Expert 4' at the top center, representing a hierarchical classification or decision-making model used in the Reacher-v4 environment. The global layout is a tree diagram with a root node at the top, branching downward into multiple internal decision nodes and terminal leaf nodes. The structure flows from top to bottom, with decisions propagating through conditional branches labeled 'T' (True) and 'F' (False), leading to final outcomes.

The visual modules consist of rectangular nodes with rounded corners. Internal decision nodes are outlined in gray and contain mathematical inequalities involving parameters such as Θ⁴₆y_T ≤ 0.444, Θ⁴₄ sin θ_sa ≤ -0.032, Θ⁴₁₀ Δ_y ≤ -0.271, Θ⁴₆y_T ≤ 0.510, and Θ⁴₅x_T ≤ -0.002. These nodes represent conditions evaluated during the decision process. Terminal leaf nodes are colored: light blue for 'NO' and light pink for 'YES', indicating binary outcomes. All text within nodes is centered and uses a clear, sans-serif font.

Connections between nodes are represented by solid black lines. From each internal node, two branches extend downward: one labeled 'T' (True) to the left and one labeled 'F' (False) to the right, directing the flow based on condition evaluation. The root node is Θ⁴₄ sin θ_sa ≤ -0.032. If true, the path leads to the left child node Θ⁴₆y_T ≤ 0.444, which then splits into 'NO' (blue) and 'YES' (pink) leaves. If false, the path proceeds to the right child node Θ⁴₁₀ Δ_y ≤ -0.271, which further branches into two sub-nodes: Θ⁴₆y_T ≤ 0.510 (left) and Θ⁴₅x_T ≤ -0.002 (right). Each of these sub-nodes also terminates in 'NO' (blue) and 'YES' (pink) leaves. The diagram is symmetrically arranged, with clear spatial separation between branches to avoid overlap and enhance readability. The overall design emphasizes logical flow and decision hierarchy, typical of decision tree representations in machine learning or expert systems.
