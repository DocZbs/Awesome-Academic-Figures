# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Comparative Performance Analysis of Quantum Machine Learning Architectures for Credit Card Fraud Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Quantum Neural Network (SQNN) model, structured as a hybrid quantum-classical pipeline. The global layout is left-to-right, beginning with a feature map on the left, progressing through a central quantum sampling module, and concluding with classical post-processing on the right. A feedback loop from the final output back to the quantum sampler enables iterative optimization.

On the far left, the 'Feature Map' is depicted as a yellow dashed box containing seven qubits initialized in the |0⟩ state. Each qubit undergoes a Hadamard gate (H, shown in blue) followed by a rotation gate (Rx, Ry, or Rz, shown in purple), forming a parameterized quantum circuit. This block is labeled with the mathematical expression Φ: x → |Ψ₀(θ)⟩, indicating that input data x is encoded into a quantum state |Ψ₀(θ)⟩ via a parameterized unitary transformation.

This feature map feeds into a large yellow rounded rectangle labeled 'Quantum Sampler', which contains two internal components. At the top, a gray box labeled 'Quantum Sampler' receives the ansatz state |Ψ(θ)⟩, defined above as U|Ψ₀(θ)⟩ = |Ψ(θ)⟩, where U represents the variational quantum circuit. Inside this sampler, a histogram with red bars and an overlaid probability distribution curve visually represents the sampling process, producing k extracted samples denoted as {Ψ₁, Ψ₁, ..., Ψₖ}. These samples are passed to the next stage.

Adjacent to the histogram, within the same yellow container, is a light green dashed box labeled 'Sampler Extraction'. This module selects a subset of p samples from the k extracted ones, represented mathematically as {Ψ₁, Ψ₁, ..., Ψₚ} ⊆ {Ψ₁, Ψ₁, ..., Ψₖ}, where p ≤ k. The output of this extraction step flows to the right into a peach-colored dashed box labeled 'Best Ψⱼ(θ) that solves the task'.

Above this final box, a pink rounded rectangle labeled 'Classical Method to Extract Best Solution' indicates that classical algorithms are used to identify the optimal sample from the extracted set.

A feedback loop connects the final output back to the quantum sampler. This loop passes through an orange hexagonal box labeled 'Optimization: θ* = argₜmin J(y; ŷ)', signifying that the parameters θ are updated via classical optimization to minimize a cost function J between true labels y and predicted outputs ŷ, thereby refining the quantum circuit for subsequent iterations.

The diagram uses distinct colors and shapes to differentiate components: yellow for the main quantum processing block, blue for Hadamard gates, purple for rotation gates, gray for the quantum sampler header, green for sample extraction, peach for the best solution output, and orange for the optimization step. All connections are directed arrows, clearly indicating the flow of data and control in the hybrid quantum-classical workflow.
