# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ReFormer: Generating Radio Fakes for Data Augmentation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00282

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the ReFormer approach, a framework for generating deep radio frequency (RF) fakes using a latent token sequence model. The global layout is horizontally structured, divided into three main sections: latent encoding and quantization on the left, central training and inference of a decoder-only transformer (DoT), and generation of deep RF fakes on the right. A vertical split in the center separates the 'TRAINING' phase (right side of DoT) from the 'INFERENCE' phase (left side of DoT), indicated by labeled vertical bars with colored squares (yellow for inference, blue for training).

On the left, two trapezoidal modules represent the encoder and decoder components of a Vector Quantized Variational Autoencoder (VQVAE). The top beige trapezoid is labeled E_{Θ_E}(x), representing the encoder that maps input x to latent space z. Below it, an orange trapezoid labeled D_{Θ_D}(z_q) represents the decoder that reconstructs from quantized latent tokens z_q. An arrow labeled Q points from z to z_q, indicating the quantization step that produces discrete latent tokens Z_Q.

In the center, a large dark blue rounded rectangle labeled 'DoT' denotes the decoder-only transformer. It receives the quantized latent sequence Z_Q as input during training and generates an output sequence \widehat{Z_Q} during inference. Above the DoT, a row of small orange squares represents the output \widehat{Z_Q}. Below it, another row of orange squares represents the input Z_Q. Text adjacent to the DoT specifies the training objective: 'For Z_Q ∈ Z_D: Do the training until: \widehat{Z_Q} ≈ Z_Q', indicating that the DoT is trained to reconstruct the original quantized latent sequences.

To the left of the DoT, the inference process is described: 'Inference (generate \widetilde{Z_Q^C}): 1st token = C, Sample DoT autoregressively'. This indicates that during inference, the DoT generates a new sequence \widetilde{Z_Q^C} starting with a context token C, sampling tokens sequentially.

On the far right, the generated latent sequence \widetilde{z_q^C} (represented by a row of orange squares) is fed into another orange trapezoid labeled D_{Θ_D}(\widetilde{z_q^C}), which corresponds to the same decoder module as on the left but now used to produce the final 'Deep RF fake'. This completes the pipeline from latent representation to synthetic RF signal generation.

Connections are shown via arrows: from E_{Θ_E}(x) to Q, from Q to DoT (input Z_Q), from DoT to output \widehat{Z_Q}, and from \widetilde{z_q^C} to D_{Θ_D}(\widetilde{z_q^C}) to produce the Deep RF fake. The vertical bars labeled 'INFERENCE' and 'TRAINING' visually separate the two phases, with inference occurring when the first token is set to C and sampling proceeds autoregressively, while training involves minimizing the reconstruction error between \widehat{Z_Q} and Z_Q.
