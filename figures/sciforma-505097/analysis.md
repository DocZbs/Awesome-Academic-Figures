# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Comparative Performance Analysis of Quantum Machine Learning Architectures for Credit Card Fraud Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a quantum machine learning (QML) methodology pipeline designed to evaluate three quantum models—VQC, SQNN, and EQNN—on two benchmark datasets: BankSim and European. The global layout follows a left-to-right data processing flow, starting with data input on the far left and progressing through preprocessing, splitting, model training/testing, optimization, and finally performance evaluation on the right.

On the left side, two cylindrical data sources labeled 'BankSim Data set' and 'European Data set' feed into a rectangular block titled 'Data Preprocessing'. From there, a 'PCA' (Principal Component Analysis) step is applied to the European dataset before both datasets proceed to a 'Data splitting' module. This module divides the data into two streams: 80% for training (labeled as path 1) and 20% for testing (labeled as path 2), indicated by blue arrows.

The central part of the diagram features a large dashed-brown rectangle labeled 'Considered models', containing two main components: a green rounded rectangle labeled 'FeatureMap' and a yellow rounded rectangle labeled 'Ansatz'. These components represent the core quantum circuit elements. Above this central box, three dashed-brown boxes labeled 'VQC', 'SQNN', and 'EQNN' indicate the three QML models being evaluated, with arrows pointing downward into the central structure, signifying their use of the FeatureMap and Ansatz components.

Below the central box, two groups of options are shown. On the lower left, under the label 'Considered FeatureMap' in green text, three green rectangular blocks list specific feature map types: 'PauliFeatureMap', 'ZZFeatureMap', and 'ZFeatureMap'. On the lower right, under the label 'Considered Ansatz' in orange text, four yellow rectangular blocks list ansatz configurations: 'RealAmplitudes', 'EfficientSU2', 'TwoLocal', and 'PauliTwoDesign'. Green and yellow arrows connect these options upward to the respective FeatureMap and Ansatz blocks, indicating their configurable choices.

A brown arrow from the 'Ansatz' block points to a light-blue rectangular block labeled 'Evaluate loss function', which then connects via a thick blue arrow to the final evaluation section on the right. Below the 'Evaluate loss function' block, a brown arrow leads to an orange hexagonal block labeled 'COBYLA optimizer', which feeds back into the 'Ansatz' block, forming an optimization loop.

The rightmost section, enclosed in a large rounded yellow box labeled 'Performance metrics', contains a confusion matrix with rows labeled 'Actual Class' (Positive: 1, Negative: 0) and columns labeled 'Predicted Class' (Positive: 1, Negative: 0). The matrix cells are color-coded: True Positive (TP) and True Negative (TN) are green; False Positive (FP) and False Negative (FN) are peach. Below the matrix, four performance metrics are listed with their formulas: Precision = TP/(TP+FP), Accuracy = (TP+TN)/(TP+TN+FP+FN), Recall = TP/(TP+FN), and F1_score = 2*(Precision*Recall)/(Precision+Recall). All text and mathematical expressions are clearly legible and formatted for clarity.

The entire diagram uses consistent color coding: blue for data flow, green for feature maps, yellow for ansatz, brown for model and optimizer connections, and light blue for evaluation steps. The visual hierarchy emphasizes the modular nature of the QML framework, allowing systematic variation of feature maps and ansatz within each considered model.
