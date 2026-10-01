# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a tile/pyramid-level architectural design for a parallel processing system, structured as a multi-stage, multi-processor pipeline. The global layout is horizontally segmented into stages, with vertical columns representing processing stages (from stage 1 to stage M), and rows representing parallel processing units (PPUs) organized by group (PPU-1, PPU-2, ..., PPU-P). On the far left, a control unit labeled 'CCU' (Control and Configuration Unit), depicted as a blue rectangle, interfaces with a 'DRAM Interface' shown as a gray cylinder. The CCU manages data flow between DRAM and the processing array. Data from DRAM flows through the CCU to multiple 'Input Buffer' modules, each represented as a beige rounded rectangle, one per PPU row. These input buffers feed data to the corresponding PPU in each stage.

Each processing stage contains a set of PPU blocks arranged vertically: PPU-1-k, PPU-2-k, ..., PPU-P-k, where k ranges from 1 to M. Each PPU is a light blue rectangle with a label indicating its group and stage index (e.g., PPU-1-1, PPU-2-2). Above each column of PPUs, there is a 'Kernel Buffer', shown as a light green rounded rectangle, which supplies kernel data to all PPUs in that stage. The Kernel Buffer connects to each PPU in the column via green arrows, indicating kernel data distribution. The Input Buffer for each PPU row connects to the corresponding PPU in each stage via orange arrows, indicating data input flow.

Processing proceeds from left to right across stages. Within each stage, the output of a PPU is passed to the next PPU in the same row via black arrows, forming a horizontal chain within each PPU group. For example, PPU-1-1 outputs to PPU-1-2, which then outputs to PPU-1-3, and so on up to PPU-1-M. This creates a pipelined execution flow within each row. Dotted lines between PPU blocks indicate continuation of the pattern for intermediate stages or PPU groups not explicitly drawn.

At the end of each stage, the final PPU in each row (e.g., PPU-1-M, PPU-2-M, etc.) outputs data to an 'Output Buffer', shown as a dark gray rounded rectangle. There is one Output Buffer per PPU row, positioned below the last PPU in that row. The connections from the last PPU to the Output Buffer are solid black arrows. The entire structure is designed to support parallel processing across PPU groups and pipelined execution across stages, with shared kernel data per stage and dedicated input/output buffers per PPU row. The figure caption 'Tile/Pyramid Level Design' suggests this architecture is part of a hierarchical or tiled computation framework, likely used in accelerators for tasks such as convolutional neural networks or image processing, where data is processed in tiles and kernels are reused across stages.
