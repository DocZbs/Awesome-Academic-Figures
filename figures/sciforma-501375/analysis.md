# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ParMod: A Parallel and Modular Framework for Learning Non-Markovian Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12700

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the ParMod framework, which integrates task modularization via formal logic with reinforcement learning through phased agent-environment interaction. The global layout is divided into two main sections: on the left, a task decomposition module based on a Deterministic Finite Automaton (DFA) derived from Linear Temporal Logic (LTL_f), and on the right, a multi-phase reinforcement learning process involving agents interacting with an environment modeled as a Markov Decision Process (MDP). The DFA is enclosed in a dashed black box and consists of five states labeled q1 to q5, connected by directed edges forming a hierarchical structure. State q1 is highlighted with a red dotted border, q2 and q3 with green dotted borders, and q4 with a blue dotted border; q5 is uncolored with a double circle indicating a terminal state. An orange arrow labeled 'LTL_f' points from outside the DFA to q1, indicating the logic-to-automaton translation. A dashed gray arrow labeled 'task modularization' extends from the DFA to the right-hand side, connecting it to the learning phases.

On the right, three sequential phases—phase0, phase1, and phase2—are shown as vertically stacked blocks, each enclosed in a dashed box with distinct colors: red for phase0, green for phase1, and blue for phase2. Each phase contains a neural network represented as a multilayer perceptron with input, hidden, and output layers, enclosed in a solid blue rectangle. Below each network is an agent icon (a stylized human head with gears), and below that, a bidirectional orange arrow labeled 'interaction' connects the agent to the environment. Between phases, orange arrows labeled 'network update' point from one phase’s network to the next, indicating iterative model refinement. Additionally, dashed gray arrows from the DFA states q1, q2/q3, and q4 point to the respective phases, suggesting that each phase corresponds to a specific modularized subtask.

Beneath the phases, a large white rounded rectangle labeled 'environment (MDP⊗)' represents the extended environment. It contains several components: 'initial state buffers' shown as three colored folder icons (red, green, blue) corresponding to the phases; symbols for 'states' (S) and 'actions' (A); a reward shaping mechanism depicted as a dashed box with states q1, q2/q3, q4, and q5, where transitions are annotated with +r or -r rewards; a purple sine-wave-like curve labeled 'reward function'; and a small diagram of a transition distribution using circles, diamonds, squares, and triangles. An orange forked line connects the 'task modularization' label to the environment block, emphasizing the integration of modularized tasks into the learning setup. The overall workflow begins with LTL_f specification leading to DFA construction, which is then decomposed into subtasks mapped to sequential learning phases. In each phase, the agent interacts with the environment, updates its network, and receives shaped rewards guided by the modularized task structure, enabling efficient and structured reinforcement learning.
