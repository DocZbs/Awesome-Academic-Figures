# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Entropy Regularized Task Representation Learning for Offline Meta-Reinforcement Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14834

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a meta-reinforcement learning framework designed for offline policy learning using context-based task adaptation. The global layout is a horizontal flowchart, starting from the left with data inputs and progressing rightward through encoding, generation, discrimination, and reinforcement learning components, culminating in loss functions. The structure is modular, with distinct blocks representing different model components, connected by solid black lines indicating forward computation and dashed lines denoting gradient backpropagation paths.

On the far left, a blue cylinder labeled 'Offline Datasets D' receives input from a set of four training tasks depicted as human-like figures on a checkered floor, symbolizing diverse motion or robotic control scenarios. This dataset feeds into a light blue triangular module labeled 'Context c', which extracts contextual information from the tasks. The context is then passed to a green rectangular block labeled 'Encoder e_θ(c)', which maps the context to a latent representation z, represented as a white circle at the center of the diagram.

From the latent variable z, multiple pathways diverge. One path leads to a gray rectangular block labeled 'Generator G_ψ(s, z, ϵ)', which generates fake actions a^fake given state s, latent code z, and noise ϵ. This generated action is fed into an orange rectangular block labeled 'Discriminator D_ζ(a, s, z)', which distinguishes between real and fake actions. The discriminator's output connects to a light orange rectangle labeled 'ℒ_D(ζ)', representing the discriminator loss. Gradient flows (dashed lines) from this loss back to the discriminator and also to the generator via a feedback loop, indicating adversarial training. Additionally, a green box labeled 'ℒ_DML(θ)' (Distance Metric Learning loss) and another green box 'ℒ_MI(θ)' (Mutual Information loss) are connected to the latent variable z and the generator, respectively, suggesting that the encoder is trained to optimize these objectives to improve task representation quality.

Another branch from z leads to a yellow rectangular block labeled 'Actor π_φ(s, z)', which outputs policies conditioned on state and latent context. This actor is associated with a yellow box 'ℒ_Actor(φ)', indicating its loss function, with gradients flowing back to the actor. A third branch from z goes to a pink rectangular block labeled 'Critic Q_ω(s, z, a)', which evaluates state-action pairs, connected to a pink box 'ℒ_Critic(ω)' for its loss, with gradients flowing back to the critic. The critic and actor form a standard reinforcement learning component, likely part of an off-policy algorithm such as Soft Actor-Critic (SAC) or similar, adapted for context-aware policy learning.

The diagram includes several loss terms: ℒ_D(ζ) for the discriminator, ℒ_G(ψ) for the generator (connected via dashed lines from the discriminator), ℒ_Actor(φ), ℒ_Critic(ω), ℒ_DML(θ), and ℒ_MI(θ). These losses are used to update the respective model parameters (θ, ψ, φ, ω, ζ) through backpropagation, as indicated by the dashed arrows. The encoder’s training is explicitly tied to both distance metric learning and mutual information maximization, emphasizing its role in learning discriminative and informative latent representations from context.

Overall, the architecture combines adversarial learning for action generation, reinforcement learning for policy optimization, and representation learning for context encoding, all operating within an offline setting using pre-collected datasets. The visual design uses color-coded blocks (green for encoder/losses, gray for generator, orange for discriminator, yellow for actor, pink for critic) to distinguish functional modules, while solid lines denote data flow and dashed lines indicate gradient flow, providing a clear computational graph for the entire system.
