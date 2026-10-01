# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLDG: Contrastive Learning on Dynamic Graphs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14451

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates four candidate timespan view sampling strategies for Contrastive Learning on Dynamic Graphs (CLDG), organized into two rows and two columns, each depicting a different approach to generating temporal views from dynamic graph data. The global layout is divided into two main sections: the top row shows the underlying graph structures and their evolution over time, while the bottom row presents corresponding temporal sampling patterns using time-axis diagrams.

In the top-left panel, the graph structure evolves over time, with nodes represented as circles (blue, gray, or orange) connected by edges. The orange node appears to be a central or special node in the first graph, which transitions to a more distributed structure in subsequent graphs. The top-right panel shows a similar evolution but with a different initial configuration, where the orange node is again prominent, followed by a shift to a more uniform gray-node network. These panels visually represent how dynamic graphs change over time, with Δt denoting a time interval between snapshots.

The bottom row contains four time-series diagrams, each labeled 'View 1' and 'View 2' along vertical axes, with horizontal axes marked 't' for time. Each diagram spans a time window Δt, indicated by a bracket above the axis. In the bottom-left pair, light blue boxes represent sampled graph views at specific time points; these are aligned vertically across View 1 and View 2, suggesting synchronized sampling. The boxes contain small embedded graph icons, indicating that each sample corresponds to a graph snapshot. The two diagrams in this pair show different alignment patterns: the left one has overlapping samples, while the right one has offset samples, implying different temporal sampling strategies.

The bottom-right pair uses colored boxes (light blue, purple, red) to represent sampled views. The left diagram shows overlapping samples in both views, with some time intervals having different colors, possibly indicating different types of views or features. The right diagram shows non-overlapping, staggered samples, with red and purple boxes appearing in alternating positions, suggesting an asynchronous or shifted sampling strategy. The color coding may differentiate between view types or feature representations.

Connections and arrows are minimal, primarily used to indicate the direction of time (rightward arrows on t-axes) and to mark the time interval Δt. There are no explicit connecting lines between the top and bottom panels, but the visual correspondence implies that the time-series diagrams below correspond to the graph evolution shown above. The figure as a whole demonstrates various ways to sample temporal views from dynamic graphs for contrastive learning, emphasizing different temporal alignments and sampling offsets between views.
