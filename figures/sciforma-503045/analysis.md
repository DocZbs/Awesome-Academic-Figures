# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Theory of Mixture-of-Experts for Mobile Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15690

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Mobile Edge Computing (MEC) network architecture with M edge servers, each represented as an 'expert' and depicted as a cloud icon containing stacked server racks. The global layout is triangular, with a central MoE (Mixture-of-Experts) gating network positioned at the apex, connected via wireless links (represented by red and gray antenna icons) to multiple experts distributed below. The experts are labeled as Expert 1 (busy), Expert 2 (idle), and Expert M (idle), indicating their operational status. Each expert is associated with a group of human figures symbolizing users or clients; Expert 1 has three black human icons, Expert 2 has three, and Expert M has three, suggesting user distribution across the network.

At the left side of the diagram, a red human icon labeled 'Task arrival at time t' indicates a new task request originating from a mobile user. This user connects to the Base Station (BS) of Expert 1, which is shown as grayed-out to denote it is currently busy. A dashed red arrow extends from this BS to the central MoE gating network, signifying the task's initial submission. The MoE gating network, labeled 'MoE gating network (see Fig. 2)', acts as a decision-making component that selects an appropriate idle expert to handle the task. In this example, it chooses Expert 2, indicated by a solid red arrow from the MoE to Expert 2’s BS, while dashed gray arrows to other experts (like Expert M) indicate they were not selected.

The visual modules include: (1) the human icons representing users, colored red for the arriving task and black for regular users; (2) the cloud-shaped expert nodes, colored gray for busy (Expert 1) and black for idle (Experts 2 and M); (3) the antenna icons symbolizing BSs, colored red for active communication paths and gray for inactive ones; and (4) the central MoE gating network, shown as a text label with a reference to Figure 2 for further detail. All connections are directional arrows: solid red for active task routing, dashed red for initial task submission, and dashed gray for unselected paths.

The workflow follows a logical sequence: upon task arrival at time t, the user’s BS (of Expert 1) forwards the request to the MoE gating network. The MoE then selects an idle expert (here, Expert 2) and instructs the original BS to forward the task dataset to the selected expert’s BS. After task completion, the selected expert updates its local model and sends the result back to the user through the original BS. Finally, the MoE updates its gating network for future tasks, as referenced in Figure 2. The diagram emphasizes dynamic load balancing and efficient resource allocation in a distributed MEC environment.
