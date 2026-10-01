# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MotionBridge: Dynamic Video Inbetweening with Flexible Controls — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13190

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the structure of a Sparse Motion Generator, presented as a horizontal workflow diagram with two main processing streams. The top stream begins with an input video denoted by 'X', represented visually as a stack of three frames showing a green cartoon character. This input flows into a salmon-colored rounded rectangle labeled 'Optical Flow', indicating the first processing step. The output of this module is depicted as a stack of three frames showing a yellow cartoon character overlaid with colorful motion vectors, symbolizing the computed optical flow fields. This is followed by a lavender-colored rounded rectangle labeled 'Extract Trajectories', which processes the optical flow to identify and extract motion trajectories. The output of this step is shown as a white square containing three vertical red arrows of varying lengths, representing the extracted motion trajectories.

The bottom stream starts from the trajectory output and proceeds to a light blue rounded rectangle labeled 'RGB conversion & Guassian filter' (note: 'Guassian' is likely a typo for 'Gaussian'). This module applies a Gaussian filter and converts the trajectories into RGB representations. The output of this module is shown as a sequence of three white squares, each containing three circular points—initially yellow, then transitioning to blue—separated by ellipses to indicate intermediate frames. These represent the sparse RGB point controls generated from the filtered trajectories. The entire process is structured as a linear pipeline from left to right, with solid black arrows indicating the direction of data flow between modules. The visual elements use distinct colors and shapes to differentiate stages: input frames are shown as stacked images, processing steps as colored rounded rectangles, and outputs as symbolic representations of motion or point data. The figure caption clarifies that the goal is to generate sparse RGB point controls from video input via optical flow and trajectory extraction.
