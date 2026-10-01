# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Parallel Neural Computing for Scene Understanding from LiDAR Perception in Autonomous Racing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18165

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the PPN (Probabilistic Perception Network) architecture, which processes a sequence of Bird's Eye View (BEV) maps over time. On the left side, a stack of BEV maps is shown, labeled from 'tn-15' to 'tn', indicating a temporal sequence of 16 frames. These maps are visually represented as dark images with red and orange highlights, likely depicting road features or vehicle positions from a top-down perspective.

The input sequence is fed into two parallel neural network branches: a Segmentation Network and a Reconstruction Network. Both networks follow an encoder-decoder architecture, depicted as gray trapezoidal blocks with the labels 'Encoder' and 'Decoder' inside. The Segmentation Network is enclosed in a larger rectangular box and includes dashed lines labeled 'Skip Connections' above the encoder and decoder, indicating feature reuse across different layers for improved spatial detail preservation. This network is described in the caption as a spatio-temporal pyramid network.

The Reconstruction Network, located below the Segmentation Network, also consists of an encoder and decoder but lacks explicit skip connections in the diagram. It is identified in the caption as an autoencoder, suggesting its role in reconstructing the input sequence.

Each network outputs a processed image on the right side. The output of the Segmentation Network shows a segmented version of the BEV map, with distinct red outlines highlighting specific regions, possibly lane markings or obstacles. The output of the Reconstruction Network displays a reconstructed BEV map with a more uniform red glow, indicating a focus on overall structure recovery rather than fine segmentation.

Arrows indicate the flow of data: from the input sequence to both networks, and then from each network’s decoder to its respective output image. The layout is horizontal and modular, emphasizing the parallel processing of the same input by two specialized networks. The visual design uses consistent gray tones for network components, black backgrounds for input/output images, and red/orange hues for highlighted features, ensuring clarity and focus on the architectural flow.
