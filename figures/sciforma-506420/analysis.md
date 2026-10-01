# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DeepFilter: A Transformer-style Framework for Accurate and Efficient Process Monitoring — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01342

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the DeepFilter architecture, illustrating its core components and data flow. The global layout is divided into two main sections: on the left, a sequential neural network structure labeled 'GF block' is shown, and on the right, a detailed breakdown of the 'Efficient filtering layer' within the GF block is depicted. The entire architecture processes input data X ∈ ℝ^(T×D), where T denotes time steps and D represents feature dimensions.

On the left side, the workflow begins at the bottom with an Affine layer receiving the input X. This feeds into a repeated module labeled 'GF block', which is enclosed in a dashed gray rectangle and marked with '×K' to indicate K repetitions. Inside each GF block, the data flows through an Efficient filtering layer, followed by Layer-norm, then an FFN (Feed-Forward Network) layer, another Layer-norm, and finally a summation operation (represented by a circle with a plus sign) that combines the output of the FFN layer with the residual connection from the Efficient filtering layer. The output of this residual connection is denoted as R ∈ ℝ^(T×D). The processed signal then passes through a GRU (Gated Recurrent Unit) layer at the top, producing the final output ŷ^H ∈ ℝ.

On the right side, the Efficient filtering layer is expanded to show its internal mechanism. It begins with the input Z ∈ ℝ^(T×D), represented visually as a temporal tensor with blue sinusoidal waves. This tensor undergoes a Fast Fourier Transform (FFT), converting it into the frequency domain, resulting in Z^(F) ∈ ℂ^(T×D), depicted as red discrete points representing frequency components. These frequency components are then multiplied element-wise (indicated by a ⊗ symbol) with a learnable frequency filter matrix W^(F), shown as a vertical array of red dots. The result is transformed back to the time domain via Inverse Fast Fourier Transform (IFFT), yielding Ž ∈ ℝ^(T×D), again visualized as a temporal tensor. A dashed line connects this expanded view to the Efficient filtering layer in the GF block, indicating that this is the internal computation performed by that layer.

Visual attributes include rounded rectangular boxes for layers, solid black arrows for data flow, and dashed lines for structural grouping or expansion. The temporal tensor is illustrated with blue sine waves, while the frequency tensor is shown with red discrete points. Mathematical notations are placed adjacent to relevant components to denote input/output dimensions and transformations. The overall structure emphasizes a modular design with residual connections and frequency-domain filtering for efficient processing.
