# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Parallelized Autoregressive Visual Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15119

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a parallel autoregressive generation framework, divided into two main parts: (a) Model Implementation and (b) Visible Tokens during Generation.

In part (a), the global layout is a top-down flow diagram showing the input sequence flowing through an Autoregressive Transformer to produce a target sequence. The input sequence begins with a CLS Token (gray box labeled 'C'), followed by tokens 1, 2, 3 (colored yellow, green, purple respectively), then token 4 (pink), and a set of learnable tokens M1, M2, M3 (light blue boxes). After these, the input continues with grouped tokens: 5a, 5b, 5c, 5d (each in distinct pastel colors), followed by 6a, 6b, 6c, 6d, and 7a, 7b, 7c, 7d, all grouped in dashed boxes. These groups represent parallel decoding units. The Autoregressive Transformer (a large rounded rectangle) receives the input sequence and outputs the target sequence, which mirrors the input structure but includes the predicted tokens. The output tokens 5a–5d, 6a–6d, and 7a–7d are labeled 'Parallel Predicted Tokens' and are shown above the transformer, indicating they are generated in parallel within each group. Arrows point from each input token to the transformer and from the transformer to the corresponding output token, illustrating the forward pass. A label below the learnable tokens reads 'Learnable Tokens for parallel decoding', emphasizing their role in transitioning the model into parallel prediction mode.

Part (b) compares the visible context during generation between the proposed method ('Ours') and traditional single-token prediction. It consists of two side-by-side matrices, each with rows labeled 'Output' (tokens 1, 2, 3, 4, 5a, 5b, 5c, 5d, 6a, 6b, 6c, 6d) and columns labeled 'Input' (same tokens plus C, M1, M2, M3). In both matrices, shaded teal cells indicate tokens that are visible (i.e., accessible via attention) during the prediction of the corresponding output token. In the left matrix ('Ours'), when predicting token 6b, the model can access all tokens from the previous group (5a–5d) and earlier tokens, but not tokens from the current group (6a, 6c, 6d) or future ones. This reflects group-wise full attention within the group. In contrast, the right matrix ('Traditional Single token prediction') shows that when predicting token 6d, the model has access to all previous tokens, including 6a, 6b, and 6c, demonstrating the full causal attention mask typical of standard autoregressive models. The caption clarifies that without full attention, the parallel approach would restrict visibility to only tokens up to the same position in the previous group (e.g., 6b could only see up to 5b), but the proposed method enables group-wise full attention to allow access to the entire previous group, thus maintaining contextual coherence while enabling parallelization.
