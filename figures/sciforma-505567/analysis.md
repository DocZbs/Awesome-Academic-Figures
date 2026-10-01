# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

An Experimental Study on Fairness-aware Machine Learning for Credit Scoring Problems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20298

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a Bayesian network model for credit scoring, structured as a directed acyclic graph (DAG) with nodes representing variables and edges indicating probabilistic dependencies. The global layout is hierarchical, flowing from top to bottom, with the root node 'Sex' at the top left, branching into multiple intermediate and terminal nodes. The network is organized into distinct functional clusters: demographic and protected attributes on the upper left, score-related variables in the center, behavioral and account-related features on the right, and credit outcome variables at the bottom.

Visual modules consist of oval-shaped nodes, each labeled with a variable name. Nodes are color-coded to denote their role: blue ovals represent protected attributes ('Sex', 'Marital', 'Age'), a yellow oval marks the class label ('label'), and all other nodes are red ovals, indicating non-protected or derived variables. The text within each node is black, centered, and uses a standard sans-serif font. The edges are solid black arrows pointing from parent to child nodes, indicating the direction of influence in the probabilistic model.

The connections form a clear causal flow. From 'Sex', two edges lead to 'Marital' and 'Field'. 'Marital' further connects to 'Age'. 'Field' branches to 'label', 'Score_level', and 'Changed_phone_number'. 'Score_level' leads to 'Score_class', which then points to 'Score_point'. 'Score_point' has three outgoing edges: to 'Region', 'INPS_yes_no', and 'Has_Credit'. 'Region' connects to 'Language', which in turn connects to 'Has_Credit'. 'INPS_yes_no' connects to 'INPS_mln_sum', which also receives an input from 'Changed_phone_number'. 'Changed_phone_number' additionally connects to 'Day_of_birth' and 'Linked_cards'. Both 'INPS_mln_sum' and 'Score_point' feed into 'Has_Credit', which finally connects to 'Number_of_credits'. The node 'Month_of_birth' appears as a standalone node at the top, with no incoming or outgoing edges, suggesting it may be an unused or placeholder variable in this specific model. The caption clarifies that 'label' is the class label (target variable) and 'Age', 'Marital', 'Sex' are protected attributes, which are visually distinguished by their blue color.
