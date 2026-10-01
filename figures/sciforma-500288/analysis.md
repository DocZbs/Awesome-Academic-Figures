# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DPA: A one-stop metric to measure bias amplification in classification datasets — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11060

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel workflows illustrating bias amplification in machine learning models using a predictability-based metric called DPA (Discriminative Predictability Analysis), specifically for attribute-to-task (A→T) and task-to-attribute (T→A) directions. The top half demonstrates A→T bias, while the bottom half shows T→A bias.

In the top section (A→T), an input image I is shown with a man in a kitchen. The true attribute label A is 'Male'. This label is fed into two attacker functions: f_A^T and f_A^{\hat{T}}. Both are represented as small neural network diagrams with nodes in blue, green, orange, and red. The first attacker function f_A^T is trained to predict true task labels T ('Pot, Pan, Toast') from A, capturing dataset bias Ψ_A^D. Its predictions are shown as 'Pot, Soap, Ball, Bat', with 'Soap, Ball, Bat' highlighted in red to indicate spurious correlations. The second attacker function f_A^{\hat{T}} is trained to predict model’s task predictions \hat{T} from A, capturing model bias Ψ_A^M. Its predictions are 'Knife, Toast, Pan, Laptop', with 'Knife, Laptop' in red, indicating model-specific spurious associations. These predictions are compared bidirectionally with the true and predicted task labels. Below this, the DPA formula is given: DPA_{A→T} = (Ψ_A^M - Ψ_A^D)/(Ψ_A^M + Ψ_A^D).

In the bottom section (T→A), the same input image I is shown, but now with yellow circles highlighting objects: a pot, a pan, and a kettle. The true task labels T are 'Pot, Pan, Toast'. These are fed into two attacker functions: f_T^A and f_T^{\hat{A}}. Again, both are depicted as small neural networks. The first, f_T^A, is trained to predict true attribute label A ('Male') from T, capturing dataset bias Ψ_T^D. Its prediction is 'Male', matching the true label. The second, f_T^{\hat{A}}, is trained to predict the model’s attribute prediction \hat{A} from T, capturing model bias Ψ_T^M. Its prediction is 'Male', but it is compared bidirectionally with the model’s actual attribute prediction 'Female', indicating a model bias. The DPA formula here is DPA_{T→A} = (Ψ_T^M - Ψ_T^D)/(Ψ_T^M + Ψ_T^D).

The global layout is split horizontally into two distinct sections, each with a left-to-right flow: from input image → true label → attacker functions → predictions → comparison with ground truth or model output. All text boxes are rectangular with black borders, and arrows indicate data flow. The attacker functions are visually identical in structure across both sections, emphasizing their role as consistent evaluators of bias. The red text in prediction boxes highlights spurious or incorrect associations, while bidirectional arrows denote comparison or alignment between predicted and true values.
