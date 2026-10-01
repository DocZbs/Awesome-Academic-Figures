# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a general Convolutional Neural Network (CNN) architecture, structured into two main stages: Feature Extraction and Classification. The global layout is left-to-right, showing a sequential flow from input to output. The entire diagram is rendered in black and white, using simple geometric shapes and labeled text to denote components and their parameters.

In the Feature Extraction stage, the process begins with an 'Input Image' represented as a stack of N₁ rectangular layers, each of size R₁×C₁. This is followed by a 'Convolution' operation, depicted as a filter (a small square kernel) sliding over the input image. The convolution layer is parameterized as M₁, K₁×K₁×N₁, indicating M₁ filters of size K₁×K₁ applied across N₁ input channels. The result is a set of 'Feature Maps' denoted as M₁, R₂×C₂, shown as a stack of rectangles with reduced spatial dimensions compared to the input. These feature maps are then passed through a 'Pooling' layer, symbolized by a smaller square kernel operating on the feature maps. The pooling operation is specified as S_P1, P₁×P₁, where P₁×P₁ represents the pooling window size. The output of pooling is another set of 'Feature Maps' labeled M₁, R₃×C₃, with further reduced spatial dimensions. A dashed line connects the pooling output to the next stage, indicating potential additional convolution-pooling blocks not shown explicitly.

The Classification stage follows, beginning with a 'Fully-Connected Layers' block. This is visualized as a multi-layered neural network with circular nodes representing neurons. The first hidden layer contains multiple circles connected via solid lines to the second hidden layer, which in turn connects to the final output layer. Dashed vertical lines between nodes indicate that the number of neurons is not fully drawn but implied. The final output layer consists of a set of circles labeled 'Outputs Num_classes', representing the predicted class probabilities or scores for each of the Num_classes categories.

Connections are shown as directed arrows: solid lines from the input image to the convolution layer, from convolution to pooling, and from pooling to the fully-connected layers. Within the fully-connected layers, solid lines represent connections between neurons across layers. The entire Feature Extraction section is grouped under a large curved brace labeled 'Feature Extraction', while the Classification section is similarly grouped under a brace labeled 'Classification'. All text labels are in plain black font, with mathematical notation used for dimensions and parameters. The diagram uses no color, relying solely on shape, position, and text to convey information.
