# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Frequency-Masked Embedding Inference: A Non-Contrastive Approach for Time Series Representation Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20790

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed FEI (Frequency-based Embedding Inference) framework, designed for learning robust time series representations through contrastive learning in the frequency domain. The global layout is structured as a dual-branch pipeline: one processing the original time series and the other processing a masked version of it, with both branches converging at prediction heads for contrastive loss computation.

On the left side, the top branch begins with the 'Original Series', depicted as a gray waveform graph. This input is passed through an 'Encoder' composed of two gray parallelogram-shaped modules labeled f_θ and s_φ, representing the main encoder and a subspace projector, respectively. The output of this encoder is a multi-layered embedding stack shown as a vertical bar with alternating light blue, green, yellow, and gray segments.

Parallel to this, the bottom branch starts with the same 'Original Series', which undergoes Fast Fourier Transform (FFT), converting it into a frequency-domain representation shown as a horizontal bar with discrete peaks. A random masking operation is applied to this frequency spectrum, indicated by a green segmented bar where some segments are filled (masked) and others are empty. This masked frequency representation is then transformed back to the time domain via inverse FFT (iFT), resulting in the 'Target Series', another gray waveform graph that appears more noisy due to the masking.

The masked frequency representation is further processed by a 'Mask Encoder', represented by a green square module labeled g_v, producing a separate embedding stack with a different color pattern (light gray, yellow, green, pink, etc.).

The Target Series is fed into a 'Momentum Encoder', shown as two red parallelogram-shaped modules labeled f_θ' and s_φ', which is a smoothed, slowly updated version of the original encoder. Its output is a third embedding stack with a distinct color scheme (blue, green, gray, orange, yellow).

In the right half of the diagram, the outputs from the original encoder and the momentum encoder are combined via a green circular node with a plus sign, feeding into the 'Embedding Predictor'—a red rectangular box labeled z_ψ₁. Simultaneously, the output from the mask encoder is subtracted from the original encoder's output at a red circular node with a minus sign, feeding into the 'Mask Predictor'—a green rectangular box labeled z_ψ₂.

Two L₂ loss terms are computed: one (red dashed line) connects the output of the Embedding Predictor to the Momentum Encoder’s output, enforcing consistency between predicted and target embeddings. The other (green dashed line) connects the Mask Predictor’s output back to the Mask Encoder’s output, ensuring accurate reconstruction of the mask information. These losses guide the training of the entire network.

The diagram uses solid black arrows for forward data flow, green arrows for mask-related paths, and red arrows for embedding-related paths. Dashed lines indicate loss connections. The overall structure emphasizes a self-supervised learning paradigm where the model learns to predict both the target embedding and the mask embedding from the original and masked inputs, respectively.
