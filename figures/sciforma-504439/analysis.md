# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Semi-supervised Credit Card Fraud Detection via Attribute-Driven Graph Representation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18287

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comprehensive model architecture for processing transaction data using attribute embeddings, gated temporal attention networks, and a temporal graph attention mechanism. The overall layout is divided into three main sections: (a) Attribute Embedding, (b) Gated Temporal Attention Networks, and (c) Temporal Graph Attention (TGAT), each enclosed within dashed rectangular boundaries.

In section (a), Attribute Embedding, three distinct entities—Card, Transaction, and Merchant—are represented by icons on the left. Each entity has associated categorical attributes: Card Type for Card (orange header), Channel ID and Currency ID for Transaction (yellow header), and Mchnt Type and Term Type for Merchant (blue header). For each attribute, a Look-up operation retrieves an embedding vector. These vectors are concatenated and passed through a Multi-Layer Perceptron (MLP) to produce a final embedding: x_card (orange circle), x_trans (yellow circle), and x_mchnt (blue circle), respectively. These embeddings are then aggregated in section (b).

Section (b), Gated Temporal Attention Networks, begins with an Aggregation step that combines the three entity embeddings into a sequence of historical transaction embeddings: x_t0, x_t1, ..., x_tn, represented as yellow circles within dashed boxes. This sequence feeds into a Temporal Transaction Graph, depicted as a dense network of interconnected yellow nodes. From this graph, multiple TGAT modules process the embeddings. Each TGAT module receives input from the graph and passes it through a Gated Residual block, which maintains temporal dependencies. The outputs from these blocks are combined via another MLP layer to produce a final Score, visualized as a gradient bar transitioning from red to green, indicating confidence or risk level.

Section (c), Temporal Graph Attention (TGAT), provides a detailed view of the attention mechanism. It shows a central node r_ti receiving connections from previous nodes r_ti−3, r_ti−2, r_ti−1 and a dashed connection from future node r_ti+1, illustrating temporal context. The attention weights α_tk are computed using a softmax function over the dot product of node features [x_tk || x_ti] with a learnable parameter vector a. The formula shown is: α_tk = exp(σ([x_tk || x_ti] · a)) / Σ_{m=0}^i exp(σ([x_tm || x_ti] · a)), where σ denotes a non-linear activation. The final hidden state h_ti is computed as the weighted sum: h_ti = Σ_{k=0}^i x_tk α_tk. This mechanism enables the model to focus on relevant historical transactions when predicting the current one.

Connections throughout the diagram are indicated by solid black arrows, showing the flow of information from inputs to outputs. Dashed lines denote optional or contextual relationships, such as the future node in the TGAT module. The entire architecture emphasizes temporal modeling and attention-based aggregation to capture complex patterns in transaction sequences.
