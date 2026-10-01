# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interact with me: Joint Egocentric Forecasting of Intent to Interact, Attitude and Social Actions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16698

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct architectural designs for hierarchical classifiers, labeled (a) Parallel, (b) Tree, and (c) Chain (default), each enclosed within a light beige dashed rectangular boundary. All three share a common leftmost component: a large gray parallelogram representing an input or feature extractor module, followed by a vertical stack of small white squares symbolizing a sequence of features or embeddings. From this feature stack, different branching patterns emerge to predict three hierarchical output classes: Intent, Attitude, and Action, each represented by a vertical column of white squares with corresponding labels to their right.

In design (a) Parallel, the feature stack connects directly via separate arrows to three independent output columns—Intent, Attitude, and Action—indicating parallel prediction paths with no dependency between outputs. Each output column is of equal height, suggesting uniform depth or dimensionality.

Design (b) Tree shows a hierarchical structure where the feature stack first feeds into the Intent output column. Then, from the Intent column, two branches emerge: one leading to the Attitude column and another to the Action column. This implies that predictions for Attitude and Action are conditioned on the Intent prediction, forming a tree-like dependency.

Design (c) Chain (default) illustrates a sequential chain: the feature stack connects to Intent, which then connects to Attitude, which in turn connects to Action. Each output column is fed only by the previous one in the sequence, indicating a strict causal or conditional flow from Intent → Attitude → Action. This design is marked as 'default', suggesting it is the primary or recommended configuration.

All connections are depicted as solid black arrows pointing from source to target, indicating data or prediction flow direction. The visual elements are minimalistic, using consistent shapes and colors (gray parallelogram, white square blocks, black lines, and black text labels) to emphasize structural differences across the three architectures. The figure’s purpose is to compare these hierarchical classification strategies, highlighting variations in dependency modeling between predicted classes.
