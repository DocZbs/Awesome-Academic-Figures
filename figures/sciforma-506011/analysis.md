# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Model-Driven Deep Neural Network for Enhanced AoA Estimation Using 5G gNB — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00009

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two variants of an iterative process within a MoD-DNN (Modular Deep Neural Network) module, labeled as (a) and (b), both depicting the transformation of a sample from state η_{i-1} to η_i through a processing pipeline involving a CNN-based Calibrator and an SCG-based SSR layer.

[1] Global Layout and Structure:
The figure is horizontally structured into two parallel diagrams, (a) and (b), each showing an identical flow from left to right. On the far left of each diagram is an input representation labeled η_{i-1}, consisting of multiple vertical stacks of rectangular blocks, each containing circular elements. These represent samples, with some circles filled red and others white or light pink, indicating different states or features. An arrow labeled 'Sample' points rightward beneath this input. The central part of each diagram contains two main processing modules connected by arrows: a yellow block labeled 'CNN-based Calibrator' and a blue block labeled 'SCG-based SSR layer'. These are arranged in a feedback loop, with a curved arrow returning from the SSR layer to the calibrator. On the far right is the output representation η_i, similarly structured as the input but potentially modified in the pattern of red-filled circles. Another 'Sample' arrow points rightward beneath the output. The entire diagram is enclosed in a single caption explaining that (a) shows the overall iteration in the MoD-DNN module, while (b) illustrates an alternative optimization strategy between the calibrator and the SSR layer.

[2] Visual Modules and Attributes:
The input and output representations (η_{i-1} and η_i) are depicted as arrays of vertically stacked rectangles, each containing five circular elements. The circles are either white, light pink, or solid red; the red circles appear to denote active or selected features. The rectangles are grouped into columns, with ellipses (...) indicating continuation of the structure. The 'CNN-based Calibrator' is shown as a yellow, three-dimensional parallelepiped with the label 'C_w' inside it, and below it, the expression 'I - ε_w' is written, suggesting a matrix operation or regularization term. A horizontal arrow labeled 'z_{i-1}' points from the calibrator to the SSR layer. The 'SCG-based SSR layer' is represented as a blue, three-dimensional parallelepiped. Both modules have thick, rounded blue arrows connecting them, forming a feedback loop. The labels for the modules are placed directly on or near the blocks in black text.

[3] Connections and Arrows:
In both diagrams (a) and (b), a thick blue arrow originates from the input η_{i-1} and points to the CNN-based Calibrator. From the calibrator, a thick blue arrow leads to the SCG-based SSR layer. A thick, curved blue arrow loops back from the SSR layer to the calibrator, indicating a feedback mechanism. Finally, a thick blue arrow exits the SSR layer and points to the output η_i. Additionally, a thin horizontal arrow labeled 'z_{i-1}' is drawn from the calibrator to the SSR layer, representing a specific signal or feature vector being passed forward. All arrows are solid and unidirectional except for the feedback loop, which is explicitly curved to show the return path. The overall flow is left-to-right, with the feedback loop creating an internal cycle between the two core modules.
