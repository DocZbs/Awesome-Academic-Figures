# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

HMM-LSTM Fusion Model for Economic Forecasting — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02002

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the internal structure of a Long Short-Term Memory (LSTM) neuron at a given time step t, enclosed within a light green rounded rectangle representing the entire LSTM cell. The global layout is horizontal, showing data flow from left to right, with inputs entering from the bottom-left and outputs exiting from the top-right and bottom-right. Three primary inputs are shown: the previous hidden state h_{t-1}, the current input x_t, and the previous cell state c_{t-1}. These inputs feed into four distinct computational gates arranged sequentially from left to right: the forget gate, the input gate, the cell candidate computation, and the output gate.

Visual modules include colored rectangular boxes representing activation functions or gates: a yellow box labeled σ for the forget gate (f_t), a green box labeled σ for the input gate (i_t), an orange box labeled tanh for computing the cell candidate (˜c_t), and a red box labeled σ for the output gate (o_t). Each gate receives inputs from both the current input x_t and the previous hidden state h_{t-1} via horizontal lines entering from below. The outputs of these gates are denoted as f_t, i_t, ˜c_t, and o_t respectively.

The cell state update process begins with the forget gate output f_t multiplying the previous cell state c_{t-1} through a pink circular node labeled '×'. Simultaneously, the input gate output i_t multiplies the cell candidate ˜c_t (computed via tanh) through another pink '×' node. The results of these two multiplications are then added together using a blue circular '+' node, producing the new cell state c_t, which exits to the right.

For the hidden state computation, the output gate o_t multiplies the tanh of the new cell state c_t through a pink '×' node. This product is then passed through a purple oval labeled 'tanh' (representing the final tanh activation) to produce the current hidden state h_t, which exits to the bottom-right. Additionally, the same tanh output is used to compute the output y_t, which exits upward from the top-right of the cell.

Connections are represented by black arrows indicating the direction of data flow. The inputs h_{t-1} and x_t split and feed into all four gates. The output of each gate connects to the next stage: f_t to the first multiplication, i_t to the second multiplication, ˜c_t to the second multiplication, and o_t to the final multiplication. The cell state c_t is passed forward to the next time step, while h_t and y_t are outputs of the current time step. The diagram clearly visualizes the gating mechanism that allows LSTMs to selectively remember or forget information over time.
