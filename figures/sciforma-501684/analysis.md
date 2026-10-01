# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interpretable deformable image registration: A geometric deep learning perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13294

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct methodologies for sequential deformation modeling in geometric deep learning, labeled as (a) Cascading, (b) Feature warping, and (c) Geometric deep learning (Ours), arranged vertically. Each approach is depicted as a horizontal workflow spanning two stages: 'Deformation 1' and 'Deformation 2', enclosed within light blue rounded rectangles. The global layout consists of three parallel rows, each illustrating a different strategy for handling feature transformations across successive deformations.

In all three methods, the process begins with an input source image denoted as I^S, represented as a green grid. This image undergoes feature extraction via a convolutional neural network module labeled 'Feat. extract', shown as a stack of gray blocks with a green filter icon. The resulting features are denoted as F^S (green grid) and F^T (pink grid), representing source and target feature maps respectively.

In method (a) Cascading, the initial deformation φ₀ is applied to I^S, which is then warped using a circular 'W' symbol indicating warping operation. The warped image is fed into the feature extractor again to obtain new features for the next stage. This re-extraction step is highlighted as computationally expensive. The deformation network τ_θ processes the feature pair (F^T, F^S) to produce displacement U₁, which is added to φ₀ to yield φ₁. This process repeats for Deformation 2, with φ₁ warped to update the input for the next feature extraction.

Method (b) Feature warping avoids re-extraction by warping the already extracted features F^S directly using the same 'W' symbol. However, this introduces interpolation errors due to the curse of dimensionality, as noted in the caption. The warped features are then combined with F^T and processed by τ_θ to compute U₁, which updates φ₀ to φ₁. The same procedure continues for Deformation 2.

Method (c) Geometric deep learning (Ours) explicitly models grid coordinates alongside features. The feature extractor outputs both feature maps (F^S, F^T) and their corresponding coordinate grids (X^S, X^T), shown as tuples. Instead of warping, these coordinate-feature pairs are directly fed into τ_θ. The deformation network computes U₁ from (F^T, X^T) and (F^S, X^S), which is added to φ₀ to produce φ₁. Crucially, no warping occurs; instead, the deformation function τ_θ is made aware of spatial relationships through explicit coordinate modeling. This process is repeated for Deformation 2, maintaining consistency and avoiding interpolation artifacts.

Connections between modules are indicated by arrows: solid black arrows denote data flow, green arrows represent warped inputs or feature propagation, and pink arrows indicate feature pairs entering τ_θ. The '+' symbols represent addition operations for updating deformation fields. All methods share the same structural components—feature extraction, deformation network, and field update—but differ in how they handle intermediate representations between stages.
