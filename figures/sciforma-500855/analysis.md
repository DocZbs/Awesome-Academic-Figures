# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

From 2D CAD Drawings to 3D Parametric Models: A Vision-Language Approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11892

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architectural overview of a vision-language model designed to reconstruct a cabinet shape program from a 2D drawing input. The entire system is encapsulated within a dashed rectangular boundary labeled 'Vision-Language Model (i.e., Mini-InternVL-1.5-2B)', indicating it is a unified model composed of two primary components: a vision encoder and a language model. The workflow begins on the left with a black-bordered box labeled 'Input: 2D drawing', which feeds into the vision component. This input is processed by dividing the image into multiple small square regions, represented as four black-outlined squares labeled 'image patches'. These patches are then fed into a light blue rounded rectangle labeled 'InternViT-300M', which serves as the vision encoder. The output of this encoder is passed through a vertical black rectangle labeled 'MLP' (Multi-Layer Perceptron), which transforms the encoded visual features into a sequence of visual tokens. These tokens are depicted as three light blue squares labeled 'visual tokens'. Simultaneously, a text prompt is introduced into the system: '[SOS] Reconstruct cabinet from image:', shown in orange text and labeled 'text prompt'. Both the visual tokens and the text prompt are concatenated and fed into the second major component of the model: a salmon-colored rounded rectangle labeled 'InternLM2-1.8B', representing the large language model. This model processes the combined visual and textual inputs to generate the final output. The output is shown on the far right as a black-bordered box labeled 'Output: Cabinet shape program', indicating the generated program that describes the 3D structure of the cabinet. Solid black arrows indicate the direction of data flow between all components, emphasizing the sequential processing pipeline from input to output. The diagram uses distinct colors—light blue for vision-related modules and salmon for the language model—to differentiate functional roles within the architecture.
