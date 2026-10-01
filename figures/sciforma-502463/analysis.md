# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ScaMo: Exploring the Scaling Law in Autoregressive Motion Generation Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14559

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the ScaMo architecture, divided into three main parts: (a) FSQ, (b) Architecture, and (c) Prefix Attention Mask.

In part (a), the FSQ (Vector Quantized Motion VAE) pipeline is shown. It begins with a sequence of 3D human motion frames on the left, depicted as a group of blue humanoid figures in various poses. These frames are fed into an orange trapezoidal block labeled 'Motion Encoder'. The output of the encoder is a sequence of three orange rectangular tokens, representing quantized features. These tokens are then mapped into a 3D cube grid, illustrating a vector quantization space with axes labeled (1,0,-1) and a point marked at coordinates (1,0,-1). A green box below the cube displays the quantized index '22' corresponding to the values [1, 0, -1]. This index is passed to a green trapezoidal block labeled 'Motion Decoder', which reconstructs the original motion sequence shown on the right, identical in form to the input but now reconstructed from the quantized representation.

Part (b) details the full model architecture, centered around a large pink rounded rectangle labeled 'Prefix Autoregressive Transformer'. This transformer receives two types of inputs: text tokens (t₁, t₂, t₃, t₄) from a yellow box labeled 'Text Tokenizer', and motion tokens (m₁, m₂, m₃, m₄, m₅) from a blue box labeled 'Motion Tokenizer', which processes a 3D motion sequence similar to that in (a). Below the text tokenizer, the input text 'A man is performing a flying kick.' is shown. The transformer's internal structure is expanded in a dashed box on the right, showing a stack of layers repeated L times. Each layer contains, from bottom to top: a 'Prefix Attention' block (peach-colored), followed by 'RMSNorm' (gray), then a 'FFN' (Feed-Forward Network) block (light green), and another 'RMSNorm'. The outputs of the transformer are shown as a sequence of motion tokens (m̂₁, m̂₂, m̂₃, m̂₅, m̂₄, ...), indicating autoregressive generation.

Part (c) illustrates the 'Prefix Attention Mask' as a square grid. The rows and columns are indexed by t₁–t₄ (text tokens) and m₁–m₅ (motion tokens). The mask uses color coding: yellow squares indicate positions where attention is allowed (e.g., text tokens can attend to each other bidirectionally). Gray squares indicate no attention. Blue squares with diagonal shading indicate that motion tokens can attend to all preceding text tokens (i.e., m₁ can attend to t₁–t₄, m₂ to t₁–t₄, etc.), but not to other motion tokens or future text tokens. This visualizes the attention pattern: text tokens have bidirectional attention among themselves, while motion tokens have causal attention over text tokens only, enabling the model to condition motion generation on the entire text context.
