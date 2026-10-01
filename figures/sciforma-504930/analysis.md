# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Advanced Knowledge Transfer: Refined Feature Distillation for Zero-Shot Quantization in Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19125

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Refined Feature Distillation (RFD) process, which is applied iteratively for each feature map across all layers n. The global layout is vertically structured, enclosed within a dashed rectangular boundary labeled 'Iteration i for all Feature Map n'. At the top, a full-precision feature map αi is represented as a solid peach-colored cube. This input splits into two parallel pathways: one for spatial attention (ATT_sp(αi)) and one for channel attention (ATT_ch(αi)). Both are depicted as transparent cubes with blue outlines; the spatial attention cube contains diagonal colored lines (red, green, blue) indicating spatial feature emphasis, while the channel attention cube shows stacked colored planes (orange, blue, green) representing channel-wise focus. Below these, a central rounded rectangle contains the loss computation L_RFD(i), expressed as the sum of two components: L_sp (blue double-headed arrow) and L_ch (green double-headed arrow), symbolizing spatial and channel-wise losses respectively. Further down, the quantized model βi is shown as a solid olive-green cube. From this, two upward arrows lead to corresponding attention outputs: ATT_sp(βi) and ATT_ch(βi), visually identical in structure to those from αi but derived from the quantized model. The diagram emphasizes that the distillation process compares attention maps from the full-precision and quantized models to compute the RFD loss, which is then averaged over all layers to obtain the final loss. The visual elements use distinct colors and shapes to differentiate between full-precision and quantized representations, and directional arrows indicate data flow and loss computation.
