# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Reservoir Computing Generalized — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12104

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two architectures labeled (a) and (b), illustrating conventional Reservoir Computing (RC) and Generalized Reservoir Computing (GRC), respectively. Both diagrams share a similar global layout: an Input column on the left, a central Reservoir module, and an Output column on the right. Each component is vertically aligned, with arrows indicating data flow from left to right.

In panel (a), the Input is represented as a vertical stack of black circular nodes labeled u_t. These feed into the Reservoir, depicted as a cluster of five interconnected black nodes arranged in a loose oval shape. Each node in the Reservoir has concentric green ripples around it, symbolizing the presence of node-wise Echo State Property (ESP). The connections between Reservoir nodes are curved black arrows forming a recurrent network structure. Below the Reservoir, the label 'State x_t with ESP' is written in green. From the Reservoir, multiple arrows point to the Output, shown as a vertical stack of green-ringed black nodes labeled ŷ_t. This output is generated directly from the Reservoir states via a linear or nonlinear readout, as stated in the caption.

Panel (b) mirrors the structure of (a) but introduces a key modification. The Input u_t again feeds into the Reservoir, which now contains four nodes with red ripples and one with green ripples, indicating that some nodes lack ESP ('State x_t without ESP', labeled in red below). The same recurrent connections exist among the nodes. However, instead of direct output, the Reservoir’s state is passed through a rectangular box labeled 'Time-Invariant Transformation' containing the mathematical expression f(x_t). This transformation removes time-dependence from the state before producing the final Output ŷ_t, which again consists of green-ringed nodes, signifying that the output now possesses ESP. The caption clarifies that this TI transformation can be implemented via a nonlinear readout with memory.

The visual distinction between green and red ripples serves as a critical attribute: green indicates ESP is present, red indicates it is absent. The arrows consistently denote directional information flow. The overall structure emphasizes that conventional RC (a) inherently produces outputs with ESP due to the reservoir’s internal dynamics, whereas GRC (b) allows for reservoirs without ESP, compensating via a post-processing TI transformation to achieve ESP in the output. The figure thus illustrates that conventional RC is a special case of GRC.
