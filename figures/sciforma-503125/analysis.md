# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Self-supervised Spatial-Temporal Learner for Precipitation Nowcasting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15917

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the SpaT-SparK model architecture in both pretraining and fine-tuning modes, divided into four main parts: (a) Pretraining, (b) Encoder and Decoder block architectures, (c) Densify+projection module, and (d) Fine-tuning. 

In part (a), the pretraining phase begins with a sequence of input frames (C=12, H=W=288) spanning time t to t+T-1. A random mask is applied to these inputs, represented by 'M' in a grid overlay, indicating masked regions. The masked input is then processed through an encoder composed of multiple hierarchical feature extraction stages (S1 to S4), each reducing spatial dimensions while increasing channel depth (e.g., S1: C=256, H=W=72; S4: C=2048, H=W=9). These encoded features are passed through a series of blue arrows representing the densify+projection operation, which reconstructs the features at each level (D1 to D4). The decoded output (D1 to D4) is then upsampled back to the original resolution (H=W=288, C=12) to produce reconstructed frames for the same time range. The process is labeled with green 'Encode' and orange 'Decode' arrows.

Part (b) details the internal structure of the encoder and decoder blocks. The encoder uses downsampling ResNet blocks (green background), consisting of two Conv2D layers, BatchNorm, ReLU activations, and a skip connection summed with the output of the second Conv2D layer. The decoder employs upsampling UNet blocks (red background), comprising Conv2D, BatchNorm, ReLU, another Conv2D, and BatchNorm, designed to increase spatial resolution.

Part (c) shows the densify+projection module. It takes an encoded feature Si, adds a masked version [M] via element-wise addition to produce Si', and then applies a projection function φi using a Conv2D followed by BatchNorm, resulting in a densified feature map.

Part (d) depicts the fine-tuning phase. The same initial masked input is processed through the encoder to generate features Sp,1 to Sp,4. These are then translated via red arrows to new feature representations Sf,1 to Sf,4, indicating a learned translation network trained from scratch. The translated features are then passed through the same densify+projection and decoding pipeline as in pretraining to generate output frames for the shifted time range t+T to t+2T-1. The legend at the bottom clarifies the color-coded components: purple for random mask, green for downsampling (ResNet block), red for upsampling (UNet block), blue for densify+projection, dark red for translating, and gray for Conv2D operations. The figure notes that the 4th hierarchy is adapted for visualization, and output visualizations are illustrative, not actual predictions.
