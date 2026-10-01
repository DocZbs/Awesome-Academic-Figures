# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Extending TWIG: Zero-Shot Predictive Hyperparameter Selection for KGEs based on Graph Structure — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14801

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the TWIG neural network, designed to predict ranks by integrating two distinct learning pathways: hyperparameter learning and structure learning. The global layout is hierarchical and modular, divided into three main vertical sections: Hyperparameter Learning (yellow), Structure Learning (magenta), and Integration (red), with a final output block at the bottom. At the top, a single input box labeled 'TWIG Input Features (32)' splits into two branches, one feeding into each learning pathway. This input comprises 23 structural features and 9 hyperparameter features.

In the Hyperparameter Learning branch (yellow background), the 9 hyperparameter features pass through a ReLU activation function, followed by a dense layer with 9 inputs and 6 outputs. In the Structure Learning branch (magenta background), the 23 structural features first go through a ReLU activation, then a dense layer with 23 inputs and 10 outputs, followed by another ReLU and a second dense layer with 10 inputs and 10 outputs. Both pathways conclude with ReLU activations before converging.

The Integration section (red background) combines the outputs from both pathways. The merged feature vector (of size 16) enters a dense layer with 16 inputs and 8 outputs, followed by a ReLU activation. This is followed by a second dense layer with 8 inputs and 1 output. The final output is obtained by applying the transformation 'ReLU + 1' to this single value, resulting in the 'Output (1) - predicted rank'. All connections between modules are represented by solid black arrows indicating the forward flow of data. The diagram uses rectangular boxes for layers and activation functions, with clear labels specifying input/output dimensions and activation types. The color-coding (yellow, magenta, red) visually distinguishes the three functional components as described in the caption.
