# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a decision tree structure labeled 'Expert 7' at the top center, representing a hierarchical classification model used in the Reacher-v4 environment. The global layout is a tree diagram with a root node at the top, branching downward into multiple levels of internal decision nodes and terminal leaf nodes. The structure flows from top to bottom, with decisions propagating through conditional splits based on mathematical inequalities involving parameters denoted by Θ with superscript 7 (indicating Expert 7), and various state or action variables such as ω_sa, Δ_y, Δ_x, cosθ_sa, sinθ_fa.

Visual modules consist of rectangular nodes with rounded corners. Internal decision nodes are white with gray borders and contain mathematical conditions, such as 'Θ₈⁷ω_sa ≤ 0.024', 'Θ₁₀⁷Δ_y ≤ -0.180', etc. These nodes represent splitting criteria in the decision process. Terminal leaf nodes are colored: light blue for 'NO' outcomes and light pink for 'YES' outcomes, both with bold black text. All nodes are aligned horizontally at each level, forming a clear left-to-right branching pattern.

Connections between nodes are represented by solid black lines. Each internal node branches into two child nodes, with labels 'T' (True) and 'F' (False) placed along the connecting lines to indicate the path taken based on whether the condition evaluates to true or false. For example, from the root node 'Θ₁₀⁷Δ_y ≤ -0.180', a 'T' branch leads left to 'Θ₈⁷ω_sa ≤ 0.024', while an 'F' branch leads right to 'Θ₉⁷Δ_x ≤ 0.021'. This branching continues recursively until reaching the terminal 'NO' or 'YES' leaves. The tree has three main branches stemming from the root, each leading to further subdivisions, resulting in a total of six terminal nodes: four 'NO' and two 'YES'. The diagram is clean, uncluttered, and designed for clarity in illustrating the logic flow of Expert 7’s decision-making process.
