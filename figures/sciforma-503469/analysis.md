# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Systems Thinking Approach to Algorithmic Fairness — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16641

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is a causal loop diagram illustrating the dynamics of algorithmic fairness, structured as two interconnected feedback systems centered around two entities, A and B, with a central machine learning (ML) model mediating resource allocation between them. The global layout consists of two large, symmetric loops — one on the left for entity A (enclosed by a red arc labeled B3) and one on the right for entity B (enclosed by a blue arc labeled B4) — connected through a central decision node labeled 'Allocation to A instead of B (D)', which is influenced by an ML Model. The diagram uses arrows to represent causal relationships, with red arrows indicating positive (reinforcing) effects and blue arrows indicating negative (balancing) effects, each marked with '+' or '-' signs near the arrowhead to denote the direction of influence.

Visual modules include key variables and concepts represented as text labels, grouped into four main reinforcing loops (R1–R4) and four balancing loops (B1–B4). For entity A, the left-side loop includes: 'External intervention by A (A_A)' (linked to 'Constraint on A' via a blue arrow), 'Limiting action on A' (connected to 'Resources to A' via a red arrow), 'Success of A (Y_A)' (influenced by 'Resources to A' via a red arrow), and 'Data from A (X_A)' (feeding into the ML Model). Similarly, for entity B, the right-side loop includes: 'External intervention by B (A_B)', 'Constraint on B', 'Limiting action on B', 'Success of B (Y_B)', and 'Data from B (X_B)'. The central ML Model receives data from both A and B, and outputs an allocation decision D, which determines resource distribution. The allocation decision D has a positive effect on resources to A and a negative effect on resources to B, as indicated by red and blue arrows respectively.

Connections and arrows show the causal flow: 'Success of A' positively influences 'Data from A', which feeds into the ML Model; the ML Model's output (allocation D) positively affects 'Resources to A' and negatively affects 'Resources to B'. These resource allocations then feed back into success metrics: more resources to A increase 'Success of A', which in turn increases 'Data from A', creating a reinforcing loop R1. Similarly, for B, more resources lead to higher success, more data, and further resource allocation, forming reinforcing loop R2. However, each success also triggers external interventions (A_A and A_B), which impose constraints (via balancing loops B3 and B4) that limit actions, thereby reducing resources and success — forming balancing loops R3 and R4. The diagram also shows cross-influences: 'Dependence on external intervention' for A and B are linked to their respective external interventions, completing the feedback cycles. The entire structure emphasizes how algorithmic decisions can create self-reinforcing or self-correcting dynamics, depending on the interplay between data, success, resources, and external constraints.
