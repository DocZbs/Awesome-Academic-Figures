# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Script-Based Dialog Policy Planning for LLM-Powered Conversational Agents: A Basic Architecture for an "AI Therapist" — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15242

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a proactive prompt-based dialog policy planning framework using two distinct large language models (LLMs): an Actor LLM and a Dialog LLM, operating in a sequential pipeline over each conversation turn. The global layout is a directed flowchart arranged horizontally from left to right, with feedback loops connecting the components. At the top, three numbered steps describe the process: (1) optional reasoning and planning by the Actor LLM, (2) selection of the next action from a predefined set, and (3) message generation by the Dialog LLM based on the selected action.

Visual modules include four primary components, all rendered as gray-filled shapes with black borders and centered black text. On the far left is a document-shaped box labeled 'Proactive Prompt with set of acts', which feeds into the 'Actor LLM'—a rounded rectangle. The 'Actor LLM' is positioned centrally and serves as the decision-making module. To its right is another rounded rectangle labeled 'Dialog LLM', responsible for generating user-facing messages. Below these two LLMs is a document-shaped box labeled 'Dialog History', which maintains the conversation context. On the far right is a stylized human head silhouette labeled 'User', representing the external participant in the dialogue.

Connections are represented by thick black arrows with solid arrowheads, indicating the direction of information flow. The 'Proactive Prompt with set of acts' sends input to the 'Actor LLM'. The 'Dialog History' also provides context to both the 'Actor LLM' and the 'Dialog LLM'. The 'Actor LLM' outputs the 'next act' to the 'Dialog LLM', as indicated by an arrow labeled 'Provides next act'. The 'Dialog LLM' then generates a message and sends it to the 'User', as shown by an arrow labeled 'Sends message to user'. In response, the 'User' sends a message back to the agent, which is captured in the 'Dialog History', completing the feedback loop. This structure enables iterative, context-aware interaction where the Actor LLM optionally performs reasoning before selecting an action, and the Dialog LLM produces natural language output based on that action, all grounded in the evolving dialog history.
