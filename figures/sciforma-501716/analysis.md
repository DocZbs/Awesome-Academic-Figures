# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MaskHand: Generative Masked Modeling for Robust Hand Mesh Reconstruction in the Wild — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13393

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the training phase of MaskHand, a framework composed of two main components: VQ-MANO and a Context-Guided Masked Transformer. The global layout is divided into two parts: (a) VQ-MANO on the left, and (b) the Context-Guided Masked Transformer on the right, separated by a vertical dashed line. A legend at the top defines visual elements: pink for Mano Pose, yellow for Shape, light blue for Camera, cyan for 2D Pose, black for Mask, a cross symbol for Deformable Cross-Attention, and a snowflake for Frozen Network.

In part (a), VQ-MANO, a 3D hand pose θ is encoded by a VQ Encoder into a sequence of discrete latent codes ŷ₁, ŷ₂, ..., ŷₘ, represented as gray 3D blocks. These codes are quantized from a Mano Pose Codebook (CB), depicted as a vertical stack of pink rectangles labeled 1 to K, with a book icon indicating it's a codebook. The quantization process maps continuous latent vectors to discrete indices. The reverse process, dequantization, converts the discrete indices back into continuous latent vectors z₁, z₂, ..., zₖ, shown as pink 3D blocks, which are then fed into a VQ Decoder to reconstruct the original pose θ'.

Part (b) shows the Context-Guided Masked Transformer. An input image of a hand holding an object is processed by an Image Encoder, producing feature maps. These features are upsampled and passed to an X-Attention Head, which combines them with a query from a 2D Pose Estimator via Deformable Cross-Attention (indicated by a cross symbol). The 2D Pose Estimator outputs a 2D pose, shown as a cyan block, which is further processed by a Graph Convolutional Network (GCN) to generate a graph structure. This graph, along with the 2D pose, is used to guide a VQ Encoder (marked as frozen with a snowflake) to produce a token sequence θ, where some tokens are masked (black blocks). The masked sequence is then processed by a Context-Infused Masked Synthesizer, which uses expectation-approximated sampling to predict the most likely token indices (e.g., 2, 1, 4, 6, 3) with associated confidence scores (e.g., 0.9, 0.7, 0.9, 0.8, 0.9). The predicted tokens are combined with the context from the X-Attention Head and passed through a Graph-based Anatomical Pose Refinement module. The refined token sequence is then decoded by a VQ Decoder (also marked as frozen) using the Mano Pose Codebook (CB) to reconstruct the final pose θ'. The connections between modules are indicated by arrows, showing the flow of data: from the input image and 2D pose to the encoder, then through attention and refinement stages, and finally to the decoder. The diagram emphasizes the conditional generation of discrete pose tokens based on visual and structural context.
