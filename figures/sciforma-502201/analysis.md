# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Simple yet Effective Test-Time Adaptation for Zero-Shot Monocular Metric Depth Estimation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-branch pipeline for recovering metric depth from a monocular image using an additional sensor for scale calibration. The global layout is horizontal, left-to-right, with two parallel processing streams converging at a central estimation step before producing the final output. The top branch begins with a camera icon labeled 'Camera', feeding into a rectangular image labeled 'I' depicting a street scene. This image is processed by a light blue trapezoidal module labeled 'Depth Anything', which outputs a color-coded disparity map 'd'—a heatmap ranging from red (near) to blue (far). This disparity map is then passed through a rounded rectangular orange module labeled 'Rescaling', which produces the final metric depth map 'D', shown as a similar heatmap but with adjusted intensity and scale. The bottom branch starts with an icon labeled 'One additional sensor', representing a device like a LiDAR or IMU, which generates a 3D point cloud visualized as scattered blue dots in a coordinate system labeled 'Point cloud'. Both the disparity map 'd' and the point cloud are fed into a rounded rectangular orange module labeled 'RANSAC', which estimates the scaling parameters 'α, β' represented in a green circle. These parameters are then sent to the 'Rescaling' module to adjust the disparity map into metric depth. Arrows indicate the data flow: from camera to image I, to Depth Anything, to disparity d; from sensor to point cloud, to RANSAC; and from both d and point cloud to RANSAC, and from RANSAC to rescaling, and finally to D. The diagram emphasizes that the RANSAC step uses correspondences between the point cloud and disparity values to compute α and β, enabling metric recovery. The visual elements use distinct shapes and colors: cameras and sensors as icons, images as rectangles, neural networks as trapezoids, processing steps as rounded rectangles, and parameters as circles. Text labels are placed above or below each component, with mathematical variables (I, d, D, α, β) positioned above their respective representations.
