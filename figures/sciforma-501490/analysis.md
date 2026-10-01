# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Geodesic Flow Kernels for Semi-Supervised Learning on Mixed-Variable Tabular Dataset — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12864

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of GFTab, a semi-supervised learning framework for tabular data, structured into five main stages: Tab corruption, Tree-based embedding, Feature representation, Basis of the subspace, and Geodesic flow kernel. The global layout is a horizontal workflow divided into five dashed-boxed sections, progressing from left to right, with labeled data processed separately from unlabeled data. A legend at the bottom indicates green arrows represent unlabeled data flows and red arrows represent labeled data flows.

In stage 1, 'Tab corruption', unlabeled tabular data is split into continuous and categorical variables. Continuous variables are processed through a VSN (Variational Self-Normalization) module, while categorical variables are handled directly. This leads to two types of corruption: hard corruption (represented by a grid with some cells masked in brown) and soft corruption (grid with partially faded cells), producing corrupted versions of the input data.

Stage 2, 'Tree-based embedding', processes labeled tabular data. It uses tree-based models (depicted as tree structures with nodes) to generate embeddings, which are then represented as color-coded feature vectors (rectangular blocks with orange, gray, and beige shades).

Stage 3, 'Feature representation', is the core of the model. Two parallel pathways process the corrupted data: one for hard-corrupted data (x_hard^cont, x_hard^cat) and one for soft-corrupted data (x_soft^cont, x_soft^cat). Each pathway feeds into a 'Feature representation' module (light blue rounded rectangle), followed by an 'MLP head' (yellow rounded rectangle). The hard-corrupted path outputs z_hard, while the soft-corrupted path outputs z_soft. For the labeled data, the soft-corrupted feature representation connects to a classifier (orange rectangle), which computes cross-entropy loss (white rectangle below it). The tree-based embeddings from stage 2 feed into the soft-corrupted feature representation via a red arrow, indicating labeled data usage.

Stage 4, 'Basis of the subspace', takes both z_hard and z_soft outputs and applies PCA (Principal Component Analysis) to each, generating low-dimensional representations.

Stage 5, 'Geodesic flow kernel', visualizes the learned representations in a manifold space. The z_hard and z_soft points (brown and blue circles, respectively) are shown on a curved surface, connected by a geodesic curve. This stage computes the 'Geodesic similarity loss', which is fed back into the model to guide training.

The entire pipeline integrates self-supervised learning (via corruption and reconstruction) with supervised learning (via labeled data and classifier) and geometric regularization (via geodesic similarity), enabling effective representation learning for tabular data under limited labels.
