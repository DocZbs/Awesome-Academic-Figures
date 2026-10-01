# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CompactFlowNet: Efficient Real-time Optical Flow Estimation on Mobile Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13273

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison of two distinct architectures for a flow estimator, labeled as 'densely connected' on the left and 'sequentially connected' on the right. Both architectures are vertically stacked sequences of convolutional layers leading to a final 'Flow estimation' module, but they differ significantly in how intermediate features are reused.

[1] Global Layout and Structure:
The diagram is divided into two vertical columns. The left column illustrates the densely connected architecture, characterized by multiple skip connections that concatenate feature maps from earlier layers to later ones. The right column shows the sequentially connected architecture, which processes features in a straightforward feed-forward manner without any skip connections. Each column begins with an input layer (represented by a blue rectangle) and ends with a green rectangle labeled 'Flow estimation'. Alongside each column, dashed green boxes indicate the number of input and output channels for each corresponding convolutional block, reflecting the channel dimensions at different stages of processing.

[2] Visual Modules and Attributes:
- Convolutional Layers: Represented by yellow rounded rectangles labeled 'Conv'. These are the primary processing units in both architectures.
- Feature Maps/Intermediate Outputs: Represented by solid blue rectangles of varying lengths. Their length visually suggests the spatial dimension or complexity of the feature map, though exact dimensions are not specified; only channel counts are given.
- Flow Estimation Module: A green rectangle at the bottom of each column, indicating the final output stage.
- Channel Information Boxes: Dashed green boxes positioned to the left of each Conv layer in the left column and to the left of each Conv layer in the right column. They specify 'in: X out: Y', where X is the number of input channels and Y is the number of output channels for that specific convolutional block. For example, the first Conv layer has 'in: 245 out: 128'.
- Concatenation Symbol: A red L-shaped bracket located at the bottom-left corner of the figure, explicitly labeled 'represents feature concatenation'. This symbol appears at junctions in the left architecture where multiple feature maps are combined before being fed into a subsequent Conv layer.

[3] Connections and Arrows:
In the left (densely connected) architecture, each Conv layer receives inputs from two sources: the output of the previous Conv layer and one or more concatenated feature maps from earlier layers via curved black arrows. Specifically, after each Conv layer, the resulting feature map splits into two paths: one continues forward to the next Conv layer, while the other branches off horizontally and curves downward to be concatenated with a future Conv layer’s input. Red lines indicate the concatenation operation, merging multiple incoming feature maps before feeding them into the next Conv layer. The flow proceeds through five Conv layers, with increasing input channels due to concatenation (from 245 → 373 → 501 → 597 → 661), and decreasing output channels (128 → 128 → 96 → 64 → 32 → 2).

In the right (sequentially connected) architecture, there are no skip connections. Each Conv layer receives input only from the output of the immediately preceding Conv layer via straight black arrows. The feature maps progress linearly down the stack. The channel dimensions follow the same pattern as the left side: 'in: 245 out: 128', then 'in: 128 out: 128', 'in: 128 out: 96', 'in: 96 out: 64', 'in: 64 out: 32', and finally 'in: 32 out: 2'.

Both architectures conclude with a final Conv layer whose output feeds into the green 'Flow estimation' block, which produces the final optical flow prediction. The figure's caption clarifies that the channel numbers correspond to the flow estimator block operating at the lowest resolution, implying that these architectures are part of a larger network that may involve downsampling.
