# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Pharmacophore-guided de novo drug design with diffusion bridge — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19812

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of an EGCL (Edge-Gated Convolutional Layer) module, designed for graph-based molecular modeling. The global layout is a directed computational flowchart with two parallel processing streams converging at the bottom to produce updated node features. Inputs are arranged horizontally at the top: x_i^l (node feature vector), M_i^mol (molecular context), r_ij (relative position vector), a_ij^l (edge attribute), d_ij^l (distance), h_j^l (neighbor node feature), and h_i^l (current node feature). These inputs feed into a central computation block that generates updated features x_i^{l+1} and h_i^{l+1} at the bottom.

Visual modules are represented by rounded rectangles with light gray backgrounds and black borders. Key components include MLPs labeled φ_e, φ_x, φ_inf, and φ_h, which are multi-layer perceptrons performing nonlinear transformations. Intermediate variables m_ij and e_ij are shown as gray boxes, indicating computed edge messages and influence weights. Operations are denoted by circular symbols: ⊗ for element-wise multiplication, ⊕ for element-wise addition, and Σ for summation over all neighboring nodes. The inputs and outputs are also enclosed in gray boxes, with mathematical notation clearly labeled.

Connections are directed arrows indicating data flow. The edge attribute a_ij^l, distance d_ij^l, neighbor feature h_j^l, and current node feature h_i^l are combined via MLP φ_e to compute m_ij. This message m_ij is then split: one branch feeds into MLP φ_x, whose output is multiplied element-wise with r_ij, summed over neighbors (Σ), and then multiplied element-wise with M_i^mol before being added to x_i^l to yield x_i^{l+1}. The other branch from m_ij feeds into MLP φ_inf to compute e_ij, which is then multiplied element-wise with m_ij, summed over neighbors (Σ), passed through MLP φ_h, and finally added to h_i^l to produce h_i^{l+1}. The structure emphasizes gated message passing where edge messages are modulated by learned influence weights e_ij and contextualized by node and molecular features.
