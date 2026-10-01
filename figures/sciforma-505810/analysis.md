# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Advancing Parkinson's Disease Progression Prediction: Comparing Long Short-Term Memory Networks and Kolmogorov-Arnold Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20744

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct neural network architectures side by side under the overarching title 'Structures of our models'. The left panel, labeled '(a) Structure of LSTM', illustrates a sequential deep learning model composed of four main components arranged horizontally: Input Sequence, LSTM layers, Dense Layers, and Output. The Input Sequence is depicted as a vertical stack of purple rectangular nodes labeled x₁, x₂, ..., xₙ, enclosed within a light green box. These inputs feed into a vertical stack of three pink rectangular nodes labeled 'LSTM', contained within a light blue box. Each LSTM node receives input from the corresponding sequence element and passes its output to the next LSTM layer below it. From each LSTM node, multiple green lines extend to a dense layer section, which consists of a fully connected network represented by black circular nodes interconnected with blue lines; this section is enclosed in a beige box labeled 'Dense Layers'. The outputs from the dense layers converge via brown lines to a single orange rectangular node labeled 'UPDRS' within a light blue box labeled 'Output'.

The right panel, labeled '(b) Structure of KAN', shows a multi-layered feedforward network with a hierarchical structure. At the top, a gray rectangular node labeled 'Input' branches out with black arrows to a first hidden layer consisting of eight light green square nodes, each containing a unique wavy curve symbolizing a learnable activation function. These nodes connect via black arrows to a second hidden layer of five pink square nodes, also containing distinct wavy curves. All nodes in the second layer converge via black arrows to a single black circular node, which then connects to a final blue rectangular node labeled 'Output'. A curved arrow loops from the output back toward the second hidden layer, indicating feedback or iterative computation. Additionally, a small orange circle with the Greek letter Σ (sigma) is positioned to the left of the second hidden layer, with an arrow pointing to it from one of the connections, suggesting summation or aggregation. A text label near the bottom right reads 'Learnable activation functions on edges', emphasizing that the activation functions are not fixed but trainable parameters associated with the connections between nodes.

Both diagrams use color-coded boxes and shapes to differentiate functional modules: green for input, blue for processing/output blocks, pink for LSTM/KAN hidden units, and orange for the final output. Arrows indicate the direction of data flow, and the overall layout reflects a clear progression from input to output in both architectures.
