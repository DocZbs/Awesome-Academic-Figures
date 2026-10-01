# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Theory of Mixture-of-Experts for Mobile Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15690

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Mixture-of-Experts (MoE) framework within a Mobile Edge Computing (MEC) network operator, designed to handle dynamic tasks from mobile users. The overall layout is structured as a top-down workflow enclosed within a large rounded rectangle labeled 'Network Operator', indicating the centralized processing unit. Below this container, a human icon labeled 'Task t' represents a mobile user submitting an input dataset (X_t, y_t) to the system. This input flows upward into the 'Gating Network', a rectangular module positioned on the left side of the operator box. From the Gating Network, a solid arrow labeled 'Step 1: Calculate h(X_t, Θ_t) in (3)' points rightward to the 'Router', a rounded rectangular module on the right. The Router then sends a red downward arrow labeled 'Step 2: Select m_t in (4)' to a cloud-shaped icon outlined in red, symbolizing the expert server or computing resource pool. Inside the cloud, three stacked horizontal bars represent multiple experts or servers. This cloud performs 'Step 3: Train task t and update local model', as indicated by text beneath it. After training, a dashed upward arrow labeled 'Step 4: Output' returns from the cloud to the Router, signifying the transmission of the trained model's output back to the operator. Simultaneously, a dashed feedback loop from the Router connects back to the Gating Network, labeled 'Step 5: Softmax π(X_t, Θ_t) in (5) Update Θ_{t+d_t}', indicating that the gating network parameters are updated based on the softmaxed routing probabilities and the learning outcome. Additionally, a dashed arrow labeled 'Output' extends downward from the Gating Network to the Task t icon, representing the final delivery of results to the user. The visual modules are distinguished by shape—rectangles for Gating Network and Router, and a cloud for the expert pool—and color—red outlines for the cloud and its connecting arrows to emphasize the expert selection and training phase. Text annotations clearly label each step with corresponding mathematical references (e.g., equations (3), (4), (5)), ensuring alignment with the underlying methodology described in the caption.
