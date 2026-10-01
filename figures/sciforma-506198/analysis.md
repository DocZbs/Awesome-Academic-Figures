# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RORem: Training a Robust Object Remover with Human-in-the-Loop — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00740

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a training pipeline for fine-tuning a pre-trained SDXL-inpainting model using a diffusion-based approach. The global layout is left-to-right, depicting a data flow from input preparation through a neural network to output generation and loss computation. On the far left, three vertically stacked input components are shown: the current target image patch denoted as x_e^t (a grayscale image of a building with palm trees), a binary mask m (black background with a white U-shaped region indicating the inpainting area), and a source image patch x̄_s (same scene but with the masked region filled with black). These three inputs are concatenated along the channel dimension, indicated by a dark blue branching arrow leading into a light blue 3D rectangular block labeled 'concat'. This concatenated tensor is then fed into a central neural network module represented as a pink hourglass-shaped structure labeled G_θ, symbolizing an encoder-decoder architecture with five red rectangular blocks representing convolutional layers or residual blocks. A small flame icon above the rightmost red block suggests the application of a noise injection or denoising process typical in diffusion models. The output of G_θ is a reconstructed image x_e^{t-1}, shown as a noisy version of the original scene, which is then compared to the ground truth image x_e (the clean, fully visible scene) on the far right. Two green curved arrows point from both x_e^{t-1} and x_e back to a loss term L_θ, indicating that the training objective computes the difference between the predicted and target images to update the model parameters θ. The entire process reflects a standard diffusion training paradigm where the model learns to denoise images step-by-step over time steps t, using triplet inputs for conditional inpainting. The caption confirms this setup is used consistently across multiple training stages.
