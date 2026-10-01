# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Model-Driven Deep Neural Network for Enhanced AoA Estimation Using 5G gNB — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00009

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the framework of MoD-DNN for Angle-of-Arrival (AoA) estimation in a 5G gNB (gNodeB) system. The overall layout is a horizontal pipeline divided into two main stages: 'Preprocessing' and 'MoD-DNN', indicated by large horizontal brackets spanning the respective sections. The flow begins on the left with an input representation of a 5G gNB base station, depicted as a stylized tower with multiple antennas and connected user devices, labeled 'Input'. An arrow points from this input to the first processing block.

In the preprocessing stage, the input signal is represented as a 3D tensor labeled 'CFR H' (Channel Frequency Response), visualized as a stack of colored rectangular planes (yellow, orange, blue) arranged along the 'Subcarrier' axis, with each plane containing circular elements representing samples along the 'Antenna' dimension. This tensor is transformed into a second 3D tensor labeled 'Covariance Matrix R', shown as a stack of light blue planes with circular elements, also indexed by 'Sample' along the vertical axis and 'Subcarrier' along the depth. A rightward arrow labeled 'Vectorizing' connects this to a 2D columnar structure labeled 'y', composed of multiple vertical stacks of circles, each representing a vectorized sample. These vectors are grouped into several columns, indicating multiple samples.

The flow then enters the MoD-DNN stage, starting with a rounded rectangular box labeled 'Iteration between CNN and SCG', which processes the vectorized data. The output of this module is a 3D tensor labeled 'Spatial Spectrum η', depicted as a stack of vertical columns, each containing circular elements, with some circles highlighted in red to indicate peaks. This tensor is indexed by 'Sample' along the vertical axis. From this spatial spectrum, a process labeled 'Spectrum Peak Search' extracts the highest peaks, indicated by a blue arrow pointing to the final output.

The output is labeled 'AoA' (Angle-of-Arrival) and is represented as a sequence of blue circular icons, each labeled 'Sample', arranged horizontally. The entire pipeline is annotated with directional arrows indicating the flow of data from left to right, and all major components are clearly labeled with text above or beside them. The figure uses consistent color coding: blue for data vectors and outputs, light blue for covariance matrices, and red for peak indicators. The structure emphasizes a sequential transformation from raw channel measurements to estimated AoA values through preprocessing and deep learning-based spectral analysis.
