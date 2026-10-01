# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Cirbo: A New Tool for Boolean Circuit Analysis and Synthesis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14933

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a miter circuit used in formal verification, composed of three main computational modules enclosed in blue rectangular boxes labeled 'aig', 'xaig', and 'pairwise_xor'. The global layout is vertically structured, with inputs at the top, processing modules in the middle, and a final output node at the bottom. The circuit is designed to compare two logic functions, represented by the 'aig' and 'xaig' modules, using an XOR-based equivalence check.

The left module, labeled 'aig', implements a Boolean circuit using AND (∧), OR (∨), and NOT (¬) gates. It receives inputs x_1 and x_0, with x_1 feeding into the topmost AND gate and x_0 connecting to multiple internal gates. The structure forms a directed acyclic graph (DAG) where each gate is a circle containing the corresponding operator symbol, and edges are directed arrows indicating data flow from inputs to outputs.

The right module, labeled 'xaig', represents an extended AND-Inverter Graph (XAIG) that includes XOR (+) gates alongside AND and NOT gates. It takes inputs x_2 and x_0, with x_2 entering the topmost XOR gate and x_0 feeding into several intermediate gates. The XAIG structure also forms a DAG, with XOR gates denoted by ⊕ symbols inside circles, and connections showing how the inputs propagate through the network.

At the bottom, the 'pairwise_xor' module contains two XOR gates, each receiving one output from the 'aig' and 'xaig' modules. These XOR gates compute the bitwise difference between the two function outputs. The results from these two XOR gates are then fed into a final OR gate (represented by a gray circle with ∨), which produces the overall output of the miter circuit. This final OR gate acts as an equivalence checker: if both outputs are identical, the XORs produce 0, and the OR gate outputs 0; otherwise, it outputs 1, indicating a mismatch.

Connections are shown as black arrows, indicating the direction of signal propagation. Inputs x_0, x_1, and x_2 are positioned at the top and feed into the respective modules. The outputs of the 'aig' and 'xaig' modules are connected to the 'pairwise_xor' module, and the outputs of the XOR gates in 'pairwise_xor' converge to the final OR gate. The entire structure is designed to verify whether the two logic functions implemented by 'aig' and 'xaig' are equivalent under all input combinations.
