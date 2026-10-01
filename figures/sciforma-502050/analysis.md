# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unleashing the Power of Continual Learning on Non-Centralized Devices: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13840

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of three non-centralized learning paradigms—Decentralized Learning, Federated Learning, and Hierarchical Learning—alongside a conceptual timeline illustrating their integration with continual learning and data flow between distributed devices and centralized servers.

[1] Global Layout and Structure:
The figure is divided into two main sections. The top section displays three side-by-side diagrams labeled (a), (b), and (c), each depicting a distinct learning paradigm: Decentralized Learning, Federated Learning, and Hierarchical Learning, respectively. Below this, a larger, vertically segmented diagram provides a conceptual framework integrating these paradigms within a broader context of learning architectures. This lower section is structured horizontally by timeline and vertically by device hierarchy, with labels on the left indicating 'Distributed Device' and 'Centralized Server', and on the right indicating 'Non-Centralized Learning'. A horizontal timeline at the bottom spans from Task 1 to Task 3, representing continual learning progression.

[2] Visual Modules and Attributes:
In the top row:
- Diagram (a) Decentralized Learning shows multiple mobile nodes (labeled Node 1 to Node k) arranged in a circular network, connected by bidirectional blue arrows labeled 'Inter-node communication'. Each node contains an icon of a neural network. The background is light beige.
- Diagram (b) Federated Learning features a central cloud icon labeled 'Server' with 'Global Aggregation' above it. Below are multiple clients (Client 1 to Client k), each represented by a device with a neural network icon. Bidirectional arrows connect each client to the server. The background is light blue.
- Diagram (c) Hierarchical Learning shows a cloud labeled 'Cloud' with 'Global Aggregation'. Below are edge devices (Edge 1 to Edge k), each connected to groups of mobile devices (Group 1 to Group k). Each group aggregates locally via 'Group Aggregation' before sending updates to the cloud. The background is light beige.

In the bottom conceptual diagram:
- The upper portion highlights the three paradigms again: (a) Decentralized Learning with a cloud icon crossed out by a red prohibition symbol and text 'No server'; (c) Federated Learning with a green checkmark over a cloud icon and text 'With server'; and (b) Hierarchical Learning with a hexagonal icon combining cloud and edge elements and text 'With edge device'. These are enclosed in dashed boxes with light yellow backgrounds.
- The middle section shows data flow: a large blue upward arrow labeled 'Upload' connects 'Device k' (a desktop and smartphone) to the paradigms, while a large blue downward arrow labeled 'Download' connects them back to 'Device 1' (a smartphone).
- The lower section, shaded peach, represents 'Continual Learning' across a timeline marked Task 1, Task 2, Task 3, etc., with colored segments (blue, green, orange) indicating progression. Data storage icons (stacked cylinders) appear along the timeline for each device, changing color to reflect task progression.

[3] Connections and Arrows:
In the top diagrams:
- In (a), bidirectional arrows form a mesh among nodes, indicating peer-to-peer communication.
- In (b), bidirectional arrows link each client to the central server, representing model updates and aggregation.
- In (c), bidirectional arrows connect groups to edge devices, and edge devices to the cloud, showing hierarchical aggregation.

In the bottom conceptual diagram:
- Large blue arrows labeled 'Upload' and 'Download' indicate data movement between distributed devices and the centralized server.
- Dashed horizontal lines connect data storage icons across tasks for each device, illustrating the evolution of learned models over time.
- The timeline arrow progresses from left to right, emphasizing sequential task learning.

The overall figure contrasts decentralized approaches with centralized coordination, while also illustrating how continual learning evolves across tasks through iterative model updates.
