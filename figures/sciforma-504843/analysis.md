# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating deep learning models for fault diagnosis of a rotating machinery with epistemic and aleatoric uncertainty — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18980

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of Monte Carlo (MC) dropout for uncertainty estimation in neural networks. The global layout consists of two vertically stacked neural network structures, representing K different forward passes through the same network architecture, each with a distinct dropout mask. These are labeled as 'MC dropout k=1' at the top and 'MC dropout k=K' at the bottom, indicating multiple stochastic evaluations of the model on a single input example. A thick black arrow labeled 'Example' enters from the left, feeding into both networks simultaneously, emphasizing that the same input is processed K times under different dropout configurations.

Each network is structured into three main sections: an 'Input layer', 'Hidden layers', and an 'Output layer'. The input layer contains four dark blue circular nodes arranged vertically, representing the input features. The hidden layers consist of multiple fully connected layers, each composed of light gray circular nodes with green outlines; these are interconnected via solid black lines, indicating active connections. Within each hidden layer, some nodes are marked with a red 'X' inside a dashed circle, signifying that they are dropped out during that particular forward pass. The positions of the red 'X' vary between the top and bottom networks, illustrating the stochastic nature of dropout sampling. Dashed lines connect the dropped-out nodes to their neighbors, visually indicating that those connections are inactive during that sample.

The output layer in each network comprises several yellow circular nodes arranged vertically, representing the predicted class scores or logits. A thick black arrow labeled 'K outputs' emerges from the right side of both networks, converging into a single vertical bar chart labeled 'Probability of predicted classes'. This bar chart displays multiple horizontal yellow bars of varying lengths, symbolizing the probability distribution over classes derived from aggregating the K outputs, typically via averaging or softmax transformation.

The figure uses consistent visual attributes: blue circles for inputs, gray circles with green borders for hidden units, yellow circles for outputs, red 'X' marks for dropped neurons, solid lines for active connections, and dashed lines for inactive ones. The vertical ellipsis between the two network diagrams indicates that there are K such forward passes, not just the two shown. The overall workflow demonstrates how MC dropout generates multiple predictions from the same model by sampling different dropout masks, and then combines them to estimate predictive uncertainty and produce a final probability distribution over classes.
