# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Schödinger Bridge Type Diffusion Models as an Extension of Variational Autoencoders — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18237

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a diagram illustrating a dual stochastic differential equation (SDE) framework for generative modeling, structured into three horizontal rows representing different SDEs and their associated distributions, with a final row showing the objective function. The global layout is left-to-right, with each row depicting a forward or reverse SDE process connecting input distributions to output distributions via learned neural network components. The top row features a light blue rounded rectangle containing the SDE dX_t = u_φ · dt + g · d̄w_t, which connects a gray box labeled x ~ μ(x) on the right to a green box labeled z ~ p_φ(z) on the left, indicating an encoding process from data distribution μ to latent distribution p_φ. The middle row contains another light blue rounded rectangle with the SDE dX_t = [u_φ - g²∇logρ_φ]·dt + g̃·d̄w_t, which connects the same green box z ~ p_φ(z) to the same gray box x ~ μ(x), but in reverse direction, representing the time-reversed encoding SDE. The bottom row shows a pink rounded rectangle with the SDE dX_t = s_θ · dt + g̃·d̄w_t, connecting a gray box z ~ π(z) on the left to a green box x ~ q_θ(x) on the right, representing the decoding process from prior distribution π to generated data distribution q_θ. The green boxes represent target or learned distributions, while gray boxes represent source or prior distributions. The blue dotted square encloses the green box z ~ p_φ(z) and the gray box z ~ π(z), along with the KL divergence term D_KL(p_φ(z)||π(z)), indicating the prior loss component of the objective. The red dotted square encloses the drift terms of the middle and bottom SDEs, and extends to the second term of the objective function, which is a time-integrated expectation over the squared difference ||u_φ(t,x_t) - g(t)²∇logρ_φ(t,x_t) - s_θ(t,x_t)||², representing the drift matching loss. Arrows indicate the direction of the SDE processes: from data to latent (top), from latent to data (middle, reversed), and from prior to generated data (bottom). A thick red arrow connects the red-dotted region of the bottom SDE to the corresponding term in the objective function, emphasizing the drift matching constraint. The entire diagram is organized to show how the model learns both the encoding and decoding SDEs while enforcing consistency between them through the objective function, which combines prior matching and drift alignment.
