# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Two-in-One: Unified Multi-Person Interactive Motion Generation by Latent Diffusion Transformer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16670

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram of two frameworks for generating human interaction motions from text descriptions. The layout is horizontally divided into two main sections: 'Our Framework' on the left and 'InterGen [13]' on the right, separated by a thick vertical dashed line. Above each framework, example motion results are shown with corresponding labels: 'Results with obvious difference' (green text) for the left, 'Ground-truth with clear difference' (black text) in the center, and 'Results with little difference' (red text) for the right, illustrating qualitative performance differences.

In the left section, 'Our Framework', the core component is the InterVAE, enclosed in a dashed rectangular box. It consists of an Encoder (blue trapezoid with horizontal bars and a small circular icon indicating latent sampling) and a Decoder (yellow trapezoid with horizontal bars and a similar sampling icon). The Encoder receives input from a T5 Encoder, which processes the text description: 'One person bows to the other, who accepts the apology.' The T5 Encoder outputs are fed into the InterVAE Encoder via a blue arrow. The Encoder's output is passed to the Decoder through a green arrow. The Decoder generates motion sequences, visualized as a gradient bar above it, which then feeds into the InterVAE Decoder module (a yellow trapezoid labeled 'InterVAE Decoder').

Within the InterVAE Encoder and Decoder, the internal structure is detailed. Each contains multiple layers: Input Token (gray), Layer Norm (light blue), Self-Attention (beige), Scale, Shift (light blue), Layer Norm (light blue), Cross-Attention (pink), Layer Norm (light blue), Scale (light blue), Feedforward (light green), and another Layer Norm (light blue). These layers are connected sequentially with arrows, and residual connections are indicated by plus signs and feedback loops. The entire stack is repeated N times, as denoted by 'N×' on the left side of the module.

On the right, 'InterGen [13]', the framework uses a two-branch design. Two identical blocks, each containing Input Token, Layer Norm, Self-Attention, Layer Norm, Cross-Attention, Layer Norm, and Feedforward layers, are shown side-by-side. These branches receive input from a CLIP Encoder, which processes the same text description. The branches are interconnected via orange cross-attention links between their respective Cross-Attention layers, enabling interaction modeling. Each branch also has residual connections within its layers, and the final output from each branch is combined via a plus sign before being passed upward.

The figure visually emphasizes the structural differences: our framework uses a single, unified VAE with conditional latent diffusion, while InterGen employs a dual-branch transformer with explicit cross-attention for interaction. The color coding—blue for encoder, yellow for decoder, pink for cross-attention, beige for self-attention, light green for feedforward—is consistent across both frameworks. The bottom of the figure includes the shared text description, grounding the comparison in a specific scenario.
