# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Expressiveness and Length Generalization of Selective State-Space Models on Regular Languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19350

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a Cayley diagram representing the group structure of $C_2 \times C_5$, where $C_2$ is the cyclic group of order 2 and $C_5$ is the cyclic group of order 5. The diagram is arranged in two concentric pentagonal cycles, each composed of five gray circular nodes labeled with numbers 1 through 5 (outer cycle) and letters A through E (inner cycle), respectively. These nodes represent group elements. The outer cycle nodes are positioned at the vertices of an outer pentagon, while the inner cycle nodes form an inner pentagon, rotated slightly relative to the outer one to avoid edge overlaps. The layout is symmetric and centered, emphasizing the cyclic nature of the group.

Each node is a light gray circle with a black border and contains a label in black text: the outer cycle nodes are labeled numerically (1, 2, 3, 4, 5) in clockwise order starting from the top; the inner cycle nodes are labeled alphabetically (A, B, C, D, E) also in clockwise order, with A directly below node 1. The diagram uses two types of directed edges to represent group generators: red arrows denote the 'Move' generator, which corresponds to advancing one step along the current cycle (either outer or inner), and blue lines denote the 'Toggle' generator, which switches between the two cycles while preserving position relative to the cycle’s orientation.

Red arrows connect adjacent nodes within each cycle: from 1→2→3→4→5→1 for the outer cycle, and from A→B→C→D→E→A for the inner cycle. Additionally, red arrows connect corresponding positions across cycles: 1→A, 2→B, 3→C, 4→D, 5→E, forming a radial pattern. Blue lines connect each outer node to its corresponding inner node: 1–A, 2–B, 3–C, 4–D, 5–E, indicating the toggle operation. All arrows are solid and have arrowheads pointing in the direction of the operation.

The diagram illustrates the commutativity of the two generators: for any starting node, toggling then moving yields the same result as moving then toggling. For example, starting at node 1, toggling to A then moving to B is equivalent to moving to 2 then toggling to B. This property is visually confirmed by the consistent structure and symmetry of the graph. The figure is a clear representation of the direct product group $C_2 \times C_5$, with the two generators forming a regular, symmetric network of 10 nodes and 15 edges (10 red, 5 blue).
