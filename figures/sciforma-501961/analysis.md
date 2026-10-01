# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the internal architecture of a proposed Pixel Processing Unit (PPU), which is designed to perform spatial convolution operations through a hierarchical structure of window processing units (WPUs). The global layout consists of two main components: a left-side block labeled 'PPU' containing multiple WPUs and an online adder tree, and a right-side detailed view of a single WPU, labeled 'WPU-S', showing its internal computation graph.

In the PPU block, N parallel WPUs (WPU-1 to WPU-N) receive input feature maps (IFM-1 to IFM-N) and corresponding kernel weights (K-1 to K-N) via downward arrows. Each WPU processes its respective input and kernel pair. The outputs from all WPUs are fed into a multi-level 'Online Adder Tree', depicted as a gray inverted trapezoid, which aggregates the results hierarchically. The final output of the adder tree is directed to a component labeled 'END-U', which also sends a feedback signal labeled 'To Control' back to the control logic, indicating a possible loop or synchronization mechanism. The entire PPU block is shaded light blue, emphasizing it as a unified processing unit.

The right-hand side of the figure provides a zoomed-in view of a single WPU, designated as 'WPU-S'. This module contains K*K local processing elements, each represented by a circle with a black 'X' symbol, labeled OLM-1 to OLM-K*K. These OLMs (likely representing Operation Logic Modules) are connected via solid arrows to intermediate summation nodes, shown as circles with a '+' symbol. The summation nodes form a tree-like structure, where outputs from multiple OLMs are combined at each level using addition operations. Dashed lines between nodes indicate optional or conditional connections, possibly representing skip connections or dynamic routing. The final summation node at the bottom produces the output of the WPU-S, indicated by a downward arrow. The entire WPU-S structure is enclosed in a black-bordered box, clearly separating it from the PPU block.

Connections between the two blocks are shown via dashed lines, indicating that the WPU-S is a representative instance of the general WPU structure within the PPU. The overall workflow follows a dataflow model: inputs are processed in parallel by individual WPUs, then summed hierarchically by the online adder tree, and finally passed to the END-U for further control or output. The design emphasizes parallelism, hierarchical aggregation, and modular computation, suitable for efficient spatial convolution in hardware accelerators.
