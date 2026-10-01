# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DOFEN: Deep Oblivious Forest ENsemble — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16534

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-stage pipeline for constructing a relaxed ODT (rODT) forest from raw input data, divided into three main sections labeled (a) Condition Generation, (b) Relaxed ODT Construction, and (c) Relaxed ODT Forest Construction.

[1] Global Layout and Structure:
The diagram is horizontally organized into three sequential stages, progressing from left to right. Each stage is clearly demarcated and labeled at the bottom. The entire process begins with raw input data on the far left and ends with a set of weighted embeddings on the far right. The flow is linear, with transformations and operations indicated by arrows connecting components across stages.

[2] Visual Modules and Attributes:
Stage (a) Condition Generation: On the left, a vertical stack of three colored rectangles represents the raw input vector \(\vec{x}_i\), with elements \(x_{i1}\) (red), \(x_{i2}\) (yellow), and \(x_{i3}\) (green), grouped under \(N_{col}\). Each element is connected via a solid arrow to a corresponding sub-network \(\Delta_{1j}\) (j=1,2,3), which generates a row of \(N_{cond}\) condition values. These are arranged in a 3×4 grid forming matrix \(\mathbf{M}_i\), where each cell contains a condition like \(\mathbf{m}_{i11}\), \(\mathbf{m}_{i21}\), etc., with colors matching the input source (red, yellow, green).

Stage (b) Relaxed ODT Construction: Matrix \(\mathbf{M}_i\) is transformed via a 'Permutation and reshape with \(\pi\)' operation, indicated by a curved arrow and label. This reshapes the matrix into \(\mathbf{O}_i\), a 6×2 matrix where each column represents a relaxed ODT. The entries in \(\mathbf{O}_i\) retain the same color-coding as in \(\mathbf{M}_i\), indicating their origin. The matrix has dimensions \(N_{rODT} = 6\) rows and depth \(d = 2\), as labeled below.

Stage (c) Relaxed ODT Forest Construction: Each row of \(\mathbf{O}_i\) is fed into a separate sub-network \(\Delta_{2j}\) (j=1 to 6), producing a weight \(w_{ij}\) in a vertical stack labeled \(\vec{w}_i\). The weights are color-coded to match their originating ODT row. Adjacent to this stack is another vertical stack labeled \(\mathbf{E}\), containing embedding vectors \(\vec{e}_1\) to \(\vec{e}_6\), also color-coded to match the corresponding weights. Dashed lines labeled 'paired' connect each \(w_{ij}\) to its corresponding \(\vec{e}_j\).

[3] Connections and Arrows:
Solid arrows indicate direct data flow: from raw input to condition generation, from \(\mathbf{M}_i\) to \(\mathbf{O}_i\) via permutation/reshape, and from each row of \(\mathbf{O}_i\) to its respective \(\Delta_{2j}\) sub-network. The outputs of these sub-networks are directed to the \(\vec{w}_i\) stack. Dashed lines labeled 'paired' link each weight \(w_{ij}\) to its associated embedding \(\vec{e}_j\), indicating a structural pairing rather than a computational flow. The entire process is encapsulated within the three labeled stages, with clear visual separation between them.
