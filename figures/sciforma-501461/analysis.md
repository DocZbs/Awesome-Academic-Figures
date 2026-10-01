# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Survey on Recommendation Unlearning: Fundamentals, Taxonomy, Evaluation, and Open Questions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12836

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates various unlearning paradigms in the context of recommendation systems, divided into four main sections: Machine Unlearning, Recommendation Unlearning, Breakdown of Collaborative Effects, and Unlearning Granularity Types.

[1] Global Layout and Structure:
The figure is organized into four quadrants. The top-left quadrant presents 'Machine Unlearning' as a general concept, while the top-right focuses on 'Recommendation Unlearning' with specific emphasis on attribute-level unlearning. The bottom-left quadrant explains the collaborative effect breakdown and re-remembering process in recommendation data. The bottom-right quadrant categorizes unlearning by granularity: item-wise, user-wise, sample-wise, and attribute-wise.

[2] Visual Modules and Attributes:
In the Machine Unlearning section, Training Data is split into 'Unlearned Data (Forget Set)' shown as a red cylinder and 'Remaining Data (Retain Set)' as a blue cylinder. These feed into an 'Original Model' (gray neural network icon), which after training produces a 'Retrained Model' (blue neural network). This is equivalent to an 'Unlearned Model' (multicolored neural network), indicated by a green double-headed arrow.

In Recommendation Unlearning, Training Data is visualized as a user-item interaction matrix with red and blue cells representing the Forget Set and Retain Set respectively. The Original Model (gray neural network) undergoes training using only the Retain Set, producing a Retrained Model (blue neural network), again equivalent to an Unlearned Model (multicolored). Additionally, Attribute Unlearning is shown where the Original Model attempts to infer a Latent Attribute (grid with gray cells) but fails (indicated by a red 'x' and 'Cannot Infer'), resulting in an Unlearned Model that cannot reconstruct the latent attribute.

The Breakdown section uses avatars for users and icons for items (e.g., shopping cart, basket). The 'Collaborative Effect of Recommendation Data' shows users connected to items via black lines. After 'Breakdown', one user's connection is removed, and in 'Re-remember', dashed lines indicate partial recovery of connections.

The bottom-right section displays a user-item matrix with colored cells (green, red, blue) corresponding to Item-wise, User-wise, and Sample-wise Unlearning. A separate grid labeled 'Latent Attribute' (yellow column) represents Attribute-wise Unlearning. Below, a dashed box states 'Participate in Training of Recommendation Model' with a red 'x' indicating exclusion.

[3] Connections and Arrows:
Dashed arrows indicate training processes from data sets to models. Solid blue arrows denote retraining steps. Green double-headed arrows show equivalence between Retrained and Unlearned Models. In Recommendation Unlearning, a black arrow from the Original Model to the Latent Attribute is marked with a red 'x' and 'Cannot Infer'. In the Breakdown section, green arrows point from 'Collaborative Effect' to 'Breakdown' and then to 'Re-remember'. In the granularity section, arrows from the matrix and latent attribute point downward to the participation box, with a red 'x' indicating non-participation.
