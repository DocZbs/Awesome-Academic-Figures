# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

HiGDA: Hierarchical Graph of Nodes to Learn Local-to-Global Topology for Semi-Supervised Domain Adaptation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11819

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hierarchical graph structure composed of two levels: a global graph G^(G) at the top and local graphs G^(L) beneath each global node. The global graph G^(G) is enclosed within a large dashed oval and contains four circular nodes labeled v₁^(G), v₂^(G), v₃^(G), and v₄^(G), representing distinct semantic categories: 'Airplane' and 'Clock'. Nodes v₁^(G) and v₂^(G) are connected by a solid green edge e₁,₂^(G), while v₃^(G) and v₄^(G) are connected by a solid purple edge e₃,₄^(G). Each global node is visually represented by an icon: v₁^(G) shows a red airplane with clouds, v₂^(G) a blue-and-white airplane, v₃^(G) a yellow alarm clock, and v₄^(G) a colorful digital-style clock. These icons are enclosed in thick circular borders—green for the airplane group and purple for the clock group.

Beneath each global node is a corresponding local graph G^(L), depicted as a dense network of smaller circular nodes connected by solid lines. For the airplane group, the local graphs are rendered in green; for the clock group, they are rendered in purple. Each local graph is rooted at a central node labeled v₁^(L) or v₁^(L) (for the second airplane graph), and expands into a tree-like structure with multiple layers of interconnected nodes. From each local graph, dashed lines radiate downward to a grid of small image patches. These patches represent sub-regions or features extracted from input images. For example, under v₁^(G), there are 16 patches forming a 4x4 grid, labeled collectively as v₁^(L) to v₁₆^(L), indicating that each patch corresponds to a local node in the graph. Similarly, the other local graphs connect to grids of patches relevant to their respective global categories.

Connections between global and local graphs are shown via dashed lines originating from each global node and converging onto the root nodes of their respective local graphs. These dashed lines indicate a hierarchical relationship where each global node supervises or aggregates information from its associated local graph. The visual distinction between green and purple elements clearly separates the two semantic classes, emphasizing the modular nature of the hierarchy. The overall layout follows a top-down flow: global concepts at the top, decomposed into local feature graphs below, which in turn are grounded in raw image patches. This structure reflects a multi-scale representation where high-level semantic nodes are built upon lower-level visual features, enabling fine-grained analysis while preserving category-level coherence.
