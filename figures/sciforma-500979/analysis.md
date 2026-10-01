# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AI-driven Inverse Design of Band-Tunable Mechanical Metastructures for Tailored Vibration Mitigation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12122

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a detailed block diagram of an inverse design model that transforms input spectral data into reconstructed geometric structures. The diagram is divided into three main parts: (a) the complete model pipeline, (b) the spectrum self-attention module, and (c) the multiscale residual network.

In part (a), the global layout shows a sequential flow starting from an input spectrum of shape (1,1000), represented as a purple waveform. This input first passes through a 'Spectrum Self Attention' block, which outputs a latent space of shape (3,128,256). The latent space then undergoes reflection padding (with a value of 3), followed by downsampling via a 2D convolution layer. Next, the data flows through a 'Multiscale Residual Network' composed of 12 identical blocks, which processes the features. Afterward, upsampling is performed using a 2D transpose convolution, and finally, a 2D convolution output layer generates the reconstructed geometry of shape (3,128,256). The entire process is encapsulated within a light gray rectangular container, with blue arrows indicating the forward pass.

Part (b) provides a detailed view of the 'Spectrum Self Attention' module, which maps the input spectrum to the latent space. The input (1,1000) is first passed through a fully connected (FC) linear layer, producing a vector of size (1,2048). This is then combined with 'Spectrum Position Encoding', which uses a Gaussian function to emphasize specific frequency ranges in the non-linear spectrum. The encoded data is fed into a 'Multi-head Self-Attention' block, whose output (also of size 1,2048) is processed by a multilayer perceptron (MLP). The final output is a latent space representation of shape (3,128,256), visualized as a noisy black-and-white texture. This entire subnetwork is enclosed in a salmon-colored box labeled 'Spectrum Self Attention: Spectrum to latent space'.

Part (c) illustrates the internal structure of the 'Multiscale Residual Network'. It consists of three parallel branches, each processing the same input x. The top branch applies a 1x1 Conv2D, followed by Instance Normalization, another 1x1 Conv2D, and then adds the result to the original input x before normalization. The middle branch uses reflection padding (1), a 3x3 Conv2D, Instance Norm, reflection padding (1), and a 3x3 Conv2D, then adds to x and normalizes. The bottom branch uses reflection padding (2), a 5x5 Conv2D, Instance Norm, reflection padding (2), and a 5x5 Conv2D, then adds to x and normalizes. The outputs of all three branches are concatenated along the channel dimension (R^{3c×w×h}) and passed through a 2D convolution projection layer to produce the final output x of shape R^{c×w×h}. The entire block is contained within a light blue rectangle labeled 'Multiscale Residual Network'. All connections are shown with blue arrows, and the modules are represented as rectangular boxes with black borders and white or light-colored backgrounds, with text labels specifying their functions and parameters.
