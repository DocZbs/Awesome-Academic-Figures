# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Previous Knowledge Utilization In Online Anytime Belief Space Planning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13128

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a hierarchical graphical model illustrating the reuse of nodes across multiple levels, with a focus on the structural relationships between parent and child nodes. The global layout is a tree-like structure oriented vertically, with nodes arranged in three distinct horizontal layers: a top layer containing a single circular node labeled b_k, a middle layer with three circular nodes (b_{k+1,1}, b_{k+1,2}, b_{k+1,real}), and a bottom layer consisting of three square nodes (b_{k+2,1}^-, b_{k+2,2}^-, b_{k+2,3}^-). A red rectangular boundary encloses the left two branches of the tree, highlighting the reused nodes, while the rightmost branch extends outside this boundary, representing newly introduced or real nodes.

Visual modules consist of two types of nodes: circular nodes, which represent intermediate or hidden states, and square nodes, which denote terminal or observed states. All nodes are black-outlined with white fill. The topmost node, b_k, is a circle connected via three edges labeled a_k to three square nodes in the second layer: b_{k+1}^{-1}, b_{k+1}^{-2}, and b_{k+1}^{real}. These square nodes then connect downward to circular nodes in the third layer: b_{k+1,1}, b_{k+1,2}, and b_{k+1,real}, respectively, with edges labeled a_{k+1}. From these circular nodes, connections proceed to the bottom layer square nodes. Notably, the circular node b_{k+1,real} connects to both b_{k+2,1}^- and b_{k+2,2}^- via edges labeled a_{k+1}, indicating cross-branch connectivity. Additionally, the node b_{k+1,real} has an associated observation label o_{k+1,real} positioned to its right, suggesting it is linked to an observable output.

Connections are represented by solid black lines with no arrowheads, implying undirected or bidirectional relationships, though the hierarchical arrangement suggests a top-down flow. Each edge is annotated with a parameter label: a_k for connections from b_k to the second layer, and a_{k+1} for connections from the third layer to the fourth. The labels on the nodes follow a consistent notation: b with subscript indices denoting level and branch, with superscripts like -1, -2, or 'real' to distinguish between different branches or types. The red box emphasizes the reuse of the first two branches (b_{k+1}^{-1} and b_{k+1}^{-2}) within the same structural framework, contrasting them with the 'real' branch, which is treated separately and possibly represents a ground-truth or actual data path. The caption 'Visualization of reused nodes along with new nodes' confirms the purpose of the diagram: to show how certain node structures are reused across iterations or levels, while others are newly instantiated.
