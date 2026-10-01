# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a decision tree structure for 'Expert 2' in the Reacher-v4 environment, as indicated by the caption. The global layout is hierarchical and binary, with a root node at the top branching into two main paths based on a condition, and each subsequent node further splitting until reaching terminal leaf nodes labeled 'YES' or 'NO'. The tree is organized from top to bottom, with decisions flowing downward through conditional tests.

The visual modules consist of rounded rectangular nodes. The internal decision nodes are white with gray borders and contain mathematical inequalities involving parameters such as Θ²₅x_T, Θ²₆y_T, and Θ²₁₀Δ_y, along with numerical thresholds (e.g., ≤ -0.003, ≤ 0.012, etc.). These conditions are written in black text using standard mathematical notation. The terminal leaf nodes are colored: 'NO' nodes are light blue with dark blue text, while 'YES' nodes are light pink with dark red text. All nodes are uniformly sized and aligned to maintain clarity in the flow.

Connections between nodes are represented by solid black lines. From the root node, which contains the condition 'Θ²₅x_T ≤ 0.012', two branches extend: one labeled 'T' (True) to the left, leading to the next condition 'Θ²₅x_T ≤ -0.003', and another labeled 'F' (False) to the right, leading to 'Θ²₆y_T ≤ -0.014'. Each subsequent node continues this pattern, with branches labeled 'T' or 'F' indicating the outcome of the test. For example, from 'Θ²₅x_T ≤ -0.003', a 'T' branch leads to a 'NO' leaf, and an 'F' branch leads to 'Θ²₆y_T ≤ 0.487', which then splits into 'NO' (via 'F') and 'YES' (via 'T'). Similarly, the right subtree from 'Θ²₆y_T ≤ -0.014' branches to 'NO' (via 'T') and 'Θ²₁₀Δ_y ≤ -0.293' (via 'F'), which further splits into 'NO' (via 'F') and 'YES' (via 'T').

The tree represents a logical decision-making process where each internal node evaluates a condition, and the path taken depends on whether the condition is true or false, ultimately leading to a binary classification ('YES' or 'NO') at the leaves. The structure suggests a model used for policy or action selection in a reinforcement learning context, where specific state features (like x_T, y_T, Δ_y) are tested against learned thresholds to determine expert behavior.
