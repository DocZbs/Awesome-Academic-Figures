# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CRoF: CLIP-based Robust Few-shot Learning on Noisy Labels — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12793

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of CLIP-Adapter, a method that adapts the pre-trained CLIP model for specific tasks by introducing a learnable linear layer while keeping the original CLIP encoders frozen. The global layout is horizontal and modular, depicting a dual-input pipeline: one for images and one for text, converging toward a final output of logits. On the left side, an example image of a cat is shown feeding into the 'CLIP Image Encoder', represented as a light green rounded rectangle with a blue snowflake icon indicating it is frozen (not updated during training). Below it, a sample text input—consisting of multiple descriptive sentences about pink primroses—is fed into the 'CLIP Text Encoder', depicted as an orange rounded rectangle with the same blue snowflake icon, also signifying it remains frozen. Both encoders process their respective inputs and produce feature representations. The image features then pass through a 'Linear layer', shown as a black-bordered box containing a multi-layer neural network diagram with black and red nodes connected by lines; a red flame icon next to it denotes that this layer is learnable and trainable. The output of the linear layer is then added (indicated by a ⊕ symbol) to the output of the text encoder. This combined representation is then processed via cosine similarity (indicated by a ⊗ symbol), resulting in the final 'logits' output on the far right. At the bottom of the figure, a dashed rectangular legend explains the visual symbols: the blue snowflake represents 'frozen' components, the red flame represents 'learnable' components, the ⊕ symbol stands for 'add', and the ⊗ symbol stands for 'cosine similarity'. The overall structure emphasizes a lightweight adaptation strategy where only the linear layer is trained, leveraging the powerful but fixed CLIP encoders for cross-modal alignment.
