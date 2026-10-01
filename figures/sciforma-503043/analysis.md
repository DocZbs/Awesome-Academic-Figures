# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DOLLAR: Few-Step Video Generation via Distillation and Latent Reward Optimization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15689

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a few-step generative framework designed for efficient and high-quality image synthesis, guided by multiple distillation and reward-based objectives. The global layout is horizontally structured, progressing from left to right, with distinct modules arranged in parallel and sequential flows. At the top-left, a sequence of input images depicting green foliage under a greenhouse structure is fed into an Encoder module, represented as a gray trapezoid with a snowflake icon indicating it is frozen. The encoded output, labeled x₀, is passed to a central Few-step Generator block, shaded light blue, which performs rapid generation from latent noise ε to intermediate latent state xₜ and finally to reconstructed latent representation x̂₀. This generator receives a textual Prompt ('Jungle from ground...') as input, shown in a yellow rounded rectangle at the bottom-left, connected via a dotted line to the generator.

Within the Few-step Generator, the transformation from ε to xₜ to x̂₀ is depicted with dashed arrows, illustrating the iterative denoising process. The reconstructed latent x̂₀ is then decoded by a Decoder module (gray trapezoid with snowflake icon), producing a reconstructed image î. This reconstructed image is evaluated by a Reward Model (gray rounded rectangle with snowflake icon), which outputs a scalar reward R(î). Simultaneously, x̂₀ is also fed into a Latent Reward Model (light green rounded rectangle), which computes a latent reward Rˡ(x̂₀). A Reward Matching Loss connects these two reward signals, ensuring alignment between pixel-space and latent-space rewards, indicated by a dashed arrow.

On the upper-right side, a Pre-trained Diffusion Model (pink rounded rectangle with snowflake icon) serves as a teacher model. It contributes two distillation losses—Consistency Distillation Loss and Variational Score Distillation Loss—both shown in gray dashed rectangles. These losses are computed using gradient backpropagation (indicated by dashed arrows with a label 'Gradient Backpropagation') from the frozen Pre-trained Diffusion Model to the Few-step Generator. Additionally, a Latent Reward Loss connects the Latent Reward Model to the Few-step Generator, guiding the generator toward higher latent rewards. All frozen components (Encoder, Decoder, Pre-trained Diffusion Model, Reward Model) are marked with snowflake icons and enclosed within a dashed box labeled 'Frozen Model'.

The diagram emphasizes efficiency through latent-space reward modeling, avoiding costly pixel-space computations and enabling non-differentiable reward models. The workflow logically progresses from prompt-guided latent generation, through distillation from a pre-trained model, to reward-based refinement in latent space, culminating in high-quality image reconstruction.
