# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ROMAS: A Role-Based Multi-Agent System for Database monitoring and Planning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13520

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the initialization phase of ROMAS, a multi-agent system designed for complex task execution, structured into three main components: Initial Planner (blue), Initial Worker – QR Tasker (yellow), and Initial Monitor (green), all interacting through a central memory system (dashed red line). The global layout is divided vertically into left (planner and worker) and right (monitor) sections, with a central column representing shared memory and resources.

[1] Global Layout and Structure:
On the left, the Initial Planner (blue box) handles high-level planning, including agent team generation and task list creation. It receives user input via a speech bubble ('Help me analyze Apple's overall performance in 2023') and communicates with the Initial Worker and Monitor through memory modules. On the right, the Initial Worker (QR Tasker) executes tasks based on the planner’s output, while the Initial Monitor oversees the entire process for errors. The central dashed red line represents the DB-GPT system, containing Database, Toolkit, Short-term memory, Sensory memory, and connecting all components.

[2] Visual Modules and Attributes:
The Initial Planner contains four submodules: Profile, Task planning – Agent Team, Task planning – Task list, Self-reflection, and Action. The Profile defines the planner’s goal (generate specialized agent team and plan tasks), constraints (agent roles from AgentSet), and lists available agents: Tasker, Retriever, Extractor, Painter. The Agent Team diagram shows QR Tasker as the root, branching to Indicator Tasker, Document QA Tasker, GraphRAG Tasker, and Summary Tasker, each connected to specific sub-agents (e.g., SQL Retriever, PDF Extractor). The Task list specifies functions for each Tasker (e.g., extract_table(), summarize()). Self-reflection checks rationality of team and task planning. Action stores plans in memory and initializes QR Tasker and Monitor.

The Initial Worker (yellow) has a similar structure: Profile (goal: rewrite query, distribute sub-query; AgentSet includes Indicator, Document QA, GraphRAG, Summary Taskers), Task planning – Task list (rewriting questions, calling Taskers, collecting results), Self-reflection (checks QA alignment, assignment, format, summary match), and Action (output results or report to monitor).

The Initial Monitor (green) has Profile (goal: monitor global workers, diagnose errors from memory messages; constraints: correct task list errors or advise planner on team structure) and Action (retrieve memory from Planner, wait for worker calls).

All modules use rectangular boxes with black borders; text is black except for 'Goal' and 'Constraint' in red. Memory modules are icons (database, toolkit, document) along the central column.

[3] Connections and Arrows:
Arrows indicate data flow and control. From User → Initial Planner (blue arrow). From Initial Planner → Initial Worker (blue arrow) via Short-term memory. From Initial Worker → Initial Monitor (orange arrow) via Sensory memory when errors occur. From Initial Monitor → Initial Planner (orange arrow) for corrective advice. Within each component, arrows flow downward from Profile → Task planning → Self-reflection → Action. Horizontal arrows connect sub-agents to their parent Taskers. Memory icons have bidirectional connections to the respective components, indicating read/write access.
