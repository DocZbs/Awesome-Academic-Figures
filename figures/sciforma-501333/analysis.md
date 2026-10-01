# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TrainMover: An Interruption-Resilient Runtime for ML Training — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12636

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the 'Sandbox lazy initialization workflow' for a distributed computing system, depicting how computation and communication modules interact across iterations, with dynamic participation of nodes (helpers, leavers, joiners) and the role of remote storage and a sandbox environment. The global layout is structured horizontally into three main phases: Iteration 0, Iteration n-1, and Iteration n, each enclosed in a dashed rectangular box to denote distinct stages of execution. Vertically, the diagram shows multiple parallel processing streams labeled Helper 0, Leaver 0, Leaver 1, Joiner 0, and Joiner 1, representing different worker roles or processes. A legend at the top indicates that light blue rectangles represent Computation steps, beige rectangles represent Communication steps, and teal rectangles represent Tensors.

In Iteration 0, each process (Helper 0, Leaver 0, Leaver 1) executes a sequence of Computation → Communication → Computation steps, with solid arrows indicating data flow. The Communication step in each stream outputs a tensor, which is saved via a green dashed arrow labeled 'Save' to a gray box labeled 'Remote Storage'. This storage contains a stack of teal Tensor blocks, symbolizing persisted intermediate results.

Between Iteration 0 and Iteration n-1, the diagram uses an ellipsis (...) to indicate repeated iterations where the same pattern continues. In Iteration n, the system introduces new participants: Joiner 0 and Joiner 1. Their computation streams are shown below the previous ones. These joiners do not have prior state; instead, they load previously saved tensors from Remote Storage into a red-bordered box labeled 'Sandbox', indicated by a green dashed arrow labeled 'Load'. Inside the Sandbox, the loaded tensors (teal blocks) are inserted between Computation and Communication steps, enabling the joiners to resume computation from the saved state.

The Communication steps in Iteration n are connected vertically by thick black arrows, suggesting synchronization or aggregation across processes. The overall workflow demonstrates a lazy initialization mechanism: new joiners do not start from scratch but load checkpointed tensors from remote storage into a Sandbox environment, allowing them to catch up with ongoing computation without disrupting existing processes. The visual distinction between computation (blue), communication (beige), and tensor (teal) elements, along with directional arrows and labeled actions ('Save', 'Load'), clearly conveys the data flow and state management strategy.
