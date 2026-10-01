# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

OpenRFT: Adapting Reasoning Foundation Model for Domain-specific Tasks with Reinforcement Fine-Tuning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16849

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the OpenRFT framework, a methodological pipeline for training a reasoning policy model through a combination of data augmentation, reasoning process synthesis, supervised fine-tuning, and reinforcement learning. The global layout is structured as a flowchart progressing from left to right and top to bottom, with distinct stages labeled numerically (e.g., 2.1, 2.2.1, 2.3.1) indicating sequential steps in the methodology.

At the top-left, a cylindrical database labeled '{(Qi, Ai)}' represents domain-specific samples. This feeds into a black rectangular module labeled '2.1 Data Augmentation', which outputs an augmented dataset '{(Qi, Qi', Ai)}'. A red arrow from this module points to the 'SFT Policy Model π_SFT', indicating its role in few-shot in-context learning (ICL), labeled '2.3.1 Few-shot ICL'.

Parallel to this, a gray rounded rectangle labeled 'Teacher Reasoning Foundation Model (e.g., o1)' feeds into a blue rectangular module labeled '2.2.1 Reasoning Process Synthesis'. This module generates a new dataset '{(Qi, ..., Si^j, ..., Ai)}' with reasoning steps, represented by another cylindrical database. This synthesized data flows into a blue rectangular module labeled '2.2.2 Supervised Fine-Tuning', which takes as input a 'Reasoning Foundation Model π_ori (e.g., o1-mini)' and produces the SFT Policy Model π_SFT.

The SFT Policy Model π_SFT then generates a sequence of reasoning states S_i^1, S_i^2, ..., S_i^m, depicted as a chain of circular nodes. These states are evaluated by a gray rounded rectangle labeled 'Process Reward Model ρ_PRM', which assigns process rewards pr_i^1, pr_i^2, ..., pr_i^m. These rewards are combined via a function f with an outcome reward or_i to compute the total reward R_i, shown as 'f(pr_i^1, pr_i^2, ..., pr_i^m) + or_i = R_i'. This reward signal feeds back into the SFT Policy Model via a red arrow labeled '2.3.2 Reinforcement Learning', forming a feedback loop for iterative improvement.

Additionally, the augmented data '{(Qi, Qi', Ai)}' also feeds directly into the SFT Policy Model, reinforcing the few-shot ICL component. The outcome A_i' from the policy model contributes to the outcome reward or_i. The visual modules use distinct shapes and colors: black rectangles for data augmentation, blue rectangles for synthesis and fine-tuning, gray rounded rectangles for foundation models and reward models, and cylinders for datasets. Arrows indicate data flow and learning signals, with red arrows specifically denoting reinforcement learning components and feedback loops.
