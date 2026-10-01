# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Physics-Based Adversarial Attack on Near-Infrared Human Detector for Nighttime Surveillance Camera Systems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13709

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for generating 2D segmentation maps from 3D human body models using the SMPL framework. The global layout is structured as a top-down workflow: starting from a standard SMPL human body model on the top left, progressing through random variations in motion and identity, then rendering with random camera poses, and finally producing 2D segmentation maps from arbitrary viewpoints at the bottom left.

In the top-left section, a 3D human body model is shown in a T-pose, segmented into 31 distinct regions using a color-coded scheme (e.g., purple, green, blue, yellow, red, etc.), each representing a semantic body part. Text labels indicate '6890 Vertices' and '31 Segments', with an arrow pointing downward from vertices to segments, emphasizing the segmentation process. This model is labeled 'Standard SMPL Human Body'.

An arrow labeled 'Random Motions' and 'Random Identities' points rightward to a group of three 3D human figures in dynamic poses (e.g., walking, gesturing), demonstrating how the same segmentation is preserved across different body shapes and motions. The colors of the segments remain consistent across these varied instances, highlighting the homeomorphism property of SMPL-based models.

From this group of 3D models, a thick black downward arrow leads to a rounded rectangular box labeled 'Rendering'. Below this box, another arrow points upward from a 3D coordinate grid labeled 'Random Camera Pose', which contains multiple red triangular frustums scattered throughout the space, symbolizing diverse camera positions and orientations.

A thick black leftward arrow connects the 'Rendering' box to a large rectangular panel at the bottom left, titled '2D Segmentation Maps From Arbitrary Views'. This panel displays a grid of 12 small images against a black background, each showing a 2D projection of a human figure in a different pose and view (front, side, back, angled, distant, close-up), with the same color-coded segmentation preserved. These images represent the output of the rendering process under varying camera extrinsics.

The entire diagram visually conveys the methodological flow: starting from a standardized 3D model with predefined vertex segmentation, generating diverse 3D instances via random motions and identities, rendering them from random camera poses, and finally obtaining consistent 2D segmentation maps suitable for training or evaluation in computer vision tasks.
