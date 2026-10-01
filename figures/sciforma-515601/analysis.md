# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep Learning Models for Physical Layer Communications — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2502.04895

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=515600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a hierarchical taxonomy of learning models, structured as a tree diagram with a central root node labeled 'Learning Models' at the top. This root splits into two primary branches: 'Supervised' on the left and 'Unsupervised' on the right. Each of these is represented by an oval-shaped node with a shadow effect; the Supervised node includes the notation '(x, y)' above its label, while the Unsupervised node shows '(x)'.

From each of these main branches, two rectangular subcategories emerge: 'Deterministic' and 'Probabilistic'. The Deterministic nodes are shaded light gray, while the Probabilistic nodes are shaded light blue, providing visual distinction. Both deterministic and probabilistic categories further branch downward.

Under the Supervised → Deterministic path, a dashed arrow leads to the equation 'y = f(x; θ)', indicating a fixed mapping from input x to output y parameterized by θ. Under Supervised → Probabilistic, two solid arrows point to 'Discriminative' and 'Generative' subtypes. Discriminative leads via a dashed arrow to 'p(y|x; θ)', representing the conditional probability of output given input. Generative leads to 'p(x, y|θ)', denoting the joint probability distribution over inputs and outputs.

On the Unsupervised side, Unsupervised → Deterministic leads via a dashed arrow to 'z = f(x; θ)', indicating a deterministic encoding of input x into a latent representation z. Unsupervised → Probabilistic branches into three subtypes: Discriminative, Generative, and Autoencoders. Discriminative leads to 'p(z|x; θ)', modeling the probability of latent variables given input. Generative leads to two expressions: 'p(x|z; θ)' or 'p(x, z|θ)', representing either the conditional or joint distribution of input given latent variables. Autoencoders lead to both 'p(z|x; θ)' and 'p(x|z; θ)', emphasizing bidirectional modeling between input and latent space.

All connections are directed arrows, with solid arrows indicating direct categorical relationships and dashed arrows indicating mathematical formulations or functional mappings. The layout is symmetrical, with supervised and unsupervised branches mirroring each other in structure. Text labels are centered within shapes, using standard sans-serif font. The diagram uses black outlines for all shapes and arrows, with consistent spacing and alignment to convey clarity and hierarchy.
