# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Population Aware Diffusion for Time Series Generation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00910

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the PaD-TS model, designed for time series generation using a diffusion-based approach. The global layout is divided into three main horizontal sections: the Temporal Channel (top), Cross-Dim Channel (middle), and Diffusion Step Embedding (bottom), all feeding into a Generation module on the right. The input data X^t, represented as a grid of F x L dimensions, splits into two parallel processing streams. In the Temporal Channel, X^t passes through a Dense layer, then combines with positional encoding (denoted by a wavy circle symbol) via addition (plus sign symbol), forming h_T, which is fed into an Encoder block. Similarly, in the Cross-Dim Channel, X^t goes through another Dense layer to produce h_D, which is also processed by an Encoder. Both encoders output representations H_T and H_D, respectively. Below these channels, the Diffusion Step Embedding module takes a scalar input t (dimension 1 x H) and processes it through a multi-layer perceptron (MLP) composed of three layers with fully connected weights, producing a learned embedding t_emb. This embedding is shared across both generation branches. In the Generation module, H_T and H_D are each passed through multiple stacked DiTs (Diffusion Transformers) blocks, which are depicted as layered rectangles with gradient shading from red to yellow. Each DiT block outputs O_T^i and O_D^i, respectively. These outputs are summed with the shared t_emb via addition operations before being passed through separate Dense layers. Finally, the outputs from both Dense layers are combined via addition to produce the final output X_out, which has the same dimensionality as the input (F x L). The figure includes a legend indicating that the wavy circle represents Positional Encoding and the plus sign represents Addition. The overall flow follows a dual-branch encoder-decoder structure with shared diffusion step conditioning.
