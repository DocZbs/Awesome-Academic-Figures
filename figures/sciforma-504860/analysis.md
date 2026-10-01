# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

WaveDiffUR: A diffusion SDE-based solver for ultra magnification super-resolution in remote sensing images — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18996

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a cross-scale pyramid encoder, designed to process two input feature maps and generate a cross-scale pyramid representation graph. The global layout is horizontal, progressing from left to right, with two parallel input streams converging into a central processing module before diverging into a multi-stage refinement block. On the far left, two gray square blocks represent the input feature maps, labeled as x̂ and x̂_ref, respectively. Each input is fed into an orange vertical rectangular module labeled 'Depth Conv', indicating a depthwise convolution operation. These two Depth Conv modules are positioned vertically, one above the other, and their outputs are combined and directed into a central light blue rounded rectangular module labeled 'Cross Attention'. This module performs cross-attention between the two processed feature maps. From the Cross Attention module, a solid black arrow leads to a sequence of gray vertical rectangular blocks, each labeled '3 × 3 Conv', representing standard 3x3 convolutional layers. Between the first and last of these convolutional blocks, a dashed arrow and an ellipsis (...) indicate that multiple such layers are present, forming a stack. Below this stack, the text 'd = {1,2,3,2,1}' specifies the dilation rates applied to each convolutional layer in sequence, suggesting a pyramidal structure with increasing then decreasing receptive fields. The final output is a gray square block with a radial gradient, darker at the center, labeled 'Cross-scale pyramid representation graph', indicating the resulting multi-scale feature representation. All connections are represented by solid black arrows, except for the dashed arrow between the first and last 3×3 Conv blocks, which denotes the intermediate layers. The visual modules are distinguished by color and shape: inputs and outputs are gray squares, Depth Conv layers are orange rectangles, the Cross Attention module is a light blue rounded rectangle, and the refinement convolutions are gray rectangles. Text labels are placed inside or adjacent to the respective modules, with mathematical notation used for inputs and dilation parameters.
