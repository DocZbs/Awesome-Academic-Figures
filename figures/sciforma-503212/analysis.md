# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLIP-RLDrive: Human-Aligned Autonomous Driving via CLIP-Based Reward Shaping in Reinforcement Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16201

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a block diagram of a reinforcement learning framework based on Proximal Policy Optimization (PPO), designed for training an agent in the Highway-env environment. The global layout is structured as a feedback loop where policy updates are driven by gradient computation from a composite loss function, which is then used to update the model parameters via stochastic gradient descent (SGD). The diagram flows from left to right and includes feedback connections from the environment and memory to the central PPO module.

At the center of the diagram is a large gray rectangular block labeled 'PPO', representing the core algorithm. This block receives inputs: the current state s_t from the environment, and outputs the action a_t. The PPO block also receives a mini-batch of data from a blue dashed box labeled 'TrajectoryMemory (s_t, a_t, r_t, s_{t+1})', which stores past experiences. The mini-batch is shown as a salmon-colored rectangle feeding into the PPO block.

To the right, the 'Highway-env' environment is depicted as a gray square containing a simplified highway scene with lanes and vehicles, indicating the simulation environment where the agent operates. The environment receives the action a_t from PPO and returns the next state s_{t+1} and reward R, which are fed back into the TrajectoryMemory. A loop labeled 'for episode → n' indicates that this process repeats over multiple episodes.

On the left side, the loss components are computed. The main loss function L^{CLIP+VF+S}(θ) is shown as a large white rectangle at the top-left. It aggregates three sub-losses: L^{CLIP}(θ), L^{VF}(θ), and S[π_θ](s_t). These are represented as smaller white rectangles connected to the main loss block. The L^{CLIP}(θ) loss receives inputs π_θ(a_t|s_t) and π_{θ_old}(a_t|s_t), which represent the current and old policy probabilities, respectively. The L^{VF}(θ) loss receives V_θ(s_t) from the value function and compares it to V_target, the target value. The S[π_θ](s_t) term represents the entropy regularization, which receives π_θ(a_t|s_t) as input.

Additionally, the advantage estimate Â_t is computed using π_θ(a_t|s_t) and r_t(θ), and is fed into the L^{CLIP}(θ) component. The state s_t is also directly passed to the value function V_θ(s_t) and to the entropy term S[π_θ](s_t).

A top-level arrow points from the composite loss L^{CLIP+VF+S}(θ) to the PPO block, labeled 'Update with the gradient ∇L^{CLIP+VF+S}(θ) by SGD', indicating the parameter update mechanism. The entire system forms a closed-loop training pipeline where experience is collected, stored, sampled in mini-batches, and used to compute gradients for updating the policy and value functions within the PPO framework.
