# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GaussTR: Foundation Model-Aligned Gaussian Transformer for Self-Supervised 3D Spatial Understanding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13193

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architectural overview of the GaussTR framework, which is designed for 3D scene representation and occupancy prediction using sparse Gaussian primitives. The global layout is divided into two main phases: training (indicated by red arrows) and inference (indicated by blue arrows), with a central processing pipeline that integrates multi-view image inputs, foundation model features, and Gaussian-based 3D representation.

In the top-left, multi-view images are fed into a group of foundation models labeled 'CLIP' and 'SAM', both marked with snowflake icons indicating pre-trained models. These models extract three types of outputs: depth maps (labeled 'Depth D'), segmentation masks ('Seg S'), and feature maps ('Features F'). These outputs are used during training for supervision.

Below this, a set of Gaussian queries (represented as colored spheres labeled q_G) are processed through a stack of N 'GaussTR Layer' modules. Each layer consists of three sequential components: 'Deformable Cross-Attn', 'Self-Attn', and 'Gaussian Head'. The Deformable Cross-Attn module takes input from the foundation model features F, while the Self-Attn module processes the internal Gaussian representations. The Gaussian Head generates the final Gaussian parameters, resulting in a set of 3D Gaussians G, depicted as colored ellipsoids.

During training, these Gaussians are rendered back into 2D views via a 'Splatting' module, producing 'Rendered Depth D̂', 'Rendered Features F̂', and 'Predicted Seg Ŝ'. These rendered outputs are compared against the ground-truth depth, features, and segmentation from the foundation models through a dashed red arrow labeled 'Supervision', forming a self-supervised training loop.

For inference, the Gaussians G are processed differently. Textual categories such as 'car', 'road', 'pedestrian', etc., are embedded using a 'CLIP Text' module (also marked with a snowflake icon). The Gaussian features are then fused with these text embeddings via an element-wise multiplication (denoted by a circle with an 'x' inside). This fusion produces semantic logits, which are subsequently voxelized to generate a final 'Occupancy Prediction'—a 3D volumetric output where each voxel is assigned a color corresponding to a semantic class.

The diagram uses distinct arrow colors to differentiate between training-only (red) and inference-only (blue) pathways. The overall structure emphasizes a dual-purpose design: learning accurate 3D representations from 2D multi-view data during training, and efficiently producing semantically rich 3D occupancy predictions at inference time.
