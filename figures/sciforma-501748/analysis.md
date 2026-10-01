# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Communication-Efficient Personalized Federal Graph Learning via Low-Rank Decomposition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13442

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the CEFGL framework, a federated learning architecture for graph-based tasks involving a client-server setup. The global layout is divided into two main sections: the 'Client i' at the top, enclosed in a rounded rectangle with dashed internal boundaries, and the 'Server' at the bottom, also in a rounded rectangle. These components are connected by bidirectional arrows indicating data flow between them.

In the Client i section, the process starts with an input 'Graph' represented as a black node with five connected edges, feeding into an 'MLP' (Multilayer Perceptron) block, depicted as a gray square. The MLP outputs a vector denoted as H_i^(0), shown as a horizontal gray bar. This output feeds into a 'GNN Encode' module, labeled 'Train', which processes the data through a stack of gray grid-like blocks representing neural network layers, initialized with parameters Θ^t. The result is a colored grid block labeled W_i^t, symbolizing the learned weights. This is followed by a 'Dual Channel Encoder' module, which connects to a 'Fine-tune' step where the same Θ^t is combined with a sparse matrix S_i^(t-1) — a grid with one black cell — to produce a new sparse personalized local model S_i^t. The output of this fine-tuning is then mixed with another model component via a '+' operation inside a 'Mix' box, which combines two sets of colored grid blocks. The mixed output passes through a 'Pooling Layer' (gray square) to produce a prediction vector ŷ, shown as a vertical stack of three white circles.

Below the client’s processing pipeline, a formula describes the update of the correction term: h_i^(t+1) = h_i^t + (1/η)(Θ^t - W_i^(t+1)), indicating how the client computes a correction vector for model personalization.

The client uploads the compressed personalized local model (PLM) — represented as a colored grid block — and the updated correction term h_i^(t+1) to the server via a downward arrow labeled 'Upload compressed PLM and h_i^(t+1) to server'.

On the server side, the received data is used to update two models. The 'Low-rank global model (LRGM)' is updated using the formula: Θ^(t+1) = Low-Rank(Avg.(W_i^t) - ηAvg.(h_i^(t+1))), where Avg. denotes averaging over all clients. This is visually represented as a gray grid block labeled Θ^(t+1). The server then compresses this updated LRGM and sends it back to the client via an upward arrow labeled 'Download compressed LRGM from server'.

The visual modules use consistent shapes: gray squares for processing layers (MLP, Pooling Layer), stacked grid blocks for models (with gray for base models, colored for personalized ones), and dashed boxes to group related operations (e.g., GNN Encode, Fine-tune). Text labels are placed directly above or beside each module. Arrows indicate the direction of data flow, with solid lines for direct computation and dashed lines for conceptual grouping. The color coding differentiates between global (gray) and personalized (colored) model components, emphasizing the dual-channel personalization strategy.
