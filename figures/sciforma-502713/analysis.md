# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Associative memory inspires improvements for in-context learning using a novel attention residual stream architecture — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15113

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two schematic diagrams labeled (a) and (b), illustrating components of attention-based neural network architectures. Diagram (a) shows a simplified representation of the AMICL model. It features a single rectangular box labeled 'X' at the top, representing an input variable. From this box, three gray lines extend downward: one passes through a circular node labeled 'f', which then splits into two lines leading to boxes labeled 'Q' and 'K'; the third line goes directly to a box labeled 'V'. All boxes have bold black borders and contain centered mathematical symbols. The circular node 'f' indicates a transformation function applied to X to produce Q and K, while V is derived directly from X via an identity mapping (no circle). This structure represents the generation of query (Q), key (K), and value (V) vectors from an input feature matrix X.

Diagram (b) illustrates a more complex residual attention stream architecture with two sequential Transformer layers, labeled n−1 and n. At the top, a large rectangular box labeled 'X_{n−1}' feeds into three parallel branches. Each branch includes a circular node labeled W^q, W^k, or W^v, respectively, representing linear projection matrices. These project X_{n−1} into three outputs: Q_{n−1}, K_{n−1}, and V_{n−1}, each represented by a bold-bordered rectangular box. Dotted gray arrows descend from these outputs to a central box labeled 'X_n', indicating that these are inputs to the next layer’s computation (though intermediate steps like attention and feed-forward are omitted for brevity). Below X_n, the same projection process repeats: W^q, W^k, and W^v transform X_n into Q_n, K_n, and V_n. A key feature is the residual connection: a gray curved arrow bypasses the processing of layer n and connects X_{n−1} directly to a plus sign (+) node. Additionally, a green curved arrow connects V_{n−1} to another plus sign node, indicating an added residual component specifically for the value stream. Both plus signs combine their inputs to form the final output of the layer. The green arrow highlights the residual addition to the value stream, as noted in the caption. All connections are solid gray arrows except for the dotted ones, which denote omitted functions or variables for space efficiency. The layout is vertically stacked, emphasizing the sequential flow from layer n−1 to layer n, with side-by-side projections and residual paths.
