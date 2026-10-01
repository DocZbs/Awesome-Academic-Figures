# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

V"Mean"ba: Visual State Space Models only need 1 hidden dimension — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16602

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the VMeanba block, a modified version of the selective scan operation designed to reduce computational complexity by lowering the channel dimension before performing the scan. The global layout is divided into two main sections: on the left, the input and output patch processing via Cross Scan and Cross Merge operations; on the right, the core VMeanba block architecture enclosed in a yellow rectangular container labeled 'VMeanba block'.

On the left side, the top row shows 'input patches'—a small image of a coiled snake—feeding into a 'Cross Scan' module. This module displays a grid of patches with indices like 00, 01, 02, etc., arranged in a 4x4 pattern, illustrating how patches are scanned in a cross-shaped pattern (indicated by red arrows connecting green circles). The scanned patches are then passed to the VMeanba block. Similarly, the bottom row shows 'output patches', also featuring the snake image, which are generated through a 'Cross Merge' module using the same patch grid and cross-pattern scanning, but in reverse order to reconstruct the output.

The central VMeanba block contains several functional modules. At the top-left, an 'Embedding' layer (blue rectangle) outputs parameters A and D. Below it, two 'Linear' layers (also blue rectangles) produce parameters Δ and B, C respectively. These parameters feed into a 'Discretization' module (blue rectangle), which processes them further. From this point, the flow splits into two parallel pink rectangular blocks on the right: 'Mean (T)' and 'Copy and Stack (T⁻¹)'. The 'Mean (T)' block reduces the channel dimension from D to a smaller set (labeled L₁, L₂, L₃), visually represented by stacked blue and cyan rectangles, with a red curved bracket indicating the channel reduction. The 'Copy and Stack (T⁻¹)' block performs the inverse operation, expanding the reduced channels back to the original dimension D, again shown with stacked rectangles and a red bracket.

A large green rectangle labeled 'Scan Operation' sits at the center-bottom of the VMeanba block, receiving input u and producing output y. This green block represents the primary optimized component, as noted in the caption. Arrows indicate that the discretized parameters and the transformed channel data from 'Mean (T)' feed into the Scan Operation, while the output y is sent to the 'Copy and Stack (T⁻¹)' block for reconstruction.

Connections between modules are shown with black arrows. The input patches connect to the Cross Scan module, which feeds into the VMeanba block’s embedding and linear layers. The output from the Scan Operation connects to both the Copy and Stack block and the Cross Merge module, which generates the final output patches. The red brackets in the pink blocks highlight the proposed VMeanba components responsible for channel dimensionality reduction and restoration, distinguishing them from the original blue and green components. The entire diagram illustrates a forward pass where input patches are processed through a dimension-reduced scan operation and reconstructed into output patches, emphasizing efficiency gains through the VMeanba transformation T and its inverse T⁻¹.
