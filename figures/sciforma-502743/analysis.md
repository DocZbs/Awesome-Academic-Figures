# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15190

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-stage training strategy for the EarthDial model, designed to progressively adapt to different remote sensing (RS) modalities. The global layout is divided into three vertically aligned rectangular stages, labeled 'Stage 1: Pretraining', 'Stage 2: RGB Supervised Finetuning', and 'Stage 3: MS Supervised Finetuning', arranged from left to right to indicate sequential progression. Each stage contains a vertical stack of model components, with data sources at the bottom and a legend at the top indicating weight status: a flame icon denotes trainable weights, a snowflake icon denotes frozen weights, and a white arrow indicates shared weights between stages.

In Stage 1, the pretraining phase, the model consists of three stacked modules: a ViT (Vision Transformer) at the bottom, an MLP (Multi-Layer Perceptron) in the middle, and an LLM (Large Language Model) at the top. All three modules are marked with a flame icon, indicating all weights are trainable. The input is represented by a dashed box containing icons of an airplane, a satellite, and a mountain image, labeled 'Low/High Resolution Datasets'. Arrows point upward from the input to ViT, then to MLP, and finally to LLM, showing the forward pass.

Stage 2 introduces RGB and temporal data. The model structure remains the same, but the ViT module now has a snowflake icon, indicating its weights are frozen. The LLM and MLP retain the flame icon, meaning they are trainable. A new green rectangular module labeled 'Data Fusion' is added below ViT, receiving input from the same dashed box now labeled 'RGB & Temporal Datasets', which includes the same icons plus a second mountain image to denote temporal variation. Arrows show data flowing from the datasets to Data Fusion, then to ViT, and up through MLP to LLM. A large white arrow connects Stage 1 to Stage 2, indicating that weights are shared from the previous stage, with only the LLM and MLP being retrained.

Stage 3 extends the model to multispectral and SAR (Synthetic Aperture Radar) data. The structure is identical to Stage 2, with ViT still frozen (snowflake), and LLM and MLP trainable (flame). The Data Fusion module remains, but the input dataset changes to 'Multispectral & SAR Datasets', depicted with a satellite icon and a grid of colored squares representing multispectral bands. The upward arrows maintain the same flow: datasets → Data Fusion → ViT → MLP → LLM. Another large white arrow connects Stage 2 to Stage 3, signifying shared weights from the prior stage, with only the LLM and MLP being updated during this final finetuning phase.

The overall workflow demonstrates a progressive learning approach: starting with general pretraining on diverse RGB imagery, then fine-tuning on RGB and temporal data while freezing the vision backbone, and finally expanding to more complex multispectral and SAR modalities using the same frozen ViT and updated projectors and LLM. This design enables efficient adaptation across RS modalities while preserving learned representations.
