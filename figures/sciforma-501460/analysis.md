# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Survey on Recommendation Unlearning: Fundamentals, Taxonomy, Evaluation, and Open Questions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12836

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive overview of machine unlearning, with a specific focus on recommendation unlearning, illustrating both general principles and domain-specific challenges. The layout is divided into four main sections: Machine Unlearning, Recommendation Unlearning, Collaborative Effect of Recommendation Data, and two technical variants—Reverse Unlearning and Active Unlearning.

In the top-left section labeled 'Machine Unlearning', training data is partitioned into an 'Unlearned Data (Forget Set)' represented by a red cylinder and a 'Remaining Data (Retain Set)' shown as a blue cylinder. These are enclosed within a dashed box labeled 'Training Data'. The 'Original Model' (a gray neural network icon) is trained on the full dataset. A retraining process using only the Retain Set produces a 'Retrained Model' (blue neural network), which is shown as equivalent to an 'Unlearned Model' via a bidirectional green arrow, indicating the goal of unlearning.

The top-right section, 'Recommendation Unlearning', extends this concept to user-item interaction data, depicted as a grid with colored cells representing interactions. The Forget Set (red cylinder) and Retain Set (blue cylinder) are again defined. The Original Model is trained on all data. Two types of unlearning are shown: 'Input Unlearning' leads to a Retrained Model equivalent to the Unlearned Model, while 'Attribute Unlearning' targets latent attributes not involved in training. An arrow from the Original Model to a grid labeled 'Latent Attribute (not participate in training)' is marked with a sad face and 'Inferring', while the Unlearned Model's arrow to the same grid is crossed out with a smiley face and 'Cannot Infer', emphasizing the success of attribute unlearning.

The bottom-left section illustrates the 'Collaborative Effect of Recommendation Data' through a bipartite graph of users (colored circles) and items (icons like shopping bags). Solid black lines indicate original interactions. After 'Breakdown' (removing one user's data), the graph shows broken connections. The 'Re-remember' step demonstrates how the model may inadvertently re-learn the forgotten user’s preferences due to collaborative signals from other users, indicated by dotted blue lines reconnecting the user to items.

The bottom-right section presents two technical approaches: 'Reverse Unlearning' uses a decoder D to map from θ₀ (original parameters) to θᵤ (unlearned parameters), with a feedback loop. 'Active Unlearning' adds a filter D_f between D and θᵤ, suggesting a more controlled unlearning process.

The figure caption notes that black lines represent original interactions and blue lines represent unlearned interactions, highlighting the visual distinction in the collaborative effect diagrams.
