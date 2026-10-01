# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting band gap from chemical composition: A simple learned model for a material property with atypical statistics — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02932

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a machine learning modeling framework for predicting the electronic band gap of materials based solely on their chemical composition. The overall layout is horizontal, progressing from left to right: input data (chemical formulas), processing module (ML model), and output (band gap representations).

On the left, labeled 'Chemical formula of the material,' a collection of diverse chemical formulas is displayed in scattered arrangement, including examples such as Bi₃NO₁₁Se₂, BeTi₃, PdTi, B₂O₇Se₂, AgV₃, As₂O₃, CuZn₃, CGaTm₃, C₇Y₄, AgAsTe₂, Bi₂I₂O₁₁S, and Ba₂ErGaTe₅. These are rendered in alternating blue and red text, suggesting different categories or simply visual distinction. An arrow points from this input set to the central processing unit.

The central component, enclosed in an orange rounded rectangle and labeled 'ML model with one parameter per element,' represents the core computational model. Above it, the mathematical expression for the model is given: Ŝ_relu(M) = max(0, Σ_E w_E f_E(M)), indicating a ReLU-activated weighted sum over elemental contributions. Inside the box, the model structure is shown as a matrix multiplication: a row vector of weights [w_H, w_Li, ..., w_U], where each weight corresponds to an element (e.g., H, Li, U), multiplies a column vector of feature functions [f_H(M), f_Li(M), ..., f_U(M)], each representing the contribution of an element to the material M. Both vectors are depicted as light green rectangular blocks with black borders; the weight vector has individual labeled boxes, while the feature vector uses ellipses to denote continuation. The result of this multiplication is fed into a circular node labeled 'ReLU(·)', also in light green, symbolizing the rectified linear unit activation function.

An arrow leads from the ReLU node to the rightmost section, labeled 'Band gap ε'. This section displays four purple energy band diagrams arranged in two columns. The top two diagrams show parabolic bands separated by a finite energy gap ε, indicating insulating or semiconducting behavior. The bottom two diagrams depict bands touching at a point (ε=0), representing metallic or semi-metallic materials with zero band gap. The diagrams are identical in both columns, emphasizing that the model can predict both types of band structures.

The entire workflow demonstrates a simple yet effective approach: inputting only the chemical formula, the model computes a weighted sum of elemental parameters, applies ReLU activation, and outputs a prediction for the band gap, capable of distinguishing between materials with non-zero and zero band gaps.
