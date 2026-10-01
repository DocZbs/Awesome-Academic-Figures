# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

APAR: Modeling Irregular Target Functions in Tabular Regression via Arithmetic-Aware Pre-Training and Adaptive-Regularized Fine-Tuning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10941

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Adaptive Regularization Fine-Tuning phase of the APAR framework, structured as a horizontal workflow from left to right. The global layout consists of two parallel processing streams: a primary path for standard feature encoding and prediction, and a secondary path for adaptive regularization via feature gating. Both paths converge at the output prediction stage, where separate loss functions are applied.

In the top stream, an input sample is represented as a stack of four feature tokens (x_i0 to x_i3), each color-coded (light blue, blue, orange, red), along with a target label y_i (light green box). These features pass through a 'Feature Tokenizer' (gray rectangle) to produce corresponding embeddings Z_i, maintaining the same color-coding. A special [CLS] token is then concatenated (indicated by ⊕ symbol) to the top of Z_i, forming an input sequence for the 'Feature Encoder' (gray rectangle). The encoder outputs a sequence Z_iL, where the [CLS] token’s embedding is extracted and fed into an MLP (Multi-Layer Perceptron) to generate a predicted label ŷ_i^AR. This prediction is compared to the true label y_i via a loss function L_target.

The bottom stream introduces adaptive regularization. It begins with a module containing two components: a mask π (gray grid) and a matrix R (checkerboard pattern), both feeding into a 'MultiBern' block (gray rectangle) governed by Eq. (12). This generates a sparsity loss L_sparsity (Eq. (13)). The MultiBern block also outputs a gate vector m̃ (yellow and white stacked bars), which is element-wise multiplied (⊗ symbol, per Eq. (14)) with the original feature embeddings Z_i to produce gated embeddings Z̃_i. The [CLS] token is again concatenated to Z̃_i before being processed by a second 'Feature Encoder' (identical to the top one, indicated by dotted lines signifying weight sharing). The resulting output Z̃_iL feeds into another shared-weight MLP, producing a regularized prediction ŷ̃_i^AR, which is compared to y_i using a regularization loss L_reg.

Key visual attributes include color-coded feature tokens (blue, orange, red), gray boxes for modules, light green for labels, and yellow/white for the gate vector. The legend in the lower-right corner clarifies symbols: ⊕ for concatenate, ⊗ for element-wise multiply, ⊖ for stack, and dotted lines for weight sharing. The entire diagram emphasizes the dual-path design enabling robust training through dynamic feature selection and regularization.
