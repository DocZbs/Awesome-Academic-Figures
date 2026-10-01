# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unpaired Multi-Domain Histopathology Virtual Staining using Dual Path Prompted Inversion — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11106

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dual-path prompted DDIM inversion framework for histopathology image processing, consisting of two parallel inversion trajectories—Path 1 (Structural Target) and Path 2 (Style Target)—that jointly optimize stain-specific prompts to preserve structural fidelity while enabling controlled style transfer. The global layout is divided into three main sections: (a) Path 1: StainStructPrompt Inversion Trajectory, (b) Path 2: StainStyle Inversion Trajectory, and (c) Pivotal Inversion StainPrompt Optimization. These are arranged vertically with shared components and feedback loops, emphasizing a coordinated optimization process.

In Path 1 (green background), an H&E input image x₀ is processed through a Feature Adapted Function G(·) before being fed into a pretrained diffusion model f_θ. The model performs deterministic sampling at each timestep using a StainStructPrompt φ_t (a T×3×H×W tensor), generating intermediate noisy images x₁, x₂, ..., x_T. The reverse DDIM process reconstructs the image as x₀^P = F_θ(x_t + φ_t, C_S), where C_S denotes the class condition for H&E stain. A reconstructed image without prompt is also shown for comparison. The StainStructPrompt is optimized via a loop labeled 'StainPrompt Optimization' to minimize structural deviation.

Path 2 (yellow background) focuses on style inversion. It begins with a Fake Feature Reference y₀, which is processed by a StainStylePrompt φ_t (also T×3×H×W). Deterministic sampling with class condition C^φ (none class condition) generates intermediate samples y₁, y₂, ..., y_T. The process then switches to a second phase using class condition C_T (target stain), producing y_{T−1}, y_{T−2}, ..., y₀^*. This results in a virtual stain image y₀^* with prompt and another without, demonstrating style transfer. The StainStylePrompt is similarly optimized via 'StainPrompt Optimization'.

Section (c) (blue background) details the pivotal inversion mechanism. It shows how the StainStructPrompt φ_t and StainStylePrompt φ_t are combined via a weighted sum (α and 1−α) to form a unified prompt. This combined prompt is used to generate a fake sample z_t under class condition C^r. Two loss functions are defined: L_struct = L_css(F(x_t^*, F(z_t))) measures structural consistency between the original and generated features, while L_style = L_MSE(y_t^*, z_t) ensures style alignment. The tuning of φ_t is guided by these losses, with α controlling the influence of the style trajectory. The diagram includes visual cues such as gear icons for optimization, noise patterns for stochastic inputs, and color-coded class conditions (C^S, C^T, C^φ) to distinguish different conditioning types. Arrows indicate data flow, with dashed lines representing optional or conditional paths, and solid lines denoting primary processes. The entire framework emphasizes maintaining structural integrity during style adaptation through dual-path optimization and controlled prompt blending.
