# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Mastering Board Games by External and Internal Planning with Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12119

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two subfigures, (a) and (b), illustrating the core components of an asynchronous Monte Carlo Tree Search (MCTS) framework with dynamic virtual counts, used for decision-making in sequential environments such as games or planning tasks.

In subfigure (a), the global layout is a tree structure representing the search space, with nodes denoting states (s₁, s₂, s₃) and edges representing actions (a₁, a₂, a₃). The tree is traversed using blue arrows indicating the selection phase of MCTS, where a path from the root to a leaf node is chosen based on a policy. At the leaf nodes, red arrows indicate the expansion and simulation phases: each selected state-action pair (sᵢ, aᵢ) is sent to an evaluation module labeled 'MAV(s, a)', which stands for a model-based value function or a policy-value network. These evaluations are performed asynchronously, as emphasized by the text 'Evaluate asynchronously!' below a cylindrical buffer containing a batch of state-action pairs {(s₁, a₁), ..., (s_b, a_b)}. A gray box explains the batch size b: it involves running b simulations, queuing b new evaluations, and waiting to process b results. The dashed lines from the pink-dashed nodes represent unexplored child states, indicating the tree's potential for growth. The MAV module sends feedback (via red arrows) back to the tree, updating the values of visited nodes, enabling the learning process.

Subfigure (b) illustrates the concept of dynamic virtual counts, a mechanism to simulate the effect of multiple parallel evaluations. The tree structure here shows numerical values (+2, +4, +8) inside nodes, representing accumulated visit counts or virtual counts. The blue arrows again denote the selection path, while the red arrows show the propagation of virtual updates. For instance, when a node receives a virtual count update (e.g., +4), it propagates this to its parent, and subsequent selections may lead to further virtual increments (e.g., +8). This allows the algorithm to simulate the effect of multiple evaluations without waiting for them to complete, thus accelerating the search. The dashed lines again represent unexpanded children.

Visually, the figure uses distinct colors and shapes: light blue circles for visited states, pink dashed circles for newly expanded or simulated states, and a beige cloud for the MAV module. The arrows are color-coded: blue for selection, red for action/simulation/feedback, and black for structural connections. The layout is hierarchical, with the root at the top and branches extending downward, reflecting the tree search process. The asynchronous nature of the evaluation is highlighted by the buffer and explicit text, while the dynamic virtual counts are shown through incremental numerical values in the nodes.
