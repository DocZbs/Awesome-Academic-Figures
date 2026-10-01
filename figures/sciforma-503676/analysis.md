# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Semantic Hierarchical Prompt Tuning for Parameter-Efficient Fine-Tuning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16956

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the SHIP (Semantic Hierarchical Prompt) fine-tuning framework, divided into three main components: (a) Semantic Hierarchical Prompt Forwarding, (b) Prompt Matching Loss, and (c) Decoupled Attention. The global layout is structured horizontally, with component (a) occupying the left two-thirds of the diagram and components (b) and (c) positioned to the right within dashed boxes labeled accordingly. Component (a) illustrates the core workflow starting from training data, which is fed into a pretrained model (marked as frozen with a snowflake icon) to extract features. These features are used to compute an Affinity Matrix, visualized as a heatmap with red diagonal blocks indicating strong similarity. From this matrix, clustering is performed via average pooling to identify semantic levels S1 to SM. Each semantic level corresponds to a set of prompts: Semantic Independent Prompts (orange boxes labeled p_si^k) and Semantic Shared Prompts (yellow boxes labeled p_ss). These prompts are integrated into the transformer layers L1 to LN, where they interact with class tokens (gray boxes) and attribute prototypes (green boxes). The prompts are tunable (indicated by flame icons), while the pretrained model and embedding layers remain frozen. An Attribute Gate (AG) module processes the output z_D^i from layer i, combining it with attribute prompts to produce L_a^M (Eq. 4). The final output passes through a Head module (also tunable). Component (b) shows the Prompt Matching Loss (L_m, Eq. 5), computed between the learned prompt representation Z^D and the target prompt P. Component (c) details the Decoupled Attention mechanism (Eq. 6), which decomposes attention into three pathways: I2I (Input-to-Input), I2P (Input-to-Prompt), and P2IP (Prompt-to-Input-Prompt). Each pathway uses query (Q), key (KV) inputs—Z for I2I, Z and P for I2P, and P and [Z,P] for P2IP—and their outputs are scaled and summed to form [z', P']. The legend at the bottom clarifies the color coding: yellow for Semantic Shared Prompt, orange for Semantic Independent Prompt, gray for Class Token, green for Attribute Prototype, and brown for Attribute Prompt. Tunable components are marked with a flame icon, and frozen components with a snowflake icon. The entire framework emphasizes hierarchical prompt learning guided by semantic affinity, enhanced by prompt matching and decoupled attention mechanisms.
