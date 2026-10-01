# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AV-DTEC: Self-Supervised Audio-Visual Fusion for Drone Trajectory Estimation and Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16928

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Feature Enhancement Module, designed to refine input features through a dual-attention mechanism. The global layout is structured as a horizontal flow from left to right, with two parallel processing streams that converge at the end. On the far left, two input nodes labeled 'L' and 'M' (both represented as rounded rectangles with light red fill) feed into separate linear transformation blocks. Each 'Linear' block is depicted as a trapezoid with light blue fill and black border, indicating a linear projection operation.

From the top stream, the output of the first 'Linear' block splits into three components: v₂, k₂, and q₂, each shown as a rounded rectangle with light blue fill. Similarly, the bottom stream processes 'M' through another 'Linear' block, producing q₁. The second 'Linear' block in the top stream (fed by 'L') produces v₁ and k₁. These components form the query (q), key (k), and value (v) vectors for two distinct attention mechanisms.

Each attention head computes attention scores via element-wise multiplication (symbolized by a circle with an 'X', as defined in the legend) between the query and key vectors. The resulting scores are passed through a 'Softmax' function (rounded rectangle with light purple fill) to normalize them into attention weights. These weights are then multiplied element-wise with the corresponding value vectors (v₁ and v₂) to produce weighted value outputs.

The weighted values are fed into subsequent 'Linear' blocks (trapezoids) to project them back to the original feature space. The outputs of these two linear layers are combined using element-wise addition (symbolized by a circle with a '+' sign, as per the legend), forming the final enhanced feature representation, which is output as 'M' (same style as the input 'M').

A residual connection is also present: the original 'M' input is directly connected to the final addition node, allowing the module to learn residual changes. The figure includes a legend at the bottom clarifying the symbols: the '+' circle denotes element-wise addition, and the 'X' circle denotes element-wise multiplication. The entire structure emphasizes parallel processing with attention-based feature weighting and residual learning.
