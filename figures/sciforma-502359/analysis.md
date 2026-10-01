# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLDG: Contrastive Learning on Dynamic Graphs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14451

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Contrastive Learning for Dynamic Graphs (CLDG), designed to maintain temporal translation invariance across local and global graph structures. The overall layout is a horizontal pipeline enclosed within a rounded rectangular boundary, progressing from left to right. On the far left, a sequence of stacked graph representations is shown, symbolizing dynamic graphs over time; the most recent graph is highlighted in red, while earlier ones are in white or light gray, with a curved arrow labeled 't' indicating the temporal progression. This sequence feeds into a vertical rectangular module labeled 'sampling', which generates two distinct graph views: one in purple and one in pink, both depicted as small networks with nodes connected by edges, where the central node is shaded darker than the others. These two views are aligned vertically, with a dashed vertical arrow between them indicating their correspondence or similarity, suggesting they are sampled from different time points but represent the same underlying structure.

From each view, a solid arrow leads to a vertically oriented rectangular block labeled 'encoder'. Both encoders are connected by a dashed bidirectional arrow labeled 'shared', indicating they share the same weights. The outputs of these encoders are then passed to a central vertical block labeled 'readout', which aggregates information to produce neighborhood embeddings. From the readout, two solid arrows branch out—one to each of two identical vertical blocks labeled 'projection'. These projection heads are also connected by a dashed bidirectional arrow labeled 'shared', signifying shared parameters. Each projection head outputs a vector representation, visualized as a stack of N horizontal bars (labeled 0, 1, ..., N−1), with the top stack in purple and the bottom in pink, corresponding to the respective views.

Finally, a dashed bidirectional arrow labeled 'contrastive loss' connects the two output stacks, indicating that the model computes a contrastive loss between the projected embeddings of the two views to enforce temporal consistency. The entire process is designed to learn robust node representations by contrasting positive pairs (same graph structure at different times) against negative pairs, thereby preserving temporal translation invariance. The figure uses consistent visual cues: rectangular modules for processing steps, colored graph views for differentiation, and dashed lines for shared weights or conceptual relationships, while solid arrows denote data flow.
