# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Vertical Federated Unlearning via Backdoor Certification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11476

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a vertical federated learning system, depicting a three-party collaborative training process involving two data parties (Party A and Party B) and a central Coordinator C. The global layout is triangular, with the Coordinator positioned at the top center and the two parties located symmetrically at the bottom left and right, forming a clear hierarchical and interactive structure. The diagram emphasizes the flow of information and computation between these entities during the training process.

Visual modules include three main components: the Coordinator C, represented as a blue cylinder with black text; Party A and Party B, both depicted as blue rectangular prisms with black labels. All components share a consistent color scheme—blue fill with black text—ensuring visual coherence. The Coordinator is centrally placed, symbolizing its role as the orchestrator of the training process. Below the main diagram, a dashed rectangular box labeled 'Training Process' contains a numbered list explaining the three steps of the workflow: (1) Sharing intermediate data, (2) Computing gradients and loss, and (3) Updating model parameters. This legend provides context for the arrows connecting the components.

Connections are shown via bidirectional arrows, each labeled with a number corresponding to the training step. Between Party A and Party B, a horizontal double-headed arrow marked with '①' indicates the exchange of intermediate data. From each party to the Coordinator, there are two bidirectional arrows: the lower one labeled '②' represents the computation of gradients and loss, and the upper one labeled '③' denotes the updating of model parameters. These connections form a closed loop, illustrating the iterative nature of the training process. The arrows are gray with white outlines, ensuring visibility against the background, and are clearly numbered to align with the training process description below. The overall design is clean, minimalistic, and logically structured to convey the distributed yet coordinated nature of vertical federated learning.
