# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scaling of Search and Learning: A Roadmap to Reproduce o1 from Reinforcement Learning Perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14135

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison of two reinforcement learning (RL) frameworks: a traditional RL setup on the left and an adapted version for Large Language Models (LLMs) on the right, separated by a vertical dashed line. Both diagrams share a similar global layout, depicting a closed-loop interaction between an agent (or LLM) and an environment, where the agent takes actions based on a policy derived from the current state, receives a reward, and transitions to the next state.

In the left diagram (traditional RL), the 'Agent' is represented as a red rectangular box. It receives inputs labeled 'State' and 'Reward' from the 'Environment', which is shown as a light pink rectangular box. The Agent outputs an 'Action' to the Environment, completing the loop. The policy, denoted as π(a|s), is visualized as a gray bell-shaped curve inside a red-bordered square, positioned immediately after the Agent, indicating that the Agent uses this policy to select actions conditioned on the current state. All connections are thick black arrows with solid heads, showing the direction of information flow.

In the right diagram (RL for LLMs), the 'Agent' is replaced by an 'LLM' (Large Language Model), also depicted as a red rectangular box. The 'Environment' remains a light pink rectangle. The LLM receives the 'State', which now includes a structured input: a 'Question' followed by a sequence of steps (Step 1: xxxx, ..., Step t: xxxx), displayed in a red-bordered box with green text for the final step. Additionally, a small vertical bar with a green checkmark icon is shown adjacent to the State box, likely representing a validation or completion signal. The LLM outputs an action, again guided by the policy π(a|s), visualized identically to the left diagram. The action is then fed into the Environment, which returns a 'Reward' back to the LLM. A label 'Step t+1' appears near the output arrow from the policy, indicating progression to the next time step. The diagram emphasizes that while the visualization shows step-level actions for simplicity, in practice, the LLM's action can occur at token-, step-, or solution-level granularity.

Both diagrams use consistent visual attributes: red boxes for agents/LLMs, light pink for environments, and black arrows for data flow. The policy is consistently represented as a gray distribution plot within a red-bordered square. Text labels such as 'State', 'Reward', 'Action', and 'Policy' are placed along or near the corresponding arrows or components. The overall structure highlights the core RL loop—state → action → reward → next state—with the right diagram extending it to accommodate the sequential, multi-step nature of LLM reasoning.
