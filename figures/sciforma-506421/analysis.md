# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Large Vision-Language Model Alignment and Misalignment: A Survey Through the Lens of Explainability — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01346

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-stage training pipeline for a Large Vision-Language Model (LVLM), structured into distinct phases: Stage 1 (Training Visual Encoder), Stage 2 (Adapter Fine-tuning), and Stage 3 (End-to-End Fine-tuning). The global layout is a horizontal sequence of three rectangular panels, each representing a stage, with clear demarcations and internal flow diagrams. A legend at the top right indicates that components marked with a flame icon are 'Training' (i.e., updated during training), while those with a snowflake icon are 'Frozen' (i.e., kept fixed). 

In Stage 1, labeled 'Training Visual Encoder', the process begins with paired inputs: a stack of text descriptions (e.g., 'Colorful bird...') and a stack of corresponding images (a hummingbird). These are fed into separate encoders: a light green trapezoid labeled 'Text Encoder' and a light blue trapezoid labeled 'Visual Encoder'. Both encoders are marked with flame icons, indicating they are trained. The outputs are aligned via 'Contrastive Learning', shown by a large curly brace connecting the two encoder outputs, emphasizing the goal of learning joint visual-text representations.

Stage 2, titled 'Adapter Fine-tuning', shows a single image of the hummingbird being processed by the now-frozen Visual Encoder (light blue trapezoid with snowflake icon). The output is passed to a new component, a gray rectangle labeled 'Adapter', which is marked with a flame icon, indicating it is trainable. The Adapter's output is then fed into a large, light yellow trapezoid labeled 'LLM' (Large Language Model), also marked with a snowflake, meaning it is frozen. The input to this stage is a stack of text prompts such as 'Describe image...', suggesting the task is image captioning or description generation. This stage focuses on adapting the frozen visual encoder’s features to the LLM using a lightweight trainable adapter.

Stage 3, 'End-to-End Fine-tuning', illustrates the full LVLM architecture. It receives 'Image Input' and 'Text Input' as separate streams. The image input goes to the 'Visual Encoder' (light blue trapezoid, now with flame icon, indicating it is retrained), and the text input goes to the 'LLM' (light yellow trapezoid, also with flame icon, now trainable). Between them is the 'Adapter' (gray rectangle, flame icon), which processes the visual features before passing them to the LLM. All three components are now trainable, as indicated by the flame icons. The entire system is enclosed in a dashed box labeled 'Large Vision-Language Model', and the final output is an 'Expected Output' box below, signifying the model’s generative capability. The flow is from inputs through the three components to the output, demonstrating a fully integrated and jointly trained model.
