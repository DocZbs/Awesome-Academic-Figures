# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Reconstruction Target Matters in Masked Image Modeling for Cross-Domain Few-Shot Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19101

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comparison between two attention mechanisms: a standard query-key (Q-K) attention on the left and a proposed lightweight decoder (LD) on the right, separated by a vertical dashed line. The global layout is split into two parallel workflows, each depicting the computation of attention weights and output via matrix multiplication.

On the left side, the standard attention mechanism begins with three input matrices labeled Q (query), K (key), and V (value). Q is represented as a vertical stack of four purple rectangular blocks, K as a horizontal row of four pink blocks above a 4x4 grid of gray blocks, and V as a vertical column of four gray blocks extending downward. These inputs are enclosed within a black dashed rounded rectangle. An arrow from K points to a SoftMax operation, which is depicted as a rounded rectangle. The output of SoftMax feeds into a MatMul (matrix multiplication) block, also a rounded rectangle, which then produces the final output. Additionally, an arrow from V bypasses the SoftMax and connects directly to the MatMul block, indicating that V is used as one operand in the matrix multiplication.

On the right side, the lightweight decoder (LD) replaces the Q-K dot product with a cosine similarity computation. The input V is again shown as a vertical column of four gray blocks. The query and key components are replaced by a set of light blue blocks: four horizontal blocks at the top and four vertical blocks on the left, forming a cross-like structure. These are enclosed within a teal dashed rounded rectangle, with the label 'cosine similarity' written inside. The output of this cosine similarity computation flows into a SoftMax block, followed by a MatMul block, mirroring the structure on the left. The V input also connects directly to the MatMul block, consistent with the left-side design.

All arrows are solid gray lines with filled arrowheads, indicating the direction of data flow. The SoftMax and MatMul operations are consistently represented as white rounded rectangles with black borders. The figure visually emphasizes the reduction in complexity by replacing the Q-K matrix multiplication with a simpler cosine similarity calculation, aligning with the caption's claim of reduced computational cost while preserving effective relationship capture.
