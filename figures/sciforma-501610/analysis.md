# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Previous Knowledge Utilization In Online Anytime Belief Space Planning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13128

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the reuse of three trajectories in a structured graphical model, likely representing a sequence or path-based inference mechanism such as in hidden Markov models or dynamic programming frameworks. The global layout consists of three vertical columns, each representing a trajectory segment, arranged horizontally from left to right. Each column contains a top circular node, a middle square node, and a bottom circular node, connected vertically by black lines. These nodes represent states or observations at different time steps or positions within each trajectory.

Each column is labeled with superscripts indicating trajectory identity: the leftmost column is marked with superscript j, the middle with i, and the rightmost with no superscript (implying a composite or merged trajectory). The top circular nodes are labeled b_{k_j}^j, b_{k_i}^i, and b_k respectively. The middle square nodes are labeled b_{k_j+1}^{-j}, b_{k_i+1}^{-i}, and b_{k_i+1}^{j'-i}. The bottom circular nodes are labeled b_{k_j+d}^j, b_{k_i+d}^i, and b_{k_i+d}^{j'i}. Additionally, each middle square node has an associated observation label below it: o_{k_j+d}^j, o_{k_i+d}^i, and o_{k_i+d}^{j'i}, suggesting these are observed outputs corresponding to the state transitions.

The visual modules consist of circular nodes (representing states or latent variables), square nodes (possibly intermediate or transition states), and labeled edges. The circular nodes are outlined in black, while the square nodes are also black-outlined. The labels on the nodes are mathematical expressions involving indices k, superscripts i, j, and d, which likely denote time steps, trajectory identifiers, and depth or duration parameters.

Connections between nodes are shown via black vertical lines linking the top, middle, and bottom nodes within each column. Additionally, there are horizontal connections across columns: a thick black arrow connects the middle square node of the middle column (b_{k_i+1}^{-i}) to the top circular node of the rightmost column (b_k), labeled a_{k_i}^i. Two green arrows originate from the middle square node of the middle column: one connects to the top circular node of the leftmost column (b_{k_j}^j), labeled a_{k_j}^j, and another connects to the top circular node of the rightmost column (b_k), labeled a_k. These cross-column connections suggest transitions or dependencies between trajectories, possibly indicating merging or sharing of paths. The green arrows may signify reused or shared components, consistent with the caption 'Illustration of reuse of three trajectories.'

The structure implies a temporal or sequential progression within each trajectory (vertical axis) and a combinatorial or merging process across trajectories (horizontal axis). The presence of superscripts and subscripts indicates indexing over multiple trajectories and time steps. The notation suggests that the model allows for dynamic switching or combination of trajectories, with the green arrows highlighting the reuse aspect—specifically, the middle trajectory's state influencing both the left and right trajectories. The labels a_{k}^i, a_{k_j}^j, and a_k likely represent transition probabilities or weights associated with moving from one state to another across trajectories.
