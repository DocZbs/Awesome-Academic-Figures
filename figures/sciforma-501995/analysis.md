# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning Complex Word Embeddings in Classical and Quantum Spaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13745

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure displays nine distinct quantum circuits, labeled Circuit 5, 7, 8, 9, 11, 12, 13, 14, and 17, arranged in a 3x3 grid. Each circuit is enclosed within a dashed rectangular boundary and consists of multiple horizontal lines representing qubit wires, each initialized in the |0⟩ state as indicated by the label on the left side of each wire. The circuits are composed of quantum gates represented by rectangular boxes with rounded corners, labeled with gate types such as Rx, Ry, Rz, or H (Hadamard gate), and controlled operations denoted by black dots connected by vertical lines to target gates. The global layout is modular and structured, with each circuit occupying its own cell in the grid, allowing for independent inspection of each quantum circuit’s structure.

Each visual module corresponds to a specific quantum circuit, with gates arranged sequentially along the qubit wires from left to right, indicating the temporal order of operations. The gates are uniformly styled: white-filled rectangles with black borders and black text labels. The controlled gates are depicted using black filled circles (control points) on one qubit wire, connected vertically to a target gate on another wire, indicating a conditional operation. In some circuits, such as Circuit 11, controlled-phase gates are shown using a circle with a plus sign inside on the control wire and a filled dot on the target wire. Circuit 9 uniquely features Hadamard (H) gates at the beginning of each qubit wire before any other operations.

Connections between gates are represented by straight horizontal lines along the qubit wires, while vertical lines connect control points to target gates for controlled operations. These connections define the flow of quantum information and the entanglement structure within each circuit. For example, in Circuit 8, there are multiple controlled-X (CNOT) gates connecting adjacent qubits, forming a pattern of entanglement across the four-qubit system. Similarly, Circuit 12 shows a more complex entanglement pattern with multiple CNOTs linking different qubit pairs. Circuit 17 includes both controlled-X and controlled-Z-like structures, while Circuit 11 incorporates controlled-phase gates. The circuits vary in depth and connectivity, with some being shallow and others deeper with more layers of gates and entangling operations. All circuits operate on exactly four qubits, as indicated by the four horizontal wires per circuit. The figure does not include any mathematical equations or additional annotations beyond the gate labels and circuit identifiers.
