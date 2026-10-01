# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Relational Neurosymbolic Markov Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a rolled-out graphical model, structured as a directed acyclic graph (DAG) with a temporal or sequential progression from left to right. The global layout consists of three horizontal layers: a top layer containing initial and context nodes, a middle layer representing state and action variables across time steps, and a bottom layer for observation or sensor nodes. The structure is unfolded over multiple time steps, indicated by repeating patterns labeled with indices 0, 1, 2, and an ellipsis (...) suggesting continuation.

Visual modules include circular nodes in two distinct colors: light blue for latent or decision-related variables and light green for observed or sensor variables. The top-left corner features a square node labeled 'Im' in light blue, representing an initial model or input. From this node, two directed edges emerge: one labeled φ^m pointing to a circular node 'M', and another labeled φ^P pointing downward to 'P₀'. Node 'M' is connected via multiple parallel edges to each subsequent 'P_t' node (P₀, P₁, P₂, ...), indicating a shared influence across time steps. A separate circular node 'C' at the top center connects to all 'H_t' nodes (H₀, H₁, H₂, ...) via individual directed edges, suggesting a global context or constant parameter affecting hidden states.

Each time step t contains a sequence of three nodes: 'P_t' (light blue), 'H_t' (light blue), and 'S_t' (light green). 'P_t' receives input from 'M' and 'C', and also from the previous 'H_{t-1}' (except for P₀, which has no predecessor). 'P_t' feeds into 'H_t', which then connects to 'S_t'. Additionally, 'S_t' feeds back into 'P_{t+1}', forming a feedback loop. The 'S_t' nodes are also connected to 'P₀' and 'H₀', implying that observations from later time steps may influence the initial state estimation or policy. All connections are represented by solid black arrows, indicating directed dependencies. The caption notes that this is a rolled-out version of a more compact model (referenced as Figure~\ref{fig:markov-game}), and the query node G is omitted to avoid cluttering the diagram.
