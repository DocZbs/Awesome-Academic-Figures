# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GAMED: Knowledge Adaptive Multi-Experts Decoupling for Multimodal Fake News Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12164

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into two main parts: the left side illustrates the architecture of MMoE-Pro, while the right side details a four-module pipeline for enhancing representations through adaptive feature distribution adjustment.

[1] Global Layout and Structure:

The left portion presents a dual-path structure with two parallel processing streams, each containing multiple experts and gates. Inputs labeled r^0_is/t/mm and r^1_is/t/mm enter the top of the diagram and are processed through expert networks and gating mechanisms. The bottom section shows shared attention blocks feeding into three experts (Expert 0, Expert 1, Expert 2), which then connect to two separate gating units (Gate A and Gate B). Outputs from these gates are combined via weighted summation (indicated by ⊕ symbols) and fed into cross-layer connections before producing final outputs. The right portion displays a sequential pipeline composed of four distinct modules: Coarse Prediction, Consistency Learning, Mu, and Sigma, arranged vertically. These modules feed into an AdaLN block, which produces enhanced representations e_ip/is/t/x and e_mm.

[2] Visual Modules and Attributes:

On the left, the experts are represented as colored rectangular boxes: Expert 0 is orange, Expert 1 is blue, and Expert 2 is green. Each expert receives input from a shared attention block consisting of Linear-SiLU-Linear layers. The attention blocks are gray rectangles with dashed outlines. Gates A and B are gray rectangles with 'Softmax' labels above them, indicating they compute routing weights. The summation nodes (Σ) are circular and connected to the gates. The inputs r^0_is/t/mm and r^1_is/t/mm are depicted as horizontal bars with three colored circles (green, orange, blue), representing multi-modal features. The outputs are similarly structured.

On the right, the Coarse Prediction module contains a Linear-SiLU-Linear stack with dim=64, followed by a Sigmoid activation. The Consistency Learning module has an identical structure but uses 1-Sigmoid. Both modules receive inputs r_ip/is/t and r_mm respectively. The Mu and Sigma modules each consist of Linear-SiLU-Linear stacks with dim=1, producing μ_ip/is/t/mm and σ_ip/is/t/mm. These outputs are fed into an AdaLN block (pink-to-green gradient rectangle), which also takes e_mm as input. The final outputs are e_ip/is/t/x and e_mm, shown as vertical bars.

[3] Connections and Arrows:

In the left diagram, arrows indicate data flow: inputs go to attention blocks, which feed into experts. Experts connect to gates, whose outputs are summed and routed via multiplicative gates (⊗) to produce intermediate representations. Cross-layer connections link outputs from one layer to inputs of another. On the right, arrows show a clear forward pass: r_ip/is/t goes to Coarse Prediction, r_mm to Consistency Learning. Their outputs (after Sigmoid/1-Sigmoid) control the Mu and Sigma modules. The outputs μ and σ from Mu and Sigma are fed into AdaLN along with e_mm, producing the enhanced representations. All connections are solid black arrows, except for dashed lines indicating structural grouping within modules.
