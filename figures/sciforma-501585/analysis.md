# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic overview of a reinforcement learning architecture incorporating a Sparse Mixture-of-Experts (MoE) module within an actor-critic framework. The global layout is divided into two main regions: on the left, the standard actor-critic components including the Actor, Critic, and experience Buffer, along with an environment visualization; on the right, the Sparse MoE subsystem enclosed in a pink rounded rectangle. A thin blue outline frames the entire diagram.

On the left side, the Actor and Critic are represented as rectangular boxes connected by bidirectional arrows, indicating their interaction during training. Below them is a cylindrical Buffer symbolizing the replay memory, which receives state-action pairs (s,a) from the environment and sends action-experience tuples (a,e) back to the Actor. An inset image at the bottom-left shows a simulated quadruped robot on a checkered floor, representing the environment where actions are executed.

The right side features the Sparse MoE module. At the top, an observation 'obs' (in red text) feeds into a light-blue rectangular 'Router'. The Router outputs a bar chart with three bars of varying heights (pink shades), representing routing scores or logits for different experts. These scores determine which expert is activated. Below the Router, multiple experts are shown as pink rectangles labeled 'Expert 1', 'Expert 2', ..., 'Expert M'. Expert M is highlighted with a darker pink fill and bold text, indicating it is the selected expert. Arrows point from the Router’s output to Expert M, labeled 'activated', while arrows from other experts (e.g., Expert 1) are labeled 'not activated'. The selected expert produces an 'action' (in red text), which flows downward out of the MoE module.

Connections include: the Actor sends the action to the environment and also feeds into the Sparse MoE module via a thick pink line, suggesting the MoE is part of the Actor’s policy network. The Critic receives inputs from both the Actor and the Buffer. The Buffer stores experiences from the environment and provides data for training.

Two small tables are positioned to the far right, illustrating numerical examples. The top table contains values like -4.1, -9.7, -2.6, etc., with alternating pink and light-blue cells, likely representing routing scores or logits. The bottom table shows values such as 4.0, 4.2, 3.0, -2.4, etc., possibly corresponding to expert outputs or activations. These tables visually support the routing mechanism within the Sparse MoE.

Overall, the diagram illustrates how the Sparse MoE dynamically selects one expert among many based on observations, enabling efficient and scalable policy representation within a reinforcement learning agent.
