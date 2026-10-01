# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Think&Cite: Improving Attributed Text Generation with Self-Guided Tree Search and Progress Reward Modeling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14860

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall framework of the Think&cite approach, which combines self-guided Monte Carlo Tree Search (MCTS) with Progress Reward Modeling for generating citable, factually grounded responses. The layout is divided into two main sections: the left side details the MCTS-based reasoning process, while the right side explains the reward modeling mechanism used to evaluate progress during search.

[1] Global Layout and Structure:
The diagram is horizontally partitioned into two major regions. On the left, under the heading 'Self-Guided Monte Carlo Tree Search', a tree-like structure represents the search space exploration. At the top center, an input question box ('What natural place is located in or near Gunnison?') serves as the root node. From this, blue arrows (representing expansion) branch out to query nodes, forming a hierarchical tree. A central rectangular module labeled 'Think' contains the core reasoning steps: Reflection, Verbalize, and Cite. This module receives inputs from the tree and outputs a final response. On the right, under 'Progress Reward Modeling', two reward components—Generation Progress Reward and Attribution Progress Reward—are shown, each with their own computational flow. These rewards are combined via the equation R(st) = Rg + Ra, where Rg is derived from a DPO-aligned model and Ra from citation metrics.

[2] Visual Modules and Attributes:
- Input Question: A black-bordered rounded rectangle at the top center containing the sample question.
- Query Nodes: Light blue rounded rectangles with orange headers (e.g., 'Query: Gunnison natural place nearby') and black text summarizing retrieved information, including citations in square brackets.
- Think Module: A large outlined box with three stages: 
  - 'Reflection': Purple header, with text indicating document retrieval failure and a suggestion to refine the query, accompanied by icons of documents and a magnifying glass.
  - 'Verbalize': Blue header, showing a synthesized answer incorporating retrieved facts.
  - 'Cite': Green header, indicating the inclusion of citations [2][3] in the final output.
- Reward Components:
  - Generation Progress Reward: A flow starting from 'Generated Sentences y1,...,yt', passing through a gray box labeled 'DPO-aligned Model', leading to an orange box with Rg = 0.25.
  - Attribution Progress Reward: Two parallel flows using green and blue borders. Each takes premise-hypothesis pairs (e.g., Premise: [2][3], Hypothesis: y1), applies NLI (Natural Language Inference) to compute Citation Recall (green path) and Citation Precision (blue path), culminating in Ra = 1.0.
- Legend: Top-right corner defines arrow types: gray dashed for Selection, blue solid for Expansion, red dashed for Backpropagation.

[3] Connections and Arrows:
- From the Input Question, blue expansion arrows lead to initial query nodes.
- These query nodes further expand via blue arrows to deeper query nodes (e.g., 'Query: Curecanti National Recreation Area Gunnison').
- Red dashed backpropagation arrows connect the deeper nodes back to the Think module, indicating feedback.
- Within the Think module, a gray selection arrow points from the query to the Reflection step, followed by internal processing to Verbalize and Cite.
- From the Think module, blue expansion arrows point to additional nodes below, suggesting iterative refinement.
- On the right, black arrows show data flow: Generated sentences → DPO-aligned Model → Rg; premise-hypothesis pairs → NLI → Citation Recall/Precision → Ra.
- The final rewards Rg and Ra are combined via the formula R(st) = Rg + Ra, visually linked to the tree search process.
