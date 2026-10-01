# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Are GNNs Actually Effective for Multimodal Fault Diagnosis in Microservice Systems? — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02766

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a pipeline of existing GNN-based multimodal fault diagnosis models, structured into three main stages: (a) Preprocessing, (b) Embedding, and (c) GNN-based modeling. The overall layout is horizontal, with each stage represented as a rectangular container containing stacked submodules, arranged sequentially from left to right. The entire pipeline is duplicated side-by-side for clarity or emphasis, with identical components and connections.

In stage (a) Preprocessing, raw multimodal inputs—Metrics (represented by a graph icon), Logs (document icon), Traces (cloud with nodes icon), and Deployment (laptop icon)—enter the process. These inputs flow into a vertical stack of six gray rounded rectangles labeled: Timestamps aligning, Logs Parsing & Counting, Metric Normalization, Latency Extracting, Alert Events Extracting, and Dependency Graph Constructing. This stage converts heterogeneous data into standardized formats like time series, text, and graphs.

Stage (b) Embedding follows, receiving output from preprocessing. It contains five gray rounded rectangles: Causal Convolution, Transformer, Language Model, Statistical Model, and an optional pre-training arrow pointing downward from above this block. This stage encodes features into dense representations, often using pretrained models. An arrow connects the preprocessing output to the embedding stage.

Stage (c) GNN-based modeling receives input from the embedding stage and consists of five gray rounded rectangles: GAT, GCN, GraphSAGE, Graph AE, and Dynamic GNN. These represent different graph neural network architectures used to integrate multimodal features with dependency graphs. From this stage, three outputs emerge: Detection (icon of a laptop with multiple colored squares), Localization (icon of a magnifying glass over a grid), and Classification (icon of a scatter plot with a diagonal line). Each output corresponds to a diagnostic task.

Connections between stages are shown via solid black arrows indicating data flow direction. An optional pre-training step is indicated by a dashed arrow originating above the embedding stage and pointing down to it, suggesting that some embedding modules may be pretrained before being used in the pipeline. All modules are uniformly styled with gray backgrounds and rounded corners, and labels are centered within each box. The figure includes a central caption explaining the purpose of each stage: preprocessing standardizes data, embedding encodes features, and GNN modeling integrates them for diagnosis. The duplication of the pipeline on the right side reinforces the structure without adding new information.
