# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SLTNet: Efficient Event-based Semantic Segmentation with Spike-driven Lightweight Transformer-based Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12843

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of SLTNet, a spiking neural network designed for event-based semantic segmentation. The global layout is a left-to-right feedforward pipeline with skip connections, divided into four main stages: an initial block, three stages of spiking convolution blocks (SCBs), one stage of spiking transformer blocks (STBs), followed by a decoder with three Spike-LD modules and two segmentation heads. The input is an event stream captured by an event camera, visualized as a sparse point cloud, which enters the network as 'Input Event'. This is first processed by a green 'Init Block' and then downsampled via a gray 'Downsampling' module, reducing spatial dimensions from H×W to H/2×W/2 while increasing channel count to C×H/2×W/2.

Stage 1 consists of a yellow trapezoidal 'Spike-driven Convolution Block' (SCB), producing output x₁. Stage 2 and Stage 3 follow similarly with SCBs, each halving spatial dimensions and doubling channels (to 4C×H/4×W/4 and 8C×H/8×W/8 respectively), generating outputs x₂ and x₃. Each SCB contains three stacked purple 'Spike-LD Module' layers (labeled D₁, D₂, D₃) as shown in the lower-left inset. These modules are connected sequentially within the SCB.

Stage 4 introduces a blue rectangular 'Spike-driven Transformer Block' (STB), applied twice, processing 8C×H/8×W/8 features and outputting x₄. The STB structure, detailed in the lower-center inset, includes three parallel RepConv layers (light green boxes) followed by Batch Normalization (BN, gray boxes) and spike activation (black circle with waveform icon). The outputs q, k, v from these branches feed into a blue 'Spike-driven Multi-head Self-Attention' module. The attention output is processed by another RepConv and BN, then added to the original input via a summation node (circle with plus sign). This is followed by a Linear layer, BN, and another summation, repeated twice (indicated by ×2).

The decoder comprises three purple trapezoidal 'Spike-LD Module' blocks, each receiving features from the encoder via skip connections: x₁, x₂, and x₃ are fed into the respective FE (Feature Enhancement) modules (pink boxes) before being upsampled and merged with the decoder’s feature flow. The final output passes through two parallel 'Segmentation Head' modules (gray rectangles), generating two segmentation probability maps. The top head produces the final prediction, compared to ground truth (GT) using CE loss L₁. The bottom head generates an early-stage prediction, evaluated with early-stage loss L₂. Both losses are indicated by red curved arrows pointing to the GT image.

Visual attributes include color-coded modules: green for Init Block, gray for Downsampling and BN, yellow for SCBs, blue for STBs, purple for Spike-LD Modules, pink for FE, and light green for RepConv. The spike activation symbol (waveform in circle) appears after each module to denote spiking operations. A legend in the bottom-right corner clarifies symbols: the waveform icon represents 'Spike', pink box is 'FE', and light green box is 'Rep-Conv'. The diagram uses solid black arrows for primary data flow and dashed red arrows for auxiliary connections to the early-stage segmentation head.
