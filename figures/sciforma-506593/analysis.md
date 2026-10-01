# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ANTHROPOS-V: benchmarking the novel task of Crowd Volume Estimation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01877

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a modified deep learning architecture for crowd counting and volume estimation, combining elements from Bayesian+ and MAN frameworks. The global layout is a left-to-right pipeline starting with an input image depicting a street scene with pedestrians. This image is fed into a VGG19 backbone, represented as a light green hexagon, which extracts feature maps. These features are then passed through a vertical green rectangular block, symbolizing intermediate feature processing. Next, a dashed green rounded rectangle labeled 'Learnable Region Attention' is applied—this module is specific to the MAN architecture and not present in the original Bayesian+ model. Following this, a solid green rounded rectangle labeled 'Regression Decoder' processes the features to generate an estimated density map, denoted as D^est, shown as a blue vertical rectangular block.

From D^est, two parallel branches diverge. The upper branch computes the sum of all values in the density map via a green rounded rectangle labeled 'Sum of values', which is then supervised against the 'Counting GT' (ground truth), depicted as a pink rectangle. This branch corresponds to standard crowd counting supervision.

The lower branch, highlighted in orange, represents an additional volume estimation module tailored for the CVE (Crowd Volume Estimation) task. From D^est, a max pooling operation (orange rounded rectangle) reduces spatial dimensions. The output is passed through a pointwise convolution layer (orange trapezoid), followed by a ReLU activation (labeled on the arrow), and then a linear layer (orange rounded rectangle). The output of this branch is labeled 'Regressed Volume', which is supervised against the 'Volume GT' (pink rectangle) using an L1 loss, as described in the caption.

All connections are directed arrows indicating data flow. The green modules represent components retained from the original architectures, while the orange modules are newly introduced for volume regression. The figure emphasizes that the Learnable Region Attention is exclusive to MAN, and the entire framework is designed to jointly optimize for both counting accuracy and volume estimation.
