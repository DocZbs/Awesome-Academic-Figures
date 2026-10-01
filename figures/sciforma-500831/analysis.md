# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The Eclipsing Binaries via Artificial Intelligence. II. Need for Speed in PHOEBE Forward Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11837

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic representation of a feedforward neural network architecture used to map model parameters to observable outputs. The global layout is horizontally structured into three main sections: on the far left, a visual representation labeled 'model parameters' shows two abstract 3D shapes resembling molecular or cellular structures, likely symbolizing the physical or biological parameters being modeled. In the center, the core neural network is depicted as a multi-layered feedforward structure with three distinct layers: an input layer (IL), a hidden layer, and an output layer (OL). On the far right, under the label 'mapped observables', two time-series plots are shown, representing the synthesized outputs of the network — one plotting flux over time (in arbitrary units per day) and the other showing voltage (in millivolts) over time, with two intersecting curves (one orange, one blue) and marked data points at specific time intervals.

The central neural network consists of three columns of nodes. The leftmost column represents the input layer, containing n nodes labeled p₁ through pₙ, each represented as a light blue circle with a black arrow pointing into it, indicating input. These nodes are connected via lines to the middle column, the hidden layer, which contains m nodes labeled h₁ through hₘ, also as light blue circles. Between each input node and hidden node, there is a small green rectangle labeled with a weight parameter (e.g., W₁₁, W₂₁, ..., Wₙₘ), signifying the synaptic weights. The connections from the input layer to the hidden layer converge at small orange triangular nodes, which represent the summation operation before activation. Similarly, the hidden layer connects to the rightmost output layer, which has q nodes labeled O₁ through Oq, again as light blue circles. Each connection from a hidden node to an output node is associated with a green rectangle labeled with a weight (e.g., V₁₁, V₂₁, ..., Vₘq), and these connections also pass through orange triangular summation nodes. The figure includes ellipses (…) between nodes to indicate that the full network may have more layers or nodes than explicitly drawn.

Connections are represented as thin gray lines, with arrows indicating the direction of information flow from input to output. The weights are explicitly labeled in green boxes along the connections, and while not visually shown, the caption indicates that biases (b₁…bₘ and c₁…c_q) are added after summation at each hidden and output node, respectively. The entire network is trained using backpropagation, where the weights and biases are adjusted based on known pairs of model parameters and corresponding synthesized observables, as described in the caption. The rightmost section, 'mapped observables', visually demonstrates the type of output the network produces — time-dependent physiological signals such as flux and voltage, which are likely derived from the network's output layer. The overall structure emphasizes a deterministic, forward-propagating mapping from abstract model parameters to quantifiable, time-resolved observables.
