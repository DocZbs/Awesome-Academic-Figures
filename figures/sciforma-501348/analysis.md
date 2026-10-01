# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Shared Attention-based Autoencoder with Hierarchical Fusion-based Graph Convolution Network for sEEG SOZ Identification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12651

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct fusion strategies, labeled (A) Fusion Strategy1 (FusionS1) and (B) Fusion Strategy2 (FusionS2), within a hierarchical graph convolutional network (HFGCN) framework designed for seizure onset zone (SOZ) identification using intracranial electroencephalography (sEEG) data represented as graph data. Both diagrams share a common left-to-right processing flow starting from an input graph data representation of a brain with multicolored nodes (red for epileptic, yellow for nonepileptic) and edges, denoted by X. This input is fed into a sequence of three Graph Convolutional Layers (GCL1, GCL2, GCL3), each depicted as a small graph with colored nodes and edges, producing intermediate feature representations Ĥ₁, Ĥ₂, and Ĥ₃ respectively.

In both strategies, parallel branches are introduced after each GCL layer. These branches consist of a Disentangled Graph Convolution Layer (DGCL1, DGCL2, DGCL3), shown as a graph with dashed lines indicating disentanglement, which processes the corresponding Ĥ output. The output of each DGCL is denoted as H̃₁, H̃₂, H̃₃. Each H̃ is then passed through an L2 norm operation, represented by a yellow rectangular box. The normalized outputs are weighted by scalar weights w₁, w₂, and w₃ (w₃ implied but not labeled) and combined via element-wise multiplication (indicated by a red circle with an 'X' symbol) to produce the final output Ĥout, which is visualized as a traffic light-like bar with three colored circles (yellow, red, blue) feeding into a brain illustration showing classified regions.

The key difference between the two strategies lies in how the DGCL branches are integrated with the main GCL stream:

In (A) FusionS1: After each GCL layer, the output Ĥ is directly fed into the corresponding DGCL. The DGCL output H̃ is then normalized and weighted. The weighted outputs are combined via element-wise multiplication to form Ĥout. There is no explicit fusion of the DGCL output back into the main GCL stream before the next layer.

In (B) FusionS2: After each GCL layer, the output Ĥ is split. One path goes to the corresponding DGCL. The other path proceeds to the next GCL layer. Crucially, the output of each DGCL (H̃) is first combined with the original Ĥ from the previous GCL layer via element-wise addition (indicated by a blue circle with a '+' symbol) before being normalized. This fused representation is then weighted and combined with others via element-wise multiplication to produce Ĥout.

Both diagrams include legend boxes explaining the symbols: a blue circle with a '+' denotes 'Element Wise Addition', and a red circle with an 'X' denotes 'Element Wise Multiplication'. The color coding for brain nodes (red = Epileptic, yellow = Nonepileptic) is consistent across both panels. The overall layout is horizontal, with a clear progression from input on the left to output on the right, enclosed within light blue rounded rectangles for each strategy.
