# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Sonar-based Deep Learning in Underwater Robotics: Overview, Robustness and Challenges — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11840

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a structured workflow for ensuring robustness in sonar-based deep learning models, divided into three main phases: Pre-Training, Post-Training, and Inference, each enclosed in distinct dashed boundaries with different colors—blue for Pre-Training, yellow for Post-Training, and green for Inference. The global layout is vertical, progressing from top to bottom, with feedback loops connecting later stages back to earlier ones, indicating iterative refinement.

In the Pre-Training phase, the process begins with a light blue rounded rectangle labeled 'Define Well Suited Computational Vision Model', followed by 'Transfer Learning', then 'Define Well Suited Dataset', and finally 'Data Augmentation'. All these modules are connected sequentially by solid blue arrows, indicating a linear progression. These components form the foundational setup for training the model.

The Post-Training phase consists of three decision nodes, each represented by an orange diamond with a black border. These are 'Neural Network Verification', 'Adversarial Attack Detection', and 'Out-of-Distribution' (OOD), along with 'Uncertainty Quantification'. The 'Data Augmentation' module feeds into all three decision nodes via blue arrows. Each decision node has two possible outcomes: 'Yes' or 'No', indicated by labeled arrows. A 'Yes' outcome from any of these nodes leads to a red arrow pointing to a pink rounded rectangle labeled 'Unsafe Output' in the Inference phase. A 'No' outcome from each decision node leads to a green arrow, converging toward the next stage.

The 'Neural Network Verification' node, if 'No', proceeds to 'Adversarial Attack Detection'; if 'Yes', it bypasses the next step and connects directly to the final safe path. Similarly, 'Out-of-Distribution' and 'Uncertainty Quantification' both have 'No' paths leading to the next stage. If any of these checks return 'Yes', the flow terminates in 'Unsafe Output'.

In the Inference phase, the green arrows from the 'No' branches of all three decision nodes converge into a light green rounded rectangle labeled 'Reproduce the Dataset Collection Set-Up', which includes parameters like frequency and vehicle altitude. From this, a green arrow leads to another light green rounded rectangle labeled 'Safe Output'.

Feedback loops are present: red arrows from 'Unsafe Output' loop back to 'Define Well Suited Dataset' and 'Define Well Suited Computational Vision Model', suggesting re-evaluation and retraining when safety criteria are not met. Additionally, a blue arrow from 'Reproduce the Dataset Collection Set-Up' loops back to 'Data Augmentation', indicating potential refinement of the data pipeline based on inference results.

The figure uses color coding consistently: blue for training steps, orange for decision/verification steps, green for safe paths, and red for unsafe paths. Text within each module is centered and clearly legible. The overall structure emphasizes a safety-critical, iterative design for deploying robust sonar-based deep learning systems.
