# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Diffusion Prior Interpolation for Flexibility Real-World Face Super-Resolution — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16552

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the graphical model of Diffusion Prior Interpolation (DPI), a two-stage generative process for image reconstruction from noisy input and conditional guidance. The overall layout is horizontal, divided into two main stages labeled 'STAGE I' and 'STAGE II', each spanning a sequence of time steps from T down to 0. The process begins at the rightmost end with an initial noisy image x_T and a corresponding initial condition y_T, both represented as gray and light blue circular nodes respectively, with accompanying visual examples below them. These inputs undergo a reverse diffusion process through time steps t = T, ..., τ−1, then τ−1, ..., 0.

In STAGE I, the x_t and y_t sequences are processed through a denoising step using a probability model p_θ(x'_t−1 | x_t) and p_θ(y'_t−1 | y_t), producing intermediate states x'_t−1 and y'_t−1. These are then element-wise multiplied (denoted by ⊙) by masks m_f and m_f respectively. The resulting masked outputs are combined via element-wise addition (⊕) to form updated x_t−1 and y_t−1. A Corrector function (CRT), shown as a yellow rectangular node, is applied to y_t−1 to produce a corrected version, which feeds into the next stage.

A key component in STAGE I is the generation of Conditional Masks (CMs). From the intermediate condition y_t, a set of derived images is shown: the original y_t, a processed version y_t^p, its Laplacian ∇²y_t^p, and a mask m_a. These are enclosed in a dashed box, indicating they are used to compute the RACM (m_a). The FCM (m_f) is also generated during this stage. Both masks are used in subsequent element-wise multiplications.

In STAGE II, the process continues from time step τ−1 to 0. The x and y sequences are again updated using the same denoising model, but now the masks are combined: (1−m_a) + (1−w)m_a for x, and w·m_a for y. The CRT function is applied again to y_τ−1, producing y'_0. The final output x_0 is obtained by combining the last x state with the final y state via element-wise multiplication and addition, yielding a clear reconstructed image shown below the x_0 node.

All nodes are circular, with x variables in gray and y variables in light blue. The masks m_f and m_a are visually represented as black-and-white grid patterns and dark noise patterns respectively. Arrows indicate the direction of data flow, with solid lines for direct transitions and dashed lines for auxiliary or derived components. The figure includes visual examples beneath key nodes to illustrate the transformation from noise to clear image, emphasizing the role of conditioning and mask-based correction in the interpolation process.
