# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MixGCN: Scalable GCN Training by Mixture of Parallelism and Mixture of Accelerators — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01951

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative illustration of two graph neural network (GNN) parallelization strategies: partition parallelism and the proposed MixGCN, structured into three main panels labeled (a), (b), and (c).

Panel (a), titled 'An input graph,' displays a simple undirected graph with six nodes numbered 1 through 6, connected by edges. Each node is represented as a black circle with its number inside. Adjacent to each node is a small rectangular icon symbolizing its feature vector. To the right of the graph, a vertical bracket encloses a list of feature variables x₁, x₂, ..., x_d, indicating that each node has a d-dimensional feature vector.

Panel (b), titled 'Overview of partition parallelism,' shows the same graph divided into three separate partitions, each enclosed in a rounded rectangle. The partitions are arranged horizontally. Within each partition, some nodes are highlighted in red (e.g., node 2 in the first partition, nodes 1, 3, 4, 6 in the second, and nodes 2, 5, 6, 4 in the third), indicating they are either 'Inner Node' or 'Remote Neighbor.' The second partition explicitly labels node 2 as 'Inner Node' and nodes 1, 3, 4, 6 as 'Remote Neighbor,' emphasizing that these remote neighbors reside in other partitions and require feature transfer. A thick yellow arrow labeled 'Node Feature Transfer' spans across the partitions from left to right, illustrating the communication overhead involved in transferring duplicated remote neighbor features across partitions.

Panel (c), titled 'Overview of the proposed MixGCN,' demonstrates an alternative approach with two levels of parallelism. The top row contains three identical copies of the original graph, each enclosed in a light blue rounded rectangle, representing 'Feature-Level Parallelism for Neighbor Aggregation.' Below this, a row of three rectangular boxes contains pairs of nodes: {1,6}, {2,5}, and {3,4}, respectively, representing 'Node-Level Parallelism for Node Update.' Thick yellow arrows connect each graph copy to the corresponding node pair below it, indicating that neighbor aggregation is performed in parallel at the feature level, and then node updates are computed in parallel at the node level. This design avoids the need to transfer duplicated remote neighbor features across partitions, thereby reducing communication volume.

The overall layout is horizontal, with panels (a), (b), and (c) aligned side-by-side. The visual modules include circular nodes, rectangular feature icons, partition boundaries, and directional arrows. Colors are used strategically: red highlights duplicated remote neighbors in panel (b), while light blue backgrounds denote the graph copies in panel (c). Text labels are placed directly within or near the relevant components to clarify roles and processes. The figure effectively contrasts the communication-heavy partition parallelism with the communication-efficient MixGCN by visually isolating the redundant data transfers in (b) and eliminating them in (c).
