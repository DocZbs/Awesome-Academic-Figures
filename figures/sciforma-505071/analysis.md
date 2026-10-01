# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

An Engorgio Prompt Makes Large Language Model Babble on — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19394

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage process for sequence composition, divided into an upper section labeled 'Token Sequence' and a lower section labeled 'Distribution Matrix'. The upper section represents the testing stage, while the lower section represents the generation stage.

In the 'Token Sequence' section, the input is structured as a horizontal sequence of three components: 'Prefix', 'Trigger', and 'Infix', arranged left to right within a rectangular box. The 'Trigger' component is highlighted in red, while 'Prefix' and 'Infix' are white. Below these components, upward-pointing arrows connect to mathematical notations: 'P_{1:i}' under 'Prefix', 'x' under 'Trigger', and 'P_{i+1:m}' under 'Infix'. A dashed curved arrow extends from the 'Trigger' component to the right, pointing to a large blue rectangular block labeled 'Output Part', which is positioned below the label 'Output Part'. An upward arrow beneath this blue block points to the variable 'y', indicating the output of the sequence.

The 'Distribution Matrix' section below mirrors the structure of the input but represents the generation stage. It contains a long horizontal bar segmented into four parts: the first segment is white, followed by a red segment, then another white segment, and finally a long red segment extending to the end. These segments correspond to the components of the input sequence. Below this bar, upward-pointing arrows point to the following notations: 'P_{1:i}' under the first white segment, 'θ_{1:t}' under the first red segment, 'P_{i+1:m}' under the second white segment, and 'θ_{t+1:s−m}' under the final long red segment. This suggests that during generation, the model uses a distribution over parameters (denoted by θ) to produce the output sequence, with the red segments representing parameterized or generated portions.

The overall layout is clean and modular, with clear separation between the testing and generation stages. The use of color—red for trigger and generated parts, blue for output, and white for fixed or prefix/infix parts—helps distinguish different roles in the sequence. The figure visually conveys that the 'Trigger' in the input sequence activates a generation process, resulting in an output sequence, and that the 'Distribution Matrix' encodes the probabilistic or parametric structure used to generate the output, particularly in the regions corresponding to the trigger and infix.
