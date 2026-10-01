# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TSceneJAL: Joint Active Learning of Traffic Scenes for 3D Object Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18870

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the TSceneJAL framework, a three-stage active learning (AL) pipeline designed for efficient data selection from an unlabeled dataset. The global layout is structured into two main vertical flows: on the left, the AL predictor f_m is trained and updated iteratively; on the right, the AL sampler Φ performs a multi-stage selection process to identify informative scenes. The entire system operates in a loop where selected scenes are annotated and fed back to retrain the model.

On the left side, the AL predictor f_m consists of four sequential modules: a green 'Feature Net', a light blue 'Backbone', an orange 'Cls. Head' (classification head), and a light blue 'Loc. Head (MDN)' (location head using Mixture Density Network). The initial labeled dataset D_i is used to pretrain the model (indicated as 'initial only'). The unlabeled dataset D_u serves as input to the predictor, which outputs pseudo-labels and MDN predictions, denoted as (Ĉ, M̂), through an interface. This output is then passed to the AL sampler Φ. After each iteration, the selected and annotated scenes are used to update the labeled dataset D_l, which in turn retrains the model.

The AL sampler Φ, enclosed in a large rounded rectangle, implements a three-stage hybrid sampling strategy. Stage 1, labeled 'Search K₁N_r scenes from D_u as D_s1', uses 'Category Entropy' to balance quantity across classes. This module displays two bar charts: the first shows class-wise entropy (Car, Cycl, Ped) with varying heights, and the second shows normalized entropy after balancing. Stage 2, 'Search K₂N_r scenes from D_s1 as D_s2', employs 'Scene Similarity' to eliminate redundancy. It visualizes clusters of data points (triangles, squares, circles) with dashed ellipses indicating groupings, and an arrow labeled 'MK' (likely Maximum Kernel or similar) pointing to a refined clustering. Stage 3, 'Search N_r scenes from D_s2 as D_s3 (D_r)', applies 'Perception Uncertainty' to ensure complexity. This module shows a decision boundary (dashed line) separating classes, with points near the boundary highlighted, and an arrow labeled 'MDN' indicating the use of the Mixture Density Network to capture uncertainty.

Connections between components are shown via arrows. The output (Ĉ, M̂) from the AL predictor feeds into the AL sampler. The three stages of the sampler are connected sequentially. The final output, 'N_r Selected scenes D_r', is sent to an 'Oracle Ω' for annotation, and the annotated data is then used to update the labeled dataset D_l, closing the loop for model retraining. The figure uses consistent shapes: cylinders for datasets, rounded rectangles for modules, and arrows for data flow. Text labels are placed clearly within or adjacent to each component, and the three stages are explicitly labeled with their respective search objectives.
