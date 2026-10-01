# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UIBDiffusion: Universal Imperceptible Backdoor Attack for Diffusion Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative illustration of three diffusion-based backdoor attack methodologies: a clean diffusion model, VillanDiffusion, and UIBDiffusion (the proposed framework), across both forward and backward diffusion processes. The layout is divided into two main horizontal blocks: the top block (yellow background) depicts the forward diffusion process, while the bottom block (blue background) illustrates the backward diffusion process. Each block contains three parallel workflows, distinguished by dashed borders—blue for the clean model, red for VillanDiffusion, and green for UIBDiffusion.

In the top section, the forward diffusion process begins with an input image x₀. For the clean model, Gaussian noise is progressively added through steps governed by q(xₜ|xₜ₋₁), leading to a noisy image xₜ and eventually x_T ~ N(0,I). In VillanDiffusion, a perceptible trigger g (e.g., green glasses) is added to x₀, resulting in g + x₀. This poisoned input undergoes forward diffusion, where the trigger remains visible at intermediate steps, as indicated by the label 'Trigger perceptible during forward diffusion'. In UIBDiffusion, an imperceptible trigger τ is added to x₀, forming τ + x₀. The trigger is invisible on the input and remains imperceptible throughout the forward diffusion steps, as noted by 'Trigger imperceptible during forward diffusion'. All three processes utilize a UNet architecture to model the noise addition.

The left side of the top block shows the trigger generation pipeline: datasets are fed into a trigger generation module (represented as a blue network diagram) to produce the imperceptible trigger τ, which is then combined with clean inputs for poisoning.

In the bottom section, the backward diffusion process reconstructs images from noise. The clean model starts from pure noise with μ=0, using the UNet to denoise step-by-step via p(xₜ₋₁|xₜ), producing a clean output x₀. VillanDiffusion starts from noise shifted to μ_g, where the trigger g is embedded; during denoising, the trigger becomes visible in intermediate steps ('Trigger perceptible during backward diffusion'), leading to a backdoored output (e.g., a cat with glasses). UIBDiffusion uses noise shifted to μ_τ, matching the distribution shift of the trigger τ. Although τ is imperceptible, it is plausible to humans during backward diffusion, as shown by the reconstructed image (e.g., a cat with a hat), labeled 'Trigger plausible to humans during backward diffusion'. The figure includes Gaussian distributions illustrating the mean shifts (μ → μ_g or μ_τ) applied during backward diffusion.

Connections between modules are shown via arrows indicating data flow. A large blue curved arrow links the trigger generation module to the UIBDiffusion backward diffusion process, emphasizing the trigger's role. Text annotations clarify visibility and plausibility of triggers at each stage. The figure effectively contrasts the perceptibility and effectiveness of different triggers across diffusion phases, highlighting UIBDiffusion’s advantage in maintaining trigger imperceptibility while preserving attack efficacy.
