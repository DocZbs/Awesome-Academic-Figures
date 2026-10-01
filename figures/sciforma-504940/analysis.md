# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLIP-GS: Unifying Vision-Language Representation with 3D Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19142

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a GS refinement block, which processes a geometric structure representation denoted as ĜS_p. The global layout is a horizontal flowchart with two parallel processing paths converging at the end. The top path begins with an input circle containing a blue abstract shape labeled ĜS_p, which feeds into a sequence of six rectangular modules arranged horizontally. These modules alternate between convolutional layers and normalization/activation layers: starting with a 1×3 convolution with stride s=1, followed by Batch Normalization (BN) and ReLU activation, then another 1×3 conv with s=1, BN & ReLU, then 1×3 conv with s=2, BN & ReLU, and finally another 1×3 conv with s=2, BN & ReLU. Each convolutional module is marked with a small flame icon above it, indicating a specific operation or feature. The sequence ends with a 'Global Pooling' module. The output of this top path is directed to a summation node (represented by a circle with a plus sign), which combines it with the output from the bottom path.

The bottom path starts from the same input ĜS_p, which branches downward to a label [P; C], representing point coordinates and features. This is connected via an arrow to a rectangular module labeled 'point cloud encoder', also marked with a flame icon. The output of the point cloud encoder is fed into the summation node.

The summation node outputs a final result, represented by a light blue rectangle labeled 'GS tokens', with the mathematical notation ĜS_t below it. The entire diagram uses black arrows to indicate data flow, with all modules being rounded rectangles with gray borders. Text within modules is centered and in black. The overall structure suggests a dual-path refinement process where one path applies sequential convolutions and pooling to the initial representation, while the other extracts features via a point cloud encoder, and both are fused to produce refined GS tokens.
