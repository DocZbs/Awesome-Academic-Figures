# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Rare Event Detection in Imbalanced Multi-Class Datasets Using an Optimal MIP-Based Ensemble Weighting Approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13439

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-stage methodology for constructing and evaluating an ensemble classifier using a weighted selection approach based on mixed-integer programming (MIP) and elastic net regularization. The overall layout is divided into three main rectangular sections outlined in orange: '1. Training & Validation' at the top, '2. Weight Calculation' on the bottom right, and '3. Test & Evaluation' on the bottom left. These stages are connected by directional arrows indicating the flow of the process.

In Stage 1, 'Training & Validation', the dataset, labeled as 'Set E of m Classes', is split into an 80% Training/Validation Set (pink cylinder) and a 20% Test Set (darker pink cylinder). A set C of n classifiers, visually represented by multiple tree-like structures with colored nodes (yellow, green, blue), is applied to the training/validation set. This process employs stratified k-fold cross-validation, depicted as five vertical cylinders, each segmented into five layers (numbered 1–5), where one layer per cylinder is highlighted in orange to indicate the validation fold. The output of this stage is the Mean Validation Accuracy Matrix V = [v_ij]_{n×m}, shown as a green grid icon, which captures the performance of each classifier across classes.

Stage 2, 'Weight Calculation', receives the accuracy matrix V as input. This stage is encapsulated in a beige box labeled 'MIP - Elastic Net' and contains a central gear mechanism with interlocking cogs and circular blue arrows, symbolizing optimization. The process outputs a Weight Matrix W = [w_ij]_{n×m}, represented by a blue grid icon, which determines the optimal weights for selecting K classifiers from the original set C. An orange curved arrow points from the weight matrix to the next stage.

Stage 3, 'Test & Evaluation', begins with the 'Ensemble Model of K Classifiers', illustrated as a blue neural network-like structure with two brain-shaped nodes. This model receives the weight matrix W as input and processes the reserved Test Set. The final step is 'Inference', depicted with icons including a document with a checkmark, a bar chart, and a green circuit-brain hybrid symbol, representing the evaluation and interpretation of predictions. A black arrow connects the test set to the inference module, completing the workflow. The entire diagram emphasizes a data-driven, optimized ensemble construction pipeline from training through weight calculation to final testing.
