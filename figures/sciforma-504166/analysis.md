# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enhancing Knowledge Distillation for LLMs with Response-Priming Prompting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17846

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a knowledge distillation framework designed to transfer knowledge from a large teacher model to a smaller student model. The global layout is structured as a two-tiered flow: the top tier represents the teacher model's inference process, while the bottom tier illustrates the student model's training process using the generated data. The entire diagram is composed of rounded rectangular nodes with light blue fill and dark gray borders, connected by solid black arrows indicating the direction of data or control flow.

In the top tier, the process begins with an 'Input query from GSM8K' node, which feeds into a 'Prompt appender' module. This module processes the input query by appending appropriate prompts before forwarding it to the 'Teacher model (Llama 3.1 405B Instruct)', a large language model serving as the knowledge source. The teacher model generates an 'Output', which is then combined with the original input and prompt to form a 'Transfer set'. This transfer set is created via a diagonal arrow from the 'Prompt appender' and another from the 'Output' node, both converging on the 'Transfer set' node located centrally below the teacher model path.

The bottom tier begins with the 'Transfer set' feeding into the 'Student model (Llama 3.1 8B Instruct)', a smaller version of the teacher model intended to learn from the distilled knowledge. The student model’s output is directed to a 'Loss function' node, which computes the discrepancy between the student’s prediction and the teacher’s output (as contained in the transfer set). A feedback loop exists from the loss function back to the student model, indicating iterative optimization during training. The loss function also receives input from the transfer set, ensuring alignment between the student’s predictions and the teacher’s responses.

All nodes are labeled with clear, centered text describing their role, and the connections are unidirectional except for the feedback arc from the loss function to the student model. The diagram is titled 'Knowledge Distillation Framework' at the top center, and the overall structure emphasizes a clear separation between the teacher’s inference phase and the student’s training phase, with the transfer set acting as the bridge between them.
