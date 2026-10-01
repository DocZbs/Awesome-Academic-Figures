# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Extending TWIG: Zero-Shot Predictive Hyperparameter Selection for KGEs based on Graph Structure — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14801

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is composed of two side-by-side diagrams labeled (a) and (b), illustrating a knowledge graph and a link-prediction task, respectively. The global layout is horizontal, with diagram (a) on the left and diagram (b) on the right, both sharing the same node set and relational structure but differing in visual emphasis to convey training versus inference contexts.

In diagram (a), titled 'Sample knowledge graph', all nodes are represented as solid black circles with black borders, each containing a character name: Legolas, Sauron, Saruman, Gimli, Pippin, Sam, Frodo, and Witch King. Directed edges connect these nodes, labeled with either 'Friend-of' or 'Enemy-of' to denote relationships. The edges are solid black arrows pointing from the subject to the object of the relation. For instance, an arrow from Legolas to Sauron is labeled 'Enemy-of', while an arrow from Pippin to Gimli is labeled 'Friend-of'. The graph forms a network where characters are interconnected through these binary relations, forming a complex web of alliances and enmities.

Diagram (b), titled 'Link-prediction query', visually distinguishes between known training data and the target prediction. Nodes and edges involved in the training data are rendered in light gray with thin borders and faint labels, while the query components are highlighted in bold black. Specifically, the node labeled '?' (representing an unknown entity) and its incoming edge from Witch King labeled 'Enemy-of' are shown in bold black. Additionally, the outgoing edge from this '?' node to Gimli labeled 'Friend-of' is also bold black, indicating it is the target link to be predicted. All other nodes and edges remain in gray, signifying they are part of the observed training graph. This contrast emphasizes that the model must infer the identity of the '?' node and/or predict the existence and type of the missing link based on the known relationships.

Connections and arrows are consistent across both diagrams: directed, solid lines with arrowheads indicating directionality, and text labels placed near the middle of each edge to specify the relation type. In diagram (b), the bold black elements form a subgraph centered around the '?' node, which receives an 'Enemy-of' relation from Witch King and emits a 'Friend-of' relation toward Gimli. This structure defines the link-prediction task: given the context of known relationships, predict the missing entity or relationship. The figure caption clarifies that the left panel shows a sample knowledge graph where nodes represent people and edges represent friendship or enmity, while the right panel illustrates a query for link prediction using black for the query and gray for training data.
