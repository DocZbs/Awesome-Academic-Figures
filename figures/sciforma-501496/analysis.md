# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRIMEdit: Probability Redistribution for Instance-aware Multi-object Video Editing with Benchmark Dataset — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12877

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the PRIMEdit framework, a method for disentangled multi-instance video editing using diffusion-based latent manipulation. The global layout is a horizontal workflow from left to right, starting with input frames on the far right and progressing through several processing stages to produce output frames on the far left. The top row shows the DDIM inversion process, which converts input frames into latent representations via an encoder ε, producing a sequence of noisy latents represented as stacked color bars (yellow, green, orange) indicating different modules: Spatio-Temporal Attention (yellow), Instance-centric Probability Redistribution (IPR, orange), Cross-Attention (blue), and Motion Module (green). These latents are then processed through four main modules arranged horizontally: Series Noise Sampling (SNS, yellow background), Latent Fusion (green background), Re-Inversion (purple background), and Parallel Noise Sampling (PNS, light blue background).

In the SNS module, multiple instance-specific captions (e.g., 'pembroke welsh corgi', 'white wooden chair') are fed into separate noise sampling branches. Each branch processes a caption c_i with a corresponding mask m_i, generating a sequence of noisy latents ň_i^1:N via Equation (4). These are combined with the mask using element-wise multiplication (*) and then undergo noise removal to produce clean latents. The outputs are masked latents for each instance.

The Latent Fusion module takes these masked latents {z_i^1:N} for all instances i=1 to M and fuses them using Equation (7), combining them with a summation operation (+) and applying a mask 1 - Σm_i to preserve background regions. This produces a fused latent representation ẑ_t^1:N.

The Re-Inversion module performs a reverse DDIM inversion on the fused latent to generate a reconstructed frame, which is then used to refine the latent representation further, ensuring consistency between instances.

Finally, the PNS module operates in parallel to SNS but uses the fused latent from Re-Inversion as input. It applies the same noise sampling process per instance, using the same captions and masks, and combines the results with noise removal and a decoder D to produce the final output frames.

Connections between modules are shown via solid arrows indicating data flow and dashed arrows for feedback or auxiliary paths. The figure includes annotations for equations (Eq. (4), Eq. (5), Eq. (7)), module names, and visual indicators for masks (black silhouettes), noise (gray textured blocks), and latent representations (color-coded bars). The bottom legend clarifies the color coding for the four core modules: Spatio-Temporal Attention (yellow), IPR (orange), Cross-Attention (blue), and Motion Module (green).
