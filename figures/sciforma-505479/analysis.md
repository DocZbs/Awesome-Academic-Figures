# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Cross-Modal Mapping: Mitigating the Modality Gap for Few-Shot Image Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20110

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the concept of triplet loss, a common technique in metric learning used to learn embeddings where similar items are close in space and dissimilar items are far apart. The diagram is divided into two main parts, connected by a dashed arrow indicating a transformation or optimization process.

In the left part, there are three circular nodes representing features: an 'Anchor' node (dark gray), a 'Positive' node (light green), and a 'Negative' node (light pink). Each node is a ring-shaped circle with a white center, and they are connected by solid black lines to the Anchor, forming a simple triangular structure. The Anchor represents an image feature, the Positive represents the corresponding correct textual feature, and the Negative represents the closest incorrect textual feature, as described in the caption.

The right part shows the same three nodes after applying the triplet loss optimization. The positions of the Positive and Negative nodes have shifted relative to the Anchor. A dashed vertical line is drawn near the Negative node, and another dashed vertical line is drawn near the Positive node, indicating a boundary or margin. Between these two dashed lines, a bidirectional dashed arrow labeled 'Margin' points from the Positive to the Negative, illustrating the desired separation between the positive and negative samples. This margin enforces that the distance from the Anchor to the Positive should be smaller than the distance from the Anchor to the Negative by at least this margin value.

The overall layout is horizontal, with the initial state on the left and the optimized state on the right, connected by a dashed rightward arrow. The visual modules are consistent in shape (ring-shaped circles) but differ in color to distinguish roles: dark gray for Anchor, light green for Positive, and light pink for Negative. All labels are placed directly below or beside their respective nodes in black text. The connections are solid black lines in the left diagram and remain solid in the right, while the margin and boundary lines are dashed gray, emphasizing their conceptual nature rather than direct feature connections. The figure effectively conveys the goal of triplet loss: to pull the positive sample closer to the anchor and push the negative sample farther away, ensuring a minimum margin between them.
