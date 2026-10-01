# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

2by2: Weakly-Supervised Learning for Global Action Segmentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12829

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a method for global action segmentation using a Siamese-style network architecture trained on video pairs with binary labels indicating whether the videos belong to the same activity. The overall layout is divided into two main sections: the left side shows the input and training process, while the right side presents the output of global action segmentation.

On the left, two video pairs are shown, each consisting of multiple frames from different videos. The top pair is labeled 'REPOT' and features a person engaged in plant-related activities; the bottom pair is labeled 'Changing_tire' and includes scenes of car maintenance. Each video pair is processed by a module labeled '2by2', which represents a Siamese network comparing the two videos. This comparison is guided by a 'Triadic loss' function, depicted as a triangle with three levels: 'Activity-level', 'Video-level', and 'Global-level'. These levels indicate the hierarchical structure of the loss, which enforces intra-video discrimination, inter-video similarity, and inter-activity separation to facilitate clustering.

The '2by2' module outputs embeddings that are then visualized on the right side under the heading 'Global action segmentation'. Here, a scatter plot displays clustered points in various colors, representing different action classes. Each cluster corresponds to a specific activity, such as 'REPOT', 'Changing_tire', and 'CPR', as indicated by colored bars below the plot. These bars represent temporal segmentations of the activities, with distinct color blocks denoting different phases or sub-actions within each activity. For example, 'Changing_tire' is shown with multiple color segments, suggesting a sequence of steps. The visualization demonstrates how the model groups similar actions across different videos into coherent clusters, enabling fine-grained segmentation of activities globally.

Arrows connect the '2by2' module to the triadic loss and then to the global segmentation output, indicating the flow of information and training signal. The large black arrow between the left and right sections emphasizes the transformation from video pair comparison to global action clustering. The figure effectively communicates a self-supervised learning framework where video pairs are compared to learn discriminative representations, which are then used to segment and cluster actions across diverse video content.
