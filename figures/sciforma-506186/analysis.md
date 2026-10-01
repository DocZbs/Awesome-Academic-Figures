# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

IGC: Integrating a Gated Calculator into an LLM to Solve Arithmetic Tasks Reliably and Efficiently — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00684

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part neural architecture for processing arithmetic questions in natural language, divided into 'Input Mapping' on the left and 'Output Mapping' on the right, with an implied central 'Calculator' module not shown. The global layout consists of two large gray rectangular regions side-by-side, each labeled with its respective function. Below the entire diagram, a caption explains the roles: Input Mapping extracts operands and operators from input tokens, while Output Mapping applies the calculated result to future output tokens.

In the Input Mapping section, a sequence of input tokens is represented at the bottom as yellow rectangles labeled T_{t-3}, T_{t-2}, T_{t-1}, and T_t, with the example query 'Q: What is 123 times 40?' shown below. The token T_t is designated as the 'Anchor token'. From these tokens, three distinct pathways are generated: Key (K), Value (V), and Query (Q), each represented by a cyan square. These are fed into an 'Attention' mechanism, depicted as an oval, which processes them using stacked yellow blocks symbolizing feature representations. The output of the Attention module is passed to an 'FNN + Classifier' block, shown as a cyan rounded rectangle. This component produces three outputs, displayed as yellow boxes above: 'Operand 1' with value '123##', 'Operand 2' with '40####', and 'Operator' with '*'. These represent probability distributions over digit values for each operand and the operator, as described in the caption.

The Output Mapping section receives the result from the calculator, shown as a yellow box labeled 'Result' with '4920######' and the numeric value '4920' below. This result is split into two pathways: one leading to a 'Gates' block (cyan rounded rectangle) and another to a 'Values' block (also cyan). Both are connected to a series of future output tokens, represented as yellow rectangles labeled T_t, T_{t+1}, T_{t+2}, T_{t+3}, ..., with the label '(future tokens)' beneath. The Gates and Values outputs are combined and fed into a small white box containing a sigmoid-like curve, which modulates the future tokens. The final output is shown as a sequence of tokens with the computed result '4920' inserted at position T_{t+2}, indicating the model's ability to insert the correct answer into the output stream. The connections between modules are indicated by black arrows, showing the flow of information from input tokens through attention and classification, and from the calculator result through gates and values to modify future tokens. The color scheme consistently uses yellow for tokens and results, cyan for processing modules, and gray for background regions.
