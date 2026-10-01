# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ROMAS: A Role-Based Multi-Agent System for Database monitoring and Planning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13520

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the re-planning phase of the ROMAS framework, structured as a multi-agent system with three primary components: Planner, Worker, and Monitor, each represented by distinct colored boxes (blue, yellow, and green respectively) arranged vertically on the left and right sides of the diagram. A central vertical dashed red line labeled 'DB-GPT' separates the Planner and Worker/Monitor, indicating a data or memory interface. This DB-GPT component contains three memory modules: 'Long-term memory', 'Short-term memory', and 'Hybrid memory', each symbolized by a document icon and connected via bidirectional arrows to the respective agents, suggesting bidirectional data flow.

On the left side, the Planner (blue box) is divided into four sections: Profile, Task planning, Self-reflection, and Action. The Profile section specifies its goal—to follow the Monitor’s recommendations and historical experience to create new plans—and its constraint—to make modifications with minimum cost. In Task planning, three inputs—'Key State Info from Monitor', 'Last round Strategy', and 'Recommendation from Monitor'—converge into a node labeled 'This round new Strategy'. This strategy is then compared with 'Last round Strategy' to compute a 'Strategy Gap', which feeds into a 'Gap Narrow Rule' module, forming a feedback loop. The Self-reflection section lists three checks: rationality of Agent Team planning, rationality of task list planning per agent, and verification using the Gap Narrow rule. The Action section outlines three steps: collect messages from Monitor, trigger Workers to re-execute, and trigger Monitor to re-monitor.

On the right side, the Worker (yellow box) has a Profile with a goal to wait for the Planner’s command and report real state to the Monitor, constrained by minimizing modification costs. Its Self-reflection includes ensuring errors aren’t solvable, reporting accurate info to Monitor, and informing other Workers.

Below the Worker, the Monitor (green box) also has a Profile with a goal to summarize global information and provide key details and recommendations to the Planner, constrained by ensuring global representation and accuracy of recommendations. Its Task planning lists three tasks: re-check current system problem, prioritize error messages and summarize global info, and review recommendations while asking Planner for help. The Action section includes reporting summarized global state and recommendations to Planner, and informing Workers to wait and follow the new strategy.

Connections between components are shown via arrows: the Planner receives inputs from the Monitor via the Hybrid memory; the Monitor sends summarized info and recommendations to the Planner; the Planner triggers Workers and Monitor via its Action module; and all agents interact with the DB-GPT memory system. The overall workflow follows a feedback loop where the Monitor observes and reports, the Planner replans based on this input, and the Worker executes under updated guidance, with self-reflection mechanisms ensuring quality control at each stage.
