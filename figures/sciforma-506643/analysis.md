# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Explainable Neural Networks with Guarantees: A Sparse Estimation Approach — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02010

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic overview of a neural network architecture designed for adaptive feature selection, specifically illustrated for the case where two features are selected (K=2). The global layout is left-to-right, depicting a data flow from input features through parallel processing pathways to a final output. On the far left, a vertical column of circular nodes labeled x₁, x₂, x₃, ..., x_d represents the input features. These inputs are connected via dashed blue lines to two selected feature nodes, x₁ and x₃, indicating a soft routing mechanism determined by a softmax operation over the weights of the first hidden layer. This routing allows the network to dynamically assign importance to different features, with the solid lines representing the chosen pathways and dashed lines indicating suppressed or less active connections.

From each selected feature node (x₁ and x₃), the signal flows into one of two parallel neural network pathways, each enclosed in a green rounded rectangle. Each pathway consists of a multi-layered feedforward network with multiple hidden layers, represented by interconnected circular nodes. The first hidden layer of each pathway receives input from its corresponding selected feature, and subsequent layers are fully connected, with connections shown as solid blue lines. The outputs of these networks are denoted as f₁(x₁) and f₂(x₃), respectively, indicating learned non-linear mappings from the input features.

The outputs f₁(x₁) and f₂(x₃) are then fed into a summation node Σ, along with an additional scalar bias term β, which is represented as a standalone circular node. The summation node combines these three inputs linearly. The result of this summation is passed through a final activation function σ, depicted as a circular node labeled σ, which produces the final prediction output. The entire structure emphasizes modularity and adaptability: the two pathways operate independently but are combined at the end, enabling the model to learn distinct representations for different features and fuse them effectively. The visual attributes include blue circular nodes for all variables and operations, solid blue lines for active connections, dashed blue lines for inactive or suppressed routes, and green rounded rectangles to group the two parallel neural network modules. The figure’s design clearly conveys the concept of soft routing and adaptive feature selection through the combination of softmax-weighted selection and parallel processing.
