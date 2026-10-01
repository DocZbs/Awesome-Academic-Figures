# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Objective Optimization-Based Anonymization of Structured Data for Machine Learning Application — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01002

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the complete experimental process for evaluating data anonymization techniques and their impact on machine learning performance. The global layout is a left-to-right workflow divided into two main stages: data anonymization and model evaluation, with a final stage dedicated to machine learning performance assessment. The diagram is structured with rectangular containers grouping related components, and arrows indicating the flow of data and processing steps.

In the first stage, 'Original Data' is represented by a container with three blue rounded rectangles labeled 'Adult 0', 'Credit 0', and 'Sepsis 0', indicating the datasets used. These datasets are then processed through an 'Anonymization' module, which contains four yellow rounded rectangles representing different anonymization methods: 'None', 'k-anonymity', 'Our model', and 'Zheng et al.'. The output of this step is the 'Anonymization Data' container, which lists six blue rounded rectangles corresponding to the anonymized versions of the original datasets: 'Adult 0; Credit 0; Sepsis 0' (no anonymization), followed by 'Adult-FAD1; Credit-FAD1; Sepsis-FAD1', 'Adult-FAD2; Credit-FAD2; Sepsis-FAD2', and 'Adult-FAD3; Credit-FAD3; Sepsis-FAD3' (results from the three anonymization models).

From the anonymized data, two parallel evaluation paths emerge. One path leads to 'Model Evaluation', a container with three green hexagons representing metrics: 'Information Loss', '# of People s.t Linkage Attacks', and '# of People s.t Homogeneity Attacks'. This evaluates the privacy and utility trade-offs of the anonymization methods.

The second path proceeds to the 'ML Performance' section, enclosed in a large outer rectangle. Here, the anonymized data is split into 'Train Sets' and 'Test Sets' within a 'Split Train/Test' container, both shown as blue rounded rectangles. These sets are then fed into the 'ML Models' container, which includes six yellow rounded rectangles listing the models: 'Decision Trees (DT)', 'Gaussian Naive Bayes (NB)', 'Logistic Regression (LR)', 'Random Forests (RF)', 'Support Vector Machine (SVM)', and 'Neural Network (NN)'. The outputs of these models are directed to an 'Evaluation' container, which contains a single green hexagon labeled 'F1 Score', indicating the primary performance metric used.

The diagram key at the bottom left clarifies the color coding: blue shapes represent 'Data', yellow shapes represent 'Models', and green shapes represent 'Metrics'. All connections are indicated by solid black arrows showing the direction of data flow and processing sequence. The entire process is designed to assess how different anonymization techniques affect both privacy (via model evaluation metrics) and machine learning utility (via F1 score on multiple models).
