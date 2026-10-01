# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep learning joint extremes of metocean variables using the SPAR model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15808

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic diagram of a multi-layered perceptron (MLP) neural network architecture designed to model Gaussian Process (GP) parameters. The overall layout is horizontal, progressing from left to right across four distinct layers: Input layer, Hidden layer 1, Hidden layer 2, and Output layer. Each layer is labeled above its respective nodes with colored text—green for 'Input layer', blue for both hidden layers, and red for 'Output layer'.

The Input layer consists of three circular nodes, each filled with a light green color and labeled with input variables w₁, w₂, and w₃. These represent components of the input vector w = (w₁, w₂, ..., w_d), as described in the caption.

Hidden layer 1 contains four circular nodes, filled with light blue, labeled h₁⁽¹⁾, h₂⁽¹⁾, h₃⁽¹⁾, and h₄⁽¹⁾. These nodes receive full connectivity from all input nodes via black straight lines with arrowheads pointing toward the hidden nodes, indicating forward propagation.

Hidden layer 2 also has four circular nodes, similarly styled in light blue and labeled h₁⁽²⁾, h₂⁽²⁾, h₃⁽²⁾, and h₄⁽²⁾. Each node in this layer receives connections from all nodes in Hidden layer 1, maintaining full connectivity between consecutive layers.

The Output layer comprises two circular nodes, filled with light pink, labeled ν(w) and ξ(w). These represent the GP parameter functions predicted by the network. All four nodes in Hidden layer 2 connect fully to both output nodes, again using black lines with arrowheads pointing toward the outputs.

All connections between layers are represented by thin black lines with small arrowheads at the receiving end, indicating the direction of information flow. The diagram uses consistent node shapes (circles) and uniform spacing within each layer, emphasizing the feedforward nature of the MLP. The caption clarifies that this is an example schematic with L=2 hidden layers, mapping input angles w to GP parameter functions (ν(w), ξ(w)).
