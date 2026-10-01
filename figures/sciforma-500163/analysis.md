# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SEW: Self-calibration Enhanced Whole Slide Pathology Image Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10853

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the SEW framework, a multi-branch deep learning architecture designed for whole-slide image (WSI) analysis in pathology. The global layout is structured into three main horizontal pathways: a top global branch, a middle focus predictor, and a bottom detailed extraction branch, all interconnected through feature flows and loss functions. On the far left, two representative WSIs are shown: one with a red-outlined region indicating a lesion, and another with multiple colored regions (red, orange, cyan) denoting different tissue areas. These images are processed at two scales: a full-resolution thumbnail (denoted as I_{xM^2}) and magnified patches (also I_{xM^2}), with the latter linked via dashed lines to specific regions in the thumbnails.

The global branch begins with the input WSI being represented as a graph G^{global}(V,E), where nodes represent tissue patches and edges denote spatial relationships. This graph is processed by a global GCN module (f^{global}_{GCN}), which aggregates features, producing a set of updated node features {v'_n}_{n=1}^N. These features are then fed into a Transformer-like encoder with self-attention layers, culminating in a global classification token (CLS^{global}). The output is used for global classification, supervised by the loss function L^{global}_{CLS}. A separate path from the global branch feeds into the focus predictor, which receives the last-layer features {W_n}_{n=1}^N and outputs predicted focus regions {q'_n}_{n=1}^N, guided by the focus loss L^{focus}. The focus predictor is visually depicted as a blue box containing a small neural network diagram with yellow and red nodes.

The detailed extraction branch operates on localized regions identified by the focus predictor. For each focus region k, a subgraph G^k_{sub}(V^k,E^k) is extracted, highlighted within a dashed red box. This subgraph is processed by a local GCN module (f^{local}_{GCN}), which aggregates features to produce {u'_j}_{j=1}^{T_k} for each region. These features are then passed through a Transformer encoder with group attention, generating a local classification token (CLS^{local}) for each region. The local classification is supervised by L^{local}_{CLS}. A key component of this branch is the feature similarity constraint L^{cst}, which enforces alignment between the global CLS token and the corresponding local CLS tokens, enhancing discriminative feature learning.

A central module, labeled 'Pathological prototypes', clusters the learned features using K-Means, visualized as a colorful scatter plot transitioning into color-coded tissue patches. This clustering reinforces feature consistency across diverse WSIs and supports tumor marker discovery. The entire framework integrates global context, local detail, and feature consistency through the interplay of these branches and losses, with arrows indicating data flow and feedback loops. The visual modules use distinct shapes and colors: graphs are shown as node-edge diagrams, GCNs as blue boxes with aggregation labels, Transformers as stacked blocks with attention connections, and losses as yellow boxes with mathematical notation. Text annotations include model names, feature sets, and loss functions, ensuring clarity in the workflow.
