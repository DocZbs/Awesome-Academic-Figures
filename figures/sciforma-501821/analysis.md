# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Query-centric Audio-Visual Cognition Network for Moment Retrieval, Segmentation and Step-Captioning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13543

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a query-centric audio-visual cognition network (QUAG), structured into three main stages: input modalities, core cognition modules, and downstream tasks. The global layout is left-to-right, beginning with three input streams—video frames, audio, and a textual query—on the far left, progressing through two central processing blocks labeled 'Modality-Synergistic Perception' and 'Query-Centric Cognition', and concluding with task-specific outputs on the right for moment retrieval & segmentation and step captioning.

The input streams are processed independently first. Video frames are encoded into a sequence of visual representations R_v using a blue-colored encoder block with a lock icon, symbolizing feature extraction. Similarly, audio is encoded into R_a via a green encoder block, and the query (e.g., 'How to take seasonal pan') is encoded into R_t via an orange encoder block. These three representations feed into the 'Modality-Synergistic Perception' module, which is divided into two submodules: (1) Global Contrastive Alignment and (2) Local Fine-grained Interaction.

In submodule (1), Global Contrastive Alignment, average and normalized versions of R_v and R_a (denoted R̄_v and R̄_a) are computed and then undergo dot-product operations to establish cross-modal alignment. This is visually represented by two gray boxes labeled 'dot-product', each receiving inputs from both modalities, with bidirectional arrows indicating contrastive learning between them.

Submodule (2), Local Fine-grained Interaction, performs cross-attention between R_v and R_a to generate refined representations Ŝ_v and Ŝ_a. These are then fused together via a 'fusion' block to produce a combined representation R̃_v. The cross-attention blocks are shown as gray rectangles with arrows indicating the flow from one modality to another.

The output R̃_v from this module is passed to a 'Temporal Fusion' block, which also receives R̃_c (a representation derived from the query R_t) and combines them. The fused output is then fed into the 'Query-Centric Cognition' module.

Within 'Query-Centric Cognition', the fused representation R̃_v is processed alongside R̃_c through a temporal-channel filtration layer, followed by sigmoid activation functions (σ). The outputs are then combined via element-wise multiplication (⊙) with R̃_v, and further processed through self-attention to generate the final multimodal representation R̃_m.

This R̃_m is then used by the downstream tasks. On the right side, it feeds into a 'Multi-modal Encoder', which connects to a 'Text Decoder' for generating step captions. Additionally, R̃_m is sent to 'Multi-task Prediction Heads' to predict start and end frames for moment retrieval and segmentation. The entire central processing pipeline is enclosed within a dashed box labeled 'Query-centric Audio-visual Cognition Network'.

Arrows indicate data flow: blue for visual, green for audio, orange for text/query, and purple for internal cognition pathways. The connections are directional, showing the progression from raw inputs to refined representations and finally to task outputs. The figure emphasizes a shallow-to-deep cognitive hierarchy, integrating modalities at multiple levels before producing query-aligned representations for multi-task learning.
