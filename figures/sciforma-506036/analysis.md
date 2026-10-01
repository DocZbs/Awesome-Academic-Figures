# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On Adversarial Robustness of Language Models in Transfer Learning — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00066

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an experimental setup comparing different training strategies for Large Language Models (LLMs) in the context of transfer learning and direct fine-tuning on a target dataset. The global layout is a horizontal flowchart with three parallel pathways originating from a central LLM component on the left, each leading to a distinct training process before converging into a common evaluation stage on the right.

On the far left, a large rounded rectangle labeled 'LLMs' contains a blue stylized brain-like icon, representing the base language model. From this component, three separate arrows extend horizontally to the right, initiating three distinct workflows.

The top pathway proceeds directly from the LLM to a light teal rounded rectangle labeled 'Dataset A_train small', indicating that the model is fine-tuned solely on a small subset of the target dataset A. This module is connected by a straight arrow to the final evaluation block.

The middle pathway first directs the LLM to a salmon-colored rounded rectangle labeled 'Dataset B_train large', signifying pre-training or transfer learning on a large auxiliary dataset B. An arrow then leads from this module to another light teal rounded rectangle labeled 'Dataset A_train small', showing that after training on dataset B, the model is further fine-tuned on the small target dataset A. This sequence also connects to the final evaluation block.

The bottom pathway follows a similar structure: the LLM is first trained on a large auxiliary dataset C, represented by a salmon-colored rounded rectangle labeled 'Dataset C_train large'. Subsequently, it is fine-tuned on the same small target dataset A, shown in a light teal rounded rectangle labeled 'Dataset A_train small', before proceeding to the evaluation stage.

All three pathways converge at a single evaluation module on the far right, depicted as a light blue rounded rectangle with a magnifying glass icon containing a bar chart symbol. This module is labeled 'Attack and evaluation with respect to A_test full', indicating that the performance of all three trained models is assessed using the full test set of dataset A, likely under adversarial attack conditions.

The visual attributes distinguish the types of datasets: salmon-colored boxes represent large auxiliary datasets (B and C), while light teal boxes represent the small target dataset A used for fine-tuning. The final evaluation box uses a distinct light blue color and includes an icon to emphasize its role as the assessment phase. All connections are solid black arrows, indicating the direction of data flow and processing steps. The overall structure highlights a comparative study between direct fine-tuning and transfer learning from different auxiliary datasets, all evaluated against the same target test set.
