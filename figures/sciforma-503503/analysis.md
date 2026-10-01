# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interact with me: Joint Egocentric Forecasting of Intent to Interact, Attitude and Social Actions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16698

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of SocialEgoNet, a deep learning framework designed for analyzing human behavior in video sequences by extracting spatiotemporal features from keypoint data. The global layout is left-to-right, depicting a sequential pipeline starting from raw video frames at time steps t=1 to t=T, progressing through multiple processing stages, and culminating in a hierarchical classification output. On the far left, two example video frames are shown — one labeled t=1 and another t=T — representing the input video clip. These frames are processed by AlphaPose, a pose estimation model represented as a gray rectangular box with black text, which outputs whole-body keypoints. The keypoints are visually segmented into three components: face (orange outline), body (green outline), and hands (pink outline), each enclosed within dashed-line boxes. These keypoint sets are grouped into two stages: the first stage has node dimension 3, and the second stage has node dimension 16, indicating an increase in feature representation complexity.

From the AlphaPose output, the face, body, and hand keypoints are separately fed into three distinct Graph Convolutional Networks (GCNs), each represented as a colored rectangle: GCN_face (orange), GCN_body (green), and GCN_hands (magenta). Each GCN processes its respective keypoint set and outputs a higher-dimensional feature representation. The outputs from these GCNs are then concatenated — indicated by orange, green, and magenta arrows converging into a single dashed box labeled 'Node dimension: 16' — forming a unified feature vector per frame. This concatenation step is repeated for each frame in the sequence, as suggested by the vertical ellipsis between the two processing stages.

The concatenated features from each frame are then passed into a Multi-Head Self-Attention (MSA) module, depicted as a blue rectangle. Two MSA modules are shown, connected by a double-headed arrow labeled 'share weights', indicating that they share parameters across the sequence. The MSA modules process the spatial features and produce refined representations. The outputs from both MSA modules are combined via element-wise addition (indicated by ⊕ symbols) and then concatenated across all frames to form a sequence of spatiotemporal features.

This sequence is fed into a bidirectional Long Short-Term Memory (LSTM) network, shown as a dark gray rectangle, which captures temporal dependencies across the video frames. The LSTM’s output is then passed to a Hierarchical Classifier, represented as a beige rounded rectangle containing three sub-classifiers: Intent (Interacting 97%), Attitude (Negative 92%), and Action (Punch 99%). These are visualized as stacked bar-like structures with labels and confidence percentages, indicating the model’s predictions on three behavioral dimensions. The entire pipeline is structured to progressively extract spatial features using GCNs, fuse them with attention mechanisms, model temporal dynamics with LSTM, and finally classify behavior hierarchically.
