# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Through-The-Mask: Mask-based Motion Trajectories for Image-to-Video Generation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03059

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-layered attention mechanism designed for video understanding, specifically focusing on object-aware processing through masked attention blocks. The global layout is vertically stacked, depicting a hierarchical flow from input video data at the bottom to higher-level attention operations at the top. At the base, 'Video latents patches' are represented as a sequence of squares—black for general patches, light red for 'cat'-associated patches, and dark red for 'dog'-associated patches—aligned horizontally. These patches are derived from input 'Frames', shown as a stack of images featuring a cat and a dog, and corresponding 'Masks' that segment the two animals, indicating object boundaries used for token assignment.

Above the latent patches, four distinct attention layers are arranged sequentially: 'Self-Attention', 'Masked Self-Attention', 'Cross-Attention', and 'Masked Cross-Attention'. Each layer is labeled within a colored rectangular box—light blue for self-attention layers and light orange for masked variants. The 'Self-Attention' layer shows full connectivity between all latent patches via bidirectional arrows, indicating that every patch attends to every other patch. In contrast, the 'Masked Self-Attention' layer restricts attention connections to only within each object group: black patches attend only to other black patches, light red to light red, and dark red to dark red, forming separate attention subgraphs.

The 'Cross-Attention' layer introduces external prompt tokens, represented by triangles. A gray triangle labeled 'Prompt tokens' connects to all latent patches, suggesting a global context or shared prompt. The 'Masked Cross-Attention' layer further refines this by introducing object-specific prompt tokens: a light red triangle for 'Cat-specific prompt tokens' and a dark red triangle for 'Dog-specific prompt tokens'. These connect exclusively to their respective object patches, enabling localized, object-aware guidance.

Connections are depicted as directed arrows: from lower layers to upper ones, and within layers, showing information flow. All arrows point upward, indicating a feed-forward progression. The figure includes a legend at the bottom clarifying symbols: gray triangle = prompt tokens, light red triangle = cat-specific prompt tokens, dark red triangle = dog-specific prompt tokens. The overall structure emphasizes a modular, object-aware attention pipeline where masking enforces spatial and semantic locality, while cross-attention integrates external prompts for fine-grained control.
