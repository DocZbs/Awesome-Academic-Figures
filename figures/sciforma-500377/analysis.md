# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ProFe: Communication-Efficient Decentralized Federated Learning via Distillation and Prototypes — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11207

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the ProFe algorithm for model training in Decentralized Federated Learning (DFL), structured into two main sections: the local training process at Node n and the global model and prototype aggregation across multiple nodes. The top section details the training pipeline within a single node, while the bottom section shows the inter-node communication and aggregation mechanism.

[1] Global Layout and Structure:
The diagram is vertically divided. The upper portion focuses on Node n, depicting the teacher-student framework for local training using local data. The lower portion displays a network of four interconnected nodes (Node n+1 to Node n+4), representing the decentralized aggregation phase. A legend in the bottom-left corner defines the neural network layers used: light blue rectangles denote Conv2d layers, orange for MaxPool2d, green for Flatten, and pale yellow for Linear layers.

[2] Visual Modules and Attributes:
At Node n, 'Local Data' is represented by a pink vertical cylinder icon feeding into both the Teacher and Student models. The Teacher model is a sequence of layers (Conv2d, MaxPool2d, Flatten, Linear) shown as colored rectangles arranged horizontally within a rounded gray box. Its output feature vector ft is passed through a softmax layer to produce yt, which is compared with ground truth y via cross-entropy loss L_CE. The Teacher also outputs a prototype vector ft,1, which is used to compute MSE loss with the prototype c̄ stored in a separate module labeled 'c̄', consisting of a series of pale yellow Linear layers indexed from c(0) to c(n).

The Student model, similarly structured but with fewer layers, receives local data and produces feature vector fs, which is processed through softmax to yield ys. This is compared with y via L_CE. Additionally, the Student’s first linear layer output fs,1 is used to compute MSE loss with the same prototype c̄. The Teacher’s output yt is also used to compute knowledge distillation loss βL_KD for the Student.

The prototype c̄ is updated via MSE loss from both Teacher and Student outputs. The Student model’s parameters and the prototype c̄ are shared and aggregated with other nodes.

[3] Connections and Arrows:
Arrows indicate data and gradient flow. Local Data feeds both Teacher and Student. The Teacher’s output ft flows to softmax → yt → L_CE (with y). ft,1 connects to c̄, with an arrow labeled L_MSE pointing back to the Teacher’s first linear layer. Similarly, fs,1 from the Student connects to c̄, with L_MSE feedback to the Student’s first linear layer. The Teacher’s yt also connects to the Student’s final layer with an arrow labeled βL_KD. The Student’s fs flows to softmax → ys → L_CE (with y).

In the lower section, bidirectional arrows connect all pairs among Nodes n+1 to n+4, indicating peer-to-peer communication. Two distinct aggregation paths are shown: blue arrows labeled 'Student model sharing and aggregation' connect Node n to Nodes n+1 and n+2, and green arrows labeled 'Prototype sharing and aggregation' connect the c̄ module to Nodes n+1 and n+2, illustrating how both the student model weights and the prototype vectors are shared and updated across the network.
