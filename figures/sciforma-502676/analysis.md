# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FolAI: Synchronized Foley Sound Generation with Semantic and Temporal Alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a block diagram of a video modeling pipeline designed to predict RMS (Root Mean Square) values from video input. The global layout is structured vertically and horizontally, with two main input streams on the left converging into a central processing module on the right. On the lower left, a set of RGB frames is shown as a collection of three sequential images depicting a hand striking a wooden table with a stick. These RGB frames are fed into a blue rounded rectangle labeled 'RAFT', which computes optical flow. The output of RAFT, labeled 'Optical Flow', is represented as a grayscale visualization showing motion vectors across the frame, depicted as overlapping patches with directional gradients. This optical flow output is then sent to the top right component, a light purple rounded rectangle labeled 'TC-CLIP'. Simultaneously, the original RGB frames are also directly connected to TC-CLIP, indicating that both visual content and motion information are processed together. TC-CLIP outputs two distinct signals: one is a color bar transitioning from red through green to blue and back to red, representing a temporal or spectral feature map; the other is a gray gradient bar, likely representing a confidence or intensity map. These two outputs are combined and fed into a larger, darker purple rounded rectangle labeled 'Video Model'. The Video Model processes these features and produces a time-series output at the bottom right, labeled 'Predicted RMS', which is a blue line graph with periodic peaks and troughs, suggesting rhythmic or event-based prediction over time. All connections are represented by solid black arrows indicating the direction of data flow. The diagram uses consistent visual attributes: input data is shown in rounded rectangular containers with illustrative images, processing modules are rounded rectangles in shades of blue and purple, and the final output is a line graph. Text labels are placed below or beside each component for clarity. The overall structure follows a feed-forward pipeline where RGB frames and derived optical flow are fused via TC-CLIP before being processed by the Video Model to generate the predicted RMS signal.
