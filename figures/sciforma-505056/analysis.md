# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Expressiveness and Length Generalization of Selective State-Space Models on Regular Languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19350

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a neural network model named \name, structured into three distinct sequential modules: Transition Selection, Recurrence, and Readout, each occupying a vertically aligned column within the diagram. The overall layout is horizontal, progressing left to right, with each module enclosed in a light gray rectangular background to visually separate functional stages.

In the first module, Transition Selection, an input vector u_t enters a Linear layer, followed by a Softmax activation. The output of Softmax is then split into multiple branches, each multiplied element-wise (denoted by circular nodes with '×') with one of k predefined matrices A_1 through A_k. These weighted matrices are summed together via a circular '+' node, and the result is passed through an OpNorm (Operator Normalization) block. The output of this module is labeled A(u_t), representing the selected transition matrix at time t.

The second module, Recurrence, receives two inputs: the selected transition matrix A(u_t) from the previous module and the current input u_t. The input u_t is multiplied by a fixed matrix B (via a square node with '×'), and this product is added (via a circular '+' node) to the output of the previous time step's state x_{t-1} (which is fed back via a recurrent connection). The resulting sum becomes the new state x_t. Additionally, the transition matrix A(u_t) multiplies the previous state x_{t-1} (via another square '×' node), and this product is also added to the B·u_t term to form x_t. This structure implements the recurrence equation described in Eq.~\eqref{eq_slssm}, where the transition matrix is dynamically selected based on the input.

The third module, Readout, takes the current state x_t and processes it through a Norm layer (layer normalization), followed by a Linear transformation, producing the final output y_t.

All computational blocks are represented as rectangles with dark borders and black text. Multiplication operations are shown as circular or square nodes with '×', while addition is shown as circular nodes with '+'. Arrows indicate the direction of data flow, with solid lines connecting components. The diagram uses consistent visual styling throughout, with clear labeling of inputs (u_t), intermediate states (x_t), outputs (y_t), and parameters (A_1 to A_k, B). The caption clarifies that the model’s design draws inspiration from \cite{fan_advancing_2024} for the transition selection mechanism.
