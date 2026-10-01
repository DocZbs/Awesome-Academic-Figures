# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Titans: Learning to Memorize at Test Time — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00663

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a parallelized training methodology for neural memory systems, structured into three main vertical sections separated by dashed lines, each representing a distinct computational stage: Linear Within-Chunk, Non-Linear Cross-Chunk, Momentum Calculation, and Weight Decay. The global layout is horizontal, progressing from left to right, with each section containing visual modules, mathematical expressions, and descriptive labels to explain the underlying operations.

In the first section, 'Linear Within-Chunk', a sequence of five dark gray rectangular blocks is shown, with the last block highlighted in red. Above this sequence, four orange curved arrows point from left to right, indicating a cumulative summation operation. Below, a light gray rounded rectangle contains the text 'via cumsum', specifying the computational method used. This section represents a linear accumulation process within a data chunk.

Adjacent to it, the second section, 'Non-Linear Cross-Chunk', displays an identical sequence of five blocks (four dark gray, one red). Above, multiple dashed green arrows curve from the last block of the first sequence to various positions in the second sequence, symbolizing non-linear gradient-based interactions across chunks. Below, a light gray box states 'via Gradient', indicating the mechanism for cross-chunk computation.

The third section, 'Momentum Calculation', is introduced with a header and a sub-caption: 'All gradients are pre-computed'. It presents two alternative methods. On the left, a sequence of five blocks (same color scheme) has red curved arrows above, labeled 'Parallel Associative Sum'. On the right, the same block sequence is shown above a white rectangular block of five smaller cubes, with a large asterisk between them, labeled 'Global Kernel'. This suggests a matrix multiplication operation between the gradient sequence and a global kernel.

The final section, 'Weight Decay', is enclosed in a large light gray rounded rectangle. It contains two mathematical expressions: 'W/o Decay' followed by '(W₀X - X)Xᵀ', and 'W/ Decay' followed by 'Θ_bB_b(W₀X - X)Xᵀ'. A large orange curved arrow points downward from the decayed expression to a lower light gray box labeled 'via Matmul', indicating that both cases are computed using matrix multiplication. This section highlights the optional application of weight decay during the update step.

The entire diagram uses consistent visual elements: dark gray and red blocks represent data or gradient sequences, colored arrows indicate operations, and light gray boxes provide textual explanations. The flow is left-to-right, showing a progression from intra-chunk linear operations, to inter-chunk non-linear gradients, to momentum computation via associative sum or global kernel, and finally to weight decay applied through matrix multiplication.
