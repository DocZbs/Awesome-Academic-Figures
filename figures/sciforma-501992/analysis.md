# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning Complex Word Embeddings in Classical and Quantum Spaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13745

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a quantum circuit known as 'Ansatz 14', as referenced from ‘expressive-pqc’. The global layout is a rectangular grid enclosed by a dashed boundary, representing a quantum circuit composed of four horizontal lines, each corresponding to a qubit initialized in the |0⟩ state, as indicated by the labels on the left side of each line. The circuit spans horizontally from left to right, indicating the temporal evolution of quantum operations. The structure is modular, with a sequence of single-qubit rotation gates and two-qubit entangling gates arranged in a layered fashion.

Visually, the circuit consists of two types of basic elements: single-qubit rotation gates and controlled operations. Single-qubit gates are represented as rounded rectangles labeled either 'R_x' or 'R_y', denoting rotations about the X and Y axes of the Bloch sphere, respectively. These gates are placed along the individual qubit lines. The entangling operations are depicted as black filled circles (dots) connected vertically between adjacent qubit lines, signifying controlled-Z (CZ) or similar entangling gates, which are standard in variational quantum circuits. The gates are arranged in a staggered pattern across the four qubits, with R_x and R_y gates alternating in position and layer, and entangling dots appearing at specific intervals to create entanglement between neighboring qubits. The visual style is monochromatic, using black lines and text on a white background, with no color coding. All gate labels are centered within their respective shapes, and the qubit lines are straight horizontal lines extending from left to right.

Connections and arrows are implicit in the circuit’s structure: the horizontal lines represent the qubit wires, and the vertical connections from the black dots indicate the control-target relationship of the entangling gates. The flow of the circuit proceeds from left to right, with each gate applied sequentially. The entangling gates connect qubit i to qubit i+1, forming a nearest-neighbor coupling pattern. The sequence of operations includes multiple layers of single-qubit rotations followed by entangling gates, creating a depth of approximately four layers of operations. The final state of the circuit is not shown, but the output would be the result of applying this sequence to the initial |0⟩⊗⁴ state. The overall design suggests a parameterized quantum circuit suitable for variational algorithms, where the angles of the R_x and R_y gates are trainable parameters. The figure does not include any explicit mathematical expressions or equations, but the structure implies a unitary transformation U = U_L ... U_1, where each U_i represents a layer of gates. The caption explicitly identifies this as 'Ansatz 14', indicating it is one of several proposed architectures in the cited work.
