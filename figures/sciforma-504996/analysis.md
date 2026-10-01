# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Are Two Hidden Layers Still Enough for the Physics-Informed Neural Networks? — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19235

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a dual-view explanation of a neural network-based approximation method for a function u(x), likely used in solving differential equations or similar scientific computing tasks. The left side displays a graphical representation of the function u(x) over discrete points x₀ through x₅ on the x-axis, with corresponding function values u₀ through u₅ marked by green circles connected by a smooth black curve. The initial condition u₀ is highlighted in an orange box and is linked via a red feedback loop to the neural network structure on the right, indicating its role as a boundary or initial condition input. Each xᵢ point is labeled in a light green rectangular box beneath the x-axis, and vertical dashed lines connect each xᵢ to its corresponding uᵢ point on the curve.

The right side illustrates a feedforward neural network architecture with two layers. The input x enters a first layer composed of N+1 neurons (indexed from 0 to N), each represented by a blue circle with a diagonal slash. Each neuron in the first layer receives a weight Wᵢ⁽¹⁾ and a bias bᵢ⁽¹⁾, where the biases are shown in green boxes and weights are labeled adjacent to the connections. The outputs of these neurons feed into a second layer consisting of a single neuron (also blue with a diagonal slash), which receives weights Wᵢ⁽²⁾ from each first-layer neuron and a bias b₀⁽²⁾, highlighted in a red box. This final neuron produces the output u_θ, shown in a bold blue circle, representing the network’s predicted function value at input x.

A critical feature is the red feedback loop originating from the initial condition u₀ (on the left) and connecting to the bias term b₀⁽¹⁾ in the first neuron of the first layer. This indicates that the initial condition is incorporated directly into the network’s parameters, ensuring that the network satisfies the boundary condition u(x₀) = u₀. Additionally, green lines extend from each xᵢ point on the left to the corresponding bias term bᵢ⁽¹⁾ in the first layer, suggesting that the spatial coordinates xᵢ are used to parameterize or influence the biases of the network, possibly enabling adaptive or position-dependent learning.

The overall layout is horizontal, with the function graph on the left and the network architecture on the right, connected by the red feedback loop and green parameter links. The visual modules include circular nodes for neurons, rectangular boxes for inputs/outputs and parameters, and labeled arrows for weights and biases. The color coding—green for xᵢ and bᵢ⁽¹⁾, red for u₀ and b₀⁽²⁾, blue for neurons—helps distinguish between different types of data and parameters. The diagram effectively conveys how the neural network is trained to approximate u(x) while enforcing the initial condition u₀ through direct parameter injection.
