# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GSRender: Deduplicated Occupancy Prediction via Weakly Supervised 3D Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14579

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall framework of GSRender, a method for 3D scene reconstruction and rendering from surround-view 2D images. The global layout is horizontal and two-tiered: the top row represents the current frame processing pipeline, while the bottom row shows the adjacent frame processing with Ray Compensation (RC). Both pipelines share a common 2D-to-3D feature extraction step, followed by Gaussian-based rendering and loss computation.

In the top row, multiple 2D surround-view images (N × H × W × 3) are fed into a 2D-to-3D module, represented by a yellow arrow, which converts them into a 3D voxel grid (Hv × Wv × Zv × K). This grid is then processed by a shared head (red arrow) to generate a 3D feature volume with Gaussian attributes (Hv × Wv × Zv × (7 + L − 1)), where each Gaussian is defined by its position, scale, rotation, and color. These Gaussians are rendered using ray casting, producing a predicted image (pred), which is compared to the ground truth (gt) via a current loss function (Lcurr).

The bottom row introduces the RC module, which takes the same 3D voxel grid from the 2D-to-3D step and applies a separate shared head (red arrow) to generate a modified 3D feature volume. This module compensates for viewpoint differences between frames, particularly addressing duplicate object predictions across views. The resulting Gaussians are rendered again using rays, producing a new predicted image. This output is compared to a ground truth from a different viewpoint (N view) using an adjustment loss (Ladj).

The figure uses color-coded arrows to denote data flow: yellow for the current frame, blue for the adjacent frame, and red for shared components. The 3D volumes are depicted as grids transitioning into abstract 3D spaces filled with colored ellipses representing Gaussians. The final outputs are rendered images with semantic segmentation-like colorization, and losses are shown as directed comparisons between pred and gt. The entire process emphasizes temporal consistency and multi-view compensation through shared heads and dedicated RC processing.
