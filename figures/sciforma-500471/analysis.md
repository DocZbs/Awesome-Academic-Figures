# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PAT: Privacy-Preserving Adversarial Transfer for Accurate, Robust and Privacy-Preserving EEG Decoding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11390

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a federated source-free transfer learning framework, structured into two main vertical regions separated by a vertical black line. On the left side, within a large rectangular boundary, there are U distinct data sources labeled Source 1, Source 2, ..., Source U, arranged vertically. Each source is represented by an oval-shaped container with a unique border color: yellow for Source 1, light blue for Source 2, and purple for Source U. Inside each oval, two types of data points are shown: circular dots and square shapes, both colored to match the oval’s border, indicating heterogeneous data distributions across sources. From each source, a rightward arrow leads to a corresponding 'Client Model' — Client Model 1, Client Model 2, ..., Client Model U — each depicted as a small neural network diagram composed of interconnected black circles arranged in three layers (input, hidden, output). These client models are positioned immediately to the right of their respective sources.

On the right side of the vertical divider, outside the main rectangle, is the 'Global Model', represented as a larger neural network structure with four layers of nodes. The nodes are colored differently: orange on the first layer, blue on the second and third layers, green on the fourth layer, and red on the final output node, suggesting a more complex or aggregated model. Bidirectional arrows connect each client model to the global model, indicating iterative communication and parameter exchange during training. These arrows are parallel double-headed lines, emphasizing synchronization.

At the bottom right corner, adjacent to the vertical divider, a black padlock icon is placed, symbolizing privacy or security, reinforcing the federated nature of the setup where raw data remains local. The overall layout conveys a distributed learning process where multiple clients train locally using their private data sources and collaboratively update a shared global model without sharing raw data, aligning with the concept of source-free federated transfer learning.
