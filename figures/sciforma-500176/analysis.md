# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TinySubNets: An efficient and low capacity continual learning strategy — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10869

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the TinySubNetworks (TSN) framework for continual learning, comparing two scenarios: (a) disjoint weight sharing with no value overlap between tasks, and (b) value-based weight sharing where overlapping weight values are shared across tasks. The global layout is split into two side-by-side diagrams, each depicting a neural network structure with two layers of nodes (N₀,₁, N₀,₂ in Layer 0; N₁,₁, N₁,₂, N₁,₃ in Layer 1; N₂,₁, N₂,₂ in Layer 2), connected by weighted edges labeled wᵢ,ⱼ,ₖ. Each node is represented as a light green circle. The left diagram (a) corresponds to Task 1 (red) and Task 2 (blue), while the right diagram (b) includes Task 1 (red) and Task 3 (orange). The color coding is indicated in legends at the top-right of each panel.

In both diagrams, the network structure is identical, but the weight values and codebooks differ based on the sharing strategy. In diagram (a), weights are disjoint—each task maintains separate codebooks and weight values. For example, Layer 1 codebook for Task 1 (red) contains entries like '00: 0.4576', '01: 0.3456', etc., while Task 2's codebook (blue) has distinct values such as '0: 0.2453', '1: -0.1898'. Similarly, Layer 2 codebooks for each task have unique mappings. The weights on edges are shown as binary or ternary codes (e.g., 'UUU' or '10U') corresponding to these codebooks. Below each network, replay memories are shown as tables listing outputs from nodes (e.g., 'out N₁,₁ sample 1 ... sample N') for each task, colored accordingly. A Kullback-Leibler (KL) divergence metric is computed between the replay memories of different tasks, and if KL > threshold, weights are not shared (as indicated by dashed lines between nodes and separate codebooks).

In diagram (b), when KL ≤ threshold, weight sharing occurs. The codebooks for Task 1 and Task 3 now share common entries. For instance, the Layer 1 codebook for Task 3 (orange) mirrors Task 1’s codebook exactly ('00: 0.4576', '01: 0.3456', etc.), indicating shared weight values. Similarly, Layer 2 codebooks for both tasks are identical. The weights on edges reflect this sharing—edges from N₀,₁ to N₁,₁ now carry the same code '00' for both tasks, and the corresponding weight value is shared. Dashed lines between nodes indicate potential connections that are active only under sharing conditions. Replay memories for Task 1 and Task 3 are also aligned, and the KL divergence is used to trigger sharing. The figure emphasizes that TSN uses a reduced bit-width format for weights, enabling efficient storage and computation through codebook-based quantization, with dynamic sharing based on similarity measured via KL divergence.
