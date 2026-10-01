# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Cross-Modal Mapping: Mitigating the Modality Gap for Few-Shot Image Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20110

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Cross-Modal Mapping (CMM) architecture, designed to reduce the modality gap between visual and textual features by optimizing only a linear transformation matrix W and a textual feature matrix T, without requiring a visual cache. The global layout is horizontally structured into two main parallel streams: a top visual processing path and a bottom text processing path, which converge to produce final logits for classification. The visual stream begins with a series of input images (e.g., cat, bird, dog, etc.) fed into a Visual Encoder, represented as a large rounded rectangle with a snowflake icon indicating it is frozen during training. The encoder outputs a sequence of visual features v₁ through vₙ, which are then transformed via a trainable weight matrix W—depicted as a grid with a flame icon—resulting in a new set of features v'₁ through v'ₙ. These transformed features are then combined with text features through a fusion mechanism denoted by a circular multiplication symbol, producing α, which contributes to Logits_CMM. The text stream starts with a list of class names (cat, bird, dog, pig, etc.) concatenated with a template 'Template(CLASS)', shown in a green dashed box, forming a prompt. This prompt is processed by a Text Encoder, also marked with a snowflake icon to indicate it is frozen. The encoder outputs text features t₁ through tₙ, which are split into two branches: one passes through a frozen transformation (indicated by a snowflake) to yield a feature matrix T, and the other passes through a trainable transformation (flame icon) to feed into a TripletLoss module. The feature matrix T is used in conjunction with the visual features to compute the fusion parameter α. The final output combines Logits_CMM and Logits_CLIP (from the original CLIP model) to form the final Logits, which are passed to a CrossEntropyLoss function for training. The figure includes a legend at the top right showing flame icons for trainable components and snowflake icons for frozen components. The overall design emphasizes efficient training by limiting trainable parameters to W and T, and enhances classification by introducing a cross-modal inductive bias through the CMM component.
