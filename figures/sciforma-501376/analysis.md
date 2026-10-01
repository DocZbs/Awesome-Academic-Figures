# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ParMod: A Parallel and Modular Framework for Learning Non-Markovian Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12700

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the three-phase training process of ParMod, a modular reinforcement learning framework, showing the progression from phase0 to phase2 with associated reward shaping, loss calculation, and model updates. The global layout is divided into three vertical sections, each enclosed by a dashed border: phase0 (red), phase1 (green), and phase2 (blue). Each phase contains two neural network modules arranged vertically, representing different components of the model. The top module in each phase is labeled with θ (theta) and represents a policy or action-value function, while the bottom module is labeled with Ω (omega) and represents a value or auxiliary function. These modules are fully connected feedforward networks with multiple hidden layers, depicted as nodes connected by black lines; input nodes are blue circles, output nodes are green (for θ) or purple (for Ω), and hidden nodes are white. 

In phase0, the top network is denoted θ_{θ₀}(a|s⊗), and the bottom network is Ω_{ω₀}(s⊗,a). Below this pair, a rank annotation states 'rank(q1) = 0'. An arrow labeled 'reward shaping +r' points from phase0 to phase1, indicating a positive reward signal applied during transition. A yellow arrow labeled 'loss calculation' originates from the Ω_{ω₀} output and points to the Ω_{ω₁} input in phase1, signifying that the loss from phase0 influences the training of the next phase's Ω module.

Phase1 contains the top network θ_{θ₁}(a|s⊗) and bottom network Ω_{ω₁}(s⊗,a). Below these, the rank annotation reads 'rank(q2) = rank(q3) = 1', indicating that both q2 and q3 have rank 1. Two bidirectional arrows labeled 'reward shaping +r' and '-r' connect phase1 to phase2, suggesting that reward shaping can be applied in both directions between these phases. Another yellow 'loss calculation' arrow connects the Ω_{ω₁} output to the Ω_{ω₂} input in phase2, continuing the loss propagation across phases.

Phase2 includes the top network θ_{θ₂}(a|s⊗) and bottom network Ω_{ω₂}(s⊗,a), with the rank annotation 'rank(q4) = 2' below. The entire structure emphasizes a sequential, iterative training process where each phase builds upon the previous one through reward shaping and loss backpropagation, with the Ω modules receiving loss signals from prior phases to guide their optimization. The visual flow is left-to-right, with feedback loops indicated by the bidirectional reward shaping arrows between phase1 and phase2, and forward propagation of loss signals via yellow arrows. The figure captures the modular, phased nature of ParMod’s training, highlighting how reward shaping and loss computation facilitate progressive learning across phases.
