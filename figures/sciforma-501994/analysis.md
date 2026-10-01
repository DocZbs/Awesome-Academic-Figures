# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning Complex Word Embeddings in Classical and Quantum Spaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13745

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an arbitrary encoding circuit designed to compute the overlap between two quantum states, structured in two main horizontal layers. The top layer presents a high-level schematic of the computation: it begins with an initial state vector |w_i> of dimension [2^N_q, 1], which is processed by a unitary operator Û(θ_f) of size [2^N_q, 2^N_q]. This is followed by another unitary operator Û†(θ̃_c), also of size [2^N_q, 2^N_q], and finally outputs a bra vector <w̃_c| of dimension [2^N_q, 1]. The entire process represents the inner product <w̃_c|w_i>, which corresponds to the overlap between the two quantum states.

The bottom layer provides a detailed circuit diagram of the unitary operations involved. It starts with an initial state |0>⊗N_q, representing N_q qubits all initialized to the ground state. This state is fed into a parameterized quantum circuit (PQC) denoted as PQC(N_q, N_l), which consists of N_l repeated blocks of quantum gates. Each block contains multiple single-qubit and two-qubit unitary operations labeled U₁(θ₁), U₂(θ₂), ..., U₈(θ₈), with parameters θ₁ through θ₈. These operations are arranged across N_q qubit lines, forming a layered structure. The circuit is enclosed in dashed boxes to indicate the repetition of the block structure N_l times.

Following the PQC, the circuit continues with its adjoint, denoted as PQC†(N_q, N_l), which applies the same sequence of gates in reverse order and with conjugated parameters, such as U₁†(θ̃₁), U₂†(θ̃₂), etc., to form the Hermitian conjugate operation. The final output state is <0|⊗N_q, indicating the measurement or evaluation of the state after the full circuit execution.

Connections are shown as solid horizontal lines representing qubit wires, with vertical boxes indicating quantum gates. Arrows in the top layer indicate the flow of the state vector through the unitary transformations. In the bottom layer, the flow is implicit from left to right, with dashed boxes grouping repeated gate sequences. The figure uses black-and-white line art with labeled components, and dimensions are specified below each major component to indicate the size of the state vectors and operators. The overall layout is modular and hierarchical, clearly separating the abstract mathematical representation from the detailed circuit implementation.
