# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unleashing the Power of Continual Learning on Non-Centralized Devices: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13840

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a federated learning framework applied to transportation systems, where multiple vehicle-based clients collaboratively train a model under the coordination of a central server. The global layout is structured horizontally by time progression, marked by a timeline at the bottom labeled 'Task1' (green), 'Task2' (blue), and an arrow indicating forward 'Time' (pink). Vertically, three distinct transportation clients are arranged: Car 1 (a red-and-silver train), Car 2 (a silver sedan), and Car 3 (an orange-and-white truck), each representing a different type of vehicle or transportation mode. These clients are aligned along a vertical gray axis on the left.

Each client performs two sequential tasks, represented by rectangular modules with rounded corners and distinct background colors. For Car 1, Task1 involves 'Camera Capture' (light blue background) showing a highway scene, followed by Task2 involving 'Driving Action' (light green background) depicting a driver operating controls. For Car 2, Task1 is 'Driving Action' (light green) showing a driver using a phone while driving, followed by Task2 'Unmanned Aerial' (light yellow) displaying a self-driving car with a mounted sensor. For Car 3, Task1 is 'Unmanned Aerial' (light yellow) showing an interior dashboard view with a steering wheel, followed by Task2 'Camera Capture' (light blue) showing a street scene with vehicles and pedestrians. Each module contains a small icon of two overlapping documents, symbolizing data or model updates.

All client modules are connected via dashed gray lines to their respective tasks, indicating the sequence of operations performed locally. The outputs from all client tasks are sent to a central 'Server' depicted as a dark gray cloud with a blue globe icon inside, located on the right side of the diagram. Two bidirectional arrows connect the server to the clients: one labeled 'Aggregate' pointing from the clients to the server, indicating the upload of local model updates; the other labeled 'Distribute' pointing from the server to the clients, indicating the download of the aggregated global model. This reflects the core federated learning cycle: local training, model upload, aggregation, and model distribution.

The visual design uses color-coding to differentiate task types: light blue for 'Camera Capture', light green for 'Driving Action', and light yellow for 'Unmanned Aerial'. The server is consistently styled with a cloud shape and globe icon, emphasizing its role as a centralized computing entity. The timeline at the bottom visually anchors the temporal progression of tasks across clients, reinforcing the sequential nature of the workflow. The caption clarifies that this is a federated learning setup for transportation systems, where each end client sends its learned model to the server for aggregation.
