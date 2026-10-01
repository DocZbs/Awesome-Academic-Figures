# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SLTNet: Efficient Event-based Semantic Segmentation with Spike-driven Lightweight Transformer-based Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12843

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the detailed architecture of the Spike-LD module, a spiking neural network component designed for efficient feature extraction. The global layout is divided into two main regions: the left side contains the full Spike-LD block, enclosed by a dashed border, while the right side provides expanded views of two key submodules: BN+ESN and CA (Channel Attention), along with a legend for symbols used.

The Spike-LD module begins with an input x, which first passes through a BN+ESN layer (light blue rounded rectangle with purple text). This is followed by a sequence of convolutional layers: Conv1x1 (light purple), Conv3x1 (light green), another BN+ESN, then Conv1x3 (light green), and again a BN+ESN. From this point, the flow splits into two parallel branches. Both branches start with a Conv3x1,DW layer (light green), followed by BN+ESN (light blue). The left branch continues with Conv1x3,DW (light green) and BN+ESN, while the right branch uses Conv1x3,DW,D (light green, indicating dilated convolution) and BN+ESN. Each branch ends with a CA module (light yellow). The outputs of both CA modules are combined via element-wise addition (indicated by a circle with a plus sign) and fed into a final Conv1x1 layer (light purple). The output of this layer is added to the original input x through a residual connection, forming the final output of the Spike-LD block.

On the right side, the BN+ESN submodule is shown in detail. It consists of a BN layer (light blue) feeding into a series of three spiking neurons represented by circular icons with waveforms (ESN), which produce binary spike outputs (depicted as vertical lines). The CA submodule is also detailed: it starts with GAP (Global Average Pooling, light pink), followed by Conv1x1 (light purple), then Sigmoid (light yellow). The output of Sigmoid is multiplied channel-wise (represented by a triangle icon labeled 'membrane') with the input feature map, producing the attention-weighted output.

The legend at the bottom right clarifies the symbols: the waveform circle denotes ESN (Evolutionary Spiking Neuron), the vertical lines represent Binary spike outputs, and the triangle symbol indicates Channel-wise product operation. The color coding helps distinguish between different types of operations: BN+ESN layers are light blue, convolutional layers are light green or light purple, and CA components are light yellow or pink. All connections are indicated by solid black arrows showing the forward data flow.
