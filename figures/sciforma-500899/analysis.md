# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Fairness Shields: Safeguarding against Biased Decision Makers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11994

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an operational diagram of fairness shields, illustrating a two-stage decision-making process designed to promote fairness in automated systems. The global layout is horizontal and linear, with components arranged from left to right: input data, a sub-symbolic classifier, a fairness shield module, and the final output decision. At the bottom, a row of stylized human icons represents diverse individuals, varying in shading from light gray to black, symbolizing different demographic groups. One icon is outlined in a box, indicating a selected or focused individual whose sensitive feature—gender—is explicitly labeled and fed into the system.

The central components are two rectangular modules. On the left, a gray rectangle labeled 'Sub-symbolic classifier' receives 'input features' such as gender, age, etc., from the human icons below. This classifier outputs a 'recommended decision' (accept?/reject?) to the next module. On the right, a yellow rectangle labeled 'Fairness shield' receives this recommended decision along with an additional input: 'intervention cost', which flows from the classifier to the shield. The fairness shield also receives the 'sensitive feature' (specifically, gender) directly from the highlighted individual. Based on these inputs, the fairness shield computes and outputs the 'final decision' (accept/reject), which is directed back toward the user or system.

Visual attributes include distinct colors: the classifier is gray, the fairness shield is yellow, emphasizing its role as a corrective or protective layer. All text labels are in black sans-serif font, clearly positioned near arrows or modules. Arrows indicate the direction of information flow: from input features to the classifier, from the classifier to the fairness shield (both recommended decision and intervention cost), and from the fairness shield to the final decision. A vertical arrow connects the sensitive feature to the fairness shield, highlighting its direct influence on fairness assessment. The diagram uses simple, clean lines and minimalistic shapes to focus on the logical flow rather than aesthetic detail.

The workflow follows a clear sequence: raw input features are processed by the sub-symbolic classifier to generate a preliminary recommendation. This recommendation, along with an associated intervention cost (likely representing the cost of modifying the decision), is sent to the fairness shield. Simultaneously, the sensitive attribute (gender) is provided to the shield to enable fairness-aware evaluation. The fairness shield then adjusts the recommendation if necessary, producing a final decision that aims to balance accuracy and fairness. The caption at the bottom, 'Figure 1: The operational diagram of fairness shields,' confirms the purpose of the diagram as a schematic representation of this fairness-enhancing mechanism.
