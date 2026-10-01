# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GAGS: Granularity-Aware Feature Distillation for Language Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13654

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a granularity-aware segmentation method that determines the number of sampling points per image patch based on depth information and local information density. The global layout is left-to-right, showing a three-stage pipeline: depth-aware sampling calculation, quantized density modeling, and sample drawing. On the left, a 3D volume labeled 'Min Depth Field' is shown with color-coded depth values (red for near, blue/purple for far), containing a small black cube centered on a red circular region representing a selected patch. A black arrow from this cube points to a 2D 'Depth Map' rendered as a gradient image, which in turn connects via another arrow to a real-world image divided into a 3x3 grid of patches. Below this, the text 'Calculate the n_sample per patch' indicates the purpose of this stage. A curved gray arrow leads from the patched image to the middle section, which contains a 3x3 grid of grayscale textured patches numbered 1 through 9. Beneath this grid is a bar chart labeled 'Quantized Gaussian kernel density P', with bars corresponding to the nine patches, indicating a discrete probability distribution derived from the local Gaussian density. This section is captioned 'Local sampling based on constant information density'. Finally, a rightward arrow leads to the rightmost panel, which shows the same 3x3 grid of the original image now overlaid with white dots distributed unevenly across the patches—denser in regions with higher probability (e.g., patch 9) and sparser elsewhere. This panel is labeled 'Drawing samples according to P'. The entire diagram uses grayscale and color coding to represent depth and density, with clear bounding boxes around modules and directional arrows to indicate data flow. Text labels are placed directly below or beside components for clarity.
