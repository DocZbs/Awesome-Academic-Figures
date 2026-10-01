# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Promptable Representation Distribution Learning and Data Augmentation for Gigapixel Histopathology WSI Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14473

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of three different data augmentation strategies for Whole Slide Image (WSI) analysis, labeled as (a) Patch Augmentation, (b) Generative Augmentation, and (c) Promptable Representation Sampling (PRS). The global layout consists of three vertically aligned, parallel workflows, each depicting a distinct augmentation pipeline leading to MIL Training. Each pipeline is structured from bottom to top, starting with an input WSI represented as a diamond-shaped grid overlaying a histopathological tissue image, progressing through intermediate processing steps, and culminating in MIL Training at the top.

In all three pipelines, the initial step involves dividing the WSI into patches, visually represented as small square tiles beneath the WSI. In (a) Patch Augmentation, these patches undergo 'Image Transformation' (a blue-bordered gray rectangle, indicating a nonparameterized process), followed by 'Patch Encoding' (an orange-bordered gray rectangle, indicating a parameterized process), and then feed into MIL Training. The transformation step is shown to alter the appearance of the patches, suggesting standard image-level augmentations like rotation or flipping.

In (b) Generative Augmentation, the same initial patches are first encoded via 'Patch Encoding' (orange-bordered gray rectangle). This is followed by 'Representation Generation' (another orange-bordered gray rectangle), which takes as input a random seed denoted by 'z' (a white box with black text). The output of this step is a set of color-coded feature vectors (green, purple, cyan, red, pink bars), representing generated representations. These are then passed to MIL Training.

In (c) Promptable Representation Sampling (PRS), the initial patches again go through 'Patch Encoding' (orange-bordered gray rectangle). The next step is 'Representation Sampling' (blue-bordered gray rectangle, nonparameterized), which receives input from a box labeled 'Augmentation Prompts'. This box lists specific augmentation types: ResizedCrop (✓), Flip (✗), ColorJitter (✓), and Solarization (✗), indicating that only certain prompts are selected. Below this box, 'Random Prompts' is noted, suggesting stochastic selection. The output of Representation Sampling is a set of identical gray feature vectors, symbolizing sampled representations, which then proceed to MIL Training.

A legend on the right side clarifies visual elements: solid black arrows denote 'Online Data Flow', dashed gray arrows indicate 'Offline Data Flow', orange borders represent 'Parameterized Process', and blue borders denote 'Nonparameterized Process'. The figure emphasizes that PRS (c) introduces a novel, prompt-driven approach to representation sampling, contrasting it with traditional patch-level transformations (a) and generative feature modeling (b).
