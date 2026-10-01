# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Visual Large Language Models for Generalized and Specialized Applications — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02765

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct architectural configurations for Vision-Language Models (VLLMs), labeled (a) Vision-to-text, (b) Vision-to-action, and (c) Text-to-vision, each illustrating a different modality interaction within a unified framework. The global layout consists of three vertically aligned, side-by-side diagrams, each depicting a flow from input data through processing modules to output heads. Each diagram shares a common core structure: a Vision Encoder at the bottom, feeding into a Projector, which then connects to a large green rectangular block labeled 'LLM' (Large Language Model). To the right of the LLM, a Tokenizer module is shown, receiving an 'Instruction' input via an upward arrow. Above the LLM, one or more output heads are positioned, corresponding to the task type.

In all three diagrams, the Vision Encoder processes 'Vision data (image, video, depth, point cloud)', indicated by a label and an upward arrow pointing to the encoder. The Projector, depicted as a light blue rectangle, transforms the encoded visual features into a format compatible with the LLM. The LLM itself is represented as a large light green rectangle, serving as the central processing unit. The Tokenizer, shown as a light gray rectangle, converts textual instruction inputs into token sequences for the LLM.

The key differences lie in the output heads and associated tokens:

(a) Vision-to-text: This configuration includes only a 'Token head' (light orange rectangle) above the LLM, producing 'Text tokens' (represented by light orange squares). The output is purely textual, generated based on visual input and instruction.

(b) Vision-to-action: In addition to the 'Token head' (light orange rectangle) for text output, this setup includes an 'Action head' (light pink rectangle) above the LLM, generating 'Action tokens' (light pink squares). This indicates a dual-output capability, where the model produces both textual responses and action commands from visual input and instruction.

(c) Text-to-vision: This variant features a 'Vision head' (light blue rectangle) above the LLM, producing 'Vision tokens' (light blue squares), alongside the standard 'Token head' (light orange rectangle) for text output. This suggests the model generates visual representations (e.g., images or features) in response to text-based instructions, with visual input optionally guiding the process.

Connections are shown as solid black arrows indicating data flow: from Vision data to Vision Encoder, from Vision Encoder to Projector, from Projector to LLM, from Instruction to Tokenizer, and from Tokenizer to LLM. Output heads receive input from the LLM and produce token sequences. A legend at the bottom clarifies the token types: light orange square = Text token, light pink square = Action token, light blue square = Vision token. The overall design emphasizes modular extensibility, allowing different output heads to be added to the same core VLLM architecture for diverse applications.
