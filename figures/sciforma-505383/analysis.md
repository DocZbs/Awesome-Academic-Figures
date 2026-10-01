# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Modeling Continuous Spatial-temporal Dynamics of Turbulent Flow with Test-time Refinement — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19927

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the proposed SR-TR method, a framework for super-resolution and temporal refinement in fluid dynamics simulations, structured into two main components: the Continuous Spatial Transition Unit (CSTU) and Degradation-based Refinement. The global layout is divided by a vertical dashed line into two sections: on the left, the Implicit Neural Representation (INR) module is shown in detail, and on the right, the full SR-TR pipeline is depicted as a horizontal workflow.

On the left side, the INR module is presented as a vertical stack of operations starting from DNS Q^d(t), a low-resolution input field represented as a color heatmap. This input passes through two consecutive Conv 3x3 layers, followed by a 'Sampling Features' block, then another two Conv 3x3 layers, and finally outputs Q^c(t), a higher-resolution continuous representation. All blocks in this stack are gray rectangles with black text, and arrows indicate the forward flow.

On the right side, the main SR-TR pipeline begins with DNS Q^d(t), again shown as a heatmap, feeding into the INR block. An arrow labeled 'Sampling to target resolution' points from INR to the output Q^c(t), which is also a heatmap. This output is then passed to the PRU (Physics-Respecting Unit), a rounded rectangle, which captures fluid dynamics under the underlying physics governed by the Navier-Stokes Equation, as indicated by a gray box above it. The PRU outputs Q^d(t+δ), another heatmap, representing the predicted next-time-step field at the target resolution.

This output is then refined via the Degradation-based Refinement stage. A separate input, LES Q''(t+δ), a lower-resolution field derived from Large Eddy Simulation, is shown below the main flow. It is connected by an upward arrow to the final output Q^d(t+δ), which is identical in appearance to the PRU’s output but represents the refined result. Above this refinement step, a gray box lists the underlying physics: Kinetic Energy and Mean Value. A large brace groups the INR and PRU stages, labeled 'Continuous Spatial Transition Unit (CSTU)', while another brace groups the PRU output and LES input, labeled 'Degradation-based Refinement'.

All data fields (Q^d(t), Q^c(t), etc.) are visualized as heatmaps with blue-to-orange gradients, indicating spatial variation. The connections between modules are solid black arrows, and the entire diagram uses a clean, schematic style with clear labels and minimalistic shapes. The top title reads 'The proposed SR-TR method', and the left section is titled 'Implicit neural representation (INR)'.
