# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a proposed layer fusion accelerator design pipeline, presented as a flowchart with a top-down sequential structure and one feedback loop. The global layout is vertical, starting from the top with an input node and progressing downward through a series of processing steps, culminating in the final output at the bottom left. The diagram consists of five rounded rectangular nodes connected by solid black arrows indicating the direction of data or control flow.

The first node at the top, labeled 'Network Configurations', serves as the initial input. It feeds into the second node, 'Calculate and select tile sizes', which receives an additional input from the right labeled 'Number of layers (Q) in fusion design'. This indicates that the tile size calculation depends on both the network configuration and the number of layers Q.

From 'Calculate and select tile sizes', the flow proceeds downward to 'Calculate largest tile strides (S^T) ensuring uniform movement'. This step computes the maximum possible stride values for tiles while maintaining uniform movement across the computation domain.

Next, the flow continues to 'Start and end index for tiles', which determines the boundaries or ranges for each tile based on the previously computed tile sizes and strides.

Finally, two arrows converge on the last node, 'Design (Q) accelerators', located at the bottom left. One arrow comes directly from 'Calculate and select tile sizes', suggesting that tile size information is used directly in accelerator design. The other arrow comes from 'Start and end index for tiles', indicating that tile boundary information also contributes to the design process. Additionally, there is a horizontal arrow branching from 'Calculate and select tile sizes' to 'Design (Q) accelerators', reinforcing that tile sizing is a primary input for accelerator design.

All nodes are uniformly styled with black borders and white backgrounds, using black sans-serif text. There are no colors or special shapes beyond the standard rounded rectangles. The connections are simple, straight or orthogonal black arrows with arrowheads pointing in the direction of flow. The diagram does not include any mathematical equations or LaTeX expressions within the nodes themselves, but the caption explicitly references 'Number of layers (Q)' and 'tile strides (S^T)', which are critical parameters in the design process. The overall workflow represents a systematic approach to designing accelerators for fused neural network layers, emphasizing tile-based computation planning.
