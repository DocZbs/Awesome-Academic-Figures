# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MaskHand: Generative Masked Modeling for Robust Hand Mesh Reconstruction in the Wild — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13393

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a two-stage deep learning framework for precise mesh reconstruction, comprising the Graph-based Anatomical Pose Refinement (GAPR) module and the Context-Guided Masked Transformer. The global layout is left-to-right, with GAPR on the left and the Context-Guided Masked Transformer on the right, connected by data flow arrows. A legend at the top indicates color coding: light red for Mano Pose, light blue for 2D Pose, black for Mask, and a snowflake icon for Frozen Network.

On the far left, the Graph Transformer Block is enclosed in a rounded gray box. It receives input Qc and processes it through a Graph Convolutional Network (GCN), which splits into two parallel paths: one feeding into a Convolutional layer (Conv) and the other into a Multi-Head Attention (MHA) layer. Both outputs are summed via a circular plus symbol, then passed to a Squeeze-and-Excitation (SE) block. The SE output is added back to the original GCN output via another summation, forming the residual connection. This block outputs refined features that feed into the GAPR module.

The GAPR module is depicted as a larger rounded gray box containing multiple stacked Graph Transformer blocks, each labeled 'Graph Transformer Learnable Adjacency Matrix' and shaded light red. These blocks are repeated xG times, indicating a stack of G identical layers. Their outputs are fused together via a vertical 'Fusion' block, producing an output labeled QGGPM. Below this structure, a row labeled 'Pose Queries' shows a sequence of colored boxes: light blue (2D Pose), black (Mask), followed by three light red boxes labeled '1', '6', '3', collectively denoted as Qc. This indicates that the queries are composed of 2D pose features, masked regions, and anatomical pose indices (likely corresponding to hand joints or parts). Dashed lines connect the Graph Transformer Block on the left to the GAPR module, suggesting that the refined features from the Graph Transformer Block are used to initialize or guide the GAPR process.

The output QGGPM from GAPR is fed into the Context-Guided Masked Transformer on the right, which is also enclosed in a rounded gray box. This module consists of N stacked transformer layers (indicated by xN and ellipsis). Each layer contains three components in sequence: Self Attention, Cross Attention, and Feed Forward Network, all shaded light blue. The QGGPM signal serves as both the query and key for the Self Attention mechanism, while the Cross Attention layer likely integrates additional contextual information (not explicitly shown but implied by 'Context-Guided'). The final output of this transformer stack is passed upward, presumably for mesh reconstruction or further processing.

Arrows indicate the data flow: from the Graph Transformer Block to GAPR, from GAPR’s Fusion block to the Context-Guided Masked Transformer, and from the transformer’s final layer to the output. The dashed lines from the Graph Transformer Block to GAPR suggest a supervisory or initialization signal rather than direct feature propagation. The entire pipeline emphasizes the integration of anatomical pose dependencies (via learnable adjacency matrices in GAPR) and contextual cues (via the masked transformer) to achieve accurate 3D mesh reconstruction.
