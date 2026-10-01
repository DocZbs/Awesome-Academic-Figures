# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine Learning Optimal Ordering in Global Routing Problems in Semiconductors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21035

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the impact of net ordering on the layer assignment phase during 3D global routing, starting from independently computed 2D routing results for each net. The global layout is divided into two main sections: on the left, labeled '2d Routing Result obtained separately for each net', two distinct 2D routing solutions are shown — one for Net 1 and one for Net 2. Each solution is depicted as a grid graph with black nodes connected by black edges, representing the routing grid. Within each grid, the route for the respective net is highlighted using colored paths: Net 1 uses orange endpoints and blue segments, while Net 2 uses pink endpoints and blue segments. These 2D routes are computed independently, without considering interference between nets.

From this initial state, two different net orderings are applied to perform layer assignment, which transforms the 2D routes into 3D routes by assigning vertical vias (represented as dashed vertical lines) to resolve conflicts and connect layers. The top arrow, labeled 'net ordering 1', points to the upper set of four grids under the heading 'Layer Assignment'. Here, Net 1 is assigned first, followed by Net 2. The first two grids show the layer assignment process for Net 1: the initial 2D route is extended vertically with dashed blue lines to assign layers, resolving conflicts by lifting segments onto higher layers. The next two grids show the same process for Net 2, where its route is assigned after Net 1, leading to potential vertical via placements that may conflict with or avoid those of Net 1.

The bottom arrow, labeled 'net ordering 2', points to the lower set of four grids, where the order is reversed: Net 2 is assigned first, then Net 1. The corresponding layer assignments show how the routing decisions for the second net are influenced by the already-placed vias of the first net. In both cases, the final 3D routing results differ significantly due to the sequence of assignment, demonstrating that the order in which nets are processed during layer assignment directly affects the number and placement of vertical vias, and thus the overall quality of the 3D routing solution. The figure visually emphasizes that even when 2D routes are fixed, the net ordering during layer assignment introduces variability in the final 3D routing outcome, which is critical for optimizing global routing in multi-layer designs.
