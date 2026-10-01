# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hierarchical Multi-Agent DRL Based Dynamic Cluster Reconfiguration for UAV Mobility Management — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16167

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the network architecture of the proposed Hierarchical Multi-Agent Proximal Policy Optimization (HMAPPPO) framework, designed for collaborative resource management in a wireless communication environment. The global layout is hierarchical and distributed, consisting of three main layers: an edge cloud at the top, a set of K distributed agents (labeled Agent-1 through Agent-K) in the middle, and an environment layer at the bottom containing multiple access users (AUs) represented by drones and buildings amidst trees.

At the top, the Edge Cloud is depicted as a blue cloud icon housing a database symbol, connected to a neural network representing the High-level Policy. This policy receives high-level observation (s̄_t) and reward (r̄_{t−1}) from the environment and outputs a high-level action (ā_t), labeled as 'Step 1: Clustering Decision'. This action is communicated via a dashed blue line to all low-level agents, indicating a broadcast or coordination signal.

In the middle layer, K agents are arranged horizontally, each enclosed in a distinct colored oval (blue for Agent-1, orange for Agent-2, yellow for Agent-3, green for Agent-K). Each agent contains a black antenna icon and a neural network diagram symbolizing the Low-level Policy. These agents collectively form the Low-level Policy layer. They receive low-level observations (S^i_t) and rewards (r^i_{t−1}) directly from the Environment below. Each agent then computes and executes low-level actions (a^i_t), labeled as 'Step 2: Power Allocation', which are sent back to the Environment.

The bottom layer represents the Environment, shown as a large gray oval containing icons of buildings, trees, and drones (representing AUs). This layer interacts bidirectionally with the agents: it provides observations and rewards to the agents and receives actions from them. The arrows indicate the flow of information and control: from the Environment to the agents (observations/rewards), from the agents to the Environment (actions), and from the Edge Cloud to the agents (high-level clustering decisions).

The visual modules are differentiated by color and shape: the Edge Cloud is a blue cloud with a database, the agents are colored ovals with antennas and neural networks, and the Environment is a gray oval with landscape icons. Text labels specify the data types (e.g., 'High-level observation', 'Low-level actions') and steps ('Step 1: Clustering Decision', 'Step 2: Power Allocation'). The connections are primarily solid black lines for direct data flow and a dashed blue line for the high-level clustering decision broadcast from the Edge Cloud to all agents.
