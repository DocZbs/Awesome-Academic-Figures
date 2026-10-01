# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RWKV-edge: Deeply Compressed RWKV for Resource-Constrained Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10856

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a simplified architectural diagram of a single RWKV block, which is repeated L times in the full model. The overall structure is vertically organized into two main processing components: a 'Time-mix' layer at the bottom and a 'Channel mix' layer above it, both enclosed within a large brown rounded rectangle representing the entire block. At the top of the block is a red rectangular component labeled 'head', and at the bottom is a green rectangular component labeled 'emb', representing the embedding cache. A legend on the right side indicates color coding: white for original operators, orange for decomposed weights, purple for sparsity predictor, red for hierarchical head, and green for embedding cache.

The input to the block consists of three pink rounded rectangles on the left: x_{t-1}, wkv_{t-1}, and x'_{t-1}. These feed into the Time-mix and Channel mix layers. The Time-mix layer begins with a 'Token shift' operation (white box) that processes x_{t-1} and outputs to four orange weight matrices: W_g, W_r, W_k, and W_v. These weights are then used in parallel paths: W_g feeds into a SiLU activation function (white box), while W_r, W_k, and W_v are multiplied element-wise (*) with the output of a Layer Normalization (LN) applied to the input. The SiLU output and the LN output are then multiplied together (•) to produce an 'Out' signal. This 'Out' is added (+) to the result of another LN applied to the input, forming the residual connection. The output of this addition is passed through another LN before being sent to the Channel mix layer.

In the Channel mix layer, the input x'_{t-1} undergoes a 'Token shift' (white box) and is split into two paths. One path goes to a purple weight matrix W_k, the other to a purple weight matrix W_v. Additionally, an orange weight matrix W_r is connected to a σ (sigmoid) function, which produces a sparsity prediction signal. The outputs from W_k and W_v are multiplied (•) with the sparsity signal, and the result is added (+) to the output from the Time-mix layer. This sum is then passed to the 'head' component at the top.

Outputs from the block are shown on the right: x_t (from the Time-mix layer), wkv_t (from the Time-mix layer), and x'_t (from the Channel mix layer). The 'emb' component at the bottom connects via an arrow to the first LN in the Time-mix layer, indicating the embedding cache's role in feeding initial state information. All operations are connected by black arrows indicating data flow, and the diagram uses standard symbols for addition (+), multiplication (•, *), and activation functions (SiLU, σ). The layout emphasizes a sequential, residual-based flow from inputs to outputs, with clear separation between time-dependent and channel-dependent processing.
