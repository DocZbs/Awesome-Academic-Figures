# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TrainMover: An Interruption-Resilient Runtime for ML Training — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12636

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two system workflows: one for live migration and another for handling unexpected failure, both illustrating the state transitions and coordination among three types of nodes—Helpers (green squares), Leavers (blue squares), and Joiners (yellow squares)—during distributed training. The top half, titled 'System workflow for live migration,' is divided into four stages: Before Migration, Overlap Phase, Freeze Phase, and After Migration. In the Before Migration stage, all nodes are in Training mode. During the Overlap Phase, the system initiates CCL Preparation (§4) and Training Context Initialization (§5) in the background, while foreground training continues. The Freeze Phase halts training for Leavers and Joiners (indicated by red Xs), and parameters are transmitted via dotted red arrows from Leavers to Joiners. The After Migration stage resumes training with the new configuration, including a CCL Switchover (§4) step. Below this, a timeline diagram details the background processes for each node type: Helper, Leaver, and Joiner. Each has a foreground state (Ready/Training) and a background process. The migration signal triggers CCL Preparation (step ②) and Training Context Initialization (step ③) for Joiners, followed by Training States Transfer (step ④) and CCL Switchover (step ⑤) after the freeze phase. A green checkmark indicates successful state transfer.

The bottom half, titled 'System workflow for unexpected failure,' follows a similar structure but with different timing and triggers. It includes Before Failure, Shielded Phase, Freeze Phase, and After Failure stages. The Shielded Phase begins when a failure is detected (step ③), triggering CCL Preparation (step ①) and Training Context Initialization (step ②) in the background. The Freeze Phase then halts training for Leavers and Joiners, with parameter transmission occurring as before. After Failure, the system resumes training via CCL Switchover (step ⑤) and Training States Transfer (step ④). The timeline below mirrors the top, showing the background processes for each node. For Joiners, the foreground state transitions from Ready to Training after the failure event, with steps ①–⑤ occurring sequentially. The figure uses color-coded boxes (green for Helpers, blue for Leavers, yellow for Joiners), dashed outlines for training groups, solid arrows for data flow, and dotted red arrows for parameter transmission. Text labels specify phases and steps, with references to sections §4 and §5. The overall layout is horizontal for the main workflow and vertical for the timeline, with clear phase demarcations and numbered steps indicating the sequence of operations.
