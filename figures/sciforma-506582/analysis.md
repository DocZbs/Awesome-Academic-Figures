# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Time Series Language Model for Descriptive Caption Generation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01832

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an end-to-end pipeline for generating a descriptive caption from an unseen time series, divided into two main stages: (a) Time Series Language Model (TSLM) and (b) Summarization of Generated Captions. The global layout is horizontal, with data flowing from left to right through distinct modules enclosed in dashed boxes. Stage (a) begins with a green curved line feeding into a light blue trapezoidal block labeled 'Time Series Encoder', which outputs two streams: one directly to the TSLM module and another to the summarization stage. The TSLM module is enclosed in a dashed rectangle and contains a purple rectangular prompt box at the top with the instruction: '[CLS] Describe this time series <time_series> encoded by <time_series_embedding>'. Below this, a light blue rectangular block labeled 'Multi-Modal Encoder (Matrix)' receives input from the prompt and the encoder output. This is followed by another light blue block labeled 'Text Decoder', which produces a single output labeled 'Caption'. However, the diagram shows multiple outputs—'Caption 1', 'Caption 2', ..., 'Caption K'—each represented as an orange-bordered rectangle, indicating that K captions are generated. These K captions are then passed to stage (b), which is also enclosed in a dashed rectangle. This stage begins with a large purple rounded rectangle containing the instruction: 'You are given these captions that describe multiple characteristics of a time series: Caption 1, Caption 2, ..., Caption K. Please summarize these captions by highlighting the important aspects in a single sentence.' This instruction feeds into a gray rounded rectangle representing the summarization model, which contains a small cartoon image of a llama (symbolizing LLaMA2-13B-Chat) on the left. Inside this gray block, there are two stacked rectangular components: 'Embedding' at the bottom and 'Multi-Head Attention' above it, with arrows indicating sequential processing. The final output of this stage is labeled 'Descriptive Caption' and exits to the right. All connections are represented by solid black arrows, showing the direction of data flow. The visual attributes include color-coded blocks: light blue for encoding/decoding components, orange for individual captions, purple for instruction prompts, and gray for the summarization model. Text labels are clear and positioned centrally within each component. The overall structure reflects a two-phase process: first, generating multiple diverse captions using a multi-modal language model, and second, summarizing them into a single coherent descriptive caption using a large language model.
