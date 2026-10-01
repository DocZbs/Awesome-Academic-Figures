# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Improving the network traffic classification using the Packet Vision approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19360

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a high-level architectural overview of three convolutional neural network (CNN) models—AlexNet, ResNet-18, and SqueezeNet—used in a comparative evaluation, with a clear top-to-bottom data flow from input to output. The global layout is vertically structured: at the top is the Input Layer, followed by a large rectangular box containing the three CNN architectures labeled (a), (b), and (c), and finally the Output block at the bottom. All components are connected by solid black arrows indicating the forward propagation of data.

The Input Layer is depicted as a stack of three grayscale, striped rectangular planes, symbolizing a 3-channel image, with accompanying text specifying its dimensions as (224 x 224 x 3). This layer feeds into the central box containing the three CNN models.

Within the central box:

(a) AlexNet is represented by a sequence of five colored 3D rectangular blocks arranged horizontally, each differing in color (blue, green, yellow, orange, purple), suggesting distinct layers or feature extraction stages. These blocks are aligned side-by-side, indicating a straightforward feed-forward structure without skip connections.

(b) ResNet-18 is illustrated using multiple blue 3D rectangular blocks arranged in pairs, with each pair connected via a horizontal line to a small oval-shaped node. These ovals represent residual connections, where the output of one block is added to the input of the next. The diagram includes ellipses on both sides to indicate that the full network extends beyond what is shown. The structure emphasizes the skip connections that allow gradients to flow directly through the network.

(c) SqueezeNet is shown with a blue 3D block feeding into two parallel orange 3D blocks, which then converge into a single orange block via dashed lines. This represents the fire module, where the 'squeeze' layer reduces dimensionality before expanding features in the 'expand' layer. The dashed lines indicate the merging of outputs from the two branches. Ellipses on either side suggest the repetition of this module throughout the network.

Below the central box, the Output block is a black rectangle with white text listing four categories: Bit Torrent, DNS, IoT, and VoIP. This indicates that the CNNs are being used for classification tasks, likely in the context of network traffic identification or similar applications.

All connections between components are solid black arrows pointing downward, signifying the unidirectional flow of data from input through the models to the final classification output. The figure serves as a schematic comparison of the core architectural designs of the three CNNs, highlighting their structural differences in layer organization and connectivity patterns.
