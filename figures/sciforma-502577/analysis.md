# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FLAMe: Federated Learning with Attention Mechanism using Spatio-Temporal Keypoint Transformers for Pedestrian Fall Detection in Smart Cities — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14768

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the framework of the proposed FLAMe algorithm for federated learning, structured into three main components: multiple clients on the left, a central server on the right, and communication pathways between them. The global layout is horizontal, with clients arranged vertically on the left side and the server positioned on the right. A legend at the top-left corner indicates that red arrows represent 'Global update' (from server to clients) and blue arrows represent 'Local update' (from clients to server).

On the left, three clients are shown: Client 1 (in light blue), Client 2 (in beige), and Client k (in light green). Each client contains a local dataset represented by a gray database icon with a lock symbol, indicating data privacy, and a local model depicted as a multi-layered neural network. Client 1 additionally shows a surveillance camera icon, suggesting data source or application context. The local models are shown with nodes in varying shades of blue, white, and gray, connected by lines to represent neural connections.

In the center, for each client, there is a small graph structure (a tree-like or sparse graph) above a horizontal bar representing the selected local model weights, labeled w^c1_t, w^c2_t, ..., w^ck_t. These bars are color-coded to match the respective client’s background color (blue for Client 1, yellow for Client 2, green for Client k). Blue arrows point from these weight bars toward the server, indicating the local update step where clients upload their selected weights.

On the right, the Server component contains a vertical stack of weight bars corresponding to each client's uploaded weights (w^c1_t, w^c2_t, ..., w^ck_t), each in its respective color. Below this, a downward arrow leads to a single aggregated weight bar labeled w_{t+1}, composed of gray segments, representing the server’s aggregation process. Another downward arrow leads to the 'Global model', which is a neural network with nodes in orange, yellow, and blue, mirroring the structure of the local models but with distinct coloring to denote the global state. The global model is enclosed in a rounded rectangle labeled 'Server'.

Red arrows labeled w^s_{t+1} point from the server back to each client, indicating the global update step where the server sends the updated global model weights to all clients. The entire process reflects a round-based federated learning cycle: clients download global weights, train locally, select and upload key weights, and the server aggregates them to form a new global model. The figure visually emphasizes the privacy-preserving nature of the approach through locked datasets and the selective weight transmission.
