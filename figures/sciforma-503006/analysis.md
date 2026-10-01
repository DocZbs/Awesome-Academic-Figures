# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding Individual Agent Importance in Multi-Agent System via Counterfactual Reasoning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15619

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parts: (a) the workflow of EMAI at each time-step t, and (b) the architecture and training mechanism of EMAI. In part (a), the global layout shows an environment (env) providing observations o₁ through oₙ and rewards r + rᵐ to both Target Agents (π) and the EMAI module. The Target Agents generate actions a₁ through aₙ, which are then processed by a masking operation. The EMAI module outputs masking probabilities, which are used to randomize the actions into a₁ᵐ through aₙᵐ. These masked actions are combined with the original actions via a circular node labeled 'masking' to produce the final action output. Additionally, EMAI computes Agent Importance, represented by icons with varying border colors (red and yellow), indicating the relative significance of each agent based on the masking probability (lower probability implies higher importance). The entire process feeds back into the environment via the 'action' arrow.

In part (b), the architecture of EMAI is shown within a large dashed blue box labeled 'EMAI'. The input consists of observations o₁ through oₙ and rewards r + rᵐ. These inputs feed into the Masking Agents (πθ), depicted as a yellow rounded rectangle containing multiple red icon nodes (each with a crossed-out eye symbol) and ellipses indicating multiple agents. The Masking Agents output masked actions a₁ᵐ through aₙᵐ and individual Q-values Q₁(o₁,a₁ᵐ) through Qₙ(oₙ,aₙᵐ). These are passed to the Central Critic Network (Cω), another yellow rounded rectangle, which computes the total value Q_tot. The Q_tot is used to compute a Loss, which is also influenced by the reward J(π) obtained from a Monte Carlo estimation. The Loss is then used to update both the Masking Agents and the Central Critic Network, as indicated by dashed orange arrows labeled 'update'. The connections are primarily solid blue arrows, with the update paths shown as dashed orange lines. The overall structure emphasizes a reinforcement learning framework where the masking agents learn to randomize actions while the central critic evaluates the total value, and the loss function drives the optimization to minimize reward differences before and after randomization, promoting more randomization for less important agents.
