# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14363

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a model inference pipeline using ResQ, a method that incorporates projection matrices to enable efficient quantization while preserving performance. The diagram is divided into three main parts: (a) the overall model flow, (b) the attention block details, and (c) the feed-forward block details.

[1] Global Layout and Structure:

The top-level structure (a) shows a sequential flow from left to right, starting with an embedding layer (W_embed), followed by a series of transformer blocks, and ending with a head layer (W_head). Each transformer block consists of two main components: an Attention Block and a Feed Forward Block, both enclosed in dashed boxes. The flow is linear, with outputs from one block feeding into the next. The projection matrix U_A is shown as a recurring component, modifying inputs at each stage, which facilitates better quantization across blocks.

[2] Visual Modules and Attributes:

In part (a), the embedding layer is represented by a yellow rectangle labeled W_embed, followed by a purple square labeled U_A. The Attention Block and Feed Forward Block are gray rectangles. The output of each block is again modified by U_A before proceeding. The final head layer is another yellow rectangle labeled W_head, preceded by U_A^T.

Part (b) details the Attention Block. It includes three parallel paths: q_proj, k_proj, and v_proj, each containing a merged weight block (purple U_A^T and yellow W_Q/W_K/W_V) with a striped border indicating 'merged and mixed precision weights'. The k_proj and q_proj paths also include RoPE (blue rectangle labeled U_C) and a blue striped rectangle representing 'mixed precision quant'. The outputs of these paths are combined via a Softmax operation (white rounded rectangle), then multiplied with the output projection (o_proj), which contains U_A^T, W_O, and U_B (green) — indicating 'merged projections'.

Part (c) details the Feed Forward Block. It has two input paths: up_proj and gate_proj, each with U_A^T and W_u or W_g (yellow) in merged weight blocks. These are followed by an activation function (Act), then a Hadamard product (diamond symbol labeled U_D) — denoted as 'on-the-fly Hadamard projection' — and finally a down_proj layer. The down_proj layer contains U_D^T, W_d (yellow), and U_A (purple), forming 'merged and uniform precision weights', with a light blue rectangle indicating 'uniform precision quant'.

The legend at the bottom clarifies visual elements: blue striped rectangles denote 'mixed precision quant'; light blue rectangles denote 'uniform precision quant'; orange-striped boxes with multiple colored blocks represent 'merged and mixed precision weights'; white diamond with yellow and purple blocks represent 'merged and uniform precision weights'; white diamond alone represents 'on-the-fly Hadamard projection'; blue rectangles represent 'on-the-fly projection'; and purple and green blocks together represent 'merged projections'.

[3] Connections and Arrows:

Arrows indicate data flow. In (a), the flow is left-to-right through the blocks, with U_A applied at each stage. In (b), the q_proj, k_proj, and v_proj paths converge into Softmax, whose output is multiplied with o_proj. In (c), the up_proj and gate_proj paths merge after activation, then undergo Hadamard multiplication with U_D, and finally pass through down_proj. All connections are solid lines, with some arrows showing explicit operations like ⊗ (Hadamard product) or ⊙ (element-wise multiplication).
