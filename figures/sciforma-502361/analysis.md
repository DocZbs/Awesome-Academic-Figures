# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLDG: Contrastive Learning on Dynamic Graphs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14451

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a contrastive learning framework for graph data, specifically focusing on the projection head component used in CLDG (Contrastive Learning for Dynamic Graphs). The global layout is divided into two main sections: the left side presents the overall contrastive learning pipeline, while the right side provides a detailed breakdown of the 'Projection Head' module.

On the left, the workflow begins at the bottom with two sets of input graphs, represented as stacked rectangular layers with one layer showing a small graph structure (nodes connected by edges), indicating dynamic or multi-view graph inputs. These inputs are processed by two identical encoder modules, depicted as light green rounded rectangles labeled 'encoder'. Each encoder outputs a feature representation, which is then passed to a corresponding 'projection' module, shown as light blue rounded rectangles. The projections are further transformed by 'readout' modules, represented as beige rounded rectangles, which likely aggregate node features into a global graph embedding. The outputs from the readout modules are visualized as gray horizontal bars containing circles, symbolizing the final embeddings. Dotted lines connect these embeddings across the two branches, forming a cross-branch contrastive loss computation, explicitly labeled 'contrastive loss', indicating that the model learns by pulling similar graph representations closer and pushing dissimilar ones apart. Solid arrows show the forward flow: from input graphs → encoder → projection → readout → embedding. Feedback loops from readout back to the encoder suggest potential iterative refinement or recurrent processing.

On the right, the 'Projection Head' is detailed within a large light blue rounded rectangle. It consists of a sequential stack of six layers: Linear → L2 Norm → LeakyReLU → Linear → L2 Norm → LeakyReLU. Each layer is represented as a white rounded rectangle with black text. This structure implies a non-linear transformation followed by normalization, repeated twice, to project the encoder's output into a space suitable for contrastive learning. Below this diagram, two gray bars with circles are shown — one longer with seven circles, the other shorter with three — likely illustrating different embedding dimensions or examples of the output vectors from the projection head.

The visual attributes include distinct colors for functional blocks: green for encoders, blue for projections, beige for readouts, and gray for embeddings. Shapes are consistently rounded rectangles for modules and horizontal bars with circles for embeddings. Connections are solid arrows for data flow and dotted lines for loss computation. The figure caption 'Projection head of CLDG' confirms the focus on this specific component within the broader contrastive learning framework.
