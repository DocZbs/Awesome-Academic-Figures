# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Method for the Runtime Validation of AI-based Environment Perception in Automated Driving System — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16762

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architectural diagram of a Function Monitor for AI-based Perception Systems within an autonomous vehicle fleet, designed for onboard runtime monitoring and remote command control. The global layout is structured into three main horizontal layers: at the top, an orange rectangular block labeled 'Remote Command Control Center for Off Board Monitoring of Autonomous Vehicle Fleet'; below it, a light green rectangular region titled 'Dependability Cage for Onboard Runtime Monitoring of Individual Autonomous Vehicle'; and at the bottom, a light blue rectangular region named 'Reconfigurable Modular Autonomous Driving System'. These layers represent a hierarchical system where the top layer oversees the entire fleet remotely, the middle layer ensures safety and dependability for individual vehicles, and the bottom layer implements the core autonomous driving functions.

Within the Dependability Cage, two primary modules are depicted: 'Function Monitor' on the left and 'Fail-Operational Reaction' on the right. The Function Monitor contains two ROS2 components: 'Safe Zone', which receives inputs of 'Speed + Wheel Angle' from all sensors data, and 'AI Perception Validator', which evaluates whether perception is valid within an accepted threshold. A green circular interface labeled 'Monitoring Interface' connects these components, with data flowing from Safe Zone to AI Perception Validator via a 'Region of Interest' signal. The Fail-Operational Reaction module includes a 'Mode Control' component, which receives feedback from the AI Perception Validator and outputs the 'Current Mode'. This module also receives a 'Mode Request' from the Remote Command Control Center via a purple dashed arrow, indicating human operator intervention.

The Reconfigurable Modular Autonomous Driving System at the bottom consists of three main functional blocks: 'Environment- and Self-Perception', 'Situation Comprehension and Action Decision', and 'Trajectory Planning and Vehicle Control'. The Environment- and Self-Perception block contains two ROS2 components: 'AI-based Camera Perception' and 'AI-based LiDAR Perception', which receive raw sensor inputs ('Camera Image' and 'LiDAR Point Cloud') and output respective object lists ('Camera AI Object List' and 'LiDAR AI Object List'). These object lists feed into the Situation Comprehension and Action Decision block, which then passes information to Trajectory Planning and Vehicle Control. Data flows between these blocks are represented by solid black arrows.

Connections between layers include green dashed arrows from the Function Monitor to the Remote Command Control Center, indicating monitoring interfaces. A brown dashed arrow with an orange fork symbol represents a reconfiguration interface from Mode Control to the Autonomous Driving System, allowing dynamic adjustment of system behavior. Additionally, a dotted blue arrow labeled 'Logistic Center Interface' connects the Remote Command Control Center to the Dependability Cage, suggesting communication with logistics infrastructure. The legend at the bottom clarifies symbols: white rectangles denote collections of ROS2 components, smaller rectangles with a plug icon represent individual ROS2 components, green circles indicate monitoring interfaces, brown dashed lines with forks denote reconfiguration interfaces, blue dashed lines represent logistic center interfaces, purple dashed lines indicate human operator intervention, and solid black arrows signify data flow.
