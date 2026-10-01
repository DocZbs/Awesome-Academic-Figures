# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep Reinforcement Learning for Job Scheduling and Resource Management in Cloud Computing: An Algorithm-Level Review — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01007

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents six distinct deep reinforcement learning (DRL) architectures arranged in a 2x3 grid, each illustrating a different approach to policy or value learning, with clear visual separation by dashed lines. The top row contains value-based DRL, policy-based DRL, and quantum RL; the bottom row shows actor-critic, cooperative MADRL, and competitive MADRL.

[1] Global Layout and Structure: The figure is divided into six panels labeled (a) through (f), each depicting a specific DRL framework. Each panel includes an 'Input' from an 'Environment' represented as a cloud icon, a central processing module (typically a deep neural network), and an 'Output'. The panels are organized to show progression from single-agent to multi-agent systems, and from classical to quantum-inspired methods. The bottom two panels (e) and (f) further distinguish between cooperative and competitive multi-agent settings, both featuring centralized training and decentralized execution.

[2] Visual Modules and Attributes: In all panels, the 'Environment' is shown as a light blue cloud emitting state vectors (S_t). The 'Deep Neural Network' is depicted as a multilayered feedforward network with yellow input neurons, blue hidden neurons, and green output neurons, connected by black lines. Outputs vary: (a) produces Q-values for action a_i and a^A; (b) outputs a policy π_θ(a|s_t); (c) uses a quantum circuit with VQC (Variational Quantum Circuit) blocks, orange and blue boxes representing qubit operations, and a final measurement step yielding Q-values; (d) has two networks: Actor outputs π_θ(a|s_t), Critic outputs V_φ(s_t); (e) and (f) show multiple actors (Actor 1 to N) and critics (Critic 1 to N), with actors receiving state-action pairs (s_i, a_i) and critics receiving rewards r_i. The critic networks in (e) and (f) are shown as yellow boxes with bidirectional connections to actors, indicating centralized training. The loss functions are explicitly written below each network: (a) uses mean squared error for Q-learning; (b) and (d) use expected return J(θ) = E_{π_θ}[∑γ^t r_t]; (e) and (f) define J_i(π) as the expected discounted reward for agent i.

[3] Connections and Arrows: In (a), the environment feeds S_t into the DNN, which outputs Q-values; the loss function is based on the difference between target y_t and predicted Q-value. In (b), the DNN takes S_t and outputs π_θ(a|s_t), with loss based on cumulative reward. In (c), S_t enters a quantum circuit composed of VQC blocks and measurement gates, producing Q-values. In (d), a feedback loop connects the Actor’s output policy π_θ to the Critic’s input, and the Critic’s value estimate V_φ(s_t) is used to update the Actor via a loss function involving immediate reward and next-state value. In (e) and (f), each actor receives its own state-action pair and outputs an action; all actors’ states and actions are fed to a shared set of critics during centralized training, while during decentralized execution, each agent acts independently. The critics compute individual losses J_i(π) for each agent, with (f) showing separate reward functions R_i for competitive scenarios. Blue curved arrows in (d) indicate the policy gradient update cycle between Actor and Critic. In (e) and (f), yellow lines represent information flow from actors to critics during training.
