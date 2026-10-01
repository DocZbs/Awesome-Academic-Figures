# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Online Detection of Water Contamination Under Concept Drift — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02107

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of an Anomaly Detection and Drift Detection (AD&DD) framework, structured as a feedback loop involving an LSTM-VAE model and a dual-threshold drift detection mechanism. The global layout is divided into two main components: the upper right section contains the LSTM-VAE module responsible for prediction and training, while the lower left section houses the Dual Threshold Drift Detector, enclosed within an orange dashed rectangular boundary. A feedback path connects the drift detector back to the LSTM-VAE, enabling model reinitialization when drift is detected.

In terms of visual modules and attributes, the LSTM-VAE is depicted as a large rounded rectangle with a gray border, containing two stacked rectangular submodules labeled 'Prediction' and 'Training'. The input to this module is denoted by x^t, entering from the top via a thick blue arrow. The output, ŷ^t, exits to the right through another thick blue arrow. Below the LSTM-VAE, the Dual Threshold Drift Detector consists of three gray-bordered rectangular boxes: 'mov_all', 'ref_N', and 'Distance Test'. These are arranged vertically and horizontally such that 'mov_all' and 'ref_N' feed into 'Distance Test'. The entire drift detection block is enclosed by an orange dashed line, visually separating it from the LSTM-VAE component.

Connections and arrows are rendered as thick blue lines with solid arrowheads, indicating the direction of data flow. The input x^t enters the LSTM-VAE, which produces the predicted output ŷ^t. Simultaneously, the latent space representation generated during processing is appended to a moving window, indicated by a blue arrow labeled 'Append latent space' that points from the LSTM-VAE to the 'mov_all' box. The 'mov_all' and 'ref_N' modules both feed into the 'Distance Test' module, which performs a comparison between current and reference latent representations. If the distance exceeds predefined thresholds, an 'Alarm raised' signal is triggered, shown as a blue arrow pointing upward from the 'Distance Test' to the LSTM-VAE. This alarm triggers the creation of a new LSTM-VAE, as labeled along the arrow, initiating a reset or retraining phase. The overall workflow represents a continuous monitoring system where model performance is evaluated against a reference distribution in latent space, and upon detecting significant drift, the model is replaced to maintain accuracy.
