# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Shared Attention-based Autoencoder with Hierarchical Fusion-based Graph Convolution Network for sEEG SOZ Identification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12651

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part methodology for processing intracranial electroencephalography (sEEG) data using a shared attention-based autoencoder (sATAE). Part A outlines the overall pipeline, while Part B provides a detailed breakdown of the sATAE architecture.

In Part A, the global layout is a left-to-right flowchart divided into three main stages: raw sEEG input, preprocessing, and the shared attention-based autoencoder. The raw sEEG data is represented as three stacked rectangular blocks labeled 'Wake', 'Sleep', and 'Onset', each containing a textured pinkish background to indicate time-series signals. These inputs are directed via a thick red arrow to the 'Preprocess' module, which is enclosed in a light gray rounded rectangle. Within this module, the data from 'One Electrode Site' undergoes 'Time Frequency Analysis', visualized as a colorful spectrogram (purple to orange gradient) labeled 'Power Feature'. This is followed by a vertical stack of six horizontal bars labeled 'six bands' (Δ, θ, α, β, γ1, γ2), representing frequency band power, which are then concatenated into a single feature vector labeled 'Concated Feature'. A second thick red arrow leads from this preprocessed feature to the 'Shared Attention based Autoencoder' block, which is outlined in a light beige rounded rectangle. Inside, the process begins with an input cube (beige), followed by a trapezoidal 'Attention Encoder' (yellow-orange), which outputs a multi-layered cube labeled 'Latent Feature' (with colored layers: blue, purple, orange, yellow, pink, green). This latent feature is then fed into a trapezoidal 'Decoder' (light blue), producing an output cube (blue).

Part B expands on the internal structure of the 'Shared Attention based Autoencoder'. The layout is horizontally linear, showing the encoding and decoding phases. On the far left, multiple stylized brain icons represent the 'Input', each with multicolored electrodes inserted. These inputs feed into the encoding phase, which consists of five sequential orange rounded rectangles labeled 'Layer1' through 'Layer5'. Between Layer2 and Layer3, and between Layer4 and Layer5, there are 'Attention Block1' and 'Attention Block2' respectively—these are highlighted in red-bordered yellow boxes. Each attention block connects to the corresponding layer pair via black lines and a circular multiplication symbol (⊗), indicating the application of attention mechanisms. The output of Layer5 is a set of brain icons labeled 'Latent Feature', visually similar to the input but with a different electrode color pattern. This latent feature is then processed through the decoding phase, consisting of five sequential light blue rounded rectangles labeled 'Layer1' through 'Layer5'. The final output is another set of brain icons labeled 'Output', matching the input format. The entire process is annotated with directional arrows and labels: 'Encoding' (yellow arrow) spans from input to latent feature, and 'Decoding' (blue arrow) spans from latent feature to output. The title 'Shared Attention based Autoencoder' is centered below the diagram, emphasizing the core model.
