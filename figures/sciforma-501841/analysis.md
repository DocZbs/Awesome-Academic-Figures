# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CA-Edit: Causality-Aware Condition Adapter for High-Fidelity Local Facial Attribute Editing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13565

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an inference pipeline for image editing, specifically for modifying facial features such as closing eyes, using a combination of diffusion modeling, frequency guidance, and causality-aware conditioning. The global layout is left-to-right, divided into four main stages: input preparation, conditional adaptation, frequency-guided refinement, and final causality modeling inference.

On the far left, two input images are shown: an 'Original Image' and a 'Mask Image', both depicting a person with eyes open. The mask image has the eyes blacked out, indicating the target region for modification. These inputs feed into the first module, a 'Causality-Aware Condition Adapter', which receives a textual prompt ('closed eyes') as additional conditioning. This adapter is visually represented as an orange hourglass-shaped block labeled 'Reference Net'. It processes the original image and mask to produce a latent representation denoted as z_T.

This latent representation is then passed to a blue hourglass-shaped block labeled 'SD Unet', which performs the core diffusion process. The SD Unet generates intermediate outputs, denoted as ẑ_t, which are fed into the next stage. This stage, titled 'Skin Transition Frequency Guidance', contains multiple visual components. It displays ẑ_t as a face with closed eyes (dashed outline), alongside a green-tinted image showing localized eye regions (boundary regions), and a heat-map-like 'Attention map' highlighting the eye area in blue and red. These components are connected via green arrows labeled 'Localization', indicating that the boundary regions are identified based on attention.

Within this stage, a Fourier Mask (black square with white center) is applied to the FFT Image (a frequency spectrum visualization) via a circular operator, representing a low-frequency filter. This produces 'Frequency Guidance', which is mathematically defined by the equation: ê_t = ϵ_θ - λρ_t∇_{z_t}g(z'_0, ẑ_{t→0}). This guidance is combined with the intermediate output to refine the image.

The refined output, ẑ_{t−1}, is then passed to the final stage: 'Causality Modeling Inference'. This is depicted as a dashed rectangular box containing two smaller boxes, with a curved arrow labeled '×T' looping back from the output to the input, indicating iterative refinement over T steps. The final output is the edited image, ẑ_0, showing the person with closed eyes, consistent with the input mask and prompt.

The legend at the bottom clarifies the visual elements: the blue hourglass is the SD Unet, the orange hourglass is the Reference Net, the green rounded rectangles represent Boundary Regions, and the green arrows indicate Localization. The entire pipeline emphasizes causal reasoning, frequency-based refinement, and attention-driven localization to achieve realistic image editing.
