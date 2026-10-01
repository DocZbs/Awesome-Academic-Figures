# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting the Reliability of an Image Classifier under Image Distortion — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the training and test phases of a model reliability prediction task, divided into two main sections: Training phase and Test phase. The Training phase is further subdivided into two parallel workflows: Baseline and Our method. Both workflows begin with a blue circular node labeled 'C', representing the initial configuration space or input set. In the Baseline workflow, 'C' feeds into a black rectangular box labeled 'Random sampling', which outputs a blue cylindrical node labeled '{c₁, ..., c_I}', indicating a set of sampled configurations. This set then passes through a blue rectangular box labeled 'CT({c₁, ..., c_I} | T, D, h)', representing a construction function that generates a training dataset R, depicted as a blue cylinder labeled 'R'. This dataset is then processed by a green rectangular box labeled 'Imbalance handling method', resulting in an augmented dataset 'R*', also shown as a blue cylinder. Finally, 'R*' is used to train a model 'S', represented by a blue circle, via an arrow labeled 'train'. In 'Our method', the same initial 'C' is fed into an orange rectangular box labeled 'GP-based sampling', replacing random sampling. The subsequent steps mirror the baseline: generating '{c₁, ..., c_I}', passing through 'CT({c₁, ..., c_I} | T, D, h)' to produce 'R', followed by a purple rectangular box labeled 'SMOTE' (a specific imbalance handling technique), producing 'R*', which then trains model 'S'. The Test phase, highlighted with a green border, begins with 'C' feeding into a blue rectangular box labeled 'Create grid', which generates a set '{c₁, ..., c_G}' (a grid of configurations) shown as a blue cylinder. This set goes through 'CT({c₁, ..., c_G} | T, D, h)' to produce a test dataset 'R'' (blue cylinder). An arrow labeled 'evaluate' connects 'R'' to the trained model 'S', which outputs the final performance metric, 'F1-score', displayed in a blue rectangular box. All arrows indicate the direction of data flow. The figure uses distinct colors to differentiate components: blue for datasets and models, black for baseline sampling, orange for our method's sampling, green for general imbalance handling, and purple for SMOTE. The caption clarifies that the CT function is detailed elsewhere and highlights that the primary difference between the baseline and our method lies in the sampling strategy.
