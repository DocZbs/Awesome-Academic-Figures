# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11333

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of three text generation methods: Autoregressive Encoder-Decoder (top), Latent Diffusion for Text Generation (middle), and Segment-Level Diffusion (Ours, bottom). The global layout is organized into three horizontal sections, each depicting a distinct generative pipeline from left to right, with clear visual separation by horizontal lines.

In the top section, the Autoregressive Encoder-Decoder model begins with an orange rounded rectangle labeled 'Encoder', which takes inputs i¹ through iⁿ. The encoder outputs are represented as a vertical stack of purple rectangles labeled h⁰, h¹, ..., hⁿ, enclosed in a white rounded box labeled 'Encoder Outputs'. These outputs feed into a green rounded rectangle labeled 'Decoder', which generates outputs o¹ through oᵐ sequentially via autoregressive decoding, indicated by dashed arrows from previous outputs o¹ through o^{m−1} feeding back into the decoder, along with a start token <s>.

The middle section illustrates Latent Diffusion for Text Generation. It starts with a noise vector ŷ_T (light beige rectangle) that undergoes multiple diffusion steps. Each step involves a blue rounded rectangle labeled 'Diffusion', which processes the latent vector (e.g., ŷ_{T−1}, shown as an orange rectangle) to produce the next latent state. The final denoised latent vector ŷ₀ (brown rectangle) is fed into a green 'Decoder' that generates outputs o¹ through oᵐ autoregressively, similar to the top model. The 'Encoder Outputs' from the top section are shown as a purple rectangle feeding into each diffusion step as conditioning information.

The bottom section, titled 'Segment-Level Diffusion (Ours)', introduces a novel approach. Instead of processing a single latent vector, it operates on segmented representations. The initial noisy latent states ŷ_T are grouped into segments, each containing multiple latent vectors (e.g., ŷ_T⁰, ŷ_T¹, ..., ŷ_T^j) within a white container labeled ŷ_T. Each segment undergoes independent diffusion steps (blue 'Diffusion' blocks), producing intermediate latent states like ŷ_{T−1} and finally ŷ₀, where each segment's latent vectors (e.g., ŷ₀⁰, ŷ₀¹, ..., ŷ₀^j) are preserved. The 'Encoder Outputs' again condition each diffusion step. The final denoised latent segments are fed into separate green 'Decoder' blocks, one per segment (labeled 'Segment 1', 'Segment j'), enabling parallel autoregressive decoding. Each decoder generates its own output sequence (e.g., o¹ through oᵖ for Segment 1, o^q through o^m for Segment j), with feedback from previous tokens within the segment. This design allows for parallelized decoding across segments while maintaining autoregressive generation within each segment, enhancing both efficiency and control over text generation.
