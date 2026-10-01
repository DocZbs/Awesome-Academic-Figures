# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Coupling Neural Networks and Physics Equations For Li-Ion Battery State-of-Charge Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-step autoregressive neural network architecture for predicting State of Charge (SOC) over time, structured as a sequential pipeline with two main branches. The global layout is horizontal and linear, progressing from left to right, with Branch 1 at the top and multiple instances of Branch 2 arranged vertically below it, forming a cascading or recursive structure. The entire diagram is organized into a clear workflow: initial inputs are processed by Branch 1 to predict the current SOC, which then serves as an input to subsequent Branch 2 modules for future SOC predictions.

Visual modules are represented as rectangular blocks with rounded corners, each labeled with a component name and color-coded to indicate different layers within a branch. In Branch 1, three consecutive blocks are shown: B1-FC1 (blue), B1-FC2 (green), and B1-FC3 (yellow). Similarly, each Branch 2 consists of B2-FC1 (blue), B2-FC2 (green), and B2-FC3 (yellow). These colors consistently denote the first, second, and third fully connected (FC) layers within each branch, respectively. The input to the system is symbolized by a battery icon on the far left, with three output signals: T(t) (temperature at time t), I(t) (current at time t), and V(t) (voltage at time t). These signals feed into the first layer of Branch 1.

Connections are depicted as solid black arrows indicating the direction of data flow. From the battery icon, T(t), I(t), and V(t) are directed to B1-FC1. The output of B1-FC3 is labeled SOC(t), which is then passed to the first Branch 2 module. This Branch 2 receives additional inputs: I(t+N), T(t+N), and N (a parameter, likely representing a time step or window size). The output of this Branch 2 is SOC(t+N), which is fed into the next Branch 2 instance, which in turn receives I(t+2N), T(t+2N), and N, producing SOC(t+2N). This pattern continues recursively, with each subsequent Branch 2 receiving updated current and temperature values at intervals of N, along with the constant N parameter, and generating the next predicted SOC value. The sequence is shown continuing with ellipsis (...) leading to a final Branch 2 that outputs SOC(t+kN), indicating the k-th step ahead prediction. The diagram thus visualizes an autoregressive model where each prediction step uses the previous prediction as part of the input for the next, enabling long-term forecasting. The consistent use of color, shape, and labeling ensures clarity in distinguishing between the two branches and their internal layers, while the arrowed connections clearly define the temporal and computational dependencies.
