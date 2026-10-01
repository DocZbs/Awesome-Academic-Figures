# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Robust Spectral Anomaly Detection in EELS Spectral Images via Three Dimensional Convolutional Variational Autoencoders — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16200

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic of a 3D Convolutional Variational Autoencoder (3D-CVAE) architecture, designed for processing 3D data such as EELS SI datacubes. The overall layout is linear and symmetric, arranged horizontally from left to right, depicting an encoder-decoder structure with a bottleneck in the center. The architecture begins on the far left with an 'Input Tensor' represented as a large orange rectangular prism labeled with dimensions 24×24×1312. This tensor flows into a sequence of four 3D convolutional layers: Conv3D 1, Conv3D 2, Conv3D 3, and Conv3D 4. Each of these layers is depicted as a beige rectangular prism, progressively smaller than the previous, indicating downsampling. Inside each beige block, a small blue cube symbolizes the convolutional kernel or filter applied at that stage. Dotted lines connect the kernels across layers, illustrating the flow of feature maps. After Conv3D 4, the output transitions into a bottleneck composed of two fully connected layers, FC 1 and FC 2, shown as tall, narrow green prisms. Between them lies a small purple cube labeled 'Latent Dim', representing the compressed latent space. Dashed lines connect the encoder’s final layer to FC 1 and FC 2, and from FC 1 and FC 2 to the latent space, suggesting the encoding process. From the latent space, the decoding path begins with FC 2 feeding into ConvT3D 4, followed by ConvT3D 3, ConvT3D 2, and finally ConvT3D 1—each shown as a beige prism increasing in size, indicating upsampling. Similar to the encoder, each decoder layer contains a blue cube representing the transposed convolutional kernel, with dotted lines connecting them. The final output is a 'Reconstruction Tensor', identical in shape and color (orange) to the input tensor, labeled with the same dimensions 24×24×1312. The entire diagram uses consistent visual attributes: orange for input/output tensors, beige for convolutional layers, green for fully connected layers, and purple for the latent space. All blocks are 3D rectangular prisms with visible depth, and labels are placed directly beneath each component. The connections between modules are indicated by dashed lines, emphasizing the flow of data through the network. The figure visually conveys the autoencoding process: compression via convolutional encoding, latent representation, and reconstruction via transposed convolutional decoding.
