# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Symmetries-enhanced Multi-Agent Reinforcement Learning — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01136

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architecture schematic for an equivariant lifted policy in a multi-agent or robotic system setting. The global layout is divided into two main sections: on the left, a spatial representation of agents in 3D space, and on the right, a detailed computational pipeline involving graph-based processing and policy learning.

[1] Global Layout and Structure:
The diagram begins on the left with a 3D scene showing multiple agents (represented as drones or robots) with associated state vectors s_i, s_j, s_k, s_m, each containing position x, rotation R, velocity ẋ, and angular velocity ω. These agents are connected via dashed lines to form a neighborhood N_i around agent i, which includes neighbors s_j, s_k, s_m. A global reference frame R_global is shown at the bottom-left. This spatial representation feeds into a computational pipeline on the right, which processes the agent states through a series of graph-based modules to produce an action u_i.

[2] Visual Modules and Attributes:
The computational pipeline starts with a pink module representing the initial graph structure, where nodes correspond to agents g_i, g_j, g_k, etc., with associated features F_i, F_j, F_k. These nodes are connected by bidirectional blue arrows indicating message passing. This graph is then processed by an 'Equivariant Graphormer' block, depicted as a light green box repeated L times. Inside this block, nodes f_i', f_j', f_k', etc., are shown with colored edges (red, yellow, blue, green) representing different feature dimensions or transformations. The block includes a mathematical expression: f_* = E_l(ρ_{g_*^{-1}}F'_■ ∀ ■ ∈ N_*), indicating equivariant edge encoding. The output of this block is another graph with updated features F_i', F_j', F_k', and a global mean μ computed as μ = (1/|N_i|) Σ_{j∈N_i∪i} f_j'.

Following the Graphormer, a blue rectangular module labeled θ receives input f_i = ρ_{g_i^{-1}}F_i and outputs f̂_i. This is followed by an orange module labeled ζ, which takes f̂_i and μ as inputs and produces ρ_{g_i}ζ(f_i, μ). This output is fed into a final module h, represented as a vertical bar chart with a red shaded area under a curve, symbolizing a probability distribution or action selection. The output of h is the action u_i, shown as an upward arrow.

[3] Connections and Arrows:
Arrows indicate the flow of information. From the left, the neighborhood N_i is passed to the pink graph module. From there, the graph is sent to the Equivariant Graphormer, which processes it L times. The output of the Graphormer feeds into both the computation of μ and the subsequent modules θ and ζ. The output of ζ is directed to h, which generates u_i. Additionally, a feedback loop from h back to the Graphormer suggests iterative refinement or recurrent processing. The entire pipeline is labeled at the bottom as 'Equivariant lifted policy π̂(s_i, o_i)', indicating that the output is a policy function dependent on the local state s_i and observation o_i.
