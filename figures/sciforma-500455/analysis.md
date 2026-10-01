# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ChatTime: A Unified Multimodal Time Series Foundation Model Bridging Numerical and Textual Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11376

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the overall architecture and training methodology of ChatTime, a framework that enables large language models (LLMs) to process and generate time series data by integrating it into the language modeling pipeline through specialized tokenization and de-tokenization components. The diagram is divided into three main parts: (a) ChatTime Architecture, (b) Continuous Pre-Training, and (c) Instruction Fine-Tuning.

In part (a), the ChatTime Architecture is shown as a vertical flow. At the bottom, a TEXT PROMPT (green dashed box) such as 'Please predict the following sequence.' is input. This is accompanied by a TIME SERIES PROMPT (blue dashed box) containing a waveform visualization, which is processed by a yellow box labeled 'Normalization Discretization Serialization' to convert real-valued time series into discrete tokens. These tokens are formatted as FOREIGN WORDS PROMPT (blue dashed box with entries like '###0.3529###'), which are then fed into an Expanded Tokenizer (gray rectangle). The output of this tokenizer feeds into a Pre-Trained Large Language Model (pink rectangle). The model’s output passes through an Expanded De-Tokenizer (gray rectangle), which converts the model’s predictions back into FOREIGN WORDS OUTPUT (blue dashed box with similar token format). This is then processed by a yellow box labeled 'De-Serialization De-Normalization' to reconstruct the original time series, resulting in a TIME SERIES OUTPUT (blue dashed box with waveform). Finally, the model generates a TEXT OUTPUT (green dashed box) such as 'The following sequence is:', completing the generation loop.

Part (b), titled 'Continuous Pre-Training', shows a purple dashed box labeled 'High Quality Times Series Slices' feeding into a model stack composed of three components: Embedding (orange rectangle with flame icon), Transformer Layers (blue rectangle with snowflake icon), and LM Head (orange rectangle with flame icon). The flame icons suggest active or trainable components, while the snowflake may indicate frozen or shared parameters during pre-training.

Part (c), 'Instruction Fine-Tuning', displays a stack of four tasks in purple dashed boxes: Text Q&A, Time Series Forecasting, Time Series Q&A, and Context-Guided Time Series Forecasting. These tasks feed into a similar model stack as in (b), but here the Embedding and LM Head are blue with snowflake icons, indicating they are fine-tuned together with the Transformer Layers (blue with snowflake), suggesting a full fine-tuning approach.

The figure emphasizes that the core innovation lies in extending the tokenizer and de-tokenizer to handle time series data via serialization/deserialization, allowing existing LLMs to be pre-trained and fine-tuned without architectural changes. The visual elements—colors (green for text, blue for time series, gray for tokenizers, pink for LLM, orange for trainable heads, yellow for processing plugins), shapes (rectangles for modules, dashed boxes for inputs/outputs), and icons (flame for trainable, snowflake for frozen)—help distinguish functional roles and training phases.
