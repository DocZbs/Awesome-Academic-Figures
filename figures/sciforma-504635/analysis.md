# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Video Is Worth a Thousand Images: Exploring the Latest Trends in Long Video Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18688

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a latent diffusion model architecture designed for generative tasks, where data is synthesized through a reverse diffusion process applied to latent representations, guided by external conditioning inputs such as text or images. The global layout is divided into three main regions: Pixel Space on the left, Latent Space in the center, and Conditioning on the right. These regions are connected via a forward and reverse diffusion pipeline, with the core generative process occurring within the Latent Space.

In the Pixel Space (enclosed in a pink box), an encoder ε maps an input image x into a latent representation z. This latent vector is then subjected to a forward diffusion process, which gradually adds noise over T steps, resulting in a fully noisy latent z_T. The decoder D reconstructs the original image from the final denoised latent z, producing an output x̃. The encoder and decoder are represented as light blue parallelograms, with the input/output images shown as purple rounded rectangles.

The central Latent Space (light green background) contains the core generative mechanism. It begins with the Diffusion Process, which transforms the initial latent z into z_T. The reverse process, or denoising, is performed by a Denoising U-Net ε_θ, depicted as a U-shaped network with multiple blocks. Each block contains two parallel components, each with Q, K, V modules (orange rounded rectangles) representing query, key, and value matrices for cross-attention mechanisms. These blocks are connected by skip connections (dashed gray arrows) that carry information from earlier layers to later ones, preserving spatial details. The U-Net receives the current noisy latent z_{T-1} and the full noisy latent z_T as inputs, and outputs a denoised version of z_{T-1}, which is then used in the next step. The denoising step is symbolized by a green icon with two overlapping diamonds, labeled 'denoising step' in the legend.

Conditioning inputs (text, semantic map, image representations) are processed by a module τ_θ (light blue parallelogram) on the right side, which generates contextual embeddings. These embeddings are concatenated (indicated by a black circle labeled 'concat') with the latent features at various points in the U-Net, particularly feeding into the cross-attention blocks. The cross-attention mechanism allows the model to condition the denoising process on the external information, enabling guided generation. The legend also includes icons for 'crossattention' (Q/KV), 'switch' (a camera-like icon), 'skip connection' (dashed arrow), and 'concat' (black circle), clarifying the visual symbols used in the diagram.

The entire process is iterative: starting from z_T, the model performs T denoising steps, each time refining the latent representation using the U-Net conditioned on the external inputs, until it reaches a clean latent z, which is then decoded back into pixel space. The figure effectively captures the end-to-end flow of a latent diffusion model, emphasizing the role of conditioning and the structure of the U-Net in achieving high-quality, guided image synthesis.
