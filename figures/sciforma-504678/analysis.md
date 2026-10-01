# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting Time Series of Networked Dynamical Systems without Knowing Topology — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18734

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a complete pipeline for learning dynamic network structures and predicting future states from observed time-series data using a neural ordinary differential equation (ODE) framework. The layout is divided into six panels labeled a through f, arranged in two rows of three, each enclosed in a dashed box with a descriptive title.

Panel a, titled 'True dynamics and topology', shows the ground truth system: a complex network of nodes connected by edges, where each node's state evolves according to a coupled ODE: dxi/dt = fi(xi) + Σj Aij g(xi, xj). The network is visualized as a graph with circular nodes of varying sizes and colors—nodes with higher degrees are depicted with more intense colors. The equation is displayed above the graph, and a blue circle highlights a cluster of interconnected nodes.

Panel b, titled 'Input: Observed Time-series', represents the input data: a set of time-series curves for individual nodes over time t ∈ [0,1], shown as small plots next to circular node representations. Dashed lines between nodes indicate unknown or unobserved connections, emphasizing that the true network topology is not given.

Panel c, titled 'Initial Latent Embedding', describes the encoding step. Each observed time-series xi ∈ ℝ^T_obs is mapped via a function f_node to a latent embedding zi^0 ∈ ℝ^d, represented as a vertical purple rectangle. Additionally, the model infers edge weights Â_ij by applying a function f_edge to pairs of sender and receiver embeddings (z_j^0, z_i^0), shown as orange and purple rectangles respectively, producing a scalar output in ℝ.

Panel d, titled 'Coupled ODE', depicts the core dynamical model. The latent states evolve according to the ODE: dz_i^t/dt = f̂(z_i^t) + Σj∈V Â_ij^t ĝ(z_i^t, z_j^t), where Â_ij^t = f_edge(z_i^t, z_j^t). This is visualized as a sequence of interconnected nodes over time, with each node having incoming and outgoing edges weighted by learned interaction terms. The nodes are represented as circles with colored rectangular inputs/outputs (purple, green, orange) and arrows indicating information flow. The horizontal axis is labeled 'Time' with an arrow pointing right.

Panel e, titled 'Time Series Decoding', shows how the latent states are mapped back to the observable space. A sequence of latent vectors z_i^t ∈ ℝ^(T_pred × d) is passed through a decoder function f_dec to produce predicted time-series x̂_i ∈ ℝ^T_pred. This is illustrated as a series of purple rectangles feeding into a single output curve plotted over time t ∈ [1,5].

Panel f, titled 'Model Prediction', presents the final output: the model’s forecasted trajectories for each node over a future time interval t ∈ [1,5]. The network structure is shown again, now with solid edges representing inferred interactions, and each node is associated with a predicted time-series curve. The curves are color-coded and match those in panel e, demonstrating the model’s ability to predict future dynamics based on the learned latent dynamics and topology.
