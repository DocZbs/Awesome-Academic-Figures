# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Window Processing Unit (WPU-S), designed for conventional bit-serial convolution operations on a K×K convolution window. The overall layout is horizontally oriented, with multiple parallel processing paths arranged vertically from top to bottom, converging into a single output path on the right side. Each processing path represents an identical computational chain, and the vertical dashed line indicates that there are multiple such chains, corresponding to the number of elements in the convolution window (K² total). The entire structure is enclosed within a large rectangular boundary labeled 'WPU-S' at the bottom right corner.

Each individual processing path begins with a two-input AND gate. One input to the AND gate is a single-bit signal labeled '1', while the other is an n-bit signal labeled 'n'. The output of the AND gate is also an n-bit signal, which feeds into a small square block containing a '+' symbol, representing an adder. This adder receives feedback from its own output via a looped arrow, indicating a recursive or iterative addition process. The output of this adder then goes into a rectangular block labeled '>>', which denotes a right-shift operation (likely a bit shift register or barrel shifter). The output of the shift block proceeds to the right, where all such outputs from each parallel path converge.

On the far right, a large trapezoidal or funnel-shaped component with a '+' symbol inside acts as a summation unit, combining all the outputs from the individual processing paths. A single arrow emerges from this summation unit, pointing to the right, labeled 'To Adder Tree', indicating that the accumulated result is passed to a subsequent stage for further processing, likely a hierarchical adder tree for final accumulation.

All components are rendered in black and white with solid lines and standard digital logic symbols. The AND gates are shown as D-shaped blocks with two inputs and one output. The adders are small squares with a '+' sign. The shift operators are rectangles with '>>' notation. The connections between modules are represented by straight lines with arrowheads indicating direction of data flow. Feedback loops are shown as curved arrows returning from the output of the adder back to its input. The overall structure emphasizes parallelism and bit-serial computation, where each path processes one element of the convolution window, and the results are summed together before being sent to the next stage.
