# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InpDiffusion: Image Inpainting Localization via Conditional Diffusion Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02816

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into two main sections, labeled A and B, separated by a vertical line. Section A is titled 'Image Semantic Extraction' and Section B is titled 'Image Edge Extraction'. Both sections depict a sequential processing pipeline composed of modular components arranged horizontally from left to right.

In Section A, four input features, labeled f₄, f₃, f₂, and f₁ from left to right, each feed into a corresponding module labeled 'DMFE', which is represented as a rounded rectangle with light gray fill and black border. The output of each DMFE module connects downward to a circular node labeled 'c', which represents a concatenation operation. The outputs of these concatenation nodes are then passed sequentially through three 'Conv3×3' modules, each depicted as a vertically oriented rounded rectangle with light gray fill and black border, indicating a 3x3 convolutional layer. The final output of this chain is denoted as fₛ, which is the semantic feature map.

In Section B, two input features, f₄ and f₁, feed into separate DMFE modules. The output of the DMFE module corresponding to f₄ connects directly to the concatenation node 'c', while the output of the DMFE module corresponding to f₁ also feeds into the same 'c' node. The result of this concatenation is then processed by a single 'Conv3×3' module, whose output is labeled fₑ, representing the edge feature map.

All connections between modules are indicated by solid black arrows pointing from the source to the destination. The overall layout is horizontal and linear within each section, with vertical inputs feeding into the top of the DMFE modules. The visual style is consistent across both sections: all modules are light gray rounded rectangles or circles with black borders and black text. There are no colors other than black and shades of gray. The figure uses standard mathematical notation for feature maps (f₁, f₂, etc.) and module labels (DMFE, Conv3×3, c). The structure implies a hierarchical feature fusion process where multiple feature levels are processed through DMFE blocks, concatenated, and refined via convolutional layers to produce distinct semantic and edge representations.
