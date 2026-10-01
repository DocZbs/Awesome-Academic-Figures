# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A comprehensive GeoAI review: Progress, Challenges and Outlooks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11643

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the federated learning workflow, depicting a distributed machine learning process where multiple local devices collaboratively train a global model without sharing raw data. The global layout is vertically structured: at the top, a server hosts the 'Global model on server', represented by a gray server rack icon enclosed in a blue dashed rectangle. Below it, a horizontal row of four identical client devices, each symbolized by a blue cylindrical database icon, represents 'Local models on multiple devices', grouped within a red dashed rectangle. Each device contains a small neural network diagram composed of interconnected nodes in various colors (teal, red, yellow, light green, pink), indicating local model structures.

The visual modules include the server and the client devices. The server’s global model is shown as a larger, more complex neural network with nodes in green, pink, and red, signifying a centralized, aggregated model. The local models on each device are smaller, simpler networks with fewer nodes, colored in teal, red, yellow, and light green, representing individual, localized training instances. All components are labeled with clear black text, and the server and client groups are demarcated by dashed borders—blue for the server and red for the clients.

Connections and arrows indicate the three-step federated learning cycle. A red dashed arrow labeled '1: Download global model' points from the server to the first client, showing the initial step where the global model is sent to each device. A solid red arrow labeled '2: Upload local model' points upward from the last client to the server, illustrating the second step where updated local models are sent back. Finally, a red text label '3: Update models' is placed below the client group, indicating the third step where each local device trains its model using its own data, updating the weights before uploading. The arrows and labels are rendered in bold red font, emphasizing the flow direction and sequence. The entire diagram is clean, schematic, and designed to convey the iterative, decentralized nature of federated learning.
