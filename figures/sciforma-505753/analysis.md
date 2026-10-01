# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NetFlowGen: Leveraging Generative Pre-training for Network Traffic Dynamics — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20635

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the feature representation process for a model named {
ame}, divided into two main components: 'Traffic + Time' on the left and 'Metadata' on the right, separated by a plus sign indicating their combination. The global layout is structured as a two-column diagram, each enclosed in a rounded rectangle, representing distinct processing pipelines that converge into a unified feature representation.

In the 'Traffic + Time' section, continuous traffic features are first processed through a discretization step. This involves converting raw continuous values (e.g., 0, 10, 15, 0, 0, 0, 1e2, 1e8) into discrete bins, represented as integers (e.g., 0, 1, 3, 0, 0, 0, 5, 7), using color-coded boxes (purple, green, gray, red) to denote different feature types or ranges. These discretized values are then mapped to one-hot encoded vectors (e.g., 100000000, 010000000) of length 10 times the number of traffic features, shown as long horizontal bars with colored segments. Similarly, time features are discretized into components: day of week (7), day of month (31), minute (60), and hour (24), totaling 122 dimensions. A sample timestamp 'Mon, Dec 04, 17:46' is shown feeding into this discretization, resulting in a one-hot encoded vector of length 122, depicted as a purple bar. Both the discretized traffic and time one-hot encodings are then fed into a shared Linear Layer, represented as a gray rectangular block above, which projects them into a common fixed-size continuous vector space.

In the 'Metadata' section, two discrete categorical features — 'Node' and 'Customer' — are processed using conventional embedding techniques. Each is represented as a horizontal bar composed of multiple small colored boxes (yellow for Node, blue for Customer). These IDs are used to perform a lookup operation in corresponding trainable embedding tables, depicted as grid-like matrices below each ID bar. The lookup arrows point from the ID bar to the respective row in the embedding table, indicating retrieval of an embedded vector. The output of these lookups is a dense vector representation for each metadata type.

The overall workflow follows a parallel structure: continuous features (traffic and time) undergo discretization followed by one-hot encoding and linear projection, while discrete metadata features use direct lookup-based embeddings. The outputs from both pathways are combined (as indicated by the '+' symbol) to form the final input feature vector for the model. The visual attributes include color-coding for feature types (purple, green, gray, red for traffic; yellow for Node; blue for Customer), labeled boxes for clarity, and directional arrows showing data flow. Text annotations specify dimensions (e.g., '10 x # of traffic features', '7 + 31 + 60 + 24') and operations ('Discretization', 'lookup').
