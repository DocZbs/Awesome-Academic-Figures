# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GSRender: Deduplicated Occupancy Prediction via Weakly Supervised 3D Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14579

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Gaussian Properties Field, which processes an occupancy feature to generate parameters defining Gaussian primitives. The global layout is left-to-right, starting with a 3D volumetric representation labeled 'Occupancy Feature' on the left, followed by a processing block labeled 'head' in the center, and ending with a visual representation of Gaussian properties on the right. The leftmost component is a 3D grid structure, depicted as a transparent cube with internal dashed lines indicating a voxelized volume. This structure is annotated with the mathematical expression V ∈ ℝ^{H_V × W_V × Z_V × K}, representing a feature volume of dimensions H_V (height), W_V (width), Z_V (depth), and K (number of feature channels). An arrow extends from this volume to a central rectangular block labeled 'head', indicating the input to a neural network head module. From this 'head' block, four output branches emerge, each represented by a horizontal arrow pointing to a mathematical expression: δ_μ ∈ ℝ^{H_V × W_V × Z_V × 3} (shift of Gaussian mean), δ_s ∈ ℝ^{H_V × W_V × Z_V × 3} (shift of Gaussian scale), o ∈ ℝ^{H_V × W_V × Z_V × 1} (opacity), and c ∈ ℝ^{H_V × W_V × Z_V × (L−1)} (semantic logits for L−1 classes). These outputs are visually aligned vertically, suggesting they are generated in parallel. On the far right, a graphical representation shows two overlapping ellipses—one yellow and one light blue—forming a greenish intersection, symbolizing the spatial distribution of Gaussians. Below this graphic, the label 'Gaussian Properties' is written, along with the equation G = (μ + δ_μ, s + δ_s, r, o, c), which defines the final Gaussian parameters as a combination of base values (μ, s, r) and the learned shifts (δ_μ, δ_s), along with opacity o and semantic logits c. The figure uses black text and lines for all components, with the exception of the yellow and blue ellipses on the right, which are colored to visually represent the Gaussian distributions. The overall flow is sequential: the occupancy feature is processed by the head to produce the four output fields, which together define the properties of a set of Gaussians in 3D space.
