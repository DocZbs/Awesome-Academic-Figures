# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bridge then Begin Anew: Generating Target-relevant Intermediate Model for Source-free Visual Emotion Adaptation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13577

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of two approaches for Source-Free Domain Adaptation (SFDA): conventional methods (a) and the proposed method (b). The layout is divided into two main panels, each enclosed in a dashed oval, with panel (a) on the left and panel (b) on the right. Both panels are vertically aligned under the overarching labels 'Source Training' at the top and 'Target Adaptation' at the bottom.

In panel (a), 'Conventional SFDA Methods', the source training phase involves labeled source data feeding into a blue rectangular module labeled 'Source Model'. This model contains a neural network diagram (blue nodes connected by lines) followed by a classifier (blue trapezoid). The output is labeled 'Source Label', and the process is supervised. During target adaptation, the source model is initialized to a green rectangular module labeled 'Target Model', which has a similar internal structure but with green nodes and a green classifier. Unlabeled target data feeds into this target model, and the adaptation is performed unsupervised. A dashed arrow labeled 'DA' connects the source and target models, indicating direct domain adaptation. The entire process is depicted as a simple two-stage flow: initial source training followed by direct adaptation to the target domain.

Panel (b), 'Our Method', introduces a more complex three-stage architecture. It begins with labeled source data (illustrated with images of a dog and a person) feeding into the 'Source Model φ_s' (blue module), which consists of a feature extractor (blue network) and a classifier (blue trapezoid). This model produces outputs connected to loss functions: L_ce (cross-entropy loss) and L_kd, L_sl (knowledge distillation and self-supervised losses). The source model's weights are transferred via an 'Initial' arrow to the 'Bridge Model φ_b' (peach-colored module), which also includes a feature extractor (orange network) and a classifier (peach trapezoid with a lock icon, indicating it is frozen or not updated). The bridge model receives input from both labeled source data (via 'DMG' — Domain Mapping Generation) and unlabeled target data (illustrated with images of a ship and a lighthouse) via 'TMA' — Target Model Adaptation. The bridge model’s feature extractor is updated using Exponential Moving Average (EMA) from the source model. The bridge model then generates pseudo-labels for the target data, which are used to train the 'Target Model φ_t' (green module) through 'Alignment'. The target model has a green feature extractor and classifier, and it is trained using unlabeled target data. The target model’s outputs connect to multiple loss functions: L_align, L_sl (alignment and self-supervised losses), and L_im (image-level loss). The overall flow shows a decoupled training strategy where the bridge model acts as an intermediary to improve pseudo-label quality before adapting the final target model.

Connections are color-coded: blue arrows represent source data flow, orange arrows indicate DMG and bridge model interactions, and green arrows denote TMA and target model training. Loss functions are shown as colored rectangles with mathematical symbols, positioned to the right of the respective models they correspond to. The figure emphasizes that the proposed method avoids direct adaptation by introducing a bridge model to mitigate domain shift and enhance adaptation performance.
