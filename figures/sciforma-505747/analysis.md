# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Matrix Concentration for Random Signed Graphs and Community Recovery in the Signed Stochastic Block Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20620

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the construction of a Signed Stochastic Block Model (SSBM) in a two-community setting, progressing through a sequence of steps to generate a signed graph with positive and negative edges. The global layout is horizontal and sequential, depicting a three-stage generative process from left to right, followed by three distinct output configurations shown below the main flow. Each stage is accompanied by descriptive text above or below the corresponding graphical representation.

In the first stage, labeled 'Start with an even partition', two rectangular regions are shown side-by-side—one shaded light blue and the other light pink—each containing a set of black dots representing nodes. These represent the initial partition of nodes into two equal-sized communities.

The second stage, labeled 'Add edges between clusters with probability q' and 'Add edges within clusters with probability p', shows the same two communities now connected by numerous edges. Edges within each cluster are drawn in dark blue, while edges between clusters are also dark blue but slightly thinner. This stage visually represents the addition of unsigned edges according to the probabilities p (within-cluster) and q (between-cluster).

The third stage introduces signs to the edges. It is labeled 'Add negative signs between clusters with probability 1−s' and 'Add negative signs within clusters with probability s'. In this stage, some edges are colored red to denote negative signs. Specifically, red edges appear both within and between clusters, indicating that negative signs are assigned independently with probability s within clusters and with probability 1−s between clusters. The clusters are now shaded differently: one in green and the other in gray, possibly to emphasize the sign assignment phase.

From this final stage, a vertical arrow points downward to three distinct output graphs, each labeled with a specific variant of the SignedBlock_k model. The first, labeled 'SignedBlock_k(γ₁k⁻¹/², γ₂k⁻¹/², s)' and subtitled 'The dense setting', displays a densely connected graph with many blue (positive) and red (negative) edges, suggesting high edge probabilities. The second, labeled 'SignedBlock_k(γ₁ log k/k, γ₂ log k/k, s)' and subtitled 'The critical setting', shows a sparser graph with fewer edges, indicating lower connection probabilities near the threshold for detectability. The third, labeled 'SignedBlock_k(p, q, s)', presents a moderately dense graph with a balanced mix of blue and red edges, representing the general case where p, q, and s are arbitrary parameters.

All graphs consist of black circular nodes connected by straight lines (edges), with blue lines representing positive edges and red lines representing negative edges. The background of each graph box is light gray-blue. Text annotations are in black, except for the word 'negative', which is highlighted in red to match the color of negative edges. The overall structure emphasizes the generative pipeline and its parameterization, culminating in three representative instances of the model under different density regimes.
