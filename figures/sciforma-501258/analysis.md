# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ChatDiT: A Training-Free Baseline for Task-Agnostic Free-Form Chatting with Diffusion Transformers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12571

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the ChatDiT multi-agent framework, structured as a sequential pipeline composed of three main agents: Instruction-Parsing Agent, Strategy-Planning Agent, and Execution Agent. The entire process begins with a rounded rectangular node labeled 'User Input (Instruction & Images)', which feeds into the first agent. This initial input is processed by three sub-agents within the Instruction-Parsing Agent: Counting Agent (with the function 'Estimate Output Count'), Description Agent ('Input Image Description'), and Prompting Agent ('Output Image Description'). These sub-agents are represented as rectangular boxes with rounded corners, arranged vertically within a larger rectangular container labeled 'Instruction-Parsing Agent'. Curved arrows connect the User Input to each of these three sub-agents, indicating parallel processing.

From the Instruction-Parsing Agent, a solid arrow leads to the Strategy-Planning Agent, which contains two sub-agents: Referencing Agent ('Reference Selection & Grouping') and Panelizing Agent ('In-Context Prompt Generation'). These are also depicted as rounded rectangles inside a larger container. A downward arrow connects the Referencing Agent to the Panelizing Agent, showing a dependency or sequential flow within this agent.

The Strategy-Planning Agent outputs to the Execution Agent via a solid arrow. The Execution Agent comprises two components: In-Context Toolkit ('Grouped & Masked Multi-Image Generation Pipelines') and Markdown Agent ('Optional'). Both are shown as rounded rectangles within the Execution Agent’s container. The In-Context Toolkit receives the primary flow from the Strategy-Planning Agent and produces the final output through a solid arrow leading to a rounded rectangle labeled 'Final Output (Images & Optional Article)'.

Additionally, a dashed arrow connects the Panelizing Agent to the Markdown Agent, indicating an optional or conditional path. Another dashed arrow links the Markdown Agent directly to the Final Output, suggesting it contributes to the final result only when activated. All agents and sub-agents are enclosed in distinct rectangular boundaries with bold titles at the top. Text labels are black, and all shapes have thin black borders. The overall layout is horizontal, left-to-right, with clear separation between the three main agents, emphasizing the modular and sequential nature of the framework.
