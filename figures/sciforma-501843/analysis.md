# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PowerMLP: An Efficient Version of KAN — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13571

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the structure of a 3-layer PowerMLP, presented as a vertical flow diagram. The global layout is linear and sequential, progressing from top to bottom, with each layer represented by a rectangular box connected by directed arrows indicating the forward pass of data. At the top, an input box labeled 'Input x₀' initiates the process. From this box, two paths emerge: one direct downward arrow and another that branches rightward before curving back to join the main path at a summation node. This summation node is depicted as a circle containing a plus sign (+), indicating element-wise addition. The first layer's computation is annotated with the expression σₖ(ω₀x₀ + γ₀), representing the k-th power of ReLU activation applied to an affine transformation of the input. Following this summation, the result is stored in a rectangular box labeled 'x₁'. A similar structure repeats for the second layer: from 'x₁', a downward arrow leads to another summation node, which receives an additional input from the right labeled α₂b(x₁), representing a basis function scaled by α₂. The computation for this layer is labeled σₖ(ω₁x₁ + γ₁). The output of this summation is stored in a box labeled 'x₂'. From 'x₂', a single downward arrow leads to the final layer, which performs only an affine transformation, denoted by the expression ω₂x₂ + γ₂. The result is placed in a final rectangular box labeled 'Output x₃'. All boxes are simple black-outlined rectangles with centered text. The arrows are solid black lines with arrowheads pointing downward or horizontally as needed. The basis function inputs (α₁b(x₀) and α₂b(x₁)) are shown as horizontal lines entering from the right side of the diagram, connecting to the respective summation nodes. The figure caption clarifies that the first two layers consist of three operations: (1) affine transformation, (2) k-th power of ReLU activation, and (3) addition with a basis function, while the last layer contains only an affine transformation.
