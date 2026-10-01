# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards Selection and Transition Between Behavior-Based Neural Networks for Automated Driving — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16764

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architecture for a behavior-based end-to-end autonomous driving system, structured into distinct functional modules and platforms. At the top, a wide orange rectangular block labeled 'Remote Command Control Center' serves as the external input source, sending a 'Target position' signal downward to the core system. The central component is a large light-blue rounded rectangle titled 'Autonomous Driving System', which contains the primary logic and control flow. Inside this, at the top, is a white rectangular box labeled 'Route Planner', which receives the target position and outputs a 'List of driving instruction' to a vertical column of behavior modules. These modules—'Follow Lane', 'Turn Right', 'Turn Left', 'Cross Crossing', and 'Stop'—are represented as white rounded rectangles arranged vertically. Each module receives raw sensor data from the left and produces 'Speed and Steering' commands as output. These outputs converge into a larger white rounded rectangle on the right labeled 'Behaviour Selector Switch', which acts as a decision node. A small circular switch symbol within this box indicates the selection mechanism among the behaviors. The selected output is then sent as an 'Actuator Signal' to the right-side platform. On the far left, a vertical gray panel labeled 'Vehicle Sensor Platform' contains icons representing various sensors (e.g., LiDAR, camera, radar) and is connected by a line labeled 'Raw Sensor Data' to all behavior modules. On the far right, a similar gray panel labeled 'Vehicle Actuator Platform' displays icons of actuators (e.g., engine, steering, brake) and receives the actuator signal. At the bottom, a long gray rectangular bar spans the width, labeled 'Hardware and Software Operation Platform', with a subcaption '(Middleware, Operating System, Communication Network, Execution Hardware)', indicating the underlying infrastructure supporting the entire system. All connections are represented by solid black arrows, showing the direction of data or control flow. The layout is hierarchical and modular, emphasizing a clear separation between perception (sensors), decision-making (behavior modules and selector), and action (actuators), with the route planner providing high-level guidance and the behavior selector dynamically choosing the active behavior based on current conditions.
