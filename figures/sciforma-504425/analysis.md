# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

High-Rank Irreducible Cartesian Tensor Decomposition and Bases of Equivariant Spaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18263

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a generalized parentage scheme for decomposing tensor product representations in representation theory, specifically for the case ((2⊗2⊗2), p = -1) ⊕ ((1⊗3), p = -1) → ((3⊗4), p = -1). The diagram is structured into four horizontal sections separated by dashed lines, each representing a stage in the algorithmic process.

In the top section, three weight diagrams are shown side-by-side: on the left, a complex diagram for (2⊗2⊗2) with nodes labeled 1–5 and weights from -2 to 6; in the middle, a simpler diagram for (1⊗3) with three nodes at weights 2, 3, and 4; and on the right, a diagram for (3⊗4) with seven nodes at weights 1 through 7. These represent the initial irreducible representations involved in the decomposition.

The second section demonstrates the addition of bridge numbers to the weight diagrams. On the left, two vertical lists of integers (representing weights or multiplicities) are added together, resulting in a new list where certain entries are highlighted in red circles. This sum is then used to determine valid paths in the (2⊗2⊗2) diagram, where one path is marked in red, indicating a selected route from weight 2 to weight 6 via intermediate weights 4 and 6. The corresponding (1⊗3) and (3⊗4) diagrams remain unchanged but are aligned vertically to show the mapping.

The third section introduces Algorithm 2, which constructs path matrices. It shows multiple path matrices such as (4 → 3 6)–path matrix and (2 → 2 4 → 2 6)–path matrix^T, each associated with a transformation from (2⊗2⊗2) to (3⊗4). These matrices are generated using Algorithm 3, as indicated by an arrow labeled 'construct path matrices by Algorithm 3'. The path matrices are organized hierarchically, with weights w_i, w_{i+1}, etc., labeling different branches.

The bottom section details Algorithm 4, which further processes these path matrices. A 36-dimensional vector is formed by stacking several path matrices (e.g., (2 → 2 4 → 2 4), (2 → 2 3 → 2 4), etc.), which is then reshaped into a 9×4 matrix. This matrix is multiplied by a vector v, resulting in a 9-dimensional vector. The final output is identified as a (4 → 3 4)–path matrix belonging to ((3⊗4), p = -1), completing the decomposition process. The entire workflow emphasizes the construction and manipulation of path matrices to find a basis for the target representation, with special attention to marking bridge numbers to distinguish valid paths.
