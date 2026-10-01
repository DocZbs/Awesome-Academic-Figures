# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Attending To Syntactic Information In Biomedical Event Extraction Via Graph Neural Networks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01158

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a GNN-based biomedical event extraction model initialized by the BioBERT encoder. The overall layout is hierarchical and left-to-right, with data flowing from input text at the bottom to final classification outputs at the top. The structure is divided into two main processing streams: one for trigger or entity classification and another for argument role labeling, both converging through a central Graph Neural Network (GNN) module.

At the bottom, the input is a sequence of tokens represented as green squares, which feed into the BioBERT model. BioBERT processes these tokens and produces contextualized embeddings, shown as stacked red and green rectangles above it—each representing a token’s embedding. These embeddings are then passed upward to the GNN module.

In parallel, the same input text is processed by a Dependency Parser, which generates an Adjacency Matrix. This matrix captures syntactic relationships between tokens and is fed into the GNN as structural information, enabling the model to consider sentence dependencies during graph learning.

The GNN takes both the token embeddings from BioBERT and the adjacency matrix as inputs. It computes node representations for each token, producing two distinct outputs: Head Representation and Tail Representation. These representations are combined via a circular fusion operator (depicted as a circle with intersecting arrows), which merges them into a joint representation.

From this fused representation, the model proceeds to two separate output branches. The first branch passes the fused representation through a Fully Connected Layer 2, leading to Argument Role Labeling. The second branch routes the GNN’s output directly through a Fully Connected Layer 1, resulting in Trigger or Entity Classification.

All modules are represented as light blue rectangular boxes with black borders and black text, except for 'BioBERT', which is highlighted in blue text to emphasize its role as the foundational encoder. The connections between modules are indicated by solid black arrows, showing the direction of data flow. The entire pipeline is designed to leverage both semantic context from BioBERT and syntactic structure from the dependency parser within a GNN framework to perform biomedical event extraction tasks.
