# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bidding Games on Markov Decision Processes with Quantitative Reachability Objectives — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19609

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the process of value iteration applied to a two-player game, depicted on the left, alongside the corresponding sequence of reachability value updates shown on the right. The global layout is divided into two main sections: the left side contains a state transition diagram representing the game structure, while the right side displays a grid of bar charts tracking the evolution of reachability values over iterations.

On the left, the game is modeled as a directed graph with four states labeled 'a', 'd', 'b', and 'c'. State 'a' is an initial state marked by an incoming arrow labeled 'start'. States 'a', 'd', and 'c' are represented as circular nodes, while state 'b' is a diamond-shaped node, indicating a decision or branching point. Transitions between states are shown as arrows. From 'a', there is a self-loop and an arrow to 'b'. From 'b', there are arrows to both 'a' and 'c'. State 'd' has a self-loop and an arrow to 'b', with a label 'p' on the edge from 'd' to 'b'. Additionally, there are transitions from 'd' and 'c' to a rectangular box labeled 'B₀', which represents a boundary or sink state. These transitions are annotated with 'i = 0, 1, ...', suggesting they occur at each iteration step. State 'c' is highlighted with a double circle, indicating it is the target state, as confirmed by the caption.

On the right, the sequence of reachability values is visualized through a grid of bar charts arranged in columns labeled 'a' and 'b', and rows indexed by iteration number 'i'. Each column corresponds to one of the non-target states ('a' or 'b'), and each row shows the value update at a specific iteration. The bars are filled with light blue color and increase in height as iterations progress, reflecting the convergence of reachability values toward their optimal limits. For example, at i=0, the bars for both 'a' and 'b' are very low; by i=4, they have increased significantly; and by i=16, they appear nearly converged. The vertical axis is labeled 'p', likely representing probability or value, and the horizontal axis is unlabeled but implies a discrete range. Dotted lines indicate continuation beyond shown iterations, emphasizing the iterative nature of the algorithm.

Connections between the left and right sides are implicit: the value iteration process on the game graph produces the sequence of reachability values shown in the bar charts. The arrows in the game graph define the state transitions, and the value updates in the charts reflect how the probability of reaching the target state 'c' evolves over time for each state. The figure effectively demonstrates the convergence behavior of value iteration in this specific game setting.
