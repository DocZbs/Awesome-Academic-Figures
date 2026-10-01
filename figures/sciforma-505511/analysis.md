# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Geo-ConvGRU: Geographically Masked Convolutional Gated Recurrent Unit for Bird-Eye View Segmentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20171

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a ConvGRU (Convolutional Gated Recurrent Unit) cell, a variant of the GRU designed for spatial-temporal data processing. The global layout is horizontally oriented, divided into two main computational branches: the reset gate branch on the left and the update gate branch on the right, both converging toward the final output computation at the bottom center. The structure follows a sequential flow from inputs at the top and left to the output at the bottom.

Visual modules include rectangular boxes representing weight matrices or convolutional kernels (labeled U_r, W_r, U_z, W_z, U, W), circular nodes denoting activation functions (σ for sigmoid, tanh for hyperbolic tangent), and special symbols for operations: ⊙ for element-wise multiplication, ⊕ for element-wise addition, and ¬ for logical NOT (as noted in the caption). Inputs are labeled h_{t−1} (previous hidden state) and f_t (current feature map), entering from the top and left sides respectively.

In the left branch, h_{t−1} and f_t are fed into U_r and W_r respectively, whose outputs are summed and passed through a sigmoid function σ to produce r_t (reset gate). This r_t is then multiplied element-wise (⊙) with h_{t−1}, and the result is combined with f_t via matrix U and W before being passed through tanh to compute the candidate activation.

In the right branch, h_{t−1} and f_t are similarly processed by U_z and W_z, summed, and passed through σ to produce z_t (update gate). This z_t is inverted using the ¬ operator (NOT process), then multiplied element-wise with h_{t−1}. Simultaneously, the candidate activation from the left branch is multiplied element-wise with z_t.

Finally, the two results — the inverted update gate multiplied by previous state and the update gate multiplied by candidate activation — are added together via ⊕ to produce the new hidden state h_t or updated feature map f̂_t, labeled as h_t/f̂_t at the bottom. The diagram uses black lines with arrowheads to indicate data flow direction, and all mathematical symbols and labels are rendered in standard LaTeX-style notation.
