# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Stabilizing Reinforcement Learning in Differentiable Multiphysics Simulation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12089

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the computational graph of a reinforcement learning algorithm, denoted as \ouralgo, which operates over a sequence of time steps from t to t+H. The global layout consists of three vertically aligned, identical processing blocks representing consecutive time steps: t, t+1, and t+H, arranged horizontally from left to right. Each block is enclosed in a light yellow rounded rectangle, indicating a modular, time-unrolled structure. At the bottom of the diagram, a sequence of green circular nodes labeled 'Diff. Sim.' (short for Differentiable Simulator) generates state-action pairs, feeding into each time step. These simulator outputs produce state s_t (green square) and reward r_t (green circle) at each time step, which are then fed into corresponding encoders.

Within each time step block, there are two parallel processing streams: one for the Actor and one for the Critic. The Actor stream begins with a green square node labeled s_t, which feeds into a trapezoidal 'Actor Encoder' (light blue). This encoder outputs a blue grid-like feature representation z_t^{(π)}. This feature is passed to a rectangular 'Actor MLP' (light blue), which outputs mean μ_t^{(π)} and standard deviation σ_t^{(π)} (both represented as horizontal bars). These parameters define a Gaussian policy distribution, shown as a blue bell-shaped curve, from which an action a_t is sampled (blue circle). A black arrow from a_t loops back to the 'H_π[·]' node (blue circle), indicating the policy's application or evaluation.

The Critic stream, running in parallel, takes both s_t and r_t as inputs. s_t feeds into a trapezoidal 'Critic Encoder' (light red), producing a red grid-like feature z_t^{(V)}. This is passed to a rectangular 'Critic MLP' (light red), which outputs the value function v_t (red circle). An orange arrow connects v_t to the 'H_π[·]' node, suggesting the value is used in policy evaluation or gradient computation.

Connections between time steps are shown via thick black arrows: the action a_t from time t is passed to the next time step’s differentiable simulator, which then produces s_{t+1} and r_{t+1}. This creates a sequential, unrolled architecture. The orange lines indicate a shared or recurrent connection from the Critic’s output v_t to the next time step’s H_π[·], possibly for advantage estimation or temporal difference learning.

At the final time step t+H, the value v_{t+H} is connected via an orange arrow to a diamond-shaped node labeled J(π), which represents the policy objective or loss function. The caption notes that J(π) only updates the actor, even though gradients may propagate through the critic. The entire structure emphasizes a model-based, differentiable simulation framework where the policy and value functions are learned through a sequence of simulated interactions, with the critic providing value estimates to guide the actor’s optimization.
