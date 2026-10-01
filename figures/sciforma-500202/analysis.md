# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Staged Deep Learning Approach to Spatial Refinement in 3D Temporal Atmospheric Transport — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10945

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a DualStage Temporal 3D UNet-SR model, divided into two parallel vertical pipelines: the Temporal Module on the left and the Spatial Refinement Module on the right. Both modules are structured as sequential stacks of neural network layers, connected by downward-pointing arrows indicating the flow of data from top to bottom.

[1] Global Layout and Structure:
The diagram is organized into two distinct columns under respective headings: 'Temporal Module' and 'Spatial Refinement Module'. Each column contains a vertically stacked sequence of rectangular blocks representing different layers or operations. The layout is symmetrical in structure but differs in specific components and layer parameters. The overall design suggests an encoder-decoder architecture with downsampling followed by upsampling stages, typical of UNet variants.

[2] Visual Modules and Attributes:
Each module consists of rectangular boxes with rounded corners, colored to differentiate layer types. Blue rectangles represent Conv3D layers; lime green rectangles denote MaxPool3D layers; dark purple rectangles indicate ConvLSTM or Skip Connection layers; and teal rectangles signify ConvTrans3D (transposed convolution) layers.

In the Temporal Module:
- The first layer is a Conv3D with kernel size (5, 7×16).
- This is followed by MaxPool3D, then Conv3D with (7×16, 7×32), another MaxPool3D, Conv3D with (7×32, 7×64), MaxPool3D, and finally a ConvLSTM with (7×64, 7×64).
- The decoder portion consists of three successive ConvTrans3D layers with decreasing spatial dimensions: (7×64, 7×32), (7×32, 7×16), and (7×16, 1).

In the Spatial Refinement Module:
- It begins with a Conv3D layer using kernel size (1, 7×16).
- Followed by MaxPool3D, then Conv3D with (7×16, 7×32), another MaxPool3D.
- A Skip Connection layer (dark purple) labeled 'Skip Conn.: (7×16, 7×32)' is present, suggesting a feature concatenation or addition from the temporal branch.
- The decoder comprises four ConvTrans3D layers: (7×32, 7×32), (7×32, 7×16), (7×16, 7×8), and finally (7×8, 1).

All layers include parenthetical notation specifying kernel sizes or output channel dimensions, formatted as (spatial_kernel_size, channel_size) or similar.

[3] Connections and Arrows:
Within each module, solid black arrows connect the layers sequentially from top to bottom, indicating forward propagation. There is no explicit cross-module connection shown except for the 'Skip Conn.' layer in the Spatial Refinement Module, which implies an external input from the Temporal Module at that stage. The arrows are simple, straight lines pointing downward, maintaining clarity of the processing order. No feedback loops or branching paths are depicted within either module.
