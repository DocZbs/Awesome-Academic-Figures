# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Graph-Guided Textual Explanation Generation Framework — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12318

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct methods for generating post-hoc highlight explanations used to construct graph structures that guide Natural Language Explanation (NLE) generation. The layout is vertically segmented into three parts labeled (a), (b), and (c), each illustrating a different explanation type with corresponding visual annotations and connecting arrows.

In part (a) 'Highlight token explanations', two sentences are shown: 'An old man poses in front of an advertisement.' and 'A man walks by an ad.', separated by '<s>' tags. Specific tokens — 'poses', 'advertisement', 'walks', and 'ad' — are highlighted with light blue rectangular backgrounds. Dashed blue curved arrows connect these highlighted tokens across both sentences, indicating a global alignment or relationship between semantically similar tokens. These arrows suggest a token-level correspondence, such as 'poses' linking to 'walks' and 'advertisement' linking to 'ad'.

Part (b) 'Token interactive explanations' displays the same two sentences, but with different highlighting: 'poses' and 'walks' are highlighted in green, while 'advertisement' and 'ad' are highlighted in yellow. Solid green curved arrows connect 'poses' to 'walks', and solid yellow curved arrows connect 'advertisement' to 'ad'. This indicates a more interactive, possibly bidirectional, relationship between specific token pairs, emphasizing direct semantic or functional mappings between tokens in the two sentences.

Part (c) 'Span interactive explanations' shows the same sentence pair again, but now entire spans of text are highlighted. The phrase 'poses in front of' is highlighted in pink in the first sentence, and 'walks by' is highlighted in pink in the second sentence. Dashed pink curved arrows connect these spans, including internal self-loops within each span, suggesting that the explanation operates at a phrasal or syntactic level rather than individual tokens. The arrows indicate relationships not just between spans, but also within the components of each span, implying a richer, more contextual interaction.

Each section uses color-coded highlights and arrows to visually distinguish the type of explanation: blue for simple token highlighting, green and yellow for interactive token pairs, and pink for interactive spans. The figure does not include any mathematical equations or complex notation, focusing instead on visual representation of linguistic relationships. The caption clarifies that these are simplified examples, showing only a subset of possible explanations for each type, intended to guide the construction of graph structures for NLE generation.
