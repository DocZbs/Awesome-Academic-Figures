# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AURORA: Automated Unleash of 3D Room Outlines for VR Applications — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11033

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive pipeline for generating room outline options from user-captured RGB-D images. The global layout is structured as a top-down flowchart with two main processing branches: one for geometric foundation modeling and another for 3D reconstruction and segmentation, both converging toward the final output of virtual and hybrid room outlines. On the left, a green human icon labeled 'capture' feeds color and depth images into the system. These images are processed through a vertical blue module labeled 'GS-based SLAM', which outputs 3D Gaussians with camera poses, depicted as a top-down view of a room with scattered points. This is followed by a 'surface reconstruction' module, refining the 3D Gaussians into a more coherent, textured 3D representation shown as a top-down view with smoother surfaces. A feedback loop from the refined 3D Gaussians connects upward to a 'Geometric foundation model' box, which generates normal images—three color-coded semantic views of the room (e.g., red for table, green for chair, purple for wall)—used to enhance surface reconstruction. The refined 3D Gaussians are then converted into a point cloud via a light green module labeled 'GS to point cloud conversion'. This point cloud undergoes '3D instance segmentation', separating components into distinct colored clusters representing walls, floors, and furniture. The segmented data is split: walls and floors feed into a purple 'envelope extraction' module, producing a clean floor plan with surrounding walls; furniture segments are matched against a '3D database' via a yellow 'model registration' module, yielding CAD models. These two outputs are combined to generate two outline options: 'virtual outline', where the entire room is replaced with CAD models, and 'hybrid outline', which blends reconstructed geometry with selected CAD models. A bidirectional arrow labeled 'choose' connects these outputs back to the user, indicating interactive selection. The visual modules are color-coded: blue for SLAM and reconstruction, green for conversion and segmentation, purple for envelope extraction, and yellow for model registration. All connections are gray arrows, with some forming feedback loops or branching paths, clearly delineating the data flow and decision points in the pipeline.
