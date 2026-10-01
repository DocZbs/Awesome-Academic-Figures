# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unleashing the Power of Continual Learning on Non-Centralized Devices: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13840

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two device-level methods in federated learning: (a) Device Selection and (b) Device Cluster. The overall layout is divided into two main horizontal sections, each with a distinct background color—light green for (a) and light blue for (b)—and labeled accordingly at the bottom of each section.

In part (a), Device Selection, the top section shows multiple clients (Client 1, Client 2, ..., Client k) each represented by a device icon (e.g., desktop, laptop, server) and a database icon labeled 'Local Data D_i' (i=1 to k). Each client performs 'Local Training' on their data, resulting in a 'Local Model w_i', depicted as a neural network diagram with nodes and connections. These local models are then sent to a central 'Server' represented by a cloud icon with a globe inside. The server evaluates the models: Client 1’s model is accepted (indicated by a green checkmark) with a weight of 0.7; Client 2’s model is rejected (indicated by a red cross); Client k’s model is accepted with a weight of 0.3. The arrows from clients to the server are bidirectional, showing communication flow, and the weights are displayed in red text next to the checkmarks. This process demonstrates selective participation where only certain devices contribute to the global model, weighted by their data quality or relevance.

In part (b), Device Cluster, the bottom section shows a more structured aggregation process. The 'Server' is again at the top center, with a cloud and globe icon. Below it, local models from various clients (Client 1, Client 2, ..., Client k) are shown being aggregated. Each client has a local model (w_1, w_2, ..., w_k) represented as a neural network diagram, with colors matching their respective client icons (gray for Client 1, blue for Client 2, yellow for Client k-1, green for Client k). The server combines pairs of local models (e.g., w_1 + w_2 = Global Model ŵ_1) using mathematical summation symbols, indicating averaging or weighted aggregation. The resulting global models (ŵ_1, ŵ_{k-1}) are then sent back to the clients for further local training. The arrows between clients and the server are bidirectional, and the aggregation is shown as a sequence of operations across the clients. This illustrates clustering of devices that may share similar data distributions, enabling more efficient and representative global model updates.

The figure uses consistent visual elements: dashed rectangular boxes group related components (e.g., client data and model), colored borders distinguish clients, and neural network diagrams represent models. Text labels are clear and positioned near the relevant components. The overall workflow in both parts follows a client-server paradigm, but with different strategies: selective weighting in (a) versus clustered aggregation in (b).
