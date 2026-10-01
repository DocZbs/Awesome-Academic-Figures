# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Applying the maximum entropy principle to neural networks enhances multi-species distribution models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19217

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a residual neural network architecture designed to estimate an intensity vector λ from an input vector x₀. The global layout is a feedforward multi-layer perceptron with a residual connection added between the first and second hidden layers. The network consists of an input layer, two hidden layers, and an output layer. The input layer receives P-dimensional features labeled x₀,₁ through x₀,P, along with a bias term represented by a node labeled '1'. Each hidden layer contains C neurons, depicted as gray circular nodes, fully connected to all neurons in the preceding layer via black lines representing weighted connections. The output layer produces N outputs, labeled λ₁ through λₙ and λ_N, corresponding to the estimated intensities for N species or target categories.

Visual modules include the input layer on the far left, followed by two hidden layers in the center, and the output layer on the far right. All neurons are uniformly styled as light gray circles with thin borders. The residual connection is visually emphasized: it originates from the first hidden layer’s neurons, arcs upward and to the right, and adds to the second hidden layer’s neurons via a '+' symbol. This skip connection is annotated with the equation x₂ = x₁ + g₁(x₁), indicating that the output of the second hidden layer is computed as the sum of the input to that layer and the transformation applied by the first hidden layer. Above the network, two horizontal bars denote parameter groups: a green bar labeled gθ (representing the network weights and biases associated with the main path) spans over the first hidden layer and the residual connection, while a red bar labeled γ, b (representing scaling and bias parameters for the residual branch) spans over the second hidden layer and output layer.

Connections are fully connected within each layer-to-layer transition, forming dense interconnections. The residual connection introduces a non-standard shortcut from the first to the second hidden layer, bypassing the second layer’s transformation. The arrows indicate the forward propagation direction: from input to first hidden layer, then to second hidden layer (with residual addition), and finally to the output layer. The figure caption clarifies that this is a general depiction with two hidden layers; if only one hidden layer exists, the residual connection is omitted. The diagram does not show activation functions explicitly but implies their presence in each neuron. The overall structure emphasizes the residual learning mechanism, allowing gradients to flow directly through the skip connection during training.
