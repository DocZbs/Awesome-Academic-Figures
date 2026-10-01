# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CRM: Retrieval Model with Controllable Condition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13844

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates three distinct paradigms in recommendation systems, labeled (a), (b), and (c), each depicting a different stage or approach in the recommendation pipeline. The overall layout is horizontal, with each paradigm presented side-by-side as a self-contained flowchart, separated by vertical spacing and labeled accordingly.

In (a) Two-Tower Retrieval Paradigm, the global structure follows a top-down flow starting from user and item features. UserFeature (represented by three blue circles) feeds into a gray rounded rectangle labeled 'User Tower', while ItemFeature (three green circles) feeds into an 'Item Tower'. Both towers output embeddings: the User Tower outputs a blue rectangular embedding, and the Item Tower outputs a green one. These embeddings are fed into a 'Similarity Function' (gray rounded rectangle), which computes similarity and passes it to a pink rounded rectangle labeled 'Classification'. A dashed box encloses this entire process, labeled 'Recommendation Request'. The green item embedding is also saved into a gray rounded rectangle labeled 'Large-scale Item Embedding Storage'. From this storage, an 'ANN Search' (arrow labeled 'ANN Search') retrieves 'Hundreds Top-k Items' (green oval). This result is sent (dashed arrow labeled 'Send') to the next stage.

In (b) Ranking Paradigm, the flow continues from the 'Hundreds Top-k Items' received from (a). The input features—UserFeature (blue circles), ItemFeature (green circles), and CrossFeature (orange circles)—are fed into a gray rounded rectangle labeled 'Mixture of Experts'. This module outputs multiple task-specific towers: 'Task Tower' for 'ctr' (click-through rate), 'lvtr' (likely view-through rate), and others, including 'watch_time' (highlighted in red text). These tasks are grouped under two pink boxes: 'Classification' (for ctr, lvtr, etc.) and 'Regression' (for watch_time). The outputs from these towers are merged via a 'Score merge' operation, represented by a formula: '(1 + ctr)^α × (1 + lvtr)^β × ... + watch_time^ε'. The merged scores are used to 'Select highest score items', resulting in a green oval labeled 'Dozen Items', which is then sent to users (indicated by a dashed arrow pointing to a smartphone icon).

In (c) Controllable Retrieval Paradigm, the structure mirrors (a) but introduces a new element. UserFeature (blue circles) and a new input called 'Condition' (red circles) both feed into the 'User Tower'. ItemFeature (green circles) still feeds into the 'Item Tower'. The resulting embeddings (blue and green rectangles) are passed to the 'Similarity Function', which leads to 'Classification' (pink rounded rectangle). This paradigm emphasizes the integration of external conditions into the user representation to enable controllable retrieval.

Visual attributes include color-coded elements: blue for user-related components, green for item-related, orange for cross-features, and red for the condition. All modules are rounded rectangles except for feature inputs (circles) and output results (ovals). Arrows indicate data flow, with solid arrows for direct computation and dashed arrows for control or data transfer steps. Text labels are placed near relevant components or along arrows to clarify operations like 'Save', 'Send', or 'ANN Search'.
