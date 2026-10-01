# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Autonomous Alignment with Human Value on Altruism through Considerate Self-imagination and Theory of Mind — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00320

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overall framework for a reinforcement learning method inspired by the ancient Chinese story 'Sima Guang Smashes the Vat'. The layout is divided into three main vertical sections: the left section contains two reward calculation modules, the central section handles self-imagination and Q-value computation, and the right section depicts the real interaction process with the environment and policy optimization.

In the left section, two blue and green rectangular modules compute intrinsic motivation rewards. The top blue module, labeled 'Avoid Negative Side Effects', calculates R_nse using a formula involving the difference between Q-values with and without action, minimizing negative side effects. It visually contrasts two scenarios: one where an agent acts (hammer and vat) versus one where it does not. Below it, the green module, labeled 'Perspective Taking', computes R_emp based on self-experience, comparing Q-values from the agent’s own perspective versus others’ perspectives. This enables Theory of Mind (ToM) through self-experience. Both R_nse and R_emp feed into a summation node along with R_env (environmental reward), producing R_total.

The central section features two stacked modules. The upper gray module represents 'Q-value Functions based on Random Rewards', showing a matrix of Q-values indexed by states s_i and actions a_j, updated via Bellman equation using random rewards R_i(s_t, a_t). This module is multiplied by N, indicating multiple imaginary environments. Below it, the orange module labeled 'Self-imagination (Virtual Environments)' displays a grid-based visualization of multiple virtual environments, each with numerical values representing Q-values or state evaluations. These virtual environments are generated using random rewards and are used to compute both R_nse and R_emp.

On the right, the yellow-dashed region outlines the 'Real Interaction Process'. At the top is the 'Policy Net', depicted as a neural network with green, blue, and purple nodes, which is optimized using the total reward. The Policy Net outputs action a_t, which interacts with the 'Real Environment' — a grid world containing walls (gray), goals (green), vats (red), agents (black robot), and other agents (yellow robot). The transition T(s_t, a_t, s_{t+1}) from this real interaction feeds back into the self-imagination module as 'Self-experience'.

At the bottom, a purple rectangular box labeled 'Self-experience Replay Buffer' stores transitions T(s_t, a_t, s_{t+1}, R_total(s_t, a_t)) scaled by buffer size. A purple arrow labeled 'Random Sample' indicates that experiences are sampled randomly from this buffer to train the Policy Net. The entire framework integrates real-world interaction with virtual self-imagination to compute a comprehensive reward signal R_total, which guides policy optimization while promoting considerate behavior through ToM and avoidance of negative side effects.
