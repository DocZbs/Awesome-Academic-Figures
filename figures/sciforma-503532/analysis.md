# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EasyVis2: A Real Time Multi-view 3D Visualization System for Laparoscopic Surgery Training Enhanced by a Deep Neural Network YOLOv8-Pose — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16742

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the concept of back-projection error in a multi-view 3D reconstruction setup involving two cameras. The global layout is symmetric and horizontally arranged, with 'Camera 1' on the right and 'Camera 2' on the left, both represented as trapezoidal shapes symbolizing image planes. In the center, a 3D coordinate system is depicted with axes pointing upward and forward, labeled '3D Space', where a single blue sphere represents the 'Reconstructed 3D Point'.

Each camera plane contains two labeled points: a purple oval labeled 'Detected 2D Point' and a smaller blue oval labeled 'Back-Projected 2D Point'. These points are positioned near the top edge of each trapezoid, indicating their location within the respective image plane.

The visual modules include the two camera representations, the central 3D point, and the labeled 2D points. The reconstructed 3D point is shown as a solid blue circle, while the detected and back-projected 2D points are represented as overlapping ovals—purple for detected and blue for back-projected—to visually distinguish them. Text labels are placed adjacent to these elements for clarity.

Connections and arrows depict the reconstruction and back-projection process. From each camera’s detected 2D point, a curved purple arrow labeled '2D-3D Reconstruct' arcs toward the central 3D point, indicating the triangulation or reconstruction step from 2D observations to 3D space. Conversely, from the central 3D point, a curved blue arrow labeled '3D-2D Back-project' arcs back to each camera’s image plane, terminating at the 'Back-Projected 2D Point'. This represents the projection of the 3D point back into the 2D image coordinates. A horizontal black arrow extends from the reconstructed 3D point to the right, emphasizing its position in 3D space.

The diagram conveys a bidirectional workflow: 2D points from two cameras are used to estimate a 3D point, which is then projected back to each camera’s view to compute the back-projection error—the distance between the detected 2D point and the back-projected 2D point. This error metric is crucial for evaluating the accuracy of 3D reconstruction algorithms. The figure is designed to be self-explanatory, with clear labeling and directional arrows guiding the viewer through the process.
