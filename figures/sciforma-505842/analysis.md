# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TimeRAF: Retrieval-Augmented Foundation model for Zero-shot Time Series Forecasting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20810

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a knowledge-enhanced time series forecasting framework, structured as a left-to-right pipeline with feedback loops for training. The global layout is divided into three main horizontal zones: input processing on the left, core forecasting components in the center, and prediction evaluation on the right. A legend at the top right clarifies arrow types: solid blue arrows indicate forward propagation, dashed blue arrows denote backward propagation (gradient flow), solid red arrows represent retrieval or knowledge injection, and dashed red arrows signify backward updates to the retriever.

On the far left, the 'Input' is depicted as a red waveform signal enclosed in a dashed teal box, feeding into a sequence container labeled 'Input | c₁ | c₂ | ... | cₖ', where each cᵢ is a pink rectangular token. Below this, a 'Knowledge Base' represented by a pink database icon connects via a red arrow to a central red rectangular module labeled 'Retriever', which contains a flame icon indicating active computation. The Retriever performs a 'Top K' search, symbolized by a magnifying glass, retrieving a set of pink tokens 'c₁ | c₂ | ... | cₖ' from the knowledge base. These retrieved tokens are then injected into the input sequence via a red arrow pointing upward to the input container, merging with the original input tokens.

The central component is the 'Forecaster', a large rounded rectangle with a light purple background. It consists of two stacked modules: the upper one, 'Channel Prompting', shaded with a gradient from blue to pink and marked with a flame icon, and the lower one, 'Backbone', shaded light blue with a snowflake icon, suggesting it is frozen during training. The merged input sequence (original input plus retrieved tokens) flows into the Channel Prompting module via a solid blue arrow. The output of Channel Prompting feeds into the Backbone, which then produces the final predictions.

On the right side, the 'Prediction' block contains a sequence of predicted values 'p₁ | p₂ | ... | pₖ' inside a dashed blue box, with a single 'p' above it. This prediction is compared against the 'Ground Truth', shown as a red waveform with a blue segment indicating the forecast horizon, enclosed in a dashed teal box. A dashed blue arrow connects Ground Truth to Prediction, representing the loss computation. From there, a dashed blue arrow labeled 'update' flows back to the Channel Prompting module, indicating gradient-based parameter updates. Additionally, a dashed red arrow labeled 'update' flows from the prediction block back to the Retriever, signifying that the retriever's parameters are also updated during training based on prediction performance.

The entire process follows a forward pass from Input → Retriever → Forecaster → Prediction, and a backward pass from Ground Truth ← Prediction → Forecaster → Retriever, enabling end-to-end learning while keeping the Backbone frozen as specified in the caption.
