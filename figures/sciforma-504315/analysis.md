# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SlimGPT: Layer-wise Structured Pruning for Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18110

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a methodological pipeline for batched greedy pruning of attention blocks in neural networks, focusing on the interaction between the output weight matrix W and the inverse Hessian matrix H⁻¹. The global layout is structured vertically into a sequence of processing stages, with two main parallel components: the left side processes the weight matrix W through column reordering, iterative decomposition, and restoration, while the right side shows the corresponding transformation of H⁻¹. The top row displays the initial matrices: W is a 3x9 grid partitioned into three attention heads (head 0, head 1, head 2), each represented by a distinct color—light blue, light green, and light yellow respectively—with numerical values indicating weight magnitudes. Adjacent to it, H⁻¹ is shown as a sparse 7x7 matrix with non-zero entries in specific positions, also color-coded to match the attention heads. A dashed arrow from H⁻¹ to the 'Column Reorder' step indicates that the structure of H⁻¹ guides the reordering of columns in W. After reordering, the matrix W is rearranged such that columns associated with the same head are grouped together, and a red label 'to be pruned' highlights the target columns for elimination. The central part of the figure contains a dotted box labeled 'Grouped Cholesky Decomposition', which shows three successive iterations of a decomposition process. Each iteration is represented by a 3x9 matrix with increasing numbers of zeros introduced along the leftmost columns, simulating the progressive pruning effect. Blue curved arrows above each matrix indicate the iterative nature of the decomposition, where each step updates the matrix based on the previous one. On the right, the 'Reordered H⁻¹' matrix is shown with its non-zero elements now aligned with the reordered structure, followed by a 'Cholesky Decomposition' step that further refines the matrix. At the bottom, the 'Column Restore' step reconstructs the final pruned W matrix, where the pruned columns (now zeroed out) are restored to their original positions, resulting in a matrix with zeros in the pruned locations. A separate dotted box at the bottom right labeled 'Compensate' with blue curved arrows suggests a final compensation step to adjust for the pruning effects. The entire process emphasizes how the sparsity pattern in H⁻¹ informs the pruning strategy, ensuring that the most impactful weights are retained while others are systematically removed. The figure uses consistent color coding for attention heads, gray for pruned weights, and clear directional arrows to illustrate the data flow and transformation steps.
