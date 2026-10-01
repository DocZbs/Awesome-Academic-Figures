# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InfAlign: Inference-aware language model alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19792

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative workflow diagram illustrating the difference between Standard RLHF and the proposed InfAlign method, designed to address the train/test mismatch in reinforcement learning from human feedback (RLHF) when using inference-time procedures like Best-of-N. The global layout is divided into two horizontal sections by a dashed red line: the upper section represents 'Standard RLHF' and the lower section represents 'InfAlign'. Both workflows start from an initial policy π₀.

In the Standard RLHF path (top), π₀ is fed into a yellow rectangular block labeled 'RLHF', which takes a reward signal r as input. The output of this block is a policy π, which is then passed through a vertical purple rectangle labeled 'T : Inference-time procedure' to produce PT(π), representing the policy after applying the inference-time transformation. This path is labeled 'Standard RLHF' on the top right.

In the InfAlign path (bottom), the same initial policy π₀ is used, but instead of directly feeding into RLHF, it first goes to a light blue rectangular box with a red border, labeled 'Inference-aware reward calibration & transformation'. This module also receives the original reward r as input. The output of this module is a transformed reward, denoted as r̃ (r tilde). This transformed reward is then fed into a second yellow 'RLHF' block, producing an optimized policy π*. This policy π* is then passed through the same inference-time procedure T, resulting in PT(π*). This entire lower path is labeled 'InfAlign' on the right side.

Connections and arrows show the data flow: from π₀ to both RLHF blocks; from r to both RLHF blocks (with one arrow going directly to the top RLHF and another to the blue transformation box); from the top RLHF to π, then to PT(π); from the blue box to r̃, then to the bottom RLHF, then to π*, then to PT(π*). Additionally, there is a feedback loop from the top RLHF output π back to the blue transformation box, indicating that the policy π influences the reward transformation process. The figure caption explains that standard RLHF suffers from a mismatch between the train-time policy π and the inference-time policy PT(π), while InfAlign bridges this gap by optimizing a policy-transformed reward r̃, yielding a policy π* that is specifically optimized for inference under PT(π*).
