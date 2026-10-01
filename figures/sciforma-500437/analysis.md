# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep Random Features for Scalable Interpolation of Spatiotemporal Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11350

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a spatiotemporal modeling framework using deep random features. The global layout is structured from left to right, beginning with input coordinates, progressing through a deep neural network module, and ending with output generation and loss computation. At the top center, an icon of a satellite labeled 'Observations' indicates external data sources feeding into the loss function via a dashed line.

On the left, within a dashed rectangular boundary labeled 'Input coordinates', two submodules are shown: 'Spatial' and 'Temporal'. The 'Spatial' submodule contains two representations: a blue parallelogram with a point labeled 'x' and subscript 'ℝ²', representing Euclidean space, and a green circle with a point labeled 's' and subscript '𝕊²', representing spherical space. The 'Temporal' submodule displays a black arrow labeled 't' pointing rightward with subscript 'ℝ', indicating continuous time. Solid lines connect both spatial and temporal inputs to the central processing unit.

The central component is a large rounded rectangle labeled 'Deep Random Features', depicted as a stack of multiple identical networks to represent ensembles. Inside, a multi-layered feedforward neural network is shown with gray circular nodes connected by black lines. Each layer has multiple neurons, and skip connections are indicated by dashed lines connecting earlier layers to later ones. The network includes labeled components: φ¹, Θ¹, φ², Θ², ..., φ^ℓ, Θ^ℓ, where φ denotes feature maps and Θ represents parameters. A highlighted yellow vertical section around φ^ℓ emphasizes the random feature mapping. Below this network, a dashed box labeled 'Skip connections' underscores the architectural design.

Outputs from the Deep Random Features module split into two streams: one represented by stacked blue blocks and the other by stacked red blocks. These streams are combined via a circular operator labeled 'C', symbolizing concatenation or fusion, leading to a final output block composed of purple stacked rectangles labeled 'Output'.

A circular node labeled 'Loss' with the mathematical symbol ℒ receives inputs from both the 'Observations' (via dashed line) and the 'Output' (via dashed line), indicating supervised training. The loss function is used to optimize the model.

In the bottom-right corner, a beige rounded rectangle provides the mathematical definition of the random feature mapping: φ^ℓ(x) = cos(ωx + b), where x ∈ ℝ^B, ω ~ p(ω), and b ~ U([0, 2π]). This specifies that the random features are generated using cosine functions with randomly sampled frequencies and biases.

The overall workflow is: spatiotemporal coordinates are fed into an ensemble of deep random feature networks, which process them through multiple layers with skip connections; the outputs are fused and produce a final prediction; this prediction is compared against observations to compute a loss, guiding model optimization.
