# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Speech Command Recognition Leveraging Spiking Neural Network and Curriculum Learning-based Knowledge Distillation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12858

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the SpikeSCR method, divided into two main parts: (a) Pipeline and (b) Framework. In part (a), the pipeline is depicted as a vertical sequence of four rectangular modules connected by downward arrows. It begins with 'Input Data', followed by 'Spike/Spec Augment Module (SAM)' in light blue, then 'Spiking Embedded Module (SEM)' in light peach, next 'Spiking Global-Local Encoder (SGLE)' in light yellow with a multiplication symbol '× L' indicating multiple blocks, and finally 'Classification Head' in light green. This illustrates the sequential flow from raw input through augmentation, embedding, encoding, and classification.

Part (b) provides a detailed framework view. At the top right, 'Input Data' is shown as two options: SHD/SSC (Spike Raster) or GSC (Mel Spectrogram), each represented by a visual example — a sparse black-and-white raster plot for spikes and a colorful spectrogram for Mel features. An arrow points left to the 'Spike/Spec Augment Module (SAM)', which displays two output examples: a spike raster and a spectrogram, both with time on the x-axis and neurons/frequency bins on the y-axis, separated by a vertical line. From SAM, a downward arrow leads to the 'Spiking Embedded Module (SEM)', shown as a rounded rectangle containing a Conv1D layer (orange), Batch Normalization (BN, gray), and a Spike Neuron (red sine-like icon), all connected sequentially.

From SEM, an arrow leads to the 'Spiking Global-Local Encoder (SGLE) × L', a large beige box split into two parallel paths: 'Global Representation Learning' and 'Local Representation Learning'. The global path includes 'SSA with Rotary Position Embedding' (blue), followed by a Feed-forward Module (green), then a 'Separable Gated Convolution' (pink), and another Feed-forward Module (green). The local path mirrors this structure but starts with a different initial block. Both paths have shortcut connections indicated by dashed orange lines.

Below the SGLE block, a detailed breakdown of the SSA component is shown within a dashed blue rectangle. It takes an input tensor (gray cube with red spikes) and branches into three paths via weight matrices Wq, Wk, Wv (each followed by a Spike Neuron). These produce query (Qs), key (Ks), and value (Vs) tensors. Qs and Ks undergo RoPE (Rotary Position Embedding, star icon) before Hadamard Product (star icon) and matrix multiplication (black circle), resulting in a T×T attention map. After scaling and transpose, this is multiplied with Vs (T×D) to produce the output, which passes through Wo and a Spike Neuron.

To the right, the 'Separable Gated Convolution' is expanded into a stack: SGU (Spiking Gated Unit, blue), BN, PWConv1D (Pointwise Convolution, orange), BN, DWConv1D (Depthwise Convolution, yellow), BN, and another PWConv1D. Adjacent to it, the Feed-forward Module is shown as BN, Linear, BN, Linear, each followed by a Spike Neuron.

At the bottom, a legend defines symbols: Spike Neuron (red sine icon), Shortcut Connections (orange arrow), Hadamard Product (star), Matrix Multiplication (black circle), PWConv (orange box), SGU (blue box), and DWConv (yellow box). The entire framework emphasizes spike-driven computation, aligning with SNN characteristics.
