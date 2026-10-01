# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Method for the Runtime Validation of AI-based Environment Perception in Automated Driving System — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16762

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a high-level architectural diagram of a 'Dependability Cage' designed for onboard runtime monitoring of individual autonomous vehicles, integrated within a broader remote command control center for off-board fleet monitoring. The global layout is vertically stratified into five main horizontal layers: at the top, an orange banner denotes the 'Remote Command Control Center for Off-board Monitoring of Autonomous Vehicle Fleet'; below it, a light green region labeled 'Dependability Cage for Onboard Runtime Monitoring of Individual Autonomous Vehicle'; followed by a light blue region titled 'Reconfigurable Modular Autonomous Driving System'; then a gray layer named 'Hardware and Software Operation Platform'; and finally, a legend at the bottom explaining the arrow types.

Within the Dependability Cage, two primary monitoring modules are depicted: 'Situation Monitor', which includes a database icon representing 'Known Situations', and 'Function Monitor', described as being based on 'Abstract Function Derived from Requirements Specification'. Both monitors receive inputs via dashed green lines labeled 'Monitoring Interface' from the underlying autonomous driving system. The Situation Monitor outputs to a traffic-light-style indicator labeled 'Unsafe Environment?', while the Function Monitor outputs to another similar indicator labeled 'Unsafe Functionality?'. Both indicators feed into a 'Fail-Operational Reaction' module, which is connected back to the autonomous driving system via a dashed orange line labeled 'Configuration Interface', indicating reconfiguration capability.

The Reconfigurable Modular Autonomous Driving System consists of three sequential white rectangular blocks: 'Environment- and Self-Perception', 'Situation Comprehension and Action Decision', and 'Trajectories Planning and Vehicle Control'. These are linked by solid black arrows indicating data flow. The first block receives 'Raw Sensor Data' from the left-side 'Vehicle Sensor Platform', which contains icons of various sensors (camera, LiDAR, radar, etc.). The final block sends 'Actuator Signal' to the right-side 'Vehicle Actuator Platform', illustrated with icons of engine, steering, brakes, and wheels.

The Hardware and Software Operation Platform at the bottom serves as the foundational layer, comprising middleware, operating system, communication network, and execution hardware.

Connections are color-coded and styled according to the legend: solid black arrows represent data flow; dashed green arrows with circles denote monitoring interfaces; dashed orange arrows with circles indicate configuration interfaces; and dotted blue arrows signify human operator intervention, shown originating from the Remote Command Control Center and pointing toward the Dependability Cage and the autonomous driving system. Additionally, 'Input Abstraction' and 'Output Abstraction' labels mark specific monitoring interface connections between the autonomous driving system and the Function Monitor.
