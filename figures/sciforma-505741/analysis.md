# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GliLem: Leveraging GliNER for Contextualized Lemmatization in Estonian — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20597

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic representation of the GliNER architecture for lemmatization, structured in a top-down flow. At the top, an input sequence is shown split into two parts: on the left, a pink rectangle contains the text '[ENT] remove_ning [ENT] replace_ies_y', representing masked entity tokens; adjacent to it is a gray '[SEP]' token, followed by a light green rectangle containing the text 'running man studies', which represents the context sentence. Below this input layer, a wide light blue rectangle labeled 'Pre-trained Encoder Transformer' processes the entire input sequence. The output of this encoder is a row of gray rounded rectangles labeled 'Token Representations', indicating the encoded embeddings for each token in the input. These token representations are then fed into two parallel processing layers: on the left, a beige rectangle labeled 'Entity Representation Layer' produces a row of gray rounded rectangles labeled 'Entity Representations'; on the right, a light green rectangle labeled 'Span Representation Layer' produces a row of gray rounded rectangles labeled 'Span Representations'. From these two representation layers, black arrows point downward to a central scoring matrix. This matrix is a 2x3 grid with bold borders, where rows correspond to the entity candidates ('remove_ning' and 'replace_ies_y' in pink labels) and columns correspond to the span candidates ('running', 'man', 'studies' in light green labels). Each cell in the grid contains a numerical score: the top-left cell (remove_ning → running) is highlighted in light green and shows 0.9; the top-middle (remove_ning → man) is 0.1; the top-right (remove_ning → studies) is 0.3; the bottom-left (replace_ies_y → running) is 0.3; the bottom-middle (replace_ies_y → man) is 0.2; and the bottom-right (replace_ies_y → studies) is highlighted in light green and shows 0.8. The visual design uses color coding to distinguish components: pink for entity inputs, light green for context spans, beige for entity processing, and light blue for the encoder. The connections are represented by solid black arrows indicating data flow from the encoder to the representation layers and then to the final scoring matrix, which computes alignment scores between entity candidates and context spans.
