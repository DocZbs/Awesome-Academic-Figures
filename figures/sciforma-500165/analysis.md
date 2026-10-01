# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RWKV-edge: Deeply Compressed RWKV for Resource-Constrained Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10856

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-step hierarchical head architecture for efficient token prediction at inference time, combining cluster-level selection with selective loading of token heads and approximation of logits for unselected clusters. The global layout is vertically segmented into three main steps, each with distinct components and visual representations.

Step 1: Compute embedding cluster probabilities. This step begins with the computation C = XH₁, where H₁ represents the cluster head. A table displays four clusters C₁ through C₄ with associated probabilities: C₁=0.45 (highlighted green), C₂=0.04, C₃=0.01, and C₄=0.50 (also highlighted green). Based on thresholds p_min=0.95, k_min=2, k_max=4, the selected clusters are {C₁, C₄} since their combined probability (0.95) meets or exceeds p_min. The unselected clusters are {C₂, C₃}. This selection process is visually emphasized by coloring the selected clusters green.

Step 2: Build the token head H₂ and compute 'known' logits. This step is subdivided into three parts. Part (a) shows loading only relevant neurons from the original head H, represented as a vertical stack of neurons h₁, ..., h₆₀₀, ..., h₁₂₉₆. The selected neurons form H₂ = {(h₁,h₆₀₀), (h₁₂₉₆)} = {H₂,₁, H₂,₂}, indicating two token heads corresponding to selected clusters. Part (b) computes logits using XH₂, yielding logits₁ = XH₂,₁ = [0.03, 0.39] (shown in orange boxes) and logits₂ = XH₂,₂ = [0.01] (shown in green box). Part (c) uses scatter() to place these known logits into a final logit vector, replacing positions for unselected clusters with -∞. The resulting vector has alternating finite values (0.03, 0.39, 0.01) and -∞ placeholders, visually indicating which logits are computed and which are masked.

Step 3: Approximate 'unknown' logits for unselected clusters (C₂, C₃). This step applies Equation (9): logits_unknown = logits_known × (P_unknown / P_known). The equation is displayed in a red-bordered box. The result is a final logit vector incorporating both known logits (orange and green boxes) and approximated unknown logits for unselected clusters (blue boxes with diagonal stripes). The final vector includes values 0.15, 0.03, 0.39, 0.02, 0.01, 0.01, where the blue-striped boxes represent the approximated logits for C₂ and C₃. Arrows connect Step 2's output to Step 3, showing the flow from known logits to the final combined vector. The figure uses color coding consistently: green for selected clusters, orange for known logits from selected clusters, and blue striped for approximated unknown logits, aligning with the caption’s description of hierarchical heads and selective computation.
