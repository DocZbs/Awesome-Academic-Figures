# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Graph Learning-based Regional Heavy Rainfall Prediction Using Low-Cost Rain Gauges — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16842

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the best-performing Graph Neural Network (GNN) model, presented as a directed acyclic graph of computational layers. The global layout is vertically stacked, with data flow proceeding from top to bottom, indicating a sequential forward pass through the network. Two distinct input streams originate at the top: one labeled 'input_5' with an InputLayer receiving a tensor of shape [(None, 5)] and outputting the same shape, and another labeled 'input_6' with an InputLayer receiving a tensor of shape [(None, 10, 10)] and outputting the same. These inputs feed into a series of GraphConvLayer modules arranged in a cascading sequence.

The first GraphConvLayer, named 'graph_conv_layer_10', receives the output from 'input_5' as its input (shape: (None, 5)) and produces an output of shape (None, 10, 16). This layer is followed by 'graph_conv_layer_11', which takes the previous layer's output as input (shape: (None, 10, 16)) and outputs the same shape. Next, 'graph_conv_layer_12' receives the same input shape and reduces the feature dimension to (None, 10, 8). The final GraphConvLayer, 'graph_conv_layer_13', also receives input of shape (None, 10, 8) and maintains this output shape.

A key structural feature is the multi-input design: 'graph_conv_layer_10' receives only the 'input_5' stream, while 'graph_conv_layer_11' receives both the output from 'graph_conv_layer_10' and the 'input_6' stream. Similarly, 'graph_conv_layer_12' receives the output from 'graph_conv_layer_11' and 'input_6', and 'graph_conv_layer_13' receives the output from 'graph_conv_layer_12' and 'input_6'. This indicates that the 'input_6' stream is concatenated or otherwise combined with intermediate features at each subsequent GraphConvLayer, suggesting a skip-connection-like or multi-modal fusion mechanism.

The final layer is a Dense layer named 'dense_2', which takes the output from 'graph_conv_layer_13' (shape: (None, 10, 8)) and maps it to a final output of shape (None, 10, 1), likely representing a regression or classification prediction per node in the graph. All layers are represented as rectangular boxes with black borders, containing the layer name, type (e.g., GraphConvLayer, Dense), and input/output shapes. Arrows indicate the direction of data flow, with solid lines connecting layers in sequence and curved lines showing the persistent connection of 'input_6' to multiple downstream layers. The figure does not include any color coding; all elements are monochrome. The caption 'Best performing GNN model' confirms this architecture's superior performance in the context of the study.
