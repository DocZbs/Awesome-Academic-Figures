# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Comparative Performance Analysis of Quantum Machine Learning Architectures for Credit Card Fraud Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the fundamental architecture of a quantum machine learning (QML) model, structured as a sequential pipeline with feedback for parameter optimization. The global layout consists of four main stages arranged horizontally from left to right: Feature Map, Ansatz, Measurements, and Output, with a classical optimizer forming a feedback loop connecting the Output back to the Ansatz. Each stage is represented by a distinct rounded rectangular module with specific color coding and internal labels.

The first module, labeled 'Feature Map', is a light peach-colored box containing the text 'Quantum states' and the mathematical notation '{|ψ_i⟩}_{i=1}^n'. It receives multiple input vectors, each denoted as '|q₀⟩' or '|q_n⟩', indicating classical data encoded into quantum states via a feature map Φ: X → |ψ⟩, shown above the module with a downward arrow. This stage transforms classical inputs into a set of quantum states.

The second module, labeled 'Ansatz', is a pale yellow box containing the label 'Quantum gates' and the mathematical expression 'U(θ)', representing a parameterized quantum circuit. It receives the quantum states from the Feature Map as inputs and processes them through a series of quantum gates whose operations depend on trainable parameters θ. Multiple parallel arrows indicate the flow of quantum states into and out of this module.

The third module, labeled 'Measurements', is a light gray box containing a yellow semicircle with a green vector pointing diagonally upward, symbolizing the measurement process on the quantum state after applying the ansatz. This stage extracts classical information from the quantum system.

The fourth module, labeled 'Output', is a bright orange rectangle, receiving the measurement results via a thick blue arrow. From this module, a black arrow labeled 'Loss Function' points upward to a classical optimizer, which is positioned above the Ansatz. The optimizer computes the loss based on the output and sends a feedback signal labeled 'Update Parameters θ' back to the Ansatz, enabling iterative refinement of the quantum circuit parameters. The entire process forms a closed-loop training scheme where the classical optimizer adjusts θ to minimize the loss function, driving the model toward convergence.
