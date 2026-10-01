# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Distribution Shifts at Scale: Out-of-distribution Detection in Earth Observation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13394

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a four-step framework for out-of-distribution (OOD) detection using a pre-trained feature extractor and a learned binary classifier. The global layout is horizontal, divided into four distinct stages labeled Step 1 through Step 4, each with its own title and visual components, progressing from left to right.

Step 1: Sampling — This stage shows two data sources: D_ID, represented by a blue cylinder, and D_WILD, depicted as a globe with green and blue patches. Arrows labeled 'sampling' lead from each source to respective sample outputs: x_ID (a solid blue diamond) and x_WILD (a gradient blue-orange diamond). A legend below clarifies that blue diamonds represent ID samples and gradient diamonds represent WILD samples (which may be ID or OOD).

Step 2: Feature Extraction — The sampled inputs x_ID and x_WILD are fed into a pre-trained feature extractor, shown as a trapezoidal block labeled 'Pre-trained Feature Extractor' with a snowflake icon and symbol f. An arrow from this block points to a 'Prediction' box, indicating downstream use. From the feature extractor, an arc labeled 'Activations of layer L' leads to two sets of circular nodes: z_ID(x; f, L) (solid blue circles) and z_WILD(x; f, L) (gradient blue-orange circles). The legend identifies these as ID Activation and WILD Activation (ID or OOD), respectively.

Step 3: Assigning Surrogate Samples — The feature representations from Step 2 are combined into Z_combined = Z_ID ∪ Z_WILD. These are visualized as two clusters enclosed in oval boundaries. The left cluster contains mostly gradient circles with one solid blue circle, labeled y(C_k) = OOD, indicating surrogate OOD assignments. The right cluster contains mostly solid blue circles with one gradient circle, labeled y(C_k) = ID, indicating surrogate ID assignments. The legend specifies that solid blue circles are Surrogate ID Activations and orange circles (not present here but defined in legend) are Surrogate OOD Activations.

Step 4: Fit a Binary Classifier g — The labeled feature set Z_labeled = {(z, y) | z ∈ Z_combined, y ∈ {ID, OOD}} is shown as two groups: orange circles (surrogate OOD) on the left and blue circles (surrogate ID) on the right. A dashed line labeled g separates the two classes, representing the decision boundary of the binary classifier. Below, the equation ŷ = g(z; θ) indicates that the classifier g, parameterized by θ, predicts the class label ŷ for a given feature vector z. The classifier g is used during deployment to flag OOD inputs.

The figure uses consistent color coding: blue for in-distribution (ID), orange for out-of-distribution (OOD), and gradient blue-orange for WILD samples or activations whose true distribution is unknown. Shapes include cylinders, globes, diamonds, trapezoids, rectangles, and circles. All connections are directed arrows or arcs, indicating data flow and transformation across steps.
