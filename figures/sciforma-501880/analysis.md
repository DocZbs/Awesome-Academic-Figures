# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unifying Attribution-Based Explanations Using Functional Decomposition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13623

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a hierarchical, tree-like diagram illustrating a unifying framework for removal-based attribution methods in machine learning or explainable AI. At the top, a gray rounded rectangle labeled 'Attribution method' contains the mathematical definition: m : F × 2^[d] → F, indicating a function that maps from a feature space F and subsets of features (2^[d]) to the feature space F. This top node branches downward into two main components: a gray rounded rectangle on the left labeled 'Cooperative game', defined as v_G^Φ : F × X → (2^[d] → R), and a red rounded rectangle on the right labeled 'Aggregation', defined as {α_S^T | S, T ⊆ [d]}, representing a set of aggregation coefficients over subsets of features. The 'Cooperative game' node further splits into two red rounded rectangles at the bottom: 'Behaviour', defined as Φ : F → F, and 'Decomposition', defined as G := {g_S : F → F | S ⊆ [d]}, which represents a family of functions indexed by subsets of features. The red nodes signify user-defined choices within the framework. The diagram visually conveys that an attribution method is determined by selecting a behaviour, a decomposition, and a set of aggregation coefficients. The behaviour and decomposition together define a cooperative game, and the attribution method corresponds to a value or interaction index derived from this game. The layout is strictly hierarchical, with arrows flowing from top to bottom, indicating a top-down derivation process. All nodes are rectangular with rounded corners; gray nodes denote derived or structural components, while red nodes denote user-specified parameters. Text inside each node is centered, using bold for titles and standard font for mathematical expressions. The overall structure emphasizes modularity and the compositional nature of attribution methods under this framework.
