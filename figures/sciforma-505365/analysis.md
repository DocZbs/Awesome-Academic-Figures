# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Fully Hardware Implemented Accelerator Design in ReRAM Analog Computing without ADCs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19869

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the conventional Compute-in-Memory (CiM) architecture, depicting a two-stage processing flow between consecutive layers, labeled ℓⁿ and ℓⁿ⁺¹. The global layout is horizontal, with the left side representing layer ℓⁿ and the right side representing layer ℓⁿ⁺¹, connected by a central activation unit. Each layer consists of a 3×3 grid of green rectangular memory cells enclosed within a dashed boundary, symbolizing the analog computation core. Above each grid, three DAC (Digital-to-Analog Converter) blocks are shown as light blue rectangles with rounded corners, each receiving a digital input signal represented by a square pulse waveform. These DACs convert digital inputs into analog signals that are fed into the corresponding rows of the memory array. Below each grid, two horizontal beige rectangular blocks are stacked: the top one labeled 'ADC' (Analog-to-Digital Converter) and the bottom one labeled 'Shift & Adder', indicating post-processing components for digitizing and aggregating the analog outputs. The entire structure for each layer is labeled at the bottom with its respective layer index, ℓⁿ on the left and ℓⁿ⁺¹ on the right. Positioned centrally between the two layers is a pink rounded rectangle labeled 'Activation Unit (CMOS Logic)', which processes the output from layer ℓⁿ before feeding it to layer ℓⁿ⁺¹. Two thick green arrows indicate the data flow: one originates from the 'Shift & Adder' block of layer ℓⁿ and points upward to the Activation Unit, while the second arrow emerges from the Activation Unit and points rightward to the top row of DACs in layer ℓⁿ⁺¹. This visualizes the sequential processing pipeline where the output of one layer is transformed by CMOS-based activation logic before being used as input to the next layer. The diagram emphasizes the hybrid nature of the architecture, combining analog computation within the memory arrays with digital control and activation via CMOS logic.
