# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Novel Convolution and Attention Mechanism-based Model for 6D Object Pose Estimation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01993

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a single, repeating module within the encoder of the PoseLecTr model, which processes sequential data through a series of convolutional and pooling operations. The global layout is left-to-right, depicting a feedforward computational pipeline. The process begins with an input sequence represented as a 3D block labeled 'Embedding', composed of stacked rectangular prisms denoting individual tokens or time steps, with dimensions indicated as X_{i-1} to X_i along the sequence axis and D along the feature dimension. This embedding is fed into a 1D convolutional layer, labeled 'Conv1d', visualized as a green rectangular prism with multiple internal layers, indicating multiple output channels. The output of this layer is a 3D feature map, shown as a large red-outlined box containing multiple yellow vertical bars, representing L feature channels across the sequence length. This feature map is then passed to an 'AvgPool' layer, depicted as a blue-green rectangular prism with internal layers, which performs average pooling over the sequence dimension, reducing the length by half. The result is another 3D feature map, shown as a smaller yellow box with dimensions labeled L/2, indicating the reduced sequence length while maintaining the same number of channels. Finally, this is followed by a simple rectangular block labeled L/2, representing the final output feature vector of the current module. The connections between modules are shown as solid black arrows indicating the forward flow of data. Dashed lines connect the input embedding to the Conv1d layer, emphasizing the transformation. The diagram uses color coding: green for the convolutional layer, blue-green for the pooling layer, and yellow for feature maps. The red outline around the first feature map highlights it as a key intermediate representation. The caption clarifies that this module is one of several identical sections in the encoder, with subsequent sections processing progressively shorter segments (half the length of the previous), and that the final encoder output is formed by concatenating or merging the outputs from all such sections.
