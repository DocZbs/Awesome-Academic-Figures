# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RAT: Adversarial Attacks on Deep Reinforcement Agents for Targeted Behaviors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10713

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a reinforcement learning framework that integrates preference-based reinforcement learning (PbRL) with a bi-level optimization mechanism. The global layout is divided into two main sections: the left side illustrates the PbRL training loop involving human feedback and policy learning, while the right side details the bi-level optimization process for adversarial policy alignment.

On the left, a human user provides preference feedback, which is used to train a reward model (represented as a light pink rounded rectangle). This reward model receives state-action-state triplets (s, a, s') from an environment (depicted as a globe icon) and outputs a learned reward function r̂_ψ(s,a). The resulting tuples (s, a, s', r̂_ψ(s,a)) are stored in a replay buffer (light purple rounded rectangle). From this buffer, a behavior policy (light blue rounded rectangle) is trained to interact with the environment, completing a feedback loop indicated by a dashed circular arrow.

The right side of the diagram is enclosed in a red dashed box labeled 'bi-level optimization'. Inside, two policies are defined: π_θ(a|s), representing the intention policy, and π_να(a|s), representing the adversary policy, both shown as gray boxes within a larger light blue container. These policies feed into two loss functions: the 'inner loss L' (light green box) and the 'outer loss J_π' (another light green box). The inner loss is computed using both policies and is connected to a yellow box labeled h_ω(s), which represents a weighting function. The inner level optimizes α (the adversary’s parameters) to align π_να with π_θ, as indicated by a blue curved arrow from π_θ to π_να and an orange arrow from π_να to the inner loss. The outer level optimizes ω (the weighting function’s parameters) to minimize the outer loss J_π, which is influenced by h_ω(s) and the inner loss. Red arrows indicate the optimization direction: one from the outer loss to h_ω(s) and another from the inner loss back to the adversary policy, forming a nested optimization structure.

Connections between components are represented by solid black or colored arrows indicating data flow or optimization gradients. Dashed arrows denote feedback loops. Text labels specify the roles of each component, including mathematical notations like π_θ(a|s), π_να(a|s), h_ω(s), and losses L and J_π, consistent with the figure caption describing the dual optimization objectives.
