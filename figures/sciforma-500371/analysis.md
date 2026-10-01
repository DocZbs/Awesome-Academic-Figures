# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GEM: A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Ego-Motion, Object Dynamics, and Scene Composition Control — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11198

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a method for translating sparse DINOv2 features from one frame to another using optical flow during training. The global layout is horizontal, showing a left-to-right data transformation process. On the left, a black parallelogram labeled 'z_{t_i}' represents the feature space of frame t_i. Within this space, a cluster of colorful geometric shapes—triangles, circles, and crosses in hues of red, green, blue, yellow, orange, and pink—symbolizes sparse DINOv2 features. These features are connected via dashed lines of matching colors to five cylindrical nodes below, labeled collectively as 'identity embeddings'. Each cylinder is colored differently (blue, orange, yellow, green, pink), indicating distinct embedding vectors associated with each feature type. In the center, above the transformation path, a field of red dashed arrows radiates outward, labeled 'optical flow between x_{t_i} and x_{\tau_i}', representing the motion field computed between two frames. A thick black arrow labeled 'warp' points from this optical flow field toward the right-hand side, indicating the warping operation applied to the features. On the right, another black parallelogram labeled 'z_{\tau_i}' represents the feature space of frame \tau_i. Inside it, a small cluster of multicolored pixels—corresponding to the warped features—is shown, positioned to reflect the displacement induced by the optical flow. The dashed lines from the identity embeddings curve upward and connect to the warped features in z_{\tau_i}, preserving the color correspondence and illustrating how each feature's identity is maintained during the spatial transformation. The overall structure emphasizes a spatial-temporal alignment process where sparse features are moved across frames using optical flow while retaining their semantic identity through embedded representations.
