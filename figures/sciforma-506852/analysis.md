# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GeAR: Generation Augmented Retrieval — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02772

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a document-query processing model, referred to as \our, which is composed of four main components arranged horizontally: Doc Encoder, Query Encoder, Fusion Encoder, and Text Decoder. The global layout is linear and left-to-right, representing a sequential flow from input to output, with feedback connections for training objectives.

The Doc Encoder, on the far left, receives a 'Doc' input (light blue rounded rectangle) and processes it through a single transformer block. This block contains a Self Attention layer (gray rounded rectangle), followed by a Feed-Forward Network (FFN, gray rounded rectangle), with residual connections indicated by circular plus signs. The output of this encoder is passed upward to a light blue rectangular box, which feeds into a green rectangular box labeled 'CL' (contrastive learning loss).

The Query Encoder, next to the Doc Encoder, takes a 'Query' input (peach-colored rounded rectangle) and processes it through a similar transformer block. This block includes a Self Attention layer, a Cross Attention layer (light blue with diagonal stripes), and an FFN (yellow rounded rectangle), again with residual connections. Its output is sent to a peach-colored rectangular box, which also connects to the 'CL' module, indicating that both document and query representations are used to compute contrastive loss.

The Fusion Encoder, positioned after the Query Encoder, also receives the 'Query' input (same peach color) and processes it through another transformer block. This block contains a Self Attention layer, a Cross Attention layer (light blue with diagonal stripes), and an FFN (yellow rounded rectangle), with residual connections. Notably, the output of the Doc Encoder is fed into the Cross Attention layer of the Fusion Encoder, enabling document-query interaction. The output of the Fusion Encoder is sent to a gradient-filled rectangular box (light blue to peach), which then connects to the 'CL' module, suggesting that the fused representation is also involved in contrastive learning.

The Text Decoder, on the far right, receives an 'Info' input (lavender rounded rectangle) and processes it through a transformer block designed for autoregressive generation. This block includes a Causal Attention layer (gray rounded rectangle), a Cross Attention layer (gray rounded rectangle), and an FFN (gray rounded rectangle), with residual connections. The Cross Attention layer receives input from the Fusion Encoder's output, allowing the decoder to condition its generation on the fused document-query representation. The final output of the decoder is passed to a green rectangular box labeled 'LM' (language modeling loss), which computes the loss for text generation.

Connections are represented by solid black arrows indicating data flow. The 'CL' and 'LM' modules are external loss computation blocks, not part of the forward pass but used during training. The figure visually emphasizes the dual training objectives: contrastive learning (CL) to align document and query representations, and language modeling (LM) to generate relevant text based on the fused context.
