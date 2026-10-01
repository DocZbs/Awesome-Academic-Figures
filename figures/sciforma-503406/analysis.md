# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DOFEN: Deep Oblivious Forest ENsemble — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16534

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison of two distinct neural network architectures designed to process different types of input data: numerical columns and categorical columns. The overall layout is horizontally divided into two main sections, each labeled at the top with its respective data type — 'Numerical Column' on the left and 'Categorical Column' on the right. Each section contains a vertical stack of rectangular blocks representing sequential layers in the network, with text inside each block specifying the layer type and parameters.

On the left, under 'Numerical Column', there are two stacked rectangular blocks. The top block is labeled 'Linear(1, N_cond)', indicating a linear transformation layer that takes a single input feature and maps it to an output dimension of N_cond. Below it, the second block is labeled 'Sigmoid()', representing a sigmoid activation function applied to the output of the linear layer. This structure implies a simple feed-forward path where numerical inputs are first linearly transformed and then passed through a sigmoid to produce a normalized output.

On the right, under 'Categorical Column', there are four stacked rectangular blocks forming a deeper network. The topmost block is labeled 'Embedding(num_categories, N_cond)', which denotes an embedding layer that maps discrete categorical inputs (with num_categories possible values) into a dense vector space of dimension N_cond. Directly below it is 'LayerNorm(N_cond)', indicating a Layer Normalization layer applied to the embedded vectors to stabilize training by normalizing across features. The third block is 'Linear(N_cond, N_cond)', a linear layer that performs a transformation within the same N_cond-dimensional space, possibly for feature refinement or projection. The final block at the bottom is again 'Sigmoid()', applying the same activation function as in the numerical branch to produce a normalized output.

There are no explicit arrows or connections drawn between the blocks within either column, but the vertical stacking inherently implies a sequential flow from top to bottom. Similarly, there are no connecting lines between the two columns, suggesting they operate independently as parallel processing branches for different data types. The figure does not include any color coding or additional visual styling beyond black text on white rectangular boxes with black borders. The caption 'Detailed network layer composite for Δ₁' indicates that these architectures are components of a larger model denoted by Δ₁, likely used for conditional processing or feature encoding in a machine learning pipeline.
