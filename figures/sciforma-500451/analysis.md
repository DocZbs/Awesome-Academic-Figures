# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BiM-VFI: Bidirectional Motion Field-Guided Frame Interpolation for Video with Non-uniform Motions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11365

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the detailed architecture of the Content-Aware Upsampling Network (CAUN), designed for motion estimation and optical flow refinement. The global layout is a multi-stage, hierarchical pipeline arranged from left to right, with multiple parallel branches converging into a final upsampling stage. The network processes feature maps from two input frames, denoted by F₀^l,c,2 and F₁^l,c,2, at a low resolution [H/4, W/4, C₁], and combines them with estimated optical flows (ṽ_t→0^l and ṽ_t→1^l) to produce refined flow outputs at higher resolutions.

The structure begins on the left with two circular nodes labeled 'W', representing warping operations (backwarping), which take feature maps and flow vectors as inputs. These warped features are then fed into a blue rectangular block labeled 'Conv' (convolution). The output of this convolution is passed to an orange block labeled 'PixelShuffle ×2', which increases spatial resolution by a factor of 2. This is followed by another 'Conv' block, and then a 'Reshape' block (purple), which transforms the tensor into a kernel format K^l×2.

Parallel to this, additional branches process the same warped features through 'Bilinear Upsample ×2' blocks (green), which upsample the flow vectors to match intermediate resolutions. These upsampled flows are combined with the feature maps via 'W' warping nodes before being processed through further 'Conv' layers. The architecture includes multiple such stages, each progressively increasing resolution: first by ×2, then by ×4, using both PixelShuffle and Bilinear Upsample operations.

At the core of the network, after several convolutional and upsampling layers, the features are reshaped into two sets of kernels: K^l×4_t→0 and K^l×4_t→1, each with dimensions [H/4, W/4, 9, 16]. These kernels are then used in two separate 'Adaptive Upsample ×4' blocks (light blue), which take the original low-resolution flow vectors ṽ_t→0^l and ṽ_t→1^l as inputs and produce high-resolution outputs v^l_t→0 and v^l_t→1.

Additionally, there is a lower branch that takes the K^l×2 kernels and applies 'Adaptive Upsample ×2' to generate intermediate flow estimates v^l×0.5_t→0 and v^l×0.5_t→1. The entire network uses color-coded blocks to distinguish operations: blue for convolution, orange for PixelShuffle, green for bilinear upsampling, purple for reshape, and light blue for adaptive upsampling. All connections are directed arrows indicating data flow, with annotations specifying tensor dimensions and operation types. The diagram also includes a small 'Backwarp.' label with a 'W' symbol at the bottom-left, emphasizing the backwarping operation used throughout.
