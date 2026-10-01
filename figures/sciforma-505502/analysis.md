# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

StyleAutoEncoder for manipulating image attributes using pre-trained StyleGAN — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20164

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architectural design of StyleAutoEncoder (StyleAE), a system that integrates with a pre-trained StyleGAN to enable attribute-aware image manipulation. The overall layout is divided into two main components: StyleGAN on the left and StyleAutoEncoder on the right, each enclosed in rounded rectangular containers. The StyleGAN component begins with a latent vector z ∈ Z, which flows through a Mapping Network (light blue rounded rectangle) to produce a StyleGAN latent vector w. This vector then passes through a Synthesis Network (also light blue rounded rectangle) to generate an output image. All intermediate steps are represented by white rectangular boxes with black borders, connected by solid black downward arrows indicating the forward pass.

On the right, the StyleAutoEncoder consists of an Encoder (light blue rounded rectangle) that takes an input image and produces two outputs: 'Image attributes' and 'Image encoding', displayed together in a single white rectangular box. These outputs are then fed into a Decoder (light blue rounded rectangle), which reconstructs the StyleGAN latent vector w. The reconstructed w is shown in a white rectangular box at the bottom of the StyleAutoEncoder block.

Crucially, red arrows indicate bidirectional connections between the two systems. A red arrow points from the StyleGAN latent vector w (output of the Mapping Network) to the Encoder of StyleAutoEncoder, suggesting that the encoder processes this latent representation. Another red arrow runs from the reconstructed w (output of the Decoder) back to the StyleGAN latent vector w node, forming a feedback loop. Additionally, a red arrow connects the 'Image attributes' output of the Encoder to the top of the StyleAutoEncoder container, with a vertical label on the right side reading 'Attributes of the coded image', emphasizing that these attributes are explicitly modeled within the encoded space.

The visual modules are consistently styled: all core networks (Mapping Network, Synthesis Network, Encoder, Decoder) are light blue rounded rectangles with bold black text, while intermediate data representations (latent z, w, generated image, image attributes/encoding) are white rectangles with black borders and standard black text. The connections are primarily black solid arrows for forward flow and red solid arrows for cross-system feedback or attribute modeling. The diagram’s structure reflects a hybrid generative-encoding framework where StyleAE learns to map StyleGAN’s latent space to a semantic attribute space, enabling controlled image editing based on explicit attributes.
