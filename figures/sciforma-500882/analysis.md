# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BetaExplainer: A Probabilistic Method to Explain Graph Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11964

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents six distinct Graph Neural Network (GNN) architectures, each labeled with a unique identifier: SG-BASE, SG-HETEROPHILIC, SG-LESSINFORM, SG-MOREINFORM, SG-UNFAIR, and SERGIO. These architectures are arranged in two rows: the top row contains four models (SG-BASE through SG-MOREINFORM), and the bottom row contains two models (SG-UNFAIR and SERGIO). Each model is depicted as a vertical stack of rectangular blocks representing sequential layers, with layer names and dimensions specified inside each block. All blocks are white with black borders and black text, and there are no arrows or explicit connections drawn between blocks; the vertical stacking implies forward propagation order.

In the top row, all four models follow a similar structure: an Input layer, followed by a GCNConv layer, a ReLU activation, a Dropout layer (50%), another GCNConv layer, and finally an Output layer. The input and output dimensions vary across models. SG-BASE has an input of size 13202x12 and output of 13202x2, with GCNConv layers of 12x16 and 16x2. SG-HETEROPHILIC uses input 13375x12 and output 13375x2, with identical GCNConv layers. SG-LESSINFORM has input 13193x22 and output 13193x2, with a first GCNConv layer of 22x16. SG-MOREINFORM has input 13362x12 and output 13362x2, with GCNConv layers matching SG-BASE and SG-HETEROPHILIC.

In the bottom row, SG-UNFAIR follows the same pattern as the top-row models: Input (13179x12), GCNConv (12x16), ReLU, Dropout (50%), GCNConv (16x2), Output (13179x2). SERGIO differs significantly: it starts with Input (100x1), followed by SAGEConv (1x2), then Dropout (20%), Global Max Pooling, and ends with Output (1x2). This model uses SAGEConv instead of GCNConv and includes a pooling layer, distinguishing it from the others.

All models are presented as standalone vertical stacks, with no inter-model connections or shared components shown. The figure serves as a reproducibility record of the GNN architectures used as inputs for explainers, as stated in the caption. No colors or additional visual attributes are used beyond black text on white rectangles with black borders. The layout is clean and modular, emphasizing clarity and direct comparison of architectural choices across models.
