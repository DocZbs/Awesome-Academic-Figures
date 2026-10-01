# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MNet-SAt: A Multiscale Network with Spatial-enhanced Attention for Segmentation of Polyps in Colonoscopy — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19464

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-head spatial-enhanced attention mechanism, structured as a horizontal flow from left to right. The global layout consists of three parallel processing streams originating from a shared input layer on the far left, each stream progressing through identical modules before converging into an attention computation block, followed by a final linear transformation. The input is represented by six yellow circular nodes arranged vertically, connected via full connectivity to three separate Layer Normalization (LN) blocks, each depicted as a light green rounded rectangle labeled 'LN'. Each LN block feeds into a feature map representation shown as a 4x4 grid of small gray squares, with some highlighted in light blue to indicate active or selected features. Following this, each stream passes through a Global Average Pooling (GAP) module, shown as a yellow rounded rectangle labeled 'GAP', which reduces the spatial dimensions to produce a single vector per stream. These three processed streams are then assigned distinct roles: the top stream outputs a Query (Q), the middle stream outputs Key (K^T), and the bottom stream outputs Value (V), each represented as a grid of black-outlined cells. The Query and Key are fed into a local matrix multiplication operation, symbolized by a circled '×' icon, whose output is passed through a Softmax function—depicted as a sigmoid-shaped curve inside a rounded rectangle labeled 'Softmax'—to generate an Attention Map. This Attention Map is visualized as a 3x3 grid with varying colors (blue, yellow, purple, teal) indicating different attention weights. The Attention Map is then multiplied element-wise with the Value (V) via another circled '×' icon, and the result is passed to a final Linear layer, shown as a purple rounded rectangle labeled 'Linear', which produces the output. A legend at the bottom clarifies abbreviations: LN stands for Layer Normalization, GAP for Global Average Pooling, and the circled '×' denotes Local Matrix Multiplication. The overall structure emphasizes parallel processing of multiple feature representations, followed by attention-based weighting and aggregation to enhance spatial feature selection.
