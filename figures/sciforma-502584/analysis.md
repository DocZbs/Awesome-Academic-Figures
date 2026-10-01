# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

YOLOv11 Optimization for Efficient Resource Utilization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14790

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the YOLOv11-sm architecture designed for small and medium object detection. The global layout is a hierarchical, multi-scale feature extraction and fusion network structured vertically from top to bottom, with lateral connections and skip pathways forming a complex flow. The input is specified as 640x640x3, entering at the top via block b0, which feeds into a convolutional layer labeled 'P1 Conv' (light purple rounded rectangle). This initiates a backbone network progressing downward through sequential blocks labeled b1 to b10.

The backbone consists of alternating convolutional layers (labeled 'Conv', light purple rounded rectangles with P2, P3, or P4 identifiers) and C3k2 blocks (yellow rounded rectangles), which likely represent a variant of the C3 module using 3x3 kernels with 2 layers. After several such stages, the network incorporates specialized modules: SPPF (Spatial Pyramid Pooling Fast, teal rounded rectangle) at block b9 and C2PSA (Cross-Stage Partial Attention, pink rounded rectangle) at block b10, indicating advanced feature aggregation and attention mechanisms.

From block b10, the feature map flows upward via an upsample operation (red rounded rectangle, labeled 'Upsample') at block b11, which connects to a Concat (green rounded rectangle) module at block b12. This Concat merges features from the upsampled path with a lateral connection from block b6 (C3k2). The concatenated output feeds into another C3k2 block (b13), followed by another Upsample (b14) and Concat (b15), merging features from block b4 (C3k2). This forms a top-down pathway with lateral connections, characteristic of a Feature Pyramid Network (FPN) or Path Aggregation Network (PAN).

Parallel to this, the main backbone continues downward through blocks b7 and b8 (Conv and C3k2), leading to the SPPF and C2PSA modules. From block b10, a direct connection also feeds into the upsample block b11, reinforcing the feature propagation.

On the right side, the fused features from block b15 (Concat) feed into a C3k2 block labeled 'P3' (b16), which splits into two paths: one directly to a Detect module (light blue rounded rectangle), and another through a Conv layer (b17) to a Concat block (b18). This Concat merges with features from block b13 (C3k2), producing an output fed into another C3k2 block labeled 'P4' (b19), which then connects to a second Detect module.

Thus, the architecture employs a dual-path detection strategy: one at the P3 scale (higher resolution, finer details) and another at the P4 scale (lower resolution, broader context), enabling effective detection across different object sizes. The Detect modules represent the final prediction heads for bounding boxes and class probabilities. All blocks are labeled with 'b#' identifiers along the left margin, indicating their sequential order in the network. The color coding distinguishes module types: purple for Conv, yellow for C3k2, green for Concat, red for Upsample, teal for SPPF, pink for C2PSA, and light blue for Detect.
