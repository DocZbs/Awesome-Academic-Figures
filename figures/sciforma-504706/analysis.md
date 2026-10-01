# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Simultaneously Recovering Multi-Person Meshes and Multi-View Cameras with Human Semantics — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18785

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating the pipeline of a method designed to jointly recover camera parameters and human meshes from detected human semantics, leveraging a motion prior. The global layout is structured as a two-row horizontal workflow, with the top row representing sequential initialization steps and the bottom row showing inputs converging into a central optimization module. All modules are represented as rounded rectangles with gray borders; most have a light peach background, while the central 'Simultaneous Optimization' module stands out with a salmon-orange fill, emphasizing its role as the core computational stage.

In the top row, the process begins with '2D/3D Pose Detection', which feeds into 'Intrinsics Initialization'. This step then passes to 'Extrinsics Initialization', completing the initial parameter setup. From here, an arrow descends to 'Pose Association' in the bottom row, indicating that extrinsic initialization informs pose correspondence across frames or views.

In parallel, the bottom row starts with 'Motion Prior', which represents prior knowledge about human motion dynamics. This module connects directly to the central 'Simultaneous Optimization' block. Additionally, 'Pose Association' also feeds into this same optimization module, forming a convergence point where both motion constraints and pose correspondences are integrated.

All connections are depicted using solid gray arrows with triangular heads, indicating unidirectional data flow. The arrows clearly define the dependency structure: pose detection initiates the chain, leading through intrinsic and extrinsic initialization, which then enables pose association. Simultaneously, the motion prior is introduced independently and combined with pose association results within the final optimization stage. The figure visually emphasizes that the 'Simultaneous Optimization' module integrates multiple inputs—pose associations derived from initialized camera parameters and the motion prior—to achieve joint refinement of camera parameters and human mesh reconstruction. The caption clarifies that this architecture enables precise recovery of both camera parameters and human meshes by leveraging semantic pose detections and motion priors.
