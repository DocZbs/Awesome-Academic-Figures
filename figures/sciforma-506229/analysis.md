# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hybridising Reinforcement Learning and Heuristics for Hierarchical Directed Arc Routing Problems — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00852

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a reinforcement learning (RL) framework with heuristic integration, designed for solving graph-based sequential decision-making problems such as routing or scheduling. The overall layout is divided into two main sections: the upper 'Policy Network' and the lower 'Heuristics' section, connected by feedback loops for training. The Policy Network is enclosed in an orange border and contains an Encoder-Decoder architecture, while the Heuristics section is outlined with a dotted blue border and shows two graph representations for comparison.

[1] Global Layout and Structure:

The diagram follows a top-down, left-to-right data flow. The Policy Network processes input graph data through an Encoder and Decoder to generate actions (arc selections), which are then evaluated using Heuristics. The resulting reward is used to calculate losses, which update the Policy Network. This forms a closed-loop training process. The Heuristics section visually compares the policy’s output against a baseline or expert solution, emphasizing the integration of domain knowledge.

[2] Visual Modules and Attributes:

In the Policy Network:
- The Encoder receives two inputs: an 'Adjacency Matrix' (gray grid labeled e¹ to eⁿ) and 'Edge Features (x)' (a color-coded matrix with rows x¹ to xⁿ). The Edge Features are color-coded per the legend: blue for 'Demand of arc', purple for 'Priority class of arc', magenta for 'Servicing time of arc', and yellow for 'Traveling time of arc'.
- These features undergo 'Linear projection' before being fed into a large gray trapezoidal block labeled 'GRAPH ATTENTION MODEL', which outputs a hidden state vector xʰ.
- The Decoderₜ module (dotted blue box) takes xʰ and processes it through a series of horizontal gray bars (representing recurrent steps or layers). It also receives 'Current embedding' and 'Remaining Capacity' as context inputs, which are combined into a query vector q.
- The query q is passed to a 'Pointer network' (gray rectangle), which outputs a probability distribution over arcs, visualized as a bar chart labeled 'arcₜ' with multicolored bars corresponding to the embedding information.
- The output of the Pointer network is denoted as xᵀ, which feeds into the Heuristics section.

In the Heuristics section:
- Two graph diagrams are shown side-by-side, each containing nodes v₀ and edges e₁ to e₄. The left graph represents a baseline or expert solution (dashed lines), while the right graph shows the policy’s output (solid lines with red triangles indicating selected arcs). An arrow from the right graph points to the left, suggesting evaluation or comparison.
- Below the Policy Network, an orange rounded rectangle labeled 'Calculate Losses' receives input from the Heuristics section via a black arrow labeled 'Update Policy Network'.
- A peach-colored rounded rectangle labeled 'Calculate Reward' connects to 'Calculate Losses' and receives input from the Heuristics section.

[3] Connections and Arrows:

Arrows indicate the direction of data and control flow:
- From the Encoder inputs to the Graph Attention Model.
- From the Graph Attention Model to the Decoderₜ.
- From the Decoderₜ to the Pointer network via 'ref' (reference).
- From 'Current embedding' and 'Remaining Capacity' to the query q.
- From the Pointer network to the arc selection output (arcₜ) and to xᵀ.
- From xᵀ to the Heuristics section (right graph).
- From the Heuristics section to 'Calculate Reward' and then to 'Calculate Losses'.
- From 'Calculate Losses' back to the Policy Network (Encoder) via 'Update Policy Network', completing the training loop.

The figure effectively communicates a hybrid RL approach where a learned policy network is guided and evaluated by handcrafted heuristics, enabling more efficient and interpretable decision-making on complex graphs.
