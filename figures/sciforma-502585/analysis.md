# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

YOLOv11 Optimization for Efficient Resource Utilization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14790

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the YOLOv11-ml architecture designed for medium and large object detection, structured as a deep neural network with a clear top-down flow and multiple skip connections. The global layout is vertically oriented, with the input at the top right and outputs at the bottom right, forming a backbone with feature extraction, upsampling, and detection branches. The architecture begins with an input of size 640x640x3, which feeds into block b0, a light purple rounded rectangle labeled 'Conv' with a circular label 'P1'. This connects to block b1, another light purple 'Conv' block labeled 'P2', which then feeds into block b2, a yellow rounded rectangle labeled 'C3k2'. From here, the main backbone proceeds downward through alternating yellow 'C3k2' blocks and light purple 'Conv' blocks, each marked with a circular 'P' label (P3, P4, P5) indicating feature pyramid levels. These blocks are sequentially numbered from b2 to b10, with b9 being a teal 'SPPF' block and b10 a pink 'C2PSA' block. 

The visual modules are color-coded: yellow blocks represent C3k2 (CSP-like structures), light purple blocks denote standard Conv layers, green blocks indicate Concatenation operations, red represents Upsample, and light blue denotes Detect heads. Circular labels within some blocks (P1, P2, P3, P4, P5) specify the feature pyramid level. The left column contains the primary backbone path, while the right side features a detection branch with two 'Detect' heads (light blue) connected to feature maps from different levels. 

Connections and arrows show data flow: the main backbone flows downward from b0 to b10. At b4, a horizontal arrow connects to b14 (a light purple 'Conv'), which leads to a green 'Concat' block (b15). This concatenates with output from b13 (yellow 'C3k2') and feeds into b16 (yellow 'C3k2' with 'P4' label), which connects to the first 'Detect' head. Similarly, from b6, a horizontal arrow connects to a green 'Concat' block (b12), which receives input from b11 (red 'Upsample'). The 'Upsample' block (b11) takes input from b10 ('C2PSA') and feeds into b19 (yellow 'C3k2' with 'P5' label), which connects to the second 'Detect' head. Additionally, b17 (light purple 'Conv') and b18 (green 'Concat') form a vertical path between b16 and b19. The diagram includes explicit block identifiers (b0 to b19) along the edges, guiding the flow and structure. The overall design emphasizes multi-scale feature fusion via skip connections and upsampling, culminating in two parallel detection heads for improved performance on medium and large objects.
