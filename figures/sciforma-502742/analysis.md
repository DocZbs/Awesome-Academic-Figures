# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15190

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the EarthDial architecture, a multi-modal large language model (LLM) designed for remote sensing (RS) applications. The global layout is structured into three main horizontal sections: the top row lists downstream tasks such as RS Visual QA, Land Cover Classification, RS Object Detection, Temporal Change Detection, RS Visual Grounding, RS Image Captioning, Tree Species Classification, and SAR Object Detection. These tasks are connected by upward arrows to a central pink rectangular block labeled 'Multi-modal Large Language Model', indicating that the model supports these diverse applications.

The middle section details the core processing pipeline. On the left, two parallel pathways handle image inputs at different resolutions. The first pathway processes low-resolution images through 'Resize', followed by 'Encode & Merge' and 'Flatten' to produce 'Low Resolution Features'. The second pathway uses 'Adaptive High Resolution' to split an image into patches, each processed via 'Encode & Merge' and 'Flatten' to yield 'High Resolution Features'. Both feature streams are combined into a unified token sequence.

In the center, textual inputs are processed by a green 'Tokenizer' block, while visual inputs—comprising RGB, Multi-Temporal, Multispectral, SAR, and RGBI images—are fed into a 'Vision Encoder' block. The 'Adaptive High Resolution' module feeds into this encoder, and a 'Data Fusion' block aggregates multi-channel inputs (e.g., multispectral or temporal sequences) before encoding. The encoded visual features are then passed through an 'MLP Projector' to map them into the LLM’s input space.

On the right, a detailed view of the vision encoder pipeline shows 'Feature Batch processing' feeding into a grid of visual features, which undergo 'Feature Aggregation' and 'Interpolate & Flatten' before being projected via another 'MLP Projector'. This entire visual token stream is concatenated with textual tokens using a 'Feature Concatenation' operation, symbolized by a ⊕ icon.

A legend in the upper-left corner defines token types: yellow squares represent 'Visual tokens', blue squares denote 'Modality tokens', beige squares indicate 'Textual tokens', and red squares signify 'Task prompts'. These tokens are arranged in a sequence above the LLM, showing how different modalities and tasks are encoded together.

Arrows indicate data flow: from raw inputs (images and text) through encoding, fusion, projection, and concatenation, culminating in the multi-modal LLM. The model is trained end-to-end to support multiple downstream tasks, leveraging adaptive resolution handling, multi-channel fusion, and modality-aware tokenization to process diverse remote sensing data.
