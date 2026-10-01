# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BgGPT 1.0: Extending English-centric LLMs to other languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10893

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the BgGPT training process, structured as a flowchart with a vertical progression of stages. The global layout consists of two main input sources on the left: 'Start Model Gemma-2' and 'Instruct Model Gemma-2-it', both represented as gray rectangular boxes. These feed into a central column of operations labeled 'Continuous pretraining', which is enclosed in a light gray background rectangle spanning the entire height of the diagram. This central column contains alternating green and purple boxes representing training steps and merge operations, respectively. The process is divided into four sequential phases, each involving two training steps followed by a merge operation.

Visual modules include green rounded rectangles labeled 'Train on G1', 'Train on G2', etc., indicating training on specific data partitions G1 through G8. Each training step is followed by a merge operation shown in purple rounded rectangles, such as 'Merge G1 ⊕ G2', where ⊕ denotes a merging or combination operation. The final merge operation, 'Merge G7 ⊕ (G8 ⊕ IT)', is highlighted in red and explicitly labeled as the 'BgGPT base model', signifying the output of the entire pipeline. The 'IT' component appears in multiple merges, suggesting it represents an instruction-tuning component derived from the 'Instruct Model Gemma-2-it'.

Connections are represented by black arrows indicating the direction of data flow. From the 'Start Model Gemma-2', two parallel arrows lead to 'Train on G1' and 'Train on G2', whose outputs converge at the first merge node. Similarly, subsequent training steps branch out from the previous merge result, with 'Train on G3' and 'Train on G4' receiving input from the first merge, and so on. The 'Instruct Model Gemma-2-it' connects directly to the 'Merge G4 ⊕ IT' node, indicating that the instruction-tuned component is introduced at this stage. The final merge node receives inputs from 'Train on G7', 'Train on G8', and the intermediate 'Merge G8 ⊕ IT', which itself is fed from 'Train on G8' and the 'Instruct Model'. All connections are unidirectional, forming a clear, hierarchical, and sequential workflow. The figure caption clarifies that the training data is partitioned into eight segments G1–G8, and the process alternates between training (green boxes) and merging (⊕ operations), culminating in the BgGPT base model.
