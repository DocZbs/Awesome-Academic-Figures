# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SGAC: A Graph Neural Network Framework for Imbalanced and Structure-Aware AMP Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16276

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall framework of a computational model for antimicrobial peptide (AMP) classification, structured as a multi-stage pipeline. The global layout is divided into two main horizontal pathways: an upper pathway for 3D structure prediction and a lower pathway for graph-based feature learning and classification, with a dashed arrow connecting them to indicate the flow of information from structure to graph representation.

In the upper section, the process begins with a 'Peptide Sequence Corpus' shown as a yellow-bordered box containing several example amino acid sequences. This corpus is split into two cylindrical data repositories: a light blue cylinder labeled 'AMP data' and a light red cylinder labeled 'non-AMP data'. Both data sources feed into a lavender rectangular module named 'Omegafold', which performs 3D structure prediction. The output of Omegafold is depicted as a large circular region containing multiple colorful 3D protein structures, labeled 'Predicted 3D structure of all peptides'.

A dashed black arrow extends from this 3D structure region downward to the lower pathway, indicating that these predicted structures are used to construct a graph representation. In the lower section, a large circular area labeled 'Constructed graph structure of all peptides' displays four example peptide graphs (peptide-1 to peptide-4), each represented as a network of interconnected nodes. Each node is a colored circle labeled with a one-letter amino acid code (e.g., Y, F, L, N, S, etc.), symbolizing Cα atoms, with edges representing spatial or structural relationships.

This constructed graph is fed into a lavender rectangular module titled 'Graph Encoder', which processes the graph data to extract structural and relational features. From the Graph Encoder, three distinct loss functions branch out, each represented as a light green rectangle: 'Classification loss', 'Pseudo-label loss', and 'Contrastive loss'. These losses are designed to refine the learned representations through supervised classification, pseudo-label distillation, and contrastive learning, respectively. The outputs of all three loss modules converge into a single lavender rectangular box labeled 'Final Prediction', which represents the model's ultimate classification decision.

The visual design uses consistent color coding: lavender for core processing modules, light green for loss functions, and distinct colors for nodes in the peptide graphs to differentiate amino acids. All connections are indicated by white arrows, with the exception of the dashed black arrow linking the 3D structure prediction to the graph construction step. The entire diagram is organized logically from left to right and top to bottom, reflecting the sequential nature of the method: from raw sequence data, through 3D structure prediction, to graph construction, feature encoding, multi-loss optimization, and final prediction.
