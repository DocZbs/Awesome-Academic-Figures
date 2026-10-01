# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Generative Modeling of Neural Dynamics via Latent Stochastic Differential Equations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12112

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part schematic illustrating a probabilistic generative framework for modeling neural and behavioral data, divided into an inference phase (Panel A) and a generation phase (Panel B). Both panels share a common top-down structure: a stimulus input v, processed by a Stimulus Encoder, which outputs a latent representation ηθ. This latent space is modeled using stochastic differential equations (SDEs), with Panel A showing both a generative SDE (amortized prior) and an augmented SDE (approximate posterior), while Panel B uses only the generative SDE.

In Panel A (Inference), the Stimulus Encoder (red trapezoid) receives visual stimulus v (represented as layered black and blue rectangles) and produces ηθ. The latent trajectory evolves through time via the generative SDE (dashed blue line) and the augmented SDE (dashed pink line), with points xt and xt̃ denoting states along these paths. The approximate posterior q(zt|y) is inferred from observed data y (binary spike trains) and b (continuous behavioral trace), which are fed into the Observation Encoder (purple trapezoid, labeled γφ). The outputs of the Observation Encoder are concatenated and used to condition the augmented SDE, allowing the model to learn the posterior distribution over latent states. The generative SDE represents the amortized prior p(x(0)), which is initialized from a standard normal distribution (light blue bell curve). The connection between the Observation Encoder and the latent dynamics is shown via green arrows from the encoder output to the latent state ct, indicating parameterization of the posterior SDE.

In Panel B (Generation), after training, the same Stimulus Encoder processes v to produce ηθ, which is then used to sample from the learned generative SDE. The latent states from this SDE are decoded by two separate decoders: the Neural Decoder (teal trapezoid, labeled λθ) generates synthetic neural activity ŷ (binary spike trains), and the Behavioral Decoder (teal trapezoid, labeled ρθ) generates synthetic behavior b̂ (continuous trace). These decoders receive inputs from multiple points along the latent trajectory, indicated by black lines connecting the SDE path to each decoder. The outputs ŷ and b̂ are shown below the decoders, visually matching the format of the original observations in Panel A.

The global layout is symmetrical across both panels, with a top-down flow from stimulus to latent space to outputs. The visual modules are color-coded: red for the Stimulus Encoder, purple for the Observation Encoder in Panel A, and teal for the decoders in Panel B. The SDE trajectories are represented as wavy dashed lines, with blue for the generative prior and pink for the approximate posterior in Panel A. Arrows indicate the direction of information flow, with solid arrows for direct processing and dashed arrows for probabilistic or latent dynamics. The figure includes labels for all key components, including mathematical notations such as ηθ, γφ, λθ, ρθ, and the SDE types, ensuring full methodological clarity.
