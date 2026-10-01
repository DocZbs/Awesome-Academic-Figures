# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Spike2Former: Efficient Spiking Transformer for High-performance Image Segmentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14587

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture and micro-design components of Spike2Former, a spiking neural network (SNN) framework for semantic/panoptic segmentation. It is divided into three main parts: (A) the overall Spike2Former architecture, (B) the micro-design within the Spike-Driven Deformable Transformer Encoder (SDTE), and (C) a comparison between NI-LIF and I-LIF spiking neurons.

Part (A) shows the global layout of Spike2Former. On the left, an input image is processed by a backbone network producing four feature maps at different resolutions (1/2, 1/4, 1/8, 1/16). These are fed into a Spike FPN (Feature Pyramid Network) which generates multi-scale features F1 to F4. These features are then processed by N stacked Spike-driven Deformable Transformer Encoder Blocks. Each encoder block consists of three modules: Energy-efficient Separable Convolution (ESC), Spike-Driven Deformable Attention (SDDA), and Channel MLP. The output from these blocks serves as Key and Value inputs to L stacked Spike-Driven Transformer Decoder Blocks. The decoder receives Learnable Object Queries and processes them through a series of operations including matrix multiplication and element-wise addition. The decoder outputs are combined with mask embeddings generated via Spike-Driven Mask Embedding (SDME), which uses NI-LIF spiking neurons and MLPs to produce ξ_pixel and ξ_mask. These are multiplied together to form the final segmentation output, shown as a segmented image with a jet and a person.

Part (B) details the micro-design within SDTE. On the left, Energy-efficient Separable Convolution (ESC) is depicted as a sequence of Pointwise Convolution (PWConv), Batch Normalization (BN), Depthwise Convolution (DWConv), BN, PWConv, and BN layers, each marked with a green spiking neuron icon. In the center, Spike-Driven Deformable Attention (SDDA) takes input and passes it through ESC, then splits into two paths: one through DWConv and BN, and another through Conv and BN. The latter path includes offsets sampling based on query, which modulates a grid A. The two paths are combined via element-wise addition and passed through another ESC module. All operations are annotated with spiking neuron icons, indicating spiking computation.

Part (C) compares I-LIF and NI-LIF spiking neurons. For I-LIF, training uses integer activations (e.g., [2, 0]) leading to quantified error in cross-attention, while inference uses binary spikes (e.g., [1, 0]). This causes information loss during MAC (Multiply-Accumulation) operations. For NI-LIF, training normalizes integers using D (e.g., [0.5, 1.0]), preserving more information. During inference, normalized integers are converted to spikes (e.g., [0, 1]), and MAC operations are adjusted with AC (Accumulation) using w/D. This design reduces information loss compared to I-LIF.

The legend on the right defines symbols: green spiking neuron icon for NI-LIF, red arrow for ME-Shortcut, red star for Spike Degradation Phenomenon, black circle with X for Matrix Multiply, and black circle with + for Element-wise Addition. The figure emphasizes energy efficiency, information preservation, and integration of transformer mechanisms into SNNs.
