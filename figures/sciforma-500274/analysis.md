# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AirMorph: Topology-Preserving Deep Learning for Pulmonary Airway Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11039

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive end-to-end pipeline for airway anatomical labeling, named AirMorph, structured into four main sections: an overall pipeline (a), CNN model details (b), graph feature extraction (c), and a transformer-based hierarchical labeling module (d).

Section (a) outlines the global workflow: starting from lung morphology input (a grayscale lung image with red airways), the process proceeds through a CNN model to produce a binary airway segmentation. This is followed by graph feature extraction, then processed by a Transformer model to generate hierarchical labels—lobar, segmental, and sub-segmental—each represented as color-coded branching structures with distinct label sets (LB^l, LB^s, LB^ss). The final outputs are multi-colored airway trees indicating anatomical subdivisions.

Section (b) details the CNN model architecture. Subsection (b1) shows an ensemble approach where a CT image is fed into multiple sub-models (SubModel¹ to SubModel⁴), whose outputs are aggregated via majority voting to produce the binary airway mask. Subsection (b2) illustrates a UNet architecture with local connectivity-aware objective functions. It consists of an encoder path with convolutional layers (Conv 3×3×3 IN+ReLU), pooling layers, and a decoder path with transposed convolutions and skip connections. Loss functions include L1: Dice with Focal loss, L2: CAL (Context-Aware Loss), and L3: CAL with LSD (Local Structural Distance). Subsection (b3) presents the WingsNet architecture with general union objective functions, featuring multiple parallel Conv Blocks, pooling layers, transposed convolutions, and aggregation layers with 1×1×1 Conv + Softmax. Its loss functions are L4: General Union and L5: Breakage Sensitive.

Section (c) describes graph feature extraction from the binary airway. Starting from the binary airway tree, skeleton extraction is performed twice (likely for refinement or multi-scale analysis), leading to a graph representation where nodes represent branch points and edges represent airway segments. From this graph, 11 node-based features are extracted: Branch Generation; Relative x-, y-, z-axis positions; Intersection angles (x- and y-axis); Geodesic distance; Projected lengths along x-, y-, and z-axes. These features are listed in a box labeled 'Extracted Graph-node based Features'.

Section (d) details the Transformer model for hierarchical labeling. Input graph node features are fed into a series of Transformer blocks arranged hierarchically: first for lobar supervision, then segmental, then sub-segmental. Each block receives feature guidance from the previous level. Outputs are generated at each level: Output lobar bronchi, Output Segmental bronchi, and Output Subsegmental bronchi. A Soft Subtree Consistency (SSC) Module is integrated to enforce topological coherence between levels. The final output is a color-coded sub-segmental bronchial tree, with labels LB^l, LB^s, LB^ss indicating the hierarchical classification. Dashed arrows indicate feature guidance flow between Transformer blocks, while solid arrows denote data flow. The entire diagram uses consistent visual elements: rectangular blocks for modules, circular nodes for graph representations, and color-coded outputs for anatomical divisions.
