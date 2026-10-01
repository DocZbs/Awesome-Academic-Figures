# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NoiseHGNN: Synthesized Similarity Graph-Based Neural Network For Noised Heterogeneous Graph Representation Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18267

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the behavior of a graph correction method under homogeneity and heterogeneity assumptions, using two parallel workflows labeled (a) Homogeneous Graph and (b) Heterogeneous Graph. Each workflow is divided into three stages: Noise Graph, Similarity Graph, and Corrected Graph, connected by blue rightward arrows indicating progression.

In section (a), the Homogeneous Graph begins with four green circular nodes labeled P1, P2, P3, and P4 arranged in a square-like structure. A solid black edge connects P1–P3 and P1–P2, while a red diagonal line labeled 'error link' connects P1–P4, indicating an erroneous connection. The middle stage, Similarity Graph, shows the same four nodes with dashed lines representing similarity scores: 0.9 between P1–P3, 0.8 between P1–P2, 0.03 between P1–P4, and 0.01 between P2–P4 and P3–P4. These values are written in red near the respective dashed edges. The final stage, Corrected Graph, displays the original correct structure with solid black edges between P1–P3 and P1–P2, and a green checkmark next to the P1–P3 edge, signifying successful correction.

Section (b) presents the Heterogeneous Graph, which includes the same four green circular nodes (P1–P4) plus a central blue diamond-shaped node labeled A1, representing a different type of entity. In the Noise Graph, solid black edges connect P1–A1, A1–P3, and A1–P2, while a red 'error link' connects A1–P4. The Similarity Graph stage mirrors the one in (a), showing the same similarity scores (0.9, 0.8, 0.03, 0.01) on dashed red lines between the P-nodes, with no similarity values shown for connections involving A1. The Corrected Graph stage shows the original structure with solid black edges between P1–A1, A1–P3, and A1–P2, but now with large red 'X' marks over the edges P1–P3, A1–P4, and P2–P4, indicating these links were incorrectly retained or not properly removed, demonstrating failure of the correction method under heterogeneity.

The figure uses consistent visual attributes: green circles for P-nodes, blue diamonds for A1, solid black lines for correct/initial edges, red dashed lines for similarity scores, red 'error link' labels for incorrect connections, and red 'X' marks for failed corrections. The global layout is a two-row, three-column grid, with each row representing a graph type and each column a processing stage. The caption emphasizes that the homogeneity assumption enables successful correction in homogeneous graphs but fails in heterogeneous ones.
