# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Empathic Coupling of Homeostatic States for Intrinsic Prosociality — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the basic network architecture of an agent designed for decision-making, incorporating both internal and external sensory inputs along with cognitive empathy. The global layout is vertically structured, progressing from input layers at the bottom to output layers at the top, with a central recurrent component. At the base, three distinct input sources are presented: 'Exteroception', 'Interoception', and 'Other’s Interoception'. The latter is highlighted in light green and labeled with the subcaption 'Cognitive Empathy', indicating it is conditionally activated only under cognitive empathy-enabled scenarios (referred to as 'cognitive' or 'full' conditions in the caption). These three inputs feed into a shared hidden layer represented by a light peach-colored rectangular box, which applies a ReLU activation function, as indicated by the label above the arrow pointing to the next layer. This ReLU layer then connects to a larger light peach-colored rectangular block labeled 'LSTM', signifying a Long Short-Term Memory unit, which serves as the core recurrent processing module. A large black curved arrow loops back to the left side of the LSTM block, symbolizing the recurrent nature of the LSTM, where past states influence current computations. From the LSTM, two outputs branch out: one arrow points upward to a light peach rectangle labeled with the Greek letter π (pi), representing the policy network that determines the 'Action'; the other arrow points to a circular node labeled V, representing the value function. Both the action and value outputs are positioned at the top of the diagram, with 'Action' explicitly labeled above the π block. All connections are depicted as thick, dark gray arrows, indicating the flow of information from inputs through the network to the final outputs. The visual modules are consistently styled with dark gray borders; the main processing units (ReLU, LSTM, π, V) are light peach, while the input nodes are white except for 'Other’s Interoception', which is light green to denote its conditional role. The diagram effectively conveys a hierarchical, recurrent neural network architecture that integrates self-perception, environmental perception, and empathetic understanding of others to produce actions and value estimates.
