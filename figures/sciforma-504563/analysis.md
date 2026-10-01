# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Graph Structure Learning for Spatial-Temporal Imputation: Adapting to Node and Feature Scales — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18535

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture of the GSLI (Graph Structure Learning for Imputation) framework, designed for imputing incomplete spatio-temporal data. The global layout is divided into two main sections: an upper-level overview and two lower-level detailed modules. The top section illustrates the end-to-end pipeline, starting from raw incomplete temporal signals X collected from multiple sensor locations (e.g., AMS, ELL, LWRD, etc.) across a geographic region (Japan map shown), along with a pre-defined spatial correlation graph G. These inputs feed into the GSLI Imputation Framework, which consists of four core components: Cross-Temporal Representation Learning, Node-Scale Spatial Learning, Feature-Scale Spatial Learning, and Cross-Feature Representation Learning. The outputs are concatenated through MLP layers to produce complete data X̄.

In the lower-left module, 'Node-Scale Spatial Learning' is detailed. It begins by splitting the input representation R into feature-specific sub-representations (R_f). Each sub-representation is processed via a meta-graph construction block (denoted as Ĝ_f^Ω), which uses meta-node embeddings Ω_f^1 and Ω_f^2, an MLP, Hadamard product (⊙), ReLU activation, SoftMax, and a graph diffusion convolution. The resulting learned representations are then concatenated by feature to form R^NL. The process leverages a dynamic meta-graph structure to adapt to feature heterogeneity, with connections indicated by colored lines (red, blue, green, yellow) representing different feature channels.

The lower-right module, 'Feature-Scale Spatial Learning', processes the same input R but permutes it by feature first. It constructs a meta-graph Ĝ^Φ using meta-feature embeddings Φ^1 and Φ^2, which are combined via an MLP, Hadamard product, ReLU, and SoftMax. This meta-graph guides a graph diffusion convolution applied to the permuted representation. The output is then permuted back by node to yield R^FL. This module captures correlations across features by reorganizing the data along the feature dimension.

Connections throughout the diagram are represented by arrows indicating data flow. Solid black arrows denote primary data paths; dashed red, blue, green, and yellow lines represent feature-specific pathways within the node-scale module. The Hadamard Product is symbolized by a circle with a dot, while the Inner Product is shown as a circle with an 'x'. The framework integrates both temporal and spatial learning at multiple scales, enabling robust imputation of missing spatio-temporal data.
