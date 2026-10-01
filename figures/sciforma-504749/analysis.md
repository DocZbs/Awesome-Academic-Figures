# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Computing Approximate Graph Edit Distance via Optimal Transport — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18857

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a case study for Graph Edit Distance via Graph Wasserstein (GEDGW), depicting a computational framework for estimating the graph edit distance (GED) between two graphs, G¹ and G². The global layout is structured as a top-down flow: input data (adjacency matrices, feature matrices, and node label matching matrix) are processed through separate modules for edge and node edit operations, which then converge into a central coupling module (CG) to produce the predicted GED.

At the top left, the adjacency matrix A¹ of G¹ is shown as a 5x5 binary matrix with nodes u₁ to u₅; the row and column corresponding to u₅ are highlighted in beige, indicating its special status or potential deletion. Adjacent to it is the visual representation of G¹, a graph with five nodes: u₁ (blue, labeled 'N'), u₂, u₃, u₄ (all orange, labeled 'O'), and u₅ (dashed circle, also labeled 'O'). Solid black edges connect u₁ to u₂, u₃, and u₄. Below this, the adjacency matrix A² of G² is displayed as another 5x5 binary matrix with nodes v₁ to v₅. Its corresponding graph G² is shown with nodes v₁, v₂, v₄ (gray, labeled 'C') and v₃, v₅ (orange, labeled 'O'). Edges connect v₁-v₂, v₂-v₃, v₂-v₄, and v₄-v₅. Dashed red lines connect nodes from G¹ to G², suggesting potential mappings: u₁ to v₂, u₂ to v₁, u₃ to v₃, u₄ to v₄, and u₅ to v₅.

To the right of the graphs, feature matrices are presented. For G¹, a 4x3 matrix (excluding u₅) shows features N, O, C for nodes u₁ to u₄. For G², a 5x3 matrix shows features for v₁ to v₅. These are linked by dotted lines to the Node Label Matching Matrix M, a 5x5 matrix where rows correspond to u₁ to u₅ and columns to v₁ to v₅. Entries are 1 if the node labels match (e.g., u₁ matches all vᵢ since it's 'N' and others are 'O' or 'C', but the matrix shows 1s for u₁ across all vᵢ, while u₂-u₄ show 1s only for v₁-v₄, and u₅ has all 1s). The row for u₅ is highlighted in beige.

Below the input matrices, two parallel processing streams are shown. The left stream, labeled 'Edge Edit Operations' (light blue box), takes the difference between A¹ and A² (indicated by a minus sign symbol) and processes it through a module 'Modeled by GW' (Graph Wasserstein), which outputs to the central 'CG' (Coupling Generator) module (peach-colored box). The right stream, labeled 'Node Edit Operations' (light purple box), processes the node label matching matrix M through a module 'Modeled by OT' (Optimal Transport), also feeding into CG.

The CG module integrates both streams and outputs the 'Predicted GED' (rounded peach box). Additionally, CG produces the 'Coupling Matrix π̂', a 4x5 matrix (rows u₁ to u₄, columns v₁ to v₅) with real-valued entries (e.g., 0.00, 1.00, 0.46, 0.51, 0.03), representing the learned soft assignment between nodes of G¹ and G². The matrix uses color coding: cells with higher values (like 1.00) are darker orange, while lower values (like 0.00) are lighter beige, visually indicating the strength of coupling.
