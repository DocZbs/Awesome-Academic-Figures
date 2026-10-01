# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Effective Context Modeling Framework for Emotion Recognition in Conversations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16444

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the detailed architecture of ConxGNN, a multimodal graph neural network framework, divided into three main parts: (A) the overall model structure, (B) the Inception Graph Block, and (C) the HyperBlock. The global layout is organized horizontally from left to right, depicting the data flow through the model. Part (A) is enclosed in a dashed box labeled 'ConxGNN' and consists of four major sequential modules: Unimodal Encoder, Inception Graph Module, Fusion Module, and Classifier, followed by loss computation. Below this, a separate section labeled 'Details' contains diagrams (B) and (C), which expand on components within the Inception Graph Module.

In Part (A), the Unimodal Encoder, shown in a light blue rounded rectangle, processes three modalities—acoustic (diamonds), visual (circles), and textual (stars)—each represented by sequences of tokens (e.g., u₁^a, u₂^a, etc.). For acoustic and visual inputs, linear layers transform the features into x₁^a, x₂^a, etc., while textual inputs pass through a Transformer layer. These processed features are then fed into the Inception Graph Module, depicted in a light yellow rounded rectangle. This module contains multiple parallel Inception Graph Blocks (IGB₁ to IGBₙ), each consisting of a k-GNN layer followed by a Graph Transformer. The outputs of these blocks are summed together. Additionally, a Hypergraph Module, shown in a purple rounded rectangle, includes a HyperBlock component that receives input from the Unimodal Encoder and contributes to the fusion process. The outputs from both the Inception Graph Module and the Hypergraph Module are combined in the Fusion Module, a tall orange rectangle, producing latent representations z₁ to z_L. These representations are then passed to a CB Focal Contrastive block, which generates embeddings for contrastive learning, before being fed into a Classifier. The final output probabilities p₁ to p_L are computed using a CB Cross-Entropy Loss function, shown in a dashed box with red and pink circles indicating positive and negative samples.

Part (B) details the Inception Graph Block, shown in an orange rounded rectangle. It illustrates how features from the three modalities (acoustic, visual, textual) at different time steps (h_t^a, h_t^v, h_t^t) are connected. The diagram shows past connections (curved green arrows), future connections (dashed red arrows), and crossmodal connections (curved multicolored arrows) between nodes across modalities and time steps, enabling temporal and cross-modal information aggregation.

Part (C) details the HyperBlock, shown in a blue rounded rectangle. It demonstrates how hyperedges (represented by ellipses) connect multiple nodes across different modalities and time steps, forming a hypergraph structure. The hyperedges group nodes such as h_t^a, h_t^v, h_t^t together, facilitating higher-order interactions among multimodal features.

A legend in the lower-left corner explains the visual symbols: past connections (green curved arrows), future connections (red dashed arrows), crossmodal connections (multicolored curved arrows), hyperedges (ellipses), acoustic modality (diamonds), visual modality (circles), textual modality (stars), and speaker embedding (blue triangle). The entire diagram uses consistent color coding and shapes to represent different components and their relationships, with solid arrows indicating data flow and dashed lines denoting structural or conceptual boundaries.
