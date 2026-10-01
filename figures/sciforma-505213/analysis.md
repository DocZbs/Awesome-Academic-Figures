# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Scalable Multirobot Control: Fast Policy Learning in Distributed MPC — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19669

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of two approaches for distributed model predictive control (DMPC) in multi-robot systems (MRS), labeled as 'A Nonlinear DMPC' and 'B Our approach'.

[1] Global Layout and Structure:
The figure is divided into two main panels, A and B, placed side by side. Panel A illustrates the traditional nonlinear DMPC framework, while Panel B outlines the proposed method. Each panel contains a flow diagram depicting the computational and control workflow. Below each panel, there are two bullet points summarizing the key characteristics or limitations of the respective approach.

[2] Visual Modules and Attributes:
In Panel A, the top module is an 'NLP solver' box, split vertically into two sections. The left section, labeled 'Interior Point', contains icons and names of solvers: IPOPT (with COIN-OR logo) and fmincon (with MATLAB logo). The right section, labeled 'Sequential QP', contains the WORHP solver (with its blue wave-like logo). This NLP solver box feeds into a central light purple rounded rectangle labeled 'DMPC Problem (6)', which then outputs to a gray rounded rectangle labeled 'MRS'. A feedback loop from MRS back to the DMPC Problem is shown with a black arrow. Additionally, a curved red arrow from the NLP solver to the DMPC Problem carries the label 'u(k), ..., u(k+N−1)', indicating the computed control sequence. The bottom summary notes: 'Computing control sequences with NLP solvers' and 'Hard to meet the real-time requirement'.

In Panel B, the top section is titled 'Distributed training' and enclosed in a red-bordered rounded rectangle. Inside, a light purple shaded area labeled 'Local policy' shows stacked layers (i, i+1, i+2) with dots representing data points or policy parameters. This connects via a dashed blue arrow labeled 'Online training' to a cylinder labeled 'Prediction'. A thick red curved arrow labeled 'Control policy' flows from the Prediction cylinder to a gray rounded rectangle labeled 'MRS'. A green arrow labeled 'States' loops from MRS back to the Local policy. The bottom section, titled 'Distributed deploying' and also enclosed in a red-bordered rounded rectangle, shows a simplified version of the Local policy (a single layer with dots) feeding into an MRS block, which then connects to a vertical purple rectangle labeled 'Communication topology' with 'e_Ni' on its right side. A feedback loop from this communication block returns to the input of the Local policy. The bottom summary notes: 'Generating control policy via policy learning' and 'Fast policy learning and deploying abilities'.

[3] Connections and Arrows:
In Panel A, the NLP solver provides inputs to the DMPC Problem (6) via a green curved arrow, and the DMPC Problem outputs to MRS via a black arrow. A black feedback arrow from MRS returns to the DMPC Problem. A red curved arrow from the NLP solver to the DMPC Problem indicates the output of the control sequence.

In Panel B, during 'Distributed training', a dashed blue arrow labeled 'Online training' goes from the Local policy to the Prediction module. A thick red curved arrow labeled 'Control policy' goes from Prediction to MRS. A green arrow labeled 'States' forms a feedback loop from MRS to the Local policy. During 'Distributed deploying', a solid black arrow goes from the Local policy to MRS, and another black arrow goes from MRS to the Communication topology block, which then feeds back to the Local policy via a black feedback loop. The overall structure emphasizes a learning-based, distributed, and scalable approach compared to the computationally heavy, centralized NLP-based method.
