# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scaling of Search and Learning: A Roadmap to Reproduce o1 from Reinforcement Learning Perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14135

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comparative workflow of two reinforcement learning approaches—Policy Gradient and Behavior Cloning—based on the type of data they utilize during training. The global layout is a left-to-right flowchart, beginning with a 'Search' step and progressing through data generation and model training stages. The process starts with a pink rectangular box labeled 'Search', which feeds into a black-bordered square labeled 'Solutions'. This square contains a tree-like graph with gray nodes representing generated solutions. An arrow leads from this to another square labeled 'Solutions with Rewards', which displays a similar tree structure but with colored nodes: green for the solution with the highest reward and red for all other solutions. From this point, the workflow splits into two parallel branches.

The upper branch leads to a red-bordered square labeled D_search with the subtitle 'All solutions', containing the full tree with both green and red nodes. This dataset feeds into a dark red rectangular box labeled 'Policy Gradient', which further branches into three smaller dark red boxes labeled 'REINFORCE', 'PPO', and 'DPO', indicating specific policy gradient algorithms.

The lower branch leads to a red-bordered square labeled D_Expert with the subtitle 'Solution with the highest rewards', showing only the green nodes from the original tree (the expert solution), while the red nodes are faded or omitted. This dataset feeds into a dark red rectangular box labeled 'Behavior Cloning'.

Visual modules include rectangular boxes for processes and datasets, with distinct colors: pink for initial steps, black borders for intermediate data representations, red borders for datasets used in training, and dark red for algorithmic methods. Nodes in the tree diagrams are color-coded: green for expert/high-reward solutions and red for non-expert solutions. Text labels are placed directly beneath or beside each module for clarity. All connections are represented by solid black arrows indicating the direction of data flow. The figure emphasizes that Policy Gradient methods utilize the entire search space (D_search), whereas Behavior Cloning relies exclusively on the top-performing solution (D_Expert).
