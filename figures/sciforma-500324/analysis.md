# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Paid with Models: Optimal Contract Design for Collaborative Machine Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11122

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage framework for monopolistic screening, titled 'Monopolistic Screening as a Two-Stage Problem'. The global layout is divided into two main vertical stages: Stage 1 (Type Selection) on the left and Stage 2 (Optimal Contracting) on the right, connected by a large gray arrow indicating forward progression. A yellow arrow labeled 'Backward Induction' runs from Stage 2 back to Stage 1, emphasizing the iterative decision-making process.

On the far left, a red icon labeled 'principal' faces a dashed box containing three agent icons (labeled 'agents') with types J = {1,2,3}. Below this is a gray bell-shaped curve labeled 'type distribution in the population', representing the underlying distribution of agent types.

Stage 1, 'Type Selection', displays multiple possible subsets of selected agent types, each represented by a group of three agent icons (blue for selected, green for unselected). Each subset is labeled with J_s^[k] for k from 1 to 8, showing all possible combinations of selecting or not selecting each type. For example, J_s^[1] = {1,2,3} shows all three agents selected (all blue), while J_s^[7] = {1} shows only type 1 selected (one blue, two green), and J_s^[8] = ∅ shows none selected (all green). A legend at the bottom indicates blue circles represent 'selected types' and green circles represent 'unselected types'.

Stage 2, 'Optimal Contracting', contains a dashed box labeled 'Optimal Contracting Problem'. Inside, a mathematical optimization problem is presented: maximize Π_s = E[a(∑_{i∈J_s} n_i m_i)] over variables (t_i, m_i) for i ∈ J_s. The constraints (s.t.) include individual rationality (IR), incentive compatibility (IC), and budget constraint (BC) conditions for selected types (blue text), and IR constraints for unselected types (green text). Specifically, the constraints are: t_i - c_i m_i ≥ f_i for all i in J_s; t_i - c_i m_i ≥ t_j - c_j m_j for all i,j in J_s; t_i ≤ E_{n_i≥1}[v(a(∑_{i∈J_s} n_i m_i))] for all i in J_s; and t_i - c_i m_i < f_i for all i in J_s and i' in J\J_s. Below the constraints, a legend clarifies that blue dots denote IR, IC, BC constraints for selected types, and green dots denote IR constraints for unselected types.

To the right of the optimization problem, eight red icons labeled Π_s*[1] through Π_s*[8] represent the optimal profits corresponding to each type selection scenario in Stage 1. These are arranged vertically, aligned with the respective J_s^[k] scenarios.

At the bottom, the backward induction step is described: the principal compares the optimal profits Π_s*[i] under different scenarios and selects the best type combination. This is visually reinforced by the yellow arrow looping from the profit outcomes back to the type selection stage.
