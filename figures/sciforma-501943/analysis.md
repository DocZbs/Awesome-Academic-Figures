# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Typhoon 2: A Family of Open Text and Multimodal Thai Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a dual-path architecture for simultaneous text and speech generation, split into two main sections: 'Text Generation' on the left and 'Speech Generation' on the right, separated by a vertical dashed line. The overall layout is horizontal, with each path showing a top-down flow of data through a shared Large Language Model (LLM) and distinct downstream components.

In the Text Generation path, input embeddings (x) are fed into a wide purple rectangular block labeled 'LLM'. The LLM processes these inputs and produces output hidden states, which are passed upward to a second purple rectangular block labeled 'Language Model Head + Softmax'. This head generates the final 'Text Output', indicated by an arrow pointing upward from the block. The output embeddings (y) are also shown as inputs to the LLM, suggesting autoregressive processing. All connections are represented by solid black arrows pointing upward, indicating forward propagation.

In the Speech Generation path, the same LLM receives identical input embeddings (x) and output embeddings (y), indicating that the same model is used for both tasks. The output hidden states from the LLM are upsampled and passed to a light orange rectangular block labeled 'Speech Decoder'. This decoder outputs 'Discrete Speech Units', which are then fed into a light green rectangular block labeled 'Unit Vocoder'. The vocoder generates the final 'Audio Output', depicted as a waveform. A small flame icon appears next to both the Speech Decoder and Unit Vocoder, possibly indicating computational intensity or real-time processing. A green arrow labeled 'latency' points from the Audio Output back toward the vocoder, suggesting a feedback or timing consideration.

A key feature highlighted in the center, between the two paths, is the statement: 'Text Generation and Speech Generation can be done simultaneously in parallel', emphasizing the concurrent nature of the two processes. The LLM in the Speech Generation path has a small snowflake icon, potentially denoting a different mode or optimization (e.g., inference mode) compared to the text path. The entire Speech Generation pipeline is enclosed in a red dashed rectangle, visually grouping the components specific to speech synthesis. The figure uses consistent color coding: purple for the LLM and language model head, orange for the speech decoder, and green for the unit vocoder. All text labels are in black, with clear, legible fonts. The diagram is clean, with no overlapping elements, and uses standard block-and-arrow notation for clarity.
