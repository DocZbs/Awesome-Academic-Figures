# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Performance Control in Early Exiting to Deploy Large Models at the Same Cost of Smaller Ones — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19325

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural design of PCEE (Probabilistic Confidence-based Early Exit), a framework for early exit in deep neural networks. The global layout consists of a horizontal sequence of layers, represented by green rounded rectangles labeled L_i, L_{i+1}, ..., L_n, indicating successive network layers. Each layer L_i is followed by a corresponding exit block E_i, depicted as a light blue rounded rectangle, forming a repeating pattern across the network. These exit blocks serve as decision points where the model may choose to terminate processing and output a prediction.

At the top of the diagram, a large light blue rounded rectangle encapsulates the internal structure of a single exit block E_i. This module receives the input representation r_i from the preceding layer. Inside this module, r_i is fed into an 'exit layer' component, shown as a vertical light blue rectangle. The exit layer computes two outputs: a confidence score c_i, represented by a purple arrow, and a prediction pred_i, shown by a red arrow. The confidence score c_i is mapped to an estimated accuracy acc_i using a reliability diagram—a bar chart embedded within the module—where the x-axis represents confidence (ranging from 0.2 to 1.0) and the y-axis represents accuracy (ranging from 0.2 to 1.0). The diagram shows a step-like curve with a dashed horizontal line at accuracy 0.5, indicating a threshold. The highest bar corresponds to confidence 0.8–1.0, suggesting high accuracy at high confidence.

The estimated accuracy acc_i is then evaluated against a predefined threshold δ in a conditional decision block, also inside the large blue container. This block contains the logic: 'if acc_i ≥ δ: exit pred_i; else: pass r_i'. If the condition is met, the model outputs the prediction pred_i via a downward red arrow, signifying early termination. Otherwise, the original representation r_i is passed forward to the next layer via a gray arrow, continuing the forward pass.

Connections between components are indicated by arrows: solid gray arrows represent the forward flow of representations r_i between layers; solid red arrows indicate the output of predictions pred_i when exiting; and solid purple arrows denote the flow of confidence scores c_i to the reliability diagram. Dashed blue lines connect the exit block E_i to the main network path, visually linking the decision point to the underlying layer structure. Additionally, small red downward arrows beneath each E_i suggest potential auxiliary outputs or logging of decisions. The entire diagram emphasizes a dynamic, confidence-driven early-exit mechanism integrated into a multi-layer network.
