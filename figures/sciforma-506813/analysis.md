# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Tighnari: Multi-modal Plant Species Prediction Based on Hierarchical Cross-Attention Using Graph-Based and Vision Backbone-Extracted Features — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02649

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic of a proposed multimodal deep learning model architecture designed for species classification or prediction, integrating visual, tabular, and graph-based features. The overall layout is divided into two main processing streams within dashed rectangular boundaries: a left stream handling image and tabular data, and a right stream processing graph features. Both streams converge into a shared cross-attention mechanism before feeding into a final output pipeline.

[1] Global Layout and Structure:
The diagram is vertically structured into three major sections. The bottom section contains the dual input processing pathways. The middle section shows the fusion of these pathways via cross-attention modules and concatenation. The top section represents the final output layers, including post-processing steps. A dashed box encloses the entire model, indicating it is a complete system. The flow proceeds from bottom to top, with arrows indicating data propagation direction.

[2] Visual Modules and Attributes:
In the left pathway, inputs include an image icon (representing visual data), a bar chart icon (tabular data), and a plus sign (possibly indicating augmentation or combined features). These feed into a Swin-T block (pink rectangle), followed by a Swin-T Tiny block (blue rectangle). The Swin-T Tiny output connects to an MLP (cyan rectangle), which then feeds another Swin-T Tiny block. Each of these blocks is followed by a Layer Norm (yellow rectangle) and a Linear layer (green rectangle) with labeled weights WQ, WK, WV for query, key, and value projections. Two Cross Attention modules (pink rectangles) receive inputs from these linear layers and are connected to a Concatenate module (pink rectangle). A Linear Cutoff module (green rectangle) with a summation symbol (⊕) feeds into the first Cross Attention.

In the right pathway, inputs include an image icon, a plus sign, a bar chart, and a graph icon labeled 'Graph A' (black node-and-edge diagram). These feed into an MMFC* module (purple rectangle), followed by a Graph Feature Vector (orange rectangle). This vector passes through Layer Norm and Linear layers with WQ, WK, WV projections, leading to a multi-head Cross Attention module (pink rectangle with multiple gray boxes labeled 'head'). Its output is concatenated with the left pathway’s output via a Concatenate module (pink rectangle), then passed through a Linear layer (green rectangle).

The top section includes a Linear Output Layer (light blue rectangle), followed by Threshold Top-K Post-processing (light purple rectangle), and finally merged with a list of high-probability species per survey ID for output correction (dark blue rectangle). An external graph labeled 'Graph B' (black node-and-edge diagram) feeds into the final correction step.

[3] Connections and Arrows:
Arrows indicate forward data flow. From the left pathway, outputs from the two Swin-T Tiny blocks go through Layer Norm and Linear layers to feed into two separate Cross Attention modules. The Linear Cutoff module adds its output to the first Cross Attention. Outputs from both Cross Attention modules are concatenated. In the right pathway, the Graph Feature Vector goes through Layer Norm and Linear layers to feed into a multi-head Cross Attention, whose outputs are also concatenated with the left pathway’s output. The concatenated result passes through a Linear layer, then into the Linear Output Layer. From there, data flows to Threshold Top-K Post-processing, and finally merges with the high-probability species list. Graph B provides additional input to this final merging step. Dashed lines connect Layer Norms across modules, suggesting residual connections or shared normalization.
