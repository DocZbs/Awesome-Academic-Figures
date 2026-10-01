# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TimelyLLM: Segmented LLM Serving System for Time-sensitive Robotic Applications — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18695

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative timeline diagram illustrating two different modes of large language model (LLM) service execution: 'Normal generation' and 'Content-aware segmented generation'. The diagram is structured into two main horizontal sections, each depicting a timeline from left to right, with vertical lanes representing different components: LLM Service, Agent 0, and Agent 1. Each section includes labeled rectangular blocks indicating processing phases, with dashed vertical lines marking transitions or delays.

In the 'Normal generation' section, the LLM Service processes 'Request 0' (solid orange block) first, which includes actions 'Move up; Check book; Take photo'. This request spans a long duration and blocks subsequent requests. 'Request 1' (hatched orange block), associated with 'Move right', starts only after Request 0 completes. Agent 0 executes 'Execution 0' (solid orange block) concurrently with Request 0, while Agent 1 executes 'Execution 1' (hatched orange block) after Request 1 begins. Network latency is indicated by blue wavy patterns at the start of each execution block. This setup causes Request 1 to be delayed, preventing timely collision avoidance.

In the 'Content-aware segmented generation' section, the LLM Service breaks Request 0 into segments: 'Segment 0' (solid orange, 'Move up'), followed by 'yield 0' (black hatched pattern), then 'Segment 1' ('Check book') and 'Segment 2' ('Take photo'). After Segment 0, the system yields control, caching token IDs and key-value pairs (indicated by black hatched pattern). This allows 'Request 1' (hatched orange) to be processed immediately, labeled as 'Preemptible'. Agent 0 executes 'Exec. seg0' (solid orange), then pauses and resumes with 'Exec. seg1' and 'Exec. seg2' after Request 1 completes. Agent 1 executes 'Execution 1' (hatched orange) during the yield period. Network latency is shown only before Exec. seg0, as subsequent segments execute in parallel with prior execution phases, eliminating visible latency.

The legend clarifies visual attributes: solid orange blocks represent 'Normal Request 0 related: Check a book on the top of the cabinet'; hatched orange blocks represent 'Urgent Request 1 related: Preventing potential collision'; blue wavy patterns denote 'Network latency'; and black hatched patterns indicate 'Yield: Cache token ID and key-value pairs'. The figure demonstrates how content-aware segmentation enables preemptive handling of urgent tasks by breaking down long-running requests into manageable segments, improving responsiveness and resource utilization.
