# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Parallel Neural Computing for Scene Understanding from LiDAR Perception in Autonomous Racing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18165

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture of a Parallel Perception Network, comprising two distinct but structurally related networks: a Segmentation Network and a Reconstruction Network. Both networks share an identical encoder structure but differ in their decoder components. The global layout is divided into two horizontal sections, each illustrating one network's architecture from left to right, starting with an input map and ending with an output map. Below these diagrams is a legend explaining the visual symbols used.

In both networks, the input is a 4D tensor of size 1x16x1000x1000, represented by a yellow parallelogram labeled 'Input'. The encoder consists of five consecutive blocks, each containing a 2D convolution layer (blue rectangular block) followed by batch normalization and Leaky ReLU activation, paired with a max pooling layer (orange rectangular block) using a kernel and stride of (2,2). The convolutional layers progressively increase in channel count: 16-32, 32-64, 64-128, 128-256, 256-512, and finally 512-1024. These blocks are visually stacked as alternating blue and orange blocks, with labels beneath indicating the channel dimensions.

The Segmentation Network’s decoder uses skip connections. After the final encoder block, the feature maps pass through a series of 2D transposed convolutions (purple rectangular blocks), each followed by batch normalization and Leaky ReLU. These are combined with upsampled features from earlier encoder layers via green circular nodes representing 2D concatenation operations. The skip connections are facilitated by green rectangular blocks labeled 'Skip Connection's Pooling Convolution', which upsample the encoder features to match the decoder’s spatial dimensions before concatenation. The decoder has six such upsampling and concatenation stages, culminating in an output map of size 1x1x1000x1000, shown as a yellow parallelogram labeled 'Output'.

The Reconstruction Network’s decoder is simpler: it directly applies a sequence of 2D transposed convolutions (purple blocks) without any skip connections or concatenations, gradually increasing spatial resolution until producing the same 1x1x1000x1000 output map.

Connections between modules are indicated by black arrows. In the segmentation network, arrows show forward propagation through the encoder, then through the decoder, with additional arrows from encoder blocks to the decoder via skip connections. In the reconstruction network, arrows flow only sequentially from encoder to decoder to output.

The legend at the bottom clarifies the symbols: blue rectangles denote 2D Convolution + BatchNormalization + Leaky ReLU; orange rectangles denote Max Pooling with (kernel, stride) = (2,2); green rectangles denote Skip Connection's Pooling Convolution; green circles denote 2D Concatenation Operation; purple rectangles denote 2D Transposed Convolution + BatchNormalization + Leaky ReLU; and yellow parallelograms denote Input and Output Maps.
