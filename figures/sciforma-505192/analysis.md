# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bidding Games on Markov Decision Processes with Quantitative Reachability Objectives — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19609

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure depicts a Markov Decision Process (MDP) structured as a directed graph representing a bidding game. The global layout is a grid-like network of nodes arranged in three columns and three rows, with additional self-loops and connections forming a complex flow. The top-left node labeled 'start' initiates the process by pointing downward to node 'a'. The structure consists of two types of vertices: circular nodes representing random (probabilistic) states and diamond-shaped nodes representing control (decision) states. All transitions are directed, indicated by arrows, and probabilistic transitions are marked with curved arcs emanating from nodes, implying uniform distribution over outgoing edges.

Visual modules include nine primary nodes: 'a', 'b', 'c', 'd', 'e', 'f', 'l₁', 'l₂', and 't'. Nodes 'a' and 'b' are diamonds, indicating control states; all others are circles, indicating random states. Node 't' is uniquely depicted as a double circle, signifying it as the target state for the reachability player. Self-loops exist at nodes 'l₁', 'l₂', and 't', suggesting possible repeated transitions within those states. The nodes are labeled with lowercase letters or symbols (l₁, l₂, t), and their positions form a clear left-to-right, top-to-bottom progression.

Connections between nodes are represented by solid black arrows for standard transitions. Additionally, there are two sets of dashed lines: red dashed lines and green dashed lines. These represent viable reachability policies for the setting described in Example~\ref{ex:intro}. The red dashed lines form a path from 'a' to 'b', then down to 'f', and finally to 't'. The green dashed lines trace a path from 'a' to 'c', then to 'd', followed by 'e', and ending at 't'. Both dashed paths converge at the target node 't', which is highlighted with a red arrowhead on the incoming red dashed edge and a green arrowhead on the incoming green dashed edge, emphasizing their role as policy paths. The red and green dashed lines also include vertical segments connecting 'a' to 'c', 'b' to 'd', and 'e' to 't', illustrating alternative decision paths under different policies. The overall structure implies a strategic game where decisions at control nodes (diamonds) influence the path taken through random states (circles) toward the target 't', with the dashed lines showing optimal or feasible strategies.
