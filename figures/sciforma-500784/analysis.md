# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scalable Temporal Anomaly Causality Discovery in Large Systems: Achieving Computational Efficiency with Binary Anomaly Flag Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11800

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a temporal causal structure involving three time series, denoted as X¹, X², and X³, each represented as a sequence of nodes indexed by time t, t+1, t+2, t+3, and t+4. The global layout is a three-row, five-column grid where each row corresponds to one time series: the top row for X³, the middle row for X¹, and the bottom row for X². Each node is a circular shape with black borders and contains the variable label (e.g., X¹_t) in black text centered within it. All nodes are aligned horizontally within their respective rows, forming a linear progression from left to right, indicating the forward flow of time. Arrows between consecutive nodes in each row are horizontal, pointing right, representing the autoregressive or temporal propagation within each time series.

The visual modules consist of these circular nodes, each labeled with a superscript index (1, 2, or 3) and a subscript indicating the time step (t through t+4). The nodes are uniformly sized and spaced, with consistent black outlines and white fill. There are no color distinctions or additional graphical embellishments; all elements are monochrome.

Connections between the time series capture both instantaneous and lagged causal effects. Specifically, there are diagonal arrows from X¹_t to X²_{t+1}, indicating a time-lagged causal influence from X¹ at time t to X² at time t+1. Additionally, vertical arrows connect X¹_t to X³_t, representing an instantaneous causal effect from X¹ at time t to X³ at the same time step. These connections are drawn as solid black lines with arrowheads pointing from cause to effect. The figure also includes horizontal arrows within each row, showing the temporal evolution of each series independently. The caption clarifies that this structure models a time series with both time-lag effects (X¹_{t−1} → X²_t) and instantaneous effects (X¹_t → X³_t), referencing Peters et al. (2017). The diagram does not include any equations or annotations beyond the node labels and arrows, and the overall structure emphasizes the directed acyclic nature of the causal relationships across time.
