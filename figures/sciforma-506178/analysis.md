# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Titans: Learning to Memorize at Test Time — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00663

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Memory as a Context (MAC) architecture, which is structured into three horizontal layers: Contextual Memory (top), Core (middle), and Persistent Memory (bottom). Each layer is visually distinguished by background color—beige for Contextual Memory, light blue for Core, and light pink for Persistent Memory. On the far right, a vertical legend labeled 'Test Time' indicates parameter behavior during inference: 'Learning' (orange) for Contextual Memory, 'In-context Learning' (gray) for Core, and 'Fixed' (pink) for Persistent Memory, accompanied by a snowflake icon.

In the Contextual Memory layer, a 3D grid of cubes representing 'Neural Memory' is shown. A dark green rectangular block labeled 'Retrieval' receives input from this memory and outputs a smaller green block. During test time, this component remains trainable.

The Core layer contains a dark gray block labeled 'Sequence', which feeds into a longer horizontal bar composed of white and dark gray segments. Dashed red arrows connect this bar to both the retrieved memory output above and a red brick-like block below labeled 'Learnable Data-Independent Weights' in the Persistent Memory layer. This indicates that the sequence is augmented with retrieved contextual memory and persistent weights. Following this, an 'Attention' module (purple rectangle) processes the combined sequence. The output of Attention is directed to an 'Update' module (dark green rectangle) in the Contextual Memory layer, which then feeds back into the Neural Memory via a solid red arrow, forming a feedback loop. The final output of the update process is marked with a multiplication symbol (⊗), indicating a combination or fusion step.

The Persistent Memory layer contains only the red brick block labeled 'Learnable Data-Independent Weights', which provides static, task-specific knowledge. These weights are fixed during test time, as indicated in the legend.

Arrows throughout the diagram are solid red for direct data flow and dashed red for attentional or weighting connections. The overall workflow begins with the input sequence in the Core layer, which is enhanced by retrieving information from Contextual Memory and weighted by Persistent Memory. Attention then determines which parts of the augmented sequence should be stored, updating the Contextual Memory for future use. The architecture supports continual learning where the core handles in-context adaptation, while persistent memory retains stable knowledge.
