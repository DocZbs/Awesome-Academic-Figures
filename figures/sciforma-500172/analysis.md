# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Heterogeneous Graph Transformer for Multiple Tiny Object Tracking in RGB-T Videos — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10861

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall framework of a Heterogeneous Graph Transformer-based tracking method, structured into four main stages: (a) Feature Embedding and Graph Generation, (b) Information Integration, (c) Tracking & Detection, and (d) Tracklet Generation. The global layout is a left-to-right pipeline, starting from input image pairs at time steps k-1 and k, progressing through modular processing blocks, and ending with output tracks at time k. Each stage is visually demarcated by labeled sections along the bottom axis.

In stage (a), two image pairs — one visible and one thermal — are provided at consecutive time steps k-1 and k. These images feed into an 'Embedding Layer' composed of two parallel branches: a green rectangular block for visible modality and a blue rectangular block for thermal modality. Each branch applies a 'Flatten' operation to produce feature representations D_k^v and D_k^t for time k, and similarly D_{k-1}^v and D_{k-1}^t for time k-1. From the previous time step’s features, 'Nodes Sampling' generates node representations T_{k-1}^v (green circle) and T_{k-1}^t (blue circle). These nodes, along with the current flattened features, are fed into a 'Spatial Confined Heterogeneous Graph Generator', which constructs a heterogeneous graph G^a. Position encoding symbols (clock icons) are applied to the flattened features before graph generation.

Stage (b), 'Information Integration', involves a yellow 'Heterogeneous Graph Transformer Encoder' and an orange 'Heterogeneous Graph Transformer Decoder'. The encoder takes G^a as input and outputs detection features Ŝ_k^v and Ŝ_k^t. The decoder receives the encoder's output and produces tracking features Ŝ_k^v and Ŝ_k^t. Both outputs undergo 'Post Process' operations to yield Ŝ_D^v and Ŝ_D^t.

In stage (c), 'Tracking & Detection', the tracking features are processed via 'Linear Regression' to generate predicted tracking offsets Ť_k^v and Ť_k^t. Simultaneously, the detection features undergo 'Post Process' to produce detection proposals Ŝ_D^v and Ŝ_D^t. An 'IOU Match' operation connects the tracking and detection outputs, enabling association.

Stage (d), 'Tracklet Generation', includes two parallel 'Edge Regression' modules producing edge features A^v and A^t. These are followed by 'Tracklet-Detection Association' blocks generating associated tracklets X̂_k^v and X̂_k^t. The final outputs, X_k^v and X_k^t, are refined using a 'ReDet' module before being presented as 'Tracks at k', depicted as annotated images showing tracked objects with bounding boxes. The entire pipeline concludes with the output image pair, mirroring the input format but now containing tracked instances.
