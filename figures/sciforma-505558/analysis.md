# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

High-fidelity social learning via shared episodic memories enhances collaborative foraging through mnemonic convergence — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20271

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two panels, A and B, illustrating the architecture and social learning mechanism of the SEC (State-Action Episodic Cognition) agent model used in a 2D grid-world collective foraging task.

Panel A shows the internal structure and workflow of a single SEC agent. The agent is enclosed within a large light-blue rectangular container labeled 'SEC agent', which is subdivided horizontally into two functional phases: 'storage' on the left and 'retrieval' on the right. Within these phases, three green rounded rectangles represent core cognitive modules: 'STM' (Short-Term Memory), 'LTM' (Long-Term Memory), and 'Q(s,a)' (state-action value function). These modules are arranged sequentially from left to right. The 'STM' receives inputs labeled 's,a' (state-action pair) from the external environment via a solid black arrow. Upon receiving a reward 'r' (indicated by a solid black arrow from the 'Reward' module), the contents of STM are transferred to LTM via a solid black arrow. In the retrieval phase, the current state 's' (from the 'State' module) triggers a dashed black arrow from LTM to Q(s,a), indicating retrieval of relevant episodic memories. The Q(s,a) module then outputs an action 'a' via a dashed black arrow to the 'Action' module. The 'Environment' is represented as a gray rectangle at the bottom, feeding 'State' and 'Reward' to the agent and receiving 'Action' from it. Solid arrows denote direct data flow or storage operations; dashed arrows indicate retrieval or decision-making processes.

Panel B illustrates social learning between two SEC agents. Agent 1 is shown in a blue container, containing the same three green modules: STM, LTM, and Q(s,a). A thick blue downward arrow labeled 'episodic memory' originates from Agent 's LTM and points to a horizontal sequence of gray boxes representing an episodic memory trace: [s_t1, a_t1, s_t2, a_t2, s_t3, a_t3, ..., s_tn, a_tn, r_tn], where the final reward r_tn is highlighted in green. Another thick blue arrow leads from this memory trace to Agent 2, which is enclosed in a pink container and also contains STM, LTM, and Q(s,a) modules. This visualizes the transfer of a complete episodic memory from Agent ’s LTM to Agent 2’s LTM, enabling social learning. The layout emphasizes the unidirectional flow of memory from one agent to another.
