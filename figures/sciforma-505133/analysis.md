# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RAIN: Real-time Animation of Infinite Video Stream — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19489

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural pipeline of a video generation method that synthesizes human motion sequences conditioned on a reference image and a pose sequence. The global layout is structured as a left-to-right data flow with feedback loops, divided into three main stages: input encoding, iterative denoising via a dual UNet structure, and output decoding. On the far left, a reference image of a person in a light blue dress is processed by a VAE Encoder (blue trapezoid), which extracts latent features. Simultaneously, the same image is fed into a CLIP Text Encoder (yellow trapezoid) to generate semantic embeddings. Below, a Pose Sequence (represented as stacked black frames with colored skeleton keypoints) is passed through a Pose Guider (orange trapezoid), which transforms it into a pose-conditioned embedding. This embedding is then added to the intermediate features of the Denoising UNet via a summation node (+). The core of the architecture consists of two stacked UNets: a Reference UNet (top gray trapezoidal block) and a Denoising UNet (bottom gray trapezoidal block). Both UNets are composed of multiple residual blocks, each containing three types of attention mechanisms: Spatial Attention (light blue rectangles), Temporal Attention (light green rectangles), and Cross Attention (yellow rectangles), as indicated in the legend. These attention modules are arranged vertically within each UNet block, with arrows showing information flow between them. The Reference UNet’s spatial attention features and CLIP embeddings are fed into the Denoising UNet, while the pose-guided features are injected at an intermediate layer. The Denoising UNet performs N iterations of denoising, as indicated by a large blue curved arrow labeled 'N Iterations' looping back to the input. After each N iterations, the noise level of the latent frames is reduced by T/p steps, and the first K/p frames become clean. These clean latents are then passed to a VAE Decoder (blue trapezoid) to reconstruct video frames, shown as a sequence of four identical images of the woman. The remaining latent frames are replaced with newly sampled noise (highlighted in orange dashed box), forming the 'Next Input' for the next iteration. The bottom portion of the diagram shows the 'Noise-Stepping Latents' as a horizontal strip of grayscale frames, where the rightmost portion is replaced with new noise after each cycle. The entire process is iterative, generating a video frame-by-frame by progressively denoising and extending the latent sequence.
