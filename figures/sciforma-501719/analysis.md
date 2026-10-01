# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MaskHand: Generative Masked Modeling for Robust Hand Mesh Reconstruction in the Wild — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13393

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a context-guided masked transformer architecture for text-to-mesh generation, repurposing the MaskHand framework. The global layout is left-to-right, depicting a sequential pipeline starting from text input and ending in a generated 3D hand mesh. The process begins on the far left with a light green rounded rectangle labeled 'Text Encoder i.e CLIP', which receives a red-labeled 'Text Input: V' via an upward arrow. This encoder outputs key-value pairs (K,V), represented by a black circle with a multiplication symbol (×) connected to the next module. The central component is a large light gray rounded rectangle labeled 'Context Guided- Masked Transformer'. Above this module, a sequence of five pink rectangular tokens displays the numbers 3, 7, 5, 9, 2, representing an initial tokenized sequence. Below it, another sequence of five tokens shows 3, M, 5, M, 2, where 'M' denotes masked positions, indicating the masked autoencoder mechanism. A black line connects the top sequence to the transformer, while a downward arrow from the transformer points to the bottom masked sequence, suggesting the transformer's role in predicting or reconstructing the masked tokens. To the right, a thick black arrow leads from the transformer to a vertical parallelogram labeled 'VQ Decoder', decorated with two blue snowflake icons, symbolizing vector quantization. From the decoder, a black arrow points to a Greek letter θ', which then points downward to a grayscale image of a hand making a peace sign, representing the final 3D mesh output. The entire diagram is captioned 'Context-Guided Masked Transformer for Text-to-Mesh Generation', summarizing the core method. The visual modules are distinguished by color and shape: the text encoder is light green, the transformer is light gray, and the decoder is white with a parallelogram shape. All connections are solid black lines or arrows, indicating data flow direction. The masked tokens are visually emphasized by black background rectangles for 'M', contrasting with the pink background of numerical tokens.
