# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Transformer-Based Contrastive Meta-Learning For Low-Resource Generalizable Activity Recognition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20290

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the end-to-end architecture of a meta-learning framework for time series classification, named $\Design$, which integrates data augmentation, feature extraction via a Transformer-based encoder, and contrastive meta-learning for domain generalization. The layout is divided into three main horizontal sections: Data Diversity Expansion, Feature Extraction, and Contrastive Meta-Learning, connected sequentially from left to right.

In the first section, 'Data Diversity Expansion', original multivariate time series samples are shown as stacked waveforms. These undergo data augmentation through four techniques: Rotation, Jittering, Scaling, and Magnitude Warping, each illustrated with modified waveform examples. The augmented samples are then passed to the next stage.

The second section, 'Feature Extraction', begins with multivariate time series input. This is split into univariate series, followed by Instance Normalization and Patching. A Projection + Position Embedding layer processes these patches, feeding them into a Transformer Encoder. The encoder consists of multiple layers, each containing Multi-Head Attention, Add & Norm, Feed Forward, and another Add & Norm block. The output is flattened and concatenated before being processed by a Conv1D + ReLU layer, producing a set of features represented as two vertical stacks of colored blocks (yellow and blue), indicating distinct feature representations.

The third section, 'Contrastive Meta-Learning', is split vertically into 'Meta-Train' (top, blue border) and 'Meta-Test' (bottom, orange border) phases, both sharing weights as indicated by the 'Shared Weights' label. In each phase, features are processed by an FC + ReLU layer, then fed into a Supervised Contrastive Learning module. This module visualizes a feature space with three classes (Class 1, Class 2, Class 3) represented by different shapes (triangles, circles, squares) and colors, with each class distributed across multiple domains (Domain I, II, III). Green dashed arrows denote intra-class pulling (bringing similar samples closer), while green solid arrows denote inter-class pushing (separating dissimilar samples). The loss functions $\mathcal{L}_{\text{train}}^{\text{cls}}$ and $\mathcal{L}_{\text{train}}^{\text{supcon}}$ (for training) and $\mathcal{L}_{\text{test}}^{\text{cls}}$ and $\mathcal{L}_{\text{test}}^{\text{supcon}}$ (for testing) are computed. The outputs are passed through an FC + SoftMax layer for Classification, which maps to activity labels (running, cycling, walking, etc.). The meta-optimization loop connects the test phase back to the feature extraction module, enabling iterative improvement.

A legend at the bottom clarifies the arrow types: dashed green for intra-class pulling and solid green for inter-class pushing. The caption notes that different colors in the feature space represent different domains, emphasizing the model's ability to generalize across domains.
