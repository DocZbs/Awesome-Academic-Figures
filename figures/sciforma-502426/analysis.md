# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Self-Supervised Video Hashing with Selective State Spaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14518

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a self-supervised video hashing framework, structured into three main components: (a) Bidirectional Mamba Layer in Encoder and Decoder, (b) Pseudo Hash Center Generation by Optimization, and (c) Efficient Self-Supervised Video Hashing Learning.

[1] Global Layout and Structure:
The diagram is divided into three distinct sections labeled (a), (b), and (c), arranged horizontally from left to right. Section (a) details the internal architecture of the bidirectional Mamba layer used in both encoder and decoder. Section (b) illustrates the optimization-based generation of pseudo hash centers. Section (c) outlines the complete end-to-end pipeline for self-supervised video hashing learning, including data processing, encoding, hashing, decoding, and loss computation. The entire diagram flows logically from input video frames through multiple stages of transformation and learning to produce final hash representations.

[2] Visual Modules and Attributes:
In section (a), the bidirectional Mamba layer is depicted as a stack of Mamba blocks operating in forward and backward directions. Each block contains a sequence of modules: Linear, LN (Layer Normalization), SSM (State Space Model), SiLU activation, Convolution, and another Linear followed by LN. These are represented as colored rectangular boxes (yellow for Linear, green for LN, purple for SSM, orange for SiLU, brown for Conv) connected sequentially. Input and output tokens are shown as dashed boxes with colored rectangles representing token embeddings. The k-th layer processes these tokens bidirectionally, with arrows indicating forward and backward passes.

Section (b) shows a geometric representation of feature space and Hamming space. Video features are clustered via k-means, forming clusters represented as colored regions in feature space. An optimization process (labeled ℓ_p-ADMM optimization) maps these clusters to hash centers in Hamming space, visualized as points on a grid. The transformation is guided by requirements: good separation and semantic consistency, highlighted in a green box.

Section (c) begins with video frames fed into a 2D CNN (green box) to extract features F_i. Temporal sampling produces two views (View-1 and View-2), each processed through a shared Temporal Encoder (blue box, labeled ε_t), followed by a shared Hash Layer (orange box, labeled H). The resulting hash vectors H_i^(1) and H_i^(2) are pooled to obtain video-level hash vectors b_i^(1) and b_i^(2). These are compared in Hamming space via losses L_CL (contrastive learning) and L_CA (center alignment). A Temporal Decoder (purple box, labeled D_t) reconstructs masked frames using positional encoding and [MASK] tokens, with reconstruction loss L_TR applied. The final outputs are reconstructed frames F̂_i^(1) and F̂_i^(2), compared against original frames F_i.

[3] Connections and Arrows:
In section (a), arrows indicate the flow of tokens through forward and backward Mamba blocks, with residual connections shown as direct links bypassing the blocks. In section (b), arrows connect video features to k-means clusters, then to hash centers via optimization, emphasizing the mapping between spaces. In section (c), arrows show the flow from video frames → 2D CNN → temporal sampling → encoder → hash layer → pooling → hash vectors → losses (L_CL, L_CA). Parallel paths for View-1 and View-2 converge at the hash layer and decoder. Masked tokens and positional encoding feed into the decoder. Reconstruction outputs are compared with original frames via L_TR. Shared components (encoder, hash layer, decoder) are indicated by dashed lines connecting identical modules across views.
