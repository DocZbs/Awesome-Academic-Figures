# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GG-SSMs: Graph-Generating State Space Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12423

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Graph-Generating State Space Model (GG-SSM), a framework for processing a set of input features {x_i}_{i=1}^L across diverse data modalities. The global layout is structured into three main horizontal sections: the top section presents the input data sources, the middle section details the graph construction and minimum spanning tree (MST) generation, and the bottom section explains the state space model (SSM) computation on the MST.

In the top section, the input feature set {x_i}_{i=1}^L is shown as a central node branching out to four distinct application domains, each represented by a light blue rounded rectangle with an illustrative image and label. These include 'Event camera stream' (depicting a 3D event stream plot), 'Time Series' (showing a fluctuating line graph), 'Image Classification' (displaying six animal images), and 'Optical Flow Estimation' (illustrating a colorful flow field). All these inputs feed into the core processing pipeline.

The middle section contains two adjacent light blue rounded boxes. The left box, labeled 'Graph Construction', contains an orange rounded rectangle with the text 'Graph Construction' and below it, a dense undirected graph composed of gray circular nodes connected by gray edges, labeled 'Dense Graph on Features'. This graph represents pairwise relationships between all input features. An arrow leads from this box to the right box, labeled 'Chazelle’s MST', which also has an orange rounded rectangle with the same label. Below it is a sparser graph, where some edges are highlighted in red, forming a tree structure, labeled 'Minimum Spanning Tree'. This indicates that Chazelle’s algorithm is used to extract a minimal spanning tree from the dense graph.

The bottom section, set against a light pink background, details the mathematical operations of the SSM. On the left, a small graph shows two nodes connected by a red edge, with labels x_j and s_ji indicating the source feature and the weight of the edge, respectively. On the right, two equations are displayed: h_i = Σ_{v_j ∈ V} s_ji B̄_j x_j, representing the aggregation of features from neighbors weighted by edge strengths, and y_i = C_i Norm(h_i) + D x_i, describing the output feature computation through normalization and linear transformation. The entire diagram visually conveys the workflow: from diverse input features, a dense graph is built, pruned to an MST, and then SSM operations propagate information along the tree to produce refined outputs.
