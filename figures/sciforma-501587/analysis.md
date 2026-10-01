# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMOSE: Sparse Mixture of Shallow Experts for Interpretable Reinforcement Learning in Continuous Control Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a decision tree structure labeled 'Expert 3' at the top center, representing a hierarchical classification or decision-making process for the Reacher-v4 environment. The global layout is a binary tree with a root node at the top, branching left and right based on condition evaluations, leading to terminal leaf nodes labeled 'YES' or 'NO'. The tree is organized into two main branches stemming from the root condition, with each branch further subdividing into additional decision nodes before reaching the final outcomes.

Visual modules consist of rectangular nodes with rounded corners. Decision nodes are outlined in gray and contain mathematical inequalities involving parameters such as Θ₆³y_T ≤ 0.081, Θ₈³ω_sa ≤ 0.159, Θ₅³x_T ≤ -0.002, Θ₅³x_T ≤ -0.004, and Θ₈³ω_sa ≤ -0.004. These conditions involve subscripted variables (e.g., ω_sa, x_T, y_T) and superscripted expert identifiers (³), suggesting they are derived from learned or expert-defined thresholds. Terminal nodes are colored: light blue rectangles for 'NO' outcomes and light pink rectangles for 'YES' outcomes, providing visual distinction between the two possible classifications.

Connections are represented by solid black lines linking parent nodes to child nodes. Each branch from a decision node is labeled with either 'T' (True) or 'F' (False), indicating the path taken based on whether the condition evaluates to true or false. The root node, Θ₆³y_T ≤ 0.081, splits into two paths: 'T' leads to the left subtree starting with Θ₈³ω_sa ≤ 0.159, while 'F' leads to the right subtree starting with Θ₅³x_T ≤ -0.004. The left subtree further branches: if Θ₈³ω_sa ≤ 0.159 is true, it leads directly to a 'NO' leaf; if false, it proceeds to Θ₅³x_T ≤ -0.002, which then splits into 'NO' (if true) and 'YES' (if false). Similarly, the right subtree: if Θ₅³x_T ≤ -0.004 is true, it leads to 'NO'; if false, it proceeds to Θ₈³ω_sa ≤ -0.004, which splits into 'NO' (if true) and 'YES' (if false). The structure implies a sequential evaluation of conditions, with each path culminating in a binary outcome, likely used for policy selection or action determination in the Reacher-v4 task.
