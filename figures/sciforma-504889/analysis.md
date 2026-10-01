# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FFCG: Effective and Fast Family Column Generation for Solving Large-Scale Linear Program — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19066

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the column selection process in the FFCG (Feature Feature Column Generation) framework, contrasting it with the RLCG (Reinforcement Learning Column Generation) approach. The global layout consists of five sequential stages arranged horizontally, each depicting a bipartite graph with two sets of nodes: variable nodes (v1 to v7) on the left and constraint nodes (c1 to c5) on the right, connected by edges representing relationships. The entire sequence is enclosed within a dashed red border, with the first stage labeled 'RLCG' in blue and the subsequent stages labeled 'FFCG' in red.

In each stage, variable nodes are represented as circles; initially, v4, v5, v6, and v7 are colored green to indicate they are part of the available action set G. When selected, a variable node turns orange. The constraint nodes (c1–c5) remain gray throughout. A special node labeled 'STOP' appears in later stages, depicted as a blue circle, signifying termination of the selection process.

The workflow begins with the RLCG stage, where the RL agent selects v4 from the green action set. This selection is indicated by an arrow labeled 'select v4' pointing to the next stage. In the second stage, the selected v4 becomes orange, and a new blue 'STOP' node is added below the variable nodes, with an arrow labeled 'add STOP' indicating this addition. The available action set is now updated to G minus {v4}, excluding v4 but including STOP.

The third stage shows the RL agent selecting v6 from the remaining green nodes (v5, v6, v7), turning v6 orange. An arrow labeled 'select v6' connects this stage to the next. In the fourth stage, v6 remains orange, and the agent continues selecting from the remaining green nodes. An arrow labeled 'until STOP is selected' points to the final stage, indicating the iterative nature of the process.

In the final stage, all previously selected nodes (v4, v6, v7) are orange, and the 'STOP' node is also orange, indicating it has been selected to terminate the process. The resulting selected column set C = {v4, v6, v7} is returned. The figure visually captures the dynamic update of the action space and the iterative selection mechanism guided by the RL agent, culminating in the termination condition.
