# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ROMAS: A Role-Based Multi-Agent System for Database monitoring and Planning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13520

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the execution phase of the ROMAS framework, depicting a dual-agent system composed of Workers (left, yellow-bordered section) and a Monitor (right, green-bordered section), with a central DB-GPT component (dashed red border) acting as a shared memory interface. The global layout is divided into two main vertical columns: the left column represents the Worker subsystem responsible for task execution, while the right column represents the Monitor subsystem responsible for error detection, analysis, and correction. A vertical dashed line labeled 'DB-GPT' separates these two systems and contains memory components—Sensory memory, Short-term memory, and Long-term memory—represented by document icons, indicating data flow between the subsystems.

In the Worker subsystem, the topmost box labeled 'Profile' defines the goal: to answer a user query by determining if the associated database has direct answers; if not, it triggers the Table Extractor, then calls the SQL Retriever, and finally the Painter. Constraints specify that agent roles must come from a predefined ToolSet: Table Extractor (extracts table data from PDFs into structured databases), SQL Retriever (generates and executes SQL queries), and Painter (draws result charts). Below this, 'Task planning' lists input parameters for each task. The 'Self-reflection' section includes four checks: whether the query is structured, and whether outputs from Extractor, Retriever, and Painter are reasonable. The bottom 'Action' box shows five stored message types—Error Msg, Reflection, History, Log, Result info—alongside interaction messages between agents (e.g., 'Sorry, I went wrong, we need to report' from Extractor to Others, who respond 'OK, I’ll report to monitor'). This entire Worker block is labeled 'Workers - Indicator tasker'.

The Monitor subsystem, on the right, begins with a 'Profile' box stating its goal: when an error is reported, it must re-plan using suggestions and historical memory. Constraints require minimal changes to previous strategy and thorough review to prevent recurrence. The 'Action' box below specifies waiting for a trigger from the Monitor and merging messages from the Monitor with historical data. This section is labeled 'Planner'. Below this, 'Task planning' outlines three tasks: gathering key information from Workers, classifying problems via Error Tree Search Strategy, and correcting errors in Task Pipeline or Agent Team Generation. Two error classification trees are shown: one for 'Agent Team Generation Error' (merging info from Planner and Workers to generate recommendations), and another for 'Task Pipeline Error', which branches into Parameter Error (check input/output) and Workflow Error (check upstream/downstream), both leading to instruction generation. The 'Self-reflection' section verifies the rationality of generated strategy using the Error Tree Search Strategy and checks memory storage. The final 'Action' box lists storing current messages, directing Workers to make corrections, and passing critical information and recommendations back to the Planner. This entire Monitor block is labeled 'Monitor'.

Connections and arrows indicate data flow: downward arrows within each subsystem show sequential processing steps. Horizontal double-headed arrows connect the Worker's 'Self-reflection' output to the Monitor’s 'Short-term memory', and the Monitor’s 'Action' output to the Worker’s 'Long-term memory', illustrating feedback loops. The Sensory memory connects the Worker’s Action to the Monitor’s Planner, and the Short-term memory links the Monitor’s Task planning to its Self-reflection. The Long-term memory is linked bidirectionally between the Worker and Monitor, emphasizing persistent storage and retrieval across phases.
