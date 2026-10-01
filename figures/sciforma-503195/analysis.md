# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hierarchical Multi-Agent DRL Based Dynamic Cluster Reconfiguration for UAV Mobility Management — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16167

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the proposed action-observation transition-driven HMAPPO framework, structured as a flowchart depicting the interaction between an environment and multiple agents through state extraction, policy computation, and action aggregation. The global layout is vertically oriented, starting from the top with the 'Environment' node, which is represented as a rounded rectangle filled with blue dots and outlined in dark blue. A dashed blue arrow labeled 'State Extraction' points downward from the Environment to a gray-bordered rectangular box containing the mathematical expression S = {S̄_t, s̄_t^1, s̄_t^2, ..., s̄_t^K}, representing the full state set composed of a global state S̄_t and K individual agent states s̄_t^k.

From this state set, multiple colored arrows branch out: a green arrow labeled S̄_t leads to a green-bordered square labeled π(S̄_t), indicating a global policy network that processes the global state. Red arrows labeled s̄_t^1, s̄_t^2, ..., s̄_t^K descend from the state set to K separate black circular nodes, each marked with a ⊕ symbol, representing concatenation or fusion operations. These red arrows feed into the respective individual agent policies.

Each fusion node connects via a solid black arrow to a green-bordered square labeled π_k(s̄_t^k) for k = 1 to K, representing individual agent policy networks. Additionally, blue arrows labeled ā_t^1, ā_t^2, ..., ā_t^K originate from the global policy π(S̄_t) and feed into the same fusion nodes, indicating that the global policy provides auxiliary information or action suggestions to each agent’s policy.

Each individual policy π_k(s̄_t^k) outputs an action a_t^k, indicated by a dashed blue arrow pointing downward to a large rectangular box at the bottom labeled A = {ā_t^i, a_t^1, a_t^2, ..., a_t^K}. This box represents the complete action set, combining the global action suggestion vector ā_t^i (defined on the right side of the diagram as ā_t^i = {ā_t^1, ā_t^2, ..., ā_t^K}) with the individual agent actions. A thick black feedback loop connects this action set back to the Environment, completing the reinforcement learning loop.

On the right-hand side, a vertical blue text block defines ā_t^i as the collection of global action suggestions for all agents. The diagram uses color coding consistently: green for global policy components, red for individual state inputs, blue for action outputs and global policy suggestions, and black for structural connections and fusion operations. The overall structure emphasizes a hierarchical and cooperative multi-agent decision-making process where global state awareness informs both global and individual policies, which then jointly determine the final action set fed back to the environment.
