# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Rethinking Comprehensive Benchmark for Chart Understanding: A Perspective from Scientific Literature — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12150

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive deep learning pipeline for depth reconstruction from raw Time-of-Flight (ToF) measurements, structured into three main sections: an overview of the training/testing setup, a detailed network architecture, and qualitative results.

[1] Global Layout and Structure:
The diagram is divided into three primary regions. On the left, a top-down workflow outlines data sources (Real ToF camera for testing, FLAT dataset for training/validation) feeding into a 'Raw measurement' block, which then passes through two parallel modules—'Motion module' and 'Multi-reflection module'—before converging into 'Depth reconstruction'. Below this, qualitative results are shown as side-by-side visualizations for multi-reflection and motion scenarios, displaying depth maps and corresponding depth error heatmaps. The right half of the figure contains two stacked neural network architectures enclosed in dashed red boxes: the top one processes raw measurements, and the bottom one refines depth estimates using per-pixel kernels and warping.

[2] Visual Modules and Attributes:
The top-right network begins with an input tensor labeled 'i_ψ', sized 384×7×7, followed by a sequence of convolutional blocks. These include standard convolution layers (white cubes), convolutional layers with 2x2 max pooling (yellow cubes), and upsampling layers with skip connections (blue cubes). Each block is annotated with kernel size (e.g., 5x5, 3x3) and output channel count (e.g., 64, 128, 256, 512). The network ends with a 'Warping' operation producing output 'v' of size 512×384. The bottom-right network takes 'Depth' as input, processed via 'Arctan, Eq. 3' and 'Unwrap, Eq. 4', then feeds into a 'Per-pixel kernel' module (a 3x3 kernel with 384 channels) which convolves with the depth map. This is followed by a similar sequence of convolutional and upsampling layers, ending with an output of size 512×384. A legend at the bottom clarifies the symbols: white cubes = convolution layer, pink = convolution kernel, yellow = convolution + pooling, blue = upsampling + skip connection.

[3] Connections and Arrows:
In the top-right network, arrows indicate forward propagation from left to right, with skip connections (dashed lines) linking early layers to later ones during upsampling stages. The output 'v' connects downward via a 'Warping' arrow to the bottom network. In the bottom-right network, the 'Depth' input flows through processing blocks, then combines with the per-pixel kernel via a convolution operation (* symbol), continuing through the network with skip connections. The final output is fed back to the depth reconstruction stage in the left panel. The entire system forms a closed-loop refinement process where raw measurements are processed, warped, and refined iteratively.

Note: Although the multiple-choice question and answer section below claims 8 convolution layers in the top-right section, the visual count shows 12 distinct convolutional blocks (including those within yellow and blue cubes), consistent with the figure caption stating 12 layers. The discrepancy in the answer section is noted but the diagram itself visually supports 12 layers.
