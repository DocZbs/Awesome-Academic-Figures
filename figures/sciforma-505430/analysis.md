# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

STAYKATE: Hybrid In-Context Example Selection Combining Representativeness Sampling and Retrieval-based Approach -- A Case Study on Science Domains — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20043

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an experimental data management framework for active learning or semi-supervised learning, structured around three main components: a Training Set, an Unlabeled Data Pool, and a Labeled Data Pool, with associated processing modules for sampling and model fine-tuning. The global layout is horizontal, progressing from left to right, with data flow indicated by arrows connecting cylindrical data pools to processing units.

On the far left, the 'Training Set (D_train)' is represented as a large orange cylinder filled with orange circles, symbolizing labeled data instances. This set is connected bidirectionally via thick black double-headed arrows to the central 'Unlabeled Data Pool', depicted as a teal cylinder containing teal triangles, representing unlabeled data points. Below this, a smaller orange cylinder labeled 'Labeled Data Pool (170 ~ 200 sentences)' contains orange circles, indicating a subset of labeled data extracted from the larger training set or acquired through labeling.

From the Unlabeled Data Pool, a teal arrow leads to a 'Representativeness Sampling' module, visually represented by two blue interlocking gears, suggesting a computational process for selecting representative samples from the unlabeled pool. From the Labeled Data Pool, two separate orange arrows extend to two distinct model modules: one pointing to a green rectangular box labeled 'BERT', and another to a gray rectangular box labeled 'kNN'. These indicate that the labeled data is used to fine-tune these models, as explicitly stated by the label 'Fine-tune' above the arrows.

The visual attributes are consistent and color-coded: orange for labeled data and related components, teal for unlabeled data, green for BERT, gray for kNN, and blue for the sampling mechanism. Shapes include cylinders for data pools, circles for labeled data points, triangles for unlabeled data points, and rectangles for models. Text labels are placed directly above or below each component for clarity. The overall structure implies a workflow where the labeled data pool supports model fine-tuning, while the unlabeled data pool undergoes representativeness sampling, possibly to select new data for labeling or to guide the learning process. The bidirectional arrows between the Training Set and Unlabeled Data Pool suggest iterative data exchange, typical in active learning scenarios.
