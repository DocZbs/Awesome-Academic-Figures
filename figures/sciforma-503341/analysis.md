# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Correcting Large Language Model Behavior via Influence Function — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16451

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the end-to-end pipeline of a method called \ourmethod, designed to correct large language model (LLM) misbehavior by identifying influential training samples and using them for optimization. The top row provides a high-level conceptual overview: on the left, an LLM generates a problematic review of 'Gone with the Wind'—highlighting racist tropes—marked with a red 'X'. This output is processed through a Linear-FAC Influence Function, which retrieves a set of recalled training samples (represented as document icons, some blue, some red). These samples are then used in an Influence-driven Bregman Optimization step, symbolized by a pen tool, to refine the model’s behavior. On the right, the corrected output is shown—a more critical, historically aware review—marked with a green check. A human user is depicted at both ends, posing the same question, emphasizing the goal of aligning model outputs with desired ethical or factual standards.

The bottom row details the technical components. It begins with a Transformer sublayer composed of an Attention (ATT) module and a Feed-Forward Network (FFN), repeated N times. The pre-activation gradient Ds is computed from the input state α. Through linearization, this gradient is approximated as Ŵκ(h, H) + b̂, where Ŵ represents the weight matrix and κ is a function of hidden states h and H. This leads to the computation of the modular gradient DŴ = Ds · aᵀ, visualized as a grid of varying gray shades indicating different gradient magnitudes. From this, an Influence Score (IF Score) is derived, represented by a star icon. The IF Score assigns positive values (blue documents) to samples that contribute to misbehavior and negative values (red documents) to those that counteract it. These scored samples are then categorized into 'Not Influential' and 'Influential Samples'. The influential ones are ranked based on their impact, using a Bregman Divergence plot showing U(x) versus θ, with a point θ^s indicating the current parameter and θ the target, and the gradient ∇U(x) guiding the optimization direction. Finally, these ranked influential samples are fed into the Influence-driven Bregman Optimization process, symbolized again by the pen tool, to adjust the model parameters and correct its behavior. The entire lower half is labeled as 'Linear-FAC for Influence Score' on the left and 'Influence-driven Bregman Optimization' on the right, clearly demarcating the two main stages of the method.
