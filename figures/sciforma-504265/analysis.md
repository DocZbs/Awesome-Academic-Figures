# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AA-SGAN: Adversarially Augmented Social GAN with Synthetic Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18038

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of Social GAN, a generative adversarial network designed for predicting pedestrian trajectories. The overall layout is horizontally structured, divided into two main components: the Generator on the left and the Discriminator on the right, connected by data flow arrows indicating the adversarial training process.

The Generator consists of an Encoder-Decoder framework enclosed within a light blue rectangular container labeled 'Generator'. The Encoder, shaded teal, contains an LSTM module represented as a trapezoidal shape with input dimensions labeled '(batch, 8, 2)' on the left side. This indicates that the encoder processes sequences of 8 time steps with 2-dimensional spatial coordinates per step. The output of the Encoder feeds into a 'Pooling Module', depicted as a small white rectangle between the Encoder and Decoder. The Decoder, also teal-shaded, contains another LSTM module with output dimensions labeled '(batch, 12, 2)', signifying it generates 12 future time steps of 2D coordinates. The entire Generator receives an 'observed trajectory' as input, shown as a composite box with two segments: a dotted-patterned 'obs' segment and a solid 'pred' segment, representing observed past and predicted future parts respectively. The Generator outputs a 'predicted trajectory', labeled 'pred' in a teal rounded rectangle.

The Discriminator is a separate component, enclosed in a light green rectangular container labeled 'Discriminator'. It contains a single Encoder with an LSTM module, shaded mint green, processing inputs of dimension '(batch, 12, 2)' and producing an output of dimension '(batch, 1, 2)'. This module classifies trajectories as either 'real' or 'fake'.

Connections and arrows define the data flow: The observed trajectory feeds into the Generator’s Encoder. The Generator’s output ('pred') is routed to the Discriminator via a pink rounded rectangle labeled 'fake'. Simultaneously, ground truth future trajectories (indicated by a dashed line from the 'obs' segment of the input to the Discriminator) are fed into the Discriminator via a purple rounded rectangle labeled 'real'. The Discriminator then outputs a binary classification result in a green rounded rectangle labeled 'real/fake'. Additionally, a dashed arrow labeled 'ground truth' connects the original input's 'obs' segment to the Generator’s output, suggesting that during training, the ground truth is used for supervision alongside the adversarial loss. The figure visually emphasizes the adversarial nature of the model: the Generator aims to produce trajectories indistinguishable from real ones, while the Discriminator learns to differentiate between real and generated trajectories.
