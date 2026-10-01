# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Titans: Learning to Memorize at Test Time — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00663

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Memory as a Gate (MAG) architecture, which consists of three main horizontal layers: Contextual Memory (top, light yellow), Core (middle, light blue), and Persistent Memory (bottom, light pink). The right side of the figure includes a vertical legend labeled 'Test Time', with three states: 'Learning' (yellow), 'In-context Learning' (gray), and 'Fixed' (pink with a snowflake icon), indicating the operational mode of each component during inference.

In the Core layer, a sequence of dark gray blocks labeled 'Sequence' flows from left to right. This sequence is processed and transformed into a new sequence composed of white and dark gray blocks, where the white blocks represent positions influenced by memory. From this transformed sequence, an arrow points to a gray rectangular module labeled 'Attention'.

The Contextual Memory layer contains a 3D grid of small cubes forming a 'Neural Memory' block. Some cubes are shaded red, indicating active or updated memory cells. An arrow from the Core's transformed sequence points to this Neural Memory, suggesting that the sequence updates or queries the memory. Another arrow from the Neural Memory points downward to the Attention module, indicating that memory content is used as input for attention computation.

The Persistent Memory layer features a row of red blocks labeled 'Learnable Data-Independent Weights'. Dashed red arrows extend upward from these weights to the white blocks in the Core’s transformed sequence, signifying that these fixed, learnable weights modulate or gate the sequence elements during processing.

From the Attention module, an arrow leads to a circular node with a multiplication symbol (⊗), representing a gating operation. This node receives two inputs: one from the Attention module and another from the Neural Memory. The output of this gate is then passed forward along the Core path, indicating that the final output is a gated combination of the attention result and memory content.

The figure emphasizes that at test time, the Persistent Memory remains 'Fixed' (as indicated by the snowflake icon), while the Contextual Memory supports 'In-context Learning' and the Core operates under 'Learning' mode. The architecture thus integrates persistent, data-independent weights with dynamically updated neural memory via an attention-based gating mechanism to control information flow through the core sequence processing path.
