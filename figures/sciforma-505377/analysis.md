# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Mouth Articulation-Based Anchoring for Improved Cross-Corpus Speech Emotion Recognition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19909

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a proposed mouth articulation-based anchoring architecture for cross-corpus speech emotion recognition (SER), structured into two main domains: Source and Target, each represented by distinct colored backgrounds—light gray for Source and light blue for Target. The global layout is divided into three primary sections: the left-hand Source processing pipeline, the right-hand Target processing pipeline, and a central shared module for alignment and clustering.

In the Source domain, an audio waveform (green) enters a Wav2vec2.0 Extractor, followed by Phone-based Segmentation and a Transformer model. The output of the Transformer is a multi-layered neural network representation depicted as interconnected yellow circles, which then maps to four emotion labels (happy, neutral, angry, sad) represented by emoji icons. This pathway is associated with the loss function L_ER, indicating emotion recognition loss.

In the Target domain, a similar processing chain begins with a blue audio waveform feeding into a Wav2vec2.0 Extractor and Phone-based Segmentation. However, this path diverges to include a 'Mouth AG' (Articulation Group) module, which performs phone-based segmentation and feeds into the central 'AG Cluster Space'.

The central region contains two key components: the 'AG Cluster Space', enclosed in a red dashed rectangle, and the 'Acoustic Space', enclosed in a black dashed rectangle. The AG Cluster Space visualizes clusters of articulation groups as overlapping ellipses in various colors (red, yellow, blue, green, orange, gray), representing different phonetic or articulatory patterns. These clusters are derived from both Source and Target via their respective Mouth AG modules.

Below, the Acoustic Space contains three sub-components: 'Common Clusters', 'Other Clusters', and the 'Anchor'. Common Clusters are shown as two ovals—one labeled 'Source' with green blocks (Positive Set) and one labeled 'Target' with blue blocks (Anchor)—indicating aligned acoustic representations. Other Clusters, shown as a dashed oval with green blocks labeled 'Negative Set' and 'Source', represent non-aligned or dissimilar clusters. A red dashed arrow connects the Anchor to the Negative Set, suggesting contrastive learning.

Connections between modules are indicated by thick arrows: green arrows for Source pathways, blue for Target pathways, and a large green arrow from Source to the Common Clusters. The final loss function, displayed on the right side of the Target domain, is defined as L = L_ER + γ * L_AG, where L_ER corresponds to the emotion recognition loss from the Source, and L_AG represents the articulation group alignment loss, weighted by γ. This formulation emphasizes the joint optimization of emotion prediction and cross-domain articulation alignment.
