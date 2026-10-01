# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EventFull: Complete and Consistent Event Relation Annotation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12733

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-stage annotation pipeline for event relations, structured as a left-to-right workflow. The global layout consists of four main components: an initial input box labeled 'Targeted Events' on the far left, followed by three sequential annotation stages labeled [1] Temporal Relation Annotation, [2] Coreference Relation Annotation, and [3] Causal Relation Annotation. These stages are connected by thick black arrows indicating the flow of the process.

In the 'Targeted Events' box, a vertical list of horizontal bars represents events, with some bars highlighted in orange or blue, suggesting different types or categories of selected events. This serves as the input to the first stage.

Stage [1] Temporal Relation Annotation begins with three gray rectangular modules stacked vertically: 'Prioritization Strategy', 'Consistency Checking', and 'Transitive Relations Detection'. Each module has a curved arrow pointing to a central diagram depicting a network of four dark blue circular nodes representing events. The nodes are connected by labeled edges: solid blue arrows labeled 'Before' indicate definite temporal precedence; dashed green lines labeled 'Vague' represent uncertain temporal relations; and a dotted black line labeled 'Equal' denotes simultaneous events. The connections from the three gray modules to this diagram suggest they are processing or validation steps applied during temporal annotation.

Stage [2] Coreference Relation Annotation is represented by a diagram containing several dark blue circular nodes grouped into clusters enclosed by dashed circles. These clusters indicate sets of event mentions that refer to the same underlying event, illustrating coreference resolution. There are no explicit labels within this stage, but the grouping visually conveys the concept of event mention clustering.

Stage [3] Causal Relation Annotation shows a similar setup to Stage [2], with dark blue circular nodes grouped into dashed circles. However, it includes two orange arrows labeled 'Caused', connecting one node outside a cluster to a node inside another cluster, and one node inside a cluster to another node inside the same cluster. These arrows indicate causal relationships between events, with the directionality showing the cause-effect flow.

The entire diagram uses consistent visual attributes: dark blue circles for events, black thick arrows for stage transitions, and colored lines (blue, green, black, orange) for different types of relations. Text labels are placed directly on or near the relevant elements for clarity. The figure effectively illustrates a stepwise annotation process starting from event selection, progressing through temporal, coreference, and finally causal relation annotation.
