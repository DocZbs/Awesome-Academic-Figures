# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MERaLiON-SpeechEncoder: Towards a Speech Foundation Model for Singapore and Beyond — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11538

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct architectural configurations for utilizing the MERaLiON Speech Encoder, arranged side-by-side from left to right, separated by vertical dotted lines. Each configuration illustrates a different strategy for downstream task adaptation, starting from the same 'Audio Input' at the top.

[1] Global Layout and Structure:
The diagram is divided into three vertical panels, each depicting a complete processing pipeline. All pipelines begin with 'Audio Input' at the top, flow downward through a series of modules, and end with 'Output' at the bottom. The left panel shows a simple end-to-end fine-tuning setup. The middle panel introduces feature extraction with a weighted combination of encoder layers. The right panel demonstrates integration with a large language model (LLM) for multimodal processing.

[2] Visual Modules and Attributes:
In all panels, the 'MERaLiON Speech Encoder' is represented as a rounded rectangle with a light green fill and dark blue border. In the left panel, it has a small orange flame icon, indicating full fine-tuning. In the middle panel, it has a blue snowflake icon, indicating frozen weights during feature extraction. In the right panel, it has both icons (flame/snowflake), suggesting a hybrid or configurable mode.

In the left panel, the 'Task specific decoder' is a light blue rounded rectangle with a flame icon, signifying it is also fine-tuned. In the middle panel, the same decoder appears with a flame icon, but now receives input from a 'Weighted sum' module (gray rectangle with flame icon) that aggregates outputs from multiple layers (Layer 1, Layer 2, ..., Layer n) of the encoder.

In the right panel, the 'Adaptor' is a gray rectangle with a flame icon, processing the encoder output. Below it, 'Speech Embeddings' are shown as a sequence of dashed green squares, which are concatenated with a 'Text Prompt' before being fed into the 'Large Language Model'—a large light blue rounded rectangle with both flame and snowflake icons, indicating potential for partial fine-tuning or freezing.

[3] Connections and Arrows:
All connections are solid black arrows pointing downward, indicating data flow. In the left panel, audio flows into the encoder, then directly to the decoder, producing output.

In the middle panel, audio enters the encoder, whose outputs from multiple layers are fed into the 'Weighted sum' module, which then connects to the 'Task specific decoder'.

In the right panel, audio goes to the encoder, then to the 'Adaptor', which produces 'Speech Embeddings'. These embeddings are combined with a 'Text Prompt' and sent to the 'Large Language Model', which generates the final 'Output'.

The figure visually contrasts three paradigms: full fine-tuning (left), frozen feature extraction with layer aggregation (middle), and multimodal LLM integration (right), as described in the caption.
