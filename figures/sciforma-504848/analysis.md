# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating deep learning models for fault diagnosis of a rotating machinery with epistemic and aleatoric uncertainty — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18980

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Bayesian neural network architecture designed for processing input data, specifically labeled as 'burst'. The global layout is linear and sequential, progressing from left to right, representing the forward pass of data through the network. The structure begins with an input module, followed by two identical convolutional and pooling blocks, then a flattening operation, a Bayesian dense layer, and finally an output layer.

Visual modules are represented using distinct shapes and colors to differentiate their functions. The input is depicted as a vertically oriented, light blue oval labeled 'Input (burst)', indicating the initial data feed. Following this are two 3D cube-shaped blocks, each filled with a light blue gradient and outlined in a darker blue, labeled 'Conv+Pool' in bold black text. These represent stacked convolutional and pooling layers, commonly used in convolutional neural networks for feature extraction. After the second Conv+Pool block, a black arrow labeled 'Flatten' points to the next module, which is a vertically oriented, light beige oval labeled 'Bayesian Dense layer' in bold black text. This signifies a fully connected layer incorporating Bayesian principles, likely for uncertainty quantification. The final module is a white oval labeled 'Output layer', also in bold black text, representing the network's final prediction or classification output.

Connections between modules are shown via solid black arrows, indicating the unidirectional flow of data. The first arrow connects the input to the first Conv+Pool block. A second arrow links the first to the second Conv+Pool block. The third arrow, explicitly labeled 'Flatten', connects the second Conv+Pool block to the Bayesian Dense layer, denoting the transformation of multi-dimensional feature maps into a one-dimensional vector. The final arrow connects the Bayesian Dense layer to the Output layer, completing the forward propagation path. The entire diagram is clean, minimalistic, and uses consistent font styles and alignment to emphasize the modular and sequential nature of the network architecture.
