# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Modal Video Feature Extraction for Popularity Prediction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01422

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comprehensive multi-modal machine learning pipeline for video analysis, structured into three main stages: input data processing, feature extraction, and training/output generation. The global layout is a top-down flowchart with distinct color-coded modules and directional arrows indicating data flow. The entire process begins with two primary input sources: 'Video Files' and 'Tabular Data', which are processed separately before converging into a unified feature representation for final prediction.

In the left section, 'Video Files' feed into a set of video feature extraction models, represented by a yellow box labeled 'Video Feature Extraction Model'. This group includes four models: VideoMAE, X-CLIP, TimeSformer, and Vivit, all depicted as white rectangular boxes. Below this, a light blue box labeled 'Text Encoding Model' contains BERT, which processes textual information. Further down, a light purple box labeled 'Video to Text Model' includes LLaVA-NeXT and InternVideo2, which convert visual content into text-based representations. These models receive inputs from both 'Video Files' and a 'Prompt Template' module, which is part of a peach-colored box labeled 'Template Construction'. The 'Prompt Template' also receives input from 'Cleaned Caption', which is derived from 'Tabular Data'.

The 'Tabular Data' branch, shown on the lower-left, undergoes preprocessing via 'Remove outliers By IQR' before being split into several feature engineering components within a pink box labeled 'Tabular Feature Engineering'. These include 'Stats of Hashtag and Mention', 'Mining for Video Create Date', 'Information extracted from Video Files', and 'Log for Author and Video Popularity data'. All these engineered features are then fed into an XGBoost model.

The outputs from the video and text models (VideoMAE, X-CLIP, TimeSformer, Vivit, BERT, LLaVA-NeXT, InternVideo2) are combined and passed to a 'Neural Network' block, which produces an 'Avg Output'. Simultaneously, the XGBoost model also generates an output that is combined with the neural network's output to form the final prediction. The 'Avg Output' is then directed to the 'Training and Output' stage, represented by a green box at the top right, indicating the final phase of the pipeline.

Connections between modules are indicated by dashed blue arrows, showing the direction of data flow. A solid blue arrow connects 'Metadata' to 'Feature Extraction', suggesting metadata is used during the feature extraction phase. The legend on the right side of the figure clarifies the color coding: yellow for video feature extraction, light blue for text encoding, light purple for video-to-text models, peach for template construction, and pink for tabular feature engineering. The overall structure emphasizes a hybrid approach combining deep learning models for multimodal data with traditional machine learning (XGBoost) for tabular features, culminating in a joint prediction system.
