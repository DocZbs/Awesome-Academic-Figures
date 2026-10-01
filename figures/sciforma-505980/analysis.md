# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Vinci: A Real-time Embodied Smart Assistant based on Egocentric Vision-Language Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21080

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the Vinci system, which is structured into four main components: Camera, Backend, Frontend, and the EgoVideo-VL model, along with associated processing modules. The global layout is a left-to-right flow, starting with the User on the far left, interacting with the system via a wake-up device and user prompts. The User is visually represented by an icon of a person wearing a VR headset and apron, engaged in cooking, symbolizing an immersive, first-person experience. From the User, two vertical arrows labeled 'Wake up device' and 'User prompts' point downward to the Camera module, which is a gray rectangular box. The Camera sends a continuous 'Push Stream' to the Backend, another gray rectangular box positioned centrally. 

The Backend serves as the central processing hub and connects to multiple functional modules. On the left side of the Backend, a green rectangular box labeled 'Keyword listening' is connected with a bidirectional arrow, indicating real-time monitoring for wake-up commands. Below the Backend, two green rectangular boxes, 'Audio-to-text' and 'Text-to-Speech', are linked to a gray box labeled 'Audio Processing'. These form a feedback loop: Audio Processing feeds into Text-to-Speech, which then sends output back to the Backend, while Audio-to-text receives input from the Backend and feeds into Audio Processing. 

Above the Backend, four green rectangular boxes—'Periodic Memory Generation', 'Multimodal Chat', 'Video Generation', and 'Video Retrieval'—are arranged vertically and all receive input from the Backend. These modules are collectively connected to the EgoVideo-VL model, a gray rectangular box located above them, indicating that this model powers these functionalities. The Backend also sends messages through a light blue rectangular box labeled 'Send message', which acts as an intermediary. This 'Send message' box has two outgoing connections: one to the Frontend and another to the Audio Processing module.

The Frontend, a gray rectangular box on the right, receives inputs from 'Send message' and branches out to four light blue rectangular boxes representing output interfaces: 'Audio Play', 'Real-Time Display', 'Online Chat', and 'Video Generation'. These represent the user-facing outputs of the system. The entire diagram uses solid blue arrows to indicate data or control flow, with clear directional connections between modules. The color coding distinguishes functional categories: gray for core system components (Camera, Backend, Frontend, Audio Processing, EgoVideo-VL model), green for processing or generation modules, and light blue for output interfaces. The layout emphasizes a modular, pipeline-like architecture where user input triggers a sequence of processing steps managed by the Backend, leveraging the EgoVideo-VL model for multimodal understanding and generation, and delivering results through the Frontend.
