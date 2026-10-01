# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Extracting Interpretable Task-Specific Circuits from Large Language Models for Faster Inference — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15750

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative diagram of three different methods for ablating or pruning a neural network component, labeled 'Original', 'Zero', and 'Mean', arranged side-by-side from left to right, separated by vertical dashed lines. Each panel illustrates how a component—labeled 'Component (Head/MLP)'—interacts with a 'Residual Stream' and how modifications affect the flow.

In the 'Original' panel on the left, a light blue rounded rectangle labeled 'Component (Head/MLP)' receives input from the 'Residual Stream', represented as a wide beige horizontal arrow pointing right. The output of the component is added to the residual stream via a pink circular node labeled with a '+' symbol, indicating element-wise addition. The resulting sum continues along the residual stream.

The 'Zero' panel in the center shows the same structure but with the component crossed out by two thick black diagonal lines, indicating it has been deactivated or set to zero. The input to the component is still present (indicated by a gray arrow), but the output is blocked, and the pink '+' node receives no contribution from the component, effectively adding zero to the residual stream. This represents a zero-ablation where the component's output is nullified.

The 'Mean' panel on the right depicts a different ablation strategy. Here, the component is absent entirely. Instead, a vertical stack of four small rectangles (representing a vector or tensor) is shown, connected to the pink '+' node. An arc labeled 'Avg. activation over reference distribution' points from the residual stream to this stack, indicating that the component’s output is replaced by the average activation computed over a predefined reference dataset. This averaged value is then added to the residual stream via the '+' node.

All three panels share the same basic layout: a horizontal residual stream at the bottom, a component (or its replacement) above it, and an addition operation feeding back into the stream. The visual elements are consistent across panels: the component is a light blue rounded rectangle, the addition node is a pink circle with '+', and the residual stream is a beige arrow. The differences lie in how the component is treated—active, disabled (zeroed), or replaced by a mean activation value—demonstrating three distinct ablation techniques.
