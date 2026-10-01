# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Graph-Convolutional Networks: Named Entity Recognition and Large Language Model Embedding in Document Clustering — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14867

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a multi-stage model pipeline for document graph construction using named entity recognition (NER), similarity modeling, and clustering. The global layout is a left-to-right flowchart with a central component for embedding space and a lower section dedicated to graph construction. The process begins on the left with a stack of yellow document icons labeled 'Documents', each containing sample text such as 'Mbappé scored two goals against OM'. An arrow labeled 'Train similarity model' points from these documents to a 3D coordinate system titled 'Embedding space', which visualizes entities as colored dots: CR7 (purple), Messi (green), PSG (red), and OM (blue), connected by dashed lines indicating semantic relationships. From the embedding space, an arrow labeled 'NER' leads to another stack of documents where named entities like 'Mbappé' and 'OM' are highlighted in blue, indicating entity recognition. Below this, a box labeled 'Named Entity similarity calculation' processes these entities to determine context similarity. This leads to two document snippets: one green box with 'Mbappé scored two goals against OM' and another purple box with 'Kylian Mbappé joined Macron for an educational initiative with the UN'. These are linked via arrows labeled 'Different contexts' and 'Similar contexts' to a third green box: 'CR7 score a winning goal against Al-Hilal', illustrating how similar contexts are identified. The lower half of the diagram shows a 'Document Graph Construction' module labeled 'GCC', which receives input from the context comparison step. This module outputs a graph composed of six circular nodes (X1 to X6) connected by black edges. Nodes X1, X2, and X3 are grouped within a blue dashed oval, while X4, X5, and X6 are enclosed in a red dashed oval, indicating two distinct clusters. Node X6 is orange, connecting both clusters, suggesting a bridging role. The entire pipeline demonstrates how raw documents are transformed into a structured graph through embedding, NER, context similarity analysis, and clustering.
