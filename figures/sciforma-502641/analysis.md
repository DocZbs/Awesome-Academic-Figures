# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Automatic Spectral Calibration of Hyperspectral Images:Method, Dataset and Benchmark — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14925

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Spectral Illumination Transformer (SIT) framework, designed for hyperspectral image (HSI) calibration. The global layout is divided into three main sections: the input data on the left, the encoder-decoder network in the center, and an expanded view of the SIT-U module on the right. On the far left, two stacked multi-spectral image stacks are shown: the top labeled 'Hyperspectral Intensity Image' and the bottom 'Hyperspectral Reflectance Image', both depicted as layered color gradients representing spectral bands. These serve as inputs and outputs respectively.

The central part shows a symmetric encoder-decoder structure with N stages. Each encoder block (labeled Encoder 1 to Encoder N) contains a core component called SIT-U (Spectral Illumination Transformer Unit), represented by a brown rectangle, flanked by convolutional layers (gray rectangles) and a pixel-unshuffle layer (light green parallelogram) at the end. Similarly, each decoder block (Decoder 1 to Decoder N) includes a SIT-U unit, preceded by a pixel-shuffle layer (purple parallelogram) and followed by convolutional layers. The encoders and decoders are connected via skip connections, indicated by dashed lines linking corresponding encoder and decoder blocks. A concatenation operation (black circle with 'C') is shown between the skip connection and the decoder’s input, merging features from the encoder.

On the right, a detailed breakdown of the SIT-U module is enclosed in a dashed box. It consists of two parallel branches: 'Spectral Attention' (gray background) and 'Illumination Attention' (teal background). Both branches receive input x_i^m from the i-th layer and output x_a^m to the (i+1)-th layer after passing through LayerNorm and FeedForward layers. In the Spectral Attention branch, input features are processed via Convolution (Conv) to produce Q, K, V matrices. These are used to compute attention maps A_S^m and A_SI^m through dot product and matrix product operations (indicated by black circles with 'x' and '•'). The resulting attention weights are applied to the input via matrix multiplication. In the Illumination Attention branch, features f_c1^m are processed through average pooling (AP) to generate f_avg, then passed through two more AP layers to produce f_c2^m and f_c3^m. These are combined via matrix multiplication with f_l^m to form A_I^m, which modulates the input. The outputs of both branches are concatenated before feeding into the next layer.

At the bottom, a legend explains the symbols used: gray rectangles denote convolution, light green parallelograms represent pixel-unshuffle, purple parallelograms indicate pixel-shuffle, light green rectangles signify layer norm, black circles with '•' denote dot product, black circles with 'x' represent matrix product, black circles with '+' indicate addition, and black circles with 'C' stand for concatenation. The overall workflow follows a U-Net-like structure with attention mechanisms integrated within each SIT-U unit to enhance spectral and illumination feature extraction for accurate reflectance estimation.
