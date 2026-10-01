# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ROMAS: A Role-Based Multi-Agent System for Database monitoring and Planning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13520

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the ROMAS framework, a modular agent-based system centered around DB-GPT, which acts as the core orchestrator. The global layout is circular, depicting a continuous workflow among three primary agents: Planner, Worker, and Monitor, all interconnected with DB-GPT at the center. The structure emphasizes a cyclical process divided into three distinct phases—Init, Execute, and Replan—represented by thick orange curved arrows forming a clockwise loop around the central components. Each phase corresponds to a stage in the task lifecycle: Init initiates the process from Planner to Worker, Execute involves active task execution between Worker and Monitor, and Replan triggers a feedback-driven adjustment back to Planner.

The visual modules consist of four rectangular boxes with rounded corners and blue borders: 'Planner', 'Worker', 'Monitor', and 'DB-GPT'. All module labels are in bold black font. DB-GPT is positioned centrally, serving as the hub for communication and coordination. The Planner receives inputs from DB-GPT labeled 'Agent team' and 'Task list' via a blue arrow, indicating data flow from the database. From DB-GPT, a blue arrow labeled 'Component' points to the Worker, while another labeled 'Memory' points to the Monitor. Additionally, a bidirectional blue arrow connects Worker and Monitor, labeled 'Instruction' (from Worker to Monitor) and 'Error' (from Monitor to Worker), signifying real-time feedback during execution.

Connections are color-coded: blue lines represent key messages exchanged between agents and DB-GPT; orange lines denote the three operational phases (Init, Execute, Replan); and green curved arrows indicate internal self-planning and self-reflection processes within each agent. Specifically, a green loop above the Planner is labeled 'Self-plan and self-reflect', one on the left side of the Monitor also labeled 'Self-plan and self-reflect', and a green loop on the right side of the Worker labeled 'Self-reflect'. These internal loops suggest autonomous reasoning and adaptation capabilities within each agent. The Planner sends a 'Recommendation' to DB-GPT via a blue arrow, completing the feedback cycle. The overall design conveys a dynamic, self-improving system where agents collaborate under DB-GPT’s guidance, continuously adapting through planning, execution, monitoring, and reflection.
