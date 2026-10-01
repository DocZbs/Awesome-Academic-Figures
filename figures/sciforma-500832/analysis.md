# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The Eclipsing Binaries via Artificial Intelligence. II. Need for Speed in PHOEBE Forward Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11837

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a deep artificial neural network (ANN) designed for modeling flux based on six input parameters. The global layout is a feedforward structure arranged horizontally from left to right, consisting of an Input Layer (IL), six Hidden Layers (HLs), and an Output Layer (OL). The IL is positioned on the far left, followed by the six HLs grouped under a bracket labeled 'Hidden Layers (HLs)', and finally the OL on the far right, labeled 'Output Layer (OL)' with a vertical bracket indicating 'Flux' as the output variable.

Visual modules include circular nodes representing neurons. The IL comprises six green circular nodes, each labeled with an input parameter: e sin ω, e cos ω, cos i, (R₁ + R₂)/a, R₂/R₁, and T₂/T₁. Each HL consists of 512 gray circular nodes, arranged vertically in columns, with ellipses (...) indicating omitted nodes for visual clarity. The OL contains 501 red circular nodes, also arranged vertically with ellipses to denote omitted nodes. Below each layer, textual annotations specify the number of nodes and the activation function (AF): the IL has no AF specified; the first HL uses 'elu'; the subsequent five HLs use 'sigmoid'; and the OL uses 'linear'.

Connections are represented by thin black lines forming a fully connected network between consecutive layers. Every node in one layer connects to every node in the next layer, creating a dense web of connections. The arrows are implicit in the directional flow from left to right, indicating forward propagation. The diagram includes no explicit arrowheads but relies on the sequential arrangement to convey directionality. The overall structure emphasizes depth and width, with consistent node counts per HL and a final OL tailored to output 501 flux values. The caption specifies that this ANN was selected as the best performer via cross-validation using 1,000,000 training and 250,000 validation objects, and trained with the Adam optimization algorithm.
