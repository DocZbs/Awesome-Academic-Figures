# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LTX-Video: Realtime Video Latent Diffusion — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a 3D transformer block used in the LTX-Video model, designed for video generation tasks. The global layout is vertically oriented, with a central dashed-line box labeled 'Transformer Block' containing the core processing components. On the left side, two input sources feed into the block: a 'Text Prompt' that passes through a 'Text Encoder' (light gray rounded rectangle), and a '3D Positional Embedding' (light gray rounded rectangle). These inputs are directed into the transformer block via blue arrows.

Inside the transformer block, the structure follows a sequential flow from bottom to top. At the bottom, the output is denoted as 'z_t' (a small blue square with black text). The first major component is the 'Self Attention' module (light blue rounded rectangle), which receives the 3D positional embedding as input. Below this, a 'RoPE' (Rotary Positional Encoding) module (purple rounded rectangle) is connected to the Self Attention. The Self Attention module also has an associated 'RMS Norm' (light green rounded rectangle) and three small white boxes labeled 'Q', 'K', 'V' (representing query, key, and value matrices). A 'Scale, Shift' module (purple rounded rectangle) feeds into the RMS Norm, and another 'RMS Norm' is placed below it. A 'Scale' module (purple rounded rectangle) is positioned above the Self Attention, feeding into a residual connection (indicated by a blue plus sign) that combines the output of the Self Attention with the input from the previous layer.

Above the Self Attention, the 'Cross Attention' module (light blue rounded rectangle) is shown, receiving the encoded text prompt as input. It also has an associated 'RMS Norm' and 'Q', 'K', 'V' boxes. A 'Scale' module feeds into the Cross Attention's RMS Norm, and another 'Scale, Shift' module connects to the RMS Norm above it. This module also has a residual connection (blue plus sign) combining its output with the input from the previous layer.

At the top of the block, a 'FFN' (Feed-Forward Network) module (light blue rounded rectangle) is present, preceded by a 'Scale' module and followed by a 'Scale, Shift' module, both purple. The FFN is also followed by an 'RMS Norm' (light green). The final output of the block is sent upward via a residual connection (blue plus sign) to the next block or output layer.

On the right side of the block, an 'AdaLN' (Adaptive Layer Normalization) module (purple rounded rectangle) receives input from 'Timestep t' (a light blue rounded rectangle) and provides adaptive scaling and shifting parameters to the 'Scale, Shift' modules within both the Self Attention and Cross Attention submodules, enabling timestep-dependent modulation. All connections are represented by solid blue arrows indicating data flow, while dashed lines outline the boundaries of the transformer block and residual connections. The color coding distinguishes functional types: light blue for main operations (Attention, FFN), light green for normalization (RMS Norm), and purple for scaling/adaptive operations (Scale, Scale, Shift, RoPE, AdaLN). The figure caption notes that this architecture is based on PixArt but replaces LayerNorm with RMSNorm and incorporates QK-normalization and RoPE.
