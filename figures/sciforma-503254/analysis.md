# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ExCellGen: Fast, Controllable, Photorealistic 3D Scene Generation from a Single Real-World Exemplar — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16253

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-phase pipeline for interactive 3D content creation using learned primitives, divided into a Preparation phase and an Authoring phase, with corresponding user workflows shown in the top row and technical components in the bottom row. The layout is horizontally segmented by a dashed vertical line separating the two phases, with each phase containing left-to-right workflows. The top row illustrates the user-facing process, while the bottom row details the underlying technical mechanisms.

In the Preparation phase, the user workflow begins with 'Scene capturing', depicted as a 3D rendered flower pot scene with colorful flowers and foliage. This is followed by 'Suggestive annotation/selection', where the user selects a region of interest (shown with blue and green dashed boxes highlighting specific flowers), leading to 'Brush creation', represented by a 3x3 grid of black squares symbolizing a sparse voxel structure. Below, the technical components show that the captured scene is processed via '3DGS + DINO features'—the 3D Gaussians are augmented with DINO visual features, illustrated by a split image showing the original scene and a feature-mapped version. From this, 'Sparse voxels' are generated at both coarse and target resolutions, depicted as grids with the target resolution containing colored voxels representing learned features. These sparse voxels are then used for 'GCA training', shown as a neural network diagram with interconnected gray nodes, indicating a graph-based conditional autoencoder trained to map coarse to fine voxel representations.

The Authoring phase begins with 'User conditioning', where the user provides input via three modalities: 'Exemplar brush' (the previously created 3x3 grid), 'Mesh' (a hexagonal mesh icon), or 'Voxels' (stacked cube icons). These inputs are converted into 'Coarse voxels', represented as a larger grid of black squares. The technical component shows this coarse grid being processed by 'GCA' to produce 'Featurized voxels', depicted as colorful, textured cubes. These are then refined through a 'Patch Consistency Step', which aligns them with the original exemplar's 3D Gaussians, resulting in a final output of '3D Gaussians' matching the exemplar’s appearance. The user workflow in this phase shows the authored content being composited into a larger scene (a brick wall background with trees and flowers), with tools labeled 'Primitive generation' (paintbrush icon) and 'Scene composition' (crosshair icon) indicating interactive placement and arrangement.

Connections between modules are indicated by arrows: solid black arrows denote primary data flow, green curved arrows indicate feedback or feature guidance from the captured scene to sparse voxel creation, and a gray arrow connects the authored primitive back to the scene composition. The figure uses consistent visual metaphors: 3D Gaussians are shown as stylized flowers, voxels as grids or cubes, and neural networks as node graphs. Colors are used to differentiate stages (e.g., purple/blue for features, green/yellow for flowers) and highlight selected regions. Text labels are placed directly beneath or beside each module for clarity.
