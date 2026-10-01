# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Scene Graph and Layout Guided Complex 3D Scene Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20473

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-branch framework for super-node generation in a 3D generative modeling context, where 3D Gaussian Splatting (3DGS) models are initialized and optimized using prompts and bounding box information. The global layout is divided into two parallel processing streams: an upper branch for joint optimization of two 3D models and a lower branch for object-specific refinement using cross-attention guidance.

In the upper branch, two 3D models, denoted as θ₁ˢ and θ₂ˢ, are rendered from a given camera pose c, producing corresponding RGB images x₁,₂ˢ. These models are associated with bounding boxes b₁ˢ and b₂ˢ, respectively. A projection operation Proj(b₁ˢ ∪ b₂ˢ, c) generates a combined binary mask representing the union of both bounding boxes in the image space. This mask, along with the rendered images x₁,₂ˢ, is fed into an MVDream module, which takes the joint prompt y₁,₂ˢ as input. The output of this module is a pseudo ground truth image containing both objects (e.g., a rider on a horse), which is then used to compute an intersection loss ℒ_int.

In the lower branch, the focus shifts to refining a specific object—in this case, the horse. The 3D model θ₂ˢ is rendered independently to produce x₂ˢ. Simultaneously, a cross-attention map D₂ˢ is extracted from the upper branch’s rendered image x₁,₂ˢ by identifying the attention tokens corresponding to the prompt y₂ˢ (the horse prompt). This attention map acts as a spatial guide for the MVDream module in the lower branch. The MVDream module processes y₂ˢ and D₂ˢ to generate a pseudo ground truth image of the horse alone, which is then used to compute an object-specific loss ℒ_obj.

The figure includes a legend at the bottom defining key symbols: c represents camera pose, y denotes prompt, θ refers to 3D model, b indicates bounding box, x stands for RGB image, and D signifies cross-attention map. The connections between modules are indicated by arrows: solid black arrows denote data flow, while a curved blue arrow labeled 'Cross attention extraction' highlights the process of extracting attention maps from the upper branch to guide the lower branch. The overall structure emphasizes a hierarchical and guided optimization strategy, where global context informs local object generation through attention-based localization.
