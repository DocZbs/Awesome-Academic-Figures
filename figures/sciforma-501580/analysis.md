# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic overview of a reinforcement learning architecture incorporating a sparse Mixture-of-Experts (MoE) policy network. The global layout is divided into two main regions: on the left, a standard reinforcement learning loop comprising an Actor, Critic, and experience Buffer; on the right, a detailed depiction of the Sparse MoE module, which replaces the traditional policy network. These components are enclosed within a dashed blue boundary, indicating the full system. The Actor and Critic are represented as rectangular boxes connected by bidirectional arrows, signifying their interaction during training. The Buffer is depicted as a cylindrical shape, receiving state-action pairs (s,a) from the environment and feeding them back to both the Actor and Critic. A small image of a humanoid robot on a checkered floor is shown below the Buffer, labeled 's,a', representing the environment interaction. The Actor outputs action and expert selection signals ('a,e') to the Sparse MoE module.

Within the Sparse MoE region, outlined in pink, the core components include a Router (light blue rectangle), multiple Experts (pink rectangles labeled Expert 1, Expert 2, ..., Expert M), and an output action signal. The Router receives observations ('obs') as input and computes routing weights, visualized as a bar chart where only one expert (Expert M) is highlighted as 'activated' while others are marked 'not activated'. This indicates sparsity — only one expert is selected per input. The activated expert generates the action, which is passed back to the environment. Two matrices are shown to the right of the Sparse MoE block, illustrating interpretability: the top matrix, labeled 'interpretable router weights', displays a 4x3 grid with values such as -4.1, -9.7, -2.6, etc., color-coded in shades of red and blue, with dimensions labeled 'M' (number of experts) and 'obs dim' (observation dimension). The bottom matrix, labeled 'interpretable policy weights', shows a 4x2 grid with values like 4.0, 4.2, 3.0, etc., also color-coded, with dimensions labeled 'action dim' and 'obs dim'. These matrices suggest that the weights are structured and interpretable, allowing insight into how observations influence expert selection and action generation.

Connections are indicated by arrows: observations flow into the Router; the Router selects an expert via a downward arrow to the activated Expert M; the Expert M produces the action, which flows out of the Sparse MoE block. The Actor sends 'a,e' to the Sparse MoE, and the Critic receives feedback from the environment. The Buffer stores experiences and feeds them back into the learning loop. The figure emphasizes modularity, sparsity, and interpretability through visual cues like color coding, activation states, and explicit weight matrices.
