# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Successive optimization of optics and post-processing with differentiable coherent PSF operator and field information — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14603

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a joint optimization pipeline for lens design and image reconstruction, structured as a left-to-right dataflow with bidirectional feedback loops. The global layout consists of three main stages: input sampling, differential optical simulation, and image reconstruction, connected by forward and backward propagation arrows. On the far left, a yellow rounded rectangle labeled 'Random object field' contains a small dog image with a white square highlighting a region; below it, a zoomed-in 'Scene patch' shows a close-up of the dog’s eye. This input feeds into the central light-blue box titled 'Differential optical simulation model', which includes the parameter φ_lens and a 'Customized differential operator'. Inside this module, two outputs are generated: a black square labeled 'Coherent PSF' with a small colored dot at its center, and a grid of color-varying squares labeled 'Image patch field', representing spatially varying blur effects. These two outputs are concatenated via a circular symbol marked 'C' (indicating RGB+XY concatenation), forming the input for the next stage. The rightmost light-blue box is labeled 'Image reconstruction network' with parameter φ_net. It receives the concatenated input and produces two side-by-side images: a 'Blurred patch' (left) showing the degraded eye image, and a 'Reconstructed' version (right) with improved clarity. A black arrow points from the blurred to the reconstructed image, indicating forward processing, while a red arrow returns from reconstructed to blurred, denoting backward propagation. Two purple rounded rectangles represent loss functions: 'Optical evaluations L_optic' connects to the differential optical simulation model via bidirectional black and red arrows, signifying forward and backward optimization of φ_lens. Similarly, 'Network loss L_net' connects to the reconstruction network with bidirectional arrows, guiding the training of φ_net. A legend on the far right clarifies symbols: a circle with an 'X' denotes convolution, a circle with 'C' denotes concatenation (RGB+XY), black arrows indicate forward pass, and red arrows indicate backward pass. The entire pipeline operates iteratively, optimizing both lens parameters and network weights simultaneously to minimize reconstruction error while satisfying optical constraints.
