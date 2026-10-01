# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine Learning Optimal Ordering in Global Routing Problems in Semiconductors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21035

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative illustration of two global routing methodologies in a multilayered grid structure, labeled as (a) 3d Global Routing and (b) Global Routing with Layer Compression and Net Ordering. The overall layout is divided into two horizontal sections, each depicting a distinct routing approach with a left-to-right workflow progression.

In section (a), the process begins with two separate 2D grid layers, each represented as a diamond-shaped lattice composed of black nodes connected by black lines. Orange nodes within these grids denote terminal points or pins requiring connection. An arrow points from the initial state to the final routing solution, labeled '3d Routing'. In this solution, blue lines connect the orange terminals across both layers, including vertical connections between corresponding nodes in different layers, demonstrating direct 3D routing through vias. The blue lines form a complete path network linking all specified terminals across the two layers.

Section (b) illustrates an alternative, decomposed approach. It starts with the same initial configuration: two 2D grid layers with orange terminal nodes. The first transformation step, labeled 'Layer Compression', merges the two layers into a single composite layer where all orange terminals are preserved. This compressed layer is then subjected to '2d Routing', where blue lines are drawn to connect the terminals within the single plane, forming a 2D routing solution. Finally, the process concludes with 'Layer Assignment with Net Ordering', where the 2D routing paths are mapped back onto the original two-layer structure. Blue lines now appear on both layers, with vertical connections (vias) indicated by dashed blue lines between layers, ensuring that the routing respects the original layering while maintaining connectivity. The final result mirrors the 3D routing outcome but is achieved through a sequential, simplified process.

All grid structures are rendered identically across the figure: black nodes, black edges, and orange terminal nodes. Routing paths are consistently shown in solid blue lines, with vertical inter-layer connections depicted as dashed blue lines. The figure uses rightward-pointing arrows to indicate the flow of operations in each method. Text labels are placed beneath each stage to identify the processing step. The visual contrast between the direct 3D approach in (a) and the layered decomposition in (b) highlights the structural difference in routing strategies.
