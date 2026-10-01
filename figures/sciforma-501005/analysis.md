# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SGPT: Few-Shot Prompt Tuning for Signed Graphs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12155

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates four distinct scenarios for path classification in signed graphs, focusing on the transition from an initial path state to a resulting path type based on the sign of the final edge. The global layout consists of four horizontal rows, each representing a separate case. Each row contains a sequence of circular nodes connected by edges, followed by a labeled arrow indicating an action ('Hold' or 'Change'), which leads to a rectangular output box denoting the resulting path type ('Balance Path' or 'Unbalance Path').

In each row, the path begins with a source node labeled 's', followed by intermediate nodes 'i' through 'j' (represented by ellipsis), and ends with a target node 't'. The edges between these nodes are either marked with '+' (green) or '-' (red), indicating positive or negative signs. The first two rows are enclosed in rounded rectangles: the top one is green-labeled 'Balanced', and the second is red-labeled 'Unbalanced'. The third and fourth rows follow the same structure but are labeled 'Balanced' and 'Unbalanced' respectively, with different edge signs.

Visual modules include circular nodes for graph vertices, colored edges for signed relationships, and rectangular output boxes for path classification. The green color scheme (light teal borders and text) denotes balanced states or outcomes, while red indicates unbalanced states. The labels 'Balanced' and 'Unbalanced' appear below the initial path segments, directly beneath the enclosing rounded rectangle. The action labels 'Hold' and 'Change' are placed above the arrows connecting the path to the output box.

Connections and arrows show the logic flow: In the first row, a balanced path (all '+' edges) with a '+' edge to 't' results in a 'Hold' action leading to a 'Balance Path' output. In the second row, an unbalanced path (with a '-' edge between 'j' and 't') triggers a 'Change' action, also leading to a 'Balance Path'. The third row shows a balanced path with a '-' edge to 't', causing a 'Change' action that results in an 'Unbalance Path'. The fourth row presents an unbalanced path with a '+' edge to 't', where a 'Hold' action leads to an 'Unbalance Path'. This structure demonstrates how the sign of the last edge and the initial balance status determine whether the path remains unchanged or is modified, and what the resulting path type becomes.
