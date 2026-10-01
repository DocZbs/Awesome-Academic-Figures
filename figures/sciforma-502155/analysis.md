# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

What makes a good metric? Evaluating automatic metrics for text-to-image consistency — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13989

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hierarchical semantic relationship structure used for generating negative questions via WordNet, specifically leveraging hypernym-hyponym relationships. The global layout is a directed acyclic graph centered around the concept 'edible_fruit' at the top, which serves as a hypernym. From this node, two downward arrows point to 'avocado' and 'berry', both enclosed in rounded rectangular boxes, indicating they are co-hyponyms of 'edible_fruit'. These two nodes further branch out: 'berry' has two outgoing arrows pointing to 'blackberry' and 'blueberry', while 'avocado' has no further descendants shown. The term 'apple' appears to the left of 'avocado', connected by an arrow from 'edible_fruit', suggesting it is also a hyponym of 'edible_fruit' but not directly linked to the other hyponyms in the diagram. Labels 'hypernym' and 'hyponyms' are placed to the right of the respective nodes in orange text, clarifying the semantic roles. All nodes are rendered in black text, with 'avocado' and 'berry' distinguished by rounded rectangles, while others are plain text. The connections are solid black arrows pointing downward, indicating the direction of the semantic hierarchy from general to specific. The caption explains the methodology: given a question like 'Is there an apple? A: yes', the word 'apple' is processed by finding its hypernym (e.g., 'edible_fruit') and then sampling from its co-hyponyms (e.g., 'avocado', 'berry'). Further sampling from the hyponyms of 'berry' (e.g., 'blackberry') leads to a negative question such as 'Is there a blackberry? A: no'. This process demonstrates how semantic similarity via WordNet’s synsets enables the generation of semantically related but logically negative variants of original questions.
