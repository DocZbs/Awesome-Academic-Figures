# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine Learning-Based Differential Diagnosis of Parkinson's Disease Using Kinematic Feature Extraction and Selection — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02014

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a machine learning-based method for differential diagnosis, structured into four main stages: data acquisition, feature extraction, feature selection, and classification & prediction. The global layout is horizontal, progressing from left to right, with each stage enclosed in a dashed rectangular box outlined in magenta, connected by solid blue arrows indicating the flow of data or processing steps.

Stage 1, labeled 'Finger Tapping with Sensor and Signal', begins with an image of a hand performing finger tapping, equipped with two sensors labeled 'SCU' on the wrist and index finger. Coordinate axes (+X, +Y, +Z) are shown at both sensor locations to indicate orientation. This visual module transitions via a blue arrow to a time-series signal plot displaying multiple colored traces (orange, red, cyan, blue), representing raw sensor data collected during the tapping motion.

Stage 2, titled 'Feature Extraction', follows. It contains a box listing 'Kinematic Features (18)', broken down into three categories: 'Angular velocity (6)', 'Angular acceleration (6)', and 'Vector (6)', each separated by a red '+' symbol. A blue arrow leads from this box to another labeled '36 Statistical from Each Kinamatic Features', indicating that 36 statistical features are derived from each of the 18 kinematic features, resulting in a total of 648 features (though the diagram implies aggregation into 36 representative features per kinematic type).

Stage 3, 'Feature Selection', is enclosed in a magenta-dashed box and contains two components: 'One-way ANOVA' and 'Sequential Forward Feature Selection (SFFS)', connected by a red '+' symbol, suggesting a combined approach. A blue arrow connects this stage to the next.

Stage 4, 'Classification & Prediction', includes a box labeled 'SVM' (Support Vector Machine) with two branches: one labeled 'RBF' (Radial Basis Function) and another 'Sigmoid', indicating kernel options. Below SVM, a box labeled 'Tunned Parameter' suggests hyperparameter optimization. From this module, four black arrows point to vertical labels on the far right: 'MSA', 'PSP', 'PD', and 'HC', representing the diagnostic classes—Multiple System Atrophy, Progressive Supranuclear Palsy, Parkinson’s Disease, and Healthy Control, respectively. These labels are arranged vertically within small green-outlined boxes, indicating the output classes of the classification model.

All major modules are outlined with dashed lines (blue for internal modules, magenta for stage boundaries), and the entire flowchart is framed by a thin purple border. Text within boxes is black, with key terms like 'SVM', 'RBF', 'Sigmoid', and class labels in bold or distinct formatting for emphasis. The overall design emphasizes a clear, stepwise pipeline from raw sensor data to multi-class diagnostic prediction.
