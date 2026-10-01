# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Symbolic Approximations to Ricci-flat Metrics Via Extrinsic Symmetries of Calabi-Yau Hypersurfaces — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19778

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two side-by-side computation graphs illustrating the derivation of attribution weights, with arrows indicating data dependencies. The global layout consists of two vertically aligned, parallel flow diagrams, each representing a different approach to computing salience 'a' from input coordinates 'z'. Both graphs share the same top-to-bottom structure: starting from 'Coords z', followed by 'Features x', then 'Metric g', and finally 'Salience a'. Each node is represented as a text label within a rectangular box, though boxes are not explicitly drawn; instead, labels are placed with vertical arrows connecting them. The left graph demonstrates an incorrect method where differentiation with respect to features causes a conflict due to overlapping operations. It shows 'Coords z' mapped via function f(−) to 'Features x', which then undergoes a pullback operation denoted as ℓ*(g# + dφ(−)) to produce 'Metric g'. From 'Metric g', the gradient |∂L(−)/∂x| is computed and passed down to 'Salience a'. A red curved arrow labeled '∂' originates from 'Features x' and loops back to 'Salience a', indicating an attempted differentiation with respect to features, which the caption states is impossible due to overlap with an earlier differentiation step. The right graph shows the correct implementation, where both differentiations occur in feature space. The structure is identical up to 'Metric g', but the pullback operation is modified to ℓ*(g# + f*dφ(−)), incorporating the pushforward f* to ensure proper differentiation. The red curved arrow labeled '∂' again connects 'Features x' to 'Salience a', but now this differentiation is valid and consistent with the updated metric computation. The visual attributes include black text for all nodes and most arrows, with the red curved arrow emphasizing the differentiation path. The figure's caption clarifies that the left side illustrates a problematic case of overlapping differentiations, while the right side shows the corrected version with both differentiations properly performed in feature space. The overall design is minimalistic, using only text labels and directed arrows to convey the computational flow and dependencies.
