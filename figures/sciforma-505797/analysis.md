# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

4D Gaussian Splatting: Modeling Dynamic Scenes with Native 4D Primitives — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20720

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic illustration of a spatio-temporal 4D volume learning framework for dynamic scenes, divided into two main parts: (a) an overview of the scene processing pipeline and (b) a detailed breakdown of the 4D Gaussian Splatting model.

In part (a), the global layout shows a left-to-right workflow starting with a 'Dynamic scene' depicted by multiple poses of a human figure in motion, representing temporal variation. This is followed by a 'Sampling' step, indicated by a black arrow, leading to a 'Static scene' showing a single pose of the same figure. The next stage is 'Projection', also marked by a black arrow, resulting in a 2D 'Image' rendered on a plane. A curved purple arrow labeled 'Blending' connects the image back to the static scene, suggesting a feedback or rendering loop.

Part (b) details the underlying 4D Gaussian Splatting mechanism. On the left, '4D Gaussians' are shown as ellipsoidal shapes arranged vertically along a dashed axis labeled 't' (time), indicating temporal evolution. Each 4D Gaussian is represented with a grid mesh and colored gradients (blue to red), and includes a small inset showing x-y-z spatial coordinates at the base. These 4D Gaussians are grouped into two vertical stacks, one outlined in orange and the other in blue, suggesting different temporal sequences or conditions.

A black arrow labeled 'Condition' points from the 4D Gaussians to '3D Gaussians', which are depicted as single ellipsoidal shapes with grid meshes and similar color gradients. One 3D Gaussian is outlined in orange, another in blue, corresponding to the conditioning from the respective 4D stacks. From here, a black arrow labeled 'Splattting' leads to '2D Gaussians', illustrated as blurred, overlapping circular patches with green-yellow centers and fading edges, representing projected planar Gaussians in the image plane.

The visual modules use consistent shapes—ellipsoids for Gaussians—and colors (blue-red gradients) to denote spatial and temporal properties. Text labels are placed directly beneath each module for clarity. The connections between modules are primarily straight black arrows indicating forward processing steps, except for the curved purple 'Blending' arrow in part (a), which implies a compositional or rendering phase. The overall structure emphasizes a hierarchical transformation from dynamic 4D representations through conditional sampling and projection to final 2D image rendering.
