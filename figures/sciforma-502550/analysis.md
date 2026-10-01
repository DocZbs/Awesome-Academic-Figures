# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ReMoE: Fully Differentiable Mixture-of-Experts with ReLU Routing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14711

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel computational architectures side-by-side: 'TopK Routing' on the left and 'ReLU Routing' on the right, each enclosed in a dashed blue rectangular boundary. Both diagrams illustrate the routing mechanism within a Mixture-of-Experts (MoE) framework, showing how input tokens are processed through multiple experts and combined into output tokens.

In both diagrams, the top and bottom sections represent processing for two example tokens: 'Token 1' and 'Token T', depicted as light yellow rounded rectangles. Each token undergoes a 'projection' step, indicated by an upward arrow from the token to a horizontal bar containing four numerical values (e.g., .42, -.46, .05, .01 for Token 1; -.75, .81, -.59, -.40 for Token T). These values represent the projected logits or scores for routing decisions.

In the 'TopK Routing' diagram, these projected values are passed through a 'Softmax' operation, converting them into probabilities (e.g., .36, .15, .25, .24 for Token 1; .12, .57, .14, .17 for Token T), displayed in colored boxes where positive values are orange and negative values are blue, with intensity reflecting magnitude. A 'TopK' operation then selects the K largest values (here, K=2), zeroing out the rest, as shown by the red dashed arrow leading to a new vector with only two non-zero entries (e.g., .36, 0, .25, 0). This selection process is explicitly marked as discontinuous due to the red dashed arrow. The resulting weights are then used to route the token to the corresponding experts—four green rounded rectangles labeled 'Expert 1' through 'Expert 4'. Each token connects to all experts via black arrows, and the outputs from the experts are aggregated back to the original token position using a 'multiply and add' operation, indicated by downward arrows.

In the 'ReLU Routing' diagram, the same projected values are passed through a 'ReLU' activation function instead of Softmax. This sets all negative values to zero, producing a sparse weight vector (e.g., .42, 0, .05, .01 for Token 1; 0, .81, 0, 0 for Token T). Unlike TopK, this operation is continuous and differentiable. The resulting weights are then used to route the token to the experts in the same manner as in TopK routing: each token connects to all experts, and expert outputs are combined via 'multiply and add' to produce the final token output.

Both diagrams emphasize sparsity through white boxes representing zero values, which indicate computation savings. The key difference highlighted is that ReLU routing enables full differentiability of the compute flow, whereas TopK routing introduces discontinuities due to the hard selection of top-K experts. The figure visually contrasts these mechanisms using consistent color coding (orange for positive, blue for negative, white for zero) and identical structural layout to facilitate direct comparison.
