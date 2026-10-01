# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Investigating layer-selective transfer learning of QAOA parameters for Max-Cut problem — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21071

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic of a layer-selective transfer learning scheme for the Quantum Approximate Optimization Algorithm (QAOA) applied to the Max-Cut problem. The diagram is structured in three main horizontal sections, each representing a stage or component of the method.

In the top section, the overall quantum reservoir computing framework is shown. On the far left, an input time series is represented by a purple sinusoidal waveform labeled 'Input (time series)'. This feeds into a yellow rounded rectangle labeled 'Quantum reservoir', which contains a small network of cyan nodes connected by lines, symbolizing a quantum system such as spin networks. Below this box, a note clarifies: '(exploit dynamics of a quantum system, e.g. spin networks)'. An arrow points from the reservoir to a blue rounded rectangle labeled 'Measurement Outcomes y_j'. From this, multiple black arrows diverge to the right, leading to the output expression 'Output ŷ_i = W_ij y_j'. Below this, red text states 'Only trainable weights W_ij', indicating that only the readout weights are optimized in this setup.

The middle section details the donor graph and its associated QAOA circuit. On the left, a gray box labeled 'Donor graph' contains a small graph with five nodes: node 0 (white), node 1 (blue), node 2 (pink), node 4 (blue), and node 0 connected to all others. To the right, a sequence of alternating red and teal rectangular blocks represents the QAOA layers. Each red block is labeled with 'e^{-iγ_l H_c}' and each teal block with 'e^{-iβ_l H_m}', where l ranges from 1 to p. These blocks are connected by vertical lines representing qubits initialized in the |+⟩ state. The rightmost end of the circuit has four measurement icons (rotating arrows). Below the circuit, a bidirectional gray arrow spans the entire width with the label 'Optimize all layers', indicating full training of the donor model.

The bottom section illustrates the acceptor graph and its circuit after parameter transfer. On the left, a gray box labeled 'Acceptor graph' shows a different graph with four nodes: 0 (blue), 1 (pink), 2 (blue), and 3 (pink), forming a complete graph minus one edge. To the right, a similar QAOA circuit is shown, but with more layers. The first few layers use parameters marked with asterisks (e.g., γ_1*, β_1*), indicating they are transferred from the donor. The subsequent layers have parameters like γ_{i+n}* and β_{i+n}*, suggesting a partial transfer. The final layers are labeled with γ_p* and β_p*. A large downward gray arrow connects the donor and acceptor circuits, labeled 'Transfer of optimized params. {γ_1*, β_1*, ..., γ_p*, β_p*}'. Below the acceptor circuit, a bidirectional gray arrow spans part of the circuit with the label 'Optimize subset of all layers', indicating that only some layers are fine-tuned after transfer.

The figure visually communicates a transfer learning strategy where pre-trained QAOA parameters from a donor graph are partially transferred to an acceptor graph, followed by fine-tuning of a subset of layers to adapt to the new problem instance.
