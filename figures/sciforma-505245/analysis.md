# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enhancing Adversarial Robustness of Deep Neural Networks Through Supervised Contrastive Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19747

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dual-stream neural network architecture designed for supervised contrastive learning, aimed at enhancing model robustness. The global layout is horizontally oriented, divided into two main sections by dashed borders: a blue-dashed rectangular region on the left containing the shared backbone network, and a right-side region split vertically by a yellow-dashed line above and green-dashed line below, representing two distinct loss computation pathways.

On the left, two identical input images labeled 'Image A' and 'Image B' feed into parallel streams. Each stream begins with a convolutional layer labeled 'Conv 1' with dimensions 64×112×112, followed by four sequential residual blocks: Residual Block 1 (64×112×112), Residual Block 2 (128×56×56), Residual Block 3 (256×28×28), and Residual Block 4 (512×14×14). Each block is visually represented as a cube composed of stacked colored layers (blue, purple, red), enclosed in a black-bordered rounded rectangle. Between corresponding layers of the two streams, oval-shaped labels marked 'Weights Sharing' indicate parameter sharing, ensuring identical transformations for both inputs.

After the final residual block in each stream, the feature representations pass through a 'Projection Head' module, depicted as a light orange rounded rectangle labeled 'Projection Head 64 or 128', indicating output dimensionality options. From each Projection Head, two separate outputs emerge: one directed upward toward the top-right section and another downward toward the bottom-right section.

In the top-right section, bounded by a yellow-dashed border, the upper output from each stream feeds into a fully connected neural network labeled g_l(.), shown as a multi-layer perceptron with tan-colored nodes and σ (sigmoid) activation symbols on hidden layers. This network produces two output vectors, z^a and z^b, which are then fed into a loss function labeled 'Supervised Contrastive Loss'.

In the bottom-right section, bounded by a green-dashed border, the lower output from each stream feeds into a second fully connected network labeled g_c(.), depicted with light green nodes and σ activations. This network outputs two vectors, ŷ^a and ŷ^b, which are processed by a 'Cross Entropy Loss' function.

Connections between components are indicated by arrows: black arrows denote the primary forward path from Image A, while gray arrows represent the parallel path from Image B. The two streams remain structurally identical throughout, emphasizing symmetry and weight sharing. The diagram’s design highlights the dual-purpose nature of the projection heads—generating representations for both contrastive learning and classification tasks—enabling joint optimization via two distinct loss functions.
