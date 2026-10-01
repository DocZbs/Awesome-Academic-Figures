# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Real-time Bangla Sign Language Translator — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16497

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architectural overview of CorrNet, a deep learning framework designed for sign language recognition or similar multimodal sequence tasks. The global layout is horizontally structured, progressing from left to right: input frames on the far left, followed by parallel feature extraction pathways, then fusion and temporal modeling stages, culminating in a classifier at the far right. The diagram is divided into two main vertical sections: the left section handles frame-wise feature extraction using multiple parallel 2D CNNs, while the right section processes gloss-wise features via 1D CNNs and a BiLSTM network.

In the visual modules, each input frame (represented by small images of a person signing) feeds into a separate 'Feature extractor (2D CNN)' block. Each extractor consists of three sequential stages connected by plus signs, indicating additive operations or residual connections between stages. These blocks are enclosed in rounded rectangles with dashed borders and labeled 'Stage'. The outputs from these extractors are collectively referred to as 'Frame-wise Features', indicated by a large horizontal bracket beneath them.

Above the feature extractors, a red-outlined box labeled 'Correlation Module' contains two submodules: 'Correlation Module' and 'Identification Module', both in red-bordered rectangles. This module receives input X (of shape [C,T,H,W]) and produces output X_out (same shape), with weighted contributions α₁, α₂, and α₃ applied to the outputs of the respective stages. These weights are shown as multiplication symbols connecting the correlation module to the stage outputs, suggesting adaptive weighting based on correlation or identification scores.

The frame-wise features are then aggregated into gloss-wise features, indicated by another horizontal bracket and arrow pointing right. This aggregation feeds into three vertically stacked '1D CNN' blocks, each represented as a light yellow rectangle. These 1D CNNs process the temporal dimension of the features and feed into a BiLSTM module on the far right. The BiLSTM is depicted as a tall, light orange rectangle containing eight circular units arranged in two vertical columns, connected by bidirectional arrows (blue curved lines) to represent forward and backward propagation through time.

Finally, the output of the BiLSTM is passed to a 'Classifier' block, shown as a simple gray rectangle at the top right, which performs the final classification task. All connections are represented by solid black arrows indicating data flow direction. The diagram uses consistent color coding: green for feature extractors, yellow for 1D CNNs, orange for BiLSTM, and red for the correlation module. Text labels are placed clearly near components, with mathematical notation for input/output shapes and weight coefficients. The overall structure emphasizes a hierarchical and parallel processing pipeline with adaptive fusion via the correlation module.
