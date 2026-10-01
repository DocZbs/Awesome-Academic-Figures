# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SWAG: Long-term Surgical Workflow Prediction with Generative-based Anticipation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18849

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two parallel neural network architectures for time-series prediction tasks: Regression (top) and Classification (bottom), both sharing a similar decoder-based structure but differing in input size and output interpretation. The global layout is vertically divided into two horizontal workflows under a shared 'Task' label on the left, with the top path labeled 'Regression' and the bottom 'Classification'. Each workflow begins with 'Context tokens' feeding into a gray rounded rectangular module labeled 'Decoder'. In the Regression path, the Decoder receives a single input token of dimension 1×D, producing a single output vector s₁ of dimension 1×D. This vector flows through a trapezoidal Layer Normalization (LN) block, resulting in a 1×C output tensor represented as a vertical stack of colored boxes (blue, green, purple) labeled with numerical values (6, 1, 3) under the heading 'Remaining Time'. This output is then mapped via a 'Regression-to-Classification' transformation to a 1×1 prediction vector ŷ₆, shown as a single pink box within a horizontal sequence of colored boxes (green, blue, pink) labeled ŷ₁, ŷ₃, ŷ₆, indicating predicted class indices. The Classification path follows a similar structure but processes N input tokens of dimension N×D, generating N output vectors s₁ through s_N, each of dimension 1×D, forming an N×D matrix. These pass through an LN block to produce an N×C probability matrix, visualized as N vertical stacks of colored boxes (green, pink, blue) labeled p̂₁ through p̂_N. This matrix feeds into a final 'Classification' module, yielding an N×1 output vector of predicted classes ŷ₁ through ŷ_N, depicted as a horizontal sequence of colored boxes (green, blue, pink). All connections are indicated by solid blue arrows, showing the forward flow from context tokens through the Decoder, LN, and final prediction stages. The figure emphasizes that the Regression task predicts continuous remaining time, which can be converted to discrete class predictions via R2C, while the Classification task directly outputs probabilities for multiple future time steps.
