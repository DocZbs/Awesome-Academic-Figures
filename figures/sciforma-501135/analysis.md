# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Scaling of Diffusion Transformers for Text-to-Image Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12391

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two alternative methods for extending the U-ViT model to perform image inpainting, labeled as (a) Channel concatenation and (b) Token concatenation. The global layout consists of two side-by-side diagrams, each illustrating a distinct data processing pipeline feeding into the U-ViT model, which is represented at the top by an orange rectangular box labeled 'U-ViT'. Each diagram includes input components at the bottom: a text prompt ('couple horses standing in a grassy field'), a masked image (with black regions indicating missing content), and in case (b), an additional original image. These inputs are processed through intermediate representations before being fed into U-ViT.

In diagram (a) Channel concatenation, the text prompt is mapped to a green square labeled 't', representing text embeddings. The masked image is processed to produce a gray square labeled 'c' (condition) and three blue squares labeled 'x' (noise image tokens). The gray and blue squares are concatenated along the channel dimension, forming a combined feature map that is then tokenized into a sequence of tokens (represented by the three blue squares). An arrow points from this combined token sequence to the U-ViT model. The caption notes that this method maintains the same number of tokens as in text-to-image generation but requires special handling of the new condition.

In diagram (b) Token concatenation, the text prompt again maps to a green square 't'. The masked image is tokenized into a gray square 'c' and three yellow squares (representing the condition tokens), while the original image is tokenized into three blue squares 'x' (noise image tokens). The gray and yellow squares are concatenated along the token dimension, forming a longer sequence of condition tokens. This sequence is then concatenated with the text embeddings 't' along the token dimension, resulting in a combined token sequence (green, gray, yellow, blue squares) that feeds into U-ViT. An arrow from the original image to the blue squares indicates its role in generating the noise image tokens. The caption explains that this approach involves tokenizing the new condition (input image plus mask), adding positional embeddings, and concatenating text embeddings along the token dimension.

Both diagrams use color-coded squares to represent different types of embeddings: green for text, gray for condition, yellow for condition tokens in (b), and blue for noise image tokens. Arrows indicate the flow of data from inputs to the U-ViT model, with specific emphasis on how the condition and noise image are combined differently in each method.
