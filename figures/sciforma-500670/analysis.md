# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SE-GCL: An Event-Based Simple and Effective Graph Contrastive Learning for Text Representation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11652

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of SE-GCL, a method for event-based semantic and structural embedding learning through contrastive learning. The global layout is a left-to-right pipeline divided into four main stages: input processing, event skeleton extraction, dual embedding generation (semantic and structural), and final embedding contrastive optimization.

On the far left, the input consists of 'Long text' represented by stacked document icons in a light blue rounded rectangle. This text is tokenized into 'Words', shown as a grid of black and gray circles in a purple rounded rectangle, symbolizing word tokens. These words feed into two parallel pathways.

The upper pathway processes words through a 'word2vec' module (gray rectangle), followed by an MLP (multilayer perceptron) depicted as a neural network with pink nodes and connections. The output of this pathway is labeled 'Event Semantic Embedding' and denoted as H⁺, represented as a matrix of pink circular nodes arranged in rows.

The lower pathway begins with 'Event Skeleton Extraction', enclosed in a light green rounded rectangle. It first constructs an 'Intra-Relation Graph' (dashed gray box with interconnected gray nodes), then extracts an 'Event Skeleton' (dashed pink box with highlighted black edges on the same graph structure). This event skeleton is fed into the 'Event-Based Structure Embedding' module (light peach rounded rectangle), which uses a GCN (Graph Convolutional Network) shown as multiple stacked graph layers with orange nodes and edges. The output is labeled H⁺_s, represented as a matrix of orange circular nodes.

Both H⁺ and H⁺_s are combined in the 'Embedding Generation' module (white vertical rectangle). Here, H⁺ is shuffled to produce H⁻ (negative embedding, gray rectangle), and H⁺ is sampled to generate H⁺_e (event embedding, green rectangle). Additionally, H⁺_s is retained as a separate embedding (orange rectangle).

The final stage visualizes the contrastive learning objective in a 3D space. A central pink node represents the anchor embedding. Red arrows labeled ζ_s and ζ_e point toward nearby green nodes (positive samples), indicating minimized distances. Black arrows labeled ζ_u point away from distant gray nodes (negative samples), indicating maximized distances. The legend clarifies: black arrows mean 'away', red arrows mean 'near', and ζ denotes loss functions. This visualization demonstrates the contrastive loss mechanism that pulls positive pairs closer and pushes negative pairs farther apart.
