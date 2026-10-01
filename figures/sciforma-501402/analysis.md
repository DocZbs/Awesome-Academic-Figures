# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EventFull: Complete and Consistent Event Relation Annotation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12733

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a user interface for a temporal relation annotation task within the EventFull system, specifically Task-2: Temporal Relation. The global layout is divided into two main vertical sections: a left panel containing the textual context and annotation interface, and a right panel displaying a dynamic graph visualization of event relationships.

In the left panel, a news article excerpt serves as the context for annotation. Key event mentions are highlighted: 'investigation (41)' is marked with a green background, and 'search (7)' is marked with a red background, indicating they are the current focus for annotation. Other event mentions such as 'crash (5)', 'recovered (24)', 'descent (38)', etc., are shown in bold but not highlighted, signifying they are part of the event set but not currently under annotation. Below the text, a question asks 'Which event started first?' with four radio button options: 'investigation (41)', 'search (7)', 'Both started at the same time', and 'Uncertain'. Navigation buttons labeled 'Prev Task' and 'Next Task' are located at the bottom of this panel.

The right panel features a directed graph where each node represents an event mention from the text, labeled with the event name and its unique identifier in parentheses (e.g., 'crash (5)'). Nodes are circular and colored red, with small gray icons resembling a gear or starburst near some nodes, possibly indicating interaction points or status. The graph displays temporal relations between events using labeled edges. Solid black lines represent 'BEFORE' relations, dashed gray lines represent 'EQUAL' relations, and dotted gray lines represent 'UNCERTAIN' relations. The labels are written in blue text along the edges. For example, 'investigation (41)' has solid edges pointing to 'crash (5)', 'scattered (36)', and 'recovered (24)', all labeled 'BEFORE', while it has a dotted edge to 'killed (1)' labeled 'UNCERTAIN'. The graph also includes a thick purple line connecting 'investigation (41)' to 'search (7)', labeled with '???' to indicate an unresolved or pending annotation.

Connections and arrows are directional, originating from the source event and pointing to the target event. The graph is interactive, allowing annotators to click on two nodes to select a relation, which then updates the graph with the chosen label. The visual representation dynamically reflects the annotator's progress, with newly annotated relations appearing in the graph. The top-right corner of the interface contains buttons for file operations: 'Choose File', 'Load', 'Save', and 'Export', with the current file named '131d3_temporal.json'. The overall structure supports a workflow where annotators read the context, identify event pairs, select the appropriate temporal relation from the options, and see the result immediately reflected in the graph visualization.
