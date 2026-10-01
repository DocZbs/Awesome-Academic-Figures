# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Context Aware Lemmatization and Morphological Tagging Method in Turkish — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02361

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the decoder architecture of a neural network model designed for lemmatization and morphological tagging tasks. The global layout is a vertical flowchart, progressing from top to bottom, depicting the sequential processing stages within the decoder. The structure begins with two input components at the top: 'Encoder' on the left and 'Decoder Input' on the right. These inputs feed into subsequent layers, which are arranged vertically in a linear pipeline, except for a feedback connection from the Encoder to an intermediate layer.

Visual modules are represented as rounded rectangles, each with distinct background colors and labeled with black text. The 'Encoder' and 'Output' blocks are light orange, indicating their role as boundary components. The 'Decoder Input' block is light yellow. The 'Embedding' layer is light green, followed by the 'Stacked Bi-directional LSTM' layer in light blue. The 'Bahdanau Attention' module is shown in light purple, the 'Feed Forward Network' in light red, and the 'Softmax' layer in light gray. All modules have black borders and centered text labels.

Connections between modules are indicated by solid black arrows pointing downward, representing the forward flow of data or activations. A dashed black arrow originates from the 'Encoder' block and points to the 'Bahdanau Attention' layer, signifying the transmission of the hidden state from the last Bi-LSTM layer of the encoder to the attention mechanism. This dashed line distinguishes it from the standard data flow, emphasizing its role as contextual information rather than direct activation. The solid arrows connect 'Decoder Input' → 'Embedding' → 'Stacked Bi-directional LSTM' → 'Bahdanau Attention' → 'Feed Forward Network' → 'Softmax' → 'Output', forming the main decoding pathway. The 'Bahdanau Attention' layer receives both the current decoder state (from the LSTM) and the encoder's hidden states (via the dashed arrow), enabling context-aware prediction. The final 'Softmax' layer produces a probability distribution over the output vocabulary, leading to the final 'Output'.

The caption clarifies that solid arrows represent layer outputs, while the dashed arrow specifically denotes the hidden state output from the last Bi-LSTM layer of the encoder, which is crucial for the attention mechanism. No mathematical equations are present in the figure, but the architecture implies standard operations: embedding lookup, recurrent processing via stacked bidirectional LSTMs, attention computation using Bahdanau’s additive attention mechanism, feed-forward transformation, and softmax normalization for classification.
