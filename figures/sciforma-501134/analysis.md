# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Scaling of Diffusion Transformers for Text-to-Image Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12391

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural illustration of three distinct diffusion model designs: SDXL U-Net, DiT (e.g., PixArt-α/LargeDiT), and U-ViT, arranged side-by-side from left to right. Each architecture is depicted as a sequential processing pipeline transforming an input latent representation z_T into an output z_{T-1}, with text embedding incorporated at various stages.

[1] Global Layout and Structure:
The figure is horizontally divided into three main sections, each representing one model’s architecture. All three share a common input-output structure: starting from a 64x64 latent tensor z_T and producing a 64x64 output z_{T-1}. The central theme across all architectures is progressive downsampling and upsampling through multiple layers, with text embeddings integrated via cross-attention or other mechanisms. The leftmost section illustrates the SDXL U-Net, the middle shows DiT, and the rightmost depicts U-ViT. Each section includes a legend below it specifying the meaning of colored arrows and shapes used within that architecture.

[2] Visual Modules and Attributes:
In the SDXL U-Net (left): The architecture begins with a 64x64 input z_T. It employs a U-shaped structure with downsampling (purple arrows labeled 'Down/Up Sampling') and upsampling paths. The downsampling path consists of 3x3 convolutional layers (blue arrows), residual blocks (red arrows), and transformer blocks with cross-attention (green arrows labeled 'D Transformer Blocks with Cross Attention'). Channel numbers are indicated (C, 2C, 4C, etc.), with specific dimensions like 32x32 and 16x16 shown along the downsampling path. Text embedding is injected via green lines connecting to transformer blocks. Identity mappings are shown as gray dashed lines. The architecture uses D₁=2 and D₂=10 transformer blocks at different depths.

In the DiT (middle): This architecture features a linear sequence of transformer blocks with cross-attention (green arrows), preceded by a 2x2 patchify layer (blue arrow) that converts the 64x64 input into patches. The patchified tokens are processed through multiple transformer blocks, with text embedding injected via green lines connecting to each block. The output is a 64x64 latent tensor z_{T-1}. The structure is flat and sequential, lacking explicit upsampling/downsampling paths.

In the U-ViT (right): Similar to DiT, it starts with a 2x2 patchify layer (blue arrow) converting 64x64 input into patches. However, instead of cross-attention, it uses transformer blocks with self-attention (red arrows). Text embedding is injected via blue lines connecting to the initial patchified tokens. The architecture maintains a sequential flow through multiple self-attention blocks, ending with the output z_{T-1}.

[3] Connections and Arrows:
All architectures show directional flow from left to right. In SDXL U-Net, connections include skip connections (gray dashed lines) between corresponding encoder and decoder layers, and text embedding inputs (green lines) feeding into transformer blocks. In DiT, text embedding connects directly to each transformer block via green lines. In U-ViT, text embedding connects to the initial patchified tokens via blue lines, while red arrows indicate self-attention within transformer blocks. The legends clarify that blue arrows denote patchification, red arrows denote residual/self-attention blocks, green arrows denote cross-attention blocks, and purple arrows denote down/up sampling operations. Identity mappings are shown as gray dashed lines in SDXL U-Net.
