# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scaling of Search and Learning: A Roadmap to Reproduce o1 from Reinforcement Learning Perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14135

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative visualization of search tree node definitions across three distinct levels of granularity: Token Level, Step Level, and Solution Level. Each level is enclosed within a dashed red rectangular boundary and arranged horizontally from left to right. At the top of each section is a pink rounded rectangle labeled 'Let w≠1 be ...', serving as the root node for the respective search tree.

In the Token Level section (leftmost), the root node branches downward into four child nodes: '2' (gray), 'π' (pink), 'Let's' (gray), and 'P' (gray). From 'π', further branches extend to four operators: '(' (pink), ')' (gray), '-' (gray), and '*' (gray). The '(' node then branches to four more tokens: '2' (pink), '-' (gray), 'w' (gray), and '≠' (gray). Red arrows indicate specific paths through the tree, highlighting a sequence starting from the root, selecting 'π', then '(', and finally '2'. All nodes are rectangular with rounded corners; pink nodes denote selected or active paths, while gray nodes represent alternatives.

The Step Level section (middle) shows a hierarchical structure where the root node branches into three 'Step 1' nodes—two gray and one pink. The pink 'Step 1' node further branches into three 'Step 2' nodes—one pink and two gray. The pink 'Step 2' node then branches into three 'Step 3' nodes—one pink and two gray. Again, red arrows trace a path through the pink nodes, illustrating a sequential progression from Step 1 to Step 3 along the highlighted route.

The Solution Level section (rightmost) displays the coarsest granularity. The root node branches into three nodes labeled 'Step 1-3; ...The answer is 320' (pink), 'Step 1-3; ...The answer is 561' (gray), and 'Step 1-3; ...The answer is 179' (gray). The pink node further branches into three more solution nodes: 'Step 1-3; ...The answer is 321' (pink), 'Step 1-3; ...The answer is 376' (gray), and 'Step 1-3; ...The answer is 176' (gray). Red arrows again highlight the path through the pink nodes, indicating a refinement or continuation of the selected solution path.

All connections between nodes are represented by black lines with arrowheads pointing downward, except for the red arrows which emphasize the chosen traversal path in each tree. The consistent use of pink for selected nodes and red arrows across all three sections visually aligns the concept of path selection across increasing levels of abstraction. The figure effectively illustrates how search trees can be structured at varying granularities, from individual tokens to complete solutions, with the pink color consistently denoting the active or preferred branch at each level.
