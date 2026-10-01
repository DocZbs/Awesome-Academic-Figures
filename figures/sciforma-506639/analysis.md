# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Task Semantic Communication With Graph Attention-Based Feature Correlation Extraction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02006

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-task semantic communication system model, structured into three main components: Transmitter/Encoder, Channel, and Receiver/Decoder, arranged horizontally from left to right. The global layout is linear and modular, with dashed rectangular boundaries enclosing each major component. The input signal, denoted as vector x, enters the system on the far left and flows through the pipeline to produce multiple decoded outputs.

In the Transmitter/Encoder block, a green rectangular module labeled 'Joint source and channel encoder' processes the input x. This module is associated with the conditional probability distribution P_φ(z|x), indicating that it maps the input x to a latent representation z using parameters φ. The output z is then sent to the Channel block.

The Channel block is represented by a simple additive noise model. It includes a circular symbol with a plus sign inside, representing addition, which combines the transmitted signal z with noise η to produce the received signal ŷ. Below this symbol, the channel transition probability is denoted as P_ch(ẑ|z), indicating the probabilistic relationship between the transmitted and received signals due to channel effects.

The Receiver/Decoder block, enclosed in a dashed rectangle on the right, contains T parallel decoding modules, each corresponding to a different task. Each module is depicted as a light blue rectangle, with the top one labeled ŷ₁, followed by ŷ₂, and so on down to ŷ_T, indicating multiple output predictions. Each decoder is associated with a conditional probability distribution: P_θ₁(ŷ₁|ẑ), P_θ₂(ŷ₂|ẑ), ..., P_θ_T(ŷ_T|ẑ), where θ_i represents the parameters of the i-th decoder. These decoders take the noisy received signal ẑ as input and independently produce task-specific semantic outputs.

Connections are shown via solid black arrows. An arrow leads from the input x to the Joint source and channel encoder. Another arrow carries z from the encoder to the channel’s adder. The noise η is added to z at the channel, producing ẑ, which is then passed via an arrow to the Receiver/Decoder block. From ẑ, separate arrows branch out to each of the T decoders, indicating that the same received signal is used for all tasks simultaneously. The outputs ŷ₁ through ŷ_T emerge from their respective decoders, completing the multi-task inference process.

The figure emphasizes a joint encoding strategy that optimizes both source compression and channel robustness, followed by a parallel decoding structure enabling simultaneous execution of multiple semantic tasks. The visual design uses color coding—green for encoding, blue for decoding—to distinguish functional roles, while consistent labeling and mathematical notation ensure clarity and precision.
