# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CwA-T: A Channelwise AutoEncoder with Transformer for EEG Abnormality Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14522

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the CwA-T framework for EEG-based abnormality detection, structured as a left-to-right pipeline with three main stages. The global layout is linear and modular, beginning on the far left with raw EEG signal input, progressing through preprocessing, then a multi-layer channelwise autoencoder, followed by a single-head transformer classifier, and concluding with an interpretability module on the right. Each stage is encapsulated within a rounded rectangular container, with clear directional arrows indicating the flow of data.

In the first stage, labeled 'Raw EEG signals', a circular electrode cap diagram and multiple wavy lines represent multichannel EEG data. Below this, a green-bordered box illustrates preprocessing steps: (i) downsampling, (ii) segmentation using a sliding window (depicted as vertical dashed lines dividing the signal into segments), and (iii) z-normalization. A red box highlights one segment, indicating the processed unit fed into the next stage.

The second stage, titled 'Channelwise AutoEncoder', consists of stacked layers (Layer 1, Layer 2, ..., Layer n) enclosed in a light blue background. Each layer contains multiple colored, wavy signal strips (in pastel shades like pink, yellow, green, purple) representing channel-specific features. These strips are arranged vertically within each layer, showing progressive compression or abstraction of the input signals. Solid black arrows connect the layers sequentially, indicating forward propagation through the autoencoder.

The third stage is the 'Single-head transformer' block, shown as a large rounded rectangle. Inside, three weight matrices (W^Q, W^K, W^V) are depicted above corresponding query (Q), key (K), and value (V) vectors. These feed into a 'Scaled dot-product' block (light blue) and a 'V' block (yellow), which together compute the attention mechanism. The output of this is labeled 'Attention(Q, K, V)' in a pink box. From this, a solid arrow leads to a 'Dense' layer, which produces the final binary classification: 'Normal / Pathological'.

Connections between modules are primarily solid black arrows, indicating direct data flow. Notably, a curved black arrow from the last layer of the autoencoder loops back to the transformer, suggesting the latent representations from the autoencoder are used as input to the transformer. Additionally, two dashed red arrows originate from the transformer and point to the 'Interpretability Module' on the far right. This module includes a circular electrode cap diagram and three small plots of time-series data, indicating that the model's internal representations or attention weights can be visualized for interpretability purposes. The entire diagram uses clean, minimalistic shapes with consistent color coding to distinguish components and data types.
