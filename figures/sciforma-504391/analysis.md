# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

U-Mamba-Net: A highly efficient Mamba-based U-net style network for noisy and reverberant speech separation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18217

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the U-Mamba-Net architecture, divided into two main parts: (a) the overall network structure and (b) detailed illustrations of its core components, U-net and Mamba.

Part (a), labeled 'U-Mamba-Net overview,' shows a U-shaped architecture with an encoder-decoder structure. The entire network is enclosed in a light blue box labeled 'U-Mamba-Net' on the left side. At the bottom, an input signal represented by a green and red waveform enters the Encoder. The Encoder feeds into a yellow-highlighted module labeled 'U-Mamba block.' This block outputs to a 'PReLU & Conv' layer, which then connects to a multiplicative fusion operation (denoted by a circle with an 'x') before feeding into the Decoder. The Decoder produces the final output, shown as a green and red waveform at the top. A dashed line from the U-Mamba block points to an enlarged view on the right, labeled 'U-Mamba block,' which details its internal structure. Inside this yellow box, the input passes through 'Conv & LN' (Convolution and Layer Normalization), then into a green box labeled 'U-net,' followed by a summation (circle with '+'), then into a gray box labeled 'Mamba,' and finally another summation before the output. This indicates a residual connection where the output of 'Conv & LN' is added back after passing through the U-net and Mamba modules.

Part (b), labeled 'Illustration of U-net (left) and Mamba (right),' provides detailed diagrams of these two components. On the left, the U-net is shown within a light green box with a vertical green bar labeled 'U-net.' It consists of a series of convolutional layers ('Conv') and transposed convolutions ('T-Conv'), arranged in a U-shape with skip connections. Each 'Conv' layer is connected to a 'T-Conv' layer via a summation operation, forming the decoder path. The skip connections are indicated by horizontal arrows connecting corresponding layers across the encoder and decoder paths. The diagram includes ellipses ('...') to denote multiple intermediate layers.

On the right, the Mamba module is shown within a gray box with a vertical dark gray bar labeled 'Mamba (Selective SSM).' The input flows through a fully connected layer ('FC'), then a convolutional layer ('Conv'), followed by a SiLU activation function. This is fed into a Selective State Space Model (SSM) block. The output of the SSM is multiplied element-wise (indicated by a circle with 'x') with the output of a parallel branch consisting of another FC layer, followed by SiLU, and then another FC layer. The result of this multiplication is passed through a final FC layer to produce the output. This structure reflects the selective mechanism of Mamba, where the gating is controlled by the parallel branch.
