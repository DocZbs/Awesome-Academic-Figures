# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Harnessing Multi-Agent LLMs for Complex Engineering Problem-Solving: A Framework for Senior Design Projects — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01205

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a multi-layered agent-based workflow architecture designed for processing academic project proposals. The global layout is structured into four horizontal tiers: user interaction at the top, followed by management agents, a task channel, and specialized agents at the bottom. The top tier features a user icon representing a student who submits input via a 'Co-pilot UI'—a chat-like interface depicted with speech bubbles and a plus sign. This UI serves as the primary interface for input/output exchange with the system.

The second tier, labeled 'Management Agents', contains two components within a light blue box: the 'Coordinator Agent' (blue robot icon) and the 'Tasks Agent' (orange robot icon). The Coordinator Agent acts as the central orchestrator, receiving the initial project title and proposal PDF from the Co-pilot UI (step 1), then forwarding it to the Tasks Agent (step 2). The Tasks Agent processes this information and returns a list of tasks (step 3) back to the Coordinator Agent.

The third tier, labeled 'Tasks Channel' and shaded purple, consists of eight rectangular boxes labeled Task A.1 through Task A.8, each outlined with dashed borders. These represent discrete tasks generated from the proposal. The Coordinator Agent distributes these tasks to the Tasks Channel (step 4).

The bottom tier, labeled 'Agents' and shaded light green, contains eight specialized agents, each represented by a green robot icon inside a dashed rectangle. These agents are: Problem Formulation Agent, Breadth and Depth Agent, Ambiguity and Uncertainty Agent, System Complexity Agent, Technical Innovation and Risk Management Agent, Societal and Ethical Consideration Agent, Methodology and Approach Agent, and Comprehensive Evaluation Agent. Each agent corresponds to one of the tasks above it (step 5), receiving the task from the Tasks Channel and generating an output (step 6). Outputs are sent back to both the Tasks Channel and the Coordinator Agent.

Connections between components are indicated by arrows with numbered steps. Solid arrows denote direct communication flows, while a dashed arrow (step 7) indicates optional input linking, where an output from one agent (e.g., Task A.7) can serve as input to another (e.g., Task A.8). Finally, step 8 shows the Coordinator Agent sending summarized results and detailed analyses back to the Co-pilot UI for follow-up questions or display to the user. The entire system operates as a coordinated pipeline where tasks are dynamically assigned, processed by domain-specific agents, and aggregated for user feedback.
