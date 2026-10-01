# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Fully Data-driven but Interpretable Human Behavioural Modelling with Differentiable Discrete Choice Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19403

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of Diff-DCM, a differentiable discrete choice model, presented as a feedforward neural network with three main stages: input transformation, hidden layer computation, and output classification with loss calculation. The global layout is horizontal, progressing from left to right, with nodes arranged in vertical columns representing distinct processing layers. Each node is a circle with a light gray fill and black border, containing mathematical symbols or variables. The flow is directed via solid black arrows indicating data propagation.

In the first column, input features x₁ through xₙ are shown as circular nodes. Each xᵢ is connected by an arrow to a corresponding intermediate node labeled with 'ln(·)', indicating a natural logarithm operation applied to each input. These log-transformed values then feed into the next stage.

The second column contains unlabelled light gray circles, which represent the first hidden layer. Each of these nodes receives weighted inputs from the log-transformed features, with weights denoted as w^(1)_{i1} for i = 1 to n, where the superscript (1) indicates the first layer. These weights converge into a single node in the third column, which applies the exponential function exp(·), transforming the weighted sum into a positive value. This node outputs z₁, the first element of the hidden layer vector z.

The third column continues with nodes z₂ through zₘ, representing the full hidden layer. Each zⱼ is computed similarly: a weighted sum of the log-transformed inputs, followed by the exp(·) function. The weights connecting the first hidden layer to the zⱼ nodes are labeled w^(1)_{j1}, w^(1)_{j2}, ..., w^(1)_{jn}, though only a few are explicitly shown for clarity. A bias term b₁^(2) is also included, connected from a constant node labeled '1' at the bottom, feeding into the computation of each zⱼ.

The fourth column consists of nodes V₁ through Vₗ, representing the output layer's feature vectors. Each Vⱼ receives weighted inputs from all z nodes, with weights labeled w^(2)_{j1}, w^(2)_{j2}, ..., w^(2)_{jm}, again with only a subset shown. These weights are associated with the second layer, indicated by the superscript (2). The outputs from the V nodes are passed through a softmax(·) function, producing probabilities p₁ through pₗ, which are shown in the fifth column.

The sixth column displays the true labels y, represented as binary values (mostly 0, with one 1 at position k), indicating a one-hot encoded target vector. The predicted probabilities ŷ (p₁ through pₗ) are compared to y via a loss function ℒ(y, ŷ), shown as a bidirectional arrow between the prediction and ground truth, signifying the computation of loss for training purposes.

The diagram uses ellipses (…) to denote omitted intermediate nodes, preserving the structure while avoiding clutter. All connections are directed arrows, and the entire architecture reflects a differentiable pipeline suitable for gradient-based optimization.
