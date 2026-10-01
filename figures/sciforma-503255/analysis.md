# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Source Unsupervised Domain Adaptation with Prototype Aggregation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16255

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the PAMDA (Prototype-based Adaptive Multi-Domain Alignment) framework, which is structured as a multi-stage pipeline for domain adaptation using prototype-based learning. The global layout is left-to-right, starting with input data, progressing through feature extraction and prototype generation, and culminating in classification and loss computation. The diagram is divided into three main functional blocks: (a) prototype generation, (b) discrepancy-based alignment, and (c) classification losses.

On the left, source domains S₁ to S_N and a target domain T are shown as circular icons containing sample images (e.g., digits or textures). These inputs are fed into a shared feature extractor G, represented as a stack of golden rectangular blocks, which outputs features visualized as purple circular nodes arranged in a grid. These features are then processed by a classifier F, depicted as a neural network diagram with blue and pink nodes, producing 'Sample Classification Probabilities' — a blue grid matrix where rows represent samples and columns represent classes 1 to K. This leads to a source classification loss L_c^s.

In parallel, the features are used for 'Pseudo Label Confidence Discrimination', shown as a peach-colored box containing a bar chart p(x) and a comparison symbol with γ, indicating confidence estimation. This module feeds into 'Cluster Centroid Estimation', represented as a white box with cyan and pink circles, which estimates centroids per class. These centroids are then used in 'Prototype Generation', a white box with blue and gold circles, to form class-specific prototypes. The resulting prototypes are aggregated in a yellow box labeled 'Class-prototype Aggregation', which contains source prototypes (w_s¹^(k) to w_s^N^(k)) and target samples, connected via arrows to a final classifier D_c.

Simultaneously, the same features are used to generate 'Domain-prototypes' — a white box with green and yellow circles — by aggregating class prototypes within each domain. These domain prototypes (e_s₁ to e_s_N) are then aggregated in another yellow box labeled 'Domain-prototype Aggregation', which includes source-domain prototypes and target samples, leading to a domain classifier D_d. This process also produces 'Prototype Classification Probabilities', a red grid matrix with rows as prototypes and columns as classes, which contributes to the prototype classification loss L_c^p.

Connections are color-coded: green arrows indicate forward propagation of features and prototypes, while red arrows denote feedback or auxiliary paths, such as from pseudo-label confidence to cluster centroid estimation. The diagram also includes tables summarizing source domains and their corresponding prototypes, emphasizing the structured organization of data across domains and classes. The entire framework is designed to align source and target domains at both class and domain levels using prototype-based discrepancies, while leveraging supervised knowledge from source data through two distinct classification losses.
