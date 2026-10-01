# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

YOLOv11 Optimization for Efficient Resource Utilization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14790

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the YOLOv11-Large architecture designed for large object detection, structured as a deep convolutional neural network with a clear hierarchical flow from input to detection output. The global layout is vertically oriented, progressing from top to bottom, with blocks labeled b0 through b13 indicating sequential processing stages. The architecture begins at the top right with an input of size 640x640x3, which feeds into block b0, a light purple rounded rectangle labeled 'P1 Conv'. This initiates a backbone sequence where each subsequent block alternates between two types of modules: light purple rounded rectangles labeled 'Pn Conv' (where n ranges from 1 to 5) and golden-yellow rounded rectangles labeled 'C3k2'. These modules form a cascading structure: P1 Conv (b0) → C3k2 (b2) → P2 Conv (b1) → C3k2 (b4) → P3 Conv (b3) → C3k2 (b5) → P4 Conv (b6) → C3k2 (b7) → P5 Conv (b8) → C3k2 (b9) → SPPF (b10) → C2PSA (b10). The SPPF module is colored teal, while the C2PSA module is magenta, distinguishing them from other components. 

From block b6 (C3k2), a lateral connection branches off to block b11, which is a light purple 'Conv' module. This branch continues to block b12, a green 'Concat' module, which merges features from this branch with those from the main path. The concatenated output flows down to block b13, a golden-yellow 'C3k2' module labeled with 'P5', indicating it processes features from the P5 level. Finally, the output from b13 feeds into a light blue rounded rectangle labeled 'Detect', representing the detection head responsible for generating object predictions.

Connections are represented by solid black arrows indicating the direction of data flow. The primary forward path proceeds sequentially from b0 to b10, then splits into two streams: one continuing directly to b13 via C2PSA, and another branching from b6 to b11 and b12 before merging back into b13. The 'Concat' module at b12 combines feature maps from both paths, enabling multi-scale feature fusion. All modules are uniformly shaped as rounded rectangles, with distinct colors coding their function: light purple for Pn Conv layers, golden-yellow for C3k2 blocks, teal for SPPF, magenta for C2PSA, green for Concat, and light blue for Detect. Each block is annotated with a 'b' prefix followed by a number (e.g., b0, b1, ..., b13) to denote its position in the network. The labels inside the modules specify their type or operation, such as 'Conv', 'C3k2', 'SPPF', 'C2PSA', or 'Concat'. The final 'Detect' module signifies the output stage for object localization and classification.
