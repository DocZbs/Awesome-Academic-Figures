# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GAMED: Knowledge Adaptive Multi-Experts Decoupling for Multimodal Fake News Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12164

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a novel veto-based decision-making model designed to compute a final output probability \(\hat{y} = P_{mix}\) through a structured conditional logic flow. The global layout is hierarchical and centered around an 'Output' module at the top-middle, which feeds into a green circular node labeled \(\hat{y} = P_{mix}\), representing the final prediction. This central output node receives inputs from two veto mechanisms—'Veto 1' on the left and 'Veto 2' on the right—via dashed arrows, indicating feedback or override paths. These vetoes also receive direct feedback from the output node via solid arrows, forming a closed-loop control structure.

The core logic begins at the bottom with a light peach-colored rectangular box containing five input features: \(o_{ip}/o_{is}/o_t/o_{mm}/o_{mix}\). These inputs pass through a 'Sigmoid' activation function, leading to a 'Confidence' module (also light peach), which produces a confidence score \(P_i\). From here, the flow branches based on the condition \(\theta_{low} < P_i < \theta_{high}\), represented by a light blue rounded rectangle. If this condition is true ('Y'), the flow proceeds directly to the 'Output' module. If false ('N'), it splits into two parallel branches.

On the left branch, if \(P_i > \theta_{high}\) (light blue rounded rectangle), then if \(P_i > P_{mix}\) (another light blue rounded rectangle), the flow triggers 'Veto 1' (gray rounded rectangle), which sets \(P_{mix} = P_i\). A dashed arrow from 'Veto 1' points back to 'Output', indicating a potential override. On the right branch, if \(P_i < \theta_{low}\) (light blue rounded rectangle), then if \(i \in Majority\) (light blue rounded rectangle), the flow triggers 'Veto 2' (gray rounded rectangle), which updates \(P_{mix} = (\text{Max } P_i + P_{mix})/2\). Similarly, a dashed arrow from 'Veto 2' points back to 'Output'.

The 'Output' module receives inputs from all three paths: the direct 'Y' path from the middle condition, and the 'N' paths from both veto branches. Solid arrows labeled 'N' connect the 'Veto 1' and 'Veto 2' modules to 'Output', indicating that if either veto is triggered, the output is updated accordingly. The final \(\hat{y} = P_{mix}\) is computed based on the updated \(P_{mix}\) value, which may have been modified by either veto mechanism. The diagram uses consistent visual attributes: gray rounded rectangles for veto and output modules, light blue rounded rectangles for conditional checks, and light peach rectangles for input and confidence layers. Solid arrows denote primary data flow, while dashed arrows indicate feedback or override connections.
