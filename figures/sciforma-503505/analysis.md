# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interact with me: Joint Egocentric Forecasting of Intent to Interact, Attitude and Social Actions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16698

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural design of a Graph Convolutional Network (GCN)-based model for extracting high-level social features from multi-modal human body data over time. The global layout is structured as a sequential pipeline with three main stages: parallel feature extraction per time step, temporal modeling, and final feature aggregation. The top row displays multiple identical processing units, each representing a time step, arranged horizontally with an ellipsis indicating the sequence continues. Each unit is enclosed in a rounded beige rectangle, signifying a modular processing block for a single frame or time point.

Within each time-step module, three distinct input modalities are shown at the top: a stick figure representing the torso, a face sketch for the head, and a hand gesture sketch. These inputs are processed by dedicated GCN modules: 'GCN_Torso' (light green box), 'GCN_Head' (light green box), and 'GCN_Hand' (light pink box). The color coding differentiates the hand module from the others, possibly to emphasize its unique role or data type. Each GCN module receives its respective input via a downward black arrow. The outputs of these three GCNs are then fed into a shared 'Attention Layer' (light green box), which combines the features using attention mechanisms to weigh their importance dynamically. This attention layer is positioned centrally below the three GCNs within each time-step module.

The outputs from the Attention Layer across all time steps are aggregated and passed to a central 'Time Modelling' block (light blue rounded rectangle) located below the sequence of time-step modules. This block is responsible for capturing temporal dependencies among the extracted features. From the Time Modelling block, the flow proceeds downward to a 'Dense Layers' component (orange trapezoid), which likely performs non-linear transformations and dimensionality reduction. Finally, the output of the Dense Layers is directed to a 'High-Level Social Feature' box (purple rounded rectangle), representing the final extracted feature vector that encapsulates social context from the input sequence.

All connections between components are represented by solid black arrows, indicating the direction of data flow. The arrows from the Attention Layer in each time-step module converge into the Time Modelling block, emphasizing the temporal integration. The subsequent arrows lead sequentially from Time Modelling to Dense Layers and then to the final output. The figure uses consistent visual elements: rounded rectangles for processing blocks, trapezoids for transformation layers, and simple icons for inputs. The color scheme helps distinguish between different types of modules: light green for body part-specific GCNs and attention, light pink for hand-specific GCN, light blue for temporal modeling, orange for dense layers, and purple for the final output. The overall structure reflects a deep learning framework designed for spatio-temporal feature learning from human body parts, with an emphasis on attention-based fusion and temporal dynamics.
