# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GenHMR: Generative Human Mesh Recovery — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14444

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage inference strategy for 3D human pose estimation, divided into (a) Uncertainty-Guided Sampling and (b) 2D Pose-Guided Refinement. The global layout is horizontal, progressing from left to right, with stage (a) occupying the left half and stage (b) the right half. A legend in the upper right corner defines visual elements: orange squares labeled 'i' represent Pose Tokens, black squares labeled 'M' denote Mask Tokens, gray squares with '?' indicate Low Confidence Tokens, blue snowflake icons signify Frozen Networks, orange flame icons represent Trainable Tokens, and a crossed circle symbolizes Deformable Cross-Attention.

In stage (a), an input image is fed into an Image-Conditioned Masked Transformer at Y₁ step, where all tokens are initially masked (black 'M'). The model outputs a sequence of tokens, some of which are assigned numerical values (e.g., 2, 6, 7) indicating confidence or token types. These are then subjected to Confidence-based Masking, replacing low-confidence tokens (gray '?') with mask tokens ('M'), while retaining high-confidence tokens (orange 'i'). This process repeats iteratively through Y₂ step up to Y_L step, with each step feeding into the next. At Y_L step, the output token sequence is passed to a Decoder (marked with a blue snowflake, indicating it is frozen), producing an initial 3D pose estimate θ'.

Stage (b) begins with the initial estimate θ' being used to initialize a new set of trainable tokens (orange flame icon) at Y_p step. These are processed by another Image-Conditioned Masked Transformer (frozen network, blue snowflake) and then decoded by a Decoder (also frozen) to produce a refined 3D pose θ''. Simultaneously, the input image is processed by a 2D Detector (frozen network, blue snowflake) to obtain 2D pose estimates J_2D. The refinement process involves minimizing a loss function G(Y_p, J_2D, θ') via gradient descent, updating the trainable tokens using the equation Y_{p+1} = Y_p - η∇_{Y_p}G(Y_p, J_2D, θ'), where η is the learning rate. This update loop runs P times, with feedback from the 2D detector guiding the refinement to improve 3D pose accuracy. The final output is a refined 3D body mesh consistent with both the image context and 2D pose constraints.
