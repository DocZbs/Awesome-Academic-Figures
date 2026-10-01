# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Expressiveness and Length Generalization of Selective State-Space Models on Regular Languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19350

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure depicts a finite state automaton designed to track the parity of a binary input sequence. The global layout is horizontal, with two circular states positioned side by side: 'Even' on the left and 'Odd' on the right. Both states are represented as light gray circles with black borders and bold black text labels inside. The automaton operates over an alphabet Σ = {0, 1}, as indicated in the caption.

Visual modules include self-loops and transitions between states. Each state has a red self-loop arrow: the 'Even' state has a red loop labeled '0', and the 'Odd' state also has a red loop labeled '0'. These indicate that input '0' does not change the current state. Between the two states, there are two blue curved arrows forming a bidirectional connection: one from 'Even' to 'Odd' and another from 'Odd' to 'Even', each labeled '1'. This signifies that input '1' causes a toggle between the two states. The arrows are thick and clearly directed with arrowheads, and the labels '1' are placed above or below the respective arcs for clarity.

Connections and arrows define the transition function. The red self-loops represent transitions on input '0' that keep the state unchanged. The blue arcs represent transitions on input '1' that switch the state from 'Even' to 'Odd' and vice versa. The automaton starts in the 'Even' state, as specified in the caption, meaning the initial state is 'Even'. The structure is minimal and symmetric, emphasizing the toggling behavior on '1' and stability on '0'. The color coding—red for self-transitions and blue for state-switching transitions—helps distinguish the nature of each transition. The diagram is clean, with no additional annotations or decorations beyond the essential elements required to define the automaton's behavior.
