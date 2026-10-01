# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Modeling COVID-19 spread in the USA using metapopulation SIR models coupled with graph convolutional neural networks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02043

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the structural architecture of a Graph Convolutional Network (GCN), presented as a sequential flow from left to right. The global layout consists of four main rectangular blocks arranged horizontally: an 'Input' block on the far left, followed by two 'Hidden Layer' blocks, and finally an 'Output' block on the far right. Each block contains a graph representation composed of nodes (depicted as small circles) connected by edges (thin lines), symbolizing the graph data being processed at each stage. The input and output blocks are smaller and contain a single graph, while the hidden layers are larger and vertically stacked with multiple identical graph units, indicated by ellipses ('...') between them to suggest repetition or multiple layers. 

Each graph within the blocks features blue circular nodes, with one node highlighted in purple in each graph unit, possibly indicating a specific node of interest or a feature being propagated. The connections between nodes are represented by gray lines, forming a sparse network structure. The transition between the input and the first hidden layer is marked by a solid black arrow pointing right. Between the two hidden layers, there is a labeled box containing the letter 'f', annotated with the text 'Activation function' above it, indicating that an activation function is applied after the first hidden layer's computation. A similar 'Activation function' box with 'f' appears between the second hidden layer and the output, followed by a dashed arrow leading to the output block, suggesting that additional layers or steps may follow but are omitted for brevity. 

The visual modules are consistently styled: all blocks have rounded corners and black borders, and the graphs inside are drawn with uniform node size and edge thickness. The text labels—'Input', 'Hidden Layer', 'Activation function', and 'Output'—are placed above or beside their respective components in a clear, sans-serif font. The overall design emphasizes the forward propagation of graph data through successive hidden layers, with activation functions applied after each layer, which is characteristic of deep learning architectures for graph data. The figure serves as a schematic representation of how a GCN processes graph-structured inputs through multiple layers to produce a graph-structured output, highlighting the role of activation functions in introducing non-linearity between layers.
