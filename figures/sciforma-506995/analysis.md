# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Decision-Based Heterogenous Graph Attention Network for Multi-Class Fake News Detection — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03290

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dynamic neighborhood selection mechanism in a heterogeneous graph, demonstrating how nodes adaptively choose different edge types for embedding updates across multiple layers. The global layout consists of a network of eight circular nodes labeled A through H, connected by solid and dashed lines representing distinct edge types. Two overlapping, irregularly shaped regions—colored blue and green—enclose subsets of these nodes, visually demarcating different neighborhoods or influence scopes. The blue region encloses nodes G, B, H, and partially overlaps with node A, while the green region encloses nodes C, D, F, and also partially overlaps with node A. Node A is centrally located at the intersection of both regions, emphasizing its role as a focal point for dynamic selection. Nodes are represented as white circles with black borders and bold uppercase labels inside. Edges are depicted as black lines: solid lines indicate one type of connection (e.g., e2), and dashed lines represent another (e.g., e1). On the right side of the diagram, a legend clarifies the edge types: a dashed line is labeled 'e1' and a solid line is labeled 'e2'. The connections show that node A is linked via dashed edges to nodes C and D (edge type e1), and via a solid edge to node B (edge type e2). Node B connects to G and H via solid edges, and G and H are also connected by a dashed edge. Nodes C and E are connected by a solid edge, and E connects to F via a solid edge. Node D connects to F via a solid edge. The figure’s structure supports two scenarios: in Scenario 1, nodes A and B independently select different edge types (e1 and e2) to update their embeddings; in Scenario 2, node A dynamically selects different edge types across multiple layers to optimize its embedding update. The visual design uses color-coded regions to highlight the dynamic nature of neighborhood selection, with the overlapping areas suggesting context-aware aggregation from multiple sources.
