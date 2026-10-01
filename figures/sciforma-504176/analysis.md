# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EnhancePPG: Improving PPG-based Heart Rate Estimation with Self-Supervision and Augmentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17860

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two neural network architectures side by side: (a) Modified PULSE and (b) PULSE-autoencoder, each designed for processing physiological signals such as accelerometer (AccX, AccY, AccZ) and photoplethysmogram (PPG) data, as shown in the input signal plots at the bottom of each panel.

[1] Global Layout and Structure:
The figure is divided into two main vertical panels labeled 'a)' and 'b)'. Panel 'a)' shows the Modified PULSE architecture, which is a feedforward network ending in a dense output layer for heart rate (HR) prediction. Panel 'b)' displays the PULSE-autoencoder, structured as an encoder-decoder framework with skip connections. Both architectures receive multi-channel time-series inputs from the same set of sensors, visualized as four waveform plots at the bottom: AccX, AccY, AccZ, and PPG.

[2] Visual Modules and Attributes:
In panel 'a)', the input signals pass through three stacked 1D Conv3 layers (each with filter size 1x9 and dilation 1), followed by ReLU activations and an average pooling layer with dropout (rate 0.5). This feature extraction path feeds into a sequence of three Convolutional Blocks with decreasing channel counts: 64, 48, and 32 channels (light blue trapezoids). These are followed by a Cross-Attention module (orange rounded rectangle, h:4, d:16), Layer Normalization (green rounded rectangle), and two Dense layers: Dense 1 (32 neurons, purple rectangle) and Dense 2 (1 neuron, purple rectangle) for HR output.

In panel 'b)', the Encoder section (left box) mirrors the first part of 'a)': three Conv. Blocks (64, 48, 32 channels), followed by Cross-Attention (h:4, d:32) and Layer Normalization. The Decoder section (right box) begins with Self-Attention (h:4, d:32, orange rounded rectangle), then Layer Normalization, and three Transposed Convolutional layers (48, 32, and 1 channel, light blue trapezoids) to reconstruct the input. The Decoder’s output matches the input dimensionality, as shown in the reconstructed signal plots at the bottom right.

[3] Connections and Arrows:
In 'a)', arrows indicate a sequential flow from input signals → 1D Conv3 layers → Conv. Blocks → Cross-Attention → Layer Norm → Dense layers → HR output. In 'b)', the Encoder processes the input sequentially, and its outputs are fed to the Decoder. Red lines labeled 'skip connection' link the third Conv. Block in the Encoder to the second and third Transp. Conv. layers in the Decoder, enabling feature reuse. A black arrow connects the Encoder's Layer Normalization to the Decoder's Self-Attention, indicating direct information transfer. The final output of the Decoder is shown as reconstructed signals matching the input format.

The caption clarifies that 'a)' is used for fine-tuning, while 'b)' is used for pre-training.
