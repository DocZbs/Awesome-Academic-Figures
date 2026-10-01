# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NoiseHGNN: Synthesized Similarity Graph-Based Neural Network For Noised Heterogeneous Graph Representation Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18267

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall framework of a similarity-aware heterogeneous graph neural network (HGNN) model designed for robust learning on noisy heterogeneous graphs. The global layout is divided into two parallel processing streams: one for the original noised heterogeneous graph G and another for a synthesized similarity graph G^θ, both converging into shared similarity-aware HGNN modules and classifiers for joint optimization.

On the left side, the input is a noised heterogeneous graph G, depicted with green circular nodes (P1, P2, P3) representing one type of entity and blue diamond-shaped nodes (A1, A2, A3) representing another. An error link between P1 and A2 is marked in red. This graph is processed through a 'Graph Augment' module (Eq. 6), producing augmented adjacency matrix Â and feature matrix Z. Simultaneously, the graph's features X and adjacency A are fed into a 'Graph Synthesizer' (Eqs. 1–5), which generates a 'Synthesized Similarity Graph' G^θ. This synthesized graph is visually represented with dashed edges indicating inferred or learned similarity relationships, including new connections like between P1 and P3, and A1 and A3. This synthesized graph also undergoes 'Graph Augment' (Eq. 6) to produce Â^θ and Z.

Both augmented representations feed into identical 'Similarity-Awared HGNN' modules (Eqs. 7–10), shown as light green rectangles. These modules share parameters, indicated by 'shared' arrows pointing from each HGNN to the other. Each HGNN outputs a hidden representation (Ĥ or Ĥ^θ), which is passed to a corresponding 'Classifier' (gray rectangle). The classifier produces predicted probability outputs (Ŷ or Ŷ^θ), shown as matrices with decimal values for each node (e.g., 0.1, 0.2, 0.6, 0.1 for P1 in Ŷ). These predictions are compared against ground truth labels Y (a binary matrix, e.g., 0 0 1 0 for P1), using loss functions ℒ_o and ℒ_s (Eq. 12) to compute classification losses.

Additionally, the HGNNs generate metapath-based adjacency matrices A^φ and Â^θ via Eq. (13), which are visualized as small graphs on the right. For example, A^φ shows solid edges between P1-P2 and P2-P3, while Â^θ shows dashed edges between P1-P2 and P2-P3, reflecting the learned structure. These generated graphs are compared to a target graph (shown at bottom right) using a graph reconstruction loss ℒ_g (Eq. 14), indicated by a red dashed arrow connecting the generated graph to the target. The entire framework is optimized jointly using these multiple losses to improve robustness and accuracy.
