# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TIMESAFE: Timing Interruption Monitoring and Security Assessment for Fronthaul Environments — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13049

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-stage pipeline for network traffic analysis and anomaly detection, designed for deployment in both a production-ready private 5G network and its digital twin environment. The global layout is linear and left-to-right, depicting a sequential data flow from raw packet capture to final decision output. The first stage, labeled 'Packet Acquisition & Filtering', is represented by a rectangular document icon with a funnel symbol inside, indicating data ingestion and initial filtering. This module receives input from a cloud icon connected via a network switch, which is further linked to a yellow rectangular block labeled 'PTP' (likely Precision Time Protocol), suggesting timestamp synchronization or time-stamped packet capture. A large green arrow points from this stage to the second stage.

The second stage, 'Pre-Process', is depicted as a cylindrical database icon, symbolizing data storage and transformation. Inside this cylinder, text indicates that source and destination MAC addresses are converted into integer values, as shown by an arrow pointing from 'Source & destination MAC' to 'Integer'. This suggests a feature extraction or encoding step. A light blue arrow leads from the pre-processing stage to the third stage.

The third stage, 'Decision', is enclosed within a diamond-shaped boundary, signifying a decision point or classification module. Inside this diamond, two distinct purple hexagonal icons represent different decision-making components. The top hexagon contains a stylized brick wall with a clock-like symbol, possibly representing a rule-based or threshold-based detection mechanism. The bottom hexagon displays a neural network structure with interconnected nodes, indicating a machine learning or deep learning model for classification. To the left of the decision module, a vertical array of numbered boxes (1, 2, 3, 4, 5, ..., N) with diagonal blue stripes represents the processed feature vector fed into the decision module, likely the integer-encoded MAC address features from the pre-processing stage. The entire pipeline visually conveys a clear workflow: raw packets are acquired and filtered, then pre-processed into numerical features, and finally classified using a hybrid decision engine combining rule-based and machine learning approaches.
