# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Registration in 30 Years: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13735

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative schematic of seven different meta-shape-based multi-view 3D point cloud registration methods, labeled (a) through (g), along with a visual comparison of local region definitions for meta-point calculation in (h). The overall layout is a 4x2 grid of subfigures, each illustrating a distinct pipeline starting from 'Initial point clouds' and progressing through various processing stages to produce a 'Meta-shape'. Each subfigure contains rectangular boxes representing processing modules, connected by arrows indicating data flow. The initial point cloud is consistently depicted as a colorful bunny model, while intermediate and final outputs show variations in color and structure based on the method.

In subfigure (a) CTF (Coarse-to-Fine Multi-View Registration), the process begins with initial point clouds, which are sequentially aligned to a meta-shape across M views (View 1 to View M). Each view generates a corresponding meta-shape (Meta-shape 1 to Meta-shape M), shown as colored bunny models with distinct hues per view. The meta-shape is dynamically updated after each P2M registration.

Subfigure (b) LTG (Local to Global Multi-View Registration) starts with initial point clouds, followed by tree construction, then local meta-shape generation per view, and finally global meta-shape formation. The tree structure is visualized as a hierarchical diagram with nodes and edges. Local meta-shapes are shown as segmented bunny models with view-specific colors, while the global meta-shape is a unified representation.

Subfigure (c) SG (Sequential Growing Update) involves tree construction from initial point clouds, followed by sequential processing of views (View 1 to View M). The meta-shape evolves incrementally, shown as a series of bunny models with progressively added features or regions.

Subfigure (d) K-means begins with initial point clouds, proceeds through uniform selection, clustering, and ends with a meta-shape. The clustering stage shows points grouped into clusters, and the resulting meta-shape is a simplified, sparse representation.

Subfigure (e) KNN uses optimized input, starting with random selection from initial point clouds, followed by KNN search, and producing a meta-shape. The KNN search stage displays a point cloud with nearest neighbors highlighted.

Subfigure (f) Radius-NN follows a similar structure to (e), using optimized input, random selection, Radius-NN search, and generating a meta-shape. The Radius-NN search visualizes points within a fixed radius around selected seeds.

Subfigure (g) Voxel-NN also uses optimized input, random selection, Voxel-NN search, and produces a meta-shape. The Voxel-NN search shows a voxel grid overlaid on the point cloud.

Subfigure (h) compares local region definitions for meta-point calculation across four methods: K-means, KNN, Radius-NN, and Voxel-NN. Each method is represented by a bunny model with distinct region patterns: K-means shows clustered regions, KNN shows starburst-like neighborhoods, Radius-NN shows circular neighborhoods, and Voxel-NN shows cubic voxel grids.

All pipelines use consistent visual elements: rounded rectangles for processing steps, solid arrows for data flow, and images of bunny models to represent point clouds at different stages. Text labels identify each module and stage. The figure caption clarifies that (a-g) depict seven meta-shape based multi-view registration methods, while (h) provides visual comparisons of local region definitions for meta-point calculation.
