# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Prediction-Enhanced Monte Carlo: A Machine Learning View on Control Variate — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11257

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the neural network architecture for the SLV (Stochastic Local Volatility) model, composed of three main components: a VGG-style Vol Surface Encoder, a Vector Features Encoder, and a Synthesizer, arranged horizontally from left to right. The overall layout is modular, with each component enclosed in a distinct colored background—light blue for the VGG-style encoder, light gray for the vector features encoder, and light yellow for the synthesizer. These modules are interconnected via forward (solid teal arrows) and backward (dashed red arrows) propagation paths, as indicated in the legend at the bottom-left corner.

The VGG-style Vol Surface Encoder on the left receives input σ²(x, τ), which has dimensions Batch Size × |S| × |T| × 1. This input flows through a sequence of layers: two Conv 2d layers (purple rounded rectangles), each followed by a ReLU activation (pink rounded rectangle), then a MaxPool2d layer (gray rounded rectangle), and finally a Fully Connected layer (orange rounded rectangle). The output of this encoder is a feature vector of dimension Batch Size × E, represented as a grid of light green cells. Solid teal arrows indicate forward propagation through these layers, while dashed red arrows denote backward propagation, shown as feedback loops between the Conv 2d and ReLU layers.

On the right, the Vector Features Encoder processes inputs θ_model, θ_simulation, θ_payoff, and X(θ), with dimension Batch Size × D. It consists of two Fully Connected layers (orange rounded rectangles), separated by a Dropout layer (white rounded rectangle), a ReLU activation (pink), and a BatchNorm 1d layer (blue). The output is a feature matrix of dimension N × E', also visualized as a grid of light green cells. Forward and backward connections are again indicated by solid teal and dashed red arrows, respectively, with feedback loops between the Fully Connected and ReLU layers.

The central Synthesizer module combines the outputs from both encoders. It receives the feature vectors from both encoders via solid teal arrows and processes them through a stack of layers: a Fully Connected layer (orange), followed by Dropout (white), ReLU (pink), and another Fully Connected layer (orange). The final output is the predicted payoff function, denoted as f̂_payoff(X, θ, σ²(·, ·)), which is emitted via a solid black arrow pointing rightward. The Synthesizer also includes backward connections (dashed red arrows) from the second Fully Connected layer back to the first, indicating gradient flow during training.

All modules are connected to the Synthesizer via bidirectional links: the VGG-style encoder’s output feeds into the first Fully Connected layer of the Synthesizer, and the Vector Features Encoder’s output feeds into the same layer. Both connections are shown with solid teal arrows for forward pass and dashed red arrows for backward pass, emphasizing the joint training of the entire network. The figure uses consistent color coding for layer types: purple for Conv 2d, pink for ReLU, orange for Fully Connected, gray for MaxPool2d, white for Dropout, blue for BatchNorm 1d, and light green grids for feature representations. Dimensions are explicitly labeled beneath each encoder’s output grid.
