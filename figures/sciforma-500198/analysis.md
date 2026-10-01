# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

APAR: Modeling Irregular Target Functions in Tabular Regression via Arithmetic-Aware Pre-Training and Adaptive-Regularized Fine-Tuning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10941

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Arithmetic-Aware Pre-Train phase of APAR, designed for tabular regression tasks. The overall layout is left-to-right, divided into three main stages: Feature Tokenizer, Feature Encoder, and Arithmetic-Aware Task, each enclosed in dashed boxes. The process begins with two input sample pairs, denoted as x_i and x_j, each consisting of four features (x_i0 to x_i3 and x_j0 to x_j3), represented as stacked colored rectangles (blue, orange, red). Each sample pair also includes a corresponding label y_i or y_j, shown as green rectangles.

In the Feature Tokenizer stage, numerical features (x^(num)) undergo linear transformation via Equation (2): z^(num) = x^(num) × W^(num) + b^(num), depicted as blue blocks multiplying and adding to produce output z^(num). Categorical features (x^(cat)) are processed via Equation (3): z^(cat) = x^(cat) × W^(cat) + b^(cat), shown with orange and red blocks representing embeddings for different categories. The outputs from both branches are then concatenated (indicated by ⊕ symbol) to form a unified feature vector Z, as per Equation (4).

The resulting Z vectors for samples i and j are each prepended with a [CLS] token (gray rectangle), forming Z_i and Z_j. These are then fed into the Feature Encoder, which consists of L identical layers. Each layer performs normalization (Norm), followed by Multi-Head Self-Attention (MHSA), then element-wise multiplication (⊗) with the residual connection. This is followed by another normalization, a linear transformation, and another element-wise multiplication with the residual path. The outputs after L layers are Z_iL and Z_jL, each still containing the [CLS] token.

In the final Arithmetic-Aware Task stage, the [CLS] tokens from Z_iL and Z_jL are concatenated (⊕) and passed through an MLP (Multi-Layer Perceptron) to predict a value ŷ^AP. This prediction is compared to the ground truth arithmetic operation y^AP, which is derived from labels y_i and y_j using one of the four operations {+, −, ×, /}, as specified in Equation (8). The loss function ℒ^AP is computed based on this comparison. The entire process enables the model to learn arithmetic relationships between sample pairs during pre-training.
