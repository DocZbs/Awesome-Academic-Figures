# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RADARSAT Constellation Mission Compact Polarisation SAR Data for Burned Area Mapping with Deep Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11561

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a deep learning-based workflow for burned area mapping using RCM (Radarsat Constellation Mission) data. The global layout is a horizontal flowchart progressing from left to right, starting with input data on the far left, moving through a segmentation model in the center, and ending with the segmentation result on the far right. The structure is divided into three main sections: input data sources, the segmentation model architecture, and output/result generation.

On the left side, three distinct input images are presented vertically: 'GRD Log-ratio', 'M-chi Decomp', and 'M-chi CpRVI'. Each is represented as a rectangular grayscale or color image with a black vertical strip on the right edge, indicating a portion of the image data. These inputs are connected via solid lines to a circular gray node labeled implicitly as a fusion or summation point. This node combines all three inputs before feeding them into the encoder of the segmentation model.

The central part of the diagram is labeled 'Segmentation Models' and consists of an encoder-decoder architecture. The encoder is composed of three stacked blue parallelograms of decreasing size, representing successive convolutional layers or feature extraction stages. The decoder mirrors this with three stacked orange parallelograms of increasing size, representing upsampling or reconstruction stages. Dashed lines connect corresponding encoder and decoder layers, indicating skip connections that transfer feature maps directly from encoder to decoder at each level. Solid arrows show the forward flow of data from encoder to decoder.

Below the main encoder-decoder path, there is an auxiliary processing branch. The 'GRD Log-ratio' input is also directed to a rounded rectangle labeled 'Log-ratio Binarized'. This processed signal then flows to another circular gray node, which combines it with data from a rounded rectangle labeled 'Sentinel-2 Polygon'. The output of this combination is labeled 'Label', and it feeds into the final output stage.

On the far right, the output is shown as a large light-gray parallelogram labeled 'Segmentation Result', representing the final predicted map. A solid arrow connects the last decoder layer to this output. Additionally, a solid arrow from the 'Label' node points upward to the 'Segmentation Result', suggesting that the label serves as ground truth or supervision during training, possibly for loss computation or evaluation.

All visual elements use consistent shapes and colors: inputs are rectangular images, processing blocks are rounded rectangles or parallelograms, fusion nodes are circles, and the encoder/decoder layers are colored blue and orange respectively. Text labels are placed adjacent to or inside the respective components. The diagram uses solid lines for primary data flow and dashed lines for skip connections, clearly delineating the architecture’s information pathways.
