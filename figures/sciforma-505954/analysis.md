# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine Learning Optimal Ordering in Global Routing Problems in Semiconductors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21035

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the process of layer assignment in a multi-layer routing problem, transforming a single-layer routing solution into a k-layer solution. The global layout is vertically stacked, consisting of four distinct sections: a bottom 'single layer' section, followed by three progressively higher layers labeled 'layer 1', 'layer 2', and 'layer 3'. Each layer is represented as a gray parallelogram divided into a 2x2 grid of cells, symbolizing a routing plane. A black upward arrow labeled 'layer assignment' connects the single-layer section to layer 1, indicating the transformation direction.

In the 'single layer' section at the bottom, a blue line connects two blue circular nodes positioned in adjacent cells — one in the bottom-left cell and the other in the top-right cell — forming a diagonal path across the grid. This represents the initial routing solution S¹. To the right of this section, the label 'S¹' is written in blue script.

Above it, 'layer 1' contains a single blue node located in the bottom-left cell, connected via a dashed blue vertical line to a node in 'layer 2'. In 'layer 2', the same node is now connected by a solid blue diagonal line to another blue node in the top-right cell, mirroring the original path from S¹ but now within layer 2. To the right of layer 2, the label 'Sᵏ' is written in blue script, indicating the final k-layer solution. A dashed blue vertical line extends from the node in layer 2 to layer 3.

In 'layer 3', the blue node from layer 2 is connected by a solid blue horizontal line to another blue node in the same row, top-right cell. This represents a rerouting or continuation of the path on the topmost layer. The dashed lines between layers indicate vertical connections or vias between layers, while solid lines represent horizontal routing paths within each layer.

The visual modules consist of gray parallelograms representing routing planes, blue circular nodes representing connection points or terminals, and blue lines (solid for intra-layer routing, dashed for inter-layer vias). Text labels such as 'layer 1', 'layer 2', 'layer 3', 'single layer', 'layer assignment', 'S¹', and 'Sᵏ' are placed near their respective components. The figure visually demonstrates how a single-layer routing path is decomposed and assigned across multiple layers, with intermediate vias and re-routing to achieve a multi-layer solution.
