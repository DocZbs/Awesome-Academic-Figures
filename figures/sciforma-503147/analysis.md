# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Never Reset Again: A Mathematical Framework for Continual Inference in Recurrent Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15983

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents computational graphs for four distinct recurrent neural network architectures: Vanilla RNN, GRU, SSM, and SNN, arranged side-by-side in a horizontal layout. Each architecture is enclosed within a light gray rounded rectangle, with its name labeled above in bold black text. The overall structure is modular, with each module representing a single time step's computation, showing how the hidden state evolves from time t to t+1 based on the current input x_t.

In the Vanilla RNN module, the input x_t and previous hidden state h_t are combined and passed through a tanh activation function (represented as a white rounded rectangle with black text 'tanh') to produce the next hidden state h_{t+1}. A single arrow from h_t enters the tanh block, and another arrow from x_t also points to the same tanh block, indicating their combination before activation. The output h_{t+1} exits the tanh block to the right.

The GRU module features a more complex structure with two sigmoid gates (σ) and one tanh gate. The input x_t and previous hidden state h_t are fed into both σ gates. The first σ gate outputs a reset gate signal, which modulates the input x_t via a multiplication (×) operation. The second σ gate outputs an update gate signal, which is subtracted from 1 (1−) and then used to scale the previous hidden state h_t. The scaled x_t and scaled h_t are summed (+) and passed through a tanh block. The output of the tanh is then combined with the original h_t using the update gate signal (via multiplication and addition), producing h_{t+1}.

The SSM (State Space Model) module shows a linear transformation of the hidden state. The input x_t is multiplied by matrix B and added to the previous hidden state h_t (via a + node labeled A). This sum is then multiplied by matrix C. The result is passed through a Gated Linear Unit (GLU) block, which consists of a + node followed by a GLU label, and then another + node. The output of this path is y_{t+1}. Simultaneously, the result of the A operation (h_t + Bx_t) is also multiplied by matrix D and added to the GLU output to form y_{t+1}. The hidden state h_{t+1} is directly propagated from the A node to the next time step.

The SNN (State Space Neural Network) module includes a parameterized function H(θ). The input x_t and a scalar τ are summed at a + node, and the result is multiplied by τ (×) to produce u_{t+1}. Additionally, the sum of x_t and τ is passed through H(θ), which outputs s_{t+1}, a state variable that is passed forward independently. The function H(θ) is represented as a white rounded rectangle with black text 'H(θ)', and the state s_{t+1} is shown as a separate output flowing to the right, indicating it may be used for other purposes or in subsequent steps. The connections are clean, with arrows indicating data flow, and all operations are explicitly labeled with symbols like +, ×, σ, tanh, GLU, and H(θ).
