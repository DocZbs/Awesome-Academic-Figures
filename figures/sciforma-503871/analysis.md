# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Better Knowledge Enhancement for Privacy-Preserving Cross-Project Defect Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17317

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the federated learning framework, structured into two main horizontal sections: the Server at the top and multiple Clients below. The Server section is enclosed in a large rounded rectangle labeled 'Server' at the top center. Inside, K local models (w₁, w₂, ..., w_K) are represented as neural network diagrams with distinct background colors—light green for w₁, light pink for w₂, and light yellow for w_K—each containing interconnected nodes (purple, pink, and green circles). These local models are shown being summed via '+' signs, followed by a thick green arrow labeled 'Aggregate' pointing to a final neural network diagram with a light blue background, labeled 'Global Model w'. Above this aggregation arrow, the mathematical formula w = (1/K) Σ(w_k) from k=1 to K is displayed, indicating averaging of local model weights.

Below the Server, three client devices are depicted horizontally: Client 1 (a desktop), Client 2 (a smartphone), and Client K (a laptop), each enclosed in a rounded rectangle labeled 'Local Update'. Each client contains a neural network diagram matching the color of its corresponding local model (green for Client 1, pink for Client 2, yellow for Client K), labeled 'Local Model w_i', and a cylindrical data icon beneath it labeled 'Local Data D_i' (D₁, D₂, D_K respectively). A curved yellow arrow within each client box indicates iterative local training using local data.

Communication between Server and Clients is shown via bidirectional arrows. From the Server, a blue arrow labeled 'Distribute Global Model' points downward to each client, carrying the global model weight 'w'. From each client, a red arrow labeled 'Upload Local Model' points upward to the Server, carrying the updated local model weight (w₁, w₂, ..., w_K). The arrows are color-coded: blue for distribution, red for upload. The entire process represents one communication round in federated learning: the server distributes the current global model to clients, clients perform local updates using their private data, and then upload the updated models back to the server for aggregation into a new global model.
