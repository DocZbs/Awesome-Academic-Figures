# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

USEFUSE: Uniform Stride for Enhanced Performance in Fused Layer Architecture of Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13724

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural design of a Window Processing Unit (WPU-T) used in a conventional bit-serial convolution implementation. The overall layout is a horizontal dataflow pipeline enclosed within a rectangular boundary labeled 'WPU-T' at the bottom right. The structure progresses from left to right, depicting the sequential processing stages involved in performing convolution operations on a K×K window in a temporal manner.

Starting from the left, two input lines are shown: one labeled '1' and another labeled 'n', both feeding into an AND gate symbolized by a curved D-shaped box. The output of this AND gate, also labeled 'n', proceeds to a summation block represented by a square with a '+' symbol inside. This summation block has a feedback loop connecting its output back to its input, indicating iterative or recursive addition. The output of the summation block then feeds into a right-shift operation block denoted by '>>', which shifts bits to the right.

The result of the shift operation is stored in a vertical rectangular register labeled 'Activation Register'. From this register, the data flows to a multiplexer (MUX), depicted as a trapezoidal shape with two inputs and one output. One input to the MUX comes from the Activation Register, while the other is a constant '0'. A control signal, labeled 'Control', selects between these two inputs. The selected output from the MUX is then added to the contents of an 'Accumulation Register' via another summation block ('+').

The Accumulation Register is a vertical rectangle labeled accordingly, and it has a feedback loop returning its output to the input of the summation block, enabling iterative accumulation. The final output of the Accumulation Register exits the WPU-T block through a thick arrow pointing rightward, labeled 'To Adder Tree', indicating that the accumulated result is passed to a subsequent adder tree for further processing.

All components are connected by solid black arrows indicating the direction of data flow. The diagram uses simple black-and-white line art with clear labels for each module. The primary modules include logic gates (AND), arithmetic units (addition, shift), registers (Activation, Accumulation), and a multiplexer, all arranged in a linear, left-to-right sequence with feedback loops for iterative computation. The entire structure is designed to process convolution operations bit-serially over time, as described in the caption.
