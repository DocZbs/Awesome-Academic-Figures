# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SP$^2$T: Sparse Proxy Attention for Dual-stream Point Transformer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11540

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the Sparse Proxy Attention (SPA) computation, divided into two main parts: (a) Sparse Attention Map and (b) Sparse Proxy Attention. The global layout is horizontal, with part (a) on the left illustrating the construction of an association tuple list from a sparse attention map, and part (b) on the right showing how this list is used to compute attention values via a parallelized, map-reduce style process.

In part (a), a 5x2 grid represents the sparse attention map, with rows labeled Q0 through Q4 (in salmon-colored cells) and columns labeled K0 and K1 (in light blue headers). Each cell contains a pair of indices representing query-key associations; empty or cross-hatched cells indicate zero or inactive attention. For example, Q2 has an active association with K0 at position (2,0), and Q4 with K1 at (4,1). A 'Flatten' operation converts this 2D map into a vertical list of non-zero association tuples, such as (0,0), (0,1), (1,1), (2,0), (3,1), (4,1), shown in a column of light purple boxes. This list is labeled 'Association Tuple List'.

Part (b) details the SPA computation. The association tuple list feeds into a multi-threaded processing stage, indicated by the label 'Multi thread (in parallel)' in red text. Each tuple, like (0,0) or (0,1), is processed independently. Dashed arrows from K0 and K1 headers point to the corresponding tuples, indicating key selection. Solid arrows from each tuple point to a corresponding value node (V0, V1, ..., V4) in a row of yellow boxes below, representing the output values. The process involves applying Softmax and Sum operations to the selected values, as indicated by the label 'Softmax & Sum' beneath the tuple processing stage. The final output is a sequence of computed values V0 through V4, aligned vertically with the original queries Q0 to Q4 on the far right, which are again shown in salmon-colored cells. Dotted lines connect the processed tuples back to their respective query positions, emphasizing the mapping from sparse attention to computed outputs. The entire process reflects a map-reduce paradigm where sparse associations are mapped to value computations and then reduced via Softmax and Sum to produce the final attention outputs.
