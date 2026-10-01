# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Think&Cite: Improving Attributed Text Generation with Self-Guided Tree Search and Progress Reward Modeling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14860

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Self-Guided Monte Carlo Tree Search (SG-MCTS) process for answering the input question: 'What natural place is located in or near Gunnison?'. The global layout is a tree-like structure with nodes representing search steps, branching from an initial query node at the top left. The root node, labeled 'Input Question', is a light green rounded rectangle. From this, two primary branches emerge, each leading to a query node. One branch leads to a failed node (white background, dashed border), marked with a reflection note: 'The search results do not provide useful information' in magenta text, indicating a dead end. The other branch leads to a success node (light blue background, solid border), which contains a query ('Gunnison natural place attractions'), a generated sentence ('Gunnison is located near several notable natural places...'), and reward values: R_g = 0.25 and R_a = 1.0. This success node further branches into two child nodes, both also success nodes (light blue), each with their own query, generated sentence, and reward values. One child queries 'the Blue Mesa Reservoir' with R_g = 0.23, R_a = 0.5; the other queries 'Gunnison other natural attractions' with R_g = 0.23, R_a = 0.66. These nodes connect via arrows to additional success nodes, forming a deeper tree. For instance, the 'Blue Mesa Reservoir' node leads to another success node with R_g = 0.32, R_a = 1.0, and the 'other natural attractions' node leads to a success node with R_g = 0.33, R_a = 1.0, which corresponds to 'the Black Canyon'. The figure includes a legend in the bottom left corner defining 'Failed Node' (white, dashed) and 'Success Node' (light blue, solid). At the bottom, three reference boxes [1], [2], and [3] display the source text snippets used to generate the sentences, with key phrases highlighted in bold. The connections between nodes are represented by black arrows, indicating the flow of the search process. The entire diagram uses rounded rectangles for nodes, with text inside specifying the query, generated sentence, and reward metrics. The visual hierarchy emphasizes successful paths through color coding and branching, while failed paths are visually distinguished by dashed borders and reflection annotations.
