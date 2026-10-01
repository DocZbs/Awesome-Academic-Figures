# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14161

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a task automation workflow (denoted as \tac) for managing a sprint cycle in the \textit{RisingWave} project. The global layout is a horizontal flowchart with five main processing steps arranged left to right, connected by directional arrows indicating sequential execution. Each step is represented as a rounded rectangle with a distinct color-coded border—green, yellow, or red—indicating different phases or tools involved. Above and below certain steps are circular 'Checkpoint' nodes labeled with progress scores (e.g., 1/1, 2/2, 0/2), which track completion status at various stages. The final output is a summary score: 'Checkpoints Score : 4/8', displayed at the bottom right.

The workflow begins with 'Input Task Intent' at the top left, feeding into the first module: a green-bordered box labeled 'Access and Update Sprint Issues', featuring the 'Plane' logo (a blue square with a white cross) and a small green semicircle at the bottom. This step connects via a blue arrow to the second green-bordered module: 'Notify issue assignees via rocket.chat', which includes the red rocket.chat speech bubble icon and a similar green semicircle. A checkpoint node labeled '2/2' sits below this step, indicating full completion.

From here, the flow proceeds to a yellow-bordered module: 'Clone Repo' and 'Run Code Coverage', containing the GitLab fox logo and a terminal icon with a robot arm, symbolizing automated code analysis. Below this module is a '1/2' checkpoint, suggesting partial completion. This step connects to the next phase: a red-bordered module titled 'Upload report ownCloud Share with manager', which displays the ownCloud cloud icon and a red speech bubble, indicating sharing functionality. A '0/2' checkpoint above this step indicates failure or incomplete status.

The final step is another red-bordered module: 'Incorporate feedback from manager', featuring the Sotopia logo (a black abstract design) and a red semicircle. Below it is a '0/1' checkpoint, showing no progress. An arrow leads from this last checkpoint to the final score display: 'Checkpoints Score : 4/8', summarizing the overall performance across all checkpoints.

Connections between modules are shown as light blue lines with open arrowheads, indicating directionality. Checkpoint nodes are circular with light blue borders and are positioned either above or below the corresponding modules, with labels reflecting the number of completed tasks out of total expected. The visual design uses color coding to differentiate stages: green for initial task management, yellow for technical execution, and red for reporting and feedback integration. All text within modules is black, except for tool names like 'rocket.chat' which appear in red to match their branding. The figure effectively visualizes a multi-step automated process with real-time progress tracking through checkpoints.
