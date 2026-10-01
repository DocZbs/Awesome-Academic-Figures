# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GEM: A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Ego-Motion, Object Dynamics, and Scene Composition Control — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11198

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a generative model called GEM, designed to predict future frames and future depth frames from a reference frame and noisy latent representations of image and depth modalities. The global layout is a left-to-right dataflow pipeline, starting with three input streams: a reference frame, future frames, and future depth frames. These inputs are processed through separate variational autoencoders (VAEs) or encoders to extract latent representations. The reference frame passes through a frozen encoder (pink trapezoid with snowflake icon) to produce latents. The future frames and future depth frames are encoded via VAEs (also pink trapezoids with snowflake icons), producing latents that are then corrupted with noise to form 'Noisy Latents' (gray cubes). These noisy latents, along with the reference latents, are concatenated (indicated by a circle with 'C') and fed into the core denoising network, denoted as D₀.

The central component is the denoiser network D₀, depicted as a gray box containing multiple blocks. It consists of three blue input blocks, one yellow middle block, and three red output blocks. This network is conditioned on three external modalities: ego trajectories, DINOv2 features, and human poses. Ego trajectories are integrated via a 'Cross-Atten LoRA' module (green rectangle with flame icon, indicating trainable parameters), which applies cross-attention at every block of the network. DINOv2 features (from ObjectNet, shown as black feature maps with colored points) and human poses (from PoseNet, shown as stick figures) are fed into the network after being processed by green trapezoidal modules labeled 'ObjectNet' and 'PoseNet', respectively. These features are concatenated (via 'C' circles) to the output of each block in the input layers of the denoiser, as indicated by arrows pointing from the green modules to the input blocks.

After processing, the denoised latents are split into two branches. Each branch passes through a modality-specific output projection layer: P_image (purple rectangle with flame icon) for image modality and P_depth (another purple rectangle with flame icon) for depth modality. These projections generate latents specific to each modality, which are then decoded by separate VAE decoders (pink trapezoids with snowflake icons) to reconstruct the final outputs: 'Future Frames' (a sequence of RGB images) and 'Future Depth Frames' (a sequence of depth maps).

The legend at the bottom clarifies visual attributes: a circle with 'C' denotes concatenation; a snowflake icon indicates frozen components; a flame icon marks trainable components; pink trapezoids represent encoder/decoder modules; blue bars are input blocks; red bars are output blocks; yellow bars are middle blocks; and purple rectangles are modality output projections. The entire pipeline is designed to generate multimodal future predictions conditioned on both visual and motion cues, with explicit handling of different modalities through dedicated projection and decoding paths.
