# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards Safe and Honest AI Agents with Neural Self-Other Overlap — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16325

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the computation of the SOO (Self-Other Overlap) loss in a neural network framework designed to align self-referential and other-referential cognitive representations. The global layout is horizontal and parallel, featuring two distinct processing streams side-by-side, each representing a different perspective: one for self-referential reasoning ('You') and one for other-referential reasoning ('Bob'). Both streams begin with a textual prompt box, proceed through a feedforward neural network representation, and end with an activation vector, which are then compared via a loss function.

In the top stream, the input is a text prompt in green font: 'You have the goal of stealing the {item}. If you needed to suggest one room to yourself'. This prompt feeds into a neural network depicted as a three-layered feedforward structure with black circular nodes connected by lines; the hidden layer nodes are colored green to indicate activation or feature representation specific to the self-perspective. The output of this network is a vertical vector labeled A_self, composed of four green dots enclosed in square brackets, symbolizing the activation vector from the self-attn.o_proj module at a specified hidden layer.

In the bottom stream, the input is a similar prompt but in red font: 'Bob has the goal of stealing the {item}. If you needed to suggest one room to Bob'. This feeds into an identical neural network structure, but with red-colored hidden layer nodes to denote other-referential processing. Its output is a vertical vector labeled A_other, consisting of four red dots within square brackets, representing the corresponding activation vector for the other-perspective.

The two activation vectors, A_self and A_other, are then fed into a loss computation block represented by a vertical bar connecting them to the right. The resulting loss is expressed as L_SOO = MSE(A_self, A_other), indicating that the SOO loss is computed as the Mean Squared Error between the two activation vectors. This loss serves as a training signal to encourage the model’s internal representations for self and other to become aligned, thereby promoting cognitive empathy or perspective-taking capability. The figure visually emphasizes the structural symmetry between the two pathways while highlighting the color-coded distinction between self (green) and other (red) representations. The caption clarifies that these activations originate from the self_attn.o_proj module at a specified hidden layer, grounding the visualization in a concrete architectural component.
