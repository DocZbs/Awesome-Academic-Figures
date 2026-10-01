# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GraphMoRE: Mitigating Topological Heterogeneity via Mixture of Riemannian Experts — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11085

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall framework of a graph embedding method named \textbf{\MethodName}, which leverages diverse Riemannian experts and a topology-aware gating mechanism to learn personalized embeddings in mixed curvature spaces. The global layout is structured into three main horizontal sections: the input graph, the diverse Riemannian experts module, and the mixture and alignment of experts module. Additionally, a vertical section on the left details the topology-aware gating mechanism applied to individual nodes.

In the top-left corner, the 'Input Graph $\mathcal{G}$' is depicted as a multi-layered network with nodes colored differently, indicating potential community structures or node types. This graph feeds into two parallel processing streams.

The upper central part, labeled 'Diverse Riemannian Experts', contains three distinct curvature spaces: Hyperbolic Space ($\kappa < 0$), Euclidean Space ($\kappa = 0$), and Spherical Space ($\kappa > 0$). Each space hosts multiple experts: Hyperbolic experts (e.g., Expert - $\mathbb{H}_1$, Expert - $\mathbb{H}_2$) are represented by curved, saddle-shaped surfaces; Euclidean experts (Expert - $\mathbb{E}$) by flat grids; and Spherical experts (e.g., Expert - $\mathbb{S}_{k-1}$, Expert - $\mathbb{S}_k$) by spherical shapes. These experts are visually grouped under dashed boxes, with labels indicating 'Space Type' and 'Curving Degree' as dimensions of diversity. The outputs from these experts are aggregated into 'Riemannian Embeddings', denoted by $\mathbf{Z}$, which flow into the right-hand side of the diagram.

Below this, the 'Topology-aware Gating Mechanism' processes individual nodes $u$ and $v$. For each node, a local neighborhood is shown as a circular graph centered on the node. This undergoes 'Multi-resolution Sampling', producing multiple sampled subgraphs at different scales. These are then processed by 'Topology Encoding $\xi(\cdot)$', which generates a series of feature maps representing 'Local Topology Characterization'. These features are fed into a 'Gating Network $\phi(\cdot)$', which outputs expert weights $\mathbf{W}^u$ and $\mathbf{W}^v$ as bar charts, where each bar corresponds to an expert (e.g., $\mathbb{H}_1, \mathbb{H}_2, \mathbb{E}, \mathbb{S}_k$) and indicates its contribution to the embedding of node $u$ or $v$.

On the right, the 'Mixture and Alignment of Experts' block receives the Riemannian embeddings $\mathbf{Z}$ and the expert weights $\mathbf{W}^u, \mathbf{W}^v$. It computes 'Personalized Embedding' for each node via weighted sum: $\|_{\varepsilon \in E} \mathbf{W}^u_\varepsilon \otimes_\varepsilon \mathbf{Z}^u_\varepsilon$ for node $u$, and similarly for $v$. These embeddings are then aligned through 'Weight Alignment', visualized as a histogram $\mathbf{W}_{(u,v)}$ that combines the weights of both nodes. From this, 'Pairwise Distance' is computed as $d^2(u,v) = \sum_{\varepsilon \in E} \mathbf{W}^\varepsilon_{(u,v)} d^2_\varepsilon(\mathbf{Z}^u_\varepsilon, \mathbf{Z}^v_\varepsilon)$. The final objective is to minimize 'Pairwise Embedding Distortion', defined as $\mathcal{D}_{(u,v)} = \left| \left( \frac{d(u,v)}{g(u,v)} \right)^2 - 1 \right|$, where $g(u,v)$ represents the ground-truth geometric distance. A dashed arrow labeled 'Minimize' connects this distortion metric back to the gating mechanism, indicating an optimization loop.

The diagram uses consistent color coding: blue for Euclidean, green for spherical, and purple/blue gradients for hyperbolic experts. All modules are enclosed in rounded rectangles or dashed boxes, with arrows indicating data flow. Text labels are clear and positioned near relevant components, ensuring the entire pipeline is logically traceable from input graph to optimized personalized embeddings.
