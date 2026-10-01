# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FAP-CD: Fairness-Driven Age-Friendly Community Planning via Conditional Diffusion Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16699

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a framework overview of the proposed FAP-CD model, structured as a dual sequential process operating over time steps from 0 to T, enclosed within a large rounded rectangular boundary. The layout is horizontally oriented, with two parallel sequences running top to bottom: an upper sequence representing variables x_t and a lower sequence representing variables e_t. Both sequences progress left to right, indicated by green solid arrows connecting consecutive time steps (e.g., x_{t-1} → x_t, e_{t-1} → e_t), with ellipses (...) denoting intermediate steps between the endpoints x_0, x_T and e_0, e_T. Each variable node (x_t, e_t) is represented as a light gray rounded rectangle with black text.

At the center of the diagram, positioned between the two sequences, is a distinct green rounded rectangle labeled 'Fair-Demand Module'. This module acts as a central component that connects the two sequences via dashed black lines, indicating bidirectional influence or information flow. Specifically, the Fair-Demand Module receives input from both sequences and provides output to both, suggesting it processes or modulates the relationship between x and e over time.

Each transition between consecutive states in the upper sequence is annotated with two probability expressions: a blue dashed arrow labeled q(x_t | x_{t-1}) pointing forward, representing a forward transition distribution, and a green solid arrow labeled p_{θ,x}(x_{t-1} | x_t, C, A̅_t) pointing backward, representing a learned reverse conditional distribution. Similarly, in the lower sequence, a blue dashed arrow labeled q(e_t | e_{t-1}) points forward, and a green solid arrow labeled p_{θ,e}(e_{t-1} | e_t, C, A̅_t) points backward. These annotations indicate that the model employs a variational inference framework, where the forward process is defined by a known transition distribution q, and the reverse process is modeled by a learnable distribution p_θ conditioned on context C and a modified adjacency matrix A̅_t, which likely encodes fairness constraints or demand-related features.

The blue dashed arrows form a feedback loop: from x_t to x_{t-1} and from e_t to e_{t-1}, suggesting a reconstruction or denoising process. The green solid arrows represent the learned generative or inference steps. The dashed black lines from the Fair-Demand Module to both sequences imply that this module injects fairness-aware or demand-driven constraints into the learning of the reverse processes p_{θ,x} and p_{θ,e}. The overall structure suggests a joint modeling of two latent or observed processes (x and e) with a shared fairness-demand mechanism that guides the learning of their reverse dynamics, likely for tasks such as fair data generation or demand prediction under fairness constraints.
