# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Effective and Lightweight Representation Learning for Link Sign Prediction in Signed Bipartite Graphs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18720

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the overall architecture of a proposed method for link sign prediction on a signed bipartite graph. The layout is divided into two main vertical sections: 'Signed Personalized Message Passing' on the top (with a light orange background) and 'Refined Message Passing' on the bottom (with a light blue background), both operating on a bipartite graph G composed of two sets of nodes, u and v. Each section contains a graph representation with nodes u1, u2, u3 (in yellow circles) and v1, v2, v3 (in green squares), connected by edges: blue lines represent positive edges and red lines represent negative edges, as indicated in the legend. The input feature matrix X* is fed into both sections.

In the 'Signed Personalized Message Passing' section, multiple 'Signed Message Passing' modules (yellow rectangles) process the graph iteratively. Their outputs are aggregated by a 'Layer-Wise Aggregator' (light green rectangle), producing an embedding H*. In parallel, the 'Refined Message Passing' section applies a 'Low-Rank Approximation' (gray rectangle) to the original graph G to generate a refined graph Ĝ. This refined graph then undergoes its own sequence of 'Signed Message Passing' modules, followed by another 'Layer-Wise Aggregator', yielding embedding Ĥ*.

The embeddings H* and Ĥ* are concatenated using a symbol resembling a cross (as defined in the legend as 'Concatenation') to form the final node representation matrix Z*. This matrix is then used for downstream tasks. Specifically, for each node pair (u, v), the corresponding row vectors Zu(u) and Zv(v) from Z* are fed into a 'Sign Classifier' (light blue trapezoid), which outputs a predicted link sign ŷuv. The prediction is evaluated using 'BCE Loss for Link Sign Prediction' (light orange rectangle).

On the far right, a separate box labeled 'Link Sign Prediction' illustrates the task: given nodes u and v, predict whether the link between them is positive (+) or negative (-), represented by a dashed line with a question mark above it.

The figure includes a legend in the top-right corner specifying: blue lines for positive edges, red lines for negative edges, and a cross symbol for concatenation. The entire architecture is designed to learn robust node representations for accurate link sign prediction in signed bipartite graphs.
