# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MalCL: Leveraging GAN-Based Generative Replay to Combat Catastrophic Forgetting in Malware Classification — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01110

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct neural network architectures labeled (a) Generator, (b) Discriminator, and (c) Classifier, arranged horizontally side-by-side. Each architecture is depicted as a sequential flow of layers represented by vertically oriented rectangular blocks, connected by horizontal lines indicating data flow from left to right. Below each architecture, a light purple rectangular box contains the text 'BN, ReLU', indicating that Batch Normalization and ReLU activation are applied after each layer unless otherwise specified.

In section (a) Generator, the architecture begins with four orange rectangular blocks labeled 'conv 1d', followed by two gray blocks labeled 'fully conn'. These are succeeded by three red blocks labeled 'convTranspose 1d', and finally a white block labeled 'Sigmoid'. The layers are connected sequentially by black horizontal lines.

Section (b) Discriminator starts with two orange 'conv 1d' blocks, followed by two gray 'fully conn' blocks, and ends with a white 'Sigmoid' block. A red-outlined rounded rectangle labeled 'feature for FML' is positioned above the second 'conv 1d' block and connects via a red line to the first 'fully conn' block, indicating that features extracted at this point are used for further processing in a feature-based learning module (FML).

Section (c) Classifier consists of two orange 'conv 1d' blocks, followed by a blue 'Dropout' block, then a purple 'Max Pooling' block. This is followed by another orange 'conv 1d', a blue 'Dropout', a gray 'fully conn', another blue 'Dropout', and concludes with a magenta 'Softmax' block. Above the 'fully conn' block, a red-outlined rounded rectangle labeled 'logits' connects via a red line, indicating that the output of this layer serves as logits for classification.

All connections between layers are shown as solid black horizontal lines. The color coding distinguishes layer types: orange for convolutional layers, gray for fully connected layers, blue for dropout, purple for max pooling, and magenta for softmax. The red outlines and lines highlight specific outputs or feature extraction points critical for the overall framework's functionality.
