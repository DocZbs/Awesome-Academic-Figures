# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Lightweight Transformer with Phase-Only Cross-Attention for Illumination-Invariant Biometric Authentication — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19160

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic diagram of the Phase only Correlation Cross Spectral Attention (POC-CSA) module, enclosed within a rounded rectangular container with a light peach background and bold black border. The title 'Phase only Correlation Cross Spectral Attention (POC-CSA)' is centered at the top in bold black font. The module processes two input sequences: x₁ (channel input) and x₂ (cross-channel input), both entering from the left side.

The architecture consists of three parallel processing streams. Each stream begins with a Conv1D layer, represented as a rounded rectangle with a light blue fill and dark blue border. The top stream receives x₁ and outputs V, which is directly routed to the final MatMul operation. The middle stream also receives x₁, passes it through a Conv1D layer, then applies an FFT (Fast Fourier Transform) block—shown as a smaller rounded rectangle with a darker blue fill and dark blue border—to produce Q. The bottom stream receives x₂, passes it through a Conv1D layer, then applies an FFT block to produce K.

The Q and K signals are fed into a central computation block, depicted as a large gray rectangle with a black border. Inside this block, the mathematical expression Qᴴ * K / |Qᴴ * K| is displayed, indicating the phase-only correlation computation, where Qᴴ denotes the conjugate transpose of Q. The output of this block is passed to an IFFT (Inverse Fast Fourier Transform) block, identical in style to the FFT blocks, which converts the result back to the spatial domain.

The output of the IFFT block is then fed into a tall vertical gray rectangle labeled 'MatMul' (Matrix Multiplication), which performs the final multiplication with the V signal from the top stream. The result of this MatMul operation exits the module on the right side as the final output.

All connections between components are represented by solid black arrows indicating the direction of data flow. The diagram emphasizes the spectral domain processing via FFT/IFFT operations and the phase-based attention mechanism through the division by the magnitude term in the central block. The visual hierarchy clearly separates the three input pathways and highlights the core attention computation in the center.
