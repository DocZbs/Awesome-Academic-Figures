# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Parallel Neural Computing for Scene Understanding from LiDAR Perception in Autonomous Racing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18165

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the experimental setup of the PPN (Point Processing Network) model running on parallel accelerated hardware, specifically utilizing two GPUs in conjunction with a CPU and LiDAR input. The global layout is horizontally structured into three main vertical sections: the left section displays the 'Segmented Output', the central section shows the computational pipeline involving LiDAR, CPU, and two GPUs, and the right section presents the 'Reconstructed Output'. Each output is visualized as a red, segmented 3D point cloud representation of an object, likely a vehicle or structure, against a black background.

In the central computational section, the process begins at the top with a LiDAR sensor icon, labeled 'LiDAR', which feeds data downward via a black arrow into a rectangular box labeled 'CPU'. From the CPU, two thick orange arrows extend downward and branch out to connect to two separate GPU units located at the bottom of the diagram. These GPUs are enclosed within a larger rectangular boundary, indicating they are part of a unified hardware platform. Each GPU is depicted as a square chip with a central rounded rectangle labeled 'GPU', surrounded by small square pins; the left GPU is labeled '0' and the right GPU is labeled '1'.

The two GPUs are interconnected by a bidirectional dark gray arrow, suggesting data exchange or synchronization between them. Additionally, each GPU has a thick orange upward arrow leading from it to its corresponding output visualization: the left GPU (0) connects to the 'Segmented Output' on the left, and the right GPU (1) connects to the 'Reconstructed Output' on the right. This indicates that GPU 0 handles segmentation tasks while GPU 1 performs reconstruction, with both processes being fed by the CPU, which receives raw data from the LiDAR sensor. The color coding—orange for data flow from CPU to GPUs and outputs, and gray for inter-GPU communication—helps distinguish different types of data transfer. The overall structure emphasizes a distributed computing approach where the CPU orchestrates data distribution and the GPUs perform specialized processing in parallel.
