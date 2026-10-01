# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Survey on Recommendation Unlearning: Fundamentals, Taxonomy, Evaluation, and Open Questions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12836

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive taxonomy of recommendation unlearning methods, structured hierarchically on the left, alongside illustrative diagrams of specific unlearning approaches on the right. The global layout is divided into two main sections: a hierarchical classification tree on the left and several schematic diagrams on the right illustrating different unlearning mechanisms.

On the left, the taxonomy begins with a root node labeled 'Recommendation Unlearning Taxonomy' in a black-bordered rectangle. This splits into two primary branches: 'Input Unlearning' and 'Attribute Unlearning', both represented in light blue rectangles. 'Input Unlearning' further branches into three categories: 'Model-agnostic', 'Model-specific', and 'Scenario-specific', each shown in yellowish-beige rectangles. These categories then branch into specific methods in gray rectangles: 'Exact Unlearning [x, x, x]', 'Approximate Unlearning [x, x, x, x]', 'Bi-linear Recommendation [x]', 'KNN-based Recommendation [x]', 'Federated Recommendation [x]', 'Sequential Recommendation [x]', 'Session-based Recommendation [x]', and 'LLM-based Recommendation [x]'. 'Attribute Unlearning' branches into 'In-training [x]' and 'Post-training [x]', which further connect to the same scenario-specific methods listed under 'Scenario-specific'.

On the right side, four distinct diagrams illustrate different unlearning strategies. The top-right diagram shows a multi-layered model with data inputs D1, D2, D3 (pink rectangles) feeding into parameters θ1, θ2, θ3 (yellow rectangles), which converge to a final parameter θu. Blue arrows indicate the unlearning process, with feedback loops from θu back to the intermediate parameters.

Below this, a larger diagram compares three unlearning paradigms: 'Retain unlearning', 'Reverse unlearning', and 'Active forgetting (ours)'. A legend indicates black arrows represent 'Learn' and blue arrows represent 'Unlearn'. In 'Retain unlearning', data D/D' (pink) leads to models M0 and Mu (yellow), with D1 and D2 feeding into M0 and Mu. In 'Reverse unlearning', data D (pink) leads to M0, which then updates to Mu via a reverse process. In 'Active forgetting (ours)', data D (pink) leads to M0, which is then processed by an entity E (blue) to produce Mu.

At the bottom, two smaller diagrams depict 'Reverse Unlearning' and 'Active Unlearning'. In 'Reverse Unlearning', a parameter θu (yellow) feeds into data D (pink), which then outputs θ0 (yellow), with a feedback loop from θ0 to θu. In 'Active Unlearning', data D (pink) leads to θ0 (yellow), which then processes through a filtered dataset Df (pink) to produce θu (yellow), with a blue arrow indicating the unlearning step.

All diagrams use consistent visual attributes: pink rectangles for data or datasets (D, D1, D2, etc.), yellow rectangles for model parameters or outputs (θ, M), black arrows for learning, and blue arrows for unlearning. Text labels are placed directly within or adjacent to the respective boxes, with square brackets containing 'x' or 'x, x, x' indicating the number of components or steps involved in each method.
