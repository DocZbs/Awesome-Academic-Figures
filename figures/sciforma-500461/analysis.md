# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Relation-Guided Adversarial Learning for Data-free Knowledge Transfer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11380

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the framework of the RGAL method for data-free knowledge distillation, divided into two main phases: Image Synthesis Phase and Student Training Phase. The overall layout is horizontal and split into two distinct sections, each with a different background color—light blue for the top phase and beige for the bottom phase—to visually separate the two stages.

In the Image Synthesis Phase (top section), the process begins with a trainable Generator, depicted as a gray pyramid-like structure, which produces Synthesized Samples shown as small images. These samples are fed into both a fixed Teacher model (blue blocks) and a fixed Student model (peach-colored blocks). The outputs from both models are compared via a -KL Divergence loss, which is computed between their feature representations. Both models then undergo Global Pooling, producing Embeddings represented as small horizontal bars. These embeddings are processed through Focal Weighted Sampling, which selects triplets (A₁, P₁, N₁) where A stands for anchor, P for positive, and N for negative. The sampled triplets are visualized in a gray box with circles (anchor and positive) and triangles (negative). This leads to a Diversification and Confusion module, shown as a dashed box containing a diagonal line separating Teacher (upper) and Student (lower) embedding spaces. Here, the Student’s embedding is pulled toward the Teacher’s anchor and pushed away from the Teacher’s negative, indicated by green and red arrows respectively, as per the legend: red for Push, green for Pull.

In the Student Training Phase (bottom section), the process starts with a Data Pool, illustrated as a cylinder filled with small images, from which Paired Sampling generates Batch Samples. These are input into the same fixed Teacher (blue blocks) and now trainable Student (peach blocks). The KL Divergence here is positive (+KL Divergence), indicating a different optimization direction. After Global Pooling, the embeddings are used to compute an L₂ Loss. These embeddings are then subjected to Distance Weighted Sampling, which selects triplets (A₂, P₂, N₂) shown in a beige box with similar circle-triangle notation. The resulting triplets feed into a Discrimination and Clustering module, also a dashed box with Teacher-Student separation. Here, the Student’s embedding is pulled toward the Teacher’s positive and pushed away from the Teacher’s negative, again using green and red arrows.

Connections are represented by black arrows indicating data flow. The Generator’s output feeds into both models in the first phase, while the Data Pool feeds into the second phase. The embeddings from both phases are processed through their respective sampling strategies before being used in the triplet-based optimization modules. The figure emphasizes the alternating training of generator and student, with opposing triplet loss directions and different sampling strategies: focal weighting for diversification during synthesis, and distance weighting for discrimination during student training.
