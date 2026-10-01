# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AnalogXpert: Automating Analog Topology Synthesis by Incorporating Circuit Design Expertise into Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19824

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a structured library of fundamental analog circuit building blocks, organized into two main sections: 'One-Signal Path Blocks' and 'Two-Signal Path Blocks', each displayed in a grid format with schematic diagrams and corresponding labels. The top section, 'One-Signal Path Blocks', contains six distinct subcircuits arranged horizontally. From left to right, these are: 'Cascode Stage', shown as a single NMOS or PMOS transistor with drain connected to VBIAS and source grounded; 'Diode Connected', depicting two transistors (N and P type) with gate and drain shorted; 'Common Source', illustrating an N-type transistor with VIN at gate and VOUT at drain, and a P-type transistor with VIN at gate and VOUT at drain; 'Current Mirror (BIAS)', showing two transistors (N and P) with gates tied to VBIAS and sources grounded; 'R', representing a resistor between nodes O1 and O2; and 'C Feedback', showing a capacitor from O1 to O2 with an additional capacitor from O2 to ground (O3). Each block is labeled beneath its schematic.

The bottom section, 'Two-Signal Path Blocks', contains five subcircuits. From left to right: 'Cascode Stage Pair', displaying two cascode stages (N and P types) with shared VBIAS and individual drains D1/D2 and sources S1/S2; 'Cascode Current Mirror (2B)', showing two mirrored cascode structures (N and P types) with separate bias voltages VBIAS1 and VBIAS2; 'Current Mirror', presenting a simple current mirror configuration with two transistors (P type) sharing a common gate connection and outputs O1/O2; 'Differential Pair', illustrating a differential amplifier with two input terminals VIN and VIP, and two output terminals O1/O2, using both N and P type transistors with shared VBIAS; and 'Cascode Current Mirror (1B)', depicting a cascode current mirror structure with one bias voltage VBIAS, featuring both N and P type configurations. All schematics use standard MOSFET symbols with labeled terminals (D, S, G), bias voltages (VBIAS), and output nodes (O1, O2, O3). The figure uses black lines on white background with blue headers for section titles. There are no arrows indicating signal flow; instead, connections are shown via direct line links between components. The layout is tabular, with each row representing a category and columns representing individual blocks. The figure serves as a visual reference for subcircuit-level SPICE code representation in analog topology design.
