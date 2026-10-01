# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DINO-Foresight: Looking into the Future with DINO — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11673

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a self-supervised future prediction framework using a Masked Feature Transformer. The global layout is divided into two main sections: a training-time process (enclosed in a red dashed box labeled 'At Train-Time') and a test-time inference setup (enclosed in a teal dashed box labeled 'Library of Prediction Heads At Test-Time'). The left side shows input context frames from time t−Nc to t, and a future frame at t+1, all depicted as street-view images with timestamps. These frames are processed by identical blue trapezoidal modules labeled 'Visual Encoder', each marked with a snowflake icon indicating a frozen or pre-trained model. The output of each encoder is a grid of light blue feature tokens. For the context frames, some of these tokens are masked (represented by gray squares with 'M'), and the entire sequence of features (both unmasked and masked) is fed into a large pink rectangular block labeled 'Masked Feature Transformer', which contains a flame icon symbolizing the active learning component. This transformer outputs a set of greenish-gray 'Predicted Features' in a similar grid format. During training, the predicted features are compared to the features extracted from the future frame (t+1) via a yellow rectangular module labeled 'SmoothL1', which computes the loss. At test time, the predicted features are passed to multiple task-specific 'Head' modules within the teal box. Each head is a trapezoid with a snowflake icon, colored differently (purple, cyan, lavender), and connected to an example output image: 'Semantic Segmentation' (colored segmentation map), 'Depth Prediction' (heat-map style depth image), and 'Surface Normals' (color-coded normal vectors). The connections are shown as black arrows, indicating the flow of data from inputs through encoders, the transformer, and finally to the prediction heads. The figure emphasizes the modularity of the system, where a single feature prediction model enables diverse downstream tasks without retraining.
