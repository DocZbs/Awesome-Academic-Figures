# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

OccScene: Semantic Occupancy-based Cross-task Mutual Learning for 3D Scene Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11183

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the OccScene framework, divided into two main phases: Training (left side) and Inference (right side), separated by a vertical dashed line. The global layout is horizontal, with data flow moving from left to right in both phases, and includes feedback loops and parallel processing streams.

In the Training phase, a sequence of real images or video frames labeled as y is fed into an encoder E_VAE (pink trapezoid) which adds noise to produce a noisy version. This noisy input is then processed by a Diffusion UNet (light blue diamond-shaped block) containing an MDA (Mamba-based Dual Alignment) module. The Diffusion UNet receives a text prompt X_text as conditioning. The output of the Diffusion UNet is denoised by a decoder D_VAE (pink trapezoid) to produce y_0, which is compared to the original y via a Reconstruction Loss (dashed arrow). Simultaneously, the output of the Diffusion UNet is passed through a Perception Model (gray rounded rectangle) to generate a predicted semantic occupancy map X_occ. This is compared to the ground-truth semantic occupancy X̃_occ using a Perception Loss, forming a second training objective. The Perception Model also receives the output of D_VAE, creating a feedback loop. The D_VAE is shown to be shared between the training and inference paths.

In the Inference phase, the process begins with random Gaussian noise y_T ~ N(0,I) and a text prompt X_text. These are fed into the same Diffusion UNet with MDA module. The output of the Diffusion UNet is passed through D_VAE to generate a denoised image or video y_0. Additionally, the Diffusion UNet’s output is fed into the Perception Model to generate a semantic occupancy map X_occ. The Perception Model’s output is then fed back into the Diffusion UNet as part of an iterative denoising process, indicated by multiple steps connected by 'Iterative Denoising' labels. The final outputs are the generated image/video y_0 and its corresponding semantic occupancy X_occ. The MDA module within the Diffusion UNet is highlighted as enabling sequential alignment of semantic occupancy and diffusion latent with camera trajectory awareness. The visual modules include pink trapezoids for VAE components (E_VAE, D_VAE), light blue diamonds for the Diffusion UNet, gray rounded rectangles for the Perception Model, and various image representations (real images, noisy images, semantic occupancy maps). Arrows indicate data flow, with solid arrows for forward propagation and dashed arrows for loss computation. Text annotations specify the type of loss, the nature of inputs/outputs, and the iterative process.
