# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PBVS 2024 Solution: Self-Supervised Learning and Sampling Strategies for SAR Classification in Extreme Long-Tail Distribution — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12565

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a proposed pipeline for SAR image classification using self-supervised learning and undersampling techniques. The global layout is divided into two main horizontal workflows: the top path describes self-supervised pretraining, while the bottom path details the downstream classification process with undersampling strategies.

In the top section, the 'Train dataset' contains three types of SAR images: Original SAR, Lee filter SAR, and Synthetic SAR, each represented by a grayscale thumbnail. These three 1-channel images are concatenated into a single 3-channel image, indicated by the orange circle labeled 'C' and explained in the yellow box as 'Concat images'. This concatenated input feeds into a Dinov2 model, depicted as a stack of beige rectangular blocks representing convolutional layers, used for self-supervised training. The output of this stage is a pretrained Dinov2 model.

The bottom section begins with the same 'Train dataset' structure, again showing the three SAR image types with the 'C' concatenation marker. This dataset is processed through an undersampling module, shown as a light green rounded rectangle containing the pretrained Dinov2 model and a blue box labeled 'TomekLinks', indicating the application of the TomekLinks algorithm for handling class imbalance. From this module, two parallel undersampled datasets emerge: one labeled 'Under sampling Train dataset' with a pink background, and another also labeled 'Under sampling Train dataset' but processed via 'NearMiss-3 Under Sampling', indicated by a black arrow pointing from the TomekLinks module. Both undersampled datasets retain the same structure of concatenated Original, Lee filter, and Synthetic SAR images.

These undersampled datasets feed into a second instance of the pretrained Dinov2 model (same beige block representation), which extracts features. The extracted features are then passed to a KNN Classifier, shown as a purple trapezoid, which produces the final 'Output'. The entire pipeline emphasizes the use of concatenated multi-modal SAR inputs, self-supervised pretraining with Dinov2, and undersampling techniques (TomekLinks and NearMiss-3) to improve classification performance on imbalanced datasets.
