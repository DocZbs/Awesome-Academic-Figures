# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Re-examining Granger Causality with Causal Bayesian Networks and Reichenbachs Principles — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02672

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two side-by-side diagrams labeled (a) and (b), illustrating the interpretation of Granger Causality (GC) within a Causal Bayesian Network (CBN) framework as a conditional (in)dependence test. Both diagrams depict a temporal sequence of variables arranged in rows, where each row corresponds to a different variable indexed by superscripts i, j, ..., z, and each column represents a time step t−2, t−1, t, extending infinitely in both directions via dashed lines. Each variable is represented as a circular node containing the notation X^k_t, where k denotes the variable index and t the time step.

In diagram (a), all nodes are black-outlined circles. The nodes X^i_{t−1} and X^j_t are highlighted with green fill, indicating they are the focal pair for the dependence test. A solid black arrow points from X^i_{t−1} to X^i_t, and another from X^j_{t−1} to X^j_t, representing the autoregressive dynamics of each variable. A dashed green arrow connects X^i_{t−1} to X^j_t, symbolizing the hypothesized causal influence or dependence being tested. Vertical dashed lines connect corresponding time steps across variables, emphasizing the parallel temporal evolution.

Diagram (b) is structurally identical to (a) but includes additional red-filled nodes to represent the conditioning set in the CBN interpretation. Specifically, the nodes X^i_{t−2} and X^j_{t−2} are shaded red, indicating that these past states are conditioned upon when testing for conditional (in)dependence between X^i_{t−1} and X^j_t. The green-highlighted nodes X^i_{t−1} and X^j_t remain unchanged, and the dashed green arrow persists, now interpreted as a test of whether X^j_t is conditionally dependent on X^i_{t−1} given the pasts of both variables (i.e., X^i_{t−2} and X^j_{t−2}).

The overall layout is a grid-like structure with horizontal time progression and vertical variable indexing. The visual distinction between black, green, and red nodes, along with solid and dashed arrows, conveys the shift from a direct GC interpretation (a) to a formal CBN-based conditional independence test (b). The caption clarifies that this visualization corresponds to GC with τ=1, where the past of X^i at t−1 and the current state of X^j at t are considered, and the red nodes denote the conditioning set required for the CBN interpretation.
