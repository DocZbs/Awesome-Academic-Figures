# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Comparative Study on Dynamic Graph Embedding based on Mamba and Transformers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11293

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed DG-Mamba model, designed for processing a sequence of discrete-time graph snapshots {G_t}_{t=1}^T. On the far left, the input consists of a sequence of dynamic graphs G_{t-l}, ..., G_{t-1}, G_t, where l ∈ {1,2,3,4,5} denotes the look-back window allowing integration of historical context. Each graph snapshot is represented as a sequence of node features x_{t-l}^i, ..., x_{t-1}^i, x_t^i, shown as stacked green rectangles corresponding to individual nodes. These features are fed into the core processing block enclosed within a large rectangular boundary.

Inside this block, each feature sequence undergoes a 'Projection' step, depicted as a vertical stack of green rectangles transforming into another stack of similar green rectangles. Two such projection paths are shown: one directly feeds into a 'SiLU' activation (represented as a beige oval), while the other proceeds through a 'Convolution' module (gray rectangle) followed by another 'SiLU' activation. The output from the second SiLU is then passed to a 'Selective SSM' module (orange rectangle), which implements the Mamba architecture for efficient long-range temporal dependency modeling. The output of the Selective SSM is multiplied element-wise with the output from the first SiLU via an 'Activation' node (brown circle labeled 'x'), producing a combined feature representation.

This combined representation is then projected again, shown as a stack of blue rectangles, indicating a transformation into a new feature space. This projected output is subsequently processed by a 'MeanPool' operation (black rectangle), which aggregates the features across the sequence to produce a single vector representation per graph snapshot.

Following the MeanPool, the aggregated representation passes through a 'Linear + tanh' layer (black rectangle), which applies a linear transformation followed by a tanh activation to refine the node embeddings. From this point, two parallel projection heads diverge. The upper head, labeled 'Linear Mapping' (blue rounded rectangle), outputs the mean μ_t^i of a Gaussian embedding, represented as a vertical stack of light blue rectangles. The lower head, labeled 'Nonlinear Mapping' (orange rounded rectangle), applies a nonlinear transformation—specifically, an ELU activation as mentioned in the caption—to produce the variance σ_t^i, shown as a vertical stack of light orange rectangles.

All connections between modules are indicated by solid blue arrows, showing the forward flow of data. The layout is left-to-right, starting from the input graph sequence, progressing through the core Mamba-based feature extraction and aggregation, and ending with the dual output heads for mean and variance estimation. The color coding is consistent: green for initial node features, blue for intermediate and final mean-related features, and orange for variance-related features and the Selective SSM module.
