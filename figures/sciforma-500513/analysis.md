# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TRAIL: Trust-Aware Client Scheduling for Semi-Decentralized Federated Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11448

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the SD-FL (Secure and Decentralized Federated Learning) system framework, depicting a hierarchical and distributed federated learning architecture involving multiple edge servers and client devices organized into clusters. The global layout is structured into three main client clusters, each enclosed by a dashed blue rectangular boundary, representing geographically or logically separated groups of clients. Each cluster contains one or more edge servers, depicted as gray server racks with colored indicator lights, and various client devices such as smartphones, smartwatches, and tablets, symbolizing diverse end-user hardware. These edge servers act as local aggregation points within each cluster.

Visual modules include distinct icons for 'Local model' (a blue and red neural network graph), 'Global model' (a green and purple neural network graph), and 'Clients clusters' (a dashed blue rectangle). The edge servers are shown with wireless antennas, indicating communication capabilities. Client devices vary in form factor: a tablet with a red screen, a smartphone displaying health metrics, a smartwatch with an ECG-like waveform, and another smartwatch with a heart icon. Each device interacts with its local edge server through bidirectional data flows.

Connections and arrows represent different types of communication and model updates. Green solid arrows indicate 'Inter-aggregation', where global models are shared between edge servers across different clusters. Purple solid arrows denote 'Model download', showing the flow of updated global models from edge servers to client devices. Red dashed arrows represent 'Intra-aggregation', illustrating the aggregation process within each cluster, where local models from client devices are sent to the edge server, which then aggregates them and sends back an updated local/global model. The legend on the right side explicitly defines these arrow types. Additionally, a central global model icon is shown being transmitted via inter-aggregation between edge servers, emphasizing cross-cluster coordination. The overall workflow follows a cycle: client devices train local models using their data, send updates to their respective edge servers, which perform intra-aggregation; edge servers then exchange aggregated models via inter-aggregation to form a more comprehensive global model, which is downloaded back to clients for further training. This structure supports decentralized, secure, and scalable federated learning across distributed edge environments.
