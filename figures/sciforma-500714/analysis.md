# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Flex-PE: Flexible and SIMD Multi-Precision Processing Element for AI Workloads — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a detailed architectural design of a SIMD (Single Instruction, Multiple Data) fixed-point configurable activation function (AF) unit, capable of computing Sigmoid, Tanh, ReLU, and Softmax functions. The diagram is divided into two main parts: (a) the high-level block diagram of the overall architecture, and (b) the detailed internal circuitry of the CORDIC stages and supporting components.

Part (a) shows the global layout as a pipeline consisting of two primary processing blocks: 'Hyperbolic CORDIC Stages' (light green rectangle) and 'Linear CORDIC stages' (light blue rectangle). Inputs Xo, Yo, and Zo enter the system; Zo is first demultiplexed via a DEMUX block, which also receives a ReLU control signal. The Hyperbolic CORDIC Stages process these inputs under clock (CLK) control and produce outputs Sinh x and Cosh x. These are fed into a purple circular adder to compute e^x = Sinh x + Cosh x. This result is stored in a FIFO buffer labeled with elements e^x1 through e^xn. The e^x output is then routed through multiple multiplexers (MUX, pink trapezoids) to select between different computation paths. One path feeds into another adder (purple circle) where it is added to 1, controlled by a MUX selecting either 0 or Zo[N-1], with an additional Sig/Soft control input. The outputs from this stage are labeled Num and Denom, which feed into the Linear CORDIC stages. The Linear CORDIC stages also receive a tan signal from the same adder. The final output is selected by a MUX at the end, driven by the Num and Denom signals. A 'sel_af[1:0]' control signal selects the specific activation function mode.

Part (b) provides the detailed internal structure of the CORDIC stages. It illustrates a series of CORDIC Stage 0, Stage 1, ..., up to Stage n, each containing P-stage SIMD LBS Shifters for X, Y, and Z data paths (each 32-bit wide, labeled [31:0]). Each stage includes a Sign-Extract block and a ROM lookup table feeding into a SIMD Add_Sub unit. The diagram also shows vertical SIMD datapaths on the left, indicating support for 2x16/1x32-Bit, 2x8/1x16-Bit, and 2x4/8-Bit configurations. Below the CORDIC stages, there are four horizontal bars representing different SIMD configurations: 1x 32-Bit, 2x 2 x 16-Bit (TM), 2 x 4 x 8-Bit (TM), and 2 x 8 x 4-Bit (TM), each associated with a [5,4] parameter. At the bottom, two detailed sub-blocks are shown: a '5-stage SIMD Logarithmic barrel shifter' with adaptable stages (Stage 1 to Stage 5) and control signals (ctrl, Mux_in, Shift_sel), and a 'SIMD Configurable Add_Sub Block' illustrating 4-bit, 8-bit, 16-bit, and 32-bit Add/Sub SIMD modes using full adders (FA) and carry chains (Cout, Ci). All connections are depicted with directed lines, indicating data flow from left to right and top to bottom, with control signals often shown as dashed lines or labeled arrows.
