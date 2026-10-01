# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FineGates: LLMs Finetuning with Compression using Stochastic Gates — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12951

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two versions of a neural network adaptation method, each divided into three stages: Training, Inference, and Post-training. The layout is split horizontally into two main sections labeled (a) and (b), corresponding to the two versions described in the caption.

In section (a), the first version, the Training stage shows a computational graph where an input vector x (purple) is multiplied by a weight matrix W̄ (blue grid), which is computed as ω_r · (W₀ + W_B·W_A) · ω_c. Here, W₀ is a base weight matrix (light green grid), W_B (orange grid) and W_A (yellow grid) are additional trainable adaptor matrices. The gate vectors ω_r (gray column) and ω_c (gray column) are applied as row and column scaling factors. Dashed outlines indicate pruned elements. Below this, equations define ω_l = max(0, min(1, μ_l + ε_l)) and ω_r = max(0, min(1, μ_r + ε_r)), indicating soft gating via trainable parameters μ and small perturbations ε. The Inference stage shows the pruned W̄ matrix (blue grid with dashed borders) multiplying x. The Post-training stage illustrates the final pruned weight matrix W̄ (blue grid with dashed borders) being decomposed into the product of ω_r, (W₀ + W_B·W_A), and ω_c, with the same color-coding and pruning indicators.

In section (b), the simplified version, the Training stage is similar but omits W_B and W_A. Instead, it uses only the gate vectors ω_l and ω_r to scale W₀ directly. The equations below remain the same, emphasizing that the gates alone control sparsity. The Inference stage again shows the pruned W̄ matrix multiplying x. The Post-training stage shows W̄ decomposed into ω_r · W₀ · ω_c, with W₀ unchanged from training and the gates applied as before.

Visually, all matrices are represented as grids with distinct colors: light green for W₀, orange for W_B, yellow for W_A, blue for W̄, and gray for gate vectors. Pruned elements are marked with dashed outlines. All components are aligned horizontally within each stage, with multiplication operations indicated by dots between matrices and vectors. The overall structure emphasizes a modular, step-by-step workflow from training through inference to post-training weight reconstruction, highlighting how structured sparsity is enforced via trainable gate vectors.
