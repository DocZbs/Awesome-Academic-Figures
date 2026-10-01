# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Empathic Coupling of Homeostatic States for Intrinsic Prosociality — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a state transition diagram modeling a food sharing environment between two agents: a Partner and a Possessor. The diagram is divided into two main regions based on the Possessor’s state: the left region (light blue background) represents states where the Possessor’s state is 'Low', and the right region (light peach background) represents states where the Possessor’s state is 'High'. Each region contains two rectangular nodes representing combinations of Partner and Possessor states, labeled with 'Low' or 'High' in distinct colors—blue for 'Low' and orange for 'High'.

In the left region (Possessor state is Low), the top node is labeled 'Low, Low' (Partner Low, Possessor Low), and the bottom node is 'High, Low' (Partner High, Possessor Low). In the right region (Possessor state is High), the top node is 'Low, High' (Partner Low, Possessor High), and the bottom node is 'High, High' (Partner High, Possessor High). All nodes have rounded corners and gray borders.

Transitions between states are represented by arrows, with two types distinguished by color and meaning: red arrows indicate 'PASS' actions, while black arrows indicate 'EAT' actions. These are explained in a legend at the bottom of the figure.

The transitions are weighted with probabilities shown along the arrows. From 'Low, Low', there is a black arrow (EAT) with weight 1 leading to 'Low, High', and a red arrow (PASS) with weight 1 leading to 'High, Low'. From 'High, Low', a red arrow (PASS) with weight 1 loops back to itself, and a black arrow (EAT) with weight 0.9 leads to 'High, High'. Additionally, from 'High, Low', a red arrow (PASS) with weight 0.1 leads to 'Low, High', and a black arrow (EAT) with weight 0.1 leads to 'Low, High'.

From 'Low, High', a black arrow (EAT) with weight 0.9 leads to 'High, High', and a red arrow (PASS) with weight 0.1 loops back to itself. From 'High, High', a black arrow (EAT) with weight 0.9 loops back to itself, and a red arrow (PASS) with weight 0.1 leads to 'High, Low'. There is also a black arrow (EAT) with weight 0.1 from 'High, High' to 'Low, High'.

The diagram includes self-loops: 'High, Low' has a red self-loop with weight 1; 'Low, High' has a black self-loop with weight 1; and 'High, High' has a black self-loop with weight 0.9.

The overall structure illustrates how the system evolves based on the actions taken (PASS or EAT) and the resulting state transitions, with probabilities indicating the likelihood of each transition. The figure visually captures the dynamics of cooperation and resource consumption in a shared environment.
