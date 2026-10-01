# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SurvAttack: Black-Box Attack On Survival Models through Ontology-Informed EHR Perturbation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18706

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Ontology-informed Synonym Code Selection (SCS) framework, which integrates hierarchical medical ontology with co-occurrence data to select clinically relevant synonym codes from a patient’s EHR history. The global layout is divided into two main components: a hierarchical medical ontology on the left and a co-occurrence processing module on the right. The ontology is structured as a four-level tree, with Level 1 at the top and Level 4 at the bottom, each level demarcated by horizontal dashed lines. Nodes in the tree are represented as circles, with color coding indicating different levels or categories: Level 1 nodes are dark gray, Level 2 are light blue, Level 3 are white and light green, and Level 4 includes multiple colors such as teal, purple, yellow, and light blue. Black arrows indicate parent-child relationships, flowing downward from higher to lower levels.

In Level 4, specific nodes labeled s_i_a, s_i_b, s_i_c, and c_i are highlighted. These represent a set of candidate codes, where s_i_a, s_i_b, s_i_c are solid light blue circles, and c_i is a dashed blue circle, suggesting it may be a target or inferred code. A green dashed arrow points from a shared parent node in Level 3 (a light green circle) to the co-occurrence module, labeled 'Shared parent', indicating that these child nodes share a common ancestor in the ontology. This shared parent relationship is used to group related codes for co-occurrence analysis.

On the right side, the 'Cooccurrence' module is depicted as a gray rectangle containing three vertical positions labeled P_a, P_b, P_c, representing potential co-occurring code positions. Green solid arrows connect the Level 4 nodes s_i_a, s_i_b, s_i_c to their respective positions P_a, P_b, P_c within the co-occurrence module, indicating that these codes are being evaluated for co-occurrence patterns. Additionally, a blue arrow connects the dashed node c_i to the co-occurrence module, suggesting that this code is also being considered in the context of co-occurrence. Above the co-occurrence module, a mathematical expression S_i = {s_i_a} is shown, with an upward arrow labeled 'P > p', implying a selection criterion based on probability or confidence threshold.

The overall workflow begins with identifying a set of candidate codes (s_i_a, s_i_b, s_i_c, c_i) from the ontology hierarchy, particularly those sharing a common parent. These candidates are then fed into the co-occurrence module, where their historical co-occurrence patterns with other codes are analyzed. The selection process leverages both the structural relationships in the ontology and the statistical evidence from real-world EHR data, ensuring that the chosen synonym codes are not only semantically related but also clinically plausible based on observed co-occurrence frequencies.
