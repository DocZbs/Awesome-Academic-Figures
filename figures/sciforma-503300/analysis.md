# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Texture- and Shape-based Adversarial Attacks for Overhead Image Vehicle Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16358

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for generating adversarial attacks targeting an ensemble of object detectors. The overall layout is divided into two main sections: 'Scene Generation' on the left and the rendering and detection process on the right, enclosed within a light yellow background. The scene generation module is represented by a large rounded rectangle labeled 'Scene Generation', containing an orthographic camera symbolized by a triangle pointing downward, and a ground plane depicted as a green rectangle with three blue circular 3D car assets placed upon it. Three input components feed into this module: a black-and-white 'Universal Mesh Displacement Map' marked with a flame icon, a colorful 'Universal Adversarial Car Texture Map' also marked with a flame icon, and a stack of green rectangles labeled 'Ground Plane Textures (Z_bg^GMaps)'. These inputs are connected via solid black arrows to the scene generation box, while red dashed arrows indicate the back-propagation path from the loss function back to these adversarial inputs.

From the scene generation module, a solid black arrow leads to a green trapezoidal block labeled 'Differentiable Renderer PyTorch3D', which processes the 3D scene. This renderer outputs a stack of gray rectangular images labeled 'Rendered Overhead View Images', representing the rendered top-down views of the scene. These images are then fed into a dashed rectangular box labeled 'Detectors Ensemble', which contains three distinct object detection models arranged vertically: 'RetinaNet', 'Faster R-CNN', and 'YOLOv5'. Each detector is represented as a light teal trapezoid with a small blue snowflake icon in the top-left corner. Solid black arrows connect the rendered images to each detector, indicating forward pass during inference. The outputs of all three detectors converge at a central point before feeding into an orange circular node labeled 'Adv. Loss', representing the adversarial loss function. Red dashed arrows originate from this loss node and propagate backward through the ensemble detectors and the differentiable renderer, ultimately reaching the adversarial inputs (the displacement and texture maps), illustrating the gradient flow used for optimizing the adversarial perturbations. The caption clarifies that during inference, each model in the ensemble is evaluated independently, while the red dashed lines denote the back-propagation path used during training to compute gradients for the adversarial attack.
