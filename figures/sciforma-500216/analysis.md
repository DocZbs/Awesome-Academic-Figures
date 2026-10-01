# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SoftVQ-VAE: Efficient 1-Dimensional Continuous Tokenizer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10958

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of SoftVQ, a fully differentiable vector quantization method integrated within a Vision Transformer framework. The diagram is divided into two main sections: the left side depicts the encoder-decoder architecture, while the right side details the SoftVQ mechanism and representation alignment.

[1] Global Layout and Structure:
The figure is horizontally split into two primary regions. The left region shows the standard Vision Transformer (ViT) encoder-decoder pipeline, with inputs at the top and outputs at the bottom. The right region focuses on the SoftVQ module and its interaction with pre-trained representations. A vertical dashed line separates these two regions, emphasizing the modular design. The overall flow proceeds from top to bottom on the left, and from top to bottom on the right, with cross-connections between the two sides.

[2] Visual Modules and Attributes:
On the left, at the top, there are two dashed rectangular groups labeled 'Image Tokens' (N tokens, light blue squares) and 'Latent Tokens' (L tokens, light orange squares), concatenated together as input to the 'Vision Transformer Encoder E', represented by a large light blue rounded rectangle. Below the encoder, the output latent tokens (light orange squares) are shown feeding into the right-side SoftVQ module.

Further down on the left, another dashed group labeled 'Mask Tokens' (N tokens, light gray squares) is concatenated with the latent tokens (light orange squares) as input to the 'Vision Transformer Decoder D', depicted as a large light teal rounded rectangle. The decoder's output is 'Reconstructed Image Tokens' (light blue squares), shown at the bottom left.

On the right, at the top, a dashed group labeled 'Codewords' (K tokens, light purple squares) feeds into a vertical stack of three light yellow rounded rectangles labeled 'Distance', 'Softmax', and 'Mat. Mul.' respectively. These represent the differentiable quantization steps. An arrow labeled 'SoftVQ' points from the codewords to the 'Mat. Mul.' block, indicating the soft quantization process.

Below this, the output of the matrix multiplication is shown as a dashed group of light orange squares, labeled 'Representation Alignment'. Directly beneath it is another dashed group of light green squares labeled 'Pre-trained Image Tokens', indicating the target space for alignment.

[3] Connections and Arrows:
A solid black arrow connects the output of the Vision Transformer Encoder E (latent tokens) to the 'Distance' block on the right. Another arrow connects the 'Distance' block to 'Softmax', then to 'Mat. Mul.'. From 'Mat. Mul.', an arrow leads back to the concatenation point before the Vision Transformer Decoder D, where it merges with the Mask Tokens. Additionally, a vertical arrow runs from the Codewords directly to the 'Mat. Mul.' block, forming the SoftVQ computation path. Finally, a horizontal arrow connects the output of 'Mat. Mul.' to the 'Representation Alignment' block, which is visually aligned below the pre-trained image tokens, suggesting a comparison or alignment objective.
