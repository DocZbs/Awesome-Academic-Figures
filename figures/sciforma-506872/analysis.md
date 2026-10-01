# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InpDiffusion: Image Inpainting Localization via Conditional Diffusion Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02816

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Dual-stream Multi-scale Feature Extractor (DMFE), designed to capture features at multiple scales through two parallel processing streams. The global layout is horizontally oriented, with data flowing from left to right. The structure begins with an initial Conv1×1 layer on the far left, which serves as the input to both streams. From this point, the network splits into two distinct branches: an upper stream and a lower stream, each containing three parallel multi-scale feature extraction blocks. Each block within the streams consists of a combination of convolutional layers with varying kernel sizes and dilation rates, specifically Conv3×3 with dilation rates of 7, 5, and 3, along with smaller kernels like Conv7×1, Conv5×1, Conv3×1, Conv1×7, Conv1×5, and Conv1×3. These layers are arranged vertically within each block, forming a stacked structure. The outputs of these layers within each block are combined using element-wise addition operations, represented by circular nodes labeled with a '+' symbol. The outputs from the three blocks in each stream are then merged via concatenation, indicated by a circular node labeled 'C'. The concatenated output from both streams is then passed through a final Conv3×3 layer before exiting the module. Additionally, skip connections are present: the output of the initial Conv1×1 layer is directly connected to the element-wise add operation at the top of each block in the upper stream, and similarly, the output of the lower stream’s first block is connected to the element-wise add operation at the bottom of each block in the lower stream. The figure includes a legend at the bottom left, defining the symbols: '+' denotes element-wise addition, 'C' denotes concatenation, and 'Conv3×3 Dilate=d' represents a 3×3 convolutional layer with dilation rate d. The entire diagram is enclosed within a rectangular border, with the title 'Dual-stream Multi-scale Feature Extract' positioned at the top center.
