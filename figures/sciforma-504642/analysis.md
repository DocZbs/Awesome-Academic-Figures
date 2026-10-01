# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Diverse and Effective Red Teaming with Auto-generated Rewards and Multi-step Reinforcement Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18693

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a system overview of a reinforcement learning-based attack framework targeting a large language model (LLM). The global layout is a directed workflow diagram arranged horizontally from left to right, with components connected by arrows indicating data flow and feedback loops. On the far left, an 'attack goal generator' (a light blue rounded rectangle with diagonal hatching, labeled as a frozen model) produces an attack goal denoted by 'g' (a light green circle). This goal 'g' is fed into the central component, the 'attacker' (a light yellow rounded rectangle with diagonal hatching, labeled as a trained model), which generates an attack prompt 'p' (another light green circle). The prompt 'p' is then sent to the 'target LLM' (a light blue rounded rectangle, also a frozen model), which produces an output 'y' (light green circle). This output 'y' is passed to the 'reward model' (a light blue rounded rectangle, frozen model), which computes a reward 'r' (light green circle) based on how well the attack succeeded. The reward 'r' is fed back to the attacker via a dashed arrow, indicating a reinforcement learning update signal for the same goal. Additionally, the attacker receives historical context: past prompts 'p' for the same goal 'g' are fed back via a dashed arrow labeled 'past prompts for same goal', enabling multi-turn rollouts. Similarly, rewards 'r' for the same goal are also fed back to the attacker via another dashed arrow labeled 'rewards for same goal'. A legend on the right side clarifies visual attributes: light yellow boxes represent trained models, light blue boxes represent frozen models, solid arrows denote inputs/outputs, and dashed arrows denote multi-turn rollouts. The entire system operates in a loop where the attacker learns to generate more effective prompts by optimizing for higher rewards from the reward model, using feedback from previous interactions with the same goal.
