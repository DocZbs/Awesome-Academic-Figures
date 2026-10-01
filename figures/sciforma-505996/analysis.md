# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Large-Scale Study on Video Action Dataset Condensation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21197

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-phase pipeline for video dataset condensation and evaluation, divided by a vertical dashed line into (1) Condensation on the left and (2) Evaluation on the right. The global layout is structured as a flowchart with distinct modules connected by arrows, emphasizing a sequential and conditional workflow.

In the Condensation phase, the process begins with a 'Real Video' input, represented as a green horizontal bar segmented into N frames, enclosed in a dashed green box. This real video feeds into an 'Interpolator', depicted as a gray trapezoid, which processes it to generate a 'Synthetic Video', shown as a blue horizontal bar segmented into N_c frames, enclosed in a dashed blue box. A red dashed rectangle labeled 'Sliding-window' highlights a segment within the synthetic video, indicating temporal windowing. The interpolator also receives feedback via a red dashed arrow labeled 'Loss Backward' from a neural network structure labeled 'Condensation Network', which is represented as a multi-layered graph with pink, blue, and green nodes. This network is connected to a diamond-shaped decision node labeled 'G > 0', where 'G' stands for 'Require Grads'. If G > 0 (Y branch), the flow proceeds to a pink rounded rectangle labeled 'Dataset Distillation'; if not (N branch), it goes to a light blue rounded rectangle labeled 'Sample Selection'. The output of both branches is combined via a 'Combine' arrow back to the synthetic video module, forming a feedback loop. The Condensation Network receives gradients from the decision node via a red dashed arrow, indicating gradient-based optimization.

In the Evaluation phase, the same 'Synthetic Video' (blue bar, x N_c) is processed through the 'Interpolator' again, and simultaneously passed to a black-bordered rectangle labeled 'Labeling'. Both outputs feed into a purple rounded rectangle labeled 'Evaluation Network', which then connects to a green-bordered rectangle labeled 'Test on Val Set', representing the final evaluation step.

Visual attributes include color-coded boxes: green for real video, blue for synthetic video, gray for interpolator, pink for dataset distillation, light blue for sample selection, purple for evaluation network, and green for test set. Shapes vary: rectangles for data or operations, trapezoids for interpolators, diamonds for decisions, and a neural network graph for the condensation model. Arrows indicate data flow (solid black) and gradient/loss propagation (red dashed). The legend at the bottom clarifies symbols: red dashed rectangle = sliding-window, red dashed arrow = loss backward, G = require grads, and the neural network icon = condensation network. The entire diagram is designed to show how real video is condensed into a synthetic dataset using a trainable network and conditional logic, followed by evaluation using a separate network trained on labeled synthetic data.
