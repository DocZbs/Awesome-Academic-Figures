# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Prediction-Enhanced Monte Carlo: A Machine Learning View on Control Variate — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11257

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a neural network architecture designed for modeling Swaption payoff, structured into three parallel encoder branches—2D Function Encoder, Vector Feature Encoder, and 1D Function Encoder—feeding into a central Synthesizer module. The global layout is modular and vertically segmented into three main columns, each representing an encoder, with the Synthesizer positioned centrally below the Vector Feature Encoder. All modules are arranged in a top-down flow, indicating data progression from input to output.

In the leftmost column, the 2D Function Encoder processes input σ(t,T) of dimension N × d × T × T. This encoder consists of two stacked Conv2d layers (purple rounded rectangles), each followed by BatchNorm2d (light blue rounded rectangles). These layers are connected via solid teal arrows indicating forward propagation and dashed red arrows for backward propagation. An AvgPool2d layer (gray rounded rectangle) follows, reducing spatial dimensions. The output is a feature tensor of dimension N × E, represented as a grid of light yellow cells.

The middle column contains the Vector Feature Encoder, which takes inputs θ_model, θ_payoff, and X(θ) of dimension N × D. It comprises two Fully Connected layers (orange rounded rectangles), each followed by BatchNorm1d (light blue rounded rectangles). Forward and backward connections are again indicated by solid teal and dashed red arrows, respectively. This encoder feeds into the Synthesizer.

The rightmost column presents the 1D Function Encoder, processing f(0,T) of dimension N × 1 × T. It includes two Conv1d layers (purple rounded rectangles) followed by BatchNorm1d layers (light blue). An AvgPool1d layer (gray) reduces the sequence length, producing an output of dimension N × E', visualized as a light yellow grid.

The Synthesizer, located at the bottom center, integrates features from all three encoders. It consists of three Fully Connected layers (orange) alternating with BatchNorm1d layers (light blue). Inputs from the 2D and 1D encoders are fed via solid teal arrows, while the Vector Feature Encoder’s output connects directly. The final output of the Synthesizer is the predicted payoff, denoted as ŷ_payoff(X, θ, σ(·,·), f(0,·)), shown as a labeled arrow exiting the last Fully Connected layer.

A legend in the lower-left corner clarifies that solid teal arrows represent forward propagation and dashed red arrows represent backward propagation. The entire architecture emphasizes multi-modal feature extraction and fusion, with distinct dimensional reductions and normalization steps in each encoder, culminating in a unified prediction through the Synthesizer.
