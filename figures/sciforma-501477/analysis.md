# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Concurrent vertical and horizontal federated learning with fuzzy cognitive maps — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12844

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a federated learning process, structured as a flowchart divided into two main vertical sections: 'Central server' on the left and 'Participants' on the right, each enclosed in dashed rectangular boundaries. The overall layout is sequential and top-down, depicting the iterative steps of model training and aggregation across distributed participants under central coordination.

In the 'Central server' column, six numbered circular nodes represent distinct stages. Node 1 (teal) initiates the process by sending the current federated model to participants. Node 4 (blue) follows, representing the aggregation of local models received from participants. Node 5 (gray) denotes the step of checking termination conditions. This leads to a diamond-shaped decision node labeled 'F' (false) and 'T' (true), where 'F' loops back to node 1 to continue the iteration, and 'T' proceeds to node 6 (red), indicating the final state where the federated model is available.

In the 'Participants' column, three numbered circular nodes depict the local processing steps. Node 2 (red) corresponds to training the received model using the participant's local dataset. Node 3 (gold) represents the step of sending encrypted gradients back to the central server after training. These nodes are connected sequentially within the participant’s scope.

Connections between nodes are shown via solid black arrows indicating the direction of data or control flow. Specifically, an arrow from node 1 (central server) points to node 2 (participants), signifying model distribution. An arrow from node 3 (participants) points to node 4 (central server), indicating gradient upload. From node 4, an arrow leads to node 5, followed by the decision node. The 'F' branch returns to node 1, forming a loop, while the 'T' branch leads to node 6, marking completion.

Text annotations accompany each major step: 'Sending the federated model' next to node 1, 'Train model with local dataset' next to node 2, 'Sending encrypted gradients after training' next to node 3, 'Aggregate local models' next to node 4, 'Checking termination condition' next to node 5, and 'Federated model available' next to node 6. The figure visually emphasizes the privacy-preserving nature of the process through the use of 'encrypted gradients' and the separation of computation between central server and participants.
