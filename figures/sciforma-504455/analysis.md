# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Data-Driven Self-Supervised Graph Representation Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18316

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct architectural configurations (labeled (a), (b), and (c)) for a graph-based self-supervised learning framework, each illustrating a different strategy for data augmentation prior to encoding via a Graph Neural Network (GNN). The overall layout is divided into three horizontal panels, each representing one configuration, with vertical columns indicating stages: 'The Data to be Augmented', 'Learnable Topology/Feature Augmenter', 'Augmentation Space', 'GNN Encoder', and 'Latent Space'. Each panel flows left to right, showing the transformation pipeline.

In panel (a), labeled 'Learnable Feature Augmenter', the input consists solely of node features X, represented as a grid of colored squares. Two separate Feed-Forward Networks (FFN1 and FFN2), parameterized by fΘ1 and fΘ2 respectively, are applied to X to produce two augmented feature matrices X1 and X2. These are shown as differently colored grids. The adjacency matrix A remains unchanged and is depicted as a grayscale checkerboard pattern, blurred to indicate it is not augmented. The augmented views G1 = (A, X1) and G2 = (A, X2) are then fed into a shared GNN Encoder composed of multiple GNN Layers (parameterized by hΘ), producing latent representations Z1 and Z2, shown as color-coded grids.

Panel (b) illustrates 'Learnable Topology Augmenter'. Here, the input includes both the adjacency matrix A (checkerboard) and node features X (colored grid). The topology augmenter applies two transformations: one is an identity mapping tΦ(A) which leaves A unchanged (shown as the original A), and the other is a learned transformation tΦ'(A) implemented via a GNN-based module with multiple GNN Layers and a Pairwise Similarity (Sim) component, producing a modified adjacency matrix A'. The node features X remain unchanged and are shown as the original colored grid. The resulting augmented views are G1 = (A', X) and G2 = (A, X). These views are processed by the same shared GNN Encoder (hΘ) to yield latent representations Z1 and Z2.

Panel (c) combines both feature and topology augmentation. The input again includes A and X. The topology augmenter applies the learned transformation tΦ'(A) to produce A', while the feature augmenter applies two FFNs (fΘ1 and fΘ2) to X to produce X1 and X2. This creates two fully augmented views: G1 = (A', X1) and G2 = (A, X2). Both views are passed through the shared GNN Encoder (hΘ) to generate latent representations Z1 and Z2.

Throughout all panels, arrows indicate the flow of data. The GNN Encoder is consistently depicted as a stack of rectangular boxes labeled 'GNN Layer' with ellipsis between them, indicating multiple layers. The latent space outputs Z1 and Z2 are shown as grids with varied colors, suggesting diverse embeddings. The visual distinction between augmented and non-augmented components is made by blurring the unaffected data (e.g., A in panel (a), X in panel (b)). The figure emphasizes that the augmentation strategies differ across panels but converge on a common GNN encoder for representation learning.
