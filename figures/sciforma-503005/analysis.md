# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Shape Tokenization via Latent Flow Matching — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15618

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a flow-matching velocity estimator used for shape tokenization. The overall structure is a single block repeated three times, as indicated by the '×3' notation on the right side of the main module. The block processes three primary inputs: position-encoded flow matching time (denoted as d''), position-encoded point (1, d'), and shape tokens (k, d). These inputs are processed through a series of operations including linear transformations, layer normalization, cross-attention, and multi-layer perceptrons (MLPs), with gating and scaling mechanisms applied at intermediate stages.

The global layout consists of a large rectangular box enclosing the core processing block. Within this box, the flow proceeds from bottom to top. On the left, the position-encoded flow matching time (d'') passes through a stack of three modules: two linear layers separated by a SiLU activation function. This stack outputs two signals labeled 'shift 1 & scale 1' and 'gating 1', which are used to modulate subsequent layers. Similarly, another set of signals, 'shift 2 & scale 2' and 'gating 2', are derived from the same input stack but are applied later in the block.

In the center, the position-encoded point (1, d') first goes through a linear layer, then a layer normalization (layernorm) module. The output of this layernorm feeds into a cross-attention block, which also receives 'key, value' inputs from the shape tokens (k, d). The cross-attention block is highlighted with a light green background and labeled 'cross attention block'. Its output is passed to another layernorm, followed by an MLP composed of linear -> GELU -> linear layers. The MLP's output is then combined with the original layernorm output via element-wise addition (+) and multiplication (×) operations, where the multiplication is gated by 'gating 1' and scaled by 'shift 1 & scale 1'.

This combined result is further processed through another layernorm, then another MLP, and again combined via + and × operations, this time using 'gating 2' and 'shift 2 & scale 2'. The final output of this sequence is passed through a linear layer to produce the velocity output, specified as (1, 3xyz), indicating a 3D vector per input point.

Connections are shown as directed arrows. The position-encoded point flows upward through linear, layernorm, and cross-attention components. The shape tokens provide key-value pairs to the cross-attention block. The flow matching time input branches into multiple control signals (shift, scale, gating) that modulate the attention and MLP layers. The outputs of the two main processing paths (after the first and second layernorms) are combined using residual connections with gating and scaling, forming a hierarchical refinement process. The entire block is repeated three times, as noted by the '×3' annotation, suggesting a deeper network structure. The caption notes that the model uses 512-dimensional features, 8-head attention, and MLPs that expand and contract dimensions by 4x. The total trainable parameters are 8.72M for Objaverse and 8.87M for ShapeNet. A variant for neural rendering omits the adaptive layer norm and uses standard layer norm, with 4 such blocks.
