# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Task-Driven Fixation Network: An Efficient Architecture with Fixation Selection — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01548

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the TDFN (Task-Driven Fixation Network) architecture, which is designed to process an input image through two parallel channels—Low Resolution Channel and High Resolution Channel—before integrating their outputs into a hybrid encoder for downstream tasks. The global layout is vertically structured, with the input image at the bottom, feeding into two separate processing streams that converge at the top into a shared hybrid encoder. Each channel follows a similar processing pipeline: starting from the input image, it passes through an embedding layer, then combines positional encoding via a summation operation, followed by an encoder and work memory module. The low-resolution channel is visually represented with orange shading, while the high-resolution channel uses light blue shading. Both channels have their own 'Embedding' block, which receives the input image and produces feature representations. These embeddings are then combined with 'Positional Encoding' using a circular plus symbol indicating element-wise addition. The resulting features are processed by an 'Encoder' block, followed by a 'Work Memory' block, both of which are stacked vertically within each channel. The outputs from the two channels are then merged into a 'Hybrid Encoder' block, depicted in lavender, which also incorporates 'Channel Encoding' via another summation operation for each channel before merging. The Hybrid Encoder is composed of two stacked components: 'Encoder' on top and 'Work Memory' below. From this hybrid encoder, two outputs are generated: one feeds into a 'Task Network' and the other into a 'Fixation Generator'. A feedback loop is shown from the Fixation Generator back to the Hybrid Encoder, suggesting iterative or adaptive processing. All blocks are rectangular with rounded corners, and arrows indicate the direction of data flow. Text labels are placed inside or adjacent to the blocks, clearly identifying each component. The entire structure emphasizes a dual-path, attention-based architecture with memory integration and task-specific output generation.
