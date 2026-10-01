# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ArchComplete: Autoregressive 3D Architectural Design Generation with Hierarchical Diffusion-Based Upsampling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17957

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-stage 3D generative pipeline for high-resolution 3D model synthesis. The layout is divided into two main sections: Stage 1 on the left and Stage 2 on the right, separated by a vertical line.

In Stage 1, titled '3D Voxel VQGAN + Transformer', the process begins with a 3D voxelized input model, depicted as a white 3D building-like structure. This input is fed into an ENCODER module, shown as a gray trapezoid, which outputs a FEATURE MAP represented as an orange cube. The feature map is then passed through K quantization vectors (gray rectangles labeled 1, 2, ..., K), resulting in a QUANTISED FEATURE MAP 2, also an orange cube. This quantized map is decoded by a DECODER (gray trapezoid) to reconstruct the original 3D model. A feedback loop from the decoder to a 3D PatchGAN Discriminator (gray trapezoid with text) ensures local patch fidelity; the discriminator receives a grid of orange squares representing patch-level features. Additionally, the quantized feature map is processed by a GPT-STYLE-TRANSFORMER (dark gray rectangle), which generates new sequences of features. The original and reconstructed 3D models are also fed into a VGG-16 network (dark gray rectangle) via 2.5D perceptual loss pathways (black squares with grayscale images), ensuring global spatial coherence. The VQ ENCODE path connects the quantized features to the transformer.

Stage 2, titled 'Hierarchy of 3D c-DDPMs', illustrates a cascaded refinement process. Starting from a coarse 3D model (labeled 64³), it is decomposed into 8³ patches (orange vertical stack of small 3D models). These patches pass through a gray hourglass-shaped module, symbolizing a conditional Denoising Diffusion Probabilistic Model (c-DDPM), and are upsampled to 16³ patches. This process repeats: 16³ patches are refined to 16³ again, then to 32³ patches, each time passing through a similar gray hourglass module. Finally, the 32³ patches are assembled into a higher-resolution 3D model (labeled 256³). Dashed lines between the hourglass modules indicate the hierarchical conditioning flow. The figure notes that while the diagram shows up to 4x upsampling, the actual implementation achieves 8x upsampling.
