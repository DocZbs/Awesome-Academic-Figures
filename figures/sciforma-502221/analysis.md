# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Performance Gap in Entity Knowledge Extraction Across Modalities in Vision Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14133

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative visualization of two distinct experimental setups for manipulating hidden states within a multi-layer Transformer-based model, likely used in a vision-language model context. The layout is divided into two main vertical panes: the left pane illustrates the cross-entity replacement experiment (Section ref{sec:cross}), and the right pane shows the forward-patching experiment (Section ref{sec:forward}). Each pane contains a stacked representation of Transformer layers from Layer 0 to Layer 31, with each layer depicted as a horizontal row of rectangular tokens. The bottom of each pane includes a visual encoder (g), a projector (W), and an LM (f) embedder, which process input images and text queries respectively.

In the left pane, two separate examples are shown side-by-side. The first example uses an image of Meryl Streep with the query 'What is the name of the subject in this image?' and the second uses an image of Che Guevara with the same query. The visual encoder outputs green tokens for the Meryl Streep image and brown tokens for the Che Guevara image, which are then projected into the Transformer. The LM embedder processes the text query, producing blue tokens. At Transformer Layer 1, the hidden states corresponding to the visual tokens (green or brown) are replaced with those from the other entity’s forward pass at the same position, indicated by red arrows connecting the green and brown tokens across the two examples. This replacement occurs only at Layer 1, and the modified hidden states propagate through subsequent layers. The final output, labeled 'Generated Output', incorrectly identifies Meryl Streep as 'Che Guevara' and vice versa, demonstrating the effect of cross-entity state injection.

In the right pane, a single example is shown using the Mona Lisa image with the query 'What is the name of the painting in this image?'. The visual encoder produces green tokens with snowflake patterns, representing the visual features, while the LM embedder generates blue tokens for the text. Starting from Transformer Layer 1, the hidden states of the visual tokens are copied and 'patched' into all subsequent layers up to Layer 31, meaning they are not further processed by the Transformer. This is visually represented by the green snowflake tokens remaining unchanged from Layer 1 to Layer 31, while the blue text tokens continue to evolve. The result is a 'frozen' visual representation that is combined with the evolving text representation, leading to the correct generated output 'Mona Lisa'.

Each Transformer layer is labeled with its number, and the hidden states are annotated with subscripts indicating their origin: h^o_{i,v} for original visual tokens, h^o_{i,t} for original text tokens, h^{+2}_{i,v} for modified visual tokens, and h^{+2}_{i,t} for modified text tokens. The color coding is consistent: green for visual features, blue for text features, and red for cross-entity connections. The figure uses black horizontal bars to separate layers and white boxes at the top to represent the final output sequence. The overall structure emphasizes the flow of information through the network and the specific manipulation points for each experiment.
