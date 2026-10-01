# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

High-Rank Irreducible Cartesian Tensor Decomposition and Bases of Equivariant Spaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18263

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the construction of a decomposition matrix through a hierarchical process involving path matrices derived from a parentage scheme. The global layout is divided into two main sections: the top section displays a triangular lattice structure representing the parentage scheme, while the bottom section shows the final decomposition matrix formed by multiplying a normalized path matrix with its transpose.

In the top-left, a triangular grid is plotted with axes labeled 'rank' (horizontal, from 0 to 6) and 'weight' (vertical, from 0 to 6). Each node in the grid is a circle containing an integer, representing the number of paths to that node. The nodes are connected by black lines forming a lattice, with red lines highlighting specific paths: one from rank 0, weight 0 to rank 2, weight 2; another from rank 2, weight 2 to rank 4, weight 4; and a third from rank 4, weight 4 to rank 6, weight 6. These red paths correspond to the sequence of contractions used to build the path matrices.

To the right of the lattice, a vertical flowchart details the sequential construction of path matrices. Starting from the top, the first node is labeled '(0)-path matrix (0 ⊗ 0, 0)', followed by '(0 → 1)-path matrix (0 ⊗ 1, 1)', then '(0 → 1 → 2)-path matrix (1 ⊗ 1, 2)', and so on, down to '(0 → 1 → 2 → ... → 1 → 2 → 3 → 2)-path matrix (1⊗⁶, 2)'. Each step is connected by a downward arrow with a small circle symbol (⊙), indicating contraction or tensor operation. From each path matrix, a horizontal arrow points to a corresponding CG tensor: (1,0,1)-CG tensor, (1,1,2)-CG tensor, (1,2,1)-CG tensor, and (1,1,2)-CG tensor respectively. The sequence continues with a dotted line leading to the final path matrix.

At the bottom, the final step shows the normalized version of the last path matrix being multiplied by its transpose to form the decomposition matrix. A blue arrow labeled 'normalized' points from the final path matrix to a tall green rectangle labeled '2×2 + 1', which represents the left factor. Another blue arrow labeled 'transpose' points from the same path matrix to a wide green rectangle, representing the right factor. These two green rectangles are shown multiplied together (indicated by a dot between them) to produce the full decomposition matrix, which spans the width of the bottom section and is labeled accordingly. The entire process reflects a tensor network contraction scheme where path matrices are built incrementally using Clebsch-Gordan (CG) tensors, culminating in a low-rank decomposition.
