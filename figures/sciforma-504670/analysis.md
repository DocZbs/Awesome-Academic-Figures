# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SAFLITE: Fuzzing Autonomous Systems via Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18727

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an illustrative workflow of an autonomous system for unmanned aerial vehicles (UAVs), structured into distinct functional modules and data flow paths. The global layout is divided into two main regions: on the left, a pink-shaded area labeled 'UAV' contains the physical drone and its onboard sensors; on the right, a beige-shaded area labeled 'Autonomous System' houses the computational control logic. Above the UAV region, an external control box lists inputs such as 'User Commands' and 'Environment Factors', indicating external influences on the system.

Within the UAV region, a black icon of a quadcopter drone is shown with wireless signal waves, symbolizing communication. Adjacent to it is a vertical stack of sensor modules under the header 'Sensors', including 'Speed Sensors', 'GPS', 'IMU', and 'Barometer', each represented as light purple rounded rectangles. Dashed lines connect these sensors to the drone icon, signifying data acquisition from the physical platform. A solid arrow from the 'External Control' box points to the UAV, indicating that user commands and environmental factors influence the UAV's operation.

The data collected by the sensors is transmitted as 'Sensors Data' via a solid arrow to the 'Autonomous System' region. This data feeds into a light blue rounded rectangle labeled 'The Current State of UAV' (marked with number ②), which serves as the state estimator or perception module. From here, an arrow leads to another light blue rounded rectangle labeled 'Control Algorithm', which contains a smaller inner box labeled 'Safety Policy', indicating that safety constraints are embedded within the control logic. This module receives 'Flight Mission Configurations' (marked with number ①) as an input from above, suggesting mission parameters are pre-defined and fed into the control process.

The output of the Control Algorithm flows into a diamond-shaped decision node labeled 'Mission end?'. If the answer is 'No', a feedback loop returns to the 'Autonomous System Command' (marked with number ③), a light blue rounded rectangle that represents the generated control command sent back to the UAV. If the answer is 'Yes', the flow proceeds to a final light blue rounded rectangle labeled 'Flight Log', indicating mission completion and data recording.

All connections are represented by solid arrows, showing unidirectional data or control flow, except for the feedback loop from the decision node back to the command module. The visual attributes include consistent use of rounded rectangles for processes, a diamond for decision-making, and distinct color coding: pink for the UAV hardware, light purple for sensors, light blue for processing and control modules, and beige for the autonomous system boundary. Text labels are clear and positioned adjacent to their respective components. The overall structure follows a closed-loop control architecture, integrating real-time sensor data, mission configuration, and safety policy to generate autonomous commands while logging flight data upon mission termination.
