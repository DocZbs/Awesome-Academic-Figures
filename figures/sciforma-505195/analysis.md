# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RecConv: Efficient Recursive Convolutions for Multi-Frequency Representations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19628

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture of a Recursive Convolution Module, referred to as \methodname{}, which is composed of two main components: a MetaNeXt block on the left and the detailed \methodname{} structure on the right, enclosed within a dashed rectangular boundary.

[1] Global Layout and Structure:
The diagram is horizontally divided into two sections. On the left, a vertical sequence of modules represents the MetaNeXt block, forming a residual-like structure. On the right, a hierarchical, multi-scale processing pipeline is shown, illustrating how feature maps are recursively decomposed and processed across different spatial resolutions. The entire right-hand module is encapsulated by a dashed box, indicating it is the core \methodname{} component.

[2] Visual Modules and Attributes:
On the left side, the MetaNeXt block consists of three rounded rectangles stacked vertically: 'Token Mixer' (beige background), followed by 'Norm' (light yellow background), and then 'Channel Mixer' (light blue background). These are connected sequentially by solid black arrows. A skip connection bypasses all three modules, feeding directly into an element-wise addition operation (represented by a circle with a plus sign) at the bottom, which combines the output of the Channel Mixer with the original input.

On the right side, the \methodname{} module begins with a large gray square representing the input feature map. From this, a series of downsampling operations (indicated by red circular icons with downward arrows labeled 'DWConv Downsample') progressively reduce the spatial resolution through a cascade of smaller squares: first a light yellow square, then a pink square, and finally a small white square. Each downsampling step is performed using a shared depthwise convolutional layer.

After downsampling, each level undergoes a depthwise convolution (represented by orange circular icons with asterisks, labeled 'DWConv'), followed by upsampling (black circular icons with upward arrows, labeled 'Bilinear Upsample'). The upsampling paths converge via element-wise addition operations (black circles with plus signs), aggregating features from multiple scales. The final output is produced after a depthwise convolution (purple asterisk icon) applied to the aggregated features.

A legend in the top-right corner clarifies the symbols: red downward arrow = DWConv Downsample; orange asterisk = DWConv; black plus sign = Element-wise Addition; black upward arrow = Bilinear Upsample.

[3] Connections and Arrows:
Solid black arrows indicate the primary data flow. From the large gray square, one path proceeds directly downward to the final element-wise addition, while another branches rightward through successive downsampling steps. Each downscaled feature map is processed by a DWConv, then upsampled and fed into an element-wise addition node. These nodes merge features from different scales, with the outputs flowing leftward toward the final aggregation point. The final aggregated feature map passes through a DWConv (purple asterisk) before exiting the module. Dashed lines connect the Token Mixer on the left to the top-left corner of the dashed box, suggesting that the \methodname{} module is integrated within or replaces part of the MetaNeXt block's token mixing functionality.
