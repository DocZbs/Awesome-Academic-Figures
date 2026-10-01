# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Vertical Federated Unlearning via Backdoor Certification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11476

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Vertical Federated Learning (VFL) framework, structured into two main vertical sections: the 'Party Side' on the left and the 'Coordinator Side' on the right. The global layout is hierarchical and flow-based, progressing from bottom to top, with data inputs at the base and model output at the top. The Party Side contains two parallel processing streams, one for Party A and one for Party B, each handling their own private input data. These streams are visually distinguished by color: Party A’s components are shaded pink, while Party B’s are shaded beige. Each party’s stream consists of two stacked convolutional layers, which process their respective input data stored in cylindrical data containers labeled 'Party A's Input Data x_A' and 'Party B's Input Data x_B'. Arrows indicate the forward pass of data through these layers, culminating in outputs labeled L_A and L_B, respectively. On the Coordinator Side, these outputs are concatenated in a horizontal orange block labeled 'Concatenation', which feeds into a blue 'Fully Connected Layer' that produces the final 'Output'. This side is enclosed by a large curly brace labeled 'Coordinator Side', while the Party Side is similarly bracketed. The figure also includes vertical dashed arrows on both sides, representing backward propagation of gradients. For Party A, the gradient f'_A(L_A) = ∇L_A(W_A; x_A) is shown flowing downward, and for Party B, f'_B(L_B) = ∇L_B(W_B; x_B, y) flows downward. At the top, the coordinator computes the overall loss L_C = f_C(L_A ⊕ L_B; W_C), where ⊕ denotes concatenation, and the gradient f'_C(L_C) = ∇L_C(W_C) ⊕ ∇L_B(W_C) is shown propagating back to the parties. All mathematical expressions are written in LaTeX-style notation alongside the corresponding arrows, indicating the functional dependencies and gradient computations. The visual modules are rectangular blocks with rounded corners, except for the data containers, which are cylindrical. Text labels are centered within each module, and all connections are solid black arrows, except for the gradient paths, which are dashed. The overall structure emphasizes the separation of data ownership between parties and the coordination required for joint model training without direct data sharing.
