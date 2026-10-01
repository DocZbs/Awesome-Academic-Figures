# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CM3T: Framework for Efficient Multimodal Learning for Inhomogeneous Interaction Datasets — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03332

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=507000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the detailed architecture of CM3T, a multimodal transformer model incorporating three distinct trainable components—Prefix Tuning, Multi-Head Vision Adapter, and Adapter Fusion—each highlighted in a unique color (red, blue, and green respectively), while the remaining parts of the model are frozen during fine-tuning. The global layout follows a standard transformer block structure, starting from an input x, progressing through self-attention and feed-forward layers, and culminating in an output. The input x feeds into a 'Hidden State' block, which then connects to a 'Multi-Head Attention' module containing Q, K, V projections via W_Q, W_K, W_V matrices. This self-attention block is augmented by a red-colored 'Prefix Tuning' module, labeled 'Prefix Tuning added to each head', which includes a 'Gated Addition' layer receiving Δh_p from a softmax layer fed by W'_up and W'_down matrices. The prefix tuning module injects learned prefixes h_p into the self-attention mechanism via dashed lines. Parallel to this, a blue-colored 'Multi-Head Vision Adapter' processes a separate input h_a, passing it through W_down, ReLU, and W_up layers to produce Δh_a, which is concatenated with the main flow after scaling. The concatenated output is then processed by a green-colored 'Adapter Fusion' block, which receives multiple modalities via 'Modality (n) Embedding'. This block contains a 'Cross-Attention' module with Q', K', V' projections (W'_Q, W'_K, W'_V), followed by Layer Norm, Linear, Add & Layer Norm, and finally a fusion mechanism involving Q'', K'', V'' projections feeding into a softmax and a multiplicative gate (denoted by ⊗) to produce z'. The fused output z' is combined with the main stream via a summation node before proceeding through two sequential 'Layer Norm' blocks, a 'Linear' layer, and an 'Adapter' module (blue), all connected in a residual fashion. The final output is generated after another 'Layer Norm'. Dashed lines indicate auxiliary or modality-specific connections, while solid arrows denote primary data flow. The diagram emphasizes modularity and efficient parameterization through adapters and prefix tuning, with the colored modules representing the trainable components.
