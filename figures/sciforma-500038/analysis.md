# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MEATRD: Multimodal Anomalous Tissue Region Detection Enhanced with Spatial Transcriptomics — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10659

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of MEATRD, a multimodal framework for anomaly detection in histology images using gene expression data, structured into three main stages: Visual Representation Learning, Multimodal Reconstruction, and Anomaly Discrimination.

Stage I: Visual Representation Learning begins with a histology image, which is divided into image patches. These patches are processed by a Mobile-UNet model, depicted as a series of orange and blue bars representing convolutional layers, with a shortcut connection shown as an arrow bypassing some layers. The output is reconstructed patches, visually represented as a stack of similar image tiles, indicating the autoencoding process for learning visual features.

Stage II: Multimodal Reconstruction is the core of the framework and consists of two major components: Feature Extraction and Multimodal Embedding Fusion. In Feature Extraction, image patches are fed into a Mobile-UNet Encoder (shown as orange blocks), producing feature maps. Simultaneously, gene expression data (represented as green and white stacked bars) is processed by an MLP-based Gene Encoder (light green box), generating gene embeddings. Both modalities are then combined into a Local Subgraph, where nodes represent data points and edges indicate relationships; one node is marked as 'Masked Target Node' (dark gray circle), indicating the focus of reconstruction. This subgraph feeds into the MGDAT Network, which contains an MGDAT Block. Within this block, image and gene embeddings are concatenated and passed through a Multimodal Bottleneck Transformer (yellow box). The outputs are then processed by two GAT (Graph Attention Network) modules—one for fused image embedding (pink box) and one for fused gene embedding (teal box)—which are tied together via a dashed line, indicating shared parameters or alignment. The fused embeddings are then passed to a Decoder composed of a ResNet Decoder (light yellow blocks, with a flame icon symbolizing reconstruction) and a GNN-based Gene Decoder (light green box), which reconstructs both image and gene data. The entire MGDAT network is applied N times, as indicated by the 'Nx' label on the arrow from the MGDAT Block to the Decoder.

Stage III: Anomaly Discrimination takes the original query spots (histology image patches and associated gene expression) and the reconstructed query spots (output from Stage II) as inputs. Each is processed by a separate branch containing a ResNet Image Encoder (peach box) and an MLP Gene Encoder (light green box), whose outputs are fused. The two branches are tied, meaning they share weights, ensuring consistent feature extraction. The difference between the latent representations of original and reconstructed data is computed as Latent Reconstruction Error, visualized as a row of colored circles (red, orange, yellow). This error is then fed into an SVDD (Support Vector Data Description) module, which classifies whether the input spot is anomalous based on deviation from normal patterns. The final output is a binary anomaly score.

The overall layout is horizontal and modular, with clear stage divisions. Arrows indicate data flow, with solid arrows for direct processing and dashed arrows for parameter tying or conceptual links. Colors are used consistently: orange for image-related components, green for gene-related components, pink for image fusion, teal for gene fusion, and yellow for transformer and decoder elements. Text labels are placed directly on or near each component for clarity.
