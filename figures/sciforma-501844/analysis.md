# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PowerMLP: An Efficient Version of KAN — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13571

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a PowerMLP layer integrated with a 2-layer KAN (Kolmogorov-Arnold Network). The global layout is a directed acyclic graph with three distinct layers arranged horizontally from left to right: an input layer, a hidden layer, and an output layer. Each layer consists of circular nodes representing variables or neurons, connected by directed edges indicating data flow. The first layer contains n input nodes labeled x₁ through xₙ, arranged vertically. The second layer has m+n hidden nodes labeled y₁ through y_{m+n}, also arranged vertically. The third layer contains m output nodes labeled z₁ through zₘ, similarly aligned vertically. The connections between layers are color-coded: blue arrows represent the first transformation, while red arrows represent the second transformation. The blue arrows connect each x_p to multiple y_q nodes for q from 1 to m, indicating an affine transformation defined by φ₁,q,p(x_p) = ω_{q,p}x_p + γ_{q,p}. For q from m+1 to m+n, the red arrows connect each x_p directly to y_{q} where q = p+m, meaning y_q = x_{q−m}, as specified in the caption. These red connections are sparse and diagonal, reflecting identity mapping. The second layer's outputs are then transformed into the third layer via red arrows connecting each y_q to multiple z_r nodes. The transformation is defined by φ₂,r,q(y_q) = δ_{r,q}σ_k(y_q) for q ≤ m, which applies a ReLU-k activation function σ_k to y_q when r=q, and φ₂,r,q(y_q) = α_{r,q−m}b(y_q) for q > m, which adds a basis function b(y_q) scaled by coefficient α_{r,q−m}. The output z_r is thus computed as z_r = σ_k(y_r) + Σ_{q=m+1}^{m+n} α_{r,q−m}b(y_q), combining the activated main component with contributions from the basis functions. The figure includes ellipses (...) between nodes to indicate omitted intermediate elements, preserving the structure’s scalability. The caption clarifies that δ_{ij} is the Kronecker delta, equaling 1 if i=j and 0 otherwise, and explains the mathematical formulation of both layers. The visual design uses consistent node shapes (circles), clear labeling, and color-coded arrows to distinguish the two types of transformations, enabling precise reconstruction of the network structure.
