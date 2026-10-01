# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Benchmarking and Understanding Compositional Relational Reasoning of LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12841

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two types of intervention methods applied to an attention matrix within a transformer-based model, labeled as (a) weak intervention and (b) strong intervention. The global layout consists of two horizontal rows, each representing one intervention type. Each row contains three main components: an original attention matrix on the left, a modified attention matrix in the center, and the resulting updated attention matrix on the right, connected by arrows indicating the transformation process.

In both rows, the attention matrices are displayed as grids with rows and columns corresponding to tokens in the input sequence: '<s>', '_Apple', '_is', '_a', '_kind', '_of', '_fruit'. The values in the matrices represent attention weights, with decimal numbers ranging from 0.00 to 1.00. The token '_of' is highlighted in yellow in the original matrices, indicating it is the target of intervention.

In part (a), 'weak intervention', the central component is a gray box labeled 'Attention matrix for other heads', which contains only the row corresponding to the '_of' token, highlighted in cyan. This row is shown being replaced into the original matrix, replacing the yellow-highlighted row. The resulting matrix on the right shows the updated attention weights for the '_of' token, with the cyan row now integrated into the original matrix, while all other rows remain unchanged.

In part (b), 'strong intervention', the central component is a gray box labeled 'Manually-generated attention matrix', again showing only the row for '_of', but this time highlighted in red. The values in this row are [0.00, 1.00, 0.00, 0.00, 0.00, 0.00, 0.00], indicating a complete focus on the second token ('_Apple'). This row replaces the original yellow-highlighted row in the left matrix, producing the final matrix on the right, where the '_of' token now exclusively attends to '_Apple'.

Arrows indicate the flow of information: a thick black arrow points from the central modified row to the left matrix, and a double black equals sign connects the central row to the right matrix, symbolizing replacement or assignment. The figure visually demonstrates how selectively modifying a single row in the attention matrix—either by using a learned or manually crafted version—can alter the model’s behavior, with 'weak' intervention preserving some original context and 'strong' intervention enforcing a specific, deterministic attention pattern.
