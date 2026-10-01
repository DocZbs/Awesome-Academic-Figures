# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hybrid-Regularized Magnitude Pruning for Robust Federated Learning under Covariate Shift — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15010

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the FedMPR framework for federated learning with magnitude pruning and noise injection, structured into three main phases: Local Training, Model Aggregation, and Broadcasting, occurring at time step t = i and progressing to t = i + 1. The global layout is horizontal, showing a left-to-right workflow across these phases, with two parallel client streams (Client 1 and Client 2) demonstrating identical processing steps. Each client begins with a fully connected neural network represented as a blue node graph within a rounded rectangle. During Local Training, each client first injects Gaussian noise into selected weights, visually indicated by red dashed circles around nodes labeled 'wi' in the legend. This noise injection is shown as adding ε terms to weights (e.g., w₁ + ε₁) in a detailed inset diagram. Following noise injection, each client performs magnitude pruning, depicted as a beige dashed box labeled 'Magnitude Pruning', which removes less significant weights, shown as grayed-out or absent connections in the network. The pruned client models are then sent to the central server for Model Aggregation. Here, the server constructs a Global Model by aggregating the pruned client models, resulting in a combined network where some weights are retained (blue), some are noise-perturbed (red dashed), and others are pruned (gray). A second inset diagram below the aggregation phase shows the pruning process in detail: on the left, 'Before Pruning', all weights w* are active; on the right, 'After Pruning', certain weights (e.g., from x₂ and x₃) are set to zero, indicated by gray lines and '0' labels, representing unstructured pruning. The aggregated global model is then broadcast back to the clients, completing the cycle at t = i + 1. The legend clarifies visual attributes: solid blue circles represent original weights (w), red dashed circles represent noise-injected weights (wi), gray circles represent pruned weights (wd), and gray lines indicate unstructured pruning. All connections between modules are directed arrows, indicating the flow of data and model updates. The figure uses consistent color coding and node shapes throughout, with neural networks enclosed in light-blue rounded rectangles, and processing steps like noise injection and pruning shown as distinct boxes with descriptive labels.
