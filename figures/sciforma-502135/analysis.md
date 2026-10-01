# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Spatio-Temporal Forecasting of PM2.5 via Spatial-Diffusion guided Encoder-Decoder Architecture — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13935

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed AGNN_GRU model, structured as an encoder-decoder framework. The global layout is horizontally divided into two main components: the Encoder on the left and the Decoder on the right, each enclosed within dashed rectangular boundaries. The Encoder processes historical input data to generate a contextual representation, while the Decoder uses this representation along with current inputs to predict future outputs.

In the Encoder section, the bottom-most component is a gray rounded rectangle labeled '[X^t, ..., X^k; y^t, ..., y^k; G]', representing the input sequence of node features, historical labels, and graph structure G. This input feeds into a blue rounded rectangle labeled 'Graph Neural Network (TransformerConv)', indicating a GNN layer based on the TransformerConv operation. The output of this GNN is added element-wise to the previous hidden state via a circular '+' node. The result is passed to a light green rounded rectangle labeled 'GRU', which denotes a Gated Recurrent Unit. The GRU's output is then fed into an orange rounded rectangle labeled 'MLP' (Multilayer Perceptron), which produces the final encoded representation, shown as a gray rounded rectangle labeled '[ŷ^t, ..., ŷ^k]'.

The Decoder section begins with a gray rounded rectangle at the bottom labeled '[X̄^{k+1}, ..., X̄^T; ŷ^k]', representing the future node feature sequences and the last predicted label from the encoder. This input is processed by a light green rounded rectangle labeled 'GRU', followed by a yellow rounded rectangle labeled 'Luong Attention'. The Luong Attention mechanism takes as additional input the encoded sequence '[ŷ^t, ..., ŷ^k]' from the Encoder, allowing it to attend over the entire history. The output of the attention module is passed to an orange rounded rectangle labeled 'MLP', which generates the final predictions, shown as a gray rounded rectangle labeled '[ŷ^{k+1}, ..., ŷ^T]'.

Connections between modules are represented by solid black arrows indicating the direction of data flow. A horizontal arrow connects the Encoder’s GRU output to the Decoder’s Luong Attention module, enabling the attention mechanism to access the full encoded context. Additionally, a feedback loop from the Encoder’s output (the MLP result) back to the Decoder’s Luong Attention is implied through the direct connection, reinforcing the attention mechanism’s reliance on the encoder’s representation. The overall workflow follows a sequential processing pattern: historical data is encoded using a GNN and GRU, and the resulting representation is used by the decoder—augmented with future inputs and Luong Attention—to generate future predictions.
