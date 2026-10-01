# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TensorGRaD: Tensor Gradient Robust Decomposition for Memory-Efficient Neural Operator Training — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02379

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram illustrating three optimization methods: Standard AdamW, GaLore, and Tensor-Galore, focusing on how each handles gradient updates for tensor parameters. The global layout is structured horizontally from left to right, depicting the flow of gradient computation and parameter update across iterations. On the far left, a 3D cube labeled ∇θ_{i-1} represents the gradient tensor at iteration i-1. This tensor feeds into three parallel pathways corresponding to the three methods.

In the top pathway, 'Standard AdamW', the gradient tensor is directed to a module labeled 'Previous AdamW stored step', which contains two smaller cubes labeled m_{i-1} and v_{i-1}, representing momentum and variance states. These are then used in the next step, 'Compute update and store', where new m_i and v_i are computed. A 'Gradient update' arrow leads from this module to a final cube labeled θ_i, indicating the updated parameter tensor. An additional label 'Undo Reshape' points from the gradient update to θ_i, suggesting a reshaping operation is reversed during update.

The middle pathway, 'GaLore', begins with the same ∇θ_{i-1} tensor being reshaped into a tall rectangular matrix via a 'Reshape' operation. This matrix undergoes 'Low-rank projection', resulting in a compressed matrix. A note below this step reads '(info disproportionately lost from last modes)', indicating a potential drawback. The projected matrix is then processed by an 'AdamW' block (a rounded rectangle), followed by a 'Project back' step to restore the original shape before applying the 'Gradient update' to θ_i.

The bottom pathway, 'Tensor-Galore', starts with ∇θ_{i-1} undergoing 'Tucker decomp. and rank truncation', decomposing it into core tensor and factor matrices. The core tensor is discarded, while the factor matrices are used in a 'Low-rank projection by tensor contraction' step, producing a compact tensor. This tensor is then passed through an 'AdamW' block, followed by a 'Project back' step to reconstruct the full tensor, which is finally applied as a 'Gradient update' to θ_i.

Visual modules include 3D cubes for tensors, rectangular matrices for reshaped data, and rounded rectangles for the AdamW optimizer. Colors are consistent: light blue for tensors/matrices, gray for optimizer blocks. Arrows indicate data flow, with labels specifying operations like 'Reshape', 'Project back', or 'Gradient update'. The diagram emphasizes that Tensor-Galore preserves multidimensional structure through tensor decomposition, unlike GaLore’s matrix-based approach, which may lose information from higher modes.
