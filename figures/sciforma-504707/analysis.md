# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Simultaneously Recovering Multi-Person Meshes and Multi-View Cameras with Human Semantics — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18785

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a symmetrical encoder-decoder architecture designed to model human motion dynamics and kinematics. The global layout is linear and left-to-right, depicting a sequential processing pipeline: input human motion sequences are fed into an encoder, transformed into latent representations, and then decoded back into reconstructed motion sequences. On the far left, a sequence of five gray 3D human body models in different poses represents the input motion data. This input is processed by the Encoder, which consists of a stack of four pink rounded rectangular blocks labeled 'GRU', arranged vertically with bidirectional feedback loops between adjacent layers, indicating recurrent connections typical of Gated Recurrent Units. The entire encoder block is enclosed in a black rectangular boundary. A thick black arrow points from the input to the encoder, and another from the encoder to the latent space representation. The latent space is visualized as a series of five overlapping, bell-shaped distributions colored in a gradient from blue to yellow, representing the probability distribution p_θ_i(z_i) over latent variables z_i at each time step. These distributions are aligned horizontally, suggesting a temporal sequence. Following this, a thick black arrow leads to the Decoder, which mirrors the encoder’s structure but uses beige rounded rectangular blocks also labeled 'GRU' and similarly connected with bidirectional loops, enclosed in a black rectangular boundary. Finally, a thick black arrow from the decoder points to the output, which is again a sequence of five gray 3D human body models in poses corresponding to the reconstructed motion. The overall design emphasizes symmetry between encoder and decoder, with consistent visual attributes—rounded rectangles for GRU units, color differentiation (pink for encoder, beige for decoder), and clear directional arrows indicating data flow. The figure visually conveys that the model learns a compact motion prior by encoding motion sequences into a latent space and decoding them back, enabling training on short clips and generalization to longer sequences.
