# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Comparative Study on Dynamic Graph Embedding based on Mamba and Transformers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11293

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the ST-TransformerG2G model, an enhancement of the original TransformerG2G model that incorporates Graph Convolutional Networks (GCNs) to better capture spatial dependencies in dynamic graphs. The global layout is left-to-right, depicting a sequential processing pipeline starting from discrete-time dynamic graph inputs on the far left, progressing through multiple processing stages, and culminating in two output representations on the far right.

On the left side, under the label 'Discrete-time dynamic graph G', a series of graph snapshots G_{t-l} through G_t are shown, where l ∈ {1,2,3,4,5} indicates a lookback window of five time steps. Each graph snapshot is represented as a small undirected graph with nodes (circles) and edges (lines), with one node highlighted in green to indicate a specific node of interest. Each graph snapshot is processed by a blue rectangular block labeled 'GCNS' (Graph Convolutional Networks), which consists of three GCN layers as described in the caption. The output of each GCN block is a node embedding vector, denoted as x_i^{t-l}, x_i^{t-1}, ..., x_i^t, stacked vertically in a green columnar structure representing the temporal sequence of embeddings for a given node i.

These node embedding sequences are then fed into the central component labeled 'Encoder'. This encoder begins with a light orange vertical rectangle labeled 'Positional Encoding', which adds positional information to each node embedding token. The encoded tokens enter a standard Transformer encoder block, depicted as a large white box containing four sequential modules: a green rectangle labeled 'Self-attention', followed by a light blue rectangle labeled 'Add & normalize', then a green rectangle labeled 'Feed forward', and finally another light blue rectangle labeled 'Add & normalize'. These modules form a single Transformer layer, and the diagram implies this structure may be repeated, though only one layer is shown.

After the Transformer encoder, the output passes through a white box labeled 'Pointwise convolution + tanh', which applies a pointwise convolution operation followed by a tanh activation function. From this module, two parallel branches diverge. The upper branch leads to a blue rectangle labeled 'Linear Mapping', producing a vector output μ_i^t, represented as a vertical stack of light blue rectangles on the far right. The lower branch leads to a light orange rectangle labeled 'Nonlinear Mapping', producing a vector output σ_i^t, represented as a vertical stack of light orange rectangles. According to the caption, these outputs define a multivariate normal distribution N(μ_i^t, Σ_i^t), where Σ_i^t is a diagonal matrix with σ_i^t as its diagonal elements, indicating the variance for each dimension of the node's latent representation at time t.

All connections between modules are indicated by solid black arrows, showing the direction of data flow from left to right. The color coding is consistent: blue blocks represent GCN or linear operations, green blocks represent self-attention or feed-forward components, light orange represents positional encoding or nonlinear mapping, and light blue represents normalization or residual addition steps.
