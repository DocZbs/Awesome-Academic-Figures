# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Sonicmesh: Enhancing 3D Human Mesh Reconstruction in Vision-Impaired Environments With Acoustic Signals — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11325

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Registration Module designed to align 2D joint data from an image space with 3D joint data from a canonical 3D space. The layout is horizontally oriented with two parallel processing streams: one for 2D space inputs and another for Canonical 3D space inputs, both converging at a shared loss computation stage.

In the top stream, labeled '2D space', a dark blue rectangular box labeled '2D joints' serves as the input. This is connected via a solid black arrow to a light blue rounded rectangle labeled 'CNN', representing a convolutional neural network. The output of the CNN is passed to a tan-colored rectangular box labeled 'Pixel Embedding'.

In the bottom stream, labeled 'Canonical 3D space', a red-bordered rounded rectangle labeled '3D joints' acts as the input. This connects via a solid black arrow to a tan-colored trapezoid labeled 'MLP', indicating a multi-layer perceptron. The MLP's output feeds into a blue rounded rectangle labeled 'Canonical Embedding'.

Both embedding outputs — 'Pixel Embedding' and 'Canonical Embedding' — are directed via separate arrows to a green rounded rectangle labeled 'LOSS', which represents the loss function used to compute the discrepancy between the two embeddings during training. The arrows indicate a unidirectional flow of information from inputs through the respective networks to the final loss computation. There are no feedback loops or bidirectional connections shown. The diagram uses distinct shapes and colors to differentiate components: rectangles for data inputs and embeddings, rounded rectangles for neural network modules and loss, and a trapezoid for the MLP. All text labels are in black, sans-serif font, and positioned centrally within their respective boxes. The overall structure emphasizes a dual-path registration framework where 2D and 3D joint representations are independently embedded and then compared in a common latent space via a loss function.
