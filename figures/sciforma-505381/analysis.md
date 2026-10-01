# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Not all Views are Created Equal: Analyzing Viewpoint Instabilities in Vision Foundation Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19920

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the concept of viewpoint stability in a featurizer for 3D scene analysis. The global layout is left-to-right, depicting a pipeline: from a 3D scene captured from multiple viewpoints, through a featurizer module, to a 3D feature space representation. On the far left, under the label '3D Scene', a central brown barstool is shown within a black circular boundary, symbolizing the object of interest. Around this circle, six camera icons (five blue, one red) are arranged to represent different viewing angles. The blue cameras indicate small perturbations in camera position or orientation, while the red camera represents a viewpoint that leads to instability. Corresponding to these cameras, six 2D images of the stool are displayed in boxes—five with blue borders (stable views) and one with a red border (unstable view), showing slight variations in perspective. An arrow points from the 3D scene to the next module labeled 'Featurizer', which is represented as a graph with seven interconnected nodes of varying colors (blue, green, purple, orange, yellow), symbolizing a neural network or feature extraction model. Another arrow leads from the Featurizer to the rightmost section titled 'Feature Space', depicted as a 3D coordinate system with axes pointing up, right, and down-left. In this space, clusters of light blue circles represent stable features, grouped closely together, while a single red circle lies far from them, representing an unstable feature. The vertical axis is labeled 'Stable' in blue, and the horizontal axis is labeled 'Unstable' in red, emphasizing the contrast. The figure visually conveys that small changes in viewpoint (blue cameras) produce small changes in feature space (clustered blue points), indicating stability, whereas a specific viewpoint (red camera) causes a large deviation in feature space (isolated red point), indicating instability. This demonstrates the featurizer's sensitivity to certain viewpoints, which is critical for robust 3D scene understanding.
