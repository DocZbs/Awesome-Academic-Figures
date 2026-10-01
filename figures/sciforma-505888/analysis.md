# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Attention Is All You Need For Mixture-of-Depths Routing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20875

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram of the MoD model and two different routing mechanisms: standard routing and the proposed A-MoD attention routing. The overall layout is divided into three main parts labeled (a), (b), and (c), arranged horizontally with (a) on the left, and (b) and (c) on the right, connected via dotted lines from the 'Router' component in (a). Part (a), titled 'MoD Model', shows a two-block structure: a 'Previous Block' at the bottom and a 'MoD Block' above it. Both blocks contain identical internal components: a Multi-Head Self-Attention (MHSA) layer followed by an MLP layer. In the 'Previous Block', the output of MHSA feeds into MLP, and additionally, attention maps are extracted and passed to the 'Router' in the MoD Block via a dashed line labeled 'Attn. Maps'. The tokens from the previous block are fed into the MoD Block, where they are processed through a router module (a purple rounded rectangle labeled 'Router'). The router receives input from the attention maps and outputs routing decisions that determine which tokens are forwarded to the MHSA and MLP layers within the MoD Block. The output of the MHSA and MLP layers in the MoD Block is then combined with the original tokens via a residual connection before being passed forward. The router has two alternative routing paths indicated by dotted lines leading to diagrams (b) and (c). Diagram (b), labeled 'Standard Routing (as in ?)', shows a simple routing mechanism where tokens are fed into one or more additional trainable layers (represented as a purple rectangle) that produce routing scores (shown as an oval). Diagram (c), labeled 'A-MoD (ours)', illustrates the proposed method: instead of using tokens directly, it takes the 'Prev. Attention Maps' (represented as stacked small rectangles) as input, applies a 'Reduce Avg.' operation (a blue circle with a sigma symbol), and produces 'Routing Scores' (an oval). The visual modules are primarily rectangular boxes for layers (MHSA, MLP), gray squares for tokens, and ovals for scores. The router is highlighted in purple, and the A-MoD specific components (Reduce Avg., Prev. Attention Maps) are also colored blue/purple for distinction. All connections are solid arrows except for the dashed line from the Previous Block's MHSA to the Router and the dotted lines indicating alternative routing paths. The figure caption clarifies that this comparison is between the MoD model with standard routing and the proposed A-MoD attention routing.
