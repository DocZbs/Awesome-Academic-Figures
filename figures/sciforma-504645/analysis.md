# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TimelyLLM: Segmented LLM Serving System for Time-sensitive Robotic Applications — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18695

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a timeline-based interaction between an LLM service and a robotic agent for processing a single request, highlighting three key latency components. The global layout consists of two horizontal timelines stacked vertically: the top row labeled 'LLM Service for Request 1' and the bottom row labeled 'Robotic Agent 1', both aligned along a common horizontal axis labeled 'Timeline' at the bottom. The timeline progresses from left to right, indicating the chronological flow of events.

In the LLM Service row, the process is divided into sequential segments: 'Segment 0' (orange rectangle), followed by a gray hatched region labeled 'Generation for other requests', then 'Segment 1' and 'Segment 2' (both orange rectangles). These represent the LLM's token generation phases for the current request, interrupted by processing for other requests.

In the Robotic Agent 1 row, the process begins with 'R0' (an orange rectangle), representing the initial state or reception of the request. This is followed by a blue dotted vertical bar symbolizing data transmission. Then, the agent executes actions corresponding to each segment: 'Exec. seg0', 'Exec. seg1', and 'Exec. seg2' (all orange rectangles). Between each execution phase, there is another blue dotted vertical bar indicating data transmission from the LLM to the robot.

Connections and arrows are used to denote event timing and dependencies. Solid blue upward arrows indicate 'Execution Completion' events, marking the end of each execution phase. Dashed blue downward arrows mark 'Execution Start' events, signaling when the robot begins executing a new segment. The blue dotted bars represent 'Data Transmission' events, occurring between LLM output and robot execution.

Two waiting periods are explicitly annotated: 'W(s₀)' spans from the start of R0 to the beginning of Exec. seg0, representing the waiting time for the first segment. 'W(s₁)' spans from the end of Exec. seg0 to the start of Exec. seg1, representing the waiting time for the second segment. The total task completion time 'C(r)' is marked below the timeline, spanning from the start of R0 to the end of Exec. seg2, encompassing all waiting and execution times.

The figure visually conveys that the robot waits for LLM-generated segments before executing them, introducing delays. The caption clarifies that the request response time is W(s₀), the robot waiting time is the sum of all W(sₖ) across segments, and the task completion time C(r) includes both waiting and execution durations.
