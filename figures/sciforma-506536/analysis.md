# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Quantitative Gait Analysis from Single RGB Videos Using a Dual-Input Transformer-Based Network — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01689

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative workflow between two gait analysis methodologies: a traditional, resource-intensive clinical approach (panel a) and a proposed, cost-effective, single-camera deep learning-based method (panel b). The global layout is divided into two horizontal sequences, each depicting a step-by-step pipeline from data acquisition to clinical output.

In panel a, the traditional method begins with optical motion capture using reflective markers placed on a subject walking on a green platform surrounded by multiple cameras mounted on tripods. This is followed by semi-manual data processing, represented by a green box containing a curved trajectory with dots, indicating manual cleaning or interpolation of marker data. Next, anthropometric measurements of the subject’s limbs are taken, shown as a side-view silhouette with a leg extended, and these are combined with the processed data to perform inverse kinematics, resulting in a 3D skeletal model of the subject with joint angles (e.g., 12° at the hip) displayed. The process continues with semi-manual gait cycle detection, visualized as a green box with a sinusoidal wave and vertical dashed lines marking gait events, leading to expert analysis, symbolized by a stylized human head with a brain outline, indicating human interpretation of the results.

Panel b illustrates the proposed method. It starts with single-camera recording, depicted as a person walking beside a smartphone icon, emphasizing low-cost, accessible data collection. The next step is video keypoint detection using an algorithm like OpenPose, shown as the same person with overlaid colored lines and dots tracing body joints, representing 2D pose estimation. These detected keypoints are then fed into a neural network, illustrated as a multi-layered feedforward network with interconnected nodes in green, symbolizing deep learning processing. The final output is a report, represented by a document icon with bar graphs and charts, indicating automated extraction of clinical metrics such as Gait Deviation Index (GDI), knee flexion angle, step length, and walking cadence.

Connections between modules are indicated by solid green arrows pointing rightward, signifying the flow of data and processing steps. The figure uses consistent color coding—green for processing stages and neutral tones for input/output elements—and employs simple, clean icons and silhouettes to convey each stage clearly. The overall structure emphasizes a shift from labor-intensive, expensive clinical setups to an automated, scalable, and accessible solution using consumer-grade hardware and deep learning.
