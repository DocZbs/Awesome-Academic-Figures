# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Novel Vision Transformer for Camera-LiDAR Fusion based Traffic Object Segmentation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02858

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the decoder process of a multi-modal segmentation network, divided into three main stages labeled (a), (b), and (c), arranged horizontally from left to right. 

[1] Global Layout and Structure: The overall layout is linear and sequential, progressing from input data processing in (a), through intermediate feature transformation in (b), to final cross-modal fusion and output generation in (c). Each stage is enclosed in a light gray rectangular box with a label below it. A thick black curved line connects the bottom of each stage, visually indicating the flow of the pipeline. The final output is shown as a segmented image on the far right.

[2] Visual Modules and Attributes: In stage (a), the input is represented as a 577×768 grid (orange outline with internal crosshatch pattern) that transforms into a stack of 577 feature cubes, each labeled '1 ... 768' and colored white or orange, symbolizing the concatenation of data with classification tokens. Stage (b) shows a matrix of feature tokens (labeled x_1,1 to x_768,768) followed by a '1x1 Conv' block (white rectangle with black text), then 'Up/Down Sampling' (another white rectangle), and finally a mathematical expression 'h/s × w/s × D' in a white box, indicating spatial resizing. Stage (c) contains multiple components: two parallel paths for 'Camera' and 'LiDAR' inputs, each feeding into a 'RCU' (Residual Computation Unit) block (white rectangle). These RCU outputs are summed via a circular '+' node, which also receives input from a 'Previous step' (indicated by a dashed arrow from above). The result passes through another RCU, then a 'De-convolution' block, followed by 'Up-sampling', leading to the final output image showing a green car and red pedestrian on a road. Above the main RCU path, a detailed inset shows the internal structure of an RCU: a sequence of 'ReLU' → '3x3 Conv' → 'ReLU' → '3x3 Conv' → '+' (summing the input and output of the block), forming a residual connection. This inset is connected to the main RCU block by a dotted line.

[3] Connections and Arrows: Solid arrows indicate the primary data flow: from the input grid in (a) to the token stack, then to (b) where tokens go through 1x1 Conv, Up/Down Sampling, and the dimensionality expression. From (b), a solid arrow leads to (c), where the processed features split into Camera and LiDAR branches. Each branch feeds into an RCU, whose outputs converge at a circular sum node. A dashed arrow from the top inset (RCU details) points to the main RCU block, illustrating its internal structure. Another dashed arrow from 'Previous step' points to the sum node, indicating temporal or hierarchical feedback. The output of the sum node goes to the next RCU, then to De-convolution, then to Up-sampling, and finally to the segmented image. All connections are unidirectional, following the left-to-right progression of the pipeline.
