# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NetFlowGen: Leveraging Generative Pre-training for Network Traffic Dynamics — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20635

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage generative pre-training framework for network traffic analysis, consisting of a generative pre-training phase and a fine-tuning phase. The global layout is divided into three main sections: on the left, raw NetFlow traffic is depicted as a multi-line time series graph showing fluctuating values over time for features such as port (purple), protocol (green), number of packets (gray), and number of bytes (red), with a vertical dashed line marking time step T and a bracket indicating the historical window up to T-1. This raw data flows into the central 'Generative Pre-training' module, which is enclosed in a light gray box. Inside this module, the input consists of history traffic features plus time (represented by stacked colored blocks for T-1, T-2, etc., with purple, green, gray, red, and magenta blocks corresponding to different features and time steps) fed into a dark gray rounded rectangle labeled 'Transformer Decoder'. Additionally, metadata including 'Node' and 'Customer' is provided as side input. The Transformer Decoder outputs a sequence of orange blocks representing learned representations, which are then used to predict the traffic at time T, shown as a segmented bar with four colored blocks (purple, green, gray, red) labeled 'Traffic?' above a dashed arrow labeled 'predict'. A thick brown curved arrow connects the output of the Transformer Decoder to the rightmost section, labeled 'Fine-tuning', which is also enclosed in a light gray box. In this stage, the orange block sequence is labeled 'Pre-trained Traffic Representation' and is passed into a dark gray rounded rectangle labeled 'Classification Layer'. This layer outputs a prediction for 'DDoS Attack?', indicated by a dashed upward arrow labeled 'predict'. All connections between components are represented by arrows: gray arrows indicate data flow within the pre-training module, while the brown arrow signifies the transfer of learned representations to the fine-tuning stage. The visual modules use consistent color coding for features (purple for port, green for protocol, gray for packets, red for bytes, magenta for time), and all text labels are in black sans-serif font. The overall structure emphasizes a sequential workflow from raw data through generative modeling to downstream classification.
