# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unveiling Secrets of Brain Function With Generative Modeling: Motion Perception in Primates & Cortical Network Organization in Mice — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19845

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel architectures for variational autoencoders (VAEs), separated by a vertical dashed line, illustrating different sampling strategies within the latent space. Both architectures share a common structure: an input X is processed by an Encoder (Q), which outputs two parameters, μ(X) and Σ(X), representing the mean and covariance of a learned latent distribution. These parameters are used to compute the Kullback-Leibler divergence KL[N(μ(X), Σ(X)) || N(0, I)], shown in blue boxes, which measures the difference between the learned latent distribution and a standard normal prior.

In the left architecture, a sample z is drawn directly from the learned distribution N(μ(X), Σ(X)), as indicated by the red box labeled 'Sample z from N(μ(X), Σ(X))'. This sampled latent variable z is then passed to a Decoder (P), which reconstructs the input through a function f(z). The reconstruction error is computed as ||X - f(z)||², also shown in a blue box, and serves as the second term in the VAE loss function. The flow is unidirectional: X → Encoder → μ(X), Σ(X) → sample z → Decoder → f(z) → reconstruction loss.

In the right architecture, the sampling process is modified to enable reparameterization. After computing μ(X) and Σ(X) from the Encoder, a separate random variable ε is sampled from a standard normal distribution N(0, I), as indicated by the red box 'Sample ε from N(0, I)'. This ε is then scaled by Σ(X) (via a multiplication node *) and shifted by μ(X) (via an addition node +) to produce the latent variable z = μ(X) + Σ(X) * ε. This reparameterized z is fed into the Decoder (P) to generate f(z), and the same reconstruction loss ||X - f(z)||² is computed. The KL divergence term remains identical to the left architecture, connecting to both μ(X) and Σ(X).

Both diagrams use rectangular nodes for components (Encoder, Decoder, μ(X), Σ(X), etc.), with black arrows indicating data flow. The KL divergence and reconstruction loss terms are enclosed in blue boxes, while sampling operations are highlighted in red boxes. The reparameterization trick in the right diagram allows for gradient backpropagation through the sampling step, which is essential for training the model using stochastic gradient descent.
