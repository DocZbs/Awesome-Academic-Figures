# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Expressiveness and Length Generalization of Selective State-Space Models on Regular Languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19350

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two side-by-side Cayley diagrams labeled (a) C₂×C₄ Automaton and (b) D₄ Automaton, illustrating the structure of two distinct group-based automata. Each diagram consists of eight gray circular nodes arranged in a square-like layout with an additional node at the top and bottom centers, forming a symmetrical octagonal configuration. The nodes represent states within the automata.

In both diagrams, transitions between states are represented by directed edges: blue lines indicate the 'toggle' action, while red curved arrows indicate the 'move' action. In diagram (a), the blue toggle edges connect vertically aligned nodes—top to middle-top, middle-top to middle-bottom, middle-bottom to bottom—forming a vertical axis of symmetry. The red move edges form two concentric cycles: an outer cycle connecting the four corner nodes in clockwise order, and an inner cycle connecting the four mid-edge nodes also in clockwise order. These red edges are curved arrows pointing in the direction of traversal.

Diagram (b) shares the same node arrangement and color coding but differs in the structure of the red 'move' edges. Here, the red arrows form a single continuous cycle that alternates between corner and mid-edge nodes, creating a spiral-like path around the diagram. Specifically, starting from the top node, the red arrow goes to the right mid-node, then to the bottom-right corner, then to the bottom mid-node, then to the bottom-left corner, then to the left mid-node, then to the top-left corner, and finally back to the top node. The blue toggle edges remain identical to those in diagram (a), connecting the same vertical pairs of nodes.

The figure’s caption explains that these are Cayley diagrams for the groups C₂×C₄ and D₄, each equipped with two generators: 'toggle' (blue) and 'move' (red). It emphasizes that C₂×C₄ is commutative: performing toggle then move yields the same result as move then toggle, regardless of the starting state. In contrast, this commutativity does not hold for D₄, indicating a non-commutative structure. This difference is visually reflected in the distinct connectivity patterns of the red 'move' edges between the two diagrams.
