# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Split Learning in Computer Vision for Semantic Segmentation Delay Minimization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14272

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a typical design of a Bidirectional Model (BM), structured as a symmetric encoder-decoder architecture with skip connections. The global layout is vertically oriented, divided into two main vertical pathways: an encoding (downsampling) path on the left and a decoding (upsampling) path on the right, connected by horizontal skip connections at corresponding levels. At the top, a legend defines abbreviations: MP as MaxPooling Layer (in black), MUP as MaxUnpooling Layer (in red), CL as Convolutional Layer (black), and TCL as Transpose Convolutional Layer (red). These definitions are repeated at the bottom for clarity.

The visual modules are represented as dashed rectangular boxes with blue borders. Each box contains a label indicating the layer type: 'CL' (Convolutional Layer) appears in black text, while 'MP / MUP' and 'CL / TCL' are shown with both components, where 'MUP' and 'TCL' are highlighted in red to distinguish them from their counterparts. The left pathway begins with a CL block, followed by an MP / MUP block, which serves as the downsampling stage. The right pathway mirrors this structure: it starts with a CL block, then a CL / TCL block (indicating either a convolutional or transpose convolutional layer depending on context), and ends with another CL block for upsampling.

Connections between modules are depicted using solid blue arrows pointing downward, indicating the forward flow of data through the network. Horizontal blue lines connect corresponding layers across the two paths, representing skip connections that transfer feature maps from the encoder to the decoder. Additionally, two green curved arrows originate from oval-shaped annotations. One green arrow points from an oval labeled 'Downsampling Upsampling' (with 'Upsampling' in red) to the MP / MUP block on the left and the CL / TCL block on the right, emphasizing the dual role of these layers in spatial dimension reduction and expansion. The second green arrow originates from an oval labeled 'Different parameters Kw, Kh, Sw, Sh, Dw, Dh, Pw, Ph', pointing to the CL / TCL block on the right, indicating that this layer uses distinct hyperparameters for kernel size (Kw, Kh), stride (Sw, Sh), dilation (Dw, Dh), and padding (Pw, Ph) compared to other layers. The overall structure suggests a U-Net-like architecture, where the encoder compresses spatial dimensions while preserving feature information, and the decoder reconstructs the spatial resolution using skip connections and transposed convolutions or unpooling operations.
