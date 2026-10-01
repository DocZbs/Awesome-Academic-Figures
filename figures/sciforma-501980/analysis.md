# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Registration in 30 Years: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13735

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a multi-view registration approach based on low-rank matrix decomposition. The global layout is structured in two horizontal rows connected by feedback loops. The top row represents the pairwise registration and global motion estimation phase, while the bottom row details the matrix reconstruction and decomposition process. The entire workflow is cyclic, with arrows indicating iterative refinement between stages.

In the top row, the left box labeled 'Pair-wise registration' contains a network diagram where each blue dot represents a range scan, and lines with arrows denote relative motions between scans. A single red dot indicates the reference scan anchored to the global coordinate system. This module feeds into the 'Global motions' box on the right, which shows a central red dot (the global reference) connected via arrows to surrounding blue dots (other scans), symbolizing estimated global transformations M_i and M_j. A bidirectional curved arrow labeled M_ij = M_i^{-1}M_j connects these two boxes, representing the relationship between relative and global motions.

The bottom row begins with a 'Reconstructed sparse matrix' box, displaying a black-and-white grid where black squares indicate unobserved relative motions, white squares represent highly reliable ones, and grey shades denote varying reliability levels. This matrix is processed through a 'Completion' step, resulting in a 'Matrix with Completion' box showing a similar grid but with more filled-in grey values, indicating imputed data. The next stage, 'Weighted LRS decomposition', outputs a 'Decomposed low-rank matrix' box, which features a grid with a distinct red row at the top, highlighting block elements used for recovering global motions.

Connections between modules are shown using solid green arrows: from 'Pair-wise registration' to 'Reconstructed sparse matrix', then sequentially through 'Completion' and 'Weighted LRS decomposition' to 'Decomposed low-rank matrix'. A green arrow labeled 'Recovery' points upward from the decomposed matrix to the 'Global motions' box, closing the loop. Additionally, a large curved green arrow connects the 'Global motions' box back to 'Pair-wise registration', indicating an iterative refinement process. The figure caption explains that the red dot in the top row denotes the global reference scan, and in the bottom row, the grey scale in the matrices reflects reliability, with black being unobserved and white being very reliable. The red row in the final matrix corresponds to block elements used for global motion recovery.
