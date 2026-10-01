# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

OccScene: Semantic Occupancy-based Cross-task Mutual Learning for 3D Scene Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11183

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Mamba-based Dual Alignment (MDA) module designed for occupancy-based constraint conditions. The overall layout is divided into three main sections: an input visualization on the left, two primary processing stages in the center—Cross-view Camera Encoding and Sequential Feature Encoding—and a detailed breakdown of the Bidirectional Mamba Block on the right. The entire structure is organized within dashed rectangular boundaries to delineate functional modules.

On the far left, the input consists of a sequence of four consecutive street-view images stacked vertically along the Temporal Axis, representing frames T₁ through T₄. Above these images is a color-coded 2D occupancy map with a Depth Axis indicated horizontally, showing segmented regions in various colors (yellow, green, purple, blue), with small camera icons indicating viewpoints. This visualizes the spatial and temporal inputs to the system.

The first major module, Cross-view Camera Encoding, begins by taking the camera parameters P (represented as a geometric transformation between two camera poses) and feeding them into a Parameter Encoder, which outputs a learned parameter vector P̂. Simultaneously, the 3D occupancy tensor X_occ (visualized as a blue grid cube) undergoes interpolation and is processed by a 3D Deform Conv layer. The output from the Parameter Encoder and the 3D Deform Conv are combined via element-wise multiplication (denoted by ⊗), producing the refined occupancy feature X̂_occ. This module integrates camera trajectory information with semantic occupancy data.

The second major module, Sequential Feature Encoding, receives X̂_occ and processes it through a 3D Patch Embedding Layer, which divides the 3D feature into smaller patches. These patches are then stacked across time steps T₁ to T₄ in a Patch Stacking operation. The resulting sequence is fed into a Bidirectional Mamba Block, which performs context-aware sequential modeling. Following this, a Zero-Conv layer processes the output, denoted as X̂_mam. Additionally, a separate latent feature sequence L (shown as a stack of four layers labeled T₁ to T₄) is passed through another 3D Patch Embedding Layer and then fused with X̂_mam via element-wise addition, producing the aggregated feature L_agg.

The rightmost section details the internal structure of the Bidirectional Mamba Block. It consists of two parallel SSM (State Space Model) blocks, each preceded by a δ (delta) node and a Depthwise Convolution (Dw-Conv) layer. The Dw-Conv layers receive inputs from Linear layers, which are connected to the previous stage. Each SSM block also receives a flip signal, indicating bidirectional processing. The outputs of both SSM blocks are combined via element-wise addition, followed by a final Linear layer that produces the output of the block. The connections are shown with solid arrows indicating forward flow, and dashed lines indicate auxiliary or feedback paths, such as the flip signals.

All modules are represented using standardized shapes: rectangles for processing layers, circles for operations like δ, and trapezoids for Linear layers. Colors are used consistently: light gray for general layers, light blue for embedding and stacking layers, and white for input/output tensors. Text labels are placed adjacent to each component, clearly identifying their function. The diagram uses mathematical notation such as X̂_occ, L_agg, and δ to denote intermediate representations and operations.
