# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PTQ4VM: Post-Training Quantization for Visual Mamba — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20386

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents four variants of Visual Mamba backbones: (a) Vision Mamba (Vim), (b) LocalVim, (c) VMamba, and (d) LocalVMamba, each depicted as a modular block diagram illustrating their internal architectures and data flow. The global layout consists of four vertically aligned, side-by-side diagrams, each enclosed in a thick black border and labeled at the bottom with its respective name. Below each diagram is a set of small square grids representing the scan patterns used by that model, with arrows indicating scan directions and red dots marking class tokens (CLS). A legend in the top-right corner defines color-coded components: yellow for Scan/Reshape operations, blue for Linear layers, red for Selective Scan, black for Class Token, and bidirectional arrows for Scan Directions.

Each backbone follows a similar high-level structure: input features pass through a LayerNorm layer, then enter a core processing module composed of multiple stacked blocks (indicated by 'x2' or 'x4'), followed by a final output projection (Out_proj). The core modules vary across models in terms of scanning mechanisms and fusion strategies.

In (a) Vision Mamba (Vim), the core module repeats twice ('x2'). It begins with In_proj (blue), followed by BiScan (yellow), Conv1d (gray), SiLU (gray), X_proj (blue), and then feeds into a Selective Scan (red) block. This block receives inputs B, C, and Dt_proj (blue), and outputs are combined via element-wise multiplication (⊗) before being added to the residual connection and passed to Out_proj (blue).

In (b) LocalVim, the core module repeats four times ('x4'). It starts with In_proj (blue), LayerNorm (gray), then X_proj (blue), SiLU (gray), Conv1d (gray), and Local Scan (yellow). The output is split into two paths: one goes to Selective Scan (red) with inputs B, C, Dt_proj (blue), and the other passes through LayerNorm, Avg Pool, FC1 (blue), GELU (gray), FC2 (blue), Sigmoid (gray), and multiplies with the Selective Scan output. The result is merged via Local Merge (yellow) and fed to Out_proj (blue). An optional CLS token is shown below.

In (c) VMamba, the core module also repeats four times ('x4'). It begins with In_proj (blue), LayerNorm (gray), then X_proj (blue), SiLU (gray), DWConv2d (gray), and Cross Scan (yellow). The output feeds into Selective Scan (red) with inputs B, C, Dt_proj (blue), which is then merged via Cross Merge (yellow). The other path goes through LayerNorm, FC1 (blue), GELU (gray), FC2 (blue), Sigmoid (gray), and multiplies with the merged output. The result is added to the residual and passed to Out_proj (blue). The scan pattern shows directional arrows in both horizontal and vertical orientations.

In (d) LocalVMamba, the core module repeats four times ('x4'). It starts with In_proj (blue), LayerNorm (gray), then X_proj (blue), SiLU (gray), DWConv2d (gray), and Local Scan (yellow). The output feeds into Selective Scan (red) with inputs B, C, Dt_proj (blue), which is then merged via Local Merge (yellow). The other path goes through LayerNorm, Avg Pool, FC1 (blue), GELU (gray), FC2 (blue), Sigmoid (gray), and multiplies with the merged output. The result is added to the residual and passed to Out_proj (blue). The scan pattern includes both horizontal and vertical directional arrows.

Connections between modules are represented by solid black arrows indicating forward data flow. Element-wise multiplication is denoted by ⊗, addition by ⊕, and concatenation or merging by ⊕ within the merge blocks. All models incorporate residual connections from the input of the core module to the output of the final Out_proj block.
