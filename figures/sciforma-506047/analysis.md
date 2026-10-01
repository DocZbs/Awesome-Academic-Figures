# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

An Unsupervised Anomaly Detection in Electricity Consumption Using Reinforcement Learning and Time Series Forest Based Framework — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00107

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comprehensive framework for anomaly detection (AD) model selection using reinforcement learning (RL), structured as a multi-layered, top-down flowchart. The global layout is vertically organized into distinct processing stages, each represented by a horizontal row of rounded rectangular modules, with left-aligned colored boxes providing contextual labels for each stage. The entire process begins at the bottom and progresses upward, culminating in an RL-based decision-making loop at the top.

At the base, the 'Data preprocessing Of real and synthetic datasets' stage includes three sequential steps: 'Remove missing values', followed by 'Data Rescaling of the electricity consumption feature', and then 'Sliding windows'. These steps feed into the next layer, which contains six anomaly detection models: KNN, COPOD, ECOD, OSVM, USAD, and IForest. This layer is labeled 'Training of AD models on the normal sliding windows', indicating that these models are trained on normal data.

Above this, the 'Testing of AD models on the anomalous sliding windows' stage shows outputs from the trained models: 'Predicted anomaly scores', 'Thresholds', and 'Predicted anomaly labels'. These outputs are then used to construct the 'Features of each dataset' layer, which includes five components: 'Anomalous sliding windows', 'Scaled Predicted anomaly scores of an AD model', 'Scaled threshold of an AD model', 'Predicted anomaly labels of an AD model', and 'The two confidence scores of an AD model'. A separate box labeled 'True Class Labels (0 or 1)' is positioned to the right, designated as the 'Target of each dataset'.

The next stage, 'Six Datasets for each TSF', indicates that each Time Series Forest (TSF) will be trained on these six datasets. The subsequent layer, 'Training of each TSFs on its training set', lists six TSF models: TSF 1 for KNN, TSF 2 for COPOD, TSF 3 for ECOD, TSF 4 for OSVM, TSF 5 for USAD, and TSF 6 for IForest. These are then tested in the 'Testing of each TSF on its testing set' stage, producing 'Predicted Class Labels of TSF 1' through 'Predicted Class Labels of TSF 6'.

The topmost section, titled 'AD Model Selection using RL', forms a closed-loop reinforcement learning environment. It consists of an 'Environment' block containing state features: 'Anomalous sliding windows', 'Scaled Predicted anomaly scores of AD models', 'Scaled thresholds of AD models', 'Predicted anomaly labels of AD models', and 'The two confidence scores of AD models'. An 'Agent' module receives a 'Reward' based on the predicted class labels of TSFs or ground truth labels, and performs an 'Action' to 'Select an AD model from the pool'. The action feeds back into the environment, completing the RL loop. All connections between modules are indicated by solid black arrows, showing the direction of data flow and processing sequence. The figure uses consistent visual attributes: all modules are rounded rectangles with black borders, and the stage labels on the left are color-coded (light gray, light blue, light green) to distinguish different phases of the pipeline.
