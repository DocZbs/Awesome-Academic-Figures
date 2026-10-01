# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Survey on Recommendation Unlearning: Fundamentals, Taxonomy, Evaluation, and Open Questions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12836

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison between two unlearning paradigms: Machine Unlearning and Recommendation Unlearning. The layout is divided into two main vertical sections by a vertical black line, each illustrating a distinct unlearning framework with its own data flow, model transformations, and evaluation criteria.

In the left section labeled 'Machine Unlearning', the global structure begins with a dashed rectangular box containing two data components: 'Unlearned Data (Forget Set)' represented by a red cylinder, and 'Remaining Data (Retain Set)' represented by a blue cylinder. These are part of the broader 'Training Data' indicated above. A dashed arrow labeled 'Training' leads from the Retain Set to an 'Original Model', depicted as a gray neural network icon. From this Original Model, a solid black arrow labeled 'Machine Unlearning' points downward to an 'Unlearned Model', shown as a multicolored neural network icon with nodes in red, yellow, and cyan. Simultaneously, a blue arrow labeled 'Retraining' connects the Retain Set to a 'Retrained Model', also a multicolored neural network. A green double-headed arrow labeled 'Equivalent to' links the Retrained Model and the Unlearned Model, indicating they should produce identical outputs. This entire process emphasizes removing the influence of the Forget Set while preserving the model's performance on the Retain Set.

The right section, titled 'Recommendation Unlearning', extends the concept to a recommendation system context. It starts with 'Training Data (e.g., User-Item Interaction)', visualized as a grid with blue and red cells representing interactions. This data is partitioned into a 'Forget Set' (red cylinder) and a 'Retain Set' (blue cylinder), enclosed within a dashed box. Training proceeds from the Retain Set to an 'Original Model' (gray neural network). From here, two unlearning paths diverge. First, a solid black arrow labeled 'Input Unlearning' leads to an 'Unlearned Model' (multicolored neural network), which is again equivalent via a green double-headed arrow to a 'Retrained Model' derived from retraining on the Retain Set. Second, a diagonal black arrow labeled 'Attribute Unlearning' points to another 'Unlearned Model'. This path is evaluated against a 'Latent Attribute (not participate in training)', shown as a gray grid. An arrow from the Original Model to this grid is marked with a sad face and labeled 'Inferring', indicating the model can infer the attribute. In contrast, the arrow from the Attribute Unlearned Model to the same grid is crossed out with an 'x' and labeled 'Cannot Infer', accompanied by a happy face, signifying successful attribute removal. The visual modules consistently use cylinders for data sets (red for forget, blue for retain), neural network icons for models (gray for original, multicolored for unlearned/retrained), and arrows to denote processes like training, retraining, and unlearning. Text labels are clear and positioned near relevant components, with key terms such as 'Equivalent to' and 'Cannot Infer' emphasizing the evaluation criteria. The figure effectively contrasts general machine unlearning with the more nuanced recommendation unlearning, which includes both input and attribute-specific unlearning objectives.
