# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Quantum Diffusion Model for Quark and Gluon Jet Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21082

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hybrid classical-quantum diffusion pipeline for generating samples, structured as a directed flowchart with distinct processing stages arranged vertically from top to bottom. At the top, a single lavender-colored rounded rectangle labeled 'Classical Preprocessing' serves as the entry point, branching into two parallel pathways: one quantum-based on the left and one classical-based on the right. 

On the left side, the quantum pathway consists of three vertically stacked beige rounded rectangles: 'Quantum Encoding', followed by 'Quantum Noising', and then 'Quantum Layer Denoising'. On the right side, the classical pathway includes three vertically stacked salmon-pink rounded rectangles: 'Classical Encoding', followed by 'Gaussian Noising', and then 'U-Net Denoising'. 

From each of these six intermediate nodes, lines extend toward a central yellowish-beige rounded rectangle labeled 'Hybrid Denoising', indicating that outputs from all six stages converge here for combined processing. This central node then connects downward to a lavender-colored rounded rectangle labeled 'Decoding into Classical Data', which in turn feeds into the final stage: another lavender-colored rounded rectangle labeled 'Generating Samples'. 

All connections are represented by simple gray lines without arrows, implying a unidirectional flow from top to bottom. The layout emphasizes a modular design where classical and quantum components operate in parallel during the forward and backward diffusion steps, with their results integrated at the hybrid denoising stage before final decoding and sample generation. The color coding—lavender for preprocessing and post-processing, beige for quantum modules, and salmon-pink for classical modules—visually distinguishes the nature of each component. The overall structure reflects a flexible framework allowing various combinations of classical and quantum operations within the diffusion process.
