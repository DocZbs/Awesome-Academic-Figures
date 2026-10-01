# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Are GNNs Actually Effective for Multimodal Fault Diagnosis in Microservice Systems? — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02766

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of ablation study methods for evaluating the role of Graph Neural Networks (GNNs) in a fault diagnosis system. The layout is divided into two main vertical pipelines, each representing a different configuration: one with GNNs (labeled (a) w/ GNNs) and one without GNNs (labeled (b) w/o GNNs). These two configurations are shown side-by-side in two identical pairs, emphasizing the comparison. Each pipeline consists of four stacked modules arranged vertically from bottom to top: input data sources, processing and embedding, modeling, and tasks module.

At the bottom of each pipeline, a dashed rectangular box contains three types of input data: Metrics (represented by a gauge icon), Logs (represented by a document with a magnifying glass), and Traces (represented by a cloud connected to multiple nodes). These inputs feed upward into a gray rectangular module labeled 'Processing & Embedding'.

Above this, the key difference between the two configurations is shown. In the left pair (a) w/ GNNs, the next module is a light blue rectangle labeled 'Topology-aware Modeling (GNNs)', indicating that GNNs are used to model the service dependency graphs. In the right pair (b) w/o GNNs, this module is replaced by a light green rectangle labeled 'Topology-agnostic Modeling (MLPs)', signifying the use of Multi-Layer Perceptrons instead, which do not consider topology.

A bidirectional dashed arrow labeled 'Replace' in green connects the GNN and MLP modules across the two configurations, visually indicating the ablation process where GNNs are substituted with MLPs while all other components remain unchanged.

The final module at the top of each pipeline is a light teal rectangle labeled 'Tasks Module', which receives output from the modeling layer. This represents the downstream tasks such as fault detection or root cause analysis.

The entire figure is structured to clearly contrast the two architectures, highlighting that the only difference lies in the modeling component, while the data inputs, processing, and task modules are identical. The caption below the figure explicitly states that (a) uses GNNs as the backbone for modeling service dependency graphs, while (b) replaces GNNs with topology-agnostic MLPs, keeping all other components constant.
