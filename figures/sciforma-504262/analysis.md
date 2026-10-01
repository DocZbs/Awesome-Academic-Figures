# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Moving boundaries: An appreciation of John Hopfield — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18030

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two schematic diagrams labeled (A) and (B), illustrating the evolution of neural network architectures over time. Both diagrams depict feed-forward neural networks, also known as perceptrons, arranged in a left-to-right flow from input to output.

In diagram (A), the global layout consists of three main horizontal modules: 'Retina of Sensory Units' on the left, 'Associator Units' in the middle, and 'Response Units' on the right. The 'Retina of Sensory Units' is represented as a rectangular grid of circular nodes, with some nodes shaded diagonally to form an irregular shape labeled 'S'. Multiple arrows enter from above into the top row of sensory units, indicating external stimuli. Each sensory unit connects via directed lines (arrows) to multiple associator units, forming a dense fan-out pattern. The associator units are depicted as a cluster of circular nodes with internal feedback loops (curved arrows pointing back into the same node or neighboring nodes), suggesting recurrent connections within this layer. From the associator units, connections extend to the response units, which are shown as another cluster of circular nodes with additional internal feedback loops. The connections between all layers are unidirectional, flowing from left to right, except for the internal feedback loops within the associator and response units.

Diagram (B) shows a modern multi-layer feed-forward neural network with four distinct layers stacked vertically. From bottom to top, these are labeled 'Input units', 'Hidden units H1', 'Hidden units H2', and 'Output units'. Each layer contains several circular nodes representing individual units. All connections are directed upward with arrows, indicating forward propagation. Each unit in a lower layer connects to multiple units in the next higher layer, forming a fully connected structure. Specific weights are labeled along selected connections: 'w_ij' denotes the weight from input unit 'i' to hidden unit 'j'; 'w_jk' denotes the weight from hidden unit 'j' to hidden unit 'k'; and 'w_kl' denotes the weight from hidden unit 'k' to output unit 'l'. These labels emphasize the parameterized nature of the connections in modern neural networks.

The visual style is monochrome line art with no color coding. Nodes are uniformly circular, and connections are solid lines with arrowheads indicating direction. The figure uses clear textual labels beneath each module or layer to identify its function. The overall structure of both diagrams emphasizes the progression from early, biologically inspired models with feedback to modern, strictly feed-forward deep architectures with explicit weight parameters.
