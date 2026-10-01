# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Computing Approximate Graph Edit Distance via Optimal Transport — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18857

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed GEDGW (Graph Edit Distance via Graph Wasserstein) method, designed to compute the graph edit distance between two graphs G¹ and G². The global layout is structured as a flowchart from left to right, beginning with input adjacency matrices and progressing through modeling stages to output predicted GED and coupling matrix.

On the far left, two adjacency matrices are shown: A¹ for G¹ with nodes u₁ to u₄, and A² for G² with nodes v₁ to v₄. Both matrices are represented as 4x4 grids; A¹ has light blue cells for edges among u₁–u₃ and pale yellow for u₄’s connections, while A² is uniformly light blue. These matrices feed into a subtraction operation symbolized by a circle with a minus sign, producing a discrepancy measure labeled 'Discrepancy Between Each Edge Pair' in a light blue rectangular box.

This discrepancy feeds into a central processing block enclosed by a red dashed rectangle, representing the core modeling pipeline. Inside this region, the discrepancy is first processed by a module labeled 'Modeled by GW' (Graph Wasserstein), depicted as a light blue rectangle. This module connects to another module labeled 'Modeled by OT' (Optimal Transport), shown in pink, which receives additional input from a node label matching matrix M. Matrix M is a 4x4 grid with rows labeled u₁–u₄ and columns v₁–v₄; it uses pink for most cells and a dark purple cell at position (u₃, v₄), indicating a match. Above M, a pink box specifies 'Operation: u₃ → v₄', linked by a dotted arrow to the purple cell, illustrating a node edit operation.

The outputs from both GW and OT modules converge into a central orange rectangular box labeled 'GEDGW', which represents the main computational engine. From GEDGW, two outputs emerge: one is a 4x4 grid labeled 'π̂: Coupling Matrix' in light blue, representing the learned correspondence between nodes; the other is a yellow rounded rectangle labeled 'Predicted GED', indicating the final computed graph edit distance.

Additional components include two boxes at the bottom: 'Edge Edit Operations' (light blue) connected to the discrepancy module via a dotted arrow, and 'Node Edit Operations' (pink) linked to the node matching matrix M. These represent the types of edits considered in the model. The entire diagram emphasizes the integration of edge-level discrepancies modeled via Graph Wasserstein and node-level matching via Optimal Transport to produce a unified GED prediction.
