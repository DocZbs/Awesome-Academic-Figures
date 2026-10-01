# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ORFormer: Occlusion-Robust Transformer for Accurate Facial Landmark Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13174

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the network architecture of ORFormer, a transformer-based model designed for generating code sequences and detecting occlusions from image patches. The global layout is structured as a left-to-right pipeline enclosed within a double-bordered box, with the main processing block labeled 'ORFormer' on the right side. The architecture begins with an input of image patches denoted as P, which is fed into the first layer of the model. The core of the model consists of multiple stacked layers, each containing two parallel attention mechanisms: self-attention and cross-attention. These are represented as rounded rectangles — self-attention in light blue and cross-attention in pink — indicating their distinct roles. The self-attention module receives three inputs: Q_x^l, K_x^l, and V_x^l, all derived from the image patch token sequence X^l, which is shown as a blue square. The cross-attention module receives Q_M^l from the messenger token sequence M^l, depicted as a pink square, and also uses the same K_x^l and V_x^l from the image patches. Outputs from both attention modules are combined via element-wise addition (indicated by a ⊕ symbol) and then passed through a vertical yellow rectangle labeled 'Feed Forward Network'. This network produces updated representations X^{l+1} and M^{l+1}, which are fed back into the next layer, forming a multi-layered structure indicated by the ×L notation above the output. Additionally, the feed-forward output is directed to a green rounded rectangle labeled 'Occlusion Detection Head', which outputs α^{l+1}, representing the occlusion likelihood for each patch. This occlusion map α is accumulated across layers and output at the end. On the far right, within the ORFormer block, an orange rounded rectangle labeled 'Codebook Prediction Head' takes both X^{l+1} and M^{l+1} as inputs and generates two separate code sequences: S_I (blue box) derived from image patch tokens, and S_M (pink box) derived from messenger tokens. A legend at the bottom left clarifies visual elements: 's' denotes scalar values, 'e' (blue box) denotes embeddings, 'p' (white box with blue border) denotes probabilities, and '⊕' denotes addition operations. The entire architecture emphasizes dual-path processing — one for image content and one for messenger tokens — enabling joint code generation and occlusion detection.
