# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Compression of Language Models for Code: An Empirical Study on CodeBERT — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13737

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an experimental methodology for fine-tuning and compressing CodeBERT models for multiple downstream tasks in software engineering. The overall layout is structured into two parallel workflows: one for fine-tuned models and another for compressed fine-tuned models, both originating from the same base model and evaluated on efficiency and effectiveness metrics.

[1] Global Layout and Structure:
The diagram is organized horizontally into two main branches, each representing a distinct phase of model development. The top branch represents the 'Fine-Tuning Phase' followed by evaluation of 'Fine-Tuned Models'. The bottom branch represents the 'Compression Phase' applied to the fine-tuned models, resulting in 'Compressed Fine-Tuned Models', which are then also evaluated. The entire process begins with the base model, CodeBERT, located on the far left. Arrows indicate the flow of data and processing steps from left to right.

[2] Visual Modules and Attributes:
On the far left, a circular icon labeled 'CodeBERT' serves as the starting point. This feeds into the 'Fine-Tuning Phase' box, which contains three rounded rectangular submodules: 'Fine-tune for Vulnerability Detection', 'Fine-tune for Code Summarization', and 'Fine-tune for Code Search'. Each submodule corresponds to a specific task. These three fine-tuning steps output three separate neural network representations, depicted as small interconnected node graphs, collected under the 'Fine-Tuned Models' box. These models are then directed to an 'Eval' box, which includes a magnifying glass icon and lists 'Efficiency' and 'Effectiveness' as evaluation criteria.

Below this, a downward arrow from the 'Fine-Tuning Phase' leads to the 'Compression Phase' box. This box contains three rounded rectangular submodules: 'Knowledge Distillation', 'Model Quantization', and 'Model Pruning'. These techniques are applied to the fine-tuned models, producing nine smaller neural network representations arranged in a 3x3 grid under the 'Compressed Fine-Tuned Models' box. These compressed models are then sent to a second 'Eval' box, identical in structure and content to the first, evaluating them on 'Efficiency' and 'Effectiveness'.

All boxes are outlined in black with bolded titles. The neural network icons are simple black-and-white diagrams of nodes connected by lines, symbolizing model architectures. The arrows are thick, black, and blocky, indicating directional flow.

[3] Connections and Arrows:
A large arrow points from the 'CodeBERT' icon to the 'Fine-Tuning Phase' box. From within the 'Fine-Tuning Phase', three separate arrows point to the three individual models in the 'Fine-Tuned Models' box. A single arrow connects the 'Fine-Tuned Models' box to the first 'Eval' box. A downward arrow connects the 'Fine-Tuning Phase' box to the 'Compression Phase' box. From the 'Compression Phase', three arrows point to the three rows of models in the 'Compressed Fine-Tuned Models' box. Finally, a single arrow connects the 'Compressed Fine-Tuned Models' box to the second 'Eval' box. All connections are unidirectional, indicating a sequential and modular pipeline.

The figure visually communicates a comparative study between standard fine-tuned models and their compressed counterparts across multiple software engineering tasks, with both sets being rigorously evaluated on performance and resource efficiency.
