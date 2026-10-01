# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AI-Powered Cow Detection in Complex Farm Environments — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02080

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a tailored YOLOv8-CBAM object detection model, presented as a left-to-right data flow pipeline. The global layout is divided into four main stages: Input Image, Backbone, Neck, and Head, each enclosed in distinct dashed bounding boxes with different colors—orange for Backbone, purple for Neck, and yellow for Head. The entire process begins with an input image on the far left, showing a cow in a field, which feeds into the Backbone module via a thick orange arrow.

In the Backbone section, three yellow rectangular blocks represent CSP1-1, CSP1-3, and another CSP1-3 layer, arranged sequentially from left to right. These blocks are connected by blue arrows indicating forward propagation. After the third CSP block, the feature map passes through a smaller yellow block labeled 'SPP' (Spatial Pyramid Pooling), followed by an orange cube labeled 'CBAM' (Convolutional Block Attention Module), which introduces attention mechanisms to enhance feature representation.

From the CBAM module, multiple feature maps are sent to the Neck section, which is enclosed in a purple dashed box. Here, four parallel pathways are shown, each consisting of a magenta rectangular block representing a feature processing unit. Each pathway includes an 'Upsampling + Concat' operation, indicated by text above the block and a blue arrow pointing upward from a lower-resolution feature map to a higher-resolution one, suggesting feature fusion from deeper layers. The outputs of these four pathways are then fed into the Head section.

The Head section, outlined in a yellow dashed box, contains three stacked yellow cubes of decreasing size, labeled with their spatial dimensions: 76x76x27, 38x38x27, and 19x19x27. These represent multi-scale prediction heads for object detection at different resolutions. Blue arrows connect the outputs of the Neck’s pathways to the corresponding Head cubes, indicating that each head receives fused features from the Neck.

Finally, the output of the Head is directed to a Detection result on the far right, depicted as a cropped image of the cow with a green bounding box and the label 'cow 87%', indicating the detected class and confidence score. A thick green arrow connects the Head to this detection output, completing the end-to-end flow.

All connections between modules are represented by solid blue arrows, except for the initial input arrow (thick orange) and final output arrow (thick green). The diagram uses color-coding consistently: yellow for backbone and head components, magenta for neck processing units, orange for CBAM, and purple for the neck boundary. Text labels are placed directly on or near the respective components, ensuring clarity. The overall structure reflects a typical YOLO-style detector with enhanced feature extraction via CBAM and multi-scale feature fusion in the Neck.
