# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Expressiveness and Length Generalization of Selective State-Space Models on Regular Languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19350

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure depicts a directed graph representing a finite-state automaton named 'Cycle', consisting of five circular nodes labeled 1 through 5, arranged in a pentagonal layout with node 1 at the top. Each node is a light gray circle with a black border and contains a centered black numeral. The graph illustrates transitions between states via three distinct types of directed edges, each corresponding to a specific action: green arrows represent the 'Left' action, blue arrows represent the 'Right' action, and red curved self-loops represent the 'Stay' action. The automaton begins in state q_init = 1, as specified in the caption.

The global structure forms a cycle where each state connects to two others, creating a closed loop. Specifically, from state 1, a blue arrow points to state 2 (Right), and a green arrow points to state 5 (Left). From state 2, a blue arrow leads to state 3 (Right), and a green arrow leads back to state 1 (Left). State 3 has a blue arrow to state 4 (Right) and a green arrow to state 2 (Left). State 4 has a blue arrow to state 5 (Right) and a green arrow to state 3 (Left). Finally, state 5 has a blue arrow to state 1 (Right) and a green arrow to state 4 (Left). This creates a consistent clockwise (Right) and counter-clockwise (Left) traversal around the pentagon.

Each of the five states also features a red self-loop, indicating the 'Stay' action, which allows the automaton to remain in the current state. All arrows are thick and clearly colored: green for Left, blue for Right, and red for Stay. The connections are unidirectional, with arrowheads indicating the direction of transition. The layout is symmetric and evenly spaced, emphasizing the cyclic nature of the automaton. There are no additional labels or annotations on the edges beyond their color-coded meaning, which is explained in the figure caption. The visual design is minimalistic, focusing on clarity of the state transitions and the three defined actions.
