# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RAT: Adversarial Attacks on Deep Reinforcement Agents for Targeted Behaviors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10713

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of Preference-based Reinforcement Learning (PbRL), a framework where an agent learns from human preferences to optimize its behavior. The global layout is a feedback loop composed of four main components: a world environment represented by a stylized globe, a reward model denoted as \(\widehat{r}_\psi\), a replay buffer, and a policy \(\pi_\theta(a|s)\), all interconnected through directed arrows indicating data flow. On the right side, a human user, depicted as a simple icon wearing a graduation cap, provides preference judgments via a speech bubble containing two rows of robot locomotion sequences. The top row shows three unpreferred gaits marked with a red 'X', while the bottom row displays three preferred gaits marked with a blue checkmark. This human feedback is labeled 'learning from human preferences' and feeds into the reward model \(\widehat{r}_\psi\), which is shown as a light peach-colored rounded rectangle. The reward model takes input from the environment (globe) and uses the human preferences to update its internal parameters, producing reward estimates. These estimated rewards are then stored in a green cylindrical replay buffer, which acts as a memory for past experiences. From the replay buffer, the policy \(\pi_\theta(a|s)\), shown as a light yellow rounded rectangle, is updated to improve its action selection given states. The policy interacts with the environment, generating new state-action transitions that are fed back into the replay buffer, closing the loop. Additionally, a curved double-headed arrow between the environment and the policy indicates the ongoing interaction and learning process. The entire system emphasizes iterative improvement: human preferences refine the reward model, which in turn guides policy optimization through experience replay, leading to better alignment with human intentions over time.
