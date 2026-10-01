# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Subgoal Discovery Using a Free Energy Paradigm and State Aggregations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16687

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic of a reinforcement learning framework operating in a two-room grid environment connected by a central doorway, with a goal marked by an orange square in the bottom-right corner. The global layout is horizontally structured: the central component is a large gray-bordered grid representing the environment, divided into two rooms by a vertical wall with a narrow doorway. On the left side, two bar charts represent action probability distributions for the main space policy π(a|s, m_Main) and aggregation space policy π(a|s, m_Agg), both shown with blue bars and labeled axes for 'Probability' and 'Action' (with arrows indicating up, down, left, right). On the right side, corresponding green-bar charts show the same policies, illustrating how the probability distribution changes depending on the selected mode. Below the central grid, two small bar charts depict the Free Energy values for the two modes, m_Main and m_Agg, with blue bars for the main space and green for the aggregation space, indicating which mode has lower uncertainty at different locations.

The visual modules include the central grid environment, which contains two highlighted 3x3 blocks: one in blue centered around a cyan circle (representing the agent's position in the main space), and another in green centered around a lime-green circle (representing the agent's position in the aggregation space). These blocks indicate that each state in the main space corresponds to a 3x3 region in the aggregation space. The agent’s possible actions are shown as black arrows within each block, pointing in the four cardinal directions. The blue and green circles denote the agent’s current state in each respective space.

Connections are represented by thick arrows: a dark blue arrow points from the blue 3x3 block to the left-side blue probability chart, and another dark blue arrow connects it to the left-side Free Energy chart. Similarly, a dark green arrow links the green 3x3 block to the right-side green probability chart and to the right-side Free Energy chart. These connections illustrate the flow of information: the agent’s state in each space determines the associated policy (action probabilities) and the Free Energy cost. The figure demonstrates a decision-making process where the agent selects between the main and aggregation spaces based on which has lower Free Energy. In regions near the doorway (bottleneck), the main space is preferred (lower Free Energy), leading to more focused action selection (higher probability on specific actions). In areas far from the doorway, the aggregation space is chosen (lower Free Energy there), resulting in a more uniform or exploratory action distribution. The overall workflow reflects a hierarchical or multi-scale planning strategy, where the agent dynamically switches between detailed (main) and abstracted (aggregation) representations based on environmental context and uncertainty.
