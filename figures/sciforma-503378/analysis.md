# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Real-time Bangla Sign Language Translator — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16497

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a data collection pipeline for human pose and facial keypoint extraction, structured as a left-to-right flowchart. On the far left, four vertically stacked rectangular images depict a person in different poses: holding hands together in front of the chest, clasping hands near the face, folding hands in prayer position, and raising hands to the sides of the head. Each image shows overlaid keypoints—green dots forming a mesh on the face and pink dots connected by lines outlining hand and arm joints—indicating pose estimation results from a computer vision model. These images serve as input sources for the subsequent processing stages.

From each of these four images, a horizontal arrow extends to the right, converging into a single rectangular processing block labeled 'Extract keypoint'. This module represents the computational step where pose and facial landmarks are detected and extracted from the input frames. The block is outlined with a thin black border and contains centered, bold, black text.

An arrow proceeds from the 'Extract keypoint' block to another rectangular box labeled 'numpy array', indicating that the extracted keypoints are converted into a numerical format suitable for machine learning or further analysis. This box shares the same visual style as the previous one: simple rectangle with black outline and centered black text.

Finally, an arrow leads from the 'numpy array' box to a cylindrical shape labeled 'DATA', symbolizing a database or storage repository. The cylinder is oriented horizontally, with the label 'DATA' centered inside it in bold, black font. This signifies the final stage where processed numerical data is stored for later use.

The entire diagram is laid out linearly from left to right, with inputs on the far left, processing modules in the center, and output/storage on the far right. All arrows are solid black lines with classic arrowheads, indicating unidirectional data flow. There are no feedback loops or branching paths beyond the convergence of the four image inputs into the first processing module. The visual design is minimalistic, using only black outlines and text on a white background, emphasizing clarity and functional representation over aesthetic embellishment. The caption 'Data collection' confirms the purpose of this pipeline: to gather structured pose and facial keypoint data from video frames or images for downstream applications such as gesture recognition or behavioral analysis.
