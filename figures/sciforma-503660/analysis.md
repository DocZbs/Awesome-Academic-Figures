# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AV-DTEC: Self-Supervised Audio-Visual Fusion for Drone Trajectory Estimation and Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16928

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural design of the TMamba and SMamba blocks, which are modular components used in a neural network framework. The entire block is enclosed within a dashed blue rectangular boundary labeled 'L×' at the top-right corner, indicating that this structure may be repeated multiple times in a larger model. The layout follows a left-to-right data flow, beginning with an input that enters from the left side.

The global structure begins with a normalization layer, represented by a light blue rounded rectangle labeled 'Norm'. This is followed by a trapezoidal-shaped module labeled 'Linear', which serves as a linear transformation. From this Linear layer, the signal splits into two parallel pathways.

The upper pathway proceeds through a sequence of three modules: first, a light blue rounded rectangle labeled 'Conv2d' (2D convolution), then another labeled 'Silu' (SiLU activation function), and finally a dashed-bordered light blue rounded rectangle labeled 'SSM' (State Space Model). The SSM module's dashed border suggests it may represent a specialized or optional component within the architecture.

The lower pathway branches directly from the output of the initial 'Linear' layer and passes through a single 'Silu' activation function, also depicted as a light blue rounded rectangle.

The outputs of both pathways converge at a circular node with a multiplication symbol (⊗), which represents element-wise multiplication, as indicated in the legend below the main diagram. This operation combines the processed features from the two paths.

The result of the element-wise multiplication is fed into a second trapezoidal 'Linear' module, which performs another linear transformation. The output of this second Linear layer is then combined with the original normalized input via an element-wise addition operation, symbolized by a circle with a plus sign (+). This skip connection is a common technique in deep learning to facilitate gradient flow and improve training stability.

At the bottom of the figure, a legend clarifies the symbols used: the circle with a plus sign denotes 'Element-Wise Addition', and the circle with a multiplication sign denotes 'Element-Wise Multiplication'. All modules are rendered in light blue with black text, and connections are shown as solid black arrows indicating the direction of data flow. The overall design emphasizes modularity, feature fusion via element-wise operations, and residual connections.
