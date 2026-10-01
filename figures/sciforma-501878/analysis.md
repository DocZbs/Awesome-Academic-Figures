# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unifying Attribution-Based Explanations Using Functional Decomposition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13623

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a hierarchical flowchart summarizing the derivation of various solution concepts in cooperative game theory, culminating in the Shapley value. The global layout is a top-down tree structure with five main rectangular nodes connected by directed arrows, each labeled with an axiom or property that defines the transition between levels. All nodes are black-bordered rounded rectangles with black text, and the diagram is vertically aligned with branching occurring at the third level.

At the top, the 'Linear' node contains the formula φ_i(v) = Σ_{S⊆N} α_S^i v(S), representing a general linear value function. A downward arrow labeled 'Null' connects it to the next node, 'Marginal Contribution', which displays φ_i(v) = Σ_{S⊆N\i} α_S^i Δ_i v(S), indicating a refinement where contributions are based on marginal changes when player i joins coalition S.

From 'Marginal Contribution', an arrow labeled 'Dummy Monotonicity' leads to the 'Probabilistic' node. This node states: ∀i ∈ N : {α_S^i | S ⊆ N \ i} forms a probability distribution, meaning the weights α_S^i for each player i must sum to one over all subsets S not containing i.

From 'Probabilistic', two branches diverge. The left branch, labeled 'Anonymity', leads to 'Cardinal-Probabilistic', defined by φ_i(v) = Σ_{S⊆N\i} α_{|S|}^i Δ_i v(S). Here, the weight depends only on the size of the coalition S, reflecting anonymity. The right branch, labeled 'Efficiency', leads to 'Random-Order', defined by φ_i^w(v) = Σ_{π∈Π(N)} w(π) Δ_i v(π^i), where the value is computed by averaging marginal contributions over all permutations π of players, weighted by w(π).

Both 'Cardinal-Probabilistic' and 'Random-Order' converge via downward arrows to the final node at the bottom: 'Shapley'. This node contains the well-known Shapley value formula: φ_i(v) = (1/n) Σ_{S⊆N\i} (n-1 choose |S|)^{-1} Δ_i v(S), which is derived under both anonymity and efficiency constraints. The diagram visually represents how the Shapley value emerges as the unique solution satisfying these axioms within the probabilistic framework.
