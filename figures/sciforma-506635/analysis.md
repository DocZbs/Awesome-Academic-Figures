# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Probing Equivariance and Symmetry Breaking in Convolutional Networks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01999

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel neural network blocks, each designed for processing data in a combined Euclidean and spherical domain, as indicated by the caption referencing the base space $\mathbb{R}^3 \times S^2$. The global layout consists of two vertically aligned, structurally similar blocks placed side-by-side, each containing a sequence of operations connected by directed arrows indicating the forward pass flow. Both blocks feature a residual connection, where the input is added to the output of the block via a summation node (represented as a circle with a plus sign), and the result is passed to the next stage.

Each block begins with a 'Spatial Conv [channel]' layer, depicted as a rectangular box with black borders and centered text. This is followed by a Layer Normalization (LN) operation, shown as a label placed between the layers without a box. In the left block, after LN, there is a 'Linear [4 x channel]' layer, then a GELU activation function (also labeled without a box), followed by another 'Linear [channel]' layer. The output of this final linear layer is summed with the original input via the residual connection.

The right block mirrors the left in structure but includes an additional 'Spherical Conv [channel]' layer immediately after the initial 'Spatial Conv [channel]' layer. This layer is also represented as a rectangular box with centered text. The subsequent operations—LN, 'Linear [4 x channel]', GELU, and 'Linear [channel]'—follow the same pattern as in the left block, culminating in the residual sum.

All connections are represented by solid black arrows pointing downward, indicating the direction of data flow. The residual connections are shown as horizontal lines looping from the top of each block to the summation node at the bottom. The visual modules are uniformly styled: all layers are rectangular boxes with black outlines and black text, while non-layer operations (LN, GELU) are written as plain labels between boxes. The figure uses no colors or shading; it is monochrome with clear, clean lines and consistent spacing between components. The overall design emphasizes modularity and parallelism, highlighting the difference between the two blocks being the inclusion of the Spherical Conv layer in the right block, which suggests a specialized handling of spherical features within the same spatial framework.
