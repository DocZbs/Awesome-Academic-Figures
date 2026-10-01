# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Geo-ConvGRU: Geographically Masked Convolutional Gated Recurrent Unit for Bird-Eye View Segmentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20171

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Geo-ConvGRU module, designed for processing sequential data with spatial context, likely in a bird's-eye view (BEV) representation. The global layout is horizontal and sequential, consisting of two parallel recurrent layers—top and bottom—each composed of three GRU units arranged in a chain, followed by a final fusion step involving a geographical mask.

The top layer contains three identical rectangular blocks labeled 'GRU₁', each receiving an input from the previous block and an initial hidden state h₁ at the first time step. The bottom layer mirrors this structure with three rectangular blocks labeled 'GRU₀', initialized with h₀. Each GRU₀ unit receives a feature vector from the BEV representation at different time steps: f_BEV^{t−2}, f_BEV^{t−1}, and f_BEV^t, respectively, indicating temporal progression. These BEV features are fed into the corresponding GRU₀ units via upward arrows, suggesting they serve as input features for the lower layer.

Vertical arrows connect each GRU₀ unit to its corresponding GRU₁ unit above, indicating that the output of the lower GRU is passed as additional input or context to the upper GRU. This suggests a hierarchical or multi-level processing where the lower layer extracts spatial-temporal features from BEV inputs, and the upper layer refines or combines them with higher-level temporal dynamics.

After the third GRU unit in each layer, the outputs from both GRU₁ and GRU₀ converge into a circular node marked with a multiplication symbol '×', representing an element-wise product operation as specified in the caption. This operation is applied between the final outputs of the two GRU chains. Additionally, a separate rectangular box labeled 'ℳ_geo' (geographical mask) feeds into this multiplication node, indicating that the mask is applied element-wise to modulate the combined output.

The result of this element-wise product is then directed to the rightmost label 'Output', signifying the final output of the module. The entire structure emphasizes a dual-path recurrent processing with temporal evolution, spatial feature integration via BEV inputs, and spatial modulation through a geographical mask, culminating in a fused output. All components are rendered in black-and-white with standard rectangular boxes for GRUs and a circle for the multiplication operation, using clear, sans-serif labels and solid arrows to denote data flow.
