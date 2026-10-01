# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Context-Aware Outlier Rejection for Robust Multi-View 3D Tracking of Similar Small Birds in An Outdoor Aviary — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16511

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive workflow for multi-view 3D multi-bird tracking, structured as a horizontal pipeline progressing from raw data acquisition to final 3D tracking output. The layout is organized into three main rows: the top row contains four sequential processing stages—Raw Data, Detection, Masking, and Feature Extraction—each enclosed in a colored rounded rectangle (blue, red, green, purple respectively). The middle row includes two stages: Feature Matching (orange) and Outlier Rejection (blue), connected by an arrow from Feature Extraction. The bottom row consists of Clustering (red), 3D Reconstruction (teal), and Multi-Object Tracking (black), forming the final stages of the pipeline.

Each stage is visually represented with a corresponding image or plot and labeled with a descriptive title. The Raw Data stage shows multiple camera views of a bird enclosure, indicating input from different perspectives. Detection highlights detected birds with green bounding boxes. Masking displays regions of interest masked out, likely to remove background clutter. Feature Extraction uses SIFT to extract 500 features, shown as colorful keypoints on the image.

Feature Matching combines images from multiple cameras, displaying 22 matched feature points across views. Outlier Rejection filters these matches, reducing them to 14 after filtering, as indicated by the caption. Clustering illustrates correspondence between detected objects in two camera views using color-coded bounding boxes (red, blue, green) linked by lines, showing how features are grouped across views. 3D Reconstruction presents a 3D scatter plot with axes labeled X, Y, Z (in meters), showing reconstructed positions of Bird 1 (red) and Bird 2 (blue). Finally, Multi-Object Tracking displays a 3D trajectory plot with time on the x-axis and spatial coordinates on y and z, showing smooth paths for Bird 1 (red), Bird 2 (blue), and Bird 3 (green), indicating continuous tracking over time.

Arrows connect each stage sequentially, indicating the flow of data: from Raw Data → Detection → Masking → Feature Extraction → Feature Matching → Outlier Rejection → Clustering → 3D Reconstruction → Multi-Object Tracking. A feedback loop from Feature Extraction to Feature Matching suggests iterative refinement. All modules are clearly demarcated by distinct border colors and rounded rectangles, with internal images or plots providing visual context for each step. The figure caption states: 'Proposed Workflow diagram: our multi-view 3D multi-bird tracking'.
