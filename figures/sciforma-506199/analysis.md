# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RORem: Training a Robust Object Remover with Human-in-the-Loop — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00740

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the training pipeline for a discriminator used in automated data annotation, based on the down and middle blocks of the SDXL-inpainting model. The global layout is left-to-right, depicting a data flow from input to loss computation. On the far left, three inputs are shown vertically: an original image denoted as x_e, a binary mask m indicating the region to be edited, and a synthesized image x_s. These three inputs are combined via a black cross-shaped connector and fed into a light blue 3D rectangular block, representing a feature extraction or fusion module. This block outputs to a larger, trapezoidal green structure labeled D_φ, symbolizing the main discriminator network. A snowflake icon above this block suggests a frozen or pre-trained component, consistent with using the base SDXL-inpainting model. Below the green block, a red rectangular module labeled 'LoRA' feeds upward into the three vertical green layers, indicating that LoRA (Low-Rank Adaptation) layers are introduced as trainable components within the discriminator. Following the green block, a red rectangular module labeled 'CONV' with a flame icon denotes a trainable convolutional layer; a circular arrow with '×4' indicates that this CONV layer is repeated four times in sequence. The output of the final CONV layer passes through a blue square module labeled 'SoftPlus', which contains a yellow L-shaped curve symbolizing the SoftPlus activation function. The result is then directed to a loss function L_φ, represented by a black box with 'YES' and 'NO' labels above it, suggesting binary classification output (e.g., real vs. fake) used to compute the loss. The entire process is designed to train the LoRA and CONV layers using human feedback data, as stated in the caption, while keeping the base model mostly fixed.
