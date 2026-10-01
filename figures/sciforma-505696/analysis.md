# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MaskGaussian: Adaptive 3D Gaussian Representation from Probabilistic Masks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20522

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the MaskGaussian pipeline, a method for differentiable rendering using Gaussian splats with learned existence masks. The global layout is left-to-right, depicting the entire workflow from input Gaussians to final rendered output and loss computation. On the far left, five 3D Gaussians (G1–G5) are shown as colored ellipsoids, representing the scene primitives. These Gaussians are splatted onto a 2D plane via a 'splat' operation, producing overlapping translucent disks with varying colors and opacities. A 'query pixel' is selected, indicated by a red arrow pointing to a white square within the splatted region.

Below the splats, the process begins with sampling existence masks from each Gaussian’s existence distribution, represented as Gaussian curves. Each Gaussian corresponds to a mask Mi (i=1 to 5), depicted as colored circles: green for present (Mi=1), gray for absent (Mi=0). The masks are sampled probabilistically, and only those with αi > 0 (opacity greater than zero) are retained. The αi values are computed from each splat’s normal attributes (center, scale, rotation) and are shown as colored squares corresponding to each Gaussian. After filtering out splats with αi ≤ 0 (here, G2 and G5 are filtered), the remaining splats (G1, G3, G4) and their associated masks (M1, M3, M4) proceed to the 'masked rasterization' stage.

The masked rasterization module is enclosed in a large rounded rectangle on the right. It processes the surviving splats in order, computing transmittance Ti and color ci for each. For each splat i, the render block computes ci using the mask Mi and αi. The transmittance Ti evolves based on previous transmittances and masks, with gradients flowing backward through the chain. Crucially, when a splat is masked (e.g., M2 is gray/absent), its αi is set to zero, and it contributes no gradient to its own normal attributes (thus no update), but still receives a gradient for its mask Mi, allowing the existence probability to be updated. This selective gradient flow is indicated by red 'x' marks on the backward arrows for masked splats.

The final rendered color is obtained by summing the contributions c1, c2, c4 (with c2 being zero due to masking). This output color is compared to the ground truth (GT) color via a loss function, shown as a red square labeled 'loss'. The loss backpropagates through the network, updating only the masks and normal attributes of unmasked splats. The legend at bottom-right clarifies that solid black arrows indicate forward pass and dashed blue arrows indicate backward pass. The figure also notes T1=1 as the initial transmittance. The overall structure emphasizes the dual role of masks: controlling visibility during rendering and enabling selective gradient updates for training.
