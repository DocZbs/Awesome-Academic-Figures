# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Federated Learning with Partially Labeled Data: A Conditional Distillation Approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18833

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a federated learning (FL) framework designed for multi-organ and tumor segmentation using inconsistently labeled datasets across multiple clients. The global layout is horizontally symmetric, centered around a central FL Server, with four client nodes arranged in two columns on either side—Client 1 and Client 2 on the left, Client 3 and Client 4 on the right. Each client node is enclosed in a light purple rectangular box with a thin dark purple border, containing a neural network diagram and an organ-specific icon. The FL Server is depicted as a larger, centrally positioned yellow rectangle with a golden border, also containing a neural network diagram. 

Each client’s neural network is represented by a multi-layered graph structure composed of interconnected circular nodes: input layer nodes are teal, hidden layers alternate between teal and dark purple, and output layer nodes are orange. The organ icons are placed to the right of each network within the client box: Client 1 shows kidneys (blue), Client 2 shows liver (blue), Client 3 shows pancreas (orange), and Client 4 shows spleen (blue). Below each client box, the label identifies the client and organ: 'Client 1: Kidney', 'Client 2: Liver', 'Client 3: Pancreas', 'Client 4: Spleen'. The FL Server is labeled 'FL Server' beneath its network diagram.

Connections between the server and clients are bidirectional. From each client to the server, a thick purple arrow points toward the server, indicating the transmission of local model updates. From the server to each client, a thick golden-yellow arrow points outward, representing the distribution of aggregated global model updates. These arrows form a closed loop for each client-server pair. At the bottom of the figure, a dashed horizontal line spans the width, with two labeled arrows below it: a downward-pointing golden-yellow arrow labeled 'Aggregation Update' (from clients to server) and an upward-pointing blue arrow labeled 'Local Update' (from server to clients), summarizing the update flow. The overall structure reflects a typical federated learning workflow where local models at each client are updated using their own data, then send updates to the server, which aggregates them into a global model and broadcasts it back to all clients. This setup accommodates real-world scenarios where each institution (client) annotates only a subset of organs, enabling collaborative learning without sharing raw data.
