# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TAB: Transformer Attention Bottlenecks enable User Intervention and Debugging in Vision-Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18675

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage training framework for Image Difference Captioning, structured within a dashed blue rectangular boundary. The global layout is left-to-right, beginning with input image pairs and a caption, progressing through a vision-language alignment module (enclosed in a red dashed box), and culminating in a text generation stage via an Encoder-Decoder Language Model. The entire pipeline is divided into two main functional blocks: the vision-language alignment stage (red dashed box) and the text generation stage (outside the red box). 

On the far left, two grayscale images are shown side-by-side, depicting a scene with geometric objects; the bottom image shows a cyan block turning blue, indicating a change. Below these images, the corresponding caption reads: 'The cyan matte block that is to the left of the brown cylinder turned blue'. This caption is fed into a light blue rectangular module labeled 'Text encoder', which processes the text into embeddings.

The two images are each processed by a separate 'Self-attention Transformer' module, represented as rounded green rectangles. These modules share weights, indicated by a yellow double-headed arrow labeled 'Shared weights' between them. The outputs of both self-attention transformers are concatenated via a yellow rectangular node labeled 'Concat', which feeds into a larger green rounded rectangle labeled 'Cross-attention Transformer'. This cross-attention module integrates visual features from both images.

The output of the cross-attention transformer is passed to a purple rounded rectangle labeled 'Bottleneck', which serves as a feature fusion point. From here, two paths diverge: one leads to the 'Retrieval Loss' (a green-bordered rounded rectangle), which connects back to the text encoder's output, forming a vision-language alignment loop. This alignment is highlighted by a red dashed box labeled 'Vision-language alignment' in the legend. The other path proceeds to the right, entering a large peach-colored rounded rectangle labeled 'Encoder-Decoder Language Model', which performs text generation.

The Encoder-Decoder Language Model outputs the generated caption, which is compared to the ground truth using a 'Cross Entropy Loss' (green-bordered rounded rectangle), as indicated by a green arrow. This loss is used only during training, as specified in the legend. The legend also clarifies that purple arrows denote 'Training & inference' pathways, while green arrows denote 'Training only' pathways. Additionally, a blue dashed box labeled 'Text generation' points to the Encoder-Decoder Language Model, emphasizing its role.

In summary, the architecture first aligns visual and textual representations through a shared-weighted dual self-attention and cross-attention mechanism, followed by a bottleneck for feature compression and retrieval loss computation. Then, in the second stage, the bottleneck features are used to condition an encoder-decoder model for generating captions, optimized via cross-entropy loss. The design supports both training and inference, with specific components active only during training.
