# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EHCTNet: Enhanced Hybrid of CNN and Transformer Network for Remote Sensing Image Change Detection — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01238

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall network structure of EHCTNet, a deep learning framework designed for change detection from bi-temporal remote sensing images. The architecture is modular and sequential, progressing from feature extraction through refined processing stages to final change map generation. The global layout is horizontally organized into five main stages: Feature Extraction, Refined Module I, Enhanced Token Mining based Transformer, Refined Module II, and Detection Head. Each stage is color-coded and labeled at the bottom for clarity.

The process begins with two input images, labeled 'Bi-temporal input images', each of size H₀ × W₀ × 3, shown on the far left. These images are processed in parallel by a shared hybrid of CNN and Transformer, denoted as HCT, which extracts raw multi-scale features. These features are represented as 3D cubes with heatmaps indicating spatial activations, and they feed into Refined Module I.

Refined Module I, shaded in blue, processes the raw features using a Hierarchical Feature Enhancement Transformer (HEFT), which generates first-order feature images. These are then combined with the raw features via element-wise addition (indicated by a '+' symbol) before being passed to Cross-Kernel Self-Attention (CKSA) blocks. CKSA outputs semantic tokens, depicted as elongated rectangular bars with distinct color gradients (orange/blue and purple/green), representing different feature channels or token types.

The semantic tokens enter the Enhanced Token Mining based Transformer, shaded in orange. This module consists of an ENCODER and DECODER. The encoder receives the semantic tokens, concatenates them (symbolized by 'C'), and splits them into context tokens (symbolized by 'S'). The context tokens are then processed by the decoder, which reconstructs enhanced semantic information. The output of the decoder is added element-wise to the original semantic tokens, forming a refined set of semantic information images, shown as a 3D cube with a vibrant heatmap.

This refined output flows into Refined Module II, shaded in red. Here, the semantic information images undergo a second-order semantic difference computation. A subtraction operation ('−') is applied between the current semantic image and a previously computed one (likely from the same module's earlier stage), producing a difference map. This difference map is then processed by a Bi-directional Feature Transformer (BFFT), resulting in a more refined difference representation.

Finally, the Detection Head, shaded in gray, takes the refined difference map and passes it through a classifier (represented by a gray rectangular block) to produce the final binary change map, sized H₀ × W₀ × 2, where white regions indicate detected changes against a black background.

The figure includes a legend in the lower right corner explaining the symbols: 'C' for Concatenate, 'S' for Split, '+' for Element-wise Add, '−' for Element-wise Subtract, and a gray rectangle for Classifier. All connections are directed arrows, indicating the flow of data from left to right, with some feedback loops within modules (e.g., HEFT and BFFT). The design emphasizes hierarchical refinement and cross-modal attention mechanisms to enhance change detection accuracy.
