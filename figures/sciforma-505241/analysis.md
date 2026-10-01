# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Adaptive Context-Aware Multi-Path Transmission Control for VR/AR Content: A Deep Reinforcement Learning Approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19737

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-path TCP (MPTCP) architecture where a source device communicates with a server through four distinct network paths: Wi-Fi, 4G, 5G, and Ethernet. The global layout is structured vertically into four parallel horizontal bands, each representing one network path, labeled K1 through K4 from top to bottom. Each band contains a 'Context-Aware Module' on the left, which receives inputs such as user demands, device configuration, and network status. These modules are color-coded: orange for 4G, green for 5G, blue for Ethernet, and gray for Wi-Fi. From each module, a colored line (matching the module’s color) extends rightward toward the server, symbolizing the data flow over the respective network. Each path includes a cloud-shaped icon indicating the network type (e.g., 'Wi-Fi', '4G', etc.), followed by a small diagram showing network performance metrics like RTT, packet loss, and throughput, which are used to determine the current state S_t. This state is fed into a reinforcement learning (RL) component, depicted as a box containing 'Actions' and 'Observations', with a globe icon suggesting global network monitoring or decision-making. The RL component outputs actions that influence how traffic is distributed across the sub-flows. The server is shown on the far right as a stack of blue server racks, receiving data from all four paths. Curved arrows from the source device to the server indicate the aggregation of data streams from multiple paths. The figure emphasizes that MPTCP dynamically manages these sub-flows based on real-time context and network conditions, optimizing throughput and fault tolerance. The overall structure highlights a distributed, adaptive communication framework where each network path operates independently but contributes to a unified data delivery process.
