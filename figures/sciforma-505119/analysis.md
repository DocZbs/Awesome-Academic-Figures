# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MNet-SAt: A Multiscale Network with Spatial-enhanced Attention for Segmentation of Polyps in Colonoscopy — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19464

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of Channel-Enhanced Atrous Spatial Pyramid Pooling (CE-ASPP), a deep learning module designed for multi-scale feature extraction and fusion. The overall layout is structured into four sequential stages: Channel Compression, Multi-Scale Feature Extraction, Multi-Scale Feature Fusion, and Inter-Channel Feature Fusion, arranged horizontally from left to right with dashed arrows indicating the flow direction.

In the first stage, Channel Compression, an input feature map with dimensions c×w×h (channel, width, height) is processed by a 1×1 convolution followed by Group Normalization (GN) and ReLU activation, reducing the channel dimension to c/4 while preserving spatial dimensions w and h. This compressed feature map is represented as a 3D block with c/4 layers, each colored differently to indicate distinct channels.

The second stage, Multi-Scale Feature Extraction, branches out from the compressed feature map into five parallel paths. Four of these paths apply atrous convolutions with increasing dilation rates (d_r = 1, 4, 8, 12) using 3×3 convolutional kernels, each followed by GN and ReLU. These are visually marked with blue squares in the legend. The fifth path uses a 2×2 max-pooling operation followed by a 1×1 convolution, GN, and ReLU, indicated by a purple square in the legend. Each extracted feature map is shown as a 2D grid with varying numbers of red dots representing receptive field expansion due to dilation; the grids are color-coded with greenish hues and have different thicknesses to denote varying channel depths.

The third stage, Multi-Scale Feature Fusion, combines the outputs from the five parallel paths via element-wise addition, symbolized by a circular plus sign. The resulting fused feature map is then passed through a 1×1 convolution (orange square in legend) followed by GN and ReLU, producing a single output feature map.

The final stage, Inter-Channel Feature Fusion, integrates this output with the original uncompressed input feature map (c×w×h) via element-wise multiplication (circle with dot) and then element-wise addition (square with plus), forming the final enhanced feature representation. The original input is connected directly to this stage via a skip connection.

The legend at the bottom clarifies symbols: orange square denotes 1×1 Conv → GN → ReLU; blue square denotes 3×3 Conv → GN → ReLU; purple square denotes Max → 1×1 Conv → GN → ReLU; ⊕ represents concatenation; ⊙ represents element-wise multiplication; ⊞ represents element-wise addition. Additionally, the legend defines h as height, w as width, c as channel, and d_r as dilation rate. All visual elements are rendered in 3D perspective with distinct colors and textures to differentiate components, and connections are shown as solid black lines with arrows indicating data flow.
