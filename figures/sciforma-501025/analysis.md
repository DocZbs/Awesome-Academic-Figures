# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Decomposition Modeling Framework for Seasonal Time-Series Forecasting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12168

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a seasonal component prediction module named SDNet, which processes an input sequence X_p to produce an output y_p. The global layout is a left-to-right data flow pipeline, divided into two main stages: a multi-scale feature extraction stage on the left, and the core SDNet processing block on the right, enclosed within a dashed rectangular boundary labeled 'SDNet'.

In the first stage, the input X_p enters a 'Multi-scale' block, represented by a dotted rectangle. Inside this block, X_p is combined via a circular summation node with two components: TFE (Temporal Feature Encoding) and PE (Positional Encoding), both indicated by downward arrows pointing to the summation node. The result of this combination is passed to an 'Embedding' module, depicted as a pink rectangle. A dashed line extends from the Embedding module to the SDNet block, indicating the input to the subsequent processing stages.

The SDNet block contains multiple stacked layers, each represented as a light blue rectangular box with a dark blue border. Each layer includes a horizontal substructure composed of two modules: a 'Local module' (light green rectangle) followed by a 'Global module' (light orange rectangle), connected by a solid arrow indicating sequential processing. These modules are embedded within a larger light blue box, suggesting they form a unified processing unit per layer. Above these layers, small black squares are shown, possibly representing attention weights or feature maps, with dashed lines connecting them to the topmost layer, implying some form of feedback or cross-layer interaction.

Outputs from all the stacked layers are directed to a vertical 'Merge' module, shown as a tall light blue rectangle. This module combines the outputs from the multiple layers. The merged output then flows into a 'Feed forward' module, represented as a light yellow rectangle. The output of the feed forward module is then sent to an 'Add & Norm' module, shown as a light orange rectangle, which performs residual connection and normalization. A skip connection from the 'Merge' module directly feeds into the 'Add & Norm' module, forming a residual structure. Finally, the output of the 'Add & Norm' module is the predicted seasonal component y_p.

All connections between modules are represented by solid black arrows, indicating the direction of data flow. Dashed lines are used for auxiliary connections, such as the one from the Embedding module to the first layer of SDNet and the feedback lines from the top layer to the upper part of the stack. The entire SDNet block is labeled at the bottom center with the bold text 'SDNet', identifying the core model component.
