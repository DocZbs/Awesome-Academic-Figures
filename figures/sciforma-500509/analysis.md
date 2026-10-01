# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UIBDiffusion: Universal Imperceptible Backdoor Attack for Diffusion Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the generator architecture of a neural network, divided into three main components: (a) the encoder block, (b) the bottleneck block, and (c) the decoder block. The overall layout is left-to-right, with data flow progressing from input on the far left to output on the far right. Each component is enclosed in a distinct dashed boundary with a unique background color: (a) has a light blue background, (b) a pale yellow background, and (c) a light green background. These blocks are labeled (a), (b), and (c) at the bottom of each section.

In section (a), the encoder block begins with an 'Input' node, represented as a yellow rectangle with black text, labeled 'z ~ N(0,1)', indicating a random noise vector sampled from a standard normal distribution. This input feeds into a sequence of three identical residual-like units, each consisting of a 'BatchNorm' layer (blue rectangle), followed by a 'ReLU' activation (light green rectangle), and then a 'Conv' layer (orange rectangle). These units are stacked vertically, with arrows pointing downward to indicate sequential processing. The output of the final unit in this stack connects to the top of the bottleneck block (b).

Section (b), the bottleneck block, contains four identical residual units arranged vertically. Each unit consists of two '3 × 3 Conv' layers (orange rectangles) with a 'ReLU' activation (light green rectangle) placed between them. The first '3 × 3 Conv' layer receives input from the previous unit or from the encoder block. A skip connection bypasses the entire unit, connecting the input directly to the output of the second '3 × 3 Conv' layer. Additionally, there is a horizontal skip connection from the output of the first '3 × 3 Conv' layer to the input of the second '3 × 3 Conv' layer within the same unit. The output of the last unit in this stack connects to the top of the decoder block (c).

Section (c), the decoder block, consists of three identical units arranged vertically. Each unit starts with a 'Conv' layer (orange rectangle), followed by a 'ReLU' activation (light green rectangle), and then a 'BatchNorm' layer (blue rectangle). The output of the third unit feeds into a final 'Conv' layer (orange rectangle), followed by a 'Tanh' activation (light green rectangle), which produces the 'Trigger τ Output', shown as a yellow rectangle at the top of this section.

Connections between blocks are indicated by solid black arrows. The encoder block's output feeds into the bottleneck block, and the bottleneck block's output feeds into the decoder block. Additionally, skip connections are drawn from the encoder block’s intermediate layers to corresponding positions in the bottleneck block, and from the bottleneck block’s intermediate layers to corresponding positions in the decoder block, forming a U-Net-like architecture. All layers are rectangular with rounded corners, and the text inside each layer is centered and in black font. The figure uses consistent color coding: blue for BatchNorm, green for ReLU/Tanh, and orange for Conv layers.
