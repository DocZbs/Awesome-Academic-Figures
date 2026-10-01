# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Graph-Guided Textual Explanation Generation Framework — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12318

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a four-step framework for improving Natural Language Entailment (NLE) reasoning through post-hoc explanation integration and graph-based modeling. The global layout is a horizontal workflow divided into four main stages, each labeled with a blue rounded rectangle: '1. Base model training', '2. Highlight explanations extraction', '3. Graph structure construction', and '4. GNN integration', culminating in 'More faithful NLE'.

In stage 1, a T5 model, depicted as a pink rounded rectangle with a flame icon, is trained on a given NLE task. An example input includes a premise ('An old man poses in front of an advertisement') and a hypothesis ('A man walks by an ad'), leading to a predicted label 'Contradiction' shown in green text below the model.

Stage 2 involves extracting three types of highlight explanations from the trained model. These are presented as white rounded rectangles branching from the T5 model: 'Highlight token' (e.g., 'man, person, walk, pose...'), 'Token interactive' (e.g., '(man & person), (walk & pose)'), and 'Span interactive' (e.g., '(walk by & pose in front of)'). These represent atomic tokens, pairwise token interactions, and span-level interactions respectively.

Stage 3 constructs a graph structure from these extracted explanations. A small undirected graph is shown with four nodes: 'man' (orange), 'pose' (blue), 'person' (pink), and 'walk' (green), connected by gray edges. This graph visually represents the relationships among the highlighted elements, where nodes correspond to tokens or spans and edges denote their interactions.

Stage 4 integrates this graph into the model via a GNN layer. The model architecture is shown as a vertical stack of layers within a magenta-dashed border: two 'Encoder layer' blocks (blue), one 'GNN layer' (orange), followed by two 'Decoder layer' blocks (green). Dotted lines between layers indicate multiple similar layers. An arrow from the graph points to the GNN layer, indicating the graph structure is fed into it.

Finally, the output is a more faithful NLE explanation: 'The label is contradiction, because a man cannot pose and walk at the same time.' The words 'contradiction', 'pose', and 'walk' are color-coded in green, orange, and brown respectively, aligning with the node colors in the graph, emphasizing the reasoning path derived from the integrated graph structure.
