# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hindsight Planner: A Closed-Loop Few-Shot Planner for Embodied Instruction Following — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19562

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-part methodology for a hindsight planning framework in reinforcement learning, combining adaptive state estimation with language model-based reflection for improving policy decisions. On the left, the global layout shows a reasoning process enclosed in a dashed boundary, depicting a sequential decision-making loop. At each time step t, the system receives a partial observation y^t from the environment, which is fed into an Adaptation Module. This module estimates a latent variable and combines it with y^t to form a complete state x_t^i, represented as a central node in the diagram. From this state, multiple action branches diverge, symbolizing different possible rollouts. Two distinct actors are shown: one prompted by relabeled samples (red arrows), and another prompted by ground-truth (gt) samples (blue arrows). These actors generate actions a_t^i, leading to next states x_{t+1}^i. A purple dashed line highlights the best rollout, selected based on critic evaluation, which is then executed in the environment. The environment is depicted as a pink rectangle at the bottom right of the reasoning process, receiving the chosen action and producing the next observation. The legend clarifies the arrow colors: red for relabeled sample prompts, blue for gt sample prompts, and purple for the best rollout.

On the right side of the figure, a vertical stack of boxes demonstrates the relabeling process for the hindsight actor. The top box specifies the task: 'Move the salt bottle to the drawer'. Below it, two horizontal boxes show the ground truth rollout (green background) and the suboptimal rollout (yellow background), each listing sequences of actions such as '(Pick up, Fork)', '(Put, Fork, Sink)', etc. The next box contains the input prompt for the LLM, which includes a reflection instruction: 'You need to reflect what mistake you have made in above rollout and how to fix the mistake.' Following this, a purple box labeled 'The output of LLM' presents the LLM’s response, which includes a reflection on the error (e.g., not toggling off the faucet or placing the fork incorrectly) and a proposed correction. The final box lists the corrected actions: '(Toggle off, Faucet), (Pick up, Fork), (Put, Fork, SideTable)'. This entire sequence demonstrates how the LLM is used to generate reflective feedback and correct suboptimal trajectories, thereby enriching the training data for the hindsight actor. The figure thus integrates a dynamic state estimation module with a language-based reflection mechanism to enhance planning robustness.
