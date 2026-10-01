# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Ultra-High-Definition Dynamic Multi-Exposure Image Fusion via Infinite Pixel Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11685

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall architecture of IPL, a model designed for processing multiple input images (X1, X2, X3) to generate an output image Ŷ. The global layout is structured as a U-shaped encoder-decoder framework, with a series of Feature Integration Blocks (FIBs) forming the core of the network. At the top, three input images are concatenated and passed through a DownSampler, followed by a sequence of FIBs, then an UpSampler, and finally element-wise multiplication with a skip connection from the initial concatenation to produce the final output. A dashed red box encloses the entire pipeline, indicating the main flow.

Each FIB is expanded below into two major modules: the Dimensional Attention Enhancement Module (DAEM) on the left and the Dimensional Rolling Transformation Module (DRTM) on the right. DAEM processes input slices sequentially via a 'Slice' block, where each slice is processed by a Cyclic Scanner. The Cyclic Scanner contains a Local Feature Extractor (LFE) for training, which includes operations like Global Average Pooling, 1x1 Convolution, ReLU, Sigmoid, and element-wise multiplication. For inference, the LFE is replaced with an Encoder-Decoder pipeline that compresses and decompresses features, storing them in an 'Attention Cache' to enable efficient processing of infinite-length inputs. The outputs from all blocks are concatenated and summed before being passed to DRTM.

DRTM performs dimensional permutation to associate features across different spatial dimensions. It consists of a series of Permute operations, shown as 3D cubes with color-coded axes (height, width, channel), demonstrating transformations such as (C,W,H) → (C,H,W) and (C,H,W) → (W,H,C). These permutations are visualized with arrows and labeled with the corresponding dimension reordering. The permuted features are then combined via element-wise addition and multiplication, with skip connections indicated by dashed lines.

At the bottom, a legend defines the visual symbols used: Global Average Pooling (light pink cube), 1x1 Conv (beige cube), ReLU (red cube), Sigmoid (dark red cube), GELU (teal cube), Permute (green cube), Interpolate (stacked beige rectangles), Skip Connection (dashed arrow), Element-wise Addition (plus sign), and Element-wise Multiplication (multiplication sign). The entire design emphasizes efficient, scalable feature integration through attention caching and multi-dimensional transformation.
