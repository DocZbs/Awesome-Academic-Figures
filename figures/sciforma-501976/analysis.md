# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Registration in 30 Years: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13735

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage framework for supervised 3D pairwise coarse registration, structured as a horizontal flowchart with distinct processing modules connected by directed arrows. The global layout is left-to-right, beginning with two input point clouds on the far left, progressing through feature extraction, matching stages, and culminating in transformation selection and refinement. The top input point cloud is rendered in blue, while the bottom one is in orange, both depicted as sparse 3D point sets with visible surface structures, indicating two different scans or views of a scene.

The first stage involves parallel Feature Extraction modules, each represented as a light blue trapezoidal shape with a vertical gradient and labeled 'Feature Extraction' in black text. These modules receive the respective input point clouds and output features that are passed to subsequent stages. From each Feature Extraction module, an arrow leads to the Superpoint Matching Module, which is a rounded rectangle with a light green fill and black border, labeled accordingly. This module processes the extracted features from both inputs to establish initial correspondences at the superpoint level.

A small icon between the Superpoint Matching Module and the Point Matching Module visually represents the superpoint correspondence: it consists of three stacked, alternating blue and yellow rectangular blocks, symbolizing paired superpoints from the two inputs. An arrow labeled 'superpoint correspondence' connects the Feature Extraction outputs directly to the Point Matching Module, indicating that this correspondence is also fed into the next stage.

The Point Matching Module is a dark gray rounded rectangle with black text, positioned centrally in the second stage. It receives both the superpoint correspondence and the feature representations from the Feature Extraction modules. This module refines the matches down to individual points, leveraging the coarse superpoint alignment to guide fine-grained point correspondence.

Finally, the output of the Point Matching Module flows into the last module, Transformation Selection & Refinement, depicted as a light gray rounded rectangle with black text. This module computes and optimizes the spatial transformation (e.g., rotation and translation) that aligns the two point clouds based on the matched point pairs, completing the registration pipeline.

All connections are solid black arrows indicating the direction of data flow. The diagram emphasizes a hierarchical and modular design, where coarse-level superpoint matching informs finer point-level matching, ultimately enabling robust and accurate 3D registration.
