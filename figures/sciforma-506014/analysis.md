# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting Crack Nucleation and Propagation in Brittle Materials Using Deep Operator Networks with Diverse Trunk Architectures — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00016

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the DeepOKAN architecture, a hybrid neural network model composed of two main components: a Branch net implemented as a Multi-Layer Perceptron (MLP) and a Trunk net implemented as a Kolmogorov-Arnold Network (KAN). These two networks are arranged vertically, with the Branch net positioned at the top and the Trunk net at the bottom, each enclosed within a rounded rectangular boundary outlined in brown. The overall layout follows a left-to-right data flow, where inputs enter on the left side of each network and outputs are combined on the right to produce three final outputs.

In the Branch net (MLP), the input is labeled 'Initial crack size' and is represented by a blue-bordered rectangle on the far left. This input feeds into a fully connected feedforward neural network depicted as multiple layers of white circular nodes interconnected by thin blue lines. The network consists of several hidden layers, indicated by ellipses between layers to denote omitted intermediate layers. The final output layer is shown as a vertical green rectangle containing three brown circular nodes, representing the output vector from the MLP.

The Trunk net (KAN) receives spatial coordinates x and y as inputs, shown as white circular nodes on the far left. These inputs connect to a series of blue rectangular blocks, each containing a distinct curve (e.g., upward convex, downward concave, or sigmoid-like), symbolizing the learnable activation functions characteristic of KANs. These blocks are arranged in multiple layers, with connections between them forming a feedforward structure similar to the MLP but with non-linear activation units. The final output layer of the KAN is also a vertical green rectangle, but it is divided into three equal vertical segments, each containing multiple dark green circular nodes. This segmentation indicates that the output is partitioned into three distinct parts.

On the right side of the diagram, the outputs from both networks are combined through element-wise multiplication operations. Three circular nodes, each marked with a multiplication symbol '×', serve as fusion points. The output from the Branch net (the single green rectangle with three brown nodes) is split and fed into all three multiplication nodes. Each of the three segments from the KAN's output is connected to one of these multiplication nodes. Specifically, the top segment of the KAN output connects to the top multiplication node, which produces the damage field α; the middle segment connects to the middle multiplication node, producing the displacement component u; and the bottom segment connects to the bottom multiplication node, producing the displacement component v. The resulting outputs α, u, and v are labeled with corresponding Greek letters and variables, indicating the physical quantities predicted by the model.
