# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ProKAN: Progressive Stacking of Kolmogorov-Arnold Networks for Efficient Liver Segmentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19713

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure depicts the architecture of a Kolmogorov-Arnold Network (KAN) block, as used in the proKAN model. The overall layout is structured into four distinct vertical sections: Input Layer, Layer-1, Layer-2, and Output Layer, arranged from left to right. Each section is enclosed within a colored rectangular background—Input Layer and Output Layer in light beige, Layer-1 in light blue, and Layer-2 in light yellow—to visually separate the stages of computation.

In the Input Layer, five circular nodes with light green fill are vertically aligned, representing input features. These inputs feed into Layer-1 via straight gray arrows connecting each input node to a corresponding yellow circular node, which acts as an intermediate relay point.

Layer-1 contains multiple pink rectangular modules, each housing a wavy black curve symbolizing a learnable activation function (specifically B-splines). These modules are arranged in two vertical columns: one column receives direct connections from the yellow relay nodes, while the other column receives connections from the first column’s outputs. The outputs from these pink modules are aggregated through summation nodes (gray circles labeled with Σ), which then feed into blue square modules containing upward-curving activation functions. The outputs of these blue modules are passed to pink circular nodes, which serve as intermediate outputs for Layer-1.

These pink circular outputs from Layer-1 connect to Layer-2. Layer-2 mirrors the structure of Layer-1 but with more modules, indicating increased complexity and flexibility with depth. It consists of multiple pink rectangular modules with B-spline activation curves, arranged in two vertical columns. The first column receives inputs from the pink circular nodes of Layer-1, while the second column receives inputs from the first column. Outputs from the second column are summed via Σ nodes and fed into blue square modules with curved activation functions. These blue modules output to pink circular nodes, which then feed into the Output Layer.

The Output Layer comprises five vertically stacked pink circular nodes, each receiving input from one of the blue activation modules in Layer-2. These represent the final outputs of the KAN block.

Connections between modules are represented by solid lines of varying colors: gray for primary forward paths, brown for connections within Layer-1, and teal for connections from Layer-1 to Layer-2 and within Layer-2. The diagram emphasizes that every edge in the network is modeled by a learnable activation function, enabling flexible non-linear transformations. The increasing number of modules in Layer-2 compared to Layer-1 reflects the growing expressive capacity of deeper layers, facilitating modeling of complex relationships while preserving interpretability.
