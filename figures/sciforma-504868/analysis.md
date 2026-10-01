# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FACEMUG: A Multimodal Generative and Fusion Framework for Local Facial Editing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19009

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a latent warping network, composed of a stack of four identical code-to-code modulation blocks arranged vertically on the left side. Each block receives two inputs: an initial latent representation w^s0 and a reference latent vector w^r, which are fed into the first block. The output of each block, denoted as Δw_i (for i = 1 to 4), is passed to the next block as part of the residual connection, while also being outputted at the final stage as Δw_4. The entire stack is labeled 'Latent warping network'.

On the right side, enclosed within a dashed box and labeled 'Code-to-code modulation block', is the detailed internal structure of one such modulation block. This block takes two inputs: the previous latent difference Δw_{i-1} (of size t × 512) and the reference latent vector w^r (also t × 512). The block is divided into two main components: 'Channel-based cross-attention' and 'Position-based cross-attention', both operating on the same inputs.

In the channel-based cross-attention section, w^r is processed by a fully connected (FC) layer to produce query vectors w^q, which are reshaped (denoted by ⊙) into a t × t matrix. Another FC layer generates key vectors w^k, which are used in matrix multiplication (⊗) with the reshaped queries to compute an attention map. Simultaneously, Δw_{i-1} is processed by an FC layer to produce value vectors w^v. These values are multiplied element-wise (⊗) with the attention map to yield a^c.

In the position-based cross-attention section, Δw_{i-1} is processed by two FC layers to generate value vectors ŵ^v and key vectors ŵ^k. Additionally, w^r is processed by an FC layer to produce query vectors ŵ^q, which are reshaped into a 512 × 512 matrix. The reshaped queries are multiplied with the keys to form another attention map. This attention map is then multiplied element-wise with ŵ^v to produce a^p.

The outputs a^c and a^p are summed via element-wise addition (+) to form a combined attention output. This result is then processed through a gate activation mechanism: w^r is fed into two separate MLPs to generate gate parameters ξ and μ. The combined attention output is multiplied element-wise (⊙) with ξ, and the result is added to μ using element-wise addition (+), producing the final output Δw_i (t × 512).

A legend in the lower right corner defines the symbols used: → indicates data flow; ⊙ denotes reshape; ⊗ represents Hadamard product (element-wise multiplication); + signifies element-wise addition; and × stands for matrix multiplication.
