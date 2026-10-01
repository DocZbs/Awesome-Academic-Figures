# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Google is all you need: Semi-Supervised Transfer Learning Strategy For Light Multimodal Multi-Task Classification Model — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01611

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a multimodal fusion architecture designed to process both visual and textual inputs, specifically an image and a caption, to produce a final output. The global layout is a left-to-right data flow diagram, starting with two input nodes on the left: a circular node labeled 'Image' and another labeled 'Caption'. These inputs feed into separate modality-specific encoders: the 'Image' input connects to a parallelogram-shaped module labeled 'EfficientNetB4', representing the vision model; the 'Caption' input connects to a rectangular module labeled 'BERT(Tiny)', representing the NLP model. A legend in the top-right corner clarifies the visual encoding: vision models are depicted as parallelograms, NLP models as rectangles, and fusion models as dashed rectangles. The legend also defines FCNN as Fully Convolutional Neural Network and FFNN as Feedforward Neural Network.

From the EfficientNetB4 and BERT(Tiny) modules, the features are processed through multiple FCNN layers. Specifically, the image features from EfficientNetB4 are split into two paths, each passing through an FCNN block, producing outputs labeled 'K' (Key) and 'V' (Value). The caption features from BERT(Tiny) pass through one FCNN block, producing an output labeled 'Q' (Query). These K, V, and Q representations are then fed into a 'Cross Attention' module, which is enclosed within a dashed rectangle indicating it is part of the fusion model. Additionally, a direct path from the BERT(Tiny) output bypasses the initial FCNN and connects to another FCNN block within the same dashed fusion region. The output of this second FCNN is combined with the output of the Cross Attention module, feeding into a final FFNN block. The output of the FFNN is then directed to a rounded rectangle labeled 'Output', signifying the final result of the model.

Connections are represented by solid black arrows indicating the direction of data flow. The diagram includes a small black dot on a line connecting the BERT(Tiny) output to the second FCNN within the fusion module, indicating a branching point where the feature stream splits or merges. The overall structure emphasizes a dual-branch encoder setup followed by a cross-modal fusion stage using attention mechanisms, culminating in a final feedforward network for prediction.
