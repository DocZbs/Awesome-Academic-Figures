# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Registration in 30 Years: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13735

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the general pipeline of RANSAC-based methods for 6-DoF pose estimation, presented as a flowchart with a clear sequential and iterative structure. The global layout is horizontal, progressing from left to right, with a feedback loop that introduces iteration. The process begins at the left with an 'Input' label, which feeds into the first processing module. This module is labeled 'Sampling', depicted as a rounded rectangle with bold black borders and black text. Following this, the flow proceeds to the second module, 'Hypothesis generation', also a rounded rectangle with identical styling. The third module, 'Hypothesis evaluation', continues the same visual format. From this module, the flow splits: one arrow leads directly to the 'Output' label on the far right, indicating the end of the process when a valid result is obtained; the other arrow loops upward to a decision node labeled 'Stop criterion', which is also a rounded rectangle with bold black borders and black text. This decision node evaluates whether the stopping condition is met—such as reaching a maximum number of iterations or achieving sufficient inliers. If the criterion is not satisfied, a feedback arrow returns to the 'Sampling' module, restarting the cycle. If satisfied, the process terminates and produces the output. All arrows are thick, solid black lines with classic arrowheads, clearly indicating the direction of data or control flow. The entire diagram uses a monochrome color scheme with black text and borders on a white background, emphasizing clarity and simplicity. There are no additional annotations, equations, or subcaptions within the diagram itself, but the caption specifies its purpose as representing the general RANSAC pipeline for 6-DoF pose estimation.
