# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unleashing the Power of Continual Learning on Non-Centralized Devices: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13840

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a federated learning system architecture highlighting four types of heterogeneity: communication, model, data, and computation. The global layout is structured into four horizontal sections, each representing one type of heterogeneity, separated by dashed gray lines. At the top, a central 'Server' is depicted as a cloud icon containing a blue globe symbol, indicating a centralized coordination point. Below the server, three client devices are shown vertically aligned under separate dashed rectangular boundaries—Client 1 (blue dotted border), Client 2 (yellow dotted border), and Client k (red dotted border)—representing diverse client environments.

In the top section labeled 'Communication Heterogeneity', bidirectional arrows connect the server to each client, with labels '2G' and '4G' between the server and Client 2, symbolizing varying network conditions. These arrows are thick and blue, emphasizing the communication links.

The second section, 'Model Heterogeneity', displays distinct neural network architectures within each client’s boundary. Client 1 has a blue network with five nodes arranged in a pentagon-like structure; Client 2 has a more complex blue network with six nodes forming a hexagonal pattern; Client k shows a simplified blue network with four nodes in a diamond shape. These variations indicate different model structures across clients.

The third section, 'Data Heterogeneity', features database icons beneath each client. Client 1 has yellow databases, Client 2 has gray databases, and Client k has green databases, visually representing non-IID data distributions across clients.

The bottom section, 'Computation Heterogeneity', shows different computing hardware. Client 1 includes a smartphone and desktop monitor, suggesting limited resources. Client 2 displays a cartoon-style desktop with a smiling face, implying moderate capability. Client k shows a stack of blue server racks, indicating high computational power. This reflects varying hardware capabilities.

All clients are connected to the server via bidirectional communication links, illustrating the federated learning workflow where models are exchanged and updated. The figure uses color-coded borders (blue, yellow, red) to distinguish clients and employs consistent visual metaphors for each heterogeneity type. The overall design emphasizes the challenges posed by diverse client environments in distributed machine learning systems.
