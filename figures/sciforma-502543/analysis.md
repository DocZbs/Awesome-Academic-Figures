# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Event-assisted 12-stop HDR Imaging of Dynamic Scene — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14705

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a diffusion-based framework for generating an HDR image from a sequence of aligned low dynamic range (LDR) images, incorporating a color correction module. The global layout is a horizontal pipeline starting from the left with input LDR images and progressing rightward through encoding, control, diffusion, and decoding stages to produce the final HDR output. The structure is modular, with distinct blocks representing different neural network components, arranged in a top-down and left-to-right flow, emphasizing the iterative nature of the diffusion process.

On the far left, under the label 'Aligned LDR', five vertically stacked LDR images (denoted I₁ᵃ to I₅ᵃ) serve as input. These images show progressive exposure levels, with increasing brightness from top to bottom, indicating a bracketed exposure sequence. Each image is enclosed in a blue-bordered square with a small circular watermark in the center.

The first processing stage involves a VAE Encoder, represented as a light blue trapezoid with a snowflake icon in the top-left corner, symbolizing latent space encoding. This encoder takes the aligned LDR images and outputs a latent representation C_ldrs, shown as a rounded rectangle. This latent code is then fed into a ControlNet module, also depicted as a light blue trapezoid with a snowflake icon, which acts as a guidance mechanism for the subsequent diffusion process.

In parallel, a separate branch processes the same latent space via a Stable Diffusion (SD) Encoder, another light blue trapezoid with a snowflake icon, which receives a noise vector Z_t (a rounded rectangle). The SD Encoder outputs a latent representation that is passed to the SD Decoder, also a light blue trapezoid with a snowflake icon. The SD Decoder generates a new latent state Z_{t-1}, which is fed back into itself in a loop, forming an iterative diffusion process indicated by a curved arrow labeled 'T steps'. This loop signifies T denoising steps, where each step refines the latent representation toward the target HDR image.

The ControlNet module provides conditional guidance to both the SD Decoder and the main diffusion loop, ensuring structural consistency with the input LDR images. The output of the diffusion process after T steps is a refined latent representation Z₀, which is passed to a VAE Decoder (light blue trapezoid with snowflake icon) to reconstruct the final image.

Before decoding, a color correction module is applied. This module consists of two components: a salmon-colored rectangular block labeled 'Color Correction' with a flame icon, and a white rectangular block labeled 'Zero Conv.' with a plus sign below it. The 'Color Correction' block receives the original aligned LDR images as input and produces a correction signal that is added to the latent space via the 'Zero Conv.' layer. This corrected latent signal is then combined with the diffusion output Z₀ before being decoded.

The final output, shown on the far right, is an HDR image with tone mapping, displayed as a realistic scene with enhanced lighting and details, enclosed in a blue-bordered square with a green circular watermark. The entire pipeline is encapsulated within a rounded rectangular boundary, emphasizing it as a complete system for HDR image synthesis from LDR inputs using diffusion and control mechanisms.
