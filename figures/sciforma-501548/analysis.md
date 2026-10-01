# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Neural Control and Certificate Repair via Runtime Monitoring — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12996

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a monitor-learner framework for reinforcement learning with safety guarantees, structured as a directed graph of interconnected modules. The global layout is horizontal, with components arranged from left to right and feedback loops connecting them vertically and diagonally. At the far left is a rectangular box labeled 'Env', representing the environment. From Env, two curved black arrows emerge: one points to a square box labeled 'π' (policy), and the other points to a rectangular box labeled 'Learner'. The policy box π is positioned above the Learner box and is labeled 'policy' above it. A straight black arrow extends from π to a rectangular box labeled 'Monitor', which is located to the right of π. The Monitor box has two outgoing curved black arrows: one points downward to a rectangular box labeled 'Data', and the other points rightward to a square box labeled 'β', which is annotated with the label 'barrier function' to its right. The Data box sends a curved black arrow back to the Learner box. Additionally, the Monitor box receives an incoming curved black arrow from the β box. To the far right of the diagram is a square box labeled 'ν', annotated above with 'Lyapunov function'. This ν box sends a curved black arrow to the Monitor box. Three green arrows labeled 'update' indicate parameter updates: one from Learner to π, another from Learner to β, and a third from Learner to ν. These green update arrows are solid lines with arrowheads pointing toward the respective modules. All boxes are white with black borders and black text, except for the labels 'policy', 'barrier function', and 'Lyapunov function', which are placed outside the boxes. The overall structure reflects a closed-loop system where the Learner interacts with the environment via the policy, collects data through monitoring, and updates both the policy and safety-related functions (barrier and Lyapunov) to ensure safe learning.
