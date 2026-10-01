# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Qinco2: Vector Compression and Search with Improved Implicit Neural Codebooks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03078

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the encoding process of a model called \Qtwo{} at step $m$, structured as a parallel processing pipeline with beam search and candidate selection. The global layout is horizontal, progressing from left to right, with vertical stacking of identical processing branches for each beam. On the far left, a gray rounded rectangle labeled $C^m$ represents a codebook or context module, feeding into multiple parallel processing streams. Below it, $B$ vertical gray bars represent the current beam search hypotheses, denoted as $\hat{\mathbf{x}}_1^{m-1}, \dots, \hat{\mathbf{x}}_B^{m-1}$, each serving as input to an individual processing branch.

Each branch begins by combining the current hypothesis with $A$ pre-selected candidates, indicated by a rectangular box labeled "A candidates". A dashed arrow from below this box points upward, accompanied by the caption "Keep A candidates for each beam", emphasizing that these candidates are selected per beam. These candidates then pass through a gray rectangular block with horizontal stripes, symbolizing a transformation or embedding layer. The output of this layer feeds into a white rectangular box labeled $f_{\theta^m}(\cdot)$, representing a learned function parameterized by $\theta^m$, likely a neural network component responsible for computing codebook elements or reconstruction scores.

The outputs from all $B$ branches converge into a large dashed rectangular grid on the right, labeled "A × B reconstruction candidates", indicating that each of the $B$ beams generates $A$ reconstructions, resulting in a total of $A \times B$ candidates. From this pool, the top $B$ reconstructions are selected, as indicated by the caption "Keep B reconstructions" beneath the grid. These selected reconstructions are then passed forward as the new beam hypotheses for the next step, represented by $\hat{\mathbf{x}}_1^m, \dots, \hat{\mathbf{x}}_B^m$, shown as vertical gray bars on the far right.

Connections are depicted using solid black arrows, showing the flow of data from inputs to outputs. Dashed lines indicate auxiliary relationships or selection criteria, such as the dashed arrow pointing to the "A candidates" box and the dashed grid representing the intermediate candidate pool. The overall structure emphasizes a beam search mechanism where each hypothesis is expanded with multiple candidates, processed through a shared function $f_{\theta^m}$, and then pruned back to $B$ best candidates for the next iteration.
