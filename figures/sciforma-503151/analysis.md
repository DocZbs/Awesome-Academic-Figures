# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Framework for Streaming Event-Log Prediction in Business Processes — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16032

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents four distinct automata structures derived from an event log defined by the set L = {⟨a⟩⁵, ⟨aa⟩³, ⟨aaa⟩³, ⟨aab⟩¹, ⟨aaaa⟩¹, ⟨b⟩⁹, ⟨ba⟩¹, ⟨bb⟩⁵, ⟨bba⟩¹, ⟨bbb⟩¹}, where multiplicities are denoted by powers. The global layout is a 2x2 grid of diagrams labeled (a), (b), (c), and (d), each illustrating a different type of automaton used for modeling sequential data. All diagrams consist of circular nodes representing states and directed arrows indicating transitions triggered by activities 'a' or 'b'. Frequencies or probabilities are annotated on edges and within nodes.

In diagram (a), titled 'Frequency prefix tree (FPT)', the structure is a tree rooted at node 0. Each edge is labeled with an activity ('a' or 'b') followed by its frequency in parentheses (e.g., 'a(13)'). Nodes contain integer values representing cumulative frequencies of sequences ending at that node. For example, node 5 has frequency 5, and its children are reached via 'a(4)' and 'b(1)'. The tree expands hierarchically, capturing all prefixes of sequences in the event log.

Diagram (b), labeled '3-gram FDFA', shows a finite deterministic finite automaton (FDFA) constructed using a 3-gram model. It shares the same root node 0 with transitions 'a(13)' and 'b(17)'. However, unlike the tree, it introduces cycles and merges equivalent states. For instance, node 5 transitions to node 7 via 'a(8)' and to node 1 via 'b(0)'; node 7 has a self-loop 'a(5)'. Node 9 transitions to node 2 via 'a(1)' and to node 6 via 'b(7)'; node 6 has a self-loop 'b(1)'. This compact representation reduces redundancy compared to the FPT.

Diagram (c), 'Corresponding PDFA', displays a probabilistic deterministic finite automaton (PDFA) derived from the 3-gram model. It retains the same state structure as (b) but replaces frequencies with probabilities. Edge labels now show probabilities (e.g., 'a(13/30)'), and node labels indicate the probability of the end-of-sequence (eos) symbol (e.g., node 5 contains '5/13'). Transitions are normalized such that outgoing probabilities from each node sum to 1. Self-loops are present with corresponding probabilities (e.g., node 7 has 'a(5/13)').

Diagram (d), 'Keeping track of current states indicated by curly lines and case IDs', is an enhanced version of the FDFA from (b). It includes curly lines emanating from specific nodes to denote the current state of ongoing cases during inference or streaming learning. Case IDs 123, 453, and 721 are associated with these lines: case 123 is linked to node 5, case 453 to node 9, and case 721 to node 1. These annotations illustrate how the automaton tracks multiple concurrent processes.

All diagrams use black circular nodes with numerical labels, black arrows for transitions, and text annotations for activities and frequencies/probabilities. The connections between nodes are directed, with arrows pointing from parent to child or source to target states. The figure caption clarifies that frequencies are shown in brackets next to activities and within nodes for the eos activity, while probabilities replace frequencies in the PDFA.
