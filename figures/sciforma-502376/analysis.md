# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LiftRefine: Progressively Refined View Synthesis from 3D Lifting with Volume-Triplane Representations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14464

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a progressive inference pipeline for 3D reconstruction and rendering, structured as a horizontal workflow across multiple iterative stages labeled 'iter = 1', 'iter = 2', ..., 'iter = n', culminating in a 'Final' stage. The global layout is linear and sequential from left to right, beginning with an input image denoted as ℐ_input, which is a 2D rendering of a 3D character viewed from behind. This input feeds into an initialization step that populates an 'Image buffer'—represented as a cylindrical data structure—marking the start of the iterative refinement process.

Each iteration consists of three main components: an Image buffer (cylinder), a feature map (small square with color heatmap), and a rendered output image (square frame). The Image buffer at each stage receives data from the previous stage via a black arrow labeled 'Append', indicating accumulation of information over iterations. From the Image buffer, a green arrow labeled 'Lift + Feature map' points downward to a small square displaying a color-coded feature map (e.g., pink/orange regions on a dark background), representing extracted semantic features from the current 3D state.

From this feature map, a blue arrow labeled 'Diffusion sampling' leads to a rendered 2D image of the 3D character, shown in a square frame. These rendered outputs evolve across iterations: starting from a rough, incomplete reconstruction (iter=1), progressing through increasingly refined views (iter=2, iter=n), and ending with a final, high-quality rendering labeled ℐ_diff. A red arrow labeled 'Lift + Image rendering' connects the original input ℐ_input directly to the first rendered output ℐ_det, which serves as an initial detection or coarse reconstruction.

The connections between stages are indicated by solid black arrows for direct progression and dashed arrows for intermediate steps, emphasizing the iterative nature of the process. The final stage’s Image buffer feeds into the last rendered output ℐ_diff via the same blue diffusion sampling path. The legend at the bottom clarifies the meaning of the colored arrows: red for 'Lift + Image rendering', green for 'Lift + Feature map', and blue for 'Diffusion sampling'. The overall method progressively refines the 3D representation by accumulating features and sampling improved renderings at each step, ultimately producing a high-fidelity output.
