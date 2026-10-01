# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AV-DTEC: Self-Supervised Audio-Visual Fusion for Drone Trajectory Estimation and Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16928

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an end-to-end audio-visual fusion framework for detecting and tracking drug-smuggling unmanned aerial vehicles (UAVs), specifically Phantom 4 drones, using a sensor-equipped surveillance tower. The global layout is horizontal and sequential, depicting a real-world desert-like environment with a surveillance tower on the left, a processing pipeline in the center, and a detected drone trajectory on the right. The background shows a rugged terrain with roads and sparse vegetation, emphasizing the operational context.

The visual modules are organized into three main components: input sensors, the core detection model, and output trajectory analysis. On the far left, a green-bordered rounded rectangle contains icons of a camera and microphone, representing the dual-modal sensory inputs—visual and acoustic data collected by the surveillance tower. This module feeds into the central processing unit labeled 'AV-DTEC', enclosed in a blue-bordered rounded rectangle. Inside AV-DTEC, a detailed schematic shows a neural network architecture with multiple layers: red blocks labeled h_{t-1} and h_t represent hidden states; vertical dashed lines indicate temporal connections; a central light-blue block labeled 'Selective SSM' denotes a selective state-space module; and smaller blocks labeled B_j, C_j, P_j^T, and 'Prospect' suggest feature extraction and projection pathways. The diagram includes arrows indicating data flow through the network, with a dotted arrow from the Selective SSM to a 'Discriminator' component, implying a feedback or classification mechanism.

From AV-DTEC, a green arrow leads to the third module on the right, a purple-bordered rounded rectangle titled 'Trajectory'. This module displays a sequence of colored dots (red to blue) forming a curved path, symbolizing the UAV’s flight trajectory over time. Below the trajectory, an image of a Phantom 4 drone is shown with the label 'Drone Type: Phantom 4', confirming the target class. A dashed purple line separates the trajectory from the drone image.

Connections between modules are indicated by thick green arrows: one from the sensor module to AV-DTEC, and another from AV-DTEC to the Trajectory module. Additionally, a green arrow loops back from the Trajectory module to the sensor module, suggesting a feedback loop for continuous monitoring or adaptive sensing. In the lower part of the image, yellow and black concentric arcs emanate from the surveillance tower toward the drone, visually representing the range of sensor coverage or signal propagation. The drone itself is highlighted with a red bounding box and a red dot, indicating active detection, while its trajectory is overlaid on the scene. The entire diagram conveys a real-time, robust, and cost-efficient system for UAV detection and tracking in challenging environments.
