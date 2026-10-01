# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Comparative Performance Analysis of Quantum Machine Learning Architectures for Credit Card Fraud Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of an Equivariant Quantum Neural Network (EQNN), structured as a hybrid quantum-classical pipeline. The global layout is left-to-right, depicting a sequential workflow from input encoding to final prediction, with a feedback loop for optimization. The entire diagram is divided into four main stages, each enclosed in a distinct dashed boundary with unique background colors: yellow for the Feature Map, light blue for the Ansatz, light green for Measurements, and light orange for the Classical Neural Network. These stages are connected by solid arrows indicating data flow, while a feedback arrow from the final output loops back to the Ansatz and classical network for parameter tuning.

In the first stage, labeled 'Feature Map: Φ : x → |Ψ₀(θ)>', seven qubits initialized in the |0⟩ state are processed. Each qubit passes through a Hadamard gate (H, shown as blue squares) followed by a rotation gate (Rx, Ry, or Rz, shown as purple squares), forming the initial encoding layer. This stage maps classical input x into a quantum state |Ψ₀(θ)⟩.

The second stage, labeled 'Ansatz: U|Ψ₀(θ)> = |Ψ(θ)>', applies a variational quantum circuit. It consists of 14 parametrized unitary operations U(θ₁) through U(θ₁₄), represented as orange rectangles arranged in three columns across the seven qubit lines. These gates form a layered structure where each qubit undergoes multiple rotations, and the parameters θ are optimized during training.

The third stage, labeled 'Measurements', involves measuring each of the seven qubits. This is visually represented by seven red-and-yellow semicircular gauges within a green-dashed box, symbolizing quantum measurement outcomes. These measurements yield classical data, which serves as input to the next stage.

The fourth stage, labeled 'Classical Neural Network', is a fully connected feedforward network depicted as a multi-layered structure with circular nodes (golden-brown) connected by blue lines. The network receives the classical measurement data and processes it through hidden layers to produce a scalar output.

The final output is labeled 'Predicted Value: ŷ' in a gray dashed rectangle, connected by a thick black arrow from the classical network. A feedback loop originates from this output, leading to an 'Optimization' block at the bottom, described by the equation: (θ*; W*; b*) = arg min_{θ,W,b} J(y; ŷ). This block indicates that a classical optimizer adjusts both the quantum parameters θ and the classical network weights W and biases b to minimize the loss function J between true label y and predicted value ŷ. The optimization loop connects back to the Ansatz and the classical network, completing the training cycle.
