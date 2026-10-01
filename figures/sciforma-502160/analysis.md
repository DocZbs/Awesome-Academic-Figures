# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InstructSeg: Unifying Instructed Visual Segmentation with Multi-modal Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14006

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the end-to-end framework of a model named \name, designed for instructed visual segmentation tasks, particularly for images and videos. The global layout is structured as a left-to-right data processing pipeline, starting with input modalities on the far left and progressing through multiple processing modules to produce segmentation results on the far right. The entire architecture is divided into distinct functional blocks, each represented by colored boxes with specific shapes and icons indicating their roles and computational characteristics.

On the left side, three types of inputs are shown: an 'Image' (a single frame with a cat), a 'Key Frame' (a single frame with a cheetah), and 'Reference Frames' (a sequence of frames showing a cheetah in motion). These inputs are fed into a 'CLIP Encoder', depicted as a green rectangular block with a snowflake icon, symbolizing a frozen or pre-trained model. This encoder outputs a feature representation denoted as F_{CLIP}, which is then split into two streams: one feeding into a 'Vision Tokens' module (a dashed box containing blue squares) and another into an 'Object-aware Video Perceiver' (a yellow rounded rectangle with a flame icon, indicating a trainable component).

Below the input section, two text prompts are provided: a 'Referring Prompt' ('A black cat sitting on a wooden toilet') and a 'Reasoning Prompt' ('What is about to become cheetah's food?'). These prompts are tokenized into 'Text Tokens' (purple squares in a dashed box) and 'Mask Tokens' (orange squares in a dashed box), which are then processed by a 'Large Language Model' (green rectangle with a snowflake icon, again indicating a frozen base model). Within this large language model, a 'LoRA' (Low-Rank Adaptation) module is highlighted in yellow with a flame icon, signifying a fine-tuned, trainable adaptation layer.

The 'Object-aware Video Perceiver' processes the visual features from the CLIP encoder and generates a sequence of blue square tokens representing object-specific and temporal features. These are combined with the text tokens from the prompt and passed to the Large Language Model. The output from the Large Language Model includes two types of embeddings: 'Detailed Text Embed' (purple squares) and 'Mask Embed' (orange squares), which are sent to the next stage.

The 'Vision-guided Multi-granularity Text Fusion' module (yellow rounded rectangle with a flame icon) receives the detailed text embeddings and the visual features f_v (from Vision Tokens) to perform cross-modal fusion. This module also receives the mask embeddings. The fused representations are then passed to the 'Segmentation Decoder' (yellow rounded rectangle with a flame icon), which produces 'Masks & Scores' (red squares in a dashed box).

Finally, the 'Masks & Scores' are used to generate the 'Image / Video Segmentation Results', shown as the original images with red segmentation masks overlaid on the target objects (the cat and the cheetah). The top-level visual encoder (blue rectangle with a snowflake icon) processes the input image directly to produce f_img, which is also fed into the Vision-guided Multi-granularity Text Fusion module, enabling direct visual guidance.

Arrows indicate the flow of data between modules. Solid arrows represent primary data flows, while dashed lines denote auxiliary connections or token sequences. The snowflake icons denote frozen or pre-trained components, and flame icons denote trainable or adapted components. The color coding—green for encoders, yellow for trainable fusion/decoding modules, purple for text-related embeddings, orange for mask-related embeddings, and red for final outputs—helps distinguish different data types and processing stages.
