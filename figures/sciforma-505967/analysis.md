# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning Epidemiological Dynamics via the Finite Expression Method — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21049

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two distinct binary tree structures used in the FEX implementation, designed to represent mathematical expressions through hierarchical operator trees. The global layout is divided into two main sections: the top section defines the two tree types, while the bottom section demonstrates the progression of tree complexity from basic to deeper structures.

In the top section, two gray rounded rectangles labeled 'Type 1' and 'Type 2' depict different configurations of binary tree structures. A legend at the top indicates that squares represent unary operators and circles represent binary operators. In Type 1, a binary operator (circle) is at the root, with two unary operators (squares) as children; an additional unary operator sits atop the root, forming a three-level structure. In Type 2, a binary operator (circle) is at the root, with one child being a binary operator (circle) and the other a unary operator (square); this creates a more asymmetric structure with varying depths.

The bottom section provides a detailed breakdown of tree construction, starting with a 'Basic tree' box containing two examples: one with a unary operator u₁ and another with a binary operator b₁. Each example includes a visual tree, its corresponding mathematical expression (e.g., αu₁(i₀)+β or b₁(i₀₁,i₀₂)), and its depth L=1. To the right, a sequence of increasingly complex trees is shown, each with its own label (b₂, u₃, b₄, b₆), mathematical expression, and depth (L=2, L=3, L=4, L=6 respectively). These trees demonstrate how operators combine inputs and outputs recursively: for instance, b₂ takes outputs o₁₁ and o₁₂ from lower nodes, while b₆ combines outputs o₅₁ and o₅₂ from two large subtrees. Inputs are denoted by i₀, i₀₁, etc., outputs by o₁, o₁₁, etc., coefficients by α, and constants by β. All connections are directed upward via black arrows, indicating data flow from inputs to outputs through the operators. The figure’s caption explicitly states it illustrates two tree structures used in the FEX implementation, emphasizing their role in representing mathematical expressions hierarchically.
