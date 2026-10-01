# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Wonderland: Navigating 3D Scenes from a Single Image — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12091

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an end-to-end pipeline for 3D-aware video generation from a single image, named Wonderland, consisting of two main stages: a camera-guided video diffusion model and a Latent Large Reconstruction Model (LaLRM). The global layout is left-to-right, starting with input on the far left, progressing through the diffusion model, then transitioning to the LaLRM for 3D reconstruction, and ending with novel view synthesis on the right. The entire process is structured into distinct visual modules connected by arrows indicating data flow.

On the left, the input consists of a 'Single Image' of a teddy bear in an urban street scene, along with two camera embeddings: one labeled 'Camera Embedding' (blue stack) and another labeled 'lora cam' (also blue stack), which is associated with noise. These inputs are processed via an 'Encoding' step, followed by 'Patchify', which converts the image into a grid of patches. The patches are then passed through a 'Linear' layer to produce 'Visual Token' (pink rectangular blocks). Simultaneously, the 'Camera Embedding' is fed into a 'ctrl cam' module (purple trapezoid) to generate 'Camera Token' (light blue rectangular blocks). The 'lora cam' embedding is processed similarly to generate 'VisCam Token' (gray rectangular blocks). These tokens are combined using element-wise sum operations (indicated by '+' symbols) before being fed into a dual-branch Transformer architecture.

The central part of the diagram shows the dual-branch Transformer structure. The top branch, enclosed in a pink dashed box, processes the 'Camera Token' and includes several 'Transformer Block' units (beige rectangles). The bottom branch, enclosed in a light blue dashed box, processes the 'VisCam Token' and includes 'Cam-LoRA' modules (brown rectangles) integrated within the Transformer Blocks. Green lines labeled 'Zero-linear' connect the top branch to the bottom branch, indicating cross-attention or feature sharing. The output of this dual-branch network is a 'Generated Video Latent' (a colorful, striped texture image).

This latent representation is then processed by the LaLRM. The latent is split into two streams: one undergoes '3D Patchify & Linear' and the other '2D Patchify & Linear'. These are concatenated (indicated by a 'C' symbol) and passed through N identical 'Transformer Block' units (beige rectangles). The output is then processed by a 'Linear & Unpatchify' module, resulting in a 3D scene reconstruction shown as a transparent cube containing the teddy bear in the street environment, with multiple camera viewpoints (black cameras) projecting onto it. Finally, the reconstructed 3D scene is rendered from different angles, producing a sequence of 'Novel View' images (four frames showing the bear from various perspectives), with a curved arrow indicating continuous view rotation.

The legend at the bottom clarifies the visual elements: blue stacks represent 'Camera Embedding', pink blocks are 'Visual Token', light blue blocks are 'Camera Token', gray blocks are 'VisCam Token', brown blocks are 'Cam-LoRA', green lines are 'Zero-linear', beige rectangles are 'Transformer Block', '+' symbols denote 'Element-wise Sum', and 'C' denotes 'Concatenate'. The overall workflow demonstrates how camera guidance enables precise pose control during video latent generation, which is then used by the LaLRM to efficiently reconstruct a high-fidelity 3D scene for novel view synthesis.
