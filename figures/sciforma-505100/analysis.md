# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Comparative Performance Analysis of Quantum Machine Learning Architectures for Credit Card Fraud Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Variational Quantum Circuit (VQC) model, structured as a three-stage quantum processing pipeline with feedback for parameter optimization. The global layout is horizontal, progressing from left to right: Feature Map → Ansatz → Measurements → Predicted Value, with an optimization loop feeding back into the Ansatz stage. Each stage is enclosed in a distinct dashed boundary with unique color coding: yellow for the Feature Map, gray for the Ansatz, and light green for Measurements. Above each stage, a labeled box provides context: 'Feature Map: Φ : x → |Ψ₀(θ)>', 'Ansatz: U|Ψ₀(θ)> = |Ψ(θ)>', and 'Measurements'.

The Feature Map stage begins with seven qubits, each initialized in the |0⟩ state, represented by vertical lines on the left. Each qubit undergoes a Hadamard gate (H), shown as blue rectangles, followed by a rotation gate (Rx, Ry, or Rz), depicted as purple rectangles. The rotation gates vary per qubit: the first two qubits have Rx, the next two have Ry, and the last three have Rz. These operations encode classical input data x into a quantum state |Ψ₀(θ)⟩.

The Ansatz stage follows, enclosed in a gray dashed rectangle. It applies a series of parameterized unitary operations U(θi) to the encoded state. There are 14 such operations, arranged in three columns across the seven qubits: U(θ₁) to U(θ₇) in the first column, U(θ₈) to U(θ₁₁) in the second, and U(θ₁₂) to U(θ₁₄) in the third. Each U(θi) is represented as an orange rectangle, indicating trainable parameters θ that will be optimized.

The Measurements stage, enclosed in a light green dashed rectangle, performs quantum measurements on each of the seven qubits. Each measurement is symbolized by a red semicircle with a diagonal line, representing a projective measurement in the computational basis. The outcomes of these measurements are classically processed to produce a predicted value ŷ, shown in a gray rounded rectangle at the far right.

A feedback loop connects the predicted value ŷ to the Ansatz stage via an optimization block. This block, shown as an orange hexagon, contains the equation: 'Optimization: θ* = argₜmin J(y; ŷ)', indicating that a classical optimizer adjusts the parameters θ to minimize the loss function J between the true label y and the predicted value ŷ. The feedback arrow enters the Ansatz stage, completing the variational training loop.

All connections between components are represented by solid black lines, with arrows indicating the direction of data flow. The overall structure reflects a hybrid quantum-classical machine learning framework where quantum circuits are trained using classical optimization techniques.
