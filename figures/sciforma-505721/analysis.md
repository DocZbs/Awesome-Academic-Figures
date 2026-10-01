# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The intrinsic motivation of reinforcement and imitation learning for sequential tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20573

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the algorithmic architecture of SGIM-SAHT, a framework designed for adaptive learning or decision-making through iterative strategy application and model updating. The global layout is a cyclic flowchart structured horizontally from left to right, with feedback loops returning to the initial stage, forming a closed-loop system. The main components are arranged in a sequence: selection, strategy application, policy execution, outcome computation, and model updates, followed by feedback to the selection phase.

Visual modules are represented as rectangular boxes with light yellow backgrounds and black borders, except for the 'Environment' module, which is a blue rectangle with a small globe icon on the right side, indicating an external system or real-world interaction. Each box contains descriptive text in bold black font. The top row includes three primary stages: 'Select Teacher, Task & Goal', 'Apply Strategy (T, σ, ωg)', and 'Execute Policy'. Below these, two update modules are stacked vertically: 'Update Outcome & Strategy Interest Mapping' and 'Update World Models'. To the right of 'Execute Policy', the 'Environment' block is shown, with an arrow labeled 'ωr' pointing downward to 'Compute Competence', which feeds into the update modules.

Connections are depicted using thick black arrows indicating the direction of information flow. From 'Select Teacher, Task & Goal', parameters T, σ, ωg are passed to 'Apply Strategy', which outputs Ic to 'Execute Policy'. The 'Execute Policy' block generates an action vector a = [a₁, ..., aₙ], which is sent to the 'Environment'. The environment responds with ωr, which flows to 'Compute Competence', whose output feeds into both update modules. These modules then feed back into the initial selection stage via two distinct paths: one labeled 'Competence-progress-Interest map' and another labeled ℋ, representing historical data or learned representations. This feedback loop closes the cycle, enabling continuous adaptation based on outcomes and updated internal models.
