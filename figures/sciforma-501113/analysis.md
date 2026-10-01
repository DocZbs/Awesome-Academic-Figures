# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enhancing Temporal Link Prediction with HierTKG: A Hierarchical Temporal Knowledge Graph Framework — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12385

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the HierTKG (Hierarchical Temporal Knowledge Graph) architecture, which is structured into three main vertical sections: Graph Construction, HierTKG Algorithm, and Output. The global layout is a left-to-right pipeline, where the input graph is processed through two parallel pathways within the algorithm, and the results are fused and used for downstream tasks.

In the Graph Construction section on the left, multiple subgraphs are shown, each rooted at an entity node (E1, E2, E3, E4), represented as red circles. These entities are connected to various time-stamped event nodes (T1–T12), depicted as yellow circles, forming a hierarchical structure. User nodes (U1, U2) are shown as blue circles, linked to specific events. The edges between nodes represent temporal relationships, and the entire structure serves as the input to the HierTKG Algorithm.

The central section, labeled 'HierTKG Algorithm', contains two parallel processing streams: TGN Processing and DiffPool Processing. In TGN Processing, the input graph is processed by a Temporal Graph Network (TGN) memory module, represented as three stacked light green rectangles labeled S1(t1), S2(t2), S3(t3), indicating memory states at different timestamps. This is followed by a grid of 4x4 colored squares representing Graph Attention Embeddings, with colors including purple, light blue, yellow, and mint green, symbolizing diverse feature representations. These embeddings feed into the Fusion Layer.

In DiffPool Processing, the input graph undergoes Node Clustering, visualized as a light blue and green shaded region containing interconnected yellow nodes, indicating a clustering process. This leads to GNN Embedding, shown as a 4x2 grid of colored squares (light blue, yellow, purple, mint green), representing learned node features. A small Pooled Network diagram, consisting of a blue center node connected to two dark green nodes, represents the coarsened graph after pooling. These features also feed into the Fusion Layer.

The Fusion Layer combines features from both streams. From TGN Processing, DiffPool Features (a vertical stack of four colored squares) are passed through a Linear layer and then into an Attention block. Similarly, from DiffPool Processing, DiffPool Features (another vertical stack of four colored squares) go through a Linear layer and into a MultiHead Attention block. The outputs of these attention mechanisms are combined in a final Attention module, which produces the final representation.

On the far right, the Output section lists 'Downstream Tasks' and 'Link Predictions' in bold, indicating the ultimate goal of the model: to predict future links or relationships in the temporal knowledge graph. Blue arrows connect the components, showing the data flow from Graph Construction through the two processing streams, fusion, and finally to the output tasks. The overall design emphasizes a hierarchical, multi-modal approach to temporal graph learning, integrating memory-based and pooling-based methods before fusing them via attention mechanisms.
