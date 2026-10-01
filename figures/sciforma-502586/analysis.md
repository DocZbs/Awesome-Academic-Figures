# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

YOLOv11 Optimization for Efficient Resource Utilization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14790

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the YOLOv11-sl architecture designed for small and large object detection, structured as a deep neural network with a backbone, feature pyramid, and detection heads. The global layout is a vertical flowchart on the left representing the backbone, transitioning into a horizontal feature fusion path on the right, culminating in two detection outputs. The input is a 640x640x3 image, which enters the network through a convolutional layer labeled 'P1 Conv' (b0), followed by another 'P2 Conv' (b1) layer. These initial layers are light purple rounded rectangles with white circular labels 'P1' and 'P2' respectively.

The backbone consists of a sequence of blocks labeled b2 to b10, arranged vertically. Blocks b2, b4, b6, and b8 are yellow rounded rectangles labeled 'C3k2', indicating a C3 module with k=2. Blocks b3, b5, and b7 are light purple rounded rectangles labeled 'Conv' with circular labels 'P3', 'P4', and 'P5' respectively, signifying feature maps at different scales. Block b9 is a teal rounded rectangle labeled 'SPPF', and block b10 is a pink rounded rectangle labeled 'C2PSA', both serving as advanced feature extraction modules.

On the right side, the feature fusion path begins with an upsample operation (red rounded rectangle, b11) from the P5 feature map (b7) to a higher resolution, which is then concatenated (green rounded rectangle, b12) with the P4 feature map (b5). This fused feature is processed by a 'C3k2' block (b13), followed by another upsample (b14) and concatenation (b15) with the P3 feature map (b3). The resulting feature is passed through a 'C3k2' block (b16) and then to a 'Detect' head (light blue rounded rectangle) for small object detection.

In parallel, the P5 feature map (b7) is also connected directly to a 'C3k2' block (b17), which feeds into a 'Concat' layer (b18) that merges it with the output of the C2PSA block (b10). This merged feature is processed by another 'C3k2' block (b19) and sent to a second 'Detect' head for large object detection. All connections are represented by black arrows indicating data flow, with branch points labeled b12, b13, b15, b16, b17, b18, and b19. The architecture employs a top-down feature fusion strategy with skip connections to enhance multi-scale detection performance.
