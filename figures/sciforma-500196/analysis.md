# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Video Representation Learning with Joint-Embedding Predictive Architectures — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10925

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two architectures for self-supervised video representation learning: (a) Video JEPA with Variance-Covariance Regularization (VJ-VCR) and (b) a Generative model. Both diagrams share a similar global layout, starting from an input frame x and a target frame y, processed through encoders, prediction modules, decoders, and loss functions, with optional latent variable z. The structure flows left-to-right, with inputs at the bottom, encoders in the middle, and losses at the top or right.

In both diagrams, the input x is fed into an encoder Enc(x), producing a hidden representation h_x. This h_x is then passed to a prediction module Pred([h_x, z]), which also receives the optional latent variable z via a dashed arrow. The output of this module is denoted as ŷ̃_y (in diagram a) or ũ_y (in diagram b), representing a predicted hidden representation of the target. This predicted representation is then passed to a decoder Dec(ũ_y) to reconstruct the target frame, yielding ŷ.

In diagram (a), VJ-VCR, additional regularization is applied. The hidden representation h_x is passed to a VC(h_x) module (red-bordered rectangle), which applies variance-covariance regularization. Similarly, the target y is encoded by Enc(y) to produce h_y, which is also passed to VC(h_y) for regularization. A discriminator-like loss D(ũ_y, h_y) compares the predicted hidden representation ũ_y with the true hidden representation h_y. Additionally, another loss D(ŷ, y) compares the reconstructed frame ŷ with the original target y. The target y also feeds directly into the D(ŷ, y) loss via a dashed arrow.

In diagram (b), the Generative model, the architecture is simpler. The VC(h_x) module is still present, applying variance-covariance regularization to h_x. However, there is no VC(h_y) module, nor is there a D(ũ_y, h_y) loss. Instead, only the reconstruction loss D(ŷ, y) is computed, comparing the decoded output ŷ with the original target y. The target y is connected to this loss via a solid arrow.

All modules are represented as rounded rectangles or circles. Encoders, predictors, and decoders are white rounded rectangles with black borders. VC modules are red-bordered rectangles with white fill. Loss functions D are red-bordered rectangles with white fill. Inputs x and y are gray circles. The latent variable z is a gray circle connected via dashed lines, indicating it is optional. Solid arrows indicate direct data flow; dashed arrows indicate auxiliary or optional connections. The figure uses consistent notation: h_x and h_y denote hidden representations, ŷ̃_y/ũ_y denote predicted hidden representations, ŷ denotes reconstructed outputs, and D denotes MSE loss either in hidden or pixel space.
