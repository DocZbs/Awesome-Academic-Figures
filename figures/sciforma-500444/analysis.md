# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Visual IRL for Human-Like Robotic Manipulation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11360

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a two-phase robotic learning pipeline: first, learning a task from a human expert, and second, performing the task by a cobot in a human-like manner. The global layout is divided into two main sections, each enclosed in a rounded rectangle with distinct background colors. The left section, titled 'Learning the task from the human expert' with a light orange header, outlines the training phase. The right section, titled 'Performing the task by the cobot' with a light green header, details the execution phase. Both sections are arranged horizontally and connected sequentially.

In the left section, the process begins with a green rounded rectangle labeled 'RGB-D video frames of human expert demonstrations', containing an inset image of a person interacting with objects on a table. This input feeds into a blue rounded rectangle labeled 'Visual IRL'. Inside this module, two pink and green rounded rectangles represent sub-models: 'Object Location Prediction Model' (pink) and 'Human Keypoint Detection Model' (green). Both models output to a central beige rounded rectangle labeled 'Adversarial IRL', which learns a reward function from the expert’s behavior. An arrow connects the Adversarial IRL to the next stage.

The right section begins with a yellow rounded rectangle titled 'Neuro-Symbolic Dynamics Mapping'. Within it, a purple rounded rectangle labeled 'Human Joints IK Model' receives the learned policy. This connects to a light blue rounded rectangle labeled 'Symbolic Mapping of Human Joints to Cobot Joints', which then connects to another light blue rounded rectangle labeled 'Cobot Joints FK Model'. This FK model is followed by a cyan rounded rectangle labeled 'Cobot Joints IK Model', which refines the joint angles for precise end-effector control. A final arrow leads to a pink rounded rectangle titled 'Cobot task execution in a human-like manner', containing an inset image of a cobot performing the same task as the human expert.

All connections are represented by solid black arrows indicating the flow of data or control. The color coding helps distinguish between different functional modules: green for input/data, blue for visual processing and IRL, purple and light blue for symbolic mapping, and pink/cyan for cobot-specific dynamics. Text labels are clear and centered within each module. The overall structure follows a left-to-right, top-down logic, emphasizing the progression from human demonstration to cobot execution through learned reward functions and neuro-symbolic mapping.
