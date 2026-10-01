# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning Radiance Fields from a Single Snapshot Compressive Image — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19483

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of two proposed methods, SCINeRF and SCISplat, for recovering 3D scene structure and compressed multi-view images from a real SCI measurement Y and modulation masks M. The global layout is divided into three main horizontal sections: the top section describes SCINeRF, the middle section details SCISplat, and the bottom section outlines the SCISplat Initialization Protocol. All methods share a common input block at the bottom left, labeled 'Input', containing 'Real Measurement Y' (a circular, speckled image) and 'Modulation Masks M' (four black-and-white noisy masks). From this input, a path leads to the 'SCISplat Initialization Protocol' on the bottom right, where interpolation generates degraded frames X̃, which are processed by a 'Learning-based SfM' module (blue box with a lock icon) to produce an initial 3D point cloud and camera poses. This initialization feeds into SCISplat.

In the SCINeRF section (top, purple border), a lightweight MLP takes 3D coordinates (x,y,z,θ,φ) as input and outputs scene volumetric density σ and RGB color c (dashed blue box). These are fed into 'Volumetric Rendering' (purple box) to generate rendered images X̂. The rendered images are shown as four views of a 3D object (resembling food on a plate) from different angles T₁ to Tₙ, connected by dashed lines indicating camera poses constrained by a spline. A blue arrow labeled 'Gradient' points from the rendered images to the MLP, indicating backpropagation.

In the SCISplat section (middle, orange border), the 3D scene is represented as a 3D Gaussian splat g, shown as a blurred 3D object with multiple camera views T₁ to Tₙ. The rendering pipeline involves 'Differentiable Rasterization' (orange box), which receives inputs from 'Projection' and 'Densification Strategy' (both orange boxes). These components interact bidirectionally with the 3D Gaussian g, forming a loop for iterative refinement. The rendered images X̂ are again shown as four views of the same object.

Both methods converge on 'Measurement Synthesis' (green border), where the rendered images X̂ are combined via summation Σ to form a 'Synthesized Measurement Ŷ' (a circular, speckled image matching the real measurement). This synthesized measurement is compared to the real measurement Y via a photometric loss L_photo, indicated by a subtraction operation. The loss drives joint optimization of the scene representation and camera poses. A key equation is shown: Ŷ = Σᵢ₌₁ᴺₗ X̂ᵢ ⊙ Mᵢ, describing how the synthesized measurement is computed from rendered images and masks. Arrows indicate data flow: black arrows denote operations, blue arrows denote gradients, and 'X' marks learnable parameters. The figure uses consistent visual elements: boxes for modules, images for data, and arrows for connections, with color-coded legends at the top left.
