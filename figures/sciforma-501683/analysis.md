# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interpretable deformable image registration: A geometric deep learning perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13294

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-resolution, coarse-to-fine deformation refinement architecture for feature-based image processing, likely in the context of image generation or transformation. The global layout is divided into two main sections: a large left-side diagram showing the hierarchical refinement process across three resolutions (Resolution 0, 1, and 2, increasing in coarseness upward), and two inset boxes on the right providing detailed explanations of the core components: deformation refinement (T_θ) and learned interpolation (δ_θ).

In the main diagram, a pixelated digit '3' is shown at the bottom-left, with a red box highlighting a local region. This region corresponds to a feature hierarchy represented by a 3D grid of blocks at Resolution 0, which becomes sparser and more abstract at higher resolutions. Each resolution level contains multiple feature blocks, with specific ones highlighted in pink (e.g., x^Res0_0, x^Res1_0, x^Res2_0) to indicate the active feature being processed. The process starts at the top-most resolution (Resolution 2) and proceeds downward.

The workflow follows a refinement-inheritance cycle. At each resolution, a feature (e.g., x^Res2_0) undergoes a 'Refine' step, indicated by a solid blue arrow, producing a refined feature (e.g., x^Res2_N). This refined feature then 'Inherits' its transformation to the next lower resolution via a dashed orange arrow, which propagates the deformation to the corresponding feature at the next level (e.g., from x^Res2_N to x^Res1_0). The refinement process continues iteratively within each resolution until it reaches the base resolution (Resolution 0), where the final refined feature (x^Res0_N) is produced. Text annotations clarify this: 'Starting position of feature hierarchy', 'Feature hierarchy follows refined position of top-most parent', and 'Refinement process continues to lower hierarchies' and 'Refinement ends at base resolution'.

The right-side insets provide mechanistic details. The top inset, labeled 'T_θ Deformation refinement' (blue border), shows how a source point (x_1) uses neighboring source (pink dots) and target (green dots) points to refine its current transformation. A deformation vector u_1 is applied, moving x_1 to x_2, and the process can be reapplied using updated neighboring features at the new position, leading to x_N. This illustrates an iterative refinement of the deformation function T_θ.

The bottom inset, labeled 'δ_θ Learned interpolation' (orange border), explains how deformations are transferred between resolutions. A 'parent' feature (x^parent_0) with associated deformation vectors u_0...N is connected to a 'child' feature (x^child_0). The child inherits the parent's deformation (u^parent_0...N), then applies a learned interpolation (u^interp) based on neighboring parents to compute its own deformation (u^child_0...N). Finally, the deformation function T_θ is applied to transform the child feature to x^child_1. This highlights the role of δ_θ in interpolating deformations across resolution boundaries.

The entire architecture is supervised such that most deformation modeling occurs at coarser (earlier) resolutions, with supervision at finer (later) resolutions providing feedback to all coarser levels, ensuring consistency and efficiency.
