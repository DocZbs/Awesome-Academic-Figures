# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Advanced Knowledge Transfer: Refined Feature Distillation for Zero-Shot Quantization in Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19125

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-step methodology for Advanced Knowledge Transfer (AKT), designed for efficient model quantization while preserving performance. The overall layout is divided into three vertically aligned, dashed-bordered sections labeled Step 1: Dual-Information Decomposition, Step 2: Refined Feature Distillation, and Step 3: Advanced Knowledge Transfer, arranged from left to right.

In Step 1, a sequence of blue 3D blocks representing feature maps (f₁, f₂, ..., fₙ) from a neural network are shown. Each feature map is decomposed into two components: Spatial Attention (depicted as a cube with diagonal lines) and Channel Attention (a cube with colored layers). These components are derived from the original feature map fₙ, which is shown as a central blue cube. The decomposition process is visually represented by arrows pointing from the feature maps to the attention modules.

Step 2 focuses on Refined Feature Distillation. It compares full-precision feature maps αₙ (orange cubes) with quantized feature maps βₙ (green cubes). The full-precision map is shown being processed through a transformation block (a transparent cube with diagonal lines) to produce a refined representation. Similarly, the quantized map undergoes a similar transformation. Two loss terms are computed: L_sp (spatial loss, indicated by a blue arrow) and L_ch (channel loss, indicated by a green arrow), both comparing the transformed versions of αₙ and βₙ. These losses are summed to form L_RFD, which is represented by a large gray downward arrow leading to the label 'L_RFD'.

Step 3 illustrates the final knowledge transfer phase. An input x (a stack of black squares) is fed into both a Full Precision Model (32bit, shown as brown blocks) and a Quantized Model (3-5bit, shown as green blocks). The full-precision model produces intermediate feature maps α₁, α₂, ..., αₙ, while the quantized model produces corresponding β₁, β₂, ..., βₙ. A red bidirectional arrow labeled L_RFD connects the feature maps of both models, indicating the application of the refined feature distillation loss. Additionally, a gray upward arrow labeled L_KL represents logit distillation, connecting the final outputs of the two models. The legend at the bottom clarifies the arrow types: yellow for Dual-Information Decomposition, red for Feature Distillation, and gray for Logit Distillation.

The entire process flows logically from feature decomposition to loss computation and finally to knowledge transfer, emphasizing the integration of spatial and channel information for improved quantization performance.
