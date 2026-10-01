# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CoEvo: Continual Evolution of Symbolic Solutions Using Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18890

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hierarchical evolutionary framework for offspring improvement, integrating a knowledge library to enable reuse and enhancement across multiple levels. The global layout is divided into two main regions: on the left, a vertical sequence of processing stages labeled Level 0 through Level k, and on the right, a rectangular 'Knowledge Library' containing organized clusters of ideas. A large red boundary encloses the entire left-side process, emphasizing the scope of the evolutionary pipeline.

At the top of the left side, three initial parent solutions, denoted as p₀ and p₁ (in light purple rounded rectangles), feed into three distinct genetic operators: Crossover (light green), Mutation (light peach), and Initialization (light blue). These operators produce offspring that are then processed sequentially through a hierarchy of levels: Level 0, Level 1, ..., Level k, each represented by a light purple rounded rectangle. These levels form a vertical chain, connected by black downward arrows indicating progression.

On the right, the Knowledge Library is depicted as a beige rounded rectangle containing multiple idea clusters. Each cluster (e.g., Cluster 0, Cluster K) consists of stacked light blue or light green rounded rectangles labeled 'Idea', visually representing stored knowledge. The clusters are vertically arranged with ellipses between them to indicate intermediate clusters.

Connections and arrows define the flow and interaction: Black arrows from the operators point to Level 0, initiating the level-wise evolution. Green arrows labeled 'Random Reuse' and 'Similarity-based Reuse' originate from the Knowledge Library and point to Level 0, Level 1, and Level k respectively, indicating that knowledge is retrieved and applied at each level. Specifically, Level 0 receives 'Random Reuse', while Levels 1 through k receive 'Similarity-based Reuse'.

Red arrows form feedback loops: one thick red arrow originates from the top of the left-side process (Offspring Improvement) and points to the Knowledge Library, signifying the addition of new knowledge. Another red arrow starts from the bottom of the level hierarchy (Cross-Level Improvement) and also points to the Knowledge Library, indicating that improvements across levels contribute to knowledge accumulation. These red arrows, as noted in the caption, represent the addition of knowledge to the library, while the green arrows denote reuse.

The overall structure suggests an iterative evolutionary process where offspring are improved through genetic operations and hierarchical refinement, with knowledge being both consumed (via reuse) and produced (via improvement) in a continuous cycle with the external knowledge library.
