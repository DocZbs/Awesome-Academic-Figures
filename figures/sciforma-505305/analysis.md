# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AnalogXpert: Automating Analog Topology Synthesis by Incorporating Circuit Design Expertise into Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19824

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the AnalogXpert framework for analog circuit topology synthesis, structured as a top-down design flow. At the top, a 'Design Requirement' box, marked with an icon of a construction worker, lists specific parameters: Stage Numbers = 1, Compensation = None, Feedback = {Type: None, FB Network: None}, InputSignal1 = Differential, OutputSignal1 = Single-Ended, Input Type1 = NMOS, Topology1 = Common Source, Load1 = Simple Mirror, TailBias1 = Ground. This requirement block feeds into the central component labeled 'AnalogXpert: Large Language Model + Analog Circuit Design Expertise', which is represented by a light green rectangular box with a stylized hexagonal logo on the left. From this core module, the design process branches into three parallel outputs at the bottom, each representing a different abstraction level of the synthesized circuit.

On the left, a gray rectangular box labeled 'Circuit Diagram' displays a schematic of a differential pair amplifier with a current mirror load. The diagram includes two NMOS transistors connected between VIN and VIP inputs, with a common source connected to VBIAS through a PMOS transistor, and the drain nodes connected to VDD via a PMOS current mirror formed by two transistors. The labels VDD, VIN, VIP, and VBIAS are clearly marked.

In the center, a light purple box labeled 'SPICE Code (Device-level)' contains detailed SPICE netlist code for the circuit. It begins with '.SUBCKT CKT01 Vbiasn Vin Vip Vout VDD GND' and defines three NMOS transistors (MM0, MM1, MM2) forming the differential pair and current mirror. Below this, a blue dashed rectangle highlights a section labeled 'CurrentMirrorP', containing two PMOS transistors (MM4, MM5) with parameters l=30n, w=100n, m=1, nf=1, and model 'pch_mac'. The code ends with '.ENDS'.

On the right, a light peach-colored box labeled 'SPICE Code (Subcircuit-level)' presents a higher-level SPICE netlist. It starts with '.SUBCKT CKT01 Vbiasn Vin Vip Vout VDD GND' and instantiates two subcircuits: X10 for 'DifferentialPairN' and X11 for 'CurrentMirrorP'. The X11 instance is enclosed in a blue dashed rectangle, indicating it corresponds to the device-level CurrentMirrorP defined in the center box. The code concludes with '.ENDS'.

Connections between these components are shown using arrows: a black downward arrow from the Design Requirement to AnalogXpert, and bidirectional orange arrows connecting the Circuit Diagram to the Device-level SPICE Code, and the Device-level SPICE Code to the Subcircuit-level SPICE Code. Additionally, a blue dashed line connects the highlighted 'CurrentMirrorP' section in the device-level code to the corresponding X11 instance in the subcircuit-level code, emphasizing the hierarchical relationship. The overall layout is horizontal, with a clear top-to-bottom flow from requirements to expert system to multi-level outputs.
