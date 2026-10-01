# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

OpenEMMA: Open-Source Multimodal Model for End-to-End Autonomous Driving — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15208

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the OpenEMMA framework, a multimodal reasoning system for autonomous driving that leverages large language models for future trajectory prediction. The global layout is structured as a left-to-right data flow, beginning with input modalities on the left, processing through a central reasoning module, and culminating in output predictions on the right. The diagram is organized into distinct functional blocks connected by solid and dashed arrows indicating direct and indirect or auxiliary information flows, respectively.

On the left side, two primary inputs are shown: 'Historical Ego Status' presented as a light gray rounded rectangle labeled 'Textual Input', and a real-world driving scene image labeled 'Visual Input'. These inputs converge into the central processing unit, represented by a large white rounded rectangle containing the ChatGPT logo, the infinity symbol (representing Llama), and a llama icon, signifying the use of large language models. This central module is labeled 'ChatGPT' and serves as the core reasoning engine.

Above the ChatGPT module, a dashed rectangular box labeled 'CoT Reasoning' (Chain-of-Thought Reasoning) contains three stacked horizontal bars, each representing a step in the reasoning process: 'High-Level Intent Command' (light blue), 'Driving Scene Description' (light yellow), and 'Major Object Detection' (light green). A solid black arrow points from the ChatGPT module upward to this CoT Reasoning block, indicating that the model generates these intermediate reasoning steps.

Below the visual input, a dashed line connects it to a stylized human head icon with gears and a brain pattern, labeled 'Visual Expert'. This expert outputs a '3D Bounding Box' (a white rounded rectangle), which is then passed via a teal double-arrow icon to the final output visualization — an image of the same driving scene but with overlaid 3D bounding boxes around vehicles and a predicted purple trajectory path for the ego vehicle.

On the right side, the output of the ChatGPT module leads to two sequential prediction stages: 'Future Ego Status' (light purple rounded rectangle) and 'Future Ego Trajectory' (light pink rounded rectangle), connected by a dashed arrow. From 'Future Ego Trajectory', a teal double-downward arrow points to the final rendered output image, showing the predicted future state of the scene with the ego vehicle's trajectory.

The connections are color-coded and styled: solid black arrows denote primary data flow, dashed lines indicate auxiliary or indirect relationships (e.g., the visual expert’s contribution), and teal double-arrow icons represent transformation or rendering steps. The overall structure emphasizes a hybrid approach combining visual perception (via the Visual Expert) with language-based reasoning (via ChatGPT) to produce a coherent, interpretable, and actionable future trajectory prediction.
