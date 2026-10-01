# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Socratic Questioning: Learn to Self-guide Multimodal Reasoning in the Wild — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02964

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage pipeline for generating image captions using a large language model (LLM) guided by a rationale derived from Socratic questioning. The global layout is left-to-right, depicting a sequential workflow starting from an input image on the far left and ending with a generated caption on the far right. The architecture consists of four main components: a visual encoder, an adapter, two instances of an LLM (which represent the same underlying model used in different stages), and a rationale module that serves as an intermediate processing step.

In terms of visual modules and attributes, the visual encoder is represented as a gray trapezoid labeled 'Visual Encoder' with a snowflake icon, indicating its role in processing visual data. It receives an 'Image' as input via an upward arrow. Above it, a golden rectangular box labeled 'Adapter' with a flame icon connects to the visual encoder and feeds into the first LLM. This first LLM is depicted as a light blue rectangle labeled 'LLM (Socratic Questioning)' with a flame icon labeled 'Lora', suggesting LoRA fine-tuning. A separate 'Prompt' input also feeds into this LLM. The output of this stage is directed to a dashed-bordered yellow rectangle labeled 'Rationale', which contains two pink sub-boxes labeled 'Questions' and 'Answers', representing the Q&A pairs generated during the reasoning phase.

From the rationale module, an arrow leads to the second LLM, identical in appearance to the first (light blue rectangle with 'LLM' and 'Lora' flame icon), which receives another 'Prompt' input. This second LLM generates the final output, a pink rectangle labeled 'Caption'. The figure emphasizes that although two LLMs are shown, they correspond to the same underlying model used in different phases of the process.

Connections and arrows indicate the flow of information: the image is processed by the visual encoder, whose output is transformed by the adapter before being fed into the first LLM along with a prompt. This LLM generates a rationale composed of questions and answers. The rationale is then passed to the second instance of the same LLM, which, together with a new prompt, produces the final caption. The diagram uses solid black arrows to denote data flow and clearly separates the reasoning (first LLM + rationale) from the generation (second LLM + caption) stages.
