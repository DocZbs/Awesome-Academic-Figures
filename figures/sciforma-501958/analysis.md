# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a general layer fusion scheme in a deep convolutional neural network architecture, depicted as a 3D stacked structure of three gray rectangular blocks representing successive feature maps or layers. The layout is vertical, with the top block being the largest and each subsequent block progressively smaller, indicating spatial downsampling through the network. Each block is rendered in dark gray with a slight 3D perspective, giving depth to the representation. Within each block, a smaller square region is highlighted in light red with a thin red border, symbolizing a specific receptive field or feature region being processed. These red regions are aligned vertically across all three layers, connected by dashed black lines that trace the spatial correspondence from the top layer down to the bottom layer, demonstrating how a particular feature location is mapped through successive layers. On the left side of the figure, two downward-pointing black arrows indicate the flow between layers. The first arrow, pointing from the top to the middle block, is labeled 'Conv1+ReLU+Pool', signifying the first convolutional block comprising a convolutional layer, ReLU activation, and pooling operation. The second arrow, pointing from the middle to the bottom block, is labeled 'Conv2+ReLU+Pool', indicating a second similar processing block. This sequential arrangement implies a hierarchical feature extraction process where each stage reduces spatial dimensions while increasing abstraction. The overall structure visually conveys the concept of feature propagation and spatial reduction through stacked convolutional layers, with the red regions emphasizing the consistent tracking of a single receptive field across the network depth. The caption 'General layer fusion scheme' suggests this diagram represents a common pattern in CNN architectures for integrating features across multiple layers, possibly for tasks like object detection or segmentation where spatial context is preserved through fusion mechanisms.
