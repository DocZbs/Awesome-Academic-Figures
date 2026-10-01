# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Why Are Positional Encodings Nonessential for Deep Autoregressive Transformers? Revisiting a Petroglyph — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00659

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel diagrams illustrating the behavior of autoregressive Transformers with multiple layers when processing two different input sequences: (a, b, c) on the left and its permutation (b, a, c) on the right. Each diagram consists of three vertical layers representing sequential processing steps, with nodes at each level corresponding to the context sets observed at that position during processing.

[1] Global Layout and Structure:
Each diagram is structured as a three-tiered cascade from bottom to top. The bottom tier contains three circular nodes labeled 'a', 'b', and 'c' representing the input tokens in order. The middle tier has three oval nodes representing intermediate context sets formed after processing each token sequentially. The top tier contains three oval nodes representing the final context sets at the output layer. The left diagram processes (a, b, c), while the right processes (b, a, c). The two diagrams are symmetrically aligned for comparison.

[2] Visual Modules and Attributes:
All nodes are enclosed in white ovals or circles with black borders. Text inside nodes is black except in the right diagram, where the token 'b' and its derived context sets are highlighted in orange to emphasize differences caused by the permutation. The bottom-level nodes are simple circles containing single tokens. Middle and top-level nodes contain sets of sets, such as '{a}', '{{a}, {a, b}}', or '{{a}, {a, b}, {a, b, c}}', indicating the accumulated context at each processing step. The top-level nodes show the full context available to the model at each position after all prior tokens have been processed.

[3] Connections and Arrows:
Black arrows indicate the flow of information from lower to higher layers. From each bottom-level token node, arrows point upward to all subsequent middle and top-level nodes, reflecting the autoregressive nature where each token's context includes all previously processed tokens. For example, in the left diagram, token 'a' feeds into all three middle and top nodes, 'b' feeds into the last two, and 'c' feeds into the last one. Similarly, in the right diagram, token 'b' (highlighted in orange) feeds into all three upper nodes, 'a' into the last two, and 'c' into the last one. The connections demonstrate that each position in the top layer receives context from all preceding tokens, leading to distinct context sets for each position. Crucially, because the first token differs between the two sequences, the context sets at every subsequent position in the top layer differ between the two diagrams, highlighting the sensitivity of multi-layer autoregressive Transformers to input order. In contrast, a one-layer model would not distinguish between these sequences after the second token, as noted in the caption.
