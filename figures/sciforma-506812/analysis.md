# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Tighnari: Multi-modal Plant Species Prediction Based on Hierarchical Cross-Attention Using Graph-Based and Vision Backbone-Extracted Features — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02649

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of Swin-Transformer variants for processing temporal cubes versus standard satellite images, highlighting structural differences and internal block designs. The global layout is divided into two main horizontal workflows at the top: one for 'Temporal Cubes (4,19,12)' and another for 'Satellite Image (4,128,128)', each showing a sequence of four stages connected by light blue rightward arrows. These stages are visually represented as grid-like matrices with increasing partitioning complexity: starting from uniform grids, progressing through blue-lined patch partitions, then red-lined windows for Windows Multi-Head Self-Attention (W-MSA), and finally orange-lined shifted windows for Shifted Windows Multi-Head Self-Attention (SW-MSA). Below these visualizations, the figure details three vertical architectural diagrams labeled 'Vanilla Swin-T Structure', '2 Successive Swin-Transformer Blocks', and 'Temporal Swin-T Structure'. The 'Vanilla Swin-T Structure' on the left shows a sequential pipeline starting from 'Image Inputs', followed by 'Patch Partition', then multiple stages of 'Linear Embedding' and 'Swin Transformer Block ×2' with increasing numbers of attention heads (3, 6, 12, 24). Each stage is enclosed in a dashed blue rectangle. The central diagram, '2 Successive Swin-Transformer Blocks', provides an expanded view of two consecutive blocks. Each block contains a Layer Norm (green box), W-MSA (red box) or SW-MSA (yellow box), another Layer Norm, and an MLP (blue box), all connected via residual connections (indicated by circular sum nodes). Dotted lines link this central diagram to the corresponding blocks in the left and right structures. The 'Temporal Swin-T Structure' on the right mirrors the left structure but begins with 'Temporal Inputs' and uses different configurations: 'Swin Transformer Block ×2 Attention Head×12' followed by 'Swin Transformer Block ×6 Attention Head×24'. All boxes are rectangular with rounded corners, using distinct colors for different components: blue for MLP, green for Layer Norm, red for W-MSA, yellow for SW-MSA, and gray for input/processing stages. Text labels are black and positioned below or inside the respective modules. The overall flow is left-to-right for the top visualizations and top-to-bottom for the architectural diagrams, with clear directional arrows indicating data progression.
