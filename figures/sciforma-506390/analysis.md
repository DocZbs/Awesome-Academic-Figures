# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bayesian Active Learning By Distribution Disagreement — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01248

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of two regression models sharing a common encoder but differing in their decoder architectures. The global layout is divided into two main vertical sections: the Encoder on the left and the Decoder on the right, separated by a vertical line. The Encoder processes an input x, represented as a light blue rounded rectangle, through a multi-layer perceptron (MLP) structure repeated N times. This MLP Layer consists of three vertically stacked light green rectangular modules labeled 'Linear', 'ReLU', and 'Dropout' from top to bottom. The output of this encoder is a latent variable z, shown as a light yellow rounded rectangle.

On the right side, the Decoder section is split horizontally into two distinct models. The upper model is labeled 'Normalizing Flow' and uses a 'Spine Transform' module, depicted as a light green rounded rectangle, which is applied M times. This module takes two inputs: the latent variable z (light yellow rounded rectangle) and an additional 'Noise' input (light blue rounded rectangle). The output of the Spine Transform is a predictive distribution denoted as p̂|x, shown as a pinkish-purple rounded rectangle, and is labeled as 'Freeform Predictive Distribution'.

The lower model is labeled 'Gaussian Neural Network'. It also takes the latent variable z as input and feeds it into two parallel light green rectangular 'Linear' layers. The outputs of these two Linear layers are then processed by a third light green rectangular module labeled 'SoftPlus'. The outputs from the first Linear layer and the SoftPlus module are connected to a pinkish-purple rounded rectangle labeled p̂|x, which represents the 'Gaussian Predictive Distribution'. Two arrows point to this output: one from the first Linear layer labeled μ (mean), and another from the SoftPlus module labeled σ (standard deviation).

All connections between modules are represented by solid black arrows indicating the direction of data flow. The figure includes textual annotations such as 'N times' above the encoder's MLP block and 'M times' above the Spine Transform in the decoder, indicating repetition. The overall design uses consistent color coding: light blue for inputs, light yellow for the latent variable z, light green for processing modules, and pinkish-purple for the final predictive distributions. The caption states that both models use an MLP encoder to create a latent embedding z of the input, which is then used to parametrize a predictive distribution.
